import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabBar = ({ setTab, currentTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setTab('all')} style={styles.tab}>
        <Text style={[styles.tabText, currentTab === 'all' && styles.activeTabText]}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab('active')} style={styles.tab}>
        <Text style={[styles.tabText, currentTab === 'active' && styles.activeTabText]}>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab('complete')} style={styles.tab}>
        <Text style={[styles.tabText, currentTab === 'complete' && styles.activeTabText]}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TabBar;