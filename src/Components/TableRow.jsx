import React from 'react'
const tableData = [
    {orderId:281209,successful:true,transactionID:"131634495747",refundDate:"Today, 08:45 PM",orderAmount:"1,125.00"},
    {orderId:281208,successful:false,transactionID:"131634495747",refundDate:"Yesterday, 3:00 PM",orderAmount:"1,125.00"},
    {orderId:281207,successful:true,transactionID:"131634495747",refundDate:"12 Jul 2023, 03:00 PM",orderAmount:"1,125.00"},
    {orderId:281206,successful:true,transactionID:"131634495747",refundDate:"12 Jul 2023, 03:00 PM",orderAmount:"1,125.00"},
    {orderId:281205,successful:true,transactionID:"131634495747",refundDate:"12 Jul 2023, 03:00 PM",orderAmount:"1,125.00"},
    {orderId:281204,successful:true,transactionID:"131634495747",refundDate:"12 Jul 2023, 03:00 PM",orderAmount:"1,125.00"}
]


const TableRow = ({ orderId, successful, transactionID, refundDate, orderAmount, index }) => {
    return (
        <>
            <div className='w-full flex flex-column items-center justify-between border-b tablerow'>
                <div className=' text-left w-1/5 text-[#146EB4] px-0 font-medium  text-sm leading-5 max-sm:text-[8.5px] '>
                    <p className={`border-background-light py-3.5 ml-3 max-sm:ml-1.5`}>#{orderId}</p>
                </div>
                <div className=' text-right w-1/5 p-0 text-sm leading-5 max-sm:text-[8.5px]'>
                    <section className={` w-fit  px-3 py-3.5  border-background-light flex items-center space-x-1.5 max-sm:px-0 max-sm:space-x-[3px]`}>
                        <aside className={`w-2.5 h-2.5 ${successful ? "bg-green-600" : "bg-gray-500"} rounded-full max-sm:w-1.5 max-sm:h-1.5`}></aside>
                        <p className=' text-text'>{successful ? "Successful" : "Processing"}</p>
                    </section>
                </div>
                <div className='text-text  text-left w-1/5 p-0  text-sm leading-5 max-sm:text-[8.5px]'>
                    <p className={` border-background-light py-3.5 px-3 max-sm:px-0`}>{transactionID}</p>
                </div>
                <div className='text-text  text-left w-1/5  p-0 text-sm leading-5 max-sm:text-[8.5px]'>
                    <p className={` border-background-light py-3.5 px-3 max-sm:px-0`}>{refundDate}</p>
                </div>
                <div className='text-text  text-right w-1/5 p-0 text-right text-sm leading-5 max-sm:text-[8.5px] '>
                    <p className={` border-background-light py-3.5  mr-3`}>₹{orderAmount}</p>
                </div>

            </div>
        </>
    )
}

export default TableRow;