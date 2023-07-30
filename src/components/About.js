import {Component} from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./Profile";
const About2 = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is namste react course live chap: 07 finding the path</p>
      {/* <Outlet /> */}
      <ProfileClass name="vakil"/>
    </div>
  );
};
class About extends Component{
  constructor(props) {
    super(props)
    console.log("Parent-constructor")
  }
  async componentDidMount(){
    //Api Calls 
    console.log("Parent- component did mount---------")
  }
  render(){
    console.log("Parent - render")
    return (
      <div>
      <h1>About Us Page</h1>
      <p>This is namste react course live chap: 07 finding the path</p>
      {/* <Outlet /> */}
      <ProfileClass name="vakil"/>
    </div>
    )
  }
}
export default About;
