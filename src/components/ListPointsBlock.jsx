import React, { Component, Fragment } from "react";
import '../App.css';

class ListPointsBlock extends Component {

  onRemoveHandler = (id, coor)=> {
    console.log("remove ", id);
    this.props.removePoint(id);
  };

  render() {
    const points = this.props.points.map((point, indx) => (
      <h3 key={indx} id={point.id}>
        {point.point}
        <button
          onClick={() => {
            this.onRemoveHandler(point.id, point.coor);
          }}
        >
          remove
        </button>
      </h3>
    ));
    return (
      <Fragment>
        {points}
      </Fragment>
    );
  }
}

export default ListPointsBlock;
