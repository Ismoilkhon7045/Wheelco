import React from 'react'
import cls from './header.module.scss'
import NavBar from './navBar'

const Header = () => {
    return (
        <div className={cls.header}>
            <div className={cls.container}>
                <NavBar />
                <div className={cls.headerTitle}>
                    <h3>WHEELCO TRANSPORT WORDPRESS THEME</h3>
                    <h1>We make your cargo
                        transport simple</h1>
                        <button>OUR SERVICES</button>
                </div>
            </div>
        </div>
    )
}

export default Header