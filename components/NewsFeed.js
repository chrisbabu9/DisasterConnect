import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const dummyNews = [
  { id: '1', title: 'Rescue Efforts Underway', content: 'Teams are working tirelessly...' },
  { id: '2', title: 'Emergency Supplies Arriving', content: 'Food and water are being distributed...' },
];

const NewsFeed = () => {
  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
      <Button title="Show Comments" onPress={() => alert('Comments feature not implemented yet')} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disaster News Feed</Text>
      <FlatList
        data={dummyNews}
        renderItem={renderNewsItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  newsItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default NewsFeed;