import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import StyledHero from '../components/Stylehero'

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.Room,
      defaultBcg: defaultBcg
    };
  }
  
  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    console.log(room)
   if(!room){
     return <div className="error">
     <h3>no such room could be found...</h3>
     <Link to='/rooms' className='btn-primary'>
       Back to rooms
     </Link>
     </div>
   }

   const {name,description,capacity,price,extras,breakfasts,pets,images,size} = room

   const [mainImg,...defaultImg] = images
   console.log(images);
   console.log(capacity);
   console.log(extras);
    return(
      <>
  <StyledHero img={images[0] || this.state.defaultBcg} hero='roomsHero'>
<Banner title={`${name} room`}>
<Link to='/rooms' className="btn-primary">
 Back to rooms
</Link>
</Banner>
  </StyledHero>

 <section className="single-room">
 <div className="single-room-images">
  {defaultImg.map((item,index)=>
  <img key={index} src={item} alt={name}/>)}
 </div>
 <div className="single-room-images">
  <article className="desc">
   <h3>Details</h3>
   <p>{description}</p>
  </article>
  <article className="info">
  <h3>Info </h3>
  <h6> price: ${price} </h6>
  <h6> size : {size} SQFT </h6>
  <h6>{
    capacity > 1 ? `Max Capacity : ${capacity} people` : 'Max Capacity :1 people'
  }
  </h6>
  <h6>
    {
      pets ? `pets  are allowed` : 'pets are not allowed'
    }
    </h6>
    <h6>
      {
        breakfasts ? 'Breakfast is included' : 'Breakfast is not included'
      }
    </h6>



  </article>
  </div>
 </section>
 <section className ="room-extras">
    <h6>Extras</h6>
    <ul className="extras">
   {
     extras.map((item,index) =>{
      return <li key={index}> -{item} </li>
     
   })
  }
     </ul>
 </section>
  </>
    )
    
  }
}

SingleRoom.contextType = RoomContext;