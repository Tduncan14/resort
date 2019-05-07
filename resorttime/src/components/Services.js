import React ,{Component} from 'react';
import Title from './Title';
import{FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';


class Services extends Component {

 state={
     services:[
         {
           icon:<FaCocktail />,
           title:" Free cocktails/limits varies"
         },
         {
           icon:<FaHiking />,
           title:"Hiking locations to see the scenery"
         },
         {
          icon:<FaShuttleVan />,
          title:"Take a shuttle anywhere you want to"
         },
         {
            icon:<FaBeer />,
            title:"If you are not a fan of cocktail,try our beer"
         }
     ]
 }

  render(){
      return(
          <div>
              <Title title="services" />
          </div>

      )
  }
}


export default Services;