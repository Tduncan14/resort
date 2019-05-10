import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Banner from '../components/Banner';


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

    return(
 <div> This the number of </div>
    )
    
  }
}

SingleRoom.contextType = RoomContext;