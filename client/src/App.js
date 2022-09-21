import "./assets/sass/bootstrap.min.css";
import "./assets/sass/main.css";
import React, { useEffect } from "react";
import HomePage from "./components/Home/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react/cjs/react.production.min";
import { isAuthFunction } from "./redux/actions/auth/tokenActions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dash/Dashboard";
import { boughtPhoto } from "./redux/actions/img&Vid/imgVid";
import UpClose from "./components/Dash/Tabs/img/UpClose";
import FrontNav from "./components/Home/FrontNav";


const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const errMsg = useSelector(state => state.errorReducer.msg);
  useEffect(() => {
    dispatch(isAuthFunction())
    dispatch(boughtPhoto())
  }, [dispatch])

  return (
    <Fragment>
      <Router>
        <FrontNav isAuth={isAuth} errMsg={errMsg}  /> 
        <Switch>

          <Route exact path='/' render={props => !isAuth ? <HomePage {...props} isAuth={isAuth} errMsg={errMsg} /> : <Redirect to='/dashboard' />} />

          <Route exact path='/dashboard' render={props => isAuth ? <Dashboard {...props} isAuth={isAuth}  errMsg={errMsg}  /> : <Redirect to='/' />} />

            <Route exact path='/MyPictures/:id'  render={props => isAuth ? <UpClose {...props} /> : <Redirect to='/'/>} />

        </Switch>
      </Router>
    </Fragment>
  );
};
export default App
