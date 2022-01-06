import { SearchIcon, UserIcon } from '@heroicons/react/outline'
import { SunIcon } from '@heroicons/react/solid'
import CyberPunkLogo from '../public/images/cryptopunk-logo.png'
import Image from 'next/image'
function Navbar() {
    return (
        <div className="text-white flex justify-between items-center pt-4">
            {/* left section */}
            <div className="">

                <Image src={CyberPunkLogo} alt="" height={60} width={200} />

            </div>
            {/* middle */}
            <div className="bg-gray-800 flex rounded-full p-4 space-x-3 items-center">
                <SearchIcon className='text-white h-5' />
                <input type="text" className='border-none bg-transparent focus:outline-none' placeholder='collection, item or user' />
            </div>
            {/* right */}
            <div className='flex space-x-3 items-center '>
                <p>Drops</p>
                <p>Market Place</p>
                <p>Create</p>
                <SunIcon />
            </div>

        </div>
    )
}

export default Navbar
