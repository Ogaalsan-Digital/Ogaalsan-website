import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "../../util/blog.json"

export default function BlogDetails() {
    let Router = useRouter()
    const [blogPost, setBlogPost] = useState(null)
    const { id } = Router.query

    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
                {blogPost && (
                    <>
                        <section className="blog-details-area pt-120 pb-120">
                            <div className="container">
                                <div className="blog-details-wrap">
                                    <div className="row justify-content-center">
                                        <div className="col-71">
                                            <div className="blog-details-thumb">
                                                <img src={`/assets/img/blog/${blogPost.img}`} className="w-100" alt="" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h2 className="title">{blogPost.title}</h2>
                                                <div className="blog-meta-three">
                                                    <ul className="list-wrap">
                                                        <li><i className="far fa-calendar" />{blogPost.date}</li>
                                                        <li><img src="/assets/img/blog/blog_avatar01.png" alt="" /> by <Link href={`/blog/${blogPost.id}`}>{blogPost.author}</Link></li>
                                                        <li><i className="fas fa-tags" /> <Link href="/blog">{blogPost.category}</Link></li>
                                                    </ul>
                                                </div>
                                                {Array.isArray(blogPost.content) &&
                                                    blogPost.content.map((paragraph, index) => (
                                                        <p key={index}>{paragraph}</p>
                                                    ))}
                                                <div className="bd-content-bottom">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-7">
                                                            <div className="post-tags">
                                                                <h5 className="title">Tags:</h5>
                                                                <ul className="list-wrap">
                                                                    <li><Link href="/blog">{blogPost.category}</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-5">
                                                            <div className="blog-post-share">
                                                                <h5 className="title">Share:</h5>
                                                                <ul className="list-wrap">
                                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="blog-avatar-wrap mb-65">
                                                <div className="blog-avatar-img">
                                                    <Link href="#"><img src="/assets/img/blog/avatar.png" alt="img" /></Link>
                                                </div>
                                                <div className="blog-avatar-info">
                                                    <span className="designation">Author</span>
                                                    <h4 className="name"><Link href={`/blog/${blogPost.id}`}>{blogPost.author}</Link></h4>
                                                    <p>{blogPost.author} is part of the OgaalSan Consultancy team, focused on delivering practical {blogPost.category.toLowerCase()} insights and solutions.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-29">
                                            <aside className="blog-sidebar">
                                                <div className="sidebar-search">
                                                    <form action="#">
                                                        <input type="text" placeholder="Search Here . . ." />
                                                        <button type="submit"><i className="flaticon-search" /></button>
                                                    </form>
                                                </div>
                                                <div className="blog-widget">
                                                    <h4 className="bw-title">Categories</h4>
                                                    <div className="bs-cat-list">
                                                        <ul className="list-wrap">
                                                            <li><Link href="#">Business <span>(02)</span></Link></li>
                                                            <li><Link href="#">Consulting <span>(08)</span></Link></li>
                                                            <li><Link href="#">Corporate <span>(05)</span></Link></li>
                                                            <li><Link href="#">Design <span>(02)</span></Link></li>
                                                            <li><Link href="#">Fashion <span>(11)</span></Link></li>
                                                            <li><Link href="#">Marketing <span>(12)</span></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-widget">
                                                    <h4 className="bw-title">Recent Posts</h4>
                                                    <div className="rc-post-wrap">
                                                        {data.slice(0, 4).map((post) => (
                                                            <div key={post.id} className="rc-post-item">
                                                                <div className="thumb">
                                                                    <Link href={`/blog/${post.id}`}> <Image
                                                                        width="0"
                                                                        height="0"
                                                                        sizes="100vw"
                                                                        style={{ width: "auto", height: "auto" }} src={`/assets/img/blog/${post.img}`} alt="" /></Link>
                                                                </div>
                                                                <div className="content">
                                                                    <span className="date"><i className="far fa-calendar" />{post.date}</span>
                                                                    <h2 className="title"><Link href={`/blog/${post.id}`}>{post.title}</Link></h2>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="blog-widget">
                                                    <h4 className="bw-title">Tags</h4>
                                                    <div className="bs-tag-list">
                                                        <ul className="list-wrap">
                                                            <li><Link href="#">Finance</Link></li>
                                                            <li><Link href="#">Consultancy</Link></li>
                                                            <li><Link href="#">Data</Link></li>
                                                            <li><Link href="#">Agency</Link></li>
                                                            <li><Link href="#">Travel</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </Layout>
        </>
    )
}