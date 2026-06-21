const steps = ['پرداخت و خرید', 'تایید سفارش', 'مرحله محصول']

const StepIndicator = ({ current = 1 }) => {
    return (
        <div className="flex items-center justify-between w-full px-2 mb-6">
            {/* <div className={`flex flex-1 items-center`}>
                <div className="flex flex-col items-center gap-2">
                    <div
                        className={
                            'flex items-center justify-center size-8 rounded-full text-sm font-bold transition-all bg-primary/80 text-white'
                        }>
                        1
                    </div>
                    <span className="text-xs whitespace-nowrap text-primary font-semibold">
                        انتخاب محصول
                    </span>
                </div>

                <div className="flex-1 h-px bg-gray-200 mx-2 -mt-5" />
            </div> */}
            {steps.map((label, i) => {
                const stepNum = steps.length - i
                const isActive = stepNum === current
                const isDone = stepNum < current
                return (
                    <div
                        key={label}
                        className={`flex ${i < steps.length - 1 ? 'flex-1' : 'flex-none'} items-center`}>
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className={`flex items-center justify-center size-8 rounded-full text-sm font-bold transition-all
                                ${
                                    isActive
                                        ? 'bg-primary text-white shadow-[0_0_0_4px_rgba(30,36,104,0.12)]'
                                        : isDone
                                          ? 'bg-primary/80 text-white'
                                          : 'bg-surface text-text-secondary border border-gray-200'
                                }`}>
                                {stepNum}
                            </div>
                            <span
                                className={`text-xs whitespace-nowrap ${
                                    isActive
                                        ? 'text-primary font-semibold'
                                        : 'text-text-secondary'
                                }`}>
                                {label}
                            </span>
                        </div>
                        {i < steps.length - 1 && (
                            <div className="flex-1 h-px bg-gray-200 mx-2 -mt-5" />
                        )}
                    </div>
                )
            })}
        </div>
    )
}
export default StepIndicator
