import React from 'react'
import { siteConfig } from '@/lib/site.config'

// The charity's own mission, from siteConfig.description. (The template's
// mission copy and video described the supporting organization.)
const index = () => {
  return (
    <div id="mission" className="py-[52px]">
      <div className="w-[90%] mx-auto py-[27px] mb-[60px] max-w-[1280px]">
        <h2 className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center w-full lg:w-[906px] mx-auto mb-[50px] faustina-font">
          Our Mission
        </h2>
        <p className="font-[500] text-[25px] leading-[150%] tracking-[0] text-center lato-font">
          {siteConfig.description}
        </p>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default index
