import React, {useState, useContext} from 'react';
import Globalcontext from '../../components/context';
import {
  ScrollView,
  Text,
  View,
  Button,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default () => {
  const { DataAuth, setDataAuth } = useContext(Globalcontext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style={'auto'} />

        <View style={styles.datosContainer}>
          <Text />
          <Text />
          <Text />
          <Text style={styles.titleCellPhone}>Mis Datos</Text>

          <Text />
          <Text />
          <Text />
          <Text style={{textAlign: 'left'}}>
            Nombre completo: {DataAuth.name}
          </Text>

          <Text />
          <Text />
          <Text>Email: {DataAuth.email}</Text>

          <Text />
          <Text />
          <Text style={{marginBottom: 20}}>Teléfono: {DataAuth.phone}</Text>
        </View>
        <Text style={styles.placeholder}></Text>
        <Text style={styles.titleSecondary}> Actualiza tus datos</Text>
        <Text />

        <View style={styles.formContainer}>
          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setName}
              placeholder="Nombre Completo"
              placeholderTextColor="#000"
              style={styles.textInput}
              value={name}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setPhone}
              placeholderTextColor="#000"
              style={styles.textInput}
              placeholder="Teléfono"
              value={phone}
            />
          </View>

          <View style={styles.buttonSubmitContainer}>
            <TouchableOpacity
              onPress={() => {
                setDataAuth({...DataAuth, name, phone});
                setName('');
                setPhone('');
                Alert.alert('Oka', 'Se efectuaron los cambios');
              }}>
              <View style={styles.buttonSubmit}>
                <Text style={styles.buttonTitle}>Guardar cambios</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text />
          <Text />

          <Button
            title="Salir"
            onPress={() => {
              //setDataAuth({});
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

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
  form: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'rgb(58, 58, 60)',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  label: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
  },
  formContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    color: '#FFFFFF',
    flex: 1,
  },
  buttonSubmitContainer: {
    flex: 1,
    width: '100%',
  },
  buttonSubmit: {
    alignItems: 'center',
    backgroundColor: 'rgb(58, 58, 60)',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  },
  datosContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: 'rgb(58, 58, 60)',
    width: '90%',
    marginTop: 40,
    borderRadius: 20,
  },
});
