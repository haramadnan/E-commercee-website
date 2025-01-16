
import FreeTrail from '../components/pricing-components/freetrail'
import Plan from '../components/pricing-components/plan'
import Price from '../components/pricing-components/price'
import PriceFaqs from '../components/pricing-components/price-faqs'
import Header from '../components/shop-components/header'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
        <Header />
        <Price />
        <Plan />
        <PriceFaqs />
        <FreeTrail />
        
    </div>
  )
}

export default PricingPage
