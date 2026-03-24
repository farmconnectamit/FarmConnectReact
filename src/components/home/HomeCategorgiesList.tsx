import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Category {
  id?: string;
  name: string;
}

interface HomeCategorgiesListProps {
  categories: string[];
  selectedCategory?: string | null;
  onCategorySelect?: (category: string | null) => void;
}

const HomeCategorgiesList: React.FC<HomeCategorgiesListProps> = ({
  categories,
  selectedCategory = null,
  onCategorySelect
}) => {
  const [selected, setSelected] = useState<string | null>(selectedCategory);

  const handlePress = (category: string) => {
    const newSelected = selected === category ? null : category;
    setSelected(newSelected);
    if (onCategorySelect) {
      onCategorySelect(newSelected);
    }
  };

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.categoryButton,
            selected === category && styles.categoryButtonActive
          ]}
          onPress={() => handlePress(category)}
        >
          <Text
            style={[
              styles.categoryText,
              selected === category && styles.categoryTextActive
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex:0,
    flexWrap: 'wrap',
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius:4,
  },
  categoryButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  categoryButtonActive: {
    backgroundColor: '#007AFF',
    borderWidth: 0,
  },
  categoryText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#fff',
  },
});

export default HomeCategorgiesList;