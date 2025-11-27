import Accordion from "@/components/elements/Accordion"
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"

export default function ServiceDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Service Details">
                <div>
                    <section className="services-details-area pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-71 order-0 order-lg-2">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/ogalsan/person.jpg" alt="ICT Strategy & Consulting" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">ICT Strategy &amp; Consulting for Somali Organisations</h2>
                                            <p>At OgaalSan, we work with Somali businesses, NGOs, and public institutions to assess your current ICT systems, identify gaps and opportunities, and design a practical digital roadmap that aligns technology with your real challenges and goals.</p>
                                            <p>Our consultants understand the unique context of operating in Somalia—from connectivity constraints to budget realities—and help you prioritize ICT investments that deliver measurable impact while building resilience and scalability.</p>
                                            <div className="sd-inner-wrap">
                                                <div className="row align-items-center">
                                                    <div className="col-56">
                                                        <div className="content">
                                                            <h3 className="title-two">Practical ICT solutions that fit your context</h3>
                                                            <p>We translate your operational needs into clear ICT architectures, step-by-step implementation plans, and realistic timelines. Every recommendation considers your local infrastructure, team capacity, and budget constraints.</p>
                                                            <ul className="list-wrap">
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Clear ICT vision &amp; practical roadmap</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Infrastructure &amp; cloud strategy for Somalia</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Security, resilience &amp; compliance support</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Better service delivery &amp; user experience</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-44">
                                                        <div className="thumb">
                                                            <img src="/assets/img/ogalsan/person.jpg" alt="ICT Strategy Consulting" />
                                                            <VideoPopup style={3} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Our ICT advisory team helps you make informed technology choices, structure implementation projects that fit your capacity, and ensure every investment contributes to better operations, stronger accountability, and long-term sustainability.</p>
                                            <div className="company-benefit-wrap">
                                                <h2 className="title-two">Why Choose OgaalSan for ICT Consulting</h2>
                                                <p>Working with OgaalSan gives you access to ICT experts who understand the Somali context, proven methodologies adapted for local conditions, and practical guidance that reduces risk and accelerates your digital transformation journey.</p>
                                                <div className="accordion-wrap-three">
                                                    <Accordion />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-29">
                                    <aside className="services-sidebar">
                                        <div className="services-cat-list mb-30">
                                            <ul className="list-wrap">
                                                <li className="active"><Link href="/services-details">ICT Strategy &amp; Consulting <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details-2">Training &amp; Capacity Building <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details-3">Digital Business Development <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Digital Marketing &amp; Growth <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Cloud &amp; Infrastructure Services <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Data &amp; Analytics Solutions <i className="flaticon-right-arrow" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="sw-title">Service Brochure</h4>
                                            <div className="services-brochure-wrap">
                                                <p>Download our ICT services profile to explore how OgaalSan can support your organisation's digital transformation journey.</p>
                                                <Link href="#" className="download-btn"><i className="far fa-file-pdf" />PDF. Download</Link>
                                                <Link href="#" className="download-btn"><i className="far fa-file-alt" />DOC. Download</Link>
                                            </div>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="sw-title">Get a Free Quote</h4>
                                            <div className="services-widget-form">
                                                <form action="#">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Your Name" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail Address" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <textarea name="message" placeholder="Type Your Message" />
                                                    </div>
                                                    <button type="submit" className="submit-btn">Send Message</button>
                                                </form>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-details-area-end */}
                    {/* brand-area */}
                    <div className="brand-area-seven">
                        <div className="container">
                            {/* <BrandSlider /> */}
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}