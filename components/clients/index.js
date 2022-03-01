import React from 'react'
import cls from "./client.module.scss"

export default function Clients() {
  return (
    <div className={cls.client}>
        <div className={cls.clientBox}>
            <img src='client_01.png' />
            <img src='client_02.png' />
            <img src='client_03.png' />
            <img src='client_04.png' />
        </div>
    </div>
  )
}
