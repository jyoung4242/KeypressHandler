import React, { useEffect } from "react"
import { regKey, unregKey } from "../Redux/keyHandler"
import KeyBoardEvents from "./KeyboardEvents"
import { useSelector, useDispatch } from "react-redux"

/**
 *  Almost identical to Screen1.js, please refer to that file for comments
 *  and documentation
 * */
function Screen3() {
  const { LocalKeys } = useSelector((state) => state.keyHandler)
  const dispatch = useDispatch()

  useEffect(() => {
    //register component keypresses
    dispatch(regKey({ Key: "5", pressed: false, scope: "local" }))
    dispatch(regKey({ Key: "6", pressed: false, scope: "local" }))
    dispatch(regKey({ Key: "7", pressed: false, scope: "local" }))
    dispatch(regKey({ Key: "8", pressed: false, scope: "local" }))
    return () => {
      dispatch(unregKey("local"))
    }
  }, [])

  //Key Events
  useEffect(() => {
    {
      //a button
      let index = LocalKeys.findIndex((key) => key.Key === "5")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          console.log("Screen3 5 pressed")
        }
      }
    }

    {
      //s button
      let index = LocalKeys.findIndex((key) => key.Key === "6")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          console.log("Screen3 6 pressed")
        }
      }
    }

    {
      //a button
      let index = LocalKeys.findIndex((key) => key.Key === "7")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          console.log("Screen3 7 pressed")
        }
      }
    }

    {
      //s button
      let index = LocalKeys.findIndex((key) => key.Key === "8")
      if (index >= 0) {
        if (LocalKeys[index].pressed) {
          console.log("Screen3 8 pressed")
        }
      }
    }
  }, [LocalKeys])

  return (
    <div>
      
      <h1>Screen3</h1>
      <p>Screen3 keypresses mapped: 5,6,7,8 will console out</p>
    </div>
  )
}
export default Screen3
