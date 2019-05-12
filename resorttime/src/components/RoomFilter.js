import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

// get all unique values

const getUnique = (items,value) =>{

    return [...new Set(items.map(item=>item[value]))]

}


function RoomFilter ({rooms}) {

    const context = useContext(RoomContext);

    console.log(context);

    const {
        handleChange,type, capacity, price,minPrice,maxPrice,minSize,maxSize, breakfast,pets
    } = context;
    // get unique types
  
     let types = getUnique(rooms,'type');
   // add all

   types = ['all',... types];

   // map to jsx

   types = types.map((item,index) =>{
       return <option value={item} key={index}>{item}</option>
   })

   let people = getUnique(rooms,'capacity');
   people = people.map((item,index)=>{
       return <option key={index} value={item}>{item}</option>
   })

    return(
     <section className="filter-container">
     <Title title="search rooms" />

     <form className = "filter-form">
     {/*select type */}
       <div className="form-group">
       <label htmlFor ='type'>room type</label>
       <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
        {types}
       </select>
       </div>
      {/*end of select type */}
      {/* guest type */}
      <div className="form-group">
       <label htmlFor ='capacity'>Number of Guest</label>
       <select name="capacity"
        id="type" value={capacity}
         className="form-control" 
         onChange={handleChange}>
       {people}
       </select>
       </div>
       {/*end of guest type */}
    {/*room */}
    <div className="form-group">
    <label htmlFor="price">
     room price ${price}
    </label>
    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price}
     onChange={handleChange} className="form-control" />
    </div>
    {/* end of room price */}


      {/*size */}
      <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
    {/*end of size */}
     </form>
     </section>
    )
}


export default RoomFilter;
