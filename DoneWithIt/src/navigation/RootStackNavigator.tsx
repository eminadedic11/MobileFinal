import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type RootStackParams = {
  Home: undefined; // No parameters for Home screen
  Details: { id?: string }; // Optional id parameter for Details screen
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;


