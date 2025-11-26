import Link from "next/link"

export default function Project() {
    return (
        <>
            <section className="project-area-two project-bg-two" data-background="/assets/img/bg/project_bg02.jpg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two mb-40 tg-heading-subheading animation-style3">
                                <span className="sub-title">Our Portfolio</span>
                                <h2 className="title tg-element-title">Recent ICT & Digital Innovation <br /> Projects</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="project-content-top">
                                <p>Explore our successful ICT implementations, digital transformation initiatives, and innovative technology solutions that have helped organizations achieve their goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="project-item-two">
                                <div className="project-thumb-two">
                                    <img src="/assets/img/ogalsan/servers.jpg" alt="ICT Infrastructure Modernization" />
                                </div>
                                <div className="project-content-two">
                                    <h2 className="title"><Link href="/project-details">ICT Infrastructure Modernization</Link></h2>
                                    <span>ICT Solutions</span>
                                    <Link href="/project-details" className="link-btn"><i className="fas fa-chevron-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="project-item-two">
                                <div className="project-thumb-two">
                                    <img src="/assets/img/ogalsan/training-2.jpg" alt="Digital Training Program" />
                                </div>
                                <div className="project-content-two">
                                    <h2 className="title"><Link href="/project-details">Digital Training Program</Link></h2>
                                    <span>Training & Capacity Building</span>
                                    <Link href="/project-details" className="link-btn"><i className="fas fa-chevron-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="project-item-two">
                                <div className="project-thumb-two">
                                    <img src="/assets/img/ogalsan/marketing.jpg" alt="Digital Marketing Campaign" />
                                </div>
                                <div className="project-content-two">
                                    <h2 className="title"><Link href="/project-details">Digital Marketing Campaign</Link></h2>
                                    <span>Digital Marketing</span>
                                    <Link href="/project-details" className="link-btn"><i className="fas fa-chevron-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
