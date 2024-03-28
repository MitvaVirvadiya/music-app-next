import AboutUs from "@/components/AboutUs";
import CourseSection from "@/components/CourseSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Webinars from "@/components/Webinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/90 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <CourseSection />
      <AboutUs />
      <Testimonials />
      <Webinars />
      <Instructors />
      <Footer />
    </main>
  );
}
