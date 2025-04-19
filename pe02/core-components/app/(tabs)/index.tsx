import { StyleSheet, View, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { CourseList } from '@/components/CourseList';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          // Note: The me2.jpeg image needs to be added to the assets/images directory
          source={require('@/assets/images/me2.jpeg')}
          style={styles.profileImage}
        />
      }>
      <CourseList />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    height: 200,
    width: 200,
    bottom: 25,
    position: 'absolute',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#fff',
    alignSelf: 'center',
  },
});
