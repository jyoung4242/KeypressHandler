import React, { useEffect } from "react"

/**
 *  imports for redux toolkit
 *  keyHandler is store for keyboard state
 *  KeyboardEvents is the actual component setup of event handlers
 */
import { regKey, unregKey } from "../Redux/keyHandler"
import KeyBoardEvents from "./KeyboardEvents"
import { useSelector, useDispatch } from "react-redux"

function Screen1() {
  /**
   *  LocallKeys is the redux state array for locally scoped keys that are registered
   *  dispatch gives us access to the regKey and unregKey action creators
   * */
  const { LocalKeys } = useSelector((state) => state.keyHandler)
  const dispatch = useDispatch()

  useEffect(() => {
    //register component keypresses
    //see keyHandler.js for explanation of regkey and unregKey action creators
    //registering the a,s,d, and f keys for just this component
    dispatch(regKey({ Key: "a", pressed: false, scope: "local" }))
    dispatch(regKey({ Key: "s", pressed: false, scope: "local" }))
    dispatch(regKey({ Key: "d", pressed: false, scope: "local" }))
    dispatch(regKey({ Key: "f", pressed: false, scope: "local" }))
    return () => {
      //unregistering them for cleanup, this happens when you switch screens, very important
      dispatch(unregKey("local"))
    }
  }, [])

  //Keyboard Event Logic - locally scoped keys
  //useEffect that has LocalKeys dependancy, for monitoring changes in keyboard state
  useEffect(() => {
    {
      //a button
      let index = LocalKeys.findIndex((key) => key.Key === "a")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          //Add Logic here for a button
          console.log("Screen1 a pressed")
        }
      }
    }

    {
      //s button
      let index = LocalKeys.findIndex((key) => key.Key === "s")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          //Add Logic here for s button
          console.log("Screen1 s pressed")
        }
      }
    }

    {
      //a button
      let index = LocalKeys.findIndex((key) => key.Key === "d")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          //Add Logic here for d button
          console.log("Screen1 d pressed")
        }
      }
    }

    {
      //s button
      let index = LocalKeys.findIndex((key) => key.Key === "f")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          //Add Logic here for f button
          console.log("Screen1 f pressed")
        }
      }
    }
  }, [LocalKeys])

  return (
    <div>
      
      <h1>Screen1</h1>
      <p>Screen1 keypresses mapped: a,s,d,f will console out</p>
    </div>
  )
}

export default Screen1
