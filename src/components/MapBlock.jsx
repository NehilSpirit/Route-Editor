import React, { Component } from 'react'
import { YMaps, Map, ZoomControl} from 'react-yandex-maps';
import '../App.css'
import PlasemarkBlock from './PlasemarkBlock';

const mapState = { center: [54.6707, 39.7155], zoom: 10 };
const controls = { controls: ['ZoomControl'] }
const style = { width: '100%', height: '500px' };

class MapBlock extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        
    }

    render() {
        return (
            <section className='map_block'>
                <YMaps>
                    <Map state={mapState} style={style} controls={controls}>
                        <PlasemarkBlock points = {this.props.points}/>
                        <ZoomControl controls={controls} />
                    </Map>
                </YMaps>
            </section>
        )
    }
}
export default MapBlock;

/*const CreateMarc = () => {
<YMaps>
{Geocode("Петрозаводск")
.then(function(res) { myMap.geoObjects.add(res.geoObjects);}
</YMaps>
    /*var myGeocoder = ymaps.geocode("Петрозаводск");
myGeocoder.then(function(res) {
    myMap.geoObjects.add(res.geoObjects);
});
GeoObjectCollection([feature[, options]])
} */