import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"

export default function Services() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Our Services">
                <section className="services-area-five inner-services-bg" data-background="/assets/img/bg/inner_services_bg.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="section-title-two text-center mb-50">
                                    <h2 className="title">ICT &amp; Digital Innovation Services</h2>
                                    <p>We provide end-to-end ICT consulting, training, business development, and digital marketing services that power your digital transformation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <i className="flaticon-briefcase" />
                                            </div>
                                            <h2 className="title">ICT Strategy &amp; Consulting</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <Image src="/assets/img/ogalsan/strategy.jpg" alt="" width={400} height={300} loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '300px' }} />
                                            <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Digital transformation roadmaps</li>
                                            <li>ICT architecture &amp; solution design</li>
                                            <li>Technology governance &amp; advisory</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <i className="flaticon-taxes" />
                                            </div>
                                            <h2 className="title">Training &amp; Capacity Building</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <Image src="/assets/img/ogalsan/training.jpg" alt="" width={400} height={300} loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '300px' }} />
                                            <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Digital skills &amp; productivity training</li>
                                            <li>Technical upskilling &amp; workshops</li>
                                            <li>Customized capacity-building programs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <i className="flaticon-money" />
                                            </div>
                                            <h2 className="title">Digital Business Development</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <Image src="/assets/img/ogalsan/digital-1.jpg" alt="" width={400} height={300} loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '300px' }} />
                                            <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Digital product and service design</li>
                                            <li>Process optimization &amp; automation</li>
                                            <li>Innovation &amp; go-to-market support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <i className="flaticon-business-presentation" />
                                            </div>
                                            <h2 className="title">Business Development</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <Image src="/assets/img/ogalsan/factory.jpg" alt="" width={400} height={300} loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '300px' }} />
                                            <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Business strategy &amp; growth planning</li>
                                            <li>Market analysis &amp; opportunity assessment</li>
                                            <li>Partnership development &amp; networking</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                         
                       
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}