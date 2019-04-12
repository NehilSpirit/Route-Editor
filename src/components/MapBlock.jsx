import React, { Component } from 'react'
import '../App.css'

class MapBlock extends Component {
    constructor(props) {
        super(props)
        this.ymap = window.ymaps;
        this.map = null;
        console.log(props);


    }
    componentDidMount = () => {
        this.ymap.ready(this.initMap);

    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.routes !== this.props.routes) {
            this.clearMap()
        }
        if (prevProps.routes !== this.props.routes && this.props.routes.length > 1) {
            this.createRoute()
        } if (prevProps.routes !== this.props.routes && this.props.routes.length === 1) {
            this.createPlasemark()

        }
    }

    initMap = () => {
        this.map = new this.ymap.Map('map_block', {
            center: [55.76, 37.64],
            zoom: 7,
            controls: ['zoomControl']
        });
        this.map.behaviors
            .disable('scrollZoom');
    }

    createRoute = () => {
        const mapRoutes = this.props.routes.map((mapRoute) => {
        return {type: 'wayPoint', point: mapRoute.coor}
        });
        this.ymap.route(mapRoutes, {
            mapStateAutoApply: true,
            
        }).then((route) => {
            this.map.geoObjects.add(route);
            console.log(mapRoutes);
            this.ymap.route.editor.start({editWayPoints: true});
        });
        
    }

    createPlasemark = () => {
        const { id, point, coor } = this.props.routes[0]
        console.log(id, point, coor)
        this.myGeoObject = new this.ymap.GeoObject({
            id: id,
            key: '1',
            geometry: {
                type: "Point",
                coordinates: coor
            },
            properties: {
                hintContent: point,
                balloonContent: point
            }
        }, {
        
                // Метку можно перемещать.
                draggable: true
            });
        this.map.geoObjects
            .add(this.myGeoObject)
    }

    clearMap = () => {

        this.map.geoObjects.removeAll();
    }

    render() {
        return (
            <section id='map_block'>
            </section>
        )
    }
}
export default MapBlock;
