import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy Location",
      },
    };
    console.log("Child - constructor called!");
  }
  async componentDidMount() {
    //Api Calls
    // const data = await fetch("https://api.github.com/users/vakilsingh12");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });
    this.timer=setInterval(()=>{
      console.log("setinterval===")
    },1000)
    console.log("Child- component did mount---------");
  }
  componentDidUpdate(){
    console.log("component Update")
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("component unmount")
  }
  render() {
    console.log("Child - inside render method!");
    return (
      <>
      <img src={this.state.userInfo.avatar_url} alt="" />
        <h1>Name : {this.state.userInfo.name} Verma</h1>
        <h2>Location : {this.state.userInfo.location}</h2>
      </>
    );
  }
}
export default ProfileClass;
