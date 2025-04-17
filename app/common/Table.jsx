const Table = ({ headers, children }) => {
    if (!children) {
        return (
            <dev className="bg-gray-50 border px-4 py-2 flex justify-center">
                <h5 className="text-lg">داده ای یافت نشد</h5>
            </dev>
        )
    }
    return (
        <div>
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md overflow-x-scroll">
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((th, index) => (
                            <th
                                className="border px-4 py-2 text-right"
                                key={index}>
                                {th}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    )
}

export default Table
