import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import SupportFreeForCharity from '@/components/home-page/SupportFreeForCharity'
import VolunteerwithUs from '@/components/home-page/Volunteer-with-Us'
import TheFreeForCharityTeam from '@/components/home-page/TheFreeForCharityTeam'
import Events from '@/components/home-page/Events'

// The template's Results-2023, Testimonials, Endowment-Features, Our-Programs
// and FAQ sections described the supporting organization itself, so they were
// removed from this charity's site; add the charity's own content here.
const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <VolunteerwithUs />
      <Events />
      <SupportFreeForCharity />
      <TheFreeForCharityTeam />
    </div>
  )
}

export default index
