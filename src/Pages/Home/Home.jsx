import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import PropertyList from "../../components/propertyList/PropertyList"
import Featured from "../../components/featured/Featured"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import "./Home.css"

const Home = () => {
    return (
        <div className="gridContainer"  >
            <Navbar />
            <Header />
            <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList />
        <Footer />
        </div>
        </div>
    )
}

export default Home
