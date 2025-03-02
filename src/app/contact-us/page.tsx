import { type Metadata } from "next";
import MapComponent from "@/components/maps";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Contact Us | Universal Public School",
  description: "Universal Public School (UPS)",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ContactUsPage() {
  return (
    <main className="page-top-p padding-x-section section-width mt-[44px]">
      {/* Mobile View */}
      <div className="mt-[30px] flex flex-col gap-6 sm:hidden">
        <section className="rounded-lg bg-admission p-6">
          <img
            src="/call-us.svg"
            alt="Contact icon"
            className="mb-4 h-16 w-16 dark:invert"
          />
          <h2 className="mb-4 text-lg font-semibold">Call Us</h2>
          <h3 className="text-2xl font-bold">9812345678</h3>
          <p className="contact-para">
            Monday to Saturday - 9 AM to 6 PM
          </p>
          <p className="contact-para">
            Except 2nd and 3rd Saturdays, Sundays and Public Holidays
          </p>
          <div className="contact-para mt-6">
            <Link 
              href={'https://api.whatsapp.com/send/?phone=1234567890&text&type=phone_number&app_absent=0'}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <img className="h-[25px] dark:invert" src="/whatsapp-svgrepo-com.svg" alt="" />
              <p>98191919191</p>
            </Link>
            <p className="mt-2">
              To enroll your child to your dream school, give a missed call on 98191919191
            </p>
            <div className="contact-para mt-6">
            <p className="font-semibold">Address</p>
            <p className="mt-1">
              J45M+FMX, Buddh Marg, Budh Vihar,<br/> Fraser Road Area, Patna, Bihar <br/> 800001
            </p>
          </div>
          </div>
        </section>
        <section className="w-full">
          <MapComponent />
        </section>
      </div>

      {/* Desktop View */}
      <div className="mt-[60px] hidden gap-6 sm:flex sm:items-center">
        <section className="w-1/2">
          <MapComponent />
        </section>
        <section className="flex w-1/2 flex-col items-start justify-center rounded-lg bg-admission p-4">
          <img
            src="/call-us.svg"
            alt="Contact icon"
            className="mb-6 h-16 w-16"
          />
          <h2 className="mb-6 text-xl font-semibold">Call Us</h2>
          <h3 className="text-3xl font-bold">9812345678</h3>
          <p className="contact-para">
            Monday to Saturday - 9 AM to 6 PM
          </p>
          <p className="contact-para">
            Except 2nd and 3rd Saturdays, Sundays and Public Holidays
          </p>
          <div className="contact-para mt-6">
            <Link 
              href={'https://api.whatsapp.com/send/?phone=1234567890&text&type=phone_number&app_absent=0'}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <img className="h-[25px] dark:invert" src="/whatsapp-svgrepo-com.svg" alt="" />
              <p>98191919191</p>
            </Link>
            <p className="mt-2">
              To enroll your child to your dream school, give a missed call on 98191919191
            </p>
          </div>
          <div className="contact-para mt-6">
            <p className="font-semibold">Address</p>
            <p className="mt-1">
              J45M+FMX, Buddh Marg, Budh Vihar,<br/> Fraser Road Area, Patna, Bihar <br/> 800001
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
