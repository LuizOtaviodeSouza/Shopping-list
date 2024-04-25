import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View stykes={styles.containerImage}>
        <Image 
          source={require('../assets/Rocky.jpg')} 
          style={styles.logo}
        />
      </View>

      <Text>Welcome!</Text>
      <Link href={"/home"}>
        <Text>Acessar</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerImage: {
    flex: 2,
    justifyContent:'center',
    alignItems:"center",
  },
  logo:{
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: "cover",
  }
});
