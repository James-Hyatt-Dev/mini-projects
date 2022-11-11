import Image from "next/image";
import Link from "next/link";
import Image1 from '../public/image-gallery/image1.jpg';
import Image2 from '../public/image-gallery/image2.jpg';
import Image3 from '../public/image-gallery/image3.jpg';
import Image4 from '../public/image-gallery/image4.jpg';
import Image5 from '../public/image-gallery/image5.jpg';
import Image6 from '../public/image-gallery/image6.jpg';
import Bookmark from '../public/image-gallery/bookmark.svg'

function ImageGallery() {
    return (
        // global container
        <div className="flex items-center justify-center min-h-screen bg-cyan-50">
            {/* card container */}
            <div className="bg-white p-6 m-3  shadow-2xl rounded-3xl md:p-40">
                {/* menu container */}
                <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                    {/* menu items */}
                    <div className="group">
                        <Link href='#'>Vector</Link>
                        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href='#'>Illustrations</Link>
                        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href='#'>Images</Link>
                        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href='#'>Icons</Link>
                        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                </div>

                {/* search container */}
                <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
                    {/* input and btn */}
                    <div className="flex justify-between border-b">
                        <input type="" className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none" placeholder="Search"/>
                        <button>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                class="w-8 text-gray-300 duration-200 hover:scale-110" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                fill="none" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx='10' cy='10' r='7' />
                                <line x1='21' y1='21' x2='15' y2='15' />
                            </svg>
                        </button>
                    </div>

                    {/* upload btn */}
                    <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">Upload</button>
                </div>

                {/* gallery container */}
                <div className="grid gap-4 pt-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {/* image 1 */}
                    <div className="relative group">
                        <Image src={Image1} alt='image1' className="w-72" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 Likes - 35 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <Image src={Bookmark} alt='bookmark' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image src={Image2} alt='image1' className="w-72" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 Likes - 35 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <Image src={Bookmark} alt='bookmark' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image src={Image3} alt='image1' className="w-72" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 Likes - 35 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <Image src={Bookmark} alt='bookmark' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image src={Image4} alt='image1' className="w-72" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 Likes - 35 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <Image src={Bookmark} alt='bookmark' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image src={Image5} alt='image1' className="w-72" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 Likes - 35 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <Image src={Bookmark} alt='bookmark' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image src={Image6} alt='image1' className="w-72" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div className="flex justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 Likes - 35 Shares</p>
                                </div>
                                <div className="flex items-center">
                                    <Image src={Bookmark} alt='bookmark' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default ImageGallery