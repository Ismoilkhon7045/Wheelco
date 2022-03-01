import React from 'react'
import cls from "./truckType.module.scss"

export default function TruckType() {
  return (
    <div className={cls.TruckType}>
        <div className={cls.container}>
            <div className={cls.card}>
                <img src='trucktype1.png'/>
                <h3>TAUTLINER</h3>
                <p>13.62 x 2.50 x 2.65 m</p>
                <p>Load capacity 25,7 t</p>
            </div>
            <div className={cls.card}>
                <img src='trucktype2.png'/>
            <h3>FRIGO / BOX - TRUCK</h3>
                <p>13.6 x 2.43 x 2.48 m</p>
                <p>Load capacity 23,5 t</p></div>
            <div className={cls.card}>
                <img src='trucktype3.png'/>
            <h3>TANKER TRUCK</h3>
                <p>3.6 x 2.43 x 2.48 m</p>
                <p>Load capacity 26 t</p></div>
            <div className={cls.card}>
                <img src='trucktype4.png'/>
            <h3>FLATBED - LOG TRUCK</h3>
                <p>13.6 x 2.43 x 2.48 m</p>
                <p>Load capacity 24 t</p></div>
        </div>
    </div>
  )
}









