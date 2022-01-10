import weth from '../public/images/weth.png';
import Image from 'next/image';
function CollectionCard({ id, name, traits, image }) {
    return (
        <div className='text-white bg-[#1a1c1e] rounded-md overflow-hidden w-[300px] h-[500px]'>
            <img src={image} alt="img" className="roundet-tr-md rounded-tl-md" />
            {/* details */}

            {/* name */}
            <div className="pt-4 text-lg flex space-x-2">
                <div>{name}</div>
                <div>
                    #{id}
                </div>
            </div>
            {/* price container */}
            <div>
                <Image src={weth} alt="weth img" width={50} height={60} />
                <div>
                    {traits[0]?.value}
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
