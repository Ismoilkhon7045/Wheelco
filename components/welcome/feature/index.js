import React from 'react'
import cls from "./feature.module.scss"

export default function Feature() {
    return (
        <div className={cls.feature}>
            <div className={cls.featureLeftbox}>
                <div >
                    <img src='feature1.png' />
                </div>
                <div className={cls.featureimgBlock}>
                    <img src='feature2.png' />
                </div>
            </div>
            <div className={cls.featureInfo}>
                <div className={cls.featureContainer}>
                    <div className={cls.featureInfoBox}>
                        <p className={cls.featureInfoBoxTitle}>THE MAIN FEATURES</p>
                        <hr />
                        <p className={cls.featureInfoBoxDescription}>We care for the environment, which means we
                            are guided by strong values.</p>
                        <div className={cls.featureInfoBoxItems}>
                            <div className={cls.featureBoxItem}>
                                <div className={cls.featureBoxItemimg}>
                                    <img src='featureIcon4.png' />
                                </div>
                                <div className={cls.featureBoxItemInfo}>
                                    <h3>Safe & Secure Delivery Services</h3>
                                    <p>Override the digital divide with additional clickthroughs from
                                        developers and immersion.</p>
                                </div>
                            </div>
                            <div className={cls.featureBoxItem}>
                                <div className={cls.featureBoxItemimg}>
                                    <img src='featureIcon3.png' />
                                </div>
                                <div className={cls.featureBoxItemInfo}>
                                    <h3>Cost Savings</h3>
                                    <p> Nanotechnology immersion along the information highway will close the loop on focusing. </p>
                                </div>
                            </div>
                            <div className={cls.featureBoxItem}>
                                <div className={cls.featureBoxItemimg}>
                                    <img src='featureIcon2.png' />
                                </div>
                                <div className={cls.featureBoxItemInfo}>
                                    <h3>Transport Optimization</h3>
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                                </div>
                            </div>
                            <div className={cls.featureBoxItem}>
                                <div className={cls.featureBoxItemimg}>
                                    <img src='featureIcon1.png' />
                                </div>
                                <div className={cls.featureBoxItemInfo}>

                                    <h3>Proven experience</h3>
                                    <p>Organically grow the holistic world view of disruptive innovation via workplace.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}











