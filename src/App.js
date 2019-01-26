import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super()

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true',
    }

    this.handleUpdateColor = this.handleUpdateColor.bind(this)
    this.handleUpdateSize = this.handleUpdateSize.bind(this)
    this.handleUpdateFamily = this.handleUpdateFamily.bind(this)
    this.handleUpdateEditStatus = this.handleUpdateEditStatus.bind(this)

  }

  // updateColor
  handleUpdateColor(val){
    this.setState({
      fontColor: val,
    })
  }

  // updateSize
  handleUpdateSize(val) {
    this.setState({
      fontSize: val,
    })
  }

  // updateFamily
  handleUpdateFamily(val) {
    this.setState({
      fontFamily: val,
    })
  }

  // updateEditStatus
  handleUpdateEditStatus(val) {
    this.setState({
      allowEdit: val,
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">

          { /* Render EditToggle */ }
          <EditToggle update={this.handleUpdateEditStatus}></EditToggle>

          { /* Render ColorChanger */ }
          <ColorChanger update={this.handleUpdateColor} allowEdit={this.state.allowEdit}></ColorChanger>

          { /* Render SizeChanger */ }
          <SizeChanger update={this.handleUpdateSize} allowEdit={this.state.allowEdit}></SizeChanger>

          { /* Render FamilyChanger */ }
          <FamilyChanger update={this.handleUpdateFamily} allowEdit={this.state.allowEdit}></FamilyChanger>


        </div>
        <div className="textArea">

          { /* Render TextContainer */ }
          <TextContainer fontColor={this.state.fontColor} fontSize={this.state.fontSize} fontFamily={this.state.fontFamily}></TextContainer>

        </div>
      </div>
    )
  }
}

export default App;
