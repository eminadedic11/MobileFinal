// TodoListItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TodoListItemProps {
  title: string;
  description: string;
  onPress: () => void;
}

const TodoListItem = ({ title, description, onPress }: TodoListItemProps) => {
  return (
    <TouchableOpacity style={styles.todoItem} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={3}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: '#555',
  },
});

export default TodoListItem;
