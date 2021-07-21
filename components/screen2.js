import React, { useEffect } from "react"
import { regKey, unregKey } from "../Redux/keyHandler"
import KeyBoardEvents from "./KeyboardEvents"
import { useSelector, useDispatch } from "react-redux"

/**
 *  Almost identical to Screen1.js, please refer to that file for comments
 *  and documentation
 * */
function Screen2() {
  const { LocalKeys } = useSelector((state) => state.keyHandler)
  const dispatch = useDispatch()

  useEffect(() => {
    //register component keypresses
    dispatch(regKey({ Key: "j", pressed: false, scope: "local" }))
    dispatch(regKey({ Key: "k", pressed: false, scope: "local" }))
    dispatch(regKey({ Key: "l", pressed: false, scope: "local" }))
    dispatch(regKey({ Key: ";", pressed: false, scope: "local" }))
    return () => {
      dispatch(unregKey("local"))
    }
  }, [])

  //Key Events
  useEffect(() => {
    {
      //j button
      let index = LocalKeys.findIndex((key) => key.Key === "j")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          console.log("Screen2 j pressed")
        }
      }
    }

    {
      //s button
      let index = LocalKeys.findIndex((key) => key.Key === "k")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          console.log("Screen2 k pressed")
        }
      }
    }

    {
      //a button
      let index = LocalKeys.findIndex((key) => key.Key === "l")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          console.log("Screen2 l pressed")
        }
      }
    }

    {
      //s button
      let index = LocalKeys.findIndex((key) => key.Key === ";")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          console.log("Screen2 ; pressed")
        }
      }
    }
  }, [LocalKeys])

  return (
    <div>
      
      <h1>Screen2</h1>
      <p>Screen2 keypresses mapped: j,k,l,; will console out</p>
    </div>
  )
}

export default Screen2
