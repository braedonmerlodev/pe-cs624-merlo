import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

type Course = {
  code: string;
  title: string;
  credits: number;
};

export const CourseList: React.FC = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');
  const [savedFavoriteCourse, setSavedFavoriteCourse] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveFavorite = () => {
    setSavedFavoriteCourse(favoriteCourse);
    setIsEditing(false);
  };

  // Core courses data
  const coreCourses: Course[] = [
    { code: 'CY 500', title: 'Cybersecurity Overview', credits: 3 },
    { code: 'CY 505', title: 'Systems Security', credits: 3 },
    { code: 'CY 510', title: 'Human and Organizational Security', credits: 3 },
    { code: 'CY 520', title: 'Ethical, Legal, and Societal Security', credits: 3 },
    { code: 'CY 525', title: 'Network and Wireless Security', credits: 3 },
    { code: 'CY 545', title: 'Data Privacy and Security', credits: 3 },
    { code: 'CY 609', title: 'Software Security', credits: 3 },
    { code: 'CY 628', title: 'Components Integration Security', credits: 3 },
  ];

  // Depth of Study courses data - Cyber Defense
  const depthOfStudyCourses: Course[] = [
    { code: 'CY 605', title: 'Cybersecurity Auditing', credits: 3 },
    { code: 'CY 640', title: 'Software Reverse Engineering', credits: 3 },
  ];

  // Elective courses data
  const electiveCourses: Course[] = [
    { code: 'CS 624', title: 'Full-Stack Development - Mobile App', credits: 3 },
    { code: 'CS 628', title: 'Full-Stack Development - Web App', credits: 3 },
  ];

  // Capstone course data
  const capstoneCourse: Course = { code: 'CY 665', title: 'Cybersecurity Capstone', credits: 3 };

  // Calculate total program credits
  const totalCredits = 
    coreCourses.reduce((sum, course) => sum + course.credits, 0) +
    depthOfStudyCourses.reduce((sum, course) => sum + course.credits, 0) +
    electiveCourses.reduce((sum, course) => sum + course.credits, 0) +
    capstoneCourse.credits;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('@/assets/images/icon.png')}
          style={styles.programIcon}
        />
        <ThemedText type="title" style={styles.profileTitle}> MSCY Cybersecurity Graduate Student</ThemedText>
        <ThemedText style={styles.totalCredits}>Total Required Credits: (39-59 Credits)</ThemedText>
      </View>

      <ThemedView style={styles.favoriteSection}>
        <ThemedText type="subtitle">My Favorite Course</ThemedText>
        
        {isEditing ? (
          <View style={styles.favoriteInputContainer}>
            <TextInput
              style={styles.favoriteInput}
              value={favoriteCourse}
              onChangeText={setFavoriteCourse}
              placeholder="Enter your favorite course"
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveFavorite}>
              <ThemedText style={styles.saveButtonText}>Save</ThemedText>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.savedFavoriteContainer}>
            <ThemedText style={styles.savedFavoriteText}>
              {savedFavoriteCourse ? savedFavoriteCourse : 'No favorite course selected yet'}
            </ThemedText>
            <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
              <ThemedText style={styles.editButtonText}>Edit</ThemedText>
            </TouchableOpacity>
          </View>
        )}
      </ThemedView>

      <ThemedView style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <ThemedText type="title" style={styles.sectionTitle}>Core Requirements</ThemedText>
        </View>
        <ThemedText style={styles.sectionSubtitle}>Core Requirements (24 Credits)</ThemedText>
        
        <View style={styles.courseList}>
          {coreCourses.map((course, index) => (
            <ThemedView key={index} style={styles.courseItem}>
              <View style={styles.courseHeader}>
                <ThemedText type="defaultSemiBold" style={styles.courseCode}>{course.code}</ThemedText>
                <ThemedText style={styles.courseCredits}>{course.credits} Credits</ThemedText>
              </View>
              <ThemedText style={styles.courseTitle}>{course.title}</ThemedText>
            </ThemedView>
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <ThemedText type="title" style={styles.sectionTitle}>Depth of Study</ThemedText>
        </View>
        <ThemedText style={styles.sectionSubtitle}>Depth of Study (6 Credits)</ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.specializationTitle}>Cyber Defense</ThemedText>
        
        <View style={styles.courseList}>
          {depthOfStudyCourses.map((course, index) => (
            <ThemedView key={index} style={styles.courseItem}>
              <View style={styles.courseHeader}>
                <ThemedText type="defaultSemiBold" style={styles.courseCode}>{course.code}</ThemedText>
                <ThemedText style={styles.courseCredits}>{course.credits} Credits</ThemedText>
              </View>
              <ThemedText style={styles.courseTitle}>{course.title}</ThemedText>
            </ThemedView>
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <ThemedText type="title" style={styles.sectionTitle}>Electives</ThemedText>
        </View>
        <ThemedText style={styles.sectionSubtitle}>Elective Courses (6 Credits)</ThemedText>
        
        <View style={styles.courseList}>
          {electiveCourses.map((course, index) => (
            <ThemedView key={index} style={[styles.courseItem, styles.electiveCourseItem]}>
              <View style={styles.courseHeader}>
                <ThemedText type="defaultSemiBold" style={styles.courseCode}>{course.code}</ThemedText>
                <ThemedText style={styles.courseCredits}>{course.credits} Credits</ThemedText>
              </View>
              <ThemedText style={styles.courseTitle}>{course.title}</ThemedText>
            </ThemedView>
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <ThemedText type="title" style={styles.sectionTitle}>Capstone</ThemedText>
        </View>
        <ThemedText style={styles.sectionSubtitle}>Capstone (3 Credits)</ThemedText>
        
        <View style={styles.courseList}>
          <ThemedView style={[styles.courseItem, styles.capstoneCourseItem]}>
            <View style={styles.courseHeader}>
              <ThemedText type="defaultSemiBold" style={styles.courseCode}>{capstoneCourse.code}</ThemedText>
              <ThemedText style={styles.courseCredits}>{capstoneCourse.credits} Credits</ThemedText>
            </View>
            <ThemedText style={styles.courseTitle}>{capstoneCourse.title}</ThemedText>
          </ThemedView>
        </View>
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 30,
    alignItems: 'center',
  },
  programIcon: {
    width: 120,
    height: 120,
    marginBottom: 15,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileTitle: {
    marginBottom: 10,
    textAlign: 'center',
  },
  totalCredits: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  favoriteSection: {
    margin: 20,
    padding: 16,
    borderRadius: 10,
    marginTop: 0,
  },
  favoriteInputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  favoriteInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  savedFavoriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  savedFavoriteText: {
    flex: 1,
    fontSize: 16,
    fontStyle: 'italic',
  },
  editButton: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#333',
  },
  section: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionTitleContainer: {
    backgroundColor: '#FFEB3B', // Yellow color for highlighting
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  sectionTitle: {
    marginBottom: 0,
    color: '#000', // Black text for better contrast on yellow
  },
  sectionSubtitle: {
    marginBottom: 20,
    fontSize: 16,
    marginTop: 12,
  },
  specializationTitle: {
    marginBottom: 15,
    fontSize: 18,
    color: '#0a7ea4',
  },
  courseList: {
    gap: 16,
  },
  courseItem: {
    padding: 16,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  electiveCourseItem: {
    borderLeftWidth: 3,
    borderLeftColor: '#4CAF50',
  },
  capstoneCourseItem: {
    borderLeftWidth: 3,
    borderLeftColor: '#9C27B0', // Purple color for capstone
    backgroundColor: 'rgba(156, 39, 176, 0.05)', // Very light purple background
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseCode: {
    fontSize: 16,
  },
  courseTitle: {
    fontSize: 15,
  },
  courseCredits: {
    fontSize: 14,
    opacity: 0.7,
  },
}); 