import { useRef, useEffect } from "react"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
}

export default function Testimonial() {

    const sliderRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        // Initialize background image for dynamically loaded component
        const initBackground = () => {
            if (sectionRef.current) {
                const bgUrl = sectionRef.current.getAttribute('data-background')
                if (bgUrl) {
                    // Set background image with all necessary properties
                    sectionRef.current.style.backgroundImage = `url(${bgUrl})`
                    sectionRef.current.style.backgroundSize = 'cover'
                    sectionRef.current.style.backgroundPosition = 'center'
                    sectionRef.current.style.backgroundRepeat = 'no-repeat'
                }
            }
        }
        
        // Run immediately and also after a small delay to ensure DOM is ready
        initBackground()
        const timer = setTimeout(initBackground, 100)
        
        return () => clearTimeout(timer)
    }, [])

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }
    return (
        <>
            <section ref={sectionRef} className="testimonial-area-two testimonial-bg-two" data-background="/assets/img/bg/h2_testimonial_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title-two white-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">Client Testimonials</span>
                                <h2 className="title tg-element-title">What Our Clients Say About OgaalSan's ICT Solutions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item-wrap-two">
                        <Slider ref={sliderRef} {...settings} className="row testimonial-active-two">
                            <div className="col-lg-6">
                                <div className="testimonial-item-two">
                                    <div className="testimonial-content-two">
                                        <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>"OgaalSan transformed our ICT infrastructure with expert solutions. Their team delivered a comprehensive digital transformation that improved our operational efficiency and business growth."</p>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar01.png" alt="" />
                                            </div>
                                            <div className="avatar-info">
                                                <h2 className="title">Ahmed Hassan</h2>
                                                <span>IT Director, Tech Solutions Ltd</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item-two">
                                    <div className="testimonial-content-two">
                                        <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>"The training and capacity building program from OgaalSan was exceptional. Our team gained valuable digital skills that have directly contributed to our organization's innovation and productivity."</p>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar02.png" alt="" />
                                            </div>
                                            <div className="avatar-info">
                                                <h2 className="title">Fatima Ali</h2>
                                                <span>HR Manager, Digital Innovations Co.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item-two">
                                    <div className="testimonial-content-two">
                                        <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>"OgaalSan's digital marketing strategies helped us reach new markets and increase our online presence. Their data-driven approach delivered measurable results that exceeded our expectations."</p>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar01.png" alt="" />
                                            </div>
                                            <div className="avatar-info">
                                                <h2 className="title">Mohamed Ibrahim</h2>
                                                <span>Marketing Director, Business Growth Inc.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className="testimonial-nav-two">
                            <button type="button" className="slick-prev slick-arrow" onClick={previous}>
                                <i className="flaticon-right-arrow" />
                            </button>
                            <button type="button" className="slick-next slick-arrow" onClick={next}>
                                <i className="flaticon-right-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
