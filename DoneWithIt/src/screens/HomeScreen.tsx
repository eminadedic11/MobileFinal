import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TodoListItem from '../components/ToDoListItem'; // Adjust import path
import { RootStackParams } from '../navigation/RootStackNavigator'; // Adjust import path

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams, 'Home'>>(); 
  const todos = useSelector((state: RootState) => state.todos); 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoListItem
              title={item.title}
              description={item.description}
              onPress={() => navigation.navigate('Details', { id: item.id })}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Text style={styles.emptyText}>No Items</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Details', { id: undefined })}
      >
        <Ionicons name="add" size={36} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16, // Adding padding to match the screenshot
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#01396d', // Dark blue color
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Add shadow for depth
  },
});

export default HomeScreen;
