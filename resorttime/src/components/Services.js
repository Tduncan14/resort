import React ,{Component} from 'react';
import Title from './Title';
import{FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';


class Services extends Component {

 state={
     services:[
         {
           icon:<FaCocktail />,
           title:" Free cocktails/limits varies",
           info:" Just keep going"
         },
         {
           icon:<FaHiking />,
           title:"Hiking locations to see the scenery",
           info:"Hike"
         },
         {
          icon:<FaShuttleVan />,
          title:"Take a shuttle anywhere you want to",
          info:" Yo"
         },
         {
            icon:<FaBeer />,
            title:"If you are not a fan of cocktail,try our beer",
            info:"Beer of you choice, just don't get to drunk"
         }
     ]
 }

  render(){
      return(
          <section className="services">
              <Title title="services" />
              <div className="services-center">
             {this.state.services.map((item,index) => (
                 <article key={index}  className="services">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                 </article>
             ))}
              </div>
          </section>

      )
  }
}


export default Services;