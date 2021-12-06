import React, {useState, useEffect, useContext} from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import SucursalColoniaImg from '../../assets/sucursalColonia.png';
import SucursalMercedesImg from '../../assets/sucursalMercedes.png';
import PhoneUnoImg from '../../assets/phoneUno.png';
import PhoneDosImg from '../../assets/phoneDos.png';

export default function Home() {
  const sucursales = [
    {
      id: 1,
      img: SucursalColoniaImg,
      place: 'Sucursal palermo',
      phone: '1539392939',
    },
    {
      id: 2,
      img: SucursalMercedesImg,
      place: 'Sucursal belgrano',
      phone: '17288381',
    },
    {
      id: 3,
      img: PhoneUnoImg,
      place: 'Sucursal',
      phone: '11111',
    },
    {
      id: 4,
      img: PhoneDosImg,
      place: 'Sucursal',
      phone: '11111',
    },
  ];

  const renderSucursales = ({item}) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            width: 200,
            height: 200,
            marginLeft: 3,
            marginRight: 3,
          }}>
          <Image
            source={item.img}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              backgroundColor: 'rgba(0,0,0, .5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                width: '60%',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {item.place} {item.phone}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const ItemSeparator = () => (
    <View
      style={{
        height: 2,
      }}
    />
  );
  return (
    <View style={{flex: 1}}>
      <View style={{}}>
        <StatusBar style="auto" />

        <Text />
        <Text />
        <Text />
        <Text style={styles.titleCellPhone}>Bienvenid@ {DataAuth.name}</Text>
        <View style={{width: '100%', height: 60}} />
        <FlatList
          data={sucursales}
          keyExtractor={i => i.id}
          renderItem={renderSucursales}
          ItemSeparatorComponent={ItemSeparator}
          numColumns={2}
          style={{marginLeft: 5, marginRight: 5}}
        />

        <Button
          title="Salir"
          onPress={() => {
            setDataAuth({});
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCellPhone: {
    fontSize: 25,
    color: '#0000ff',
  },
  titleSecondary: {
    fontSize: 20,
    color: '#0000ff',
  },
  LoginGoogle: {
    resizeMode: 'stretch',
    width: 250,
    height: 58,
  },
  ImageHome: {
    resizeMode: 'stretch',
    width: 250,
    height: 200,
  },
  placeholder: {
    height: 40,
    width: 350,
    borderBottomWidth: 1,
    marginVertical: 30,
    alignContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 30,
  },
  listaReserva: {
    padding: 15,
    borderBottomWidth: 1,
    // marginTop: 1
  },
  principal: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detalle: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reserva: {
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  vehiculo: {
    padding: 15,
    borderBottomWidth: 1,
    // marginTop: 1
  },
  contenedorRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  contenedorSignin: {
    paddingTop: 80,
    flex: 1,
  },
  containerIngreso: {
    paddingTop: 15,
    marginTop: 30,
  },
  containerBoton: {
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 15,
  },
  boton: {
    width: 200,
    height: 40,
    backgroundColor: '#00AAE4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  link: {
    marginTop: 30,
    fontSize: 18,
    color: '#33A8FF',
    paddingVertical: 5,
  },
  linkOlvidaste: {
    color: 'blue',
  },
});
