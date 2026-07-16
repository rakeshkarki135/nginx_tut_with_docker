import React from 'react'

const OrderPage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40">
            <table className="w-full border-separate border-spacing-3">
                <thead className="">
                    <tr className="text-left">
                        <th className="hidden md:block py-6 px-1">Order ID</th>
                        <th className="py-6 px-1">Date</th>
                        <th className="py-6 px-1">Price</th>
                        <th className="hidden md:block py-6 px-1">Products</th>
                        <th className="py-6 px-1">Status</th>
                    </tr>
                </thead>

                <tbody className="">
                    <tr className="text-sm mg:text-base bg-red-100">
                        <td className="hidden md:block py-6 px-1">ewfwecwewef1223</td>
                        <td className="py-6 px-1">2025-4-5</td>
                        <td className="py-6 px-1">$45.8</td>
                        <td className="hidden md:block py-6 px-1">Bugn burger Menu , pizzas , momo</td>
                        <td className="py-6 px-1">Delivered</td>
                    </tr>
                    <tr className="text-sm mg:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">ewfwecwewef1223</td>
                        <td className="py-6 px-1">2025-4-5</td>
                        <td className="py-6 px-1">$45.8</td>
                        <td className="hidden md:block py-6 px-1">Bugn burger Menu , pizzas , momo</td>
                        <td className="py-6 px-1">Delivered</td>
                    </tr>
                    <tr className="text-sm mg:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">ewfwecwewef1223</td>
                        <td className="py-6 px-1">2025-4-5</td>
                        <td className="py-6 px-1">$45.8</td>
                        <td className="hidden md:block py-6 px-1">Bugn burger Menu , pizzas , momo</td>
                        <td className="py-6 px-1">Delivered</td>
                    </tr>
                    <tr className="text-sm mg:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">ewfwecwewef1223</td>
                        <td className="py-6 px-1">2025-4-5</td>
                        <td className="py-6 px-1">$45.8</td>
                        <td className="hidden md:block py-6 px-1">Bugn burger Menu , pizzas , momo</td>
                        <td className="py-6 px-1">Delivered</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default OrderPage