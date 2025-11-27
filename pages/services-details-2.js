import Accordion from "@/components/elements/Accordion"
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"

export default function ServiceDetails2() {
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
                                            <img src="/assets/img/ogalsan/training.jpg" alt="Training & Capacity Building" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Training &amp; Capacity Building for Somali Teams</h2>
                                            <p>At OgaalSan, we understand that technology alone doesn't drive transformation—your team's digital skills do. We deliver practical, hands-on training programs designed specifically for Somali organisations, focusing on the tools and platforms your staff actually use every day.</p>
                                            <p>Our training approach blends classroom workshops, on-the-job coaching, and follow-up support to ensure new skills are applied immediately. We adapt our programs to your team's current level, your operational context, and your budget, making digital capability building accessible and sustainable.</p>
                                            <div className="sd-inner-wrap">
                                                <div className="row align-items-center">
                                                    <div className="col-56">
                                                        <div className="content">
                                                            <h3 className="title-two">Practical digital skills that make a difference</h3>
                                                            <p>We focus on real tasks—managing data, using business applications, collaborating online, and leveraging digital tools for better service delivery. Every training session is designed to show immediate value and build confidence.</p>
                                                            <ul className="list-wrap">
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Role-based digital skills training</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Hands-on workshops &amp; practical exercises</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />On-the-job coaching &amp; mentoring</li>
                                                                <li><img src="/assets/img/icons/check_icon.svg" alt="" />Follow-up support &amp; continuous learning</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-44">
                                                        <div className="thumb">
                                                            <img src="/assets/img/ogalsan/training.jpg" alt="Training & Capacity Building" />
                                                            <VideoPopup style={3} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Our training programs build a digitally capable workforce that can support your organisation's growth and innovation goals. Over time, this creates a culture of continuous learning where teams regularly use technology to improve services and operations.</p>
                                            <div className="company-benefit-wrap">
                                                <h2 className="title-two">Why Choose OgaalSan for Training &amp; Capacity Building</h2>
                                                <p>Working with OgaalSan gives you access to trainers who understand the Somali context, practical training methodologies adapted for local conditions, and ongoing support that ensures your team successfully applies new digital skills.</p>
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
                                                <li className="active"><Link href="/services-details-2">Training &amp; Capacity Building <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details-3">Digital Business Development <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Digital Marketing &amp; Growth <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Cloud &amp; Infrastructure Services <i className="flaticon-right-arrow" /></Link></li>
                                                <li><Link href="/services-details">Data &amp; Analytics Solutions <i className="flaticon-right-arrow" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="sw-title">Service Brochure</h4>
                                            <div className="services-brochure-wrap">
                                                <p>Download our training services profile to explore how OgaalSan can support your team's digital skills development.</p>
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