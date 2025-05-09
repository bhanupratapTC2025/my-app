
import Accordian from '@/components/home/Accordian'
import AiDirection from '@/components/home/AiDirection'
import TopCategory from '@/components/home/category/TopCategory'
import FrequentlyBought from '@/components/home/FrequentlyBought'
import BannerSlider from '@/components/home/ImageSlider'
import OfferCards from '@/components/home/OfferCards'
import PerfectPare from '@/components/home/PerfectPare'
import ShopByBrands from '@/components/home/ShopByBrands'
import StoreDirection from '@/components/home/StoreDirection'
import React from 'react'

function page() {
  return (
    <div>
      <BannerSlider/>
      <TopCategory/>
      <OfferCards/>
      <StoreDirection/>
      <FrequentlyBought/>
      <PerfectPare/>
      <AiDirection/>
      <ShopByBrands/>
      <Accordian/>
    </div>
  )

}

export default page
