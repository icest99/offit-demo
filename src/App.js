import React from 'react';
import Offit from './Offit';
import "./App.css"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeNav from './HomeNav';
import ExerciseHome from './ExerciseHome';
import ConsultHome from './ConsultHome';
import ProgramHome from './ProgramHome';
import ConsultChat from './ConsultChat';
import Checklist from './Checklist';
import Profile from './Profile';
import SinglePlayer from './SinglePlayer';
import YourGoal from './YourGoal';
import CreateGoal from './CreateGoal';
import StartTrack from './StartTrack';
import Timer from './Timer';
import Competition from './SinglePlayer/Competition';
import JumpClap from './SinglePlayer/JumpClap';
import CompetitionStart from './SinglePlayer/CompetitionStart';
import StartCall from './SinglePlayer/StartCall';
import CallStarted from './SinglePlayer/CallStarted';
import PointEarned from './SinglePlayer/PointEarned';
import Ranking from './SinglePlayer/Ranking';
import Multiplayer from './Multiplayer/Multiplayer';
import MultiCompetition from './Multiplayer/MultiCompetition';
import MultiCompetitionInv from './Multiplayer/MultiCompetitionInv';
import MultiCompetitionStart from './Multiplayer/MultiCompetitionStart';
import MultiPlaying from './Multiplayer/MultiPlaying';
import GameHome from './Game/GameHome';
import Gacha1 from './Gacha1';
import TestCount from './TestCount';
import Gacha2 from './Gacha2';

function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path="/"><HomeNav/></Route>
        <Route exact path="/ExerciseHome"><ExerciseHome/></Route>
        <Route exact path="/ConsultHome"><ConsultHome/></Route>
        <Route exact path="/ProgramHome"><ProgramHome/></Route>
        <Route exact path="/ConsultChat"><ConsultChat/></Route>
        <Route exact path="/Checklist"><Checklist/></Route>
        <Route exact path="/Profile"><Profile/></Route>
        <Route exact path="/SinglePlayer"><SinglePlayer/></Route>
        <Route exact path="/YourGoal"><YourGoal/></Route>
        <Route exact path="/CreateGoal"><CreateGoal/></Route>
        <Route exact path="/StartTrack"><StartTrack/></Route>
        <Route exact path="/Timer"><Timer/></Route>
        <Route exact path="/Competition"><Competition/></Route>
        <Route exact path="/JumpClap"><JumpClap/></Route>
        <Route exact path="/CompetitionStart"><CompetitionStart/></Route>
        <Route exact path="/StartCall"><StartCall/></Route>
        <Route exact path="/CallStarted"><CallStarted/></Route>
        <Route exact path="/PointEarned"><PointEarned/></Route>
        <Route exact path="/Ranking"><Ranking/></Route>
        <Route exact path="/Multiplayer"><Multiplayer/></Route>
        <Route exact path="/MultiCompetition"><MultiCompetition/></Route>
        <Route exact path="/MultiCompetitionInv"><MultiCompetitionInv/></Route>
        <Route exact path="/MultiCompetitionStart"><MultiCompetitionStart/></Route>
        <Route exact path="/MultiPlaying"><MultiPlaying/></Route>
        <Route exact path="/GameHome"><GameHome/></Route>
        <Route exact path="/Gacha1"><Gacha1/></Route>
        <Route exact path="/TestCount"><TestCount/></Route>
        <Route exact path="/Gacha2"><Gacha2/></Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
