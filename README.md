# Simulation of Drone-People Collision Avoidance

<p align="center">
    <img width="500" src="https://github.com/eddyev00/simulation_collision_avoidance/assets/155014106/d9c6035c-3f43-4cb9-946f-a744522bd573" alt="Material Bread logo">
</p>

Explore a Gazebo simulation featuring drone people avoidance using ArduPilot, ROS (Noetic), MiDaS and YOLOv8. Witness the integration of advanced algorithms and computer vision as the drone navigates dynamically through people in a simulated environment. After the drone has detected and estimated that a person is too close to it, the control algorithm presents two possible courses of action:

1. **Drone stops and the individual moves away**
![drone_person_moves](https://github.com/eddyev00/simulation_collision_avoidance/assets/155014106/a992617a-187b-40eb-8d5c-d5b3649b2e8c )
After the person has moved, the control algorithm incorporates a waiting period to observe whether the person exits the frame. If the person is no longer present, the UAV proceeds along its designated path.

2. **The UAV halts and the person does not move away**
![emergency_path (1)](https://github.com/eddyev00/simulation_collision_avoidance/assets/155014106/3421b3bd-9860-425d-bf0a-33f3b381fc19)
The UAV identifies an individual and comes to a halt. If the subject remains stationary, the drone initiates a sequence where it ascends to a predefined safety altitude and subsequently hovers directly over the person towards the waypoint it was previously following.


# Watch Demo

[![Gazebo Simulation Drone People Avoidance](http://img.youtube.com/vi/eclh6aU6Ip8/0.jpg)](https://youtu.be/eclh6aU6Ip8?si=TmuFmULtceWwwfze)

# Instructions 
1. Follow the tutorial in https://www.youtube.com/@IntelligentQuads/playlists for the installation steps of Ardupilot and the neccesarry simulation in Gazebo.
2. Insert the files inside /home/user/drone_ws/src/iq_gnc/scripts
3. "og_drone_path_control.py" contains the emergency manouver i.e. when the drone flies over the person.
4. "modified_drone_control.py" contains the emergency manouver and adds a second feature which allows the drone to continue the previous path if the person moves away within a specified timeframe.
