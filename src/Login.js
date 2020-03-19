//MANCILLA GUTIÉRREZ EDGAR JESÚS
import React,{Component} from 'react';
import {View, StyleSheet, Alert, TextInput,ActivityIndicator,Keyboard} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon,Button} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
class Login extends Component{
   constructor(props){
        super(props);
        this.state = {
          name:'',
          pass:'' };
    }
  login = () =>{
		const {name,pass} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(name==""){
		  this.setState({name:'Nombre'})
			
		}
		
		else if(reg.test(name) === false)
		{
		this.setState({name:'Algo salio mal, inténtalo de nuevo'})
		return false;
		  }

		else if(pass==""){
		this.setState({pass:'Contraseña'})
		}
		else{
		
		fetch('http://192.168.1.101/User_Project/User_Login.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				name: name,
				pass: pass
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "Aceptar"){
				 
				 alert("Bienvenido");
				 this.props.navigation.navigate("Principal");
			 }else{
				 alert("Datos incorrectos");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		Keyboard.dismiss();
	}
    render(){
  const navigation = this.props.navigation;
  return (
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Iniciar sesión</Text>
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
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                  type='text'
                   value={this.state.pass}
                   onChangeText={(pass)=>this.setState({pass})}/>
                </Item>
                <Item inlineLabel last>
                    <Button success style = {misEstilos.boton2} 
                    onPress ={this.login}>
                    <Text>Ingresar</Text>
                    </Button>
                </Item>
                
              </Body>
            </CardItem>
            <CardItem>
            <Button success style = {misEstilos.boton} 
                    onPress ={() =>
                        navigation.navigate('Registro')}>
                    <Text>Registrate</Text>
                    </Button>
                    <Button primary style = {misEstilos.boton1} 
                    onPress ={() =>
                        navigation.navigate('Conocenos')}>
                    <Text>Conocenos</Text>
                    </Button>
            </CardItem>
          </Card>
          
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
    paddingVertical: 35,
  },
    boton1: {
    marginLeft: '15%',
  },
     boton: {
    marginRight: '15%',
  },
       boton2: {
    marginLeft: '45%',
    backgroundColor: 'blue'
  }
});

export default Login;