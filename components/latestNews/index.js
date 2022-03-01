import React from 'react'
import { Calendar, Chat, User } from '../../svg'
import cls from "./latestNews.module.scss"

export default function LatestNews() {
    return (
        <div className={cls.latestNews}>
            <div className={cls.container}>
                <div className={cls.header}>
                    <h3>LATEST NEWS</h3>
                    <hr />
                    <p>Connecting cargo markets and the world</p>
                </div>
                <div className={cls.cardsBox}>
                    <div className={cls.card}>
                        <div className={cls.cardImg}>
                            <img src='latestImg1.png' />
                        </div>
                        <div className={cls.detailsBox}>
                            <div className={cls.detail}>
                                <Calendar />
                                <p>July 28, 2017</p>
                            </div>
                            <div className={cls.detail}>
                                <User/>
                                <p>by Bold</p>
                            </div>
                            <div className={cls.detail}>
                                <Chat/>
                                <p>1</p>
                            </div>
                            
                        </div>
                        <div className={cls.cardTitle}>
                                <p>
                                    DE celebrates 40 years of career
                                </p>
                            </div>
                    </div>
                    <div className={cls.card}>
                        <div className={cls.cardImg}>
                            <img src='latestImg2.png' />
                        </div>
                        <div className={cls.detailsBox}>
                            <div className={cls.detail}>
                                <Calendar />
                                <p>July 28, 2017</p>
                            </div>
                            <div className={cls.detail}>
                                <User/>
                                <p>by Bold</p>
                            </div>
                            <div className={cls.detail}>
                                <Chat/>
                                <p>1</p>
                            </div>
                            
                        </div>
                        <div className={cls.cardTitle}>
                                <p>
                                    DE celebrates 40 years of career
                                </p>
                            </div>
                    </div>
                    <div className={cls.card}>
                        <div className={cls.cardImg}>
                            <img src='latestImg3.png' />
                        </div>
                        <div className={cls.detailsBox}>
                            <div className={cls.detail}>
                                <Calendar />
                                <p>July 28, 2017</p>
                            </div>
                            <div className={cls.detail}>
                                <User/>
                                <p>by Bold</p>
                            </div>
                            <div className={cls.detail}>
                                <Chat/>
                                <p>1</p>
                            </div>
                            
                        </div>
                        <div className={cls.cardTitle}>
                                <p>
                                    DE celebrates 40 years of career
                                </p>
                            </div>
                    </div>
                    <div className={cls.card}>
                        <div className={cls.cardImg}>
                            <img src='latestImg4.png' />
                        </div>
                        <div className={cls.detailsBox}>
                            <div className={cls.detail}>
                                <Calendar />
                                <p>July 28, 2017</p>
                            </div>
                            <div className={cls.detail}>
                                <User/>
                                <p>by Bold</p>
                            </div>
                            <div className={cls.detail}>
                                <Chat/>
                                <p>1</p>
                            </div>
                            
                        </div>
                        <div className={cls.cardTitle}>
                                <p>
                                    DE celebrates 40 years of career
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
