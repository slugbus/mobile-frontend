

//Importing done: Name, Lat, Long, stop ID, Background Image
const BlueIcon = { url: require('../assets/mapIcons/Blue_Stop.png'), scaledSize: { width: 30, height: 37 } };
const RedIcon = { url: require('../assets/mapIcons/Red_Stop.png'), scaledSize: { width: 30, height: 37 } };

export default allStops = [
    //Inner STOPS
    {
        direction: "Inner",
        icon: BlueIcon,
        name: "McLaughlin & Science Hill",
        latlng:{
            latitude: 36.9999313354492,
            longitude: -122.062049865723,
        },
        id: "stop1",
        pic: '../assets/busStopPics/Science_Hill.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Heller & Kerr Hall",
        latlng:{
            latitude: 36.9967041015625,
            longitude: -122.063583374023,
        },
        id: "stop2",
        pic: '../assets/busStopPics/Kerr.jpg'

    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Heller & Kresge College",
        latlng:{
            latitude: 36.999210357666,
            longitude: -122.064338684082,
        },
        id: "stop3",
        pic: '../assets/busStopPics/Kresge.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "McLaughlin & College 9 & 10 - Health Center",
        latlng:{
            latitude: 36.9997062683105,
            longitude: -122.05834197998,
        },
        id: "stop4",
        pic: '../assets/busStopPics/College_9.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Hagar & Bookstore",
        latlng:{
            latitude: 36.9966621398926,
            longitude: -122.055480957031,
        },
        id: "stop5",
        pic: '../assets/busStopPics/Bookstore.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Hagar & East Remote",
        latlng:{
            latitude: 36.9912567138672,
            longitude: -122.054962158203,
        },
        id: "stop6",
        pic: '../assets/busStopPics/East_Remote.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Hagar & Lower Quarry Rd",
        latlng:{
            latitude: 36.985523223877,
            longitude: -122.0535888671883,
        },
        id: "stop7",
        pic: '../assets/busStopPics/Quarry.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Coolidge & Hagar",
        latlng:{
            latitude: 36.9815368652344,
            longitude: -122.052131652832,
        },
        id: "stop8",
        pic: '../assets/busStopPics/Hagar.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "High & Western Dr",
        latlng:{
            latitude: 36.9787902832031,
            longitude: -122.057762145996,
        },
        id: "stop9",
        pic: '../assets/busStopPics/High_Western.png'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "High & Barn Theater",
        latlng:{
            latitude: 36.9773025512695,
            longitude:  -122.054328918457,
        }, 
        id: "stop10",
        pic: '../assets/busStopPics/Barn.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Empire Grade & Arboretum",
        latlng:{
            latitude:  36.9826698303223,
            longitude:  -122.062492370605,
        }, 
        id: "stop11",
        pic: '../assets/busStopPics/Arboretum.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Heller & Oakes College",
        latlng:{
            latitude:  36.9905776977539,
            longitude: -122.066116333008,
        }, 
        id: "stop12",
        pic: '../assets/busStopPics/Oakes.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Heller & Rachel Carson & Porter",
        latlng:{
            latitude:  36.9927787780762,
            longitude: -122.06488037109,
        }, 
        id: "stop13",
        pic: '../assets/busStopPics/Rachel_Carson.jpg'
    },

    //Parking lots, not Inner loop

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "West Remote Parking Lot",
        latlng:{
            latitude:  36.988537,
            longitude: -122.064799,
        }, 
        id: "stop14",
        pic: '../assets/busStopPics/West_Remote.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "East Remote Parking Lot",
        latlng:{
            latitude:   36.990786,
            longitude: -122.052190,
        }, 
        id: "stop15",
        pic: '../assets/busStopPics/East_Remote.jpg'
    },

    //OuterSTOPS
    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Heller & Kresge College",
        latlng:{
            latitude:  36.9992790222168,
            longitude: -122.064552307129,
        }, 
        "id": "stop16",
        pic: '.../assets/busStopPics/Kresge.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "McLaughlin & Science Hill",
        latlng:{
            latitude:  37.0000228881836,
            longitude: -122.062339782715,
        }, 
        "id": "stop17",
        pic: '../assets/busStopPics/Science_Hill.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "McLaughlin & College 9 & 10 - Health Center",
        latlng:{
            latitude:  36.9999389648438,
            longitude:  -122.058349609375,
        }, 

        "id": "stop18",
        pic: '../assets/busStopPics/College_9.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "McLaughlin & Crown College",
        latlng:{
            latitude:  36.9990234375,
            longitude: -122.055229187012,
        }, 
        "id": "stop19",
        pic: '../assets/busStopPics/Crown.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Hagar & Bookstore",
        latlng:{
            latitude:  36.9974822998047,
            longitude:-122.055030822754,
        }, 

        "id": "stop20",
        pic: '../assets/busStopPics/Bookstore.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Hagar & Field House East",
        latlng:{
            latitude:  36.9942474365234,
            longitude:-122.055511474609,
        }, 
        "id": "stop21",
        pic: '../assets/busStopPics/East_Field_House.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Hagar & East Remote",
        latlng:{
            latitude:  36.9912986755371,
            longitude:-122.054656982422,
        }, 
        "id": "stop22",
        pic: '../assets/busStopPics/East_Remote.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Hagar & Lower Quarry Rd",
        latlng:{
            latitude:  36.985912322998,
            longitude:-122.053520202637,
        }, 
        "id": "stop23",
        pic: '../assets/busStopPics/Quarry.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Coolidge & Hagar",
        latlng:{
            latitude:  36.9813537597656,
            longitude:-122.051971435547,
        }, 
        "id": "stop24",
        pic: '../assets/busStopPics/Hagar.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Coolidge & Main Entrance",
        latlng:{
            latitude:  36.9776763916016,
            longitude:-122.053558349609,
        }, 

        "id": "stop25",
        pic: '../assets/busStopPics/Main_Entrance.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "High & Western Dr",
        latlng:{
            latitude:   36.9786148071289,
            longitude:-122.05785369873,
        }, 
        "id": "stop26",
        pic: '../assets/busStopPics/High_Western.png'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Empire Grade & Tosca Terrace",
        latlng:{
            latitude:   36.9798469543457,
            longitude:-122.059257507324,
        }, 
        "id": "stop27",
        pic: '../assets/busStopPics/Empire_Grade.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Empire Grade & Arboretum",
        latlng:{
            latitude:   36.9836616516113,
            longitude:-122.064964294434,
        }, 
        "id": "stop28",
        pic: '../assets/busStopPics/Arboretum.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Heller & Oakes College",
        latlng:{
            latitude:   36.989917755127,
            longitude:-122.067230224609,
        }, 
        "id": "stop29",
        pic: '../assets/busStopPics/Oakes.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Heller & Family Student Housing",
        latlng:{
            latitude:   36.991828918457,
            longitude: -122.066833496094,
        }, 

        "id": "stop30",
        pic: '../assets/busStopPics/Family_Housing.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Heller & Rachel Carson & Porter",
        latlng:{
            latitude:  36.992977142334,
            longitude: -122.065223693848,
        }, 
        "id": "stop32",
        pic: '../assets/busStopPics/Rachel_Carson.jpg'
    }



]