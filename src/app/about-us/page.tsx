import Header from '../components/Header';
import Image from 'next/image';
import AnimatedCounter from '../components/AnimatedCounter';
import PortfolioSlider from '../components/PortfolioSlider';
import RealtorAcademySection from '../components/RealtorAcademy';
import MissionVisionValues from '../components/MissionVisionValues';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
export const metadata = {
  title: 'About Us | BO Properties',
  description: 'Learn about BO Properties, a leading real estate company in Nigeria, delivering premium accommodation and investment opportunities.',
  openGraph: {
    title: 'About Us | BO Properties',
    description: 'Learn about BO Properties, a leading real estate company in Nigeria, delivering premium accommodation and investment opportunities.',
    images: ['/logo-bo-properties.svg'],
    type: 'website',
  },
};

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header isLightMode={true} />

      <main className="max-w-6xl lg:max-w-7xl mx-auto py-24 mt-24 px-4 md:px-0">
        <div className=" mb-2 text-sm text-gray-500 font-semibold tracking-widest">ABOUT US</div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Who We Are?</h1>
        <p className="mb-8 max-w-3xl text-gray-700">
          BO Properties is a forward-thinking real estate company committed to transforming the landscape of property investment and development across Nigeria. With a core focus on delivering premium accommodation solutions and lucrative investment opportunities, we pride ourselves on crafting spaces that seamlessly combine luxury, convenience, and sustainability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Image */}
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="/who-we-are.jpg" // <-- Replace with your actual image path
              alt="Estellar Prime"
              width={700}
              height={450}
              className="rounded-2xl w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Counters */}
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-blue-50 rounded-xl p-6 text-left ">
              <div className="text-5xl font-bold text-[#0B7399]">
                <AnimatedCounter end={4} />
              </div>
              <div className="mt-2 text-lg font-semibold text-[#0B7399]">Projects Completed</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 text-left ">
              <div className="text-5xl font-bold text-[#111116]">
                <AnimatedCounter end={7} />
              </div>
              <div className="mt-2 text-lg font-semibold text-[#111116]">Property Listed</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-left ">
              <div className="text-5xl font-bold text-[#0E976D]">
                <AnimatedCounter end={50} />
              </div>
              <div className="mt-2 text-lg font-semibold text-[#0E976D]">Facilities  Managed</div>
            </div>
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-gray-700">
          Founded by CEO Ifedayo Okungbowa, BO Properties began with a mission to address the housing challenges faced by Nigeria &apos;s urban centres, starting with Lagos. Our portfolio has expanded to include a range of successful projects that reflect our commitment to quality and innovation.
        </p>
        <PortfolioSlider />
      </main>
      <RealtorAcademySection />
      <MissionVisionValues />

      <TeamSection />
      {/* <TestimonialsSection/> */}
      


    </div>
  );
}