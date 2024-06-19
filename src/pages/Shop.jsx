import Hero from "../components/Hero/Hero"
import NewCategories from "../components/NewCategories/NewCategories"
import NewLetter from "../components/NewLetter/NewLetter"
import Offer from "../components/Offer/Offer"
import Popular from "../components/Popular/Popular"

export default function Shop() {

    return (
        <div className="shop">
            <Hero />
            <Popular />
            <Offer />
            <NewCategories />
            <NewLetter />
        </div>
    )
}