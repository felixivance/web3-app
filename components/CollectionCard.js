import weth from '../public/images/weth.png';
import Image from 'next/image';
function CollectionCard({ id, name, traits, image }) {
    return (
        <div className='text-white bg-[#1a1c1e] rounded-md  w-[300px] h-[450px] mb-2 mr-2 cursor-pointer'>
            <img src={image} alt="img" className="roundet-tr-md rounded-tl-md  h-[200px] md:h-[250px] w-[250px]" />
            {/* details */}

            {/* name */}
            <div className="pt-4 text-lg flex space-x-2 p-3">
                <div className='font-bold text-lg'>{name}</div>
                <div className='text-[#a1a5b0]'>
                    #{id}
                </div>
            </div>
            {/* price container */}
            <div className='flex items-center p-3'>
                <Image src={weth} alt="weth img" width={15} height={23} />
                <div className='font-semibold pl-3'>
                    {traits[0]?.value}
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
