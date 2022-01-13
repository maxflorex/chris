import React, { useState } from 'react'
import About from '../components/About'

const Contact = () => {



    return (
        <div className='bg-slate-200 text-slate-900 py-24'>
            <div className="min-h-[50vh]">
                <h1 className='uppercase text-center pb-8 text-2xl tracking-widest'>Get in touch</h1>
                <form action="https://formsubmit.co/max@maxflores.dev" method="POST"
                    className='flex flex-col left-0 right-0 mx-auto w-1/2 md:w-1/3 gap-4 '>
                    <input type="hidden" name='_subject' value='New email!' />
                    <input type="text" name="name" required placeholder='Your email' className='p-4 text-slate-900 rounded-lg' />
                    <input type="hidden" name='_next' value="/src/pages/ThankYou.js" />
                    <input type="email" name="email" required placeholder='Message' className='p-4 text-slate-900 rounded-lg' />
                    <button type="submit" className='p-4 bg-green-400 rounded-lg'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
