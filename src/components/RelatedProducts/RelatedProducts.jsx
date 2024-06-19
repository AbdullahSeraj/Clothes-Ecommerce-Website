import './RelatedProducts.scss'
import Item from '../Item/Item';

export default function Popular(props) {
    const { products, category } = props

    return (
        <div className="related">
            <h2>Popular in {category}</h2>
            <div className="items">
                {products && products.slice(0, 4).map((item, i) => {
                    return <Item key={i} item={item} />
                })}
            </div>
        </div>
    )
}