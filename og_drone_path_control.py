#! /usr/bin/env python
# Import ROS.
import rospy
# Importing BoundingBoxes message from package darknet_ros_msgs.
#from darknet_ros_msgs.msg import BoundingBoxes
# Import the API.
from iq_gnc.py_gnc_functions import *
# To print colours (optional).
from iq_gnc.PrintColours import *
from yolov8_msgs.msg import DepthResult
import time







class drone_control():

    def __init__(self):
        
        # Initialise ROS node
        rospy.init_node("drone_path_control")
        # Creating a subscriber for the topic "/depth_inference_result".
        rospy.Subscriber(name="/depth_inference_result",
                        data_class=DepthResult,
                        callback=self.control_cb,
                        queue_size=1)
        
        ############## Important Variables #################################33
        #avoids errors when callback function is called before we get any waypoints from the flight.
        self.start_flag=False

        #Mode flag
        self.control_mode = False
        # True - Near person, so distance is around 1 m to the person. Safety Mechanism -> go up to an altitude of 2.1 meters 
        # False - Far from person -> distance > 1.5 m

        #Standard altitude (altitude for takeoff and which the drone will try to maintain)
        self.standard_altitude = 1.7
        #Emergency altitude (In optitrack I decided for 2.1 meters)
        self.emergency_altitude = 2.1
        #clear deque


        ######## Drone Initialization ################
        # Create an object for the API.
        self.drone = gnc_api()
        # Wait for FCU connection.
        self.drone.wait4connect()
        # Wait for the mode to be switched.
        self.drone.wait4start()
        # Create local reference frame.
        self.drone.initialize_local_frame()
        # Request takeoff with an altitude of 1.7m.
        self.drone.takeoff(self.standard_altitude)
        # Execute planned path after takeoff.
        self.execute_flight()




    def control_cb(self,msg):

        #if (self.start_flag):
            # Callback function of the subscriber.
            # Assigning bounding_boxes of the message to bbox variable.
            depth_result = msg.depth_result
            
            # Printing the detected object with its probability in percentage.
            #rospy.loginfo("Received depth result: {}".format(depth_result))

            if depth_result != "SAFE":
                # Setting mode_g to True to state we have to begin our safety control mechanism.
                self.control_mode = True
                rospy.loginfo("Received depth result: TOO CLOSE")
                rospy.loginfo(
                    CYELLOW+ "Drone is too close to a worker. Starting safety control flight." + CEND)

    def avoidance_manouver(self,x,y,psi):
        #Completely stop
        self.drone.set_mode("Brake")
        time.sleep(3)
        self.drone.set_mode("Guided")
        x_safety= self.drone.get_current_location().x
        y_safety= self.drone.get_current_location().y

        # Alert Message
        print((CGREEN2 + "Object avoidance manouver" + CEND))
        
        #Flag for stop_to_safety loop
        stop_to_satefy_on = True
        #Flag for manouver_on loop
        manouver_on=True
        #Falg for return_to_altitude loop
        return_to_altitude = True

        #To fly to safety altitude on current position

        while(stop_to_satefy_on):
            self.drone.set_destination( x_safety, y_safety, self.emergency_altitude, psi)
            if self.drone.check_waypoint_reached():
                    stop_to_satefy_on=False
                    break

        #To maintain avoidance manouver until we reach the point.
        while(manouver_on):
            self.drone.set_destination(
            x, y, self.emergency_altitude, psi)
            if self.drone.check_waypoint_reached():
                    manouver_on=False
                    break
            
        #Return to standard altitude after waypoint reached
        while(return_to_altitude):
            self.drone.set_destination(
            x, y, self.standard_altitude, psi)
            if self.drone.check_waypoint_reached():
                    return_to_altitude = False
                    break
            
        #avoidance method is finished. We can go back to normal mode and continue with the Waypoints.
        self.control_mode = False
        

    def execute_flight(self):
        
        #starts process and allows callback function to work
        self.start_flag=True

        ######## Specify some waypoints ###########
        # straight line
        #wps = [[0, 0, 1.7, 0],[0,5,1.7,0]]
        #square path
        wps = [[0, 0, 1.7, 0], [4, 0, 1.7, -90], [4, 4, 1.7, 0], [0, 4, 1.7, 90], [0, 0, 1.7, 180], [0, 0, 1.7, 0]]
        
        # Specify control loop rate. We recommend a low frequency to not over load the FCU with messages. Too many messages will cause the drone to be sluggish.
        rate = rospy.Rate(10)
        i = 0
        
        while i < len(wps):
            x, y, z, psi = wps[i][0], wps[i][1], wps[i][2], wps[i][3]

            if not self.control_mode:
                self.drone.set_destination(
                    x, y, z, psi)
                rate.sleep()
                if self.drone.check_waypoint_reached():
                    i += 1
            elif self.control_mode:
                self.avoidance_manouver(x, y, psi)
                i += 1 #Waypoint should be reached already after this, so we go to the next point.

        # Land after all waypoints are reached.
        (CGREEN2 + "Navigation Successfully Finished. Proceed to Landing" + CEND)
        self.drone.land() #Landing command.


        
 
        
        # After execution of flying path, we want to shutdown node. 
        rospy.signal_shutdown('Program completed successfully.')


# Driver code.
if __name__ == '__main__':

    drone_control = drone_control()
    rospy.spin()

    
    # try:
    #     main()
    #     # Used to keep the node running.
    #     rospy.spin()
    # except KeyboardInterrupt:
    #     rospy.signal_shutdown("KeyboardInterrupt")
    #     exit()