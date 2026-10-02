import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.card}>
          <Image
            source={require('@/assets/images/unnamed.jpg')}
            style={styles.image}
          />

          <ThemedText type="title" style={styles.name}>
            Desarrollo de Interfaces
          </ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  safeArea: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  card: {
    width: '100%',
    height: 230,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },

  image: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },

  name: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});