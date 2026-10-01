import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'
import PendingNote from '@/components/ui/PendingNote'
import { isPending, siteConfig } from '@/lib/site.config'

const index = () => {
  // The charity's volunteer page when configured (https only), else a
  // mailto: to the charity. With neither there is no link to offer; a
  // pending volunteer page also shows a plain-text placeholder.
  const volunteerUrl = siteConfig.integrations.idealistUrl.trim()
  const email = siteConfig.contactEmail.trim()
  const href = /^https:\/\/\S+$/i.test(volunteerUrl)
    ? volunteerUrl
    : email
      ? `mailto:${email}?subject=${encodeURIComponent('Volunteering')}`
      : ''
  return (
    <div id="volunteer" className="bg-[#2A6682] py-[40px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h2 className="mt-[2px] mb-[42px] pb-[10px] text-[30px] md:text-[48px] font-[400] leading-[46px] text-center text-white faustina-font">
          Volunteer with Us
        </h2>
        <p className="mb-[13px] w-[85%] mx-auto font-[500] text-[20px] leading-[30px] text-center text-white lato-font">
          Your time and skills can create a lasting impact. Whether youre assisting with outreach,
          providing technical expertise, or supporting our programs, your contributions are
          invaluable to our mission.
        </p>
        {href && (
          <a
            href={href}
            {...(/^https:/i.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="w-[216px] h-[62px] top-[261px] left-[611px] rounded-[27px] 
             flex items-center justify-center px-[32px] py-[18px] gap-[10px] 
             text-[#113563] mx-auto mt-[30px] bg-white text-[20px] font-[400] font-sans text-center lato-font"
          >
            Volunteer
          </a>
        )}
        {isPending('volunteerUrl') && (
          <PendingNote className="mt-[16px] text-center text-[18px] text-white lato-font" />
        )}

        <Image
          src={assetPath('/Images/Volunteer-with-Us.webp')}
          alt="Volunteer-with-Us"
          width={1083}
          height={607}
          className="mx-auto mt-[40px]"
          loading="lazy"
        ></Image>
      </div>
    </div>
  )
}

export default index
