import Accordion from "@/components/elements/Accordion";
import VideoPopup from "@/components/elements/PopupVideo";
import Layout from "@/components/layout/Layout";
import BrandSlider from "@/components/slider/BrandSlider";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetails() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Service Details">
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <Image
                        src="/assets/img/ogalsan/person.jpg"
                        alt="ICT Strategy & Consulting"
                        width={800}
                        height={600}
                        loading="lazy"
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">
                        ICT Strategy &amp; Consulting
                      </h2>
                      <p>
                        We help organizations assess ICT systems, identify gaps, and design practical digital roadmaps.
                      </p>
                      <div className="sd-inner-wrap">
                        <div className="row align-items-center">
                          <div className="col-56">
                            <div className="content">
                              <h3 className="title-two">
                                Our Services
                              </h3>
                              <ul className="list-wrap">
                                <li>
                                  <Image
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    loading="lazy"
                                  />
                                  ICT vision &amp; roadmap
                                </li>
                                <li>
                                  <Image
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    loading="lazy"
                                  />
                                  Infrastructure &amp; cloud
                                </li>
                                <li>
                                  <Image
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    loading="lazy"
                                  />
                                  Security &amp; compliance
                                </li>
                                <li>
                                  <Image
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    loading="lazy"
                                  />
                                  Implementation support
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-44">
                            <div className="thumb">
                              <Image
                                src="/assets/img/ogalsan/person.jpg"
                                alt="ICT Strategy Consulting"
                                width={500}
                                height={400}
                                loading="lazy"
                              />
                              <VideoPopup style={3} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="company-benefit-wrap">
                        <h2 className="title-two">
                          Why Choose Us
                        </h2>
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
                        <li className="active">
                          <Link href="/services-details">
                            ICT Strategy &amp; Consulting{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details-2">
                            Training &amp; Capacity Building{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details-3">
                            Digital Business Development{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details">
                            Digital Marketing &amp; Growth{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="services-widget">
                      <h4 className="sw-title">Service Brochure</h4>
                      <div className="services-brochure-wrap">
                        <Link href="#" className="download-btn">
                          <i className="far fa-file-pdf" />
                          PDF. Download
                        </Link>
                        <Link href="#" className="download-btn">
                          <i className="far fa-file-alt" />
                          DOC. Download
                        </Link>
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
                            <textarea
                              name="message"
                              placeholder="Type Your Message"
                            />
                          </div>
                          <button type="submit" className="submit-btn">
                            Send Message
                          </button>
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
            <div className="container">{/* <BrandSlider /> */}</div>
          </div>
        </div>
      </Layout>
    </>
  );
}
