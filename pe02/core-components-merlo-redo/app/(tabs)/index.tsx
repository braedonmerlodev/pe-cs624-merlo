import { Image, StyleSheet, Platform, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [courseText, setCourseText] = useState('');
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'transparent', dark: 'transparent' }}
      headerImage={
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedText>Which course did you like?</ThemedText>
        <ThemedView>
          <TextInput
            value={courseText}
            onChangeText={setCourseText}
            style={styles.courseTextStyles}
            placeholder='ex. CS624'
          />
        </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Core Requirements </ThemedText>
        <ThemedText type="title">(24 Credits) </ThemedText>
      </ThemedView>
      <ThemedText style={styles.courseItem}>CS 504 Software Engineering</ThemedText>
      <ThemedText style={styles.courseItem}>CS 506 Programming for Computing</ThemedText>
      <ThemedText style={styles.courseItem}>CS 519 Cloud Computing Overview</ThemedText>
      <ThemedText style={styles.courseItem}>CS 533 Computer Architecture</ThemedText>
      <ThemedText style={styles.courseItem}>CS 547 Secure Systems and Programs</ThemedText>
      <ThemedText style={styles.courseItem}>CS 622 Discrete Math and Algorithsm for Computing</ThemedText>
      <ThemedText style={styles.courseItem}>DS 510 Artificial Intelligence for Data Science</ThemedText>
      <ThemedText style={styles.courseItem}>DS 620 Machine Learnng & Deep Learning</ThemedText>
      <ThemedText></ThemedText>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Depth of study </ThemedText>
        <ThemedText type="title">(6 Credits) </ThemedText>
      </ThemedView>
      <ThemedText style={styles.courseItem}>CS 624 Full-Stack Development - Mobile App</ThemedText>
      <ThemedText style={styles.courseItem}>CA 628 Full-Stack Development - Web App</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'yellow',
    alignSelf: 'flex-start',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'contain',
  },
  courseTextStyles: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    maxWidth: 400,
    alignSelf: 'flex-start',
    width: '100%',
  },
  courseItem: {
    marginVertical: 0,
    paddingVertical: 0,
    lineHeight: 10,
    height: 10,
  }
  });
