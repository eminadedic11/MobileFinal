import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/redux/store'; // Adjust path as needed
import HomeScreen from './src/screens/HomeScreen'; // Adjust path as needed
import DetailsScreen from './src/screens/DetailsScreen'; // Adjust path as needed
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const CustomHeader = ({ navigation, route }: any) => {
  const { name } = route;

  const handleHomePress = () => {
    navigation.navigate('Home');
  };


  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
        <Image
          style={{ width: 24, height: 24}}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Arrow_left.svg' }} 


        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHomePress}>
        <Text style={{marginLeft:-65, fontSize: 16, color: 'blue' }}>Home</Text>
      </TouchableOpacity>
      <Text style={{ marginLeft: 43, fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
    </View>
  );

};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: () => (
                <Image
                  style={{ width: 200, height: 50 }}
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/IBU_logo_reb-02-01.png' }}
                />
              ),
              headerStyle: { backgroundColor: 'white' },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={({ route, navigation }: any) => ({
              headerTitle: () => <CustomHeader navigation={navigation} route={route} />,
              headerStyle: { backgroundColor: 'white' },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
