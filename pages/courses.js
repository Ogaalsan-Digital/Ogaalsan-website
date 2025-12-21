import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Courses() {
  const courses = [
    {
      id: 1,
      category: "BOOTCAMP",
      title: "ICT Strategy & Consulting Bootcamp: Digital Transformation in 5 Days",
      description: "Learn how to assess, plan, and implement ICT strategies for your organization. This intensive bootcamp is designed for both new leaders launching their first digital transformation and experienced professionals looking to enhance their strategic ICT capabilities and drive organizational growth.",
      image: "/assets/img/ogalsan/strategy.jpg",
    },
    {
      id: 2,
      category: "TRAINING",
      title: "Digital Skills & Productivity Masterclass",
      description: "Master essential digital tools and productivity techniques that will transform how your team works. Learn to leverage modern applications for data management, collaboration, and streamlined operations in this comprehensive training program.",
      image: "/assets/img/ogalsan/training.jpg",
    },
    {
      id: 3,
      category: "WORKSHOP",
      title: "Digital Business Development Workshop: Build Your Digital Products in 4 Weeks",
      description: "Create and launch your first digital business solution in less than 4 weeks. The goal of this workshop is to take you from an idea to launching your digital product within just a 4-week intensive program!",
      image: "/assets/img/ogalsan/person.jpg",
    },
    {
      id: 4,
      category: "MASTERCLASS",
      title: "Digital Marketing & Growth Masterclass",
      description: "Discover how to create effective digital marketing campaigns and grow your online presence. Learn social media strategies, content creation, analytics, and performance measurement to drive real business results.",
      image: "/assets/img/ogalsan/digital-1.jpg",
    },
    {
      id: 5,
      category: "BOOTCAMP",
      title: "Cloud & Infrastructure Bootcamp",
      description: "Get hands-on experience with cloud computing fundamentals, infrastructure management, and security best practices. Perfect for IT professionals and organizations looking to modernize their technology infrastructure.",
      image: "/assets/img/ogalsan/infrustructure.jpg",
    },
    {
      id: 6,
      category: "WORKSHOP",
      title: "Technical Skills & Hands-On Workshops",
      description: "Practical, interactive workshops focused on building real technical capabilities. Participate in hands-on exercises and learn from industry experts in a collaborative learning environment designed for skill-building and knowledge application.",
      image: "/assets/img/ogalsan/training-2.jpg",
    },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Our Courses">
        <section className="services-area-five inner-services-bg" data-background="/assets/img/bg/inner_services_bg.jpg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="section-title-two text-center mb-50">
                  <h2 className="title">ICT &amp; Digital Skills Training Courses</h2>
                  <p>
                    Practical, hands-on training programs designed to build
                    digital capabilities and empower your team with essential ICT
                    skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {courses.map((course) => (
                <div key={course.id} className="col-lg-4 col-md-6 col-sm-10 mb-30">
                  <div style={{ 
                    backgroundColor: "#fff", 
                    borderRadius: "10px", 
                    padding: "25px",
                    boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <span
                      style={{
                        color: "#3FA9F5",
                        fontWeight: "600",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "15px",
                        display: "inline-block",
                      }}
                    >
                      {course.category}
                    </span>
                    <div style={{ borderRadius: "10px", overflow: "hidden", height: "200px", marginBottom: "20px" }}>
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={400}
                        height={200}
                        loading="lazy"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <h2
                      className="title"
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        lineHeight: "1.3",
                        color: "#22428F",
                      }}
                    >
                      {course.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#334770",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        flexGrow: 1,
                      }}
                    >
                      {course.description}
                    </p>
                    <Link
                      href="/contact"
                      className="btn btn-three"
                      style={{
                        backgroundColor: "#3FA9F5",
                        color: "#fff",
                        padding: "10px 25px",
                        borderRadius: "5px",
                        fontWeight: "600",
                        textDecoration: "none",
                        display: "inline-block",
                        transition: "all 0.3s ease",
                        fontSize: "14px",
                        width: "100%",
                        textAlign: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#22428F";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#3FA9F5";
                      }}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
