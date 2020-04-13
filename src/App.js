import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CoursesNav from "./components/CoursesNav";
import {
  PATH_COST_STATISTICS,
  PATH_COURSES,
  PATH_COURSES_COURSES_FORM,
  PATH_COURSES_COURSES_TABLE,
  PATH_COURSES_GENERATION,
  PATH_COURSES_SEARCH,
  PATH_TITLE_STATISTICS
} from "./config/courses_configuration";
import Courses from "./components/Courses";
import CoursesGeneration from "./components/CoursesGeneration";
import CostStatistics from "./components/CostStatistics";
import TitleStatistics from "./components/TitleStatistics";
import CoursesSearch from "./components/CoursesSearch";
import {CoursesForm} from "./components/CoursesForm";
import {CoursesTable} from "./components/CoursesTable";


class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render () {
    return <BrowserRouter>
      <CoursesNav/>
      <Switch>
        <Route path={PATH_COURSES} exact render={() => {
          return <Courses/>
        }}/>
        <Route path={PATH_COURSES_COURSES_FORM} exact render={() => {
          return <CoursesForm/>
        }}/>
        <Route path={PATH_COURSES_COURSES_TABLE} exact render={() => {
          return <CoursesTable/>
        }}/>

        <Route path={PATH_TITLE_STATISTICS} exact render={() => {
          return <TitleStatistics/>
        }}/>
        <Route path={PATH_COURSES_GENERATION} exact render={() => {
          return <CoursesGeneration/>
        }}/>
        <Route path={PATH_COST_STATISTICS} exact render={() => {
          return <CostStatistics/>
        }}/>
        <Route path={PATH_COURSES_SEARCH} exact render={() => {
          return <CoursesSearch/>
        }}/>
      </Switch>
    </BrowserRouter>
  }
}

export default App;
