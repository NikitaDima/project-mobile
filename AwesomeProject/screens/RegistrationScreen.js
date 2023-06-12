import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';
import ImageAdd from '../images/add.png';
import ImageBcg from '../images/Photo.jpg';

const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={ImageBcg}
      resizeMode="cover"
      style={styles.backGroundImage}
    >
      <View style={styles.conteiner}>
        <View style={styles.avatar}>
          <Image></Image>
          <TouchableOpacity style={styles.avatarBtn}>
            <Image source={ImageAdd} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View>
          <TextInput placeholder="Логіе"></TextInput>
          <TextInput placeholder="Адреса електронної пошти"></TextInput>
          <View>
            <TextInput placeholder="Пароль"></TextInput>
            <TouchableOpacity>
              <Text>Показати</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Вже є акаунт?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backGroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  conteiner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: 'absolute',
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  avatarBtn: {
    position: 'absolute',
    left: 107,
    top: 81,
  },
  title: {},
});

export default RegistrationScreen;

// import React, { useState } from "react";
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
// } from "react-native";

// const RegistrationScreen = () => {
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry={!showPassword}
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TouchableOpacity
//         style={styles.toggleButton}
//         onPress={togglePasswordVisibility}
//       >
//         <Text style={styles.toggleText}>
//           {showPassword ? "Скрыть" : "Показать"}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//     paddingBottom: 5,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 8,
//   },
//   toggleButton: {
//     paddingHorizontal: 10,
//   },
//   toggleText: {
//     fontSize: 14,
//     color: "#999",
//   },
// });

// export default RegistrationScreen;
