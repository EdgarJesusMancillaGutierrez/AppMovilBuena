//MANCILLA GUTIÉRREZ EDGAR JESÚS
import React, { Component } from 'react';
import {View,Text, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
class Films extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }
  async componentDidMount(){
    try{
      const response = await fetch('https://swapi.co/api/films');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      },function(){
      });
    }catch(error){
      console.log(error);
    }
  }
  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <View>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) => 
            <Text>{item.name},{item.gravity},{item.terrain}</Text>
          }
          keyExtractor = {({id},index)=>id} />
      </View>
    );
  }
}
export default Planetas;