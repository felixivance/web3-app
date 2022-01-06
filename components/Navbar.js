import { UserIcon } from '@heroicons/react/outline'
import CyberPunkLogo from '../public/images/cryptopunk-logo.png'
import Image from 'next/image'
function Navbar() {
    return (
        <div className="text-white flex">
            <div className="">

                <Image src={CyberPunkLogo} alt="" />
                {/* <button className="">

                </button> */}

            </div>

        </div>
    )
}

export default Navbar
