
import Card from '../components/product-components/card';
import Company from '../components/product-components/company';
import Header from '../components/product-components/header';
import Hero from '../components/product-components/hero';
import Description from '../components/ProductComponents/discription';
import Logo from '../components/ProductComponents/logo';
import React from 'react';

const ProductPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Company />
        <Card />
        <Description />
        <Logo />
    </div>
  )
}

export default ProductPage;
