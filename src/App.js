import React, { Component } from 'react';
import './App.css';
import MapBlock from './components/MapBlock';
import EditorBlock from './components/EditorBlock';
import ListPointsBlock from './components/ListPointsBlock';



class App extends Component {
constructor(props) {
  super(props)
  this.state = {
  points: []
  }
}

/*onChangeHandle = (evt) => {
  let value = evt.target.value;
  console.log(value);
  if (evt.keyCode === keyCode) {
      //this.props.points.push(value);
      //this.setState({ points: this.createPoints()});
      this.setState({ arrayPoints: this.state.arrayPoints.push(value)});
      console.log(this.state.arrayPoints)
  }
} */

removePoint = id => {
  const points = [...this.state.points];
  const indx = points.findIndex(el => el.id === id);
  points.splice(indx, 1);
  this.setState({ points });
};

addPoint = (coor, point) => {
  const points = [...this.state.points];
  console.log(points)
  points.push({ id: points.length + 1, point, coor });
  this.setState({ points });
};


  render() {
    const { points } = this.state;
    return (
      <div className='container_wrapper'>
        <div className='title_block'><h1> Route Editor </h1></div>
        <section className='editor_block'>
        <EditorBlock  addPoint = {this.addPoint}/>
        <ListPointsBlock points={points} removePoint = {this.removePoint}/>
        </section>
        <MapBlock points={points}/>
        
      </div>
    );
  }
}

export default App;
