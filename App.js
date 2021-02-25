import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';


export default function App() {

  return (
    <SafeAreaView >

      <View style={styles.tituloIcone} >
      <TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}> 
        <Image
              style={styles.esq}
              source={{
                uri: 'https://static.thenounproject.com/png/101388-200.png'
              }}
              />
        </View>
        </TouchableOpacity>
          <Text style={styles.tituloIcone}>INSTAGRAM</Text>
          <View>
          <TouchableOpacity>
          <View>
            <Image
              style={styles.dir}
              source={{
                uri: 'https://i.pinimg.com/originals/26/f4/8e/26f48ebfc6e55ff1d5cf75d106f62035.png'
              }}
            />
        </View>
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
        <View>
        <Image
            style={styles.dir2}
            source={{
              uri: 'https://static.thenounproject.com/png/2552724-200.png'
            }}
            />
            </View>
            </TouchableOpacity>
        </View>

     

      <View style={styles.linhaNomeImagem} >
        <View style={{flexDirection: 'row', alignItems: 'center'}}> 
          <TouchableOpacity>
          <View>
            <Image
              style={{width: 50, height: 50, borderRadius: 50}}
              source={{
                uri: 'https://http2.mlstatic.com/D_NQ_NP_614041-MLB27185740295_042018-O.jpg'
              }}

            />
          </View>
          </TouchableOpacity>
  
          <Text style={styles.nomeUsuario}>Leonardo Lanjoni</Text>
        </View>
        
        <View>
          <Text style={{ fontSize: 40, color: '#c4c4c4' }}> ...</Text>
        </View>

      </View>

    
    <View>
      <Image
      style={styles.fotoPost}
        source={{
          uri: 'https://razaodeaspecto.com/wp-content/uploads/2019/10/xcD84rH2f1dytTFeJlopoJ5MKgW.jpg'
        }}
        />
    </View>

    <View>
      <Image
      style={styles.barraStatus}
        source={{
          uri: 'http://webcrew.it/wp-content/uploads/2018/03/barra-navigazione.jpg'
        }}
      />
    </View>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  
  tituloIcone: {
    paddingLeft: 50,
    paddingVertical: 5,
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    alignItems: 'center',
    marginTop: 5,
  },
  esq: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginLeft:-65
  },

  dir: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginRight:7
  },

  dir2: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginRight:0,
  },

  linhaNomeImagem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 7,
  },

  fotoPost:{
    width: '100%',
    height: 550, 
    marginTop:10
  },

  nomeUsuario:{
  fontSize: 18,
  color: '#000', 
  marginLeft: 10,
  fontWeight: 'bold'

},

barraStatus:{
  width: '100%',
  height: 60, 
  marginTop:-10 
},
});
