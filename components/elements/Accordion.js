
import { useState } from 'react'

export default function Accordion() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                            Strategic ICT Roadmap &amp; Planning
                        </button>
                    </h2>
                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p>We assess your current ICT maturity, identify gaps, and design a step-by-step digital transformation roadmap that aligns with your organisation's goals, budget, and capacity. Our plans focus on quick wins and long-term sustainability.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                            Infrastructure &amp; Cloud Architecture Design
                        </button>
                    </h2>
                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p>We design ICT architectures that fit the Somali context—considering connectivity, security, and budget constraints. Whether cloud, on-premise, or hybrid, we help you choose the right infrastructure model that supports your operations today and scales with your growth.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                            Technology Selection &amp; Implementation Support
                        </button>
                    </h2>
                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p>We help you evaluate and select the right technology solutions, structure implementation projects, and provide ongoing guidance to ensure successful deployment. Our support reduces risk and helps your team adopt new systems with confidence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
