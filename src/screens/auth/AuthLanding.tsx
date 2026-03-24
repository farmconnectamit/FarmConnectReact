import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { isAuthenticated } from '../../utils/auth';

export default function AuthLanding({ navigation }: any) {

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const authenticated = await isAuthenticated();
      if (authenticated) {
        // User is already logged in, navigate to Home after 2 seconds
        setTimeout(() => {
          navigation.navigate('Home');
        }, 2000);
        return;
      }
    } catch (error) {
      console.error('Error checking auth:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo/Illustration */}
        <View style={styles.heroSection}>
          <View style={styles.iconContainer}>
            <Icon name="leaf" size={80} color="#4baf31" />
          </View>
          <Text style={styles.title}>Farm Connect</Text>
          <Text style={styles.subtitle}>
            Fresh produce from local farms, delivered to your door
          </Text>
        </View>

        {/* Image */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500',
          }}
          style={styles.heroImage}
        />

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.primaryButtonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.secondaryButtonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.farmerButton}
            onPress={() => navigation.navigate('FarmerSignup')}
          >
            <Icon name="people" size={20} color="#4baf31" />
            <Text style={styles.farmerButtonText}>I'm a Farmer</Text>
          </TouchableOpacity>
        </View>

        {/* Skip */}
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.skipText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  heroSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  iconContainer: {
    width: 140,
    height: 140,
    backgroundColor: '#f0fdf4',
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#1f2937',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginVertical: 24,
  },
  actionsContainer: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#4baf31',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4baf31',
  },
  secondaryButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#4baf31',
  },
  farmerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#f0fdf4',
    paddingVertical: 16,
    borderRadius: 12,
  },
  farmerButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#4baf31',
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  skipText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6b7280',
  },
});
