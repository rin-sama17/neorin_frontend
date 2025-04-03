import Footer from './Footer'
import HeroSlider from './HeroSlider'
import ProductGrid from './ProductGrid'
import Testimonials from './Testimonials'
export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            <HeroSlider />
            <ProductGrid />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home
