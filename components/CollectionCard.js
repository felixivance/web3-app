import { weth } from '../public/images/weth.png';

function CollectionCard({ id, name, traits, image }) {
    return (
        <div>
            <img src={image} alt="" />
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
                <img src={weth} alt="" />
            </div>
        </div>
    )
}

export default CollectionCard
