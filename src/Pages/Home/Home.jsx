import Carousel from '../../Components/Carousel/Carousel'
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import ProductCarousel from '../../Components/Carousel/ProductCarousel'
import Marque from '../../Components/Marque/Marque'


const Home = () => {
  return (
    <>
      <div className='relative z-50 top-36 p-2'>

        <Carousel />
        <ProductCarousel />
        <Marque/>


      </div>

    </>
  )
}

export default Home