import React from "react";

const CardWidget = ({ title = "", TopMenu, ...props }) => {

    return (
        <>
            <div className="w-full mx-auto rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between px-8 py-4">
                    <div className="hidden sm:block">
                        <span className="rounded-full inline-block w-3 h-3 bg-red-500"></span>
                        <span className="rounded-full inline-block w-3 h-3 ml-1.5 bg-amber-400"></span>
                        <span className="rounded-full inline-block w-3 h-3 ml-1.5 bg-green-500"></span>
                    </div>
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{title}</span>
                    <>
                        {TopMenu ? <TopMenu /> : <span></span>}
                    </>
                </div>
                <hr className="border-b border-gray-100 w-full my-2" />
                <div className="mt-2 px-8 py-4 ">
                    <>{props?.children}</>
                </div>
            </div>
        </>
    )
}

export default CardWidget