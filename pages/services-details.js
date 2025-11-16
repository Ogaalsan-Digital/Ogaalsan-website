import Accordion from "@/components/elements/Accordion"
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"

export default function ServiceDetails() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Service Details">
                <div>
                    <section className="services-details-area pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-71 order-0 order-lg-2">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/services_details01.jpg" alt="" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">ICT Strategy &amp; Consulting for Sustainable Digital Growth</h2>
                                            <p>We work with your team to understand your current ICT landscape, identify gaps and opportunities, and design a practical digital roadmap aligned with your business goals.</p>
                                            <p>Our consultants bring experience across infrastructure, cloud, applications, data, and security, helping you prioritize investments and reduce risk while accelerating innovation.</p>
                                            <div className="sd-inner-wrap">
                                                <div className="row align-items-center">
                                                    <div className="col-56">
                                                        <div className="content">
                                                            <h3 className="title-two">Turn technology into a competitive advantage</h3>
                                                            <p>We translate business requirements into clear ICT architectures, implementation plans, and measurable outcomes so you can move from ideas to execution with confidence.</p>
                                                            <ul className="list-wrap">
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Clear ICT vision &amp; roadmap</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Optimized infrastructure &amp; cloud strategy</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Improved security, resilience &amp; compliance</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Better user and customer experience</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-44">
                                                        <div className="thumb">
                                                            <img src="/assets/img/services/sd_video_img.jpg" alt="" />
                                                            <VideoPopup style={3} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Our ICT advisory team helps you make the right technology choices, structure implementation projects, and ensure that every investment contributes to performance, agility, and long-term value.</p>
                                            <div className="company-benefit-wrap">
                                                <h2 className="title-two">Key Benefits of Our ICT Consulting</h2>
                                                <p>Engaging with us gives you access to senior ICT experts, proven methodologies, and practical guidance that reduces risk and speeds up your digital transformation journey.</p>
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
                                                <li><Link href="/services-details">Training &amp; Capacity Building <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Digital Business Development <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Digital Marketing &amp; Growth <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Cloud &amp; Infrastructure Services <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Data &amp; Analytics Solutions <i className="flaticon-right-arrow" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="sw-title">Brochure</h4>
                                            <div className="services-brochure-wrap">
                                                <p>Download our ICT services profile to explore how we can support your next digital initiative.</p>
                                                <Link href="assets/img/services/services_details01.jpg" target="_blank" download className="download-btn"><i className="far fa-file-pdf" />PDF. Download</Link>
                                                <Link href="assets/img/services/services_details01.jpg" target="_blank" download className="download-btn"><i className="far fa-file-alt" />DOC. Download</Link>
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
                            <BrandSlider />
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}