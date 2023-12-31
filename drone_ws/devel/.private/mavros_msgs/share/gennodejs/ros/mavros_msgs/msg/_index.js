
"use strict";

let CamIMUStamp = require('./CamIMUStamp.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let CellularStatus = require('./CellularStatus.js');
let ParamValue = require('./ParamValue.js');
let Tunnel = require('./Tunnel.js');
let HilControls = require('./HilControls.js');
let Waypoint = require('./Waypoint.js');
let PositionTarget = require('./PositionTarget.js');
let BatteryStatus = require('./BatteryStatus.js');
let Thrust = require('./Thrust.js');
let RCIn = require('./RCIn.js');
let LogEntry = require('./LogEntry.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let Param = require('./Param.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let FileEntry = require('./FileEntry.js');
let State = require('./State.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let LandingTarget = require('./LandingTarget.js');
let ActuatorControl = require('./ActuatorControl.js');
let StatusText = require('./StatusText.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let RTCM = require('./RTCM.js');
let WaypointReached = require('./WaypointReached.js');
let TerrainReport = require('./TerrainReport.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let Mavlink = require('./Mavlink.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let RCOut = require('./RCOut.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let Vibration = require('./Vibration.js');
let VehicleInfo = require('./VehicleInfo.js');
let HomePosition = require('./HomePosition.js');
let Trajectory = require('./Trajectory.js');
let ManualControl = require('./ManualControl.js');
let MountControl = require('./MountControl.js');
let GPSRTK = require('./GPSRTK.js');
let ExtendedState = require('./ExtendedState.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let GPSINPUT = require('./GPSINPUT.js');
let DebugValue = require('./DebugValue.js');
let Altitude = require('./Altitude.js');
let HilSensor = require('./HilSensor.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let ESCInfo = require('./ESCInfo.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let RTKBaseline = require('./RTKBaseline.js');
let ESCStatus = require('./ESCStatus.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let WaypointList = require('./WaypointList.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let GPSRAW = require('./GPSRAW.js');
let CommandCode = require('./CommandCode.js');
let VFR_HUD = require('./VFR_HUD.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let HilGPS = require('./HilGPS.js');
let RadioStatus = require('./RadioStatus.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let LogData = require('./LogData.js');

module.exports = {
  CamIMUStamp: CamIMUStamp,
  TimesyncStatus: TimesyncStatus,
  CellularStatus: CellularStatus,
  ParamValue: ParamValue,
  Tunnel: Tunnel,
  HilControls: HilControls,
  Waypoint: Waypoint,
  PositionTarget: PositionTarget,
  BatteryStatus: BatteryStatus,
  Thrust: Thrust,
  RCIn: RCIn,
  LogEntry: LogEntry,
  MagnetometerReporter: MagnetometerReporter,
  Param: Param,
  OverrideRCIn: OverrideRCIn,
  ESCTelemetry: ESCTelemetry,
  FileEntry: FileEntry,
  State: State,
  GlobalPositionTarget: GlobalPositionTarget,
  LandingTarget: LandingTarget,
  ActuatorControl: ActuatorControl,
  StatusText: StatusText,
  OpticalFlowRad: OpticalFlowRad,
  RTCM: RTCM,
  WaypointReached: WaypointReached,
  TerrainReport: TerrainReport,
  ESCInfoItem: ESCInfoItem,
  Mavlink: Mavlink,
  HilActuatorControls: HilActuatorControls,
  RCOut: RCOut,
  ESCStatusItem: ESCStatusItem,
  CompanionProcessStatus: CompanionProcessStatus,
  Vibration: Vibration,
  VehicleInfo: VehicleInfo,
  HomePosition: HomePosition,
  Trajectory: Trajectory,
  ManualControl: ManualControl,
  MountControl: MountControl,
  GPSRTK: GPSRTK,
  ExtendedState: ExtendedState,
  AttitudeTarget: AttitudeTarget,
  CameraImageCaptured: CameraImageCaptured,
  GPSINPUT: GPSINPUT,
  DebugValue: DebugValue,
  Altitude: Altitude,
  HilSensor: HilSensor,
  ADSBVehicle: ADSBVehicle,
  ESCInfo: ESCInfo,
  HilStateQuaternion: HilStateQuaternion,
  RTKBaseline: RTKBaseline,
  ESCStatus: ESCStatus,
  WheelOdomStamped: WheelOdomStamped,
  PlayTuneV2: PlayTuneV2,
  WaypointList: WaypointList,
  EstimatorStatus: EstimatorStatus,
  NavControllerOutput: NavControllerOutput,
  GPSRAW: GPSRAW,
  CommandCode: CommandCode,
  VFR_HUD: VFR_HUD,
  ESCTelemetryItem: ESCTelemetryItem,
  HilGPS: HilGPS,
  RadioStatus: RadioStatus,
  OnboardComputerStatus: OnboardComputerStatus,
  LogData: LogData,
};
