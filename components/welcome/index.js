import React from 'react'
import cls from "./welcome.module.scss"

import AboutUs from './aboutUs'
import Feature from './feature'

export default function Welcome() {
    return (
        <div className={cls.welcome}>
            <div className={cls.welcomeContainer}>
                <div className={cls.welcomeFirstbox}>
                    <div className={cls.welcomeInfo}>
                        <div className={cls.welcomeInfocontainer}>
                            <h3> WELCOME</h3>
                            <hr />
                            <p className={cls.solutionDescription}>All our efforts and investments are geared
                                towards offering better solutions.</p>
                            <p className={cls.timeDescription}>Sometimes goods can arrive early when they are being
                                brought into the country. Other times items need a place
                                to be stored for the short- or long- term prior to export
                                headquarters.</p>
                            <div className={cls.welcomeAvtor}>
                                <div>
                                    <h4>John Doe</h4>
                                    <p>Chief Executive Officer</p>
                                </div>
                                <div>
                                    <img src='signature_01 1.png' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={cls.welcomeFirstboxImg}>
                        <img src='welcome1.png' />
                    </div>
                </div>
                <div className={cls.welcomeSecondbox}>
                    <div>
                        <img src='welcome2.png' />
                    </div>
                    <div className={cls.welcomeSecondboxImg}>
                        <img src='welcome3.png' />
                    </div>
                    <div>
                        <img src='welcome4.png' />
                    </div>
                </div>
                
            </div>
            <AboutUs/>
            <Feature/>
        </div>
    )
}
