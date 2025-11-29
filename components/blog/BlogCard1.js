import Image from "next/image"
import Link from "next/link"

export default function BlogCard1({ item }) {
    const imageSrc = item.img?.startsWith('/assets') ? item.img : `/assets/img/blog/${item.img}`
    
    return (
        <>
            <div className="col-md-6">
                <div className="blog-post-item-two">
                    <div className="blog-post-thumb-two">
                        <Link href={`/blog/${item.id}`}> <Image
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            src={imageSrc} alt="" /></Link>
                        <Link href="/blog" className="tag tag-two">{item.category}</Link>
                    </div>
                    <div className="blog-post-content-two">
                        <h2 className="title"><Link href={`/blog/${item.id}`}>{item.title}</Link></h2>
                        <p>Everything you need to start building area atching presence for your business.</p>
                        <div className="blog-meta">
                            <ul className="list-wrap">
                                <li>
                                    <Link href={`/blog/${item.id}`}> <img src={item.authorImg || "/assets/img/ogalsan/image (8).png"} alt={item.author} />{item.author}</Link>
                                </li>
                                <li><i className="far fa-calendar" />{item.date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
