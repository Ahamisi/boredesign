import Image from 'next/image';
import Link from 'next/link';

export default function RealtorAcademySection() {
  return (
    <section className="w-full bg-primary-blue-300 py-4 md:py-16 px-2 lg:px-0">
      <div className="max-w-6xl lg:max-w-7xl mx-auto rounded-3xl bg-primary-blue-300 flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 w-full ">
          <span className="inline-block bg-primary-blue-200 text-white text-sm px-5 py-2 rounded-full mb-6 font-medium w-fit">
            Realtor Academy
          </span>
          <p className="text-white text-lg mb-8 leading-relaxed">
            At BO Properties, we are more than developers; we are partners in growth and empowerment. Our innovative BO Properties Realtors Academy trains aspiring realtors, providing mentorship, hands-on skills, and a pathway to earning incentives and commissions as they embark on their real estate careers. BO Properties remains a trusted name in Nigeria’s real estate market, striving to elevate industry standards and empower communities.
          </p>
          <Link href="https://wa.me/2349075149463" target="_blank" className="bg-white text-primary-blue-300 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition w-fit cursor-pointer">
            Inquire about our Academy
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8 w-full">
          <div className="w-full h-80 md:h-full relative rounded-2xl overflow-hidden">
            <Image
              src="/realtor-academy.jpg" // Replace with your actual image path
              alt="Realtor Academy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}