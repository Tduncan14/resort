import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import {withRoomConsumer} from '../context';
import loading from './Loading';


function RoomContainer ({ context}){

    const {loading,sortedRooms, rooms} = context;

    if(loading){
        return loading;
    }

    return (
        <>
          
            <RoomsFilter rooms ={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )


}


export default withRoomConsumer(RoomContainer);



// import React from 'react';
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';



// function RoomsContainer(){



// return(
//     <>
//     <RoomConsumer>
//     {
//      (value) =>{
//          const {loading,sortedRooms, rooms} = value;
//          if(loading){
//              return <Loading />
//          }
//          console.log(value);
//          return(
//          <div>
//          Hello From Room Filter
//          <RoomsFilter  rooms={rooms}/>
//          <RoomsList rooms={sortedRooms} />
//         </div>
//          )
//          }
//     }
//     </RoomConsumer>
    
  
//    </>
   
// )

// }


// export default RoomsContainer;