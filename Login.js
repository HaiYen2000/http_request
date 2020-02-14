import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Icon,
  Alert
} from "react-native";

export default function Login({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [navigate, setNavigate] = useState(null);

  const onLogin = (username, password) => {
    if (validate(username) == 0) {
        Alert.alert("Please input username !");
        return;
    }else if(validate(password) == 0) {
        Alert.alert("Please input password !");
        return;
    } else {
        async () => {
              await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                  username: username,
                  password:password
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
                .then(response => response.json())
                .then(data => {
                  Alert.alert(
                    "Tài khoản: " +
                      data.username +
                      "\n Mật khẩu: " +
                      data.password
                  );
                  navigation.navigate("Home");
                });
            }
    }
  }

  const validate = (val,) => {
    if (val == null) {
      return 0;
    }
    return 1;
  };

  return (
    <View>
      <ImageBackground
        source={require("./assets/imgBG.jpg")}
        style={styles.backgroundContainer}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/logo.png")}
            style={styles.logo}
          ></Image>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
          ></TextInput>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => onLogin(username, password)}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  logoContainer: {
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30
  },
  input: {
    height: 40,
    marginBottom: 20,
    width: 300,
    borderRadius: 25,
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25
  },
  buttonLogin: {
    height: 50,
    width: 300,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#432577"
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  searchIcon: {
    padding: 10
  }
});
