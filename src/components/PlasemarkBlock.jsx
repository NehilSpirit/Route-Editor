import React, { Fragment } from 'react';
import { Placemark } from 'react-yandex-maps';

import '../App.css';

const PlasemarkBlock = (props) => {
    console.log(props);


    const marks = props.points.map((point, indx) => (

        <Placemark key={indx} id={point.id}
            geometry={point.coor}
            properties={{ hintContent: 'Это хинт', balloonContent: point.point }}
            options={{ draggable: true }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}

        />
    ))
    return (
        <Fragment>
            {marks}
        </Fragment>
    )
}
export default PlasemarkBlock;
//[54.6707, 39.7155]