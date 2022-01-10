import { useEffect, useState, useCallback } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"

const COMMANDS = {
  OPEN_CART: "open-cart",
  CLOSE_CART: "close-cart",
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  PURCHASE_ITEMS: "purchase-items"
}

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState()

  useEffect(() => {
    if (alanInstance != null) return

    setAlanInstance(
      alanBtn({
        top: "15px",
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