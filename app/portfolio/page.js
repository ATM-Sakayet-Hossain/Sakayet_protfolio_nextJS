import Link from 'next/link'
import React from 'react'
import { IoMdClose } from 'react-icons/io'
import Divider from '../Components/Divider'

const page = () => {
  return (
    <section>
      <div className="about">
        <span className="home_animation"></span>
        <div className="container-1">
          <div className="row ">
            <div className="close_button flex justify-end pt-6 text-3xl text-white fixed right-16 top-2">
              <Link href="/">
                <IoMdClose />
              </Link>
            </div>
            <h3 className="text-white opacity-50 text-center text-[15px] pt-[7%] mb-[17px] font-poppins">
              Showcasing some of my best work
            </h3>
            <h2 className="text-[46px] font-bold font-poppins text-white leading-[100%] text-center mb-8">
              Portfolio
            </h2>
            <Divider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page