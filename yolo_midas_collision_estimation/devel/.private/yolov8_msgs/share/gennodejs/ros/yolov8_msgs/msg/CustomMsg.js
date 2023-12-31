// Auto-generated. Do not edit!

// (in-package yolov8_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let geometry_msgs = _finder('geometry_msgs');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class CustomMsg {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.yolo_output = null;
      this.optitrack_output = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('yolo_output')) {
        this.yolo_output = initObj.yolo_output
      }
      else {
        this.yolo_output = 0.0;
      }
      if (initObj.hasOwnProperty('optitrack_output')) {
        this.optitrack_output = initObj.optitrack_output
      }
      else {
        this.optitrack_output = new geometry_msgs.msg.PoseStamped();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type CustomMsg
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [yolo_output]
    bufferOffset = _serializer.float64(obj.yolo_output, buffer, bufferOffset);
    // Serialize message field [optitrack_output]
    bufferOffset = geometry_msgs.msg.PoseStamped.serialize(obj.optitrack_output, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type CustomMsg
    let len;
    let data = new CustomMsg(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [yolo_output]
    data.yolo_output = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [optitrack_output]
    data.optitrack_output = geometry_msgs.msg.PoseStamped.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += geometry_msgs.msg.PoseStamped.getMessageSize(object.optitrack_output);
    return length + 8;
  }

  static datatype() {
    // Returns string type for a message object
    return 'yolov8_msgs/CustomMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '88d09e9aa5098510534f16d66c34f02b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CustomMsg.msg
    std_msgs/Header header
    float64 yolo_output
    geometry_msgs/PoseStamped optitrack_output
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new CustomMsg(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.yolo_output !== undefined) {
      resolved.yolo_output = msg.yolo_output;
    }
    else {
      resolved.yolo_output = 0.0
    }

    if (msg.optitrack_output !== undefined) {
      resolved.optitrack_output = geometry_msgs.msg.PoseStamped.Resolve(msg.optitrack_output)
    }
    else {
      resolved.optitrack_output = new geometry_msgs.msg.PoseStamped()
    }

    return resolved;
    }
};

module.exports = CustomMsg;
