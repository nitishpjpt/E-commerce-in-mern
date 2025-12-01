import Carousel from '../../Components/Carousel/Carousel'
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import ProductCarousel from '../../Components/Carousel/ProductCarousel'
import Marque from '../../Components/Marque/Marque'
import Banners from '../../Components/Banner/Banner'
import ProductCard from '../../Components/Products/ProductCard'


const Home = () => {
  return (
    <>
      <div className=' z-50 top-36 p-2'>

        <Carousel />
        <ProductCarousel />
        <Banners/>
        <ProductCard/>
        <Marque/>


      </div>

    </>
  )
}

export default Home