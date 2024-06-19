import "./NewCategories.scss"
import new_collections from "../../Assets/new_collections"
import Item from "../Item/Item"

export default function NewCategories() {
    return (
        <div className="new-categories">
            <h2>New Collections</h2>
            <div className="items">
                {new_collections && new_collections.map((item, i) => {
                    return <Item key={i} item={item} />
                })}
            </div>
        </div>
    )
}