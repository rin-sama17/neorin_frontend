// import VerticalSlider from '@/components/home/slider/vertical-slider/VerticalSlider'
// import SelectConsept from './SelectConsept'
// const page = () => {
//     // const routes= [
//     //     {
//     //         "name":"",
//     //         "href":"",
//     //     }

import Fabrics from './Fabrics'
import OrderSummary from './OrderSummary'
import StepIndicator from './StepIndicator'

//     return <SelectConsept />
// }

// export default page

const Page = () => {
    return (
        <div className="min-h-screen bg-bg-secondary">
            <StepIndicator />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4 lg:p-8">
                <div className="lg:col-span-2 lg:order-1 rounded-2xl bg-surface shadow-neu-flat">
                    <Fabrics />
                </div>
                <div className="">
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default Page
