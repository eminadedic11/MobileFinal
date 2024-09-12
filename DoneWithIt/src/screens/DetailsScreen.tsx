import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addTodo, updateTodo, deleteTodo } from '../redux/todoSlice';
import { RootStackParams } from '../navigation/RootStackNavigator';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type DetailsScreenRouteProp = RouteProp<RootStackParams, 'Details'>;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation<NavigationProp<RootStackParams, 'Details'>>();
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const { id } = route.params; // Now TypeScript knows id can be string | undefined
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      const todo = todos.find((item) => item.id === id);
      if (todo) {
        setTitle(todo.title);
        setDescription(todo.description);
      }
    }
  }, [id, todos]);

  const handleSave = () => {
    if (id) {
      dispatch(updateTodo({
        id,
        title,
        description,
      }));
    } else {
      dispatch(addTodo({
        id: Date.now().toString(),
        title,
        description,
      }));
    }
    navigation.navigate('Home');
  };

  const handleDelete = () => {
    if (id) {
      Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
        { text: 'Cancel' },
        { text: 'Delete', onPress: () => {
          dispatch(deleteTodo(id));
          navigation.navigate('Home');
        }},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        Title
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
      />
      <Text>
        Description
      </Text>
      <TextInput
        style={styles.input2}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>{id ? 'Save Changes' : 'Save'}</Text>
      </TouchableOpacity>
      {id && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center', 
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  input2: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    paddingTop: 8,
  },
  saveButton: {
    backgroundColor: '#f5f5f5', // Dark blue button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#01396d',
    fontWeight: 'bold',
    fontSize: 20,
  },
  deleteButton: {
    backgroundColor: '#f5f5f5', // Red color for delete
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 2,
  },
  deleteButtonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default DetailsScreen;

