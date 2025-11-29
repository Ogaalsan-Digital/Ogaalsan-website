import Layout from "@/components/layout/Layout"
import Image from "next/image"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                    <section className="inner-contact-area pt-120 pb-120">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="inner-contact-img">
                                        <Image src="/assets/img/ogalsan/contact.jpg" alt="Contact OgaalSan Consultancy" width={600} height={800} loading="lazy" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="inner-contact-info">
                                        <h2 className="title">Get in Touch With OgaalSan</h2>
                                        <p>Share your ICT, training, or digital innovation needs and our team will get back to you as soon as possible.</p>
                                        <div className="contact-form contact-form-inner">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-grp">
                                                            <input type="text" placeholder="Name *" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-grp">
                                                            <input type="email" placeholder="E-mail *" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-grp">
                                                            <input type="text" placeholder="Phone / WhatsApp *" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-grp">
                                                            <input type="text" placeholder="Subject *" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-grp">
                                                            <textarea placeholder="How can we help you? *" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-three w-100">Send Message</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}