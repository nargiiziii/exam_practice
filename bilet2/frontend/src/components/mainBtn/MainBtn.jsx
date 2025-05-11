import React from 'react'
import style from "./MainBtn.module.scss"

const MainBtn = ({text}) => {
  return (
    <div>
        <button>{text}</button>
    </div>
  )
}

export default MainBtn