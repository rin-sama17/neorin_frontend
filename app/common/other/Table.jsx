const Table = ({ headers, children }) => {
    if (!children) {
        return (
            <div className="bg-gray-50 border px-4 py-2 flex justify-center">
                <h5 className="text-lg">داده ای یافت نشد</h5>
            </div>
        )
    }
    return (
             <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                    <thead>
                        <tr className="bg-slate-50 border-b">
                            {headers.map(header => (
                                <th
                                    key={header}
                                    className="px-4 py-3 text-right text-sm font-semibold"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>{children}</tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
