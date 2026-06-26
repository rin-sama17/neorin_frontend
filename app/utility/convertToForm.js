// export default function convertToForm(values) {
//     const formData = new FormData()

//     Object.keys(values).forEach(key => {
//         if (Array.isArray(values[key])) {
//             values[key].forEach(item =>
//                 formData.append(`${values[key]}[]`, item),
//             )
//         } else {
//             if (key !== 'image' && key !== 'images' && values[key] !== null) {
//                 formData.append(key, values[key])
//             }
//         }
//     })

//     if (values.image) {
//         if (values.image instanceof File) {
//             formData.append('image', values.image)
//         }
//     }
//     if (values.images) {
//         for (let i = 0; i < values.images.length; i++) {
//             if (values.images[i] instanceof File)
//                 formData.append(`images[${i}]`, values.images[i])
//         }
//     }

//     return formData
// }
// const convertToForm = values => {
//     const formData = new FormData()

//     for (const [key, value] of Object.entries(values)) {
//         if (Array.isArray(value)) {
//             value.forEach(item => formData.append(`${key}[]`, item))
//         } else if (value !== null && value !== undefined) {
//             formData.append(key, value)
//         }
//     }

//     return formData
// }

// export default convertToForm
export default function convertToForm(values) {
    const formData = new FormData()

    Object.entries(values).forEach(([key, value]) => {
        if (key === 'image') {
            if (value instanceof File) formData.append('image', value)
        } else if (key === 'images') {
            if (Array.isArray(value)) {
                value.forEach((file, i) => {
                    if (file instanceof File)
                        formData.append(`images[${i}]`, file)
                })
            }
        } else if (Array.isArray(value)) {
            value.map((item, index) =>
                formData.append(`${key}[${index}]`, item),
            )
        } else if (value !== null && value !== undefined) {
            formData.append(key, value)
        }
    })

    return formData
}
