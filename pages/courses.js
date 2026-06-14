import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/courses/CourseCard";
import { coursesData } from "@/util/coursesData";
import { fetchPublishedCourses, mapApiCourse } from "@/util/coursesApi";

export default function Courses({ courses, source }) {
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Our Courses">
      <section
        className="services-area-five inner-services-bg"
        data-background="/assets/img/bg/inner_services_bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title-two text-center mb-50">
                <h2 className="title">ICT &amp; Digital Skills Training Courses</h2>
                <p>
                  Practical, hands-on training programs designed to build digital
                  capabilities and empower your team with essential ICT skills.
                </p>
                {source === "api" && (
                  <p style={{ fontSize: "14px", color: "#3FA9F5", marginTop: "10px" }}>
                    Courses are synced from the Ogaalsan admin panel.
                  </p>
                )}
              </div>
            </div>
          </div>

          {courses.length > 0 ? (
            <div className="row justify-content-center g-4">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="courses-empty-state">
                  <h3>No courses published yet</h3>
                  <p>
                    Register courses in the Ogaalsan admin panel and set their
                    status to Published to display them here.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const courses = await fetchPublishedCourses();

    if (courses.length > 0) {
      return {
        props: {
          courses,
          source: "api",
        },
      };
    }
  } catch (error) {
    console.error("Failed to load courses from API:", error.message);
  }

  return {
    props: {
      courses: coursesData.map((course) => mapApiCourse(course)),
      source: "static",
    },
  };
}
