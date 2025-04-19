const SettingList = ({ setting }) => {
    const items = [
        { name: 'نام', value: setting.title },
        { name: 'توضیحات سایت', value: setting.description },
        { name: 'لوگوی سایت', value: setting.logo },
        { name: 'ایکون سایت', value: setting.favicon },
        { name: 'ایمیل', value: setting.email },
        { name: 'شماره', value: setting.phone },
        { name: 'کلمات کلیدی', value: setting.keywards },
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 container p-3">
            {items.map((item, index) => (
                <div className="flex py-2 text-right col-span-1" key={index}>
                    <h6 className="text-gray-500 ml-2 text-base">
                        {item.name} :
                    </h6>
                    <h6 className="text-base">{item.value}</h6>
                </div>
            ))}
        </div>
    )
}

export default SettingList
