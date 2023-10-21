import BrandName from "../BrandName/BrandName";
import Header from "../Header/Header";
import ShowRom from "../Places/ShowRom";
import UpcomingBrand from "../UpcomingB/UpcomingBrand";


const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <BrandName></BrandName>
            
            <UpcomingBrand></UpcomingBrand>
            <ShowRom></ShowRom>
        </div>
    );
};

export default Home;