import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="mt-5 mb-20">
                <img className="planeAnimation" src="https://www.vippng.com/png/detail/346-3466204_boeing-787-png-boeing-787-10-klm.png" alt="" />
                <hr />
            </div>
            <Services />
            <Gallery />
        </div>
    );
};

export default Home;