import React, { useState } from 'react'
import { 
  View, 
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { styles } from './style';
import ItemList from '../../components/ItemList';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [items, setItems] = useState([]);

  const saveItemToDevice = async () => {

  }

  const getItemsFromDevice = async () => {

  }

  const addItem = () => {

  }

  const markItemBought = itemId => {

  }

  const unmarkItemBought = itemId => {

  }
  
  const removeItem = itemId => {

  }

  const removeAll = () => {
    Alert.alert("Limpar Lista?", 
    "Confirmar a exclusão de todos os produtos da sua lista",
    [{
      text: 'Sim',
      onPress: () => { setItems([]) }
    }, {
      text: "Cancelar",
      style: "cancel",
    }]
    )
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode='repeat'
        style={{ flex: 1, justifyContent: 'flex-start'}}>

        <View style={styles.header}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <View>
            <Ionicons name="trash" size={36} color="#fff" onPress={removeAll} />
          </View>
        </View>

        {/* Lista de Produtos */}
        <FlatList 
          contentContainerStyle={{ padding: 20, paddingBottom: 100, color: '#fff' }}
          data={items}
          renderItem={({item}) =>
            <ListItem item={item}
            markItem ={markItemBought}
            unmarkItem={unmarkItemBought}
            removeItem={removeItem}
            />
          }
        />

        <View style={styles.footer}>
          <View style={styles.TextContainer}>
           <TextInput
           color="#fff"
           fontSize={18}
           placeholderTextColor="#fff"
           placeholder="Digite o nome do produto..."
           value={textInput}
           onChange={(text) => setTextInput(text)}
           />
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={addItem}>
           <Ionicons name="add" size={36} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}