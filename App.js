import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

/**
 *  imports for redux toolkit
 *  keyHandler is store for keyboard state
 *  KeyboardEvents is the actual component setup of event handlers
 */
import { useSelector, useDispatch } from "react-redux"
import { regKey, unregKey } from "./Redux/keyHandler"
import KeyBoardEvents from "./components/KeyboardEvents"

/**
 *  imports for screen management
 *  simulating multiple screens in a game, think title screen, invetory screen, top-down map screen etc...
 * */

import Screen1 from "./components/screen1"
import Screen2 from "./components/screen2"
import Screen3 from "./components/screen3"

function App() {
  /**
   *  GlobalKeys is the redux state array for globally scoped keys that are registered
   *  dispatch gives us access to the regKey and unregKey action creators
   * */
  const { GlobalKeys } = useSelector((state) => state.keyHandler)
  const dispatch = useDispatch()

  /**
   *  Initial lifecycle mounting useEffect
   *  Job is to register specific global keys that will be monitored for lifecycle of entire app
   * */

  useEffect(() => {
    //register global keypresses - see keyHandler.js for explanation of regkey and unregKey action creators
    //registering the Escape key and the SpaceBar globally
    dispatch(regKey({ Key: "Escape", pressed: false, scope: "global" }))
    dispatch(regKey({ Key: " ", pressed: false, scope: "global" }))
    return () => {
      //unregistering them for cleanup
      dispatch(unregKey("global"))
    }
  }, [])

  //Keyboard Event Logic - Globally scoped keys
  //useEffect that has GlobalKeys dependancy, for monitoring changes in keyboard state
  useEffect(() => {
    {
      //Escape button
      let index = GlobalKeys.findIndex((key) => key.Key === "Escape")
      if (index >= 0) {
        if (GlobalKeys[index].pressed) {
          //Add Logic here for Escape button
          console.log("Global Esc pressed")
        }
      }
    }

    {
      //Space button
      let index = GlobalKeys.findIndex((key) => key.Key === " ")
      if (index >= 0) {
        //Add Logic here for Escape button
        if (GlobalKeys[index].pressed) {
          console.log("Global Space pressed")
        }
      }
    }
  }, [GlobalKeys])

  //Container JSX
  //This uses react router to switch between screens
  //<KeyBoardEvents /> component is added, with no UI impact to allow for access
  return (
    <div className="App">
      <div className="Globals">
        <h1>Global keypresses:</h1>
        <p>ESC key and SpaceBar will console out</p>
      </div>
      <KeyBoardEvents />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Screen1</Link>
              </li>
              <li>
                <Link to="/s2">Screen2</Link>
              </li>
              <li>
                <Link to="/s3">Screen3</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/s2">
            <Screen2 />
          </Route>
          <Route path="/s3">
            <Screen3 />
          </Route>
          <Route path="/">
            <Screen1 />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
