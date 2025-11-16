import VideoPopup from "@/components/elements/PopupVideo"
import Link from "next/link"

export default function Banner() {
    return (
        <>
            <section className="banner-area-two banner-bg-two" data-background="/assets/img/banner/h2_banner_bg.jpg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10 col-md-11">
                            <div className="banner-content-two text-center">
                                <div className="hero-logo mb-3" data-aos="fade-up" data-aos-delay={0}>
                                    <img src="/assets/img/logo/hero-logo.png" alt="OgaalSan Consultancy" />
                                </div>
                                <span className="sub-title" data-aos="fade-up" data-aos-delay={100}>ICT &amp; Digital Innovation Experts</span>
                                <h2 className="title" data-aos="fade-up" data-aos-delay={300}>Smart Digital Solutions For Your Business</h2>
                                <p data-aos="fade-up" data-aos-delay={500}>We design and implement modern ICT systems, digital products, and data-driven strategies that help organizations grow and innovate.</p>
                                <div className="banner-btn">
                                    <Link href="/services" className="btn" data-aos="fade-right" data-aos-delay={700}>Our Services</Link>
                                    <VideoPopup style={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap">
                    <img src="/assets/img/banner/h2_banner_shape01.png" alt="" />
                    <img src="/assets/img/banner/h2_banner_shape02.png" alt="" />
                    <img src="/assets/img/banner/h2_banner_shape03.png" alt="" data-aos="zoom-in-up" data-aos-delay={800} />
                </div>
            </section>
        </>
    )
}
