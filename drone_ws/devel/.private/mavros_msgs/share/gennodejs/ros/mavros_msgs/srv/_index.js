
"use strict";

let CommandBool = require('./CommandBool.js')
let StreamRate = require('./StreamRate.js')
let WaypointPull = require('./WaypointPull.js')
let FileRead = require('./FileRead.js')
let CommandInt = require('./CommandInt.js')
let LogRequestList = require('./LogRequestList.js')
let WaypointClear = require('./WaypointClear.js')
let FileChecksum = require('./FileChecksum.js')
let CommandTOL = require('./CommandTOL.js')
let ParamGet = require('./ParamGet.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let FileMakeDir = require('./FileMakeDir.js')
let FileClose = require('./FileClose.js')
let LogRequestData = require('./LogRequestData.js')
let WaypointPush = require('./WaypointPush.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let CommandHome = require('./CommandHome.js')
let CommandAck = require('./CommandAck.js')
let ParamSet = require('./ParamSet.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let SetMavFrame = require('./SetMavFrame.js')
let SetMode = require('./SetMode.js')
let FileTruncate = require('./FileTruncate.js')
let FileRename = require('./FileRename.js')
let FileWrite = require('./FileWrite.js')
let ParamPush = require('./ParamPush.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let MountConfigure = require('./MountConfigure.js')
let CommandLong = require('./CommandLong.js')
let FileRemove = require('./FileRemove.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let ParamPull = require('./ParamPull.js')
let MessageInterval = require('./MessageInterval.js')
let FileOpen = require('./FileOpen.js')
let FileList = require('./FileList.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')

module.exports = {
  CommandBool: CommandBool,
  StreamRate: StreamRate,
  WaypointPull: WaypointPull,
  FileRead: FileRead,
  CommandInt: CommandInt,
  LogRequestList: LogRequestList,
  WaypointClear: WaypointClear,
  FileChecksum: FileChecksum,
  CommandTOL: CommandTOL,
  ParamGet: ParamGet,
  FileRemoveDir: FileRemoveDir,
  FileMakeDir: FileMakeDir,
  FileClose: FileClose,
  LogRequestData: LogRequestData,
  WaypointPush: WaypointPush,
  VehicleInfoGet: VehicleInfoGet,
  CommandHome: CommandHome,
  CommandAck: CommandAck,
  ParamSet: ParamSet,
  CommandTriggerControl: CommandTriggerControl,
  WaypointSetCurrent: WaypointSetCurrent,
  SetMavFrame: SetMavFrame,
  SetMode: SetMode,
  FileTruncate: FileTruncate,
  FileRename: FileRename,
  FileWrite: FileWrite,
  ParamPush: ParamPush,
  LogRequestEnd: LogRequestEnd,
  MountConfigure: MountConfigure,
  CommandLong: CommandLong,
  FileRemove: FileRemove,
  CommandVtolTransition: CommandVtolTransition,
  ParamPull: ParamPull,
  MessageInterval: MessageInterval,
  FileOpen: FileOpen,
  FileList: FileList,
  CommandTriggerInterval: CommandTriggerInterval,
};
