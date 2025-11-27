import Accordion from "@/components/elements/Accordion"
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"

export default function ServiceDetails3() {
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
                                            <img src="/assets/img/ogalsan/factory.jpg" alt="Digital Business Development" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Digital Business Development for Somali Organisations</h2>
                                            <p>At OgaalSan, we help Somali businesses and organisations design new digital services, optimize core processes, and unlock growth opportunities through technology. We work with you to identify where digital innovation can create the most value—whether in customer service, operations, or new revenue streams.</p>
                                            <p>Our approach combines business analysis, user-centered design, and practical implementation support. We focus on solutions that fit your context, budget, and team capacity, ensuring that every digital initiative delivers measurable impact.</p>
                                            <div className="sd-inner-wrap">
                                                <div className="row align-items-center">
                                                    <div className="col-56">
                                                        <div className="content">
                                                            <h3 className="title-two">Digital solutions that drive real growth</h3>
                                                            <p>We help you map your key workflows, identify bottlenecks, and redesign processes using simple, user-friendly digital tools. The result is faster service delivery, clearer responsibilities, and better experiences for the people you serve.</p>
                                                            <ul className="list-wrap">
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Digital product &amp; service design</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Process optimization &amp; automation</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Innovation &amp; go-to-market support</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Business model transformation</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-44">
                                                        <div className="thumb">
                                                            <img src="/assets/img/ogalsan/factory.jpg" alt="Digital Business Development" />
                                                            <VideoPopup style={3} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Our digital business development services help you move from paper-based processes to efficient digital platforms, from manual workflows to automated systems, and from traditional services to innovative digital offerings that meet the needs of today's customers and beneficiaries.</p>
                                            <div className="company-benefit-wrap">
                                                <h2 className="title-two">Why Choose OgaalSan for Digital Business Development</h2>
                                                <p>Working with OgaalSan gives you access to business development experts who understand the Somali market, proven methodologies for digital transformation, and practical support that helps you launch and scale new digital initiatives successfully.</p>
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
                                                <li><Link href="/services-details">ICT Strategy &amp; Consulting <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details-2">Training &amp; Capacity Building <i className="flaticon-right-arrow" /></Link></li>
                                                <li className="active"><Link href="/services-details-3">Digital Business Development <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Digital Marketing &amp; Growth <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Cloud &amp; Infrastructure Services <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Data &amp; Analytics Solutions <i className="flaticon-right-arrow" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="sw-title">Service Brochure</h4>
                                            <div className="services-brochure-wrap">
                                                <p>Download our digital business development services profile to explore how OgaalSan can support your organisation's growth initiatives.</p>
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