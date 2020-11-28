import React from 'react';
import {styles} from '../component/Styles';
import { Text, View, TouchableOpacity,FlatList } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Cart extends React.Component{

    constructor(){
        super()
        this.state={
            requestedItemsofPants:[],
            PantName:'',
            PantQuantity:'',
            PantSize:0,
            PantRate:0,
            PantPrice:0,
            requestedItemsofShirt:[],
            ShirtName:'',
            ShirtQuantity:'',
            ShirtSize:0,
            ShirtRate:0,
            ShirtPrice:0,
            requestedItemsofWatch:[],
            WatchName:[],
            WatchQuantity:'',
            WatchSize:0,
            WatchRate:0,
            WatchPrice:0,
            requestedItemsofTie:[],
            TieName:'',
            TieQuantity:'',
            TieSize:0,
            TieRate:0,
            TiePrice:0,
            requestedItemsofSport:[],
            SportName:'',
            SportQuantity:'',
            SportSize:0,
            SportRate:0,
            SportPrice:0,
            requestedItemsofFormal:[],
            FormalName:'',
            FormalQuantity:'',
            FormalSize:0,
            FormalRate:0,
            PanFormalPrice:0,
            userID:firebase.auth().currentUser.email,
                tableHead: ['Items', 'Quantity', 'Rate', 'Price'],
                tableData: [
                  ['Shirt', '0', '0', '0'],
                  ['Pant', '0', '0', '0'],
                  ['Watch', '0', '0', '0'],
                  ['Tie', '0', '0', '0'],
                  ['Sport Shoes','0','0','0'],
                  ['Formal Shoes','0','0','0']
                ]
        }
    }

    getrequesteditemPant = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Pant').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var PantNames = doc.data().PantName
            AllItemsName.push(PantNames)
            var PantQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(PantQuantitys)
            var PantSizes = doc.data().PantQuantity
            ALlItemsSize.push(PantSizes)
            var PantRates = doc.data().PantRate
            AllItemsRate.push(PantRates)
            this.setState({
                PantName:AllItemsName,
                PantQuantity:AllItemsQuantity,
                PantSize:ALlItemsSize,
                PantRate:ALlItemsSize,
            })
            this.setState({
                PantPrice:this.state.PantQuantity * this.state.PantRate
            })
        });
        console.log(this.state.PantName,this.state.PantPrice,this.state.PantQuantity,this.state.PantRate)
    }

    getrequesteditemShirt = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Shirts').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var ShirtNames = doc.data().ShirtName
            AllItemsName.push(ShirtNames)
            var ShirtQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(ShirtQuantitys)
            var ShirtSizes = doc.data().PantQuantity
            ALlItemsSize.push(ShirtSizes)
            var ShirtRates = doc.data().PantRate
            AllItemsRate.push(ShirtRates)
            this.setState({
                ShirtName:AllItemsName,
                ShirtQuantity:AllItemsQuantity,
                ShirtSize:ALlItemsSize,
                ShirtRate:AllItemsRate,
            })
            this.setState({
                ShirtPrice:this.state.ShirtQuantity * this.state.ShirtRate
            })
        });
        console.log(this.state.ShirtName,this.state.ShirtQuantity,this.state.ShirtRate,this.state.ShirtSize)
    }

    getrequesteditemWatch = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Watch').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var WatchNames = doc.data().WatchName
            AllItemsName.push(WatchNames)
            var WatchQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(WatchQuantitys)
            var WatchSizes = doc.data().PantQuantity
            ALlItemsSize.push(WatchSizes)
            var WatchRates = doc.data().PantRate
            AllItemsRate.push(WatchRates)
            this.setState({
                WatchName:AllItemsName,
                WatchQuantity:AllItemsQuantity,
                WatchSize:ALlItemsSize,
                WatchRate:AllItemsRate,
            })
            this.setState({
                WatchPrice:this.state.WatchQuantity * this.state.WatchRate
            })
        });
        console.log(this.state.WatchName,this.state.WatchQuantity,this.state.WatchRate,this.state.WatchSize)
    }

    getrequesteditemTie = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Tie').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var TieNames = doc.data().TieName
            AllItemsName.push(TieNames)
            var TieQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(TieQuantitys)
            var TieSizes = doc.data().PantQuantity
            ALlItemsSize.push(TieSizes)
            var TieRates = doc.data().PantRate
            AllItemsRate.push(TieRates)
            this.setState({
                TieName:AllItemsName,
                TieQuantity:AllItemsQuantity,
                TieSize:ALlItemsSize,
                TieRate:AllItemsRate,
            })
            this.setState({
                TiePrice:this.state.TieQuantity * this.state.TieRate
            })
        });
        console.log(this.state.TieName,this.state.TieQuantity,this.state.TieRate,this.state.TieSize)
    }

    getrequesteditemSport = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Sport').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var SportNames = doc.data().SportName
            AllItemsName.push(SportNames)
            var SportQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(SportQuantitys)
            var SportSizes = doc.data().PantQuantity
            ALlItemsSize.push(SportSizes)
            var SportRates = doc.data().PantRate
            AllItemsRate.push(SportRates)
            this.setState({
                SportName:AllItemsName,
                SportQuantity:AllItemsQuantity,
                SportSize:ALlItemsSize,
                SportRate:AllItemsRate,
            })
            this.setState({
                SportPrice:this.state.SportQuantity * this.state.SportRate
            })
        });
        console.log(this.state.SportName,this.state.SportQuantity,this.state.SportRate,this.state.SportSize)
    }

    getrequesteditemFormal = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Formal').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var FormalNames = doc.data().FormalName
            AllItemsName.push(FormalNames)
            var FormalQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(FormalQuantitys)
            var FormalSizes = doc.data().PantQuantity
            ALlItemsSize.push(FormalSizes)
            var FormalRates = doc.data().PantRate
            AllItemsRate.push(FormalRates)
            this.setState({
                FormaltName:AllItemsName,
                FormalQuantity:AllItemsQuantity,
                FormalSize:ALlItemsSize,
                FormalRate:AllItemsRate,
            })
            this.setState({
                FormaltPrice:this.state.FormalQuantity * this.state.FormalRate
            })
        });
        console.log(this.state.FormalName,this.state.FormalQuantity,this.state.FormalRate,this.state.FormalSize)
    }

    componentDidMount(){
        this.getrequesteditemPant()
        this.getrequesteditemFormal()
        this.getrequesteditemShirt()
        this.getrequesteditemSport()
        this.getrequesteditemTie()
        this.getrequesteditemWatch()
    }

    render(){
        return(
            <View style={styles.container}>
                
            </View>
        )
    }
}