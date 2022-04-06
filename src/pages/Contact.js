import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const Contact = () => {



    return (
        <div className='bg-white text-slate-900  max-h-[80vh]'>
            <div className="bg-[url('/src/images/Collections/family-tree/ft-familytree2.jpg')] bg-cover -mb-2 relative">
                <div className='backdrop-blur bg-slate-500 bg-opacity-50 min-h-[30vh] relative'>
                    <div className="bg-slate-200 md:absolute container left-0 right-0 mx-auto -bottom-[40%] rounded-t-sm rounded-b-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">


                            <div className='p-16'>

                                <h1 className='uppercase text-center pb-8 text-lg md:text-2xl tracking-widest'>Get in touch</h1>
                                <form action="https://formsubmit.co/max@maxflores.dev" method="POST"
                                    className='flex flex-col left-0 right-0 mx-auto w-full lg:w-3/4 gap-4 focus:border-white outline-none focus:boder-white'>
                                    <input type="hidden" name='_subject' value='New email!' />
                                    <input type="text" name="name" required placeholder='Message' className='p-4 text-slate-900 rounded-lg focus:border-2 focus:border-white outline-none' />
                                    <input type="hidden" name='_next' value="/ThankYou.js" />
                                    <input type="email" name="email" required placeholder='Email' className='focus:outline-none p-4 text-slate-900 rounded-lg focus:border-2 focus:border-white' />
                                    <button type="submit" className='p-4 bg-green-400 rounded-lg'>Send</button>
                                </form>
                            </div>


                            <div className='bg-slate-100 text-slate-900 p-16 flex flex-col gap-4'>
                                <h1 className='uppercase pb-4 text-lg md:text-2xl tracking-widest text-center md:text-left'>Contact Information</h1>
                                <div className="flex flex-row gap-4 items-center">
                                    <FiMapPin className='text-amber-400' />
                                    <h2>Grand Cayman, <span className='font-semibold'>Cayman Islands</span></h2>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <FiPhone className='text-amber-400' />
                                    <h2>+1 (345) 926-0119</h2>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <FiMail n className='text-amber-400' />
                                    <h2>artcayman@gmail.com</h2>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="bg-white md:min-h-[25vh]"></div>
        </div>
    )
}

export default Contact
