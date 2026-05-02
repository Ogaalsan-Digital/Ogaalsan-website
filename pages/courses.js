import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { coursesData } from "@/util/coursesData";

export default function Courses() {
  const courses = coursesData;

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
                      <Link href={`/course/${course.id}`}>
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
                            cursor: "pointer"
                          }}
                        />
                      </Link>
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
                      <Link href={`/course/${course.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {course.title}
                      </Link>
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
                      href={`/course/${course.id}`}
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
                      View Details
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
