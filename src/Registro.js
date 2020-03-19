//MANCILLA GUTIÉRREZ EDAGR JESÚS
import React,{Component,useState,useEffect} from 'react';
import {View, StyleSheet, Alert, TextInput,TouchableOpacity} from 'react-native';
import { Container,Button,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
class Registro extends Component {
  constructor(props){
     super(props);
    this.state = {
    name:'',
    correo:'',
    pass:''};
  }
  mensaje = ()=>{alert('Felicidades, se han guardado los datos')};
  userRegister = () =>{
		const {name} = this.state;
		const {correo} = this.state;
		const {pass} = this.state;
		fetch('http://192.168.1.101/User_Project/user_registration.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				name: name,
				correo: correo,
				pass: pass,
			})
		})
		.then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
			})
			.catch((error)=>{
				console.error(error);
			});
	}
  render(){
  const navegar = this.props.navigation;
    return(  
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Ingresa los datos requeridos</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Usuario'
                            value={this.state.name}
                            onChangeText={(name)=>this.setState({name})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'MaterialCommunityIcons' name= 'email'></Icon>
                  <Input placeholder= 'E-mail'
                            value={this.state.correo}
                            onChangeText={(correo)=>this.setState({correo})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                            value={this.state.pass}
                            onChangeText={(pass)=>this.setState({pass})}/>
                </Item>
               <Item inlineLabel last>
                            <TouchableOpacity
		                        onPress={this.userRegister}
                            style={{width:250,padding:10, backgroundColor:'magenta',
                            alignItems:'center'}}>
                            <Text style={{color:'#fff'}}>Registrate</Text>
                            </TouchableOpacity>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
             <Button success style= {misEstilos.boton} onPress={() => navegar.navigate                   ('Movies')}>
            <Text>Mostrar movies</Text>
             </Button> 
            </CardItem>
          </Card>
          <Button full>
            <Icon type= 'AntDesign' name= 'facebook-square'></Icon>
            <Text>Registrarse con facebook</Text>
          </Button>
        </Content>
      </Container>     
    );
  }
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },

  body: {
    paddingVertical: 35
  }, 
  boton: {
         marginLeft: '1%',
    },
   boton1: {
         marginRight: '1%',
         backgroundColor: 'blue',
    },

});
export default Registro;