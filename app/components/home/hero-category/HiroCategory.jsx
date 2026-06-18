// import React from 'react'

// const HiroCategory = () => {
//     return (
//         <div className="flex justify-center container space-x-2 my-2">
//             <div className="flex space-x-2 items-center rounded-neu shadow-neu align-center p-4 ">
//                 <p className="text-lg text-bold text-primary">ست روتختی</p>
//                 <div className="text-secondary p-4 shadow-neu rounded-neu h-24 w-24">
//                     <i className="fa-solid fa-bed"></i>
//                 </div>
//             </div>
//             <div className="flex space-x-2 items-center rounded-neu shadow-neu align-center p-4">
//                 <p className="text-lg text-bold text-primary">کالای خواب</p>
//                 <div className="text-secondary p-4 shadow-neu rounded-neu h-24 w-24">
//                     <i className="fa-solid fa-bed"></i>
//                 </div>
//             </div>
//             <div className="flex space-x-2 items-center rounded-neu shadow-neu align-center p-4">
//                 <p className="text-lg text-bold text-primary">کاور لحاف</p>
//                 <div className="text-secondary p-4 shadow-neu rounded-neu h-24 w-24">
//                     <i className="fa-solid fa-bed"></i>
//                 </div>
//             </div>
//             <div className="flex space-x-2 items-center rounded-neu shadow-neu align-center p-4">
//                 <p className="text-lg text-bold text-primary">کاور لحاف</p>
//                 <div className="text-secondary p-4 shadow-neu rounded-neu h-24 w-24">
//                     <i className="fa-solid fa-bed"></i>
//                 </div>
//             </div>
//             <div className="flex space-x-2 items-center rounded-neu shadow-neu align-center p-4">
//                 <p className="text-lg text-bold text-primary">کاور لحاف</p>
//                 <div className="text-secondary p-4 shadow-neu rounded-neu h-24 w-24">
//                     <i className="fa-solid fa-bed"></i>
//                 </div>
//             </div>
//             <div className="flex space-x-2 items-center rounded-neu shadow-neu align-center p-4">
//                 <p className="text-lg text-bold text-primary">سه بعدی</p>
//                 <div className="text-secondary p-4 shadow-neu rounded-neu h-24 w-24">
//                     <i className="fa-solid fa-bed"></i>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HiroCategory
import Link from 'next/link'

const categories = [
    {
        title: 'ست روتختی',
        icon: 'fa-bed',
    },
    {
        title: 'کالای خواب',
        icon: 'fa-moon',
    },
    {
        title: 'کاور لحاف',
        icon: 'fa-blanket',
    },
    {
        title: 'روبالشی',
        icon: 'fa-cloud',
    },
    {
        title: 'تشک',
        icon: 'fa-layer-group',
    },
    {
        title: 'سه بعدی',
        icon: 'fa-star',
    },
]

const HiroCategory = () => {
    return (
        <section className="container py-8">
          
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map(item => (
                    <Link
                        key={item.title}
                        href="#"
                        className="
              group
              bg-white
              rounded-card
              shadow-neu
              transition-all
              duration-300
              p-5
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-4
            ">
                        <span
                            className="
                    text-primary
                    font-bold
                    text-sm
                    md:text-base
                    text-center
                  ">
                            {item.title}
                        </span>
                        <div
                            className="
                h-16
                w-16
                rounded-neu
                bg-primary/5
                flex
                items-center
                justify-center
                text-primary
                text-2xl
                transition-all
                duration-300
                group-hover:bg-primary
                group-hover:text-white
              ">
                            <i className={`fa-solid ${item.icon}`} />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default HiroCategory
