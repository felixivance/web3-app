import { SearchIcon, UserIcon } from '@heroicons/react/outline'
import { SunIcon } from '@heroicons/react/solid'
import CyberPunkLogo from '../public/images/cryptopunk-logo.png'
import Image from 'next/image'
function Navbar() {
    return (
        <div className="flex items-center pt-3 justify-between">
            {/* left section */}
            <div className="">

                <Image src={CyberPunkLogo} alt="" height={60} width={200} />

            </div>
            {/* middle */}
            <div className="bg-[#1c1c1e]  rounded-full p-2 space-x-3 items-center max-w-lg flex-1 hidden md:inline-flex">
                <SearchIcon className='text-gray-400 h-4' />
                <input type="text" className='border-none bg-transparent focus:outline-none flex-1 text-white' placeholder='collection, item or user' />
            </div>
            {/* right */}
            <div className='flex space-x-1 md:space-x-3 items-center text-sm text-gray-400 justify-end sm:pl-2'>
                <p>Drops</p>
                <p>Market Place</p>
                <p>Create</p>
                <SunIcon className='w-10' />
                <button className='bg-gradient-to-r from-[#59f9b7] to-[#66feea] text-white pt-2 pb-2 pl-4 pr-4 rounded-lg'>
                    New
                </button>
            </div>

        </div>
    )
}

export default Navbar
