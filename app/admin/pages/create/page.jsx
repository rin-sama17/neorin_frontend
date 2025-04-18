import CreatePageForm from './CreatePageForm'

const page = async () => {
    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ساخت صفحه جدید</h2>
            <CreatePageForm />
        </div>
    )
}

export default page
