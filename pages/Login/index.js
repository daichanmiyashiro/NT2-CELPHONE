import React, {useState, useEffect, useContext} from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
//import styles from '../../util/styles';
import GlobalContext from '../../components/context';
import * as Google from 'expo-auth-session/providers/google';

export default function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const {DataAuth, setDataAuth} = useContext(GlobalContext);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:'852659492357-2iml7hpfv1ado295t4abqli8oko04kep.apps.googleusercontent.com',
      iosClientId:'923761599304-41hkeh1v3umtl2ntm5vht4j8ld9ch2sv.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const {authentication} = response;
      const {token} = authentication;
      setDataAuth({...DataAuth, token});

      //  API google para traerme info del usuario
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`,
      )
        .then(res => res.json())
        .then(data => {
          const {name, email,id} = data;
          setDataAuth({...DataAuth, name, email,id});
		  console.log(data);
        });
    }
  }, [response]);

  const validateEmail = email => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    return re.test(email);
  };

  const validatePassword = password => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))/;
    return re.test(password);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text />
        <Text />
        <Text />

        <Text style={styles.titleCellPhone}>Bienvenid@ a CellPhone </Text>
        <Text>Servicio de reparacion de celulares...</Text>

        <Text />
        <Text />
        <Text />
        <Text />
        <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
          <Image
            source={require('../../assets/logoPrincipal.png')}
            style={styles.ImageHome}
          />
        </TouchableOpacity>

        <Text />

        <View style={styles.formContainer}>
          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setInputEmail}
              placeholder="Ingresar email:     example@gmail.com"
              placeholderTextColor="#000"
              style={styles.textInput}
              value={inputEmail}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setInputPassword}
              placeholderTextColor="#000"
              style={styles.textInput}
              textContentType="password"
              secureTextEntry
              placeholder="Ingresar Contraseña"
              value={inputPassword}
            />
          </View>

          <View style={styles.buttonSubmitContainer}>
            <TouchableOpacity
              onPress={() => {
                if (!validateEmail(inputEmail)) {
                  Alert.alert(
                    'Error',
                    'Debes ingresar email valido example@gmail.com',
                  );
                } else if (!validatePassword(inputPassword)) {
                  Alert.alert('Error', 'Debes ingresar una password valida');
                } else {
                  setDataAuth({
                    ...DataAuth,
                    email: inputEmail,
                    password: inputPassword,
                  });
                }
              }}>
              <View style={styles.buttonSubmit}>
                <Text style={styles.buttonTitle}>Ingresar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (!validateEmail(inputEmail)) {
                  Alert.alert(
                    'Error',
                    'Debes ingresar email valido example@gmail.com',
                  );
                } else if (!validatePassword(inputPassword)) {
                  Alert.alert('Error', 'Debes ingresar una password valida');
                } else {
                  setDataAuth({
                    ...DataAuth,
                    email: inputEmail,
                    password: inputPassword,
                  });
                }
              }}>
              <View style={styles.buttonRegister}>
                <Text style={[styles.buttonTitle, {color: '#000'}]}>
                  Registrar
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.separator} />
			<TouchableOpacity onPress={() => {
            promptAsync();
         	 }}>

            <Image
              source={require('../../assets/continuarConGoogle.png')}
              style={styles.btnGoogle}
              resizeMode="contain"
            />
			</TouchableOpacity>
          </View>

          {/** Dar estilo en uno al lado del otro Ingresar y Registrar*/}
        </View>

        <TouchableOpacity
          //disabled={!request}
          activeOpacity={0.5}
          onPress={() => {
            //promptAsync();
          }}></TouchableOpacity>

        <Text />
        <Text />
        <Text />
        <Text />
        <Text />

        
        <Text>Daisuke Miyashiro</Text>
       
      </View>
    </ScrollView>
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
    color: '#000',
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
  buttonRegister: {
    alignItems: 'center',
    borderColor: 'rgb(58, 58, 60)',
    borderWidth: 1,
    marginTop: 20,
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
  btnGoogle: {
    width: '100%',
    height: 70,
    borderRadius: 22,
  },
  separator: {
    width: '100%',
    marginTop: 10,
    marginBottom: 5,
    height: 1,
    backgroundColor: 'rgb(58, 58, 60)',
  },
});
