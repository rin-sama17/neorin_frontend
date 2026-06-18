import { Navbar, MainHeader } from '@/components/navbar'
import Footer from '@/components/footer/Footer'
import HeroSlider from '@/components/home/slider/hero-slider/HeroSlider'
import ProductGrid from '@/components/home/product-grid/ProductGrid'
import Testimonials from '@/components/home/Testimonials/Testimonials'
import VerticalSliderSection from '@/components/home/slider/vertical-slider/VerticalSliderSection'
import HiroCategory from '@/components/home/hero-category/HiroCategory'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            <HeroSlider />
            <HiroCategory />
            <ProductGrid />
            <VerticalSliderSection />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home
