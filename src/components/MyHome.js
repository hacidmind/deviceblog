import Cars from './Cars';
import Navbar from './Navbar';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Cars brand="Toyota" model="Rav4" year="2020" color="grey" />
            <Cars brand="Mercedes" model="CLA" year="2021" color="black" />
            <Cars brand="Volvo" model="XC40" year="2022" color="white" />
            <Cars brand="Kia" model="Soreto" year="2019" color="grey" />
        </div>
    );
}

export default Home;
