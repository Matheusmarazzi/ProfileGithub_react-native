import React from 'react';
import {View, Text,StyleSheet,SafeAreaView,Pressable, linking, StatusBar,Image, Linking} from 'react-native';
//SafeAreaView serve para nao usar a tela na parte do notch;
//StatusBar serve para manipular a bara de notificação;
const urlToGithub = 'https://github.com/Matheusmarazzi';
const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colordarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/71531067?v=4';
const App = ()=>{
  const handlePressGoToGithub = async ()=>{
    console.log("verificando link");
    const res = await Linking.canOpenURL(urlToGithub);
    if(res){
     console.log("link aprovado");
     await Linking.openURL(urlToGithub);
   }
  }
  return (
      <SafeAreaView style={style.container}>
          <View style={style.content}>
            <StatusBar style={style.barra} barStyle="light-content"/>
            <Image style={style.avatar} source={{uri: imageProfileGithub}}/>
            <Text 
            accessibilityLabel='Nome Matheus marazzi'
             style={[style.defaultText,style.name]}>Matheus Marazzi
            </Text>    
            <Text 
              accessibilityLabel='Nickname Matheusmarazzi'
              style={[style.defaultText, style.nickName]}>Matheusmarazzi
            </Text>
            <Text 
              accessibilityLabel='descricao Desenvolvedor React native'
              style={[style.defaultText,style.description]}>Desenvolvedor React native
            </Text>
            <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                  <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                </View>
            </Pressable>
          </View>
      </SafeAreaView>
  );
};
export default App;
const style = StyleSheet.create({
container:{
  backgroundColor: colorGithub,
  flex:1, //tamanho total da tela
  justifyContent: 'center',
  flexDirection: 'row',// muda a direçao em que os itens ficam
},
content:{
  //justifyContent: 'center',
  alignItems: 'center',
  //outras opcoes de alinhamento
  //alignItems: 'flex-start' |alinha da esquerda para direita
  //alignItems: 'flex-end', | alinha da direita para esquerda
  padding: 20, //margem entre itens
},
barra:{
  backgroundColor:colorGithub,
  
},
avatar: {
  height: 200,
  width: 200,
  borderRadius: 100,
  borderColor: 'white',
  borderWidth:2,
},
defaultText:{
  color: colorFontGithub,
},
name:{
  marginTop:20,
  fontSize: 24,
  fontWeight: 'bold',
},
nickName:{
  fontSize: 18,
  color: colordarkFontGithub,
},
description:{
  fontSize: 14,
  fontWeight: 'bold',
},
button:{
  backgroundColor: colordarkFontGithub,
  borderRadius: 10,
  padding: 20
},
textButton:{
  fontSize: 16,
  fontWeight: 'bold',
},
});