import React from 'react'
import HomePage from '@/app/home-page'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import WebsiteSchema from '@/components/seo/WebsiteSchema'

const page = () => {
  return (
    <div>
      <OrganizationSchema />
      <WebsiteSchema />
      <HomePage />
    </div>
  )
}

export default page
