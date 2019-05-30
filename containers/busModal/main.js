import React, { Component } from 'react';
import ComponentView from './view';
import allStops from '../../busData/allStops'
import Axios from 'axios';
const Slug_Bus_90 = require('../../assets/mapIcons/Slug_Bus_90.png')
import ScaledImage from 'react-native-scaled-image'
import { Font } from 'expo'

class Main extends Component {

    constructor(props) {

        super(props);

        this.state = {
            fontsLoaded: false,
            isMounted: false

        }
    }

    async componentDidMount() {
        this.setState({
            isMounted: true
        })
        await Font.loadAsync({
            'Pacifico': require('../../assets/fonts/Pacifico-Regular.ttf')
        })
        if (this.state.isMounted) {
            this.setState({
                fontLoaded: true
            })

        }

    }
    componentWillUnmount() {
        this.setState({
            isMounted: false
        })
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

