import React, { Component } from 'react';
import ComponentView from './view';
import allStops from '../../busData/allStops'
import Axios from 'axios';
const Slug_Bus_90 = require('../../assets/mapIcons/Slug_Bus_90.png')
import { Image } from 'react-native'
import { Constants, MapView, Location, Permissions } from 'expo';

var num = 0

class Main extends Component {

    constructor(props) {

        super(props);

        this.state = {

            mapRegion: null,
            hasLocationPermissions: false,
            locationResult: null,
            markers: [...allStops],
            busArray: [],
            responseSize: 0,
            initBusMarkers: false,
            tracksViewChanges: true,
            busStopVisible: false,
            busInfoVisible: false,
            clickedMarker: {},
            locationResult: null,
            userLocation: []

        }
    }

    async componentDidMount() {

        this.getLocationAsync();
        this.addMarker()
        this.intervalId = setInterval(this.addMarker.bind(this), 1000)

    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        console.log("STATUS", status)
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        } else {

            this.setState({ hasLocationPermissions: true });
        }
        let location = await Location.getCurrentPositionAsync({});
        let locationObj = JSON.stringify(location)
        userLocArray = []

        userLocArray.push({
            key:1,
            latlng: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            }

        })
        this.setState({
            locationResult: JSON.stringify(location),
            userLocation: [...userLocArray]

        });
        console.log('userLOc', this.state.userLocation)


    };

    onRegionChange = (region) => {
        console.log('onRegionChange', region);
    };

    onRegionChangeComplete = (region) => {
        console.log('onRegionChangeComplete', region);
    };

    async addMarker() {
        let busArray = []


        Axios.get('http://169.233.250.40:8080/location/get')
            .then(
                (response) => {
                    this.setState({

                        busArray: [...response.data]
                    })
                }
            ).catch(function (err) {

                console.log("Got an error logging in, here's the message: ", err);
            });

        await this.state.busArray.map(bus => {
            console.log(bus.type)
            if (bus.type !== 'LOOP OUT OF SERVICE AT BARN THEATER') {
                return busArray.push(
                    { ...bus, angle: Math.floor(Math.random() * 360) + 1 }
                )
            }

        })

        this.setState({
            busArray: [...busArray]
        })

        if (this.state.busArray.length > 0) {
            let markers = [...this.state.markers];
            let updatedBusMarkers = []

            this.state.busArray.map(x => {
                return updatedBusMarkers.push({
                    ...x,
                    latlng: {
                        latitude: x.lat,
                        longitude: x.lon
                    },


                })
            })

            if (!this.state.initBusMarkers) {

                let addedBuses = markers.concat(updatedBusMarkers)

                this.setState({
                    markers: [...addedBuses],
                    responseSize: this.state.busArray.length,
                    initBusMarkers: true
                })


            } else {


                if (this.state.responseSize > 0) {

                    let deleteVal = this.state.markers.length - this.state.responseSize;

                    markers.splice(deleteVal, this.state.responseSize)
                    let returnVal = markers.concat(updatedBusMarkers)

                    this.setState(prevState => ({
                        markers: [...returnVal],
                        responseSize: updatedBusMarkers.length
                    }));

                }

            }

        }

    }
    setBusStopVisible(visible) {
        this.setState({
            busStopVisible: visible
        })
    }

    setBusInfoVisible(visible) {
        this.setState({
            busInfoVisible: visible
        })
    }

    markerPressed(marker) {
        console.log('marker', marker)
        this.setState({
            clickedMarker: marker
        })

        if (marker.type == null) {
            this.setBusStopVisible(true)
        }
        else {
            this.setBusInfoVisible(true)
        }

    }

    onMarkersLoad = () => {
        console.log(num)
        num++
        this.setState({
            tracksViewChanges: false
        })

        this.forceUpdate()
    }

    changeBusMarker(angle) {

        return (
            <Image onLoad={() => this.onMarkersLoad()} source={Slug_Bus_90} style={{ transform: [{ rotate: angle + 'deg' }], width: 75, height: 75 }} />

        )
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}



export default Main;

