import React from 'react'

const ErrorPage = () => {
    return (
        <div className='bg-slate-200'>
            <div className="flex flex-row items-center justify-center min-h-[60vh]">
                <h1 className='text-slate-900 text-4xl'>
                    <span className='font-bold'>Whoopsie!</span> Not Found
                </h1>
            </div>
        </div>
    )
}

export default ErrorPage
