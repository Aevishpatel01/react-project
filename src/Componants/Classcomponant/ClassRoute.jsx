import React, { Component } from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import WelcomeToClassCompo from './01WelcomeToClassCompo';
import PropsInClassCompo from './03PropsInClassCompo';
import JSXClassCompo from './02JSXClassCompo'
import StateInClassCompo from './04StateInClassCompo';
import StateLifeCycleInClassCompo from './05StateLifeCycleInClassCompo';
import Classroutemenu from "./Classroutemenu";

class ClassRoute extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Classroutemenu />}>
            <Route path='classcompointro' element={<WelcomeToClassCompo />} />
            <Route path='/jsxclasscompo' element={<JSXClassCompo />} />
            <Route path='/propsinclass' element={<PropsInClassCompo />} />
            <Route path='/stateinclass' element={<StateInClassCompo />} />
            <Route path='/statelifecycleinclass' element={<StateLifeCycleInClassCompo />} />
          </Route>
        </Routes>
      </>
    )
  }
}
export default ClassRoute;
