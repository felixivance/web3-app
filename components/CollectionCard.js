import weth from '../public/images/weth.png';
import Image from 'next/image';
function CollectionCard({ id, name, traits, image }) {
    return (
        <div className='text-white'>
            <img src={image} alt="img" />
            {/* details */}
            <div>

            </div>
            {/* name */}
            <div>
                {name}
                <div>
                    .#{id}
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
