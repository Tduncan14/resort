import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeatureRooms from '../components/FeatureRooms';


function Home () {

    return(
      <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/Rooms" className="btn-primary">
          our Rooms
        </Link>
        </Banner>
    </Hero>
    <Services />
    <FeatureRooms/>
    </>
    );
}


export default Home;