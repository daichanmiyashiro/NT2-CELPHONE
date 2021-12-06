import React, { useEffect, useState, useContext } from "react";
import {
  ScrollView,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Button,
  ActivityIndicator,
  Row,
} from "react-native";
import { Constants } from "../../util/constants";
import styles from "../../util/styles";
import GlobalContext from "../../components/context";

export default ({ navigation }) => {
  const { DataAuth, setDataAuth } = useContext(GlobalContext);
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  let reqOptions = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${DataAuth.token}`,

  });

  const cargarReservas = () => {
    /*fetch(`${Constants.BASE_URL}/reservations/user/${DataAuth.id}`, { method: "GET", reqOptions })
      .then((response) => response.json())
      .then((data) => {
        setReservas(data)
        setLoading(false)
      })
      .catch((error) => console.error(error));*/
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${DataAuth.token}`);

    var raw = "";

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://181.46.66.115:3000/api/reservations/user/${DataAuth.id}`, requestOptions)
      .then(response => response.json())
      .then((data) => {
        setReservas(data)
        setLoading(false)
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    cargarReservas();
  }, []);
  console.log(reservas)
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style={"auto"} />

        <Text />
        <Text />
        <Text />

        <Text />

        <Button
          title="Salir"
          onPress={() => {
            setDataAuth({});
          }}
        />

        <Text />
        <Text />

        <Text> Lista: </Text>

        <Text />
        {loading &&
          <ActivityIndicator color="black" />
        }
        {
          reservas.length > 0 &&
          <FlatList
            data={reservas}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Detalle", { id: item._id })}>
                  <View style={styles.listaReserva}>
                    <Text> {item.tipoCelular} - {item.tipoReparacion}  - {item.estado}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />

        }

      </View>
    </ScrollView>
  );
};
