import react from "react";
import { Export } from "../../svg";
import cls from "./ourSolutions.module.scss"

export default function OurSolution() {
    return (
        <div className={cls.OurSolution}>
            <div className="container">
                <div className={cls.solutionTitle}>
                    <p>OUR SOLUTIONS</p>
                </div>
                <hr />
                <div className={cls.solutionDescription}>
                    <p>Logistics through innovation, dedication and technology</p>
                </div>
                <div className={cls.solutionInfo}>
                    <div className={cls.solutionInfobox}>
                        <img src="export.png"/>
                        <p>EXPORT LOGISTICS</p>
                    </div>
                    <div className={cls.solutionInfobox}>
                        <img src="import.png"/>
                        <p>EXPORT LOGISTICS</p>
                    </div>
                    <div className={cls.solutionInfobox}>
                        <img src="kargo.png"/>
                        <p>CARGO EXPRESS</p>
                    </div>
                    <div className={cls.solutionInfobox}>
                        <img src="information.png"/>
                        <p>EXPORT LOGISTICS</p>
                    </div>
                    <div className={cls.solutionInfobox}>
                        <img src="warehousing.png"/>
                        <p>WAREHOUSING AND DISTRIBUTION</p>
                    </div>
                    <div className={cls.solutionInfobox}>
                        <img src="brokerage.png"/>
                        <p>BROKERAGE SERVICES</p>
                    </div>
                </div>
                <button className={cls.solutionBtn}>GET DETAILED QUOTE</button>
            </div>  
        </div>
    )
}