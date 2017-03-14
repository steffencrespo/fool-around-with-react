import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render() {

    // map over children props
    // let items = React.Children
    //   .map(this.props.children, child => child)

    //converting children to array
    // let items = React.Children.toArray(this.props.children)

    //forEach
    // let items = React.Children
      // .forEach(this.props.children, child => console.log(child.props.className));

      //returns an error if there is more than one children
    let items = React.Children.only(this.props.children)
    console.log(items);
    return null
  }
}

export default App
