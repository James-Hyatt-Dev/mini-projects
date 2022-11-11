import Image from 'next/image';
import WaterImage from '../public/login-modal/image.jpg';
import FaceBook from '../public/login-modal/facebook.png';
import Google from '../public/login-modal/google.png';

function LoginModal() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-rose-50">
            {/* card container */}
            <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 overflow-hidden">
                {/* left */}
                <div className="p-6 md:p-20">
                    {/* top */}
                    <h2 className="mb-5 text-4xl font-bold">Log In</h2>
                    <p className="max-w-sm mb-12 font-light text-gray-600">
                        Log in to your account to upload or dowload pictures, videos or music.
                    </p>
                    <input type="text" className="w-full p-6 border border-gray-300 rounded-md placeholder:font-light" placeholder='Enter your email address'/>
                    
                    {/* middle content */}
                    <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                        <div className="font-thin text-cyan-700">Forgot Password?</div>
                        <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                            <span>Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-7"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#ffffff" 
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="13" y1="18" x2="19" y2="12" />
                                <line x1="13" y1="6" x2="19" y2="12" />
                            </svg>
                        </button>
                    </div>
                    {/* border */}
                    <div className="mt-12 border-b border-b-gray-300"></div>

                    {/* bottom-content */}
                    <p className="py-6 text-sm font-light text-center text-gray-400">Or Log in with</p>

                    {/* bottom btn container */}
                    <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                        <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
                            <Image src={FaceBook} alt='facebook logo image' className='w-9'/>
                            <span className="font-thing">FaceBook</span>
                        </button>

                        <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
                            <Image src={Google} alt='facebook logo image' className='w-9'/>
                            <span className="font-thing">Google</span>
                        </button>
                    </div>
                </div>
                {/* right image */}
                <Image src={WaterImage} alt='Image of the Ocean water' width={430} className='hidden md:block'/>

                {/* close icon */}
                <div className='group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 md:bg=white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-black group-hover:text-gray-600"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;