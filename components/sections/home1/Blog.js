import Link from "next/link"
import data from "@/util/blog.json"

export default function Blog() {
    const latestPosts = data.slice(0, 3)

    const getThumbnailSrc = (post) => {
        if (post.id === 1) return "/assets/img/ogalsan/infrustructure.jpg"
        if (post.id === 2) return "/assets/img/ogalsan/process.jpg"
        if (post.id === 3) return "/assets/img/ogalsan/training.jpg"
        return `/assets/img/blog/${post.img}`
    }

    const getExcerpt = (post) => {
        const firstParagraph = Array.isArray(post.content) ? post.content[0] : ""
        if (!firstParagraph) return "Discover how OgaalSan helps organisations plan, build, and grow with ICT and digital innovation."
        return firstParagraph.length > 120 ? `${firstParagraph.slice(0, 120)}...` : firstParagraph
    }

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
                    <div className="row justify-content-center align-items-stretch">
                        {latestPosts.map((post) => (
                            <div key={post.id} className="col-lg-4 col-md-6 col-sm-10 d-flex">
                                <div className="blog-post-item-two">
                                    <div className="blog-post-thumb-two">
                                        <Link href={`/blog/${post.id}`}>
                                            <img src={getThumbnailSrc(post)} alt={post.title} />
                                        </Link>
                                        <Link href="/blog" className="tag">
                                            {post.category}
                                        </Link>
                                    </div>
                                    <div className="blog-post-content-two">
                                        <h2 className="title">
                                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                        </h2>
                                        <p>{getExcerpt(post)}</p>
                                        <div className="blog-meta">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href={`/blog/${post.id}`}>
                                                        <img src={post.authorImg || "/assets/img/ogalsan/image (8).png"} alt={post.author} />
                                                        {post.author}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="far fa-calendar" />
                                                    {post.date}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
