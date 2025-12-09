import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import Features from "@/components/sections/home1/Features";
import About from "@/components/sections/home1/About";
import Services from "@/components/sections/home1/Services";

// Lazy load below-the-fold components for better initial load performance
const Overview = dynamic(() => import("@/components/sections/home1/Overview"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Choose = dynamic(() => import("@/components/sections/home1/Choose"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Project = dynamic(() => import("@/components/sections/home1/Project"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Cta = dynamic(() => import("@/components/sections/home1/Cta"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Testimonial = dynamic(() => import("@/components/sections/home1/Testimonial"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Blog = dynamic(() => import("@/components/sections/home1/Blog"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Request = dynamic(() => import("@/components/sections/home1/Request"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});

export default function Home1() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2}>
        <Banner />
        <Features />
        <About />
        {/* <Brand /> */}
        <Services />
        <Overview />
        <Choose />
        <Project />
        <Cta />
        {/* <Team /> */}
        <Testimonial />
        {/* <Pricing /> */}
        <Blog />
        {/* <Request /> */}
      </Layout>
    </>
  );
}
