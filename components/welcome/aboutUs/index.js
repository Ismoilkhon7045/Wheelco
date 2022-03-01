import React from 'react'
import cls from "./aboutUs.module.scss"
export default function AboutUs() {
  return (
    <div className={cls.aboutUs}>
      <div className={cls.aboutContainer}>
        <p className={cls.aboutTitle}>ABOUT US</p>
        <hr />
        <p className={cls.aboutDescription}>We support supply chain management</p>
        <div className={cls.aboutStatistic}>
          <div className={cls.aboutStatisticBox}>
            <p className={cls.statisticNumber}>1,273</p>
            <p className={cls.statisticDescription}>DELIVERED PACKAGES</p> 
          </div>
          <div className={cls.aboutStatisticBox}>
            <p className={cls.statisticNumber}>1,273</p>
            <p className={cls.statisticDescription}>MILES IN 2016</p> 
          </div>
          <div className={cls.aboutStatisticBox}>
            <p className={cls.statisticNumber}>1,273</p>
            <p className={cls.statisticDescription}>SOLUTIONS</p> 
          </div>
          <div className={cls.aboutStatisticBox}>
            <p className={cls.statisticNumber}>1,273</p>
            <p className={cls.statisticDescription}>SATISFIED CLIENTS</p> 
          </div>
        </div>
        <div>
          <img src='trucks.png' />
        </div>
      </div>
    </div>
  )
}
