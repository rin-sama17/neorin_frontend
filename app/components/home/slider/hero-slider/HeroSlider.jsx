import { getSliders } from '../../../../(main)/services'
import SliderSwiper from './SliderSwiper'

const HeroSlider = async () => {
    const sliders = await getSliders()
    return (
        <div className="shadow-neu-lg rounded-card px-6 my-2">
            <SliderSwiper sliders={sliders.data} />
        </div>
    )
}

export default HeroSlider
