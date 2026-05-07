import Hero from "@/components/home/Hero";
import QuickActions from "@/components/home/QuickActions";
import Departments from "@/components/home/Departments";
import WhyChoose from "@/components/home/WhyChoose";
import Doctors from "@/components/home/Doctors";
import Facilities from "@/components/home/Facilities";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <Departments />
      <WhyChoose />
      <Doctors />
      <Facilities />
      <Testimonials/>
      <CTA />
    </>
  );
}