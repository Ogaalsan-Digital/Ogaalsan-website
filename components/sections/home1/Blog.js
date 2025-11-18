import Link from "next/link"

export default function Blog() {
    return (
        <>
            <section className="blog-area-two blog-bg-two" data-background="/assets/img/bg/h2_blog_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">News & Insights</span>
                                <h2 className="title tg-element-title">Latest ICT & Digital Innovation Updates</h2>
                                <p>Stay informed with the latest trends, insights, and best practices in ICT solutions, digital transformation, and technology innovation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_img01.jpg" alt="" /></Link>
                                    <Link href="/blog" className="tag">ICT Solutions</Link>
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="/blog-details">Modernizing Your ICT Infrastructure: A Strategic Guide</Link></h2>
                                    <p>Discover how to transform your organization's ICT infrastructure with modern solutions that drive efficiency and innovation.</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog_avatar01.png" alt="" />Kat Doven</Link>
                                            </li>
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_img02.jpg" alt="" /></Link>
                                    <Link href="/blog" className="tag">Training & Capacity</Link>
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="/blog-details">Building Digital Skills: Essential Training Programs for Your Team</Link></h2>
                                    <p>Learn how comprehensive training and capacity building programs can empower your workforce with essential digital skills.</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog_avatar01.png" alt="" />Kat Doven</Link>
                                            </li>
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_img03.jpg" alt="" /></Link>
                                    <Link href="/blog" className="tag">Digital Marketing</Link>
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="/blog-details">Data-Driven Digital Marketing Strategies That Deliver Results</Link></h2>
                                    <p>Explore effective digital marketing approaches that leverage data analytics to grow your online presence and reach new markets.</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog_avatar01.png" alt="" />Kat Doven</Link>
                                            </li>
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
