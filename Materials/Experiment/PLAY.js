// PLAY

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'PLAY';  // from the Builder filename that created this script
let expInfo = {"participant*": '<Participant code>'};

// Start code blocks for 'Before Experiment'
let thisGroup = Math.floor(Math.random() * (3 - 1) + 1);
let i = Math.floor(Math.random() * (5 - 1) + 1);
let j = Math.floor(Math.random() * (3 - 1) + 1);
let PREtrials = (("Trials/PRE_" + j.toString()) + ".xlsx");
let ACQtrials = (("Trials/ACQ_" + i.toString()) + ".xlsx");
let GENtrials = (("Trials/GEN_" + i.toString()) + ".xlsx");
let EXTtrials = (("Trials/EXT_" + i.toString()) + ".xlsx");
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IDcodesRoutineBegin());
flowScheduler.add(IDcodesRoutineEachFrame());
flowScheduler.add(IDcodesRoutineEnd());
flowScheduler.add(LocationCodesRoutineBegin());
flowScheduler.add(LocationCodesRoutineEachFrame());
flowScheduler.add(LocationCodesRoutineEnd());
const IntroLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(IntroLoopBegin(IntroLoopScheduler));
flowScheduler.add(IntroLoopScheduler);
flowScheduler.add(IntroLoopEnd);
const VolumeSetupLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(VolumeSetupLoopBegin(VolumeSetupLoopScheduler));
flowScheduler.add(VolumeSetupLoopScheduler);
flowScheduler.add(VolumeSetupLoopEnd);
flowScheduler.add(UStestRoutineBegin());
flowScheduler.add(UStestRoutineEachFrame());
flowScheduler.add(UStestRoutineEnd());
flowScheduler.add(USRatingRoutineBegin());
flowScheduler.add(USRatingRoutineEachFrame());
flowScheduler.add(USRatingRoutineEnd());
const PriorBeliefsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PriorBeliefsLoopBegin(PriorBeliefsLoopScheduler));
flowScheduler.add(PriorBeliefsLoopScheduler);
flowScheduler.add(PriorBeliefsLoopEnd);
const PRELoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PRELoopBegin(PRELoopScheduler));
flowScheduler.add(PRELoopScheduler);
flowScheduler.add(PRELoopEnd);
const ConditioningLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ConditioningLoopBegin(ConditioningLoopScheduler));
flowScheduler.add(ConditioningLoopScheduler);
flowScheduler.add(ConditioningLoopEnd);
const ACQLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ACQLoopBegin(ACQLoopScheduler));
flowScheduler.add(ACQLoopScheduler);
flowScheduler.add(ACQLoopEnd);
flowScheduler.add(USRatingRoutineBegin());
flowScheduler.add(USRatingRoutineEachFrame());
flowScheduler.add(USRatingRoutineEnd());
const GENLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(GENLoopBegin(GENLoopScheduler));
flowScheduler.add(GENLoopScheduler);
flowScheduler.add(GENLoopEnd);
flowScheduler.add(USRatingRoutineBegin());
flowScheduler.add(USRatingRoutineEachFrame());
flowScheduler.add(USRatingRoutineEnd());
const EXTLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(EXTLoopBegin(EXTLoopScheduler));
flowScheduler.add(EXTLoopScheduler);
flowScheduler.add(EXTLoopEnd);
const EndLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(EndLoopBegin(EndLoopScheduler));
flowScheduler.add(EndLoopScheduler);
flowScheduler.add(EndLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli_neck/stim3.png', 'path': 'stimuli_neck/stim3.png'},
    {'name': 'TEXT_NL/Slide3.png', 'path': 'TEXT_NL/Slide3.png'},
    {'name': 'TEXT_ENG/Slide2.png', 'path': 'TEXT_ENG/Slide2.png'},
    {'name': 'stimuli_misc/location_knee.png', 'path': 'stimuli_misc/location_knee.png'},
    {'name': 'Trials/ACQ_1.xlsx', 'path': 'Trials/ACQ_1.xlsx'},
    {'name': 'Trials/EXT_4.xlsx', 'path': 'Trials/EXT_4.xlsx'},
    {'name': 'sound_Silence.wav', 'path': 'sound_Silence.wav'},
    {'name': 'TEXT_NL/Slide7.png', 'path': 'TEXT_NL/Slide7.png'},
    {'name': 'Trials/EXT_3.xlsx', 'path': 'Trials/EXT_3.xlsx'},
    {'name': 'TEXT_NL/Slide4.png', 'path': 'TEXT_NL/Slide4.png'},
    {'name': 'TEXT_NL/Slide5.png', 'path': 'TEXT_NL/Slide5.png'},
    {'name': 'TEXT_DE/Slide5.png', 'path': 'TEXT_DE/Slide5.png'},
    {'name': 'TEXT_DE/Slide3.png', 'path': 'TEXT_DE/Slide3.png'},
    {'name': 'Trials/PRE_2.xlsx', 'path': 'Trials/PRE_2.xlsx'},
    {'name': 'TEXT_NL/Slide2.png', 'path': 'TEXT_NL/Slide2.png'},
    {'name': 'TEXT_DE/Slide8.png', 'path': 'TEXT_DE/Slide8.png'},
    {'name': 'stimuli_hand/stim4.png', 'path': 'stimuli_hand/stim4.png'},
    {'name': 'TEXT_ENG/Slide5.png', 'path': 'TEXT_ENG/Slide5.png'},
    {'name': 'TEXT_ESP/Slide6.png', 'path': 'TEXT_ESP/Slide6.png'},
    {'name': 'TEXT_ENG/Slide3.png', 'path': 'TEXT_ENG/Slide3.png'},
    {'name': 'TEXT_ENG/Slide1.png', 'path': 'TEXT_ENG/Slide1.png'},
    {'name': 'Trials/ACQ_3.xlsx', 'path': 'Trials/ACQ_3.xlsx'},
    {'name': 'TEXT_DE/Slide2.png', 'path': 'TEXT_DE/Slide2.png'},
    {'name': 'TEXT_ESP/Slide5.png', 'path': 'TEXT_ESP/Slide5.png'},
    {'name': 'sound_Scream.wav', 'path': 'sound_Scream.wav'},
    {'name': 'TEXT_ENG/Slide7.png', 'path': 'TEXT_ENG/Slide7.png'},
    {'name': 'stimuli_misc/location_hand.png', 'path': 'stimuli_misc/location_hand.png'},
    {'name': 'stimuli_neck/stim4.png', 'path': 'stimuli_neck/stim4.png'},
    {'name': 'stimuli_misc/logo_BPP.png', 'path': 'stimuli_misc/logo_BPP.png'},
    {'name': 'stimuli_neck/stim2.png', 'path': 'stimuli_neck/stim2.png'},
    {'name': 'stimuli_misc/location_back.png', 'path': 'stimuli_misc/location_back.png'},
    {'name': 'stimuli_back/stim5.png', 'path': 'stimuli_back/stim5.png'},
    {'name': 'TEXT_ENG/Slide6.png', 'path': 'TEXT_ENG/Slide6.png'},
    {'name': 'stimuli_knee/stim3.png', 'path': 'stimuli_knee/stim3.png'},
    {'name': 'TEXT_NL/Slide6.png', 'path': 'TEXT_NL/Slide6.png'},
    {'name': 'TEXT_DE/Slide9.png', 'path': 'TEXT_DE/Slide9.png'},
    {'name': 'stimuli_knee/stim6.png', 'path': 'stimuli_knee/stim6.png'},
    {'name': 'TEXT_DE/Slide4.png', 'path': 'TEXT_DE/Slide4.png'},
    {'name': 'TEXT_DE/Slide7.png', 'path': 'TEXT_DE/Slide7.png'},
    {'name': 'stimuli_back/stim6.png', 'path': 'stimuli_back/stim6.png'},
    {'name': 'Trials/ACQ_2.xlsx', 'path': 'Trials/ACQ_2.xlsx'},
    {'name': 'Trials/InstructionsLoop.xlsx', 'path': 'Trials/InstructionsLoop.xlsx'},
    {'name': 'stimuli_back/stim2.png', 'path': 'stimuli_back/stim2.png'},
    {'name': 'stimuli_knee/stim1.png', 'path': 'stimuli_knee/stim1.png'},
    {'name': 'Trials/GEN_4.xlsx', 'path': 'Trials/GEN_4.xlsx'},
    {'name': 'stimuli_misc/icon_Alex.png', 'path': 'stimuli_misc/icon_Alex.png'},
    {'name': 'TEXT_NL/Slide8.png', 'path': 'TEXT_NL/Slide8.png'},
    {'name': 'Trials/GEN_3.xlsx', 'path': 'Trials/GEN_3.xlsx'},
    {'name': 'stimuli_misc/logo_UM.png', 'path': 'stimuli_misc/logo_UM.png'},
    {'name': 'stimuli_misc/placeholder.png', 'path': 'stimuli_misc/placeholder.png'},
    {'name': 'stimuli_neck/stim6.png', 'path': 'stimuli_neck/stim6.png'},
    {'name': 'Trials/PRE_1.xlsx', 'path': 'Trials/PRE_1.xlsx'},
    {'name': 'TEXT_ENG/Slide4.png', 'path': 'TEXT_ENG/Slide4.png'},
    {'name': 'TEXT_ESP/Slide7.png', 'path': 'TEXT_ESP/Slide7.png'},
    {'name': 'TEXT_ENG/Slide9.png', 'path': 'TEXT_ENG/Slide9.png'},
    {'name': 'stimuli_hand/stim2.png', 'path': 'stimuli_hand/stim2.png'},
    {'name': 'TEXT_ENG/Slide8.png', 'path': 'TEXT_ENG/Slide8.png'},
    {'name': 'stimuli_knee/stim2.png', 'path': 'stimuli_knee/stim2.png'},
    {'name': 'stimuli_hand/stim6.png', 'path': 'stimuli_hand/stim6.png'},
    {'name': 'Trials/GEN_1.xlsx', 'path': 'Trials/GEN_1.xlsx'},
    {'name': 'Trials/ACQ_4.xlsx', 'path': 'Trials/ACQ_4.xlsx'},
    {'name': 'Trials/GEN_2.xlsx', 'path': 'Trials/GEN_2.xlsx'},
    {'name': 'TEXT_ESP/Slide9.png', 'path': 'TEXT_ESP/Slide9.png'},
    {'name': 'stimuli_hand/stim3.png', 'path': 'stimuli_hand/stim3.png'},
    {'name': 'stimuli_hand/stim5.png', 'path': 'stimuli_hand/stim5.png'},
    {'name': 'stimuli_misc/location_neck.png', 'path': 'stimuli_misc/location_neck.png'},
    {'name': 'stimuli_back/stim4.png', 'path': 'stimuli_back/stim4.png'},
    {'name': 'TEXT_ESP/Slide2.png', 'path': 'TEXT_ESP/Slide2.png'},
    {'name': 'stimuli_knee/stim4.png', 'path': 'stimuli_knee/stim4.png'},
    {'name': 'TEXT_NL/Slide1.png', 'path': 'TEXT_NL/Slide1.png'},
    {'name': 'TEXT_ESP/Slide1.png', 'path': 'TEXT_ESP/Slide1.png'},
    {'name': 'TEXT_ESP/Slide8.png', 'path': 'TEXT_ESP/Slide8.png'},
    {'name': 'stimuli_back/stim1.png', 'path': 'stimuli_back/stim1.png'},
    {'name': 'stimuli_neck/stim1.png', 'path': 'stimuli_neck/stim1.png'},
    {'name': 'stimuli_back/stim3.png', 'path': 'stimuli_back/stim3.png'},
    {'name': 'TEXT_DE/Slide6.png', 'path': 'TEXT_DE/Slide6.png'},
    {'name': 'sound_TestTone.wav', 'path': 'sound_TestTone.wav'},
    {'name': 'Trials/EXT_1.xlsx', 'path': 'Trials/EXT_1.xlsx'},
    {'name': 'TEXT_NL/Slide9.png', 'path': 'TEXT_NL/Slide9.png'},
    {'name': 'stimuli_neck/stim5.png', 'path': 'stimuli_neck/stim5.png'},
    {'name': 'stimuli_hand/stim1.png', 'path': 'stimuli_hand/stim1.png'},
    {'name': 'TEXT_ESP/Slide3.png', 'path': 'TEXT_ESP/Slide3.png'},
    {'name': 'TEXT_ESP/Slide4.png', 'path': 'TEXT_ESP/Slide4.png'},
    {'name': 'TEXT_DE/Slide1.png', 'path': 'TEXT_DE/Slide1.png'},
    {'name': 'stimuli_knee/stim5.png', 'path': 'stimuli_knee/stim5.png'},
    {'name': 'Trials/EXT_2.xlsx', 'path': 'Trials/EXT_2.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo["date"] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo["expName"] = expName;
  expInfo["psychopyVersion"] = "2022.1.3";
  expInfo["OS"] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant*"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo["frameRate"] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo["frameRate"] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo["frameRate"]);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var IDcodesClock;
var currTest;
var lang;
var ContinueArrow_0;
var ContinueClick_0;
var logo_UM;
var logo_BPP;
var EnglishBox;
var DutchBox;
var GermanBox;
var SpanishBox;
var EnglishText;
var DutchText;
var GermanText;
var SpanishText;
var languageMouse;
var LocationCodesClock;
var polygonBack;
var locationBack;
var polygonHand;
var locationHand;
var polygonKnee;
var locationKnee;
var polygonNeck;
var locationNeck;
var locationMouse;
var locationInstruction;
var InstructionsClock;
var InstructionText;
var InstructionImage;
var ContinueClick_1;
var ContinueArrow_1;
var CalibrationClock;
var CalibrationText;
var ContinueArrow_2;
var ContinueClick_2;
var soundRED;
var soundBLUE;
var iconMouse;
var iconSoundRED;
var iconSoundBLUE;
var UStestClock;
var fixation1;
var testUS;
var USRatingClock;
var fixation0;
var USunpl;
var Q_USunpl;
var TrialClock;
var fixation;
var CS;
var Question;
var RatingScale;
var soundUS;
var fixationJitter;
var soundTest;
var iconSoundTest;
var mouseSoundTest;
var globalClock;
var routineTimer;
var location;

async function experimentInit() {
  // Initialize components for Routine "IDcodes"
  IDcodesClock = new util.Clock();
  currTest = "icons/placeholder.png";
  lang = "EN";
  ContinueArrow_0 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'ContinueArrow_0', 
    vertices: [[0,0],[0,-0.5],[0.7,-0.5],[0.7,-0.7],[1.1,-0.25],[0.7,0.2],[0.7,0],[0,0]], size:[0.2, 0.2],
    ori: 0.0, pos: [0.35, (- 0.3)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.1294, 0.8667, 0.1294]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  ContinueClick_0 = new core.Mouse({
    win: psychoJS.window,
  });
  ContinueClick_0.mouseClock = new util.Clock();
  logo_UM = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo_UM', units : undefined, 
    image : 'stimuli_misc/logo_UM.png', mask : undefined,
    ori : 0.0, pos : [(- 0.3), 0.25], size : [0.3, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  logo_BPP = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo_BPP', units : undefined, 
    image : 'stimuli_misc/logo_BPP.png', mask : undefined,
    ori : 0.0, pos : [0.3, 0.25], size : [0.3, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  EnglishBox = new visual.Rect ({
    win: psychoJS.window, name: 'EnglishBox', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, pos: [0.45, (- 0.12)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.8824, 0.9451, 1.0]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  DutchBox = new visual.Rect ({
    win: psychoJS.window, name: 'DutchBox', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, pos: [0.15, (- 0.12)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.8824, 0.9451, 1.0]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  GermanBox = new visual.Rect ({
    win: psychoJS.window, name: 'GermanBox', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, pos: [(- 0.15), (- 0.12)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.8824, 0.9451, 1.0]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  SpanishBox = new visual.Rect ({
    win: psychoJS.window, name: 'SpanishBox', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, pos: [(- 0.45), (- 0.12)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.8824, 0.9451, 1.0]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  EnglishText = new visual.TextStim({
    win: psychoJS.window,
    name: 'EnglishText',
    text: 'ENGLISH',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.12)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  DutchText = new visual.TextStim({
    win: psychoJS.window,
    name: 'DutchText',
    text: 'NEDERLANDS',
    font: 'Arial',
    units: undefined, 
    pos: [0.15, (- 0.12)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  GermanText = new visual.TextStim({
    win: psychoJS.window,
    name: 'GermanText',
    text: 'DEUTSCH',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.15), (- 0.12)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  SpanishText = new visual.TextStim({
    win: psychoJS.window,
    name: 'SpanishText',
    text: 'ESPANOL',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.12)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -12.0 
  });
  
  languageMouse = new core.Mouse({
    win: psychoJS.window,
  });
  languageMouse.mouseClock = new util.Clock();
  // Initialize components for Routine "LocationCodes"
  LocationCodesClock = new util.Clock();
  polygonBack = new visual.Rect ({
    win: psychoJS.window, name: 'polygonBack', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, pos: [0.2, (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  locationBack = new visual.ImageStim({
    win : psychoJS.window,
    name : 'locationBack', units : undefined, 
    image : 'stimuli_misc/location_back.png', mask : undefined,
    ori : 0.0, pos : [0.2, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  polygonHand = new visual.Rect ({
    win: psychoJS.window, name: 'polygonHand', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, pos: [0.2, 0.2],
    lineWidth: 1.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  locationHand = new visual.ImageStim({
    win : psychoJS.window,
    name : 'locationHand', units : undefined, 
    image : 'stimuli_misc/location_hand.png', mask : undefined,
    ori : 0.0, pos : [0.2, 0.2], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  polygonKnee = new visual.Rect ({
    win: psychoJS.window, name: 'polygonKnee', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, pos: [(- 0.2), 0.2],
    lineWidth: 1.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  locationKnee = new visual.ImageStim({
    win : psychoJS.window,
    name : 'locationKnee', units : undefined, 
    image : 'stimuli_misc/location_knee.png', mask : undefined,
    ori : 0.0, pos : [(- 0.2), 0.2], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  polygonNeck = new visual.Rect ({
    win: psychoJS.window, name: 'polygonNeck', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, pos: [(- 0.2), (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  locationNeck = new visual.ImageStim({
    win : psychoJS.window,
    name : 'locationNeck', units : undefined, 
    image : 'stimuli_misc/location_neck.png', mask : undefined,
    ori : 0.0, pos : [(- 0.2), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  locationMouse = new core.Mouse({
    win: psychoJS.window,
  });
  locationMouse.mouseClock = new util.Clock();
  locationInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'locationInstruction',
    text: 'Please select your pain location or the pain location you have been assigned to\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(-1.0), (-1.0), (-1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  InstructionText = new visual.ImageStim({
    win : psychoJS.window,
    name : 'InstructionText', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.2), 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  InstructionImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'InstructionImage', units : undefined, 
    image : 'stimuli_misc/icon_Alex.png', mask : undefined,
    ori : 0.0, pos : [0.55, 0.15], size : [0.3, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  ContinueClick_1 = new core.Mouse({
    win: psychoJS.window,
  });
  ContinueClick_1.mouseClock = new util.Clock();
  ContinueArrow_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'ContinueArrow_1', 
    vertices: [[0,0],[0,-0.5],[0.7,-0.5],[0.7,-0.7],[1.1,-0.25],[0.7,0.2],[0.7,0],[0,0]], size:[0.2, 0.2],
    ori: 0.0, pos: [0.35, (- 0.3)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.1294, 0.8667, 0.1294]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "Calibration"
  CalibrationClock = new util.Clock();
  CalibrationText = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CalibrationText', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  ContinueArrow_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'ContinueArrow_2', 
    vertices: [[0,0],[0,-0.5],[0.7,-0.5],[0.7,-0.7],[1.1,-0.25],[0.7,0.2],[0.7,0],[0,0]], size:[0.2, 0.2],
    ori: 0.0, pos: [0.35, (- 0.3)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.1294, 0.8667, 0.1294]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  ContinueClick_2 = new core.Mouse({
    win: psychoJS.window,
  });
  ContinueClick_2.mouseClock = new util.Clock();
  soundRED = new sound.Sound({
    win: psychoJS.window,
    value: 'sound_Scream.wav',
    secs: 1.2,
    });
  soundRED.setVolume(1.0);
  soundBLUE = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1,
    });
  soundBLUE.setVolume(1.0);
  iconMouse = new core.Mouse({
    win: psychoJS.window,
  });
  iconMouse.mouseClock = new util.Clock();
  iconSoundRED = new visual.Polygon({
    win: psychoJS.window, name: 'iconSoundRED', 
    edges: 100, size:[0.1, 0.1],
    ori: 0.0, pos: [(- 0.35), (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0039, (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  iconSoundBLUE = new visual.Rect ({
    win: psychoJS.window, name: 'iconSoundBLUE', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, pos: [0, (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), 0.0902]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  // Initialize components for Routine "UStest"
  UStestClock = new util.Clock();
  fixation1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([0.3255, 0.3255, 0.3255]),  opacity: undefined,
    depth: 0.0 
  });
  
  testUS = new sound.Sound({
    win: psychoJS.window,
    value: 'sound_Scream.wav',
    secs: 1.0,
    });
  testUS.setVolume(1.0);
  // Initialize components for Routine "USRating"
  USRatingClock = new util.Clock();
  fixation0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation0',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([0.3255, 0.3255, 0.3255]),  opacity: undefined,
    depth: -1.0 
  });
  
  USunpl = new visual.Slider({
    win: psychoJS.window, name: 'USunpl',
    size: [0.8, 0.1], pos: [0, (- 0.25)], units: 'height',
    labels: ["a", "b"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color([0.6471, (- 0.1765), (- 0.7647)]), lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  Q_USunpl = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Q_USunpl', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([0.3255, 0.3255, 0.3255]),  opacity: undefined,
    depth: -1.0 
  });
  
  CS = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CS', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.25], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  Question = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Question', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.1)], size : [1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  RatingScale = new visual.Slider({
    win: psychoJS.window, name: 'RatingScale',
    size: [0.8, 0.1], pos: [0, (- 0.3)], units: 'height',
    labels: ["a", "b"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color([0.6471, (- 0.1765), (- 0.7647)]), lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  soundUS = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1,
    });
  soundUS.setVolume(1.0);
  fixationJitter = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationJitter',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([0.3255, 0.3255, 0.3255]),  opacity: undefined,
    depth: -6.0 
  });
  
  soundTest = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1,
    });
  soundTest.setVolume(1.0);
  iconSoundTest = new visual.Rect ({
    win: psychoJS.window, name: 'iconSoundTest', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, pos: [0.4, 0.4],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), 0.0902]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  mouseSoundTest = new core.Mouse({
    win: psychoJS.window,
  });
  mouseSoundTest.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var IDcodesComponents;
function IDcodesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'IDcodes'-------
    t = 0;
    IDcodesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the ContinueClick_0
    ContinueClick_0.clicked_name = [];
    gotValidClick = false; // until a click is received
    // setup some python lists for storing info about the languageMouse
    languageMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    IDcodesComponents = [];
    IDcodesComponents.push(ContinueArrow_0);
    IDcodesComponents.push(ContinueClick_0);
    IDcodesComponents.push(logo_UM);
    IDcodesComponents.push(logo_BPP);
    IDcodesComponents.push(EnglishBox);
    IDcodesComponents.push(DutchBox);
    IDcodesComponents.push(GermanBox);
    IDcodesComponents.push(SpanishBox);
    IDcodesComponents.push(EnglishText);
    IDcodesComponents.push(DutchText);
    IDcodesComponents.push(GermanText);
    IDcodesComponents.push(SpanishText);
    IDcodesComponents.push(languageMouse);
    
    for (const thisComponent of IDcodesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var _mouseButtons;
function IDcodesRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'IDcodes'-------
    // get current time
    t = IDcodesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (languageMouse.isPressedIn(DutchBox)) {
        lang = "NL";
        DutchText.setColor("cadetblue");
    } else {
        if (languageMouse.isPressedIn(GermanBox)) {
            lang = "DE";
            GermanText.setColor("cadetblue");
        } else {
            if (languageMouse.isPressedIn(SpanishBox)) {
                lang = "ESP";
                SpanishText.setColor("cadetblue");
            } else {
                if (languageMouse.isPressedIn(EnglishBox)) {
                    lang = "EN";
                    EnglishText.setColor("cadetblue");
                }
            }
        }
    }
    
    
    // *ContinueArrow_0* updates
    if (t >= 3 && ContinueArrow_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ContinueArrow_0.tStart = t;  // (not accounting for frame time here)
      ContinueArrow_0.frameNStart = frameN;  // exact frame index
      
      ContinueArrow_0.setAutoDraw(true);
    }

    // *ContinueClick_0* updates
    if (t >= 3.0 && ContinueClick_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ContinueClick_0.tStart = t;  // (not accounting for frame time here)
      ContinueClick_0.frameNStart = frameN;  // exact frame index
      
      ContinueClick_0.status = PsychoJS.Status.STARTED;
      ContinueClick_0.mouseClock.reset();
      prevButtonState = ContinueClick_0.getPressed();  // if button is down already this ISN'T a new click
      }
    if (ContinueClick_0.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = ContinueClick_0.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [ContinueArrow_0,]) {
            if (obj.contains(ContinueClick_0)) {
              gotValidClick = true;
              ContinueClick_0.clicked_name.push(obj.name);
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *logo_UM* updates
    if (t >= 0.0 && logo_UM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo_UM.tStart = t;  // (not accounting for frame time here)
      logo_UM.frameNStart = frameN;  // exact frame index
      
      logo_UM.setAutoDraw(true);
    }

    
    // *logo_BPP* updates
    if (t >= 0.0 && logo_BPP.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo_BPP.tStart = t;  // (not accounting for frame time here)
      logo_BPP.frameNStart = frameN;  // exact frame index
      
      logo_BPP.setAutoDraw(true);
    }

    
    // *EnglishBox* updates
    if (t >= 0.0 && EnglishBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EnglishBox.tStart = t;  // (not accounting for frame time here)
      EnglishBox.frameNStart = frameN;  // exact frame index
      
      EnglishBox.setAutoDraw(true);
    }

    
    // *DutchBox* updates
    if (t >= 0.0 && DutchBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DutchBox.tStart = t;  // (not accounting for frame time here)
      DutchBox.frameNStart = frameN;  // exact frame index
      
      DutchBox.setAutoDraw(true);
    }

    
    // *GermanBox* updates
    if (t >= 0.0 && GermanBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GermanBox.tStart = t;  // (not accounting for frame time here)
      GermanBox.frameNStart = frameN;  // exact frame index
      
      GermanBox.setAutoDraw(true);
    }

    
    // *SpanishBox* updates
    if (t >= 0.0 && SpanishBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SpanishBox.tStart = t;  // (not accounting for frame time here)
      SpanishBox.frameNStart = frameN;  // exact frame index
      
      SpanishBox.setAutoDraw(true);
    }

    
    // *EnglishText* updates
    if (t >= 0.0 && EnglishText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EnglishText.tStart = t;  // (not accounting for frame time here)
      EnglishText.frameNStart = frameN;  // exact frame index
      
      EnglishText.setAutoDraw(true);
    }

    
    // *DutchText* updates
    if (t >= 0.0 && DutchText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DutchText.tStart = t;  // (not accounting for frame time here)
      DutchText.frameNStart = frameN;  // exact frame index
      
      DutchText.setAutoDraw(true);
    }

    
    // *GermanText* updates
    if (t >= 0.0 && GermanText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GermanText.tStart = t;  // (not accounting for frame time here)
      GermanText.frameNStart = frameN;  // exact frame index
      
      GermanText.setAutoDraw(true);
    }

    
    // *SpanishText* updates
    if (t >= 0.0 && SpanishText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SpanishText.tStart = t;  // (not accounting for frame time here)
      SpanishText.frameNStart = frameN;  // exact frame index
      
      SpanishText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IDcodesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IDcodesRoutineEnd() {
  return async function () {
    //------Ending Routine 'IDcodes'-------
    for (const thisComponent of IDcodesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((lang === "ESP")) {
        USunpl.labels = ["de nada", "mucho"];
        RatingScale.labels = ["de nada", "mucho"];
    } else {
        if ((lang === "DE")) {
            USunpl.labels = ["gar nicht", "sehr viel"];
            RatingScale.labels = ["gar nicht", "sehr viel"];
        } else {
            if ((lang === "NL")) {
                USunpl.labels = ["helemaal niet", "heel erg"];
                RatingScale.labels = ["helemaal niet", "heel erg"];
            } else {
                USunpl.labels = ["not at all", "very much"];
                RatingScale.labels = ["not at all", "very much"];
            }
        }
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "IDcodes" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var LocationCodesComponents;
function LocationCodesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'LocationCodes'-------
    t = 0;
    LocationCodesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((lang === "ESP")) {
        locationInstruction.setText("Por favor, seleccione su región de dolor o la región de dolor que le ha sido asignada");
    } else {
        if ((lang === "DE")) {
            locationInstruction.setText("Bitte wählen Sie ihre Schmerzregion oder die Schmerzregion die Ihnen zugewiesen wurde");
        } else {
            if ((lang === "NL")) {
                locationInstruction.setText("Selecteer uw pijnregio of de pijnregio die aan u is toegewezen");
            }
        }
    }

    // setup some python lists for storing info about the locationMouse
    locationMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    LocationCodesComponents = [];
    LocationCodesComponents.push(polygonBack);
    LocationCodesComponents.push(locationBack);
    LocationCodesComponents.push(polygonHand);
    LocationCodesComponents.push(locationHand);
    LocationCodesComponents.push(polygonKnee);
    LocationCodesComponents.push(locationKnee);
    LocationCodesComponents.push(polygonNeck);
    LocationCodesComponents.push(locationNeck);
    LocationCodesComponents.push(locationMouse);
    LocationCodesComponents.push(locationInstruction);
    
    for (const thisComponent of LocationCodesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}


function LocationCodesRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'LocationCodes'-------
    // get current time
    t = LocationCodesClock.getTime();
    frameN = frameN + 1; // number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    if (locationMouse.isPressedIn(polygonBack)) {
        location = "back";
    } else {
        if (locationMouse.isPressedIn(polygonHand)) {
            location = "hand";
        } else {
            if (locationMouse.isPressedIn(polygonKnee)) {
                location = "knee";
            } else {
                if (locationMouse.isPressedIn(polygonNeck)) {
                    location = "neck";
                }
            }
        }
    }
    
    // *polygonBack* updates
    if (t >= 0.0 && polygonBack.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygonBack.tStart = t;  // (not accounting for frame time here)
      polygonBack.frameNStart = frameN;  // exact frame index
      
      polygonBack.setAutoDraw(true);
    }

    
    // *locationBack* updates
    if (t >= 0.0 && locationBack.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      locationBack.tStart = t;  // (not accounting for frame time here)
      locationBack.frameNStart = frameN;  // exact frame index
      
      locationBack.setAutoDraw(true);
    }

    
    // *polygonHand* updates
    if (t >= 0.0 && polygonHand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygonHand.tStart = t;  // (not accounting for frame time here)
      polygonHand.frameNStart = frameN;  // exact frame index
      
      polygonHand.setAutoDraw(true);
    }

    
    // *locationHand* updates
    if (t >= 0.0 && locationHand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      locationHand.tStart = t;  // (not accounting for frame time here)
      locationHand.frameNStart = frameN;  // exact frame index
      
      locationHand.setAutoDraw(true);
    }

    
    // *polygonKnee* updates
    if (t >= 0.0 && polygonKnee.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygonKnee.tStart = t;  // (not accounting for frame time here)
      polygonKnee.frameNStart = frameN;  // exact frame index
      
      polygonKnee.setAutoDraw(true);
    }

    
    // *locationKnee* updates
    if (t >= 0.0 && locationKnee.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      locationKnee.tStart = t;  // (not accounting for frame time here)
      locationKnee.frameNStart = frameN;  // exact frame index
      
      locationKnee.setAutoDraw(true);
    }

    
    // *polygonNeck* updates
    if (t >= 0.0 && polygonNeck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygonNeck.tStart = t;  // (not accounting for frame time here)
      polygonNeck.frameNStart = frameN;  // exact frame index
      
      polygonNeck.setAutoDraw(true);
    }

    
    // *locationNeck* updates
    if (t >= 0.0 && locationNeck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      locationNeck.tStart = t;  // (not accounting for frame time here)
      locationNeck.frameNStart = frameN;  // exact frame index
      
      locationNeck.setAutoDraw(true);
    }

    // *locationMouse* updates
    if (t >= 0.0 && locationMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      locationMouse.tStart = t;  // (not accounting for frame time here)
      locationMouse.frameNStart = frameN;  // exact frame index
      
      locationMouse.status = PsychoJS.Status.STARTED;
      locationMouse.mouseClock.reset();
      prevButtonState = locationMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (locationMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = locationMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [polygonBack,polygonHand,polygonKnee,polygonNeck]) {
            if (obj.contains(locationMouse)) {
              gotValidClick = true;
              locationMouse.clicked_name.push(obj.name);
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *locationInstruction* updates
    if (t >= 0.0 && locationInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      locationInstruction.tStart = t;  // (not accounting for frame time here)
      locationInstruction.frameNStart = frameN;  // exact frame index
      
      locationInstruction.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LocationCodesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LocationCodesRoutineEnd() {
  return async function () {
    //------Ending Routine 'LocationCodes'-------
    for (const thisComponent of LocationCodesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "LocationCodes" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Intro;
var currentLoop;
function IntroLoopBegin(IntroLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Intro = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Trials/InstructionsLoop.xlsx', '0'),
      seed: undefined, name: 'Intro'
    });
    psychoJS.experiment.addLoop(Intro); // add the loop to the experiment
    currentLoop = Intro;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIntro of Intro) {
      const snapshot = Intro.getSnapshot();
      IntroLoopScheduler.add(importConditions(snapshot));
      IntroLoopScheduler.add(InstructionsRoutineBegin(snapshot));
      IntroLoopScheduler.add(InstructionsRoutineEachFrame());
      IntroLoopScheduler.add(InstructionsRoutineEnd());
      IntroLoopScheduler.add(endLoopIteration(IntroLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  };
}


async function IntroLoopEnd() {
  psychoJS.experiment.removeLoop(Intro);

  return Scheduler.Event.NEXT;
}


var VolumeSetup;
function VolumeSetupLoopBegin(VolumeSetupLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    VolumeSetup = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Trials/InstructionsLoop.xlsx', '1'),
      seed: undefined, name: 'VolumeSetup'
    });
    psychoJS.experiment.addLoop(VolumeSetup); // add the loop to the experiment
    currentLoop = VolumeSetup;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisVolumeSetup of VolumeSetup) {
      const snapshot = VolumeSetup.getSnapshot();
      VolumeSetupLoopScheduler.add(importConditions(snapshot));
      VolumeSetupLoopScheduler.add(CalibrationRoutineBegin(snapshot));
      VolumeSetupLoopScheduler.add(CalibrationRoutineEachFrame());
      VolumeSetupLoopScheduler.add(CalibrationRoutineEnd());
      VolumeSetupLoopScheduler.add(endLoopIteration(VolumeSetupLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  };
}


async function VolumeSetupLoopEnd() {
  psychoJS.experiment.removeLoop(VolumeSetup);

  return Scheduler.Event.NEXT;
}


var PriorBeliefs;
function PriorBeliefsLoopBegin(PriorBeliefsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    PriorBeliefs = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Trials/InstructionsLoop.xlsx', '3'),
      seed: undefined, name: 'PriorBeliefs'
    });
    psychoJS.experiment.addLoop(PriorBeliefs); // add the loop to the experiment
    currentLoop = PriorBeliefs;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPriorBelief of PriorBeliefs) {
      const snapshot = PriorBeliefs.getSnapshot();
      PriorBeliefsLoopScheduler.add(importConditions(snapshot));
      PriorBeliefsLoopScheduler.add(InstructionsRoutineBegin(snapshot));
      PriorBeliefsLoopScheduler.add(InstructionsRoutineEachFrame());
      PriorBeliefsLoopScheduler.add(InstructionsRoutineEnd());
      PriorBeliefsLoopScheduler.add(endLoopIteration(PriorBeliefsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  };
}


async function PriorBeliefsLoopEnd() {
  psychoJS.experiment.removeLoop(PriorBeliefs);

  return Scheduler.Event.NEXT;
}


var PRE;
function PRELoopBegin(PRELoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    PRE = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: PREtrials,
      seed: undefined, name: 'PRE'
    });
    psychoJS.experiment.addLoop(PRE); // add the loop to the experiment
    currentLoop = PRE;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPRE of PRE) {
      const snapshot = PRE.getSnapshot();
      PRELoopScheduler.add(importConditions(snapshot));
      PRELoopScheduler.add(TrialRoutineBegin(snapshot));
      PRELoopScheduler.add(TrialRoutineEachFrame());
      PRELoopScheduler.add(TrialRoutineEnd());
      PRELoopScheduler.add(endLoopIteration(PRELoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  };
}


async function PRELoopEnd() {
  psychoJS.experiment.removeLoop(PRE);

  return Scheduler.Event.NEXT;
}


var Conditioning;
function ConditioningLoopBegin(ConditioningLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Conditioning = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Trials/InstructionsLoop.xlsx', '5'),
      seed: undefined, name: 'Conditioning'
    });
    psychoJS.experiment.addLoop(Conditioning); // add the loop to the experiment
    currentLoop = Conditioning;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisConditioning of Conditioning) {
      const snapshot = Conditioning.getSnapshot();
      ConditioningLoopScheduler.add(importConditions(snapshot));
      ConditioningLoopScheduler.add(InstructionsRoutineBegin(snapshot));
      ConditioningLoopScheduler.add(InstructionsRoutineEachFrame());
      ConditioningLoopScheduler.add(InstructionsRoutineEnd());
      ConditioningLoopScheduler.add(endLoopIteration(ConditioningLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  };
}


async function ConditioningLoopEnd() {
  psychoJS.experiment.removeLoop(Conditioning);

  return Scheduler.Event.NEXT;
}


var ACQ;
function ACQLoopBegin(ACQLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ACQ = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: ACQtrials,
      seed: undefined, name: 'ACQ'
    });
    psychoJS.experiment.addLoop(ACQ); // add the loop to the experiment
    currentLoop = ACQ;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisACQ of ACQ) {
      const snapshot = ACQ.getSnapshot();
      ACQLoopScheduler.add(importConditions(snapshot));
      ACQLoopScheduler.add(TrialRoutineBegin(snapshot));
      ACQLoopScheduler.add(TrialRoutineEachFrame());
      ACQLoopScheduler.add(TrialRoutineEnd());
      ACQLoopScheduler.add(endLoopIteration(ACQLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  };
}


async function ACQLoopEnd() {
  psychoJS.experiment.removeLoop(ACQ);

  return Scheduler.Event.NEXT;
}


var GEN;
function GENLoopBegin(GENLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    GEN = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: GENtrials,
      seed: undefined, name: 'GEN'
    });
    psychoJS.experiment.addLoop(GEN); // add the loop to the experiment
    currentLoop = GEN;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisGEN of GEN) {
      const snapshot = GEN.getSnapshot();
      GENLoopScheduler.add(importConditions(snapshot));
      GENLoopScheduler.add(TrialRoutineBegin(snapshot));
      GENLoopScheduler.add(TrialRoutineEachFrame());
      GENLoopScheduler.add(TrialRoutineEnd());
      GENLoopScheduler.add(endLoopIteration(GENLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  };
}


async function GENLoopEnd() {
  psychoJS.experiment.removeLoop(GEN);

  return Scheduler.Event.NEXT;
}


var EXT;
function EXTLoopBegin(EXTLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    EXT = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: EXTtrials,
      seed: undefined, name: 'EXT'
    });
    psychoJS.experiment.addLoop(EXT); // add the loop to the experiment
    currentLoop = EXT;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEXT of EXT) {
      const snapshot = EXT.getSnapshot();
      EXTLoopScheduler.add(importConditions(snapshot));
      EXTLoopScheduler.add(TrialRoutineBegin(snapshot));
      EXTLoopScheduler.add(TrialRoutineEachFrame());
      EXTLoopScheduler.add(TrialRoutineEnd());
      EXTLoopScheduler.add(endLoopIteration(EXTLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  };
}


async function EXTLoopEnd() {
  psychoJS.experiment.removeLoop(EXT);

  return Scheduler.Event.NEXT;
}


var End;
function EndLoopBegin(EndLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    End = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Trials/InstructionsLoop.xlsx', '8'),
      seed: undefined, name: 'End'
    });
    psychoJS.experiment.addLoop(End); // add the loop to the experiment
    currentLoop = End;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEnd of End) {
      const snapshot = End.getSnapshot();
      EndLoopScheduler.add(importConditions(snapshot));
      EndLoopScheduler.add(InstructionsRoutineBegin(snapshot));
      EndLoopScheduler.add(InstructionsRoutineEachFrame());
      EndLoopScheduler.add(InstructionsRoutineEnd());
      EndLoopScheduler.add(endLoopIteration(EndLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  };
}


async function EndLoopEnd() {
  psychoJS.experiment.removeLoop(End);

  return Scheduler.Event.NEXT;
}


var currText;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents();
    if ((lang === "ESP")) {
        currText = ("TEXT_ESP/" + textFilename);
    } else {
        if ((lang === "DE")) {
            currText = ("TEXT_DE/" + textFilename);
        } else {
            if ((lang === "NL")) {
                currText = ("TEXT_NL/" + textFilename);
            } else {
                currText = ("TEXT_ENG/" + textFilename);
            }
        }
    }
    
    InstructionText.setImage(currText);
    // setup some python lists for storing info about the ContinueClick_1
    ContinueClick_1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(InstructionText);
    InstructionsComponents.push(InstructionImage);
    InstructionsComponents.push(ContinueClick_1);
    InstructionsComponents.push(ContinueArrow_1);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions'-------
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionText* updates
    if (t >= 0.0 && InstructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionText.tStart = t;  // (not accounting for frame time here)
      InstructionText.frameNStart = frameN;  // exact frame index
      
      InstructionText.setAutoDraw(true);
    }

    
    // *InstructionImage* updates
    if (t >= 0.0 && InstructionImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionImage.tStart = t;  // (not accounting for frame time here)
      InstructionImage.frameNStart = frameN;  // exact frame index
      
      InstructionImage.setAutoDraw(true);
    }

    // *ContinueClick_1* updates
    if (t >= 3.0 && ContinueClick_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ContinueClick_1.tStart = t;  // (not accounting for frame time here)
      ContinueClick_1.frameNStart = frameN;  // exact frame index
      
      ContinueClick_1.status = PsychoJS.Status.STARTED;
      ContinueClick_1.mouseClock.reset();
      prevButtonState = ContinueClick_1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (ContinueClick_1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = ContinueClick_1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [ContinueArrow_1,]) {
            if (obj.contains(ContinueClick_1)) {
              gotValidClick = true;
              ContinueClick_1.clicked_name.push(obj.name);
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *ContinueArrow_1* updates
    if (t >= 3 && ContinueArrow_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ContinueArrow_1.tStart = t;  // (not accounting for frame time here)
      ContinueArrow_1.frameNStart = frameN;  // exact frame index
      
      ContinueArrow_1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var CalibrationComponents;
function CalibrationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Calibration'-------
    t = 0;
    CalibrationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((lang === "ESP")) {
        currText = ("TEXT_ESP/" + textFilename);
    } else {
        if ((lang === "DE")) {
            currText = ("TEXT_DE/" + textFilename);
        } else {
            if ((lang === "NL")) {
                currText = ("TEXT_NL/" + textFilename);
            } else {
                currText = ("TEXT_ENG/" + textFilename);
            }
        }
    }
    CalibrationText.setImage(currText);
    // setup some python lists for storing info about the ContinueClick_2
    ContinueClick_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    soundRED.secs=1.2;
    soundRED.setVolume(1.0);
    soundBLUE = new sound.Sound({
    win: psychoJS.window,
    value: 'sound_TestTone.wav',
    secs: 1,
    });
    soundBLUE.secs=1;
    soundBLUE.setVolume(0.02);
    // setup some python lists for storing info about the iconMouse
    iconMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    CalibrationComponents = [];
    CalibrationComponents.push(CalibrationText);
    CalibrationComponents.push(ContinueArrow_2);
    CalibrationComponents.push(ContinueClick_2);
    CalibrationComponents.push(soundRED);
    CalibrationComponents.push(soundBLUE);
    CalibrationComponents.push(iconMouse);
    CalibrationComponents.push(iconSoundRED);
    CalibrationComponents.push(iconSoundBLUE);
    
    for (const thisComponent of CalibrationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}


function CalibrationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Calibration'-------
    // get current time
    t = CalibrationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    iconMouse.clickReset();
    if ((soundRED.status === PsychoJS.Status.FINISHED)) {
        soundRED.status = PsychoJS.Status.NOT_STARTED;
    }
    if ((soundBLUE.status === PsychoJS.Status.FINISHED)) {
        soundBLUE.status = PsychoJS.Status.NOT_STARTED;
    }
    
    
    // *CalibrationText* updates
    if (t >= 0.0 && CalibrationText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CalibrationText.tStart = t;  // (not accounting for frame time here)
      CalibrationText.frameNStart = frameN;  // exact frame index
      
      CalibrationText.setAutoDraw(true);
    }

    
    // *ContinueArrow_2* updates
    if (t >= 0 && ContinueArrow_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ContinueArrow_2.tStart = t;  // (not accounting for frame time here)
      ContinueArrow_2.frameNStart = frameN;  // exact frame index
      
      ContinueArrow_2.setAutoDraw(true);
    }

    // *ContinueClick_2* updates
    if (t >= 0 && ContinueClick_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ContinueClick_2.tStart = t;  // (not accounting for frame time here)
      ContinueClick_2.frameNStart = frameN;  // exact frame index
      
      ContinueClick_2.status = PsychoJS.Status.STARTED;
      ContinueClick_2.mouseClock.reset();
      prevButtonState = ContinueClick_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (ContinueClick_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = ContinueClick_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [ContinueArrow_2]) {
            if (obj.contains(ContinueClick_2)) {
              gotValidClick = true;
              ContinueClick_2.clicked_name.push(obj.name);
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // start/stop soundRED
    if ((iconMouse.isPressedIn(iconSoundRED)) && soundRED.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      soundRED.tStart = t;  // (not accounting for frame time here)
      soundRED.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ soundRED.play(); });  // screen flip
      soundRED.status = PsychoJS.Status.STARTED;
    }
    if (soundRED.status === PsychoJS.Status.STARTED && t >= (soundRED.tStart + 1.2)) {
      if (1.2 > 0.5) {
        soundRED.stop();  // stop the sound (if longer than duration)
      }
      soundRED.status = PsychoJS.Status.FINISHED;
    }
    // start/stop soundBLUE
    if ((iconMouse.isPressedIn(iconSoundBLUE)) && soundBLUE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      soundBLUE.tStart = t;  // (not accounting for frame time here)
      soundBLUE.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ soundBLUE.play(); });  // screen flip
      soundBLUE.status = PsychoJS.Status.STARTED;
    }
    if (soundBLUE.status === PsychoJS.Status.STARTED && t >= (soundBLUE.tStart + 1)) {
      if (1 > 0.5) {
        soundBLUE.stop();  // stop the sound (if longer than duration)
      }
      soundBLUE.status = PsychoJS.Status.FINISHED;
    }
    
    // *iconSoundRED* updates
    if (t >= 0.0 && iconSoundRED.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iconSoundRED.tStart = t;  // (not accounting for frame time here)
      iconSoundRED.frameNStart = frameN;  // exact frame index
      
      iconSoundRED.setAutoDraw(true);
    }

    
    // *iconSoundBLUE* updates
    if (t >= 0.0 && iconSoundBLUE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iconSoundBLUE.tStart = t;  // (not accounting for frame time here)
      iconSoundBLUE.frameNStart = frameN;  // exact frame index
      
      iconSoundBLUE.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CalibrationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CalibrationRoutineEnd() {
  return async function () {
    //------Ending Routine 'Calibration'-------
    for (const thisComponent of CalibrationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    soundRED.stop();  // ensure sound has stopped at end of routine
    soundBLUE.stop();  // ensure sound has stopped at end of routine
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "Calibration" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var UStestComponents;
function UStestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'UStest'-------
    t = 0;
    UStestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    testUS.secs=1.0;
    testUS.setVolume(1.0);
    // keep track of which components have finished
    UStestComponents = [];
    UStestComponents.push(fixation1);
    UStestComponents.push(testUS);
    
    for (const thisComponent of UStestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function UStestRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'UStest'-------
    // get current time
    t = UStestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation1* updates
    if (t >= 0.0 && fixation1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation1.tStart = t;  // (not accounting for frame time here)
      fixation1.frameNStart = frameN;  // exact frame index
      
      fixation1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation1.setAutoDraw(false);
    }
    // start/stop testUS
    if (t >= 3 && testUS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testUS.tStart = t;  // (not accounting for frame time here)
      testUS.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ testUS.play(); });  // screen flip
      testUS.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (testUS.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        testUS.stop();  // stop the sound (if longer than duration)
      }
      testUS.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of UStestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function UStestRoutineEnd() {
  return async function () {
    //------Ending Routine 'UStest'-------
    for (const thisComponent of UStestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    testUS.stop();  // ensure sound has stopped at end of routine
    return Scheduler.Event.NEXT;
  };
}


var USRatingComponents;
function USRatingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'USRating'-------
    t = 0;
    USRatingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    if ((lang === "ESP")) {
        currText = "TEXT_ESP/Slide3.png";
    } else {
        if ((lang === "DE")) {
            currText = "TEXT_DE/Slide3.png";
        } else {
            if ((lang === "NL")) {
                currText = "TEXT_NL/Slide3.png";
            } else {
                currText = "TEXT_ENG/Slide3.png";
            }
        }
    }
    
    USunpl.reset();
    Q_USunpl.setImage(currText);
    // keep track of which components have finished
    USRatingComponents = [];
    USRatingComponents.push(fixation0);
    USRatingComponents.push(USunpl);
    USRatingComponents.push(Q_USunpl);
    
    for (const thisComponent of USRatingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}


function USRatingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'USRating'-------
    // get current time
    t = USRatingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation0* updates
    if (t >= 0.0 && fixation0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation0.tStart = t;  // (not accounting for frame time here)
      fixation0.frameNStart = frameN;  // exact frame index
      
      fixation0.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation0.setAutoDraw(false);
    }
    
    // *USunpl* updates
    if (t >= 2 && USunpl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      USunpl.tStart = t;  // (not accounting for frame time here)
      USunpl.frameNStart = frameN;  // exact frame index
      
      USunpl.setAutoDraw(true);
    }

    frameRemains = 2 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (USunpl.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      USunpl.setAutoDraw(false);
    }
    
    // *Q_USunpl* updates
    if (t >= 2 && Q_USunpl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_USunpl.tStart = t;  // (not accounting for frame time here)
      Q_USunpl.frameNStart = frameN;  // exact frame index
      
      Q_USunpl.setAutoDraw(true);
    }

    frameRemains = 2 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Q_USunpl.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Q_USunpl.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of USRatingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function USRatingRoutineEnd() {
  return async function () {
    //------Ending Routine 'USRating'-------
    for (const thisComponent of USRatingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('USunpl.response', USunpl.getRating());
    return Scheduler.Event.NEXT;
  };
}


var CSname;
var TrialComponents;
function TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Trial'-------
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((lang === "ESP")) {
        currText = (("TEXT_ESP/Slide" + Qnum.toString()) + ".png");
    } else {
        if ((lang === "DE")) {
            currText = (("TEXT_DE/Slide" + Qnum.toString()) + ".png");
        } else {
            if ((lang === "NL")) {
                currText = (("TEXT_NL/Slide" + Qnum.toString()) + ".png");
            } else {
                currText = (("TEXT_ENG/Slide" + Qnum.toString()) + ".png");
            }
        }
    }
    if ((thisGroup === 1)) {
        if ((CStype === "CS+")) {
            CSname = (("stimuli_" + location) + "/stim1.png");
        } else {
            if ((CStype === "GS1")) {
                CSname = (("stimuli_" + location) + "/stim2.png");
            } else {
                if ((CStype === "GS2")) {
                    CSname = (("stimuli_" + location) + "/stim3.png");
                } else {
                    if ((CStype === "GS3")) {
                        CSname = (("stimuli_" + location) + "/stim4.png");
                    } else {
                        if ((CStype === "GS4")) {
                            CSname = (("stimuli_" + location) + "/stim5.png");
                        } else {
                            if ((CStype === "CS-")) {
                                CSname = (("stimuli_" + location) + "/stim6.png");
                            }
                        }
                    }
                }
            }
        }
    } else {
        if ((thisGroup === 2)) {
            if ((CStype === "CS+")) {
                CSname = (("stimuli_" + location) + "/stim6.png");
            } else {
                if ((CStype === "GS1")) {
                    CSname = (("stimuli_" + location) + "/stim5.png");
                } else {
                    if ((CStype === "GS2")) {
                        CSname = (("stimuli_" + location) + "/stim4.png");
                    } else {
                        if ((CStype === "GS3")) {
                            CSname = (("stimuli_" + location) + "/stim3.png");
                        } else {
                            if ((CStype === "GS4")) {
                                CSname = (("stimuli_" + location) + "/stim2.png");
                            } else {
                                if ((CStype === "CS-")) {
                                    CSname = (("stimuli_" + location) + "/stim1.png");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    CS.setImage(CSname);
    Question.setImage(currText);
    RatingScale.reset();
    soundUS = new sound.Sound({
    win: psychoJS.window,
    value: USsound,
    secs: 1,
    });
    soundUS.secs=1;
    soundUS.setVolume(1.0);
    soundTest = new sound.Sound({
    win: psychoJS.window,
    value: volumeTestStimulus,
    secs: 1,
    });
    soundTest.secs=1;
    soundTest.setVolume(0.02);
    // setup some python lists for storing info about the mouseSoundTest
    mouseSoundTest.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouseSoundTest.mouseClock.reset();
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(fixation);
    TrialComponents.push(CS);
    TrialComponents.push(Question);
    TrialComponents.push(RatingScale);
    TrialComponents.push(soundUS);
    TrialComponents.push(fixationJitter);
    TrialComponents.push(soundTest);
    TrialComponents.push(iconSoundTest);
    TrialComponents.push(mouseSoundTest);
    
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}


function TrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Trial'-------
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *CS* updates
    if (t >= 3 && CS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CS.tStart = t;  // (not accounting for frame time here)
      CS.frameNStart = frameN;  // exact frame index
      
      CS.setAutoDraw(true);
    }

    frameRemains = 3 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CS.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CS.setAutoDraw(false);
    }
    
    // *Question* updates
    if (t >= 7 && Question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question.tStart = t;  // (not accounting for frame time here)
      Question.frameNStart = frameN;  // exact frame index
      
      Question.setAutoDraw(true);
    }

    frameRemains = 7 + 5.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Question.setAutoDraw(false);
    }
    
    // *RatingScale* updates
    if (t >= 7 && RatingScale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RatingScale.tStart = t;  // (not accounting for frame time here)
      RatingScale.frameNStart = frameN;  // exact frame index
      
      RatingScale.setAutoDraw(true);
    }

    frameRemains = 7 + 5.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RatingScale.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RatingScale.setAutoDraw(false);
    }
    // start/stop soundUS
    if (t >= 12.5 && soundUS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      soundUS.tStart = t;  // (not accounting for frame time here)
      soundUS.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ soundUS.play(); });  // screen flip
      soundUS.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 12.5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (soundUS.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1 > 0.5) {
        soundUS.stop();  // stop the sound (if longer than duration)
      }
      soundUS.status = PsychoJS.Status.FINISHED;
    }
    
    // *fixationJitter* updates
    if (t >= 13 && fixationJitter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationJitter.tStart = t;  // (not accounting for frame time here)
      fixationJitter.frameNStart = frameN;  // exact frame index
      
      fixationJitter.setAutoDraw(true);
    }

    frameRemains = 13 + ISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationJitter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationJitter.setAutoDraw(false);
    }
    // start/stop soundTest
    if (t >= 1 && soundTest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      soundTest.tStart = t;  // (not accounting for frame time here)
      soundTest.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ soundTest.play(); });  // screen flip
      soundTest.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (soundTest.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1 > 0.5) {
        soundTest.stop();  // stop the sound (if longer than duration)
      }
      soundTest.status = PsychoJS.Status.FINISHED;
    }
    
    // *iconSoundTest* updates
    if (t >= 0.0 && iconSoundTest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iconSoundTest.tStart = t;  // (not accounting for frame time here)
      iconSoundTest.frameNStart = frameN;  // exact frame index
      
      iconSoundTest.setAutoDraw(true);
    }

    frameRemains = (ISI + 13)  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((iconSoundTest.status === PsychoJS.Status.STARTED || iconSoundTest.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      iconSoundTest.setAutoDraw(false);
      mouseSoundTest.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'Trial'-------
    for (const thisComponent of TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('RatingScale.response', RatingScale.getRating());
    soundUS.stop();  // ensure sound has stopped at end of routine
    soundTest.stop();  // ensure sound has stopped at end of routine
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
