import { useEffect, useState, useCallback } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import { useSelector } from "react-redux";
// import { useCart } from "../context/CartContext"
// import storeItems from "../items.json"

const COMMANDS = {
  OPEN_CART: "open-cart",
  CLOSE_CART: "close-cart",
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  PURCHASE_ITEMS: "purchase-items"
}

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState()
  const history = []
  const quantity = useSelector((state)=>state.cart.quantity)

  function timeout(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
  }

  const openCart = useCallback(async() => {
    console.log(quantity)
    console.log(typeof(quantity))
    if (quantity < 1) {
      console.log("yes")
      console.log(quantity)
      alanInstance.playText("You have no items in your cart")
    }
    else{
      alanInstance.playText("Opening cart")
      console.log('here')
      await timeout(3500)
      localStorage.setItem("history",window.location.href)
      window.open("http://localhost:3000/cart","_self")
    }
      
      
      
  }, [alanInstance])

  const closeCart = useCallback(async() => {
      alanInstance.playText("Closing cart")
      await timeout(3500)
      localStorage.getItem('history')
      window.open(localStorage.getItem('history'),"_self")  
  }, [alanInstance])

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_CART, openCart)
    window.addEventListener(COMMANDS.CLOSE_CART, closeCart)


    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart)
      window.removeEventListener(COMMANDS.CLOSE_CART, closeCart)
    }
  }, [openCart, closeCart])

  useEffect(() => {
    if (alanInstance != null) return

    setAlanInstance(
      alanBtn({
        top: "10px",
        left: "15px",
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { detail: payload }))
        }
      })
    )
  }, [])

  return null
}