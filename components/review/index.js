import React from 'react'
import cls from "./review.module.scss"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function Review() {
    return (
        <div className={cls.review}>     
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                        <div className={cls.reviewContainer}>
                            <div className={cls.reviewTitlebox}>
                                <h2>WHAT OUR CUSTOMERS SAY</h2>
                                <hr />
                                <p>Safety, quality and professionalism in performance</p>
                            </div>
                            <div className={cls.reviewInfo}>
                                <p>Your ability to handle any size load, to-and-from anywhere and
                                    within any service time frame has made you our best and only
                                    choice for handling our shipments.</p>
                                    <div className={cls.profileInfo}>
                                        <img src='photo.png' />
                                        <p>KMG GEO</p>
                                        <h4>Hanna Fowell</h4>
                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cls.reviewContainer}>
                            <div className={cls.reviewTitlebox}>
                                <h2>WHAT OUR CUSTOMERS SAY</h2>
                                <hr />
                                <p>Safety, quality and professionalism in performance</p>
                            </div>
                            <div className={cls.reviewInfo}>
                                <p>Your ability to handle any size load, to-and-from anywhere and
                                    within any service time frame has made you our best and only
                                    choice for handling our shipments.</p>
                                    <div className={cls.profileInfo}>
                                        <img src='photo.png' />
                                        <p>KMG GEO</p>
                                        <h4>Hanna Fowell</h4>
                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
        </div>
    )
}
