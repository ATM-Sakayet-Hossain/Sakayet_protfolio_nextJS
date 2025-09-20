import Link from 'next/link'
import React from 'react'
import { IoMdClose } from 'react-icons/io'
import Divider from '../Components/Divider'
import ContactSection from '../Components/contact/ContactSection'

const page = () => {
  return (
    <section>
      <div className="about min-h-screen">
        <span className="home_animation"></span>
        <div className="container-1">
          <div className="row ">
            <div className="close_button flex justify-end pt-6 text-3xl text-white fixed right-16 top-2">
              <Link href="/">
                <IoMdClose />
              </Link>
            </div>
            <h3 className="text-white opacity-50 text-center text-[15px] pt-[7%] mb-[17px] font-poppins">
              Feel free to contact me anytimes
            </h3>
            <h2 className="text-[46px] font-bold font-poppins text-white leading-[100%] text-center mb-8">
              Get in Touch
            </h2>
            <Divider />
            <ContactSection />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page