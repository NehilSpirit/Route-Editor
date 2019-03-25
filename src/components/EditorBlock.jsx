import React, { Component, Fragment } from 'react';
import '../App.css';

//let newpoints = [];

const keyCode = 13;

class EditorBlock extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            inputValue: ''
        }
    }

    onChangeHandler = evt => {
        const { value } = evt.target;
        this.setState({ inputValue: value });
    };

    keyPressHandler = evt => {
        const { value } = evt.target;
        if (evt.key.toUpperCase() === "ENTER") {
            evt.preventDefault();
            //this.props.addPoint(this.state.inputValue);
            //this.setState({ inputValue: "" });
            window.ymaps.geocode(this.state.inputValue).then(res => {
                const firstGeoObject = res.geoObjects.get(0);
                const coords = firstGeoObject.geometry.getCoordinates();
                console.log("ymaps coords", coords);
                this.props.addPoint(coords, this.state.inputValue);
                this.setState({ inputValue: "" });
              });
        }
    };


    render() {
        return (
            <Fragment>
                <input className='input'
                    type="text"
                    value={this.state.inputValue}
                    placeholder='Создать новую метку'
                    onChange={this.onChangeHandler}
                    onKeyPress={this.keyPressHandler} />
            </Fragment>
        )
    }

}
export default EditorBlock;