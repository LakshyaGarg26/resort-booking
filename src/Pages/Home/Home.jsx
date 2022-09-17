import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import PropertyList from "../../components/propertyList/PropertyList"
import Featured from "../../components/featured/Featured"
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        </div>
        </div>
    )
}

export default Home
