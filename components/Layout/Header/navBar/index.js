import React from "react";
import cls from './navBar.module.scss'
import { Clock, Fecebook, Linkedin, Logo, Search, Twitter,Location, Phone } from "../../../../svg";

export default function NavBar() {
    return (
        <div className={cls.navBar}>
            <div className="container">
                <div>
                    <div className={cls.navBartop}>
                        <div className={cls.logo}>
                            <Logo />
                            <p>WHEELCO</p>
                        </div>
                        <div className={cls.workTime}>
                            <div className={cls.workTimeBox}>
                                <Clock />
                                <div>
                                    <p className={cls.title}>Working hours</p>
                                    <p>Mon - Sun: 9-17</p>
                                </div>
                            </div>
                            <div className={cls.workTimeBox}>
                                <Location />
                                <div>
                                    <p className={cls.title}>Location</p>
                                    <p>1010 Avenue, NY</p>
                                </div>
                            </div>
                            <div className={cls.workTimeBox}>
                                <Phone />
                                <div>
                                    <p className={cls.title}>Call Centar</p>
                                    <p>1-800-700-600</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={cls.navBarbottom}>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Blog/News</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        <div className={cls.social}>
                            <Fecebook />
                            <Twitter />
                            <Linkedin />
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}