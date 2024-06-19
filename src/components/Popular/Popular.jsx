import './Popular.scss'
import data from '../../Assets/data'
import Item from '../Item/Item';

export default function Popular() {
    return (
        <div className="popular">
            <h2>Popular in men</h2>
            <div className="items">
                {data && data.map((item, i) => {
                    return <Item key={i} item={item} />
                })}
            </div>
        </div>
    )
}