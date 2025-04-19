export default function convertToForm(values) {
    const formData = new FormData()

    Object.keys(values).forEach(key => {
        if (key !== 'image' && key !== 'images' && values[key] !== null) {
            formData.append(key, values[key])
        }
    })

    if (values.image) {
        formData.append('image', values.image)
    }
    if (values.images) {
        for (let i = 0; i < values.images.length; i++) {
            if (values.images[i] instanceof File)
                formData.append(`images[${i}]`, values.images[i])
        }
    }

    return formData
}
