import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

export default function FarmerSignup({ navigation }: any) {
  const [step, setStep] = useState(1);
  
  // Step 1: Personal Info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  
  // Step 2: Farm Details
  const [farmName, setFarmName] = useState('');
  const [farmType, setFarmType] = useState('');
  const [farmSize, setFarmSize] = useState('');
  
  // Step 3: Address
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const steps = [
    { number: 1, title: 'Personal Info', icon: 'person-outline' },
    { number: 2, title: 'Farm Details', icon: 'leaf-outline' },
    { number: 3, title: 'Address', icon: 'location-outline' },
    { number: 4, title: 'Verification', icon: 'checkmark-circle-outline' },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigation.navigate('FarmerDashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Icon name="chevron-back" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Farmer Registration</Text>
          <Text style={styles.headerSubtitle}>Step {step} of 4</Text>
        </View>
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        {steps.map((s, index) => (
          <View key={s.number} style={styles.progressStep}>
            <View
              style={[
                styles.progressCircle,
                step >= s.number && styles.progressCircleActive,
                step > s.number && styles.progressCircleComplete,
              ]}
            >
              {step > s.number ? (
                <Icon name="checkmark" size={16} color="#fff" />
              ) : (
                <Text
                  style={[
                    styles.progressNumber,
                    step >= s.number && styles.progressNumberActive,
                  ]}
                >
                  {s.number}
                </Text>
              )}
            </View>
            <Text style={styles.progressLabel}>{s.title}</Text>
            {index < steps.length - 1 && (
              <View
                style={[
                  styles.progressLine,
                  step > s.number && styles.progressLineActive,
                ]}
              />
            )}
          </View>
        ))}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <View style={styles.stepContainer}>
              <View style={styles.stepHeader}>
                <Icon name="person" size={32} color="#4baf31" />
                <Text style={styles.stepTitle}>Personal Information</Text>
                <Text style={styles.stepDescription}>
                  Let's start with your basic information
                </Text>
              </View>

              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Full Name *</Text>
                  <View style={styles.inputContainer}>
                    <Icon name="person-outline" size={20} color="#9ca3af" />
                    <TextInput
                      style={styles.input}
                      placeholder="John Doe"
                      value={name}
                      onChangeText={setName}
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email Address *</Text>
                  <View style={styles.inputContainer}>
                    <Icon name="mail-outline" size={20} color="#9ca3af" />
                    <TextInput
                      style={styles.input}
                      placeholder="farmer@example.com"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Phone Number *</Text>
                  <View style={styles.inputContainer}>
                    <Icon name="call-outline" size={20} color="#9ca3af" />
                    <TextInput
                      style={styles.input}
                      placeholder="+1 (555) 123-4567"
                      value={phone}
                      onChangeText={setPhone}
                      keyboardType="phone-pad"
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Password *</Text>
                  <View style={styles.inputContainer}>
                    <Icon name="lock-closed-outline" size={20} color="#9ca3af" />
                    <TextInput
                      style={styles.input}
                      placeholder="Create a strong password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>
              </View>
            </View>
          )}

          {/* Step 2: Farm Details */}
          {step === 2 && (
            <View style={styles.stepContainer}>
              <View style={styles.stepHeader}>
                <Icon name="leaf" size={32} color="#4baf31" />
                <Text style={styles.stepTitle}>Farm Details</Text>
                <Text style={styles.stepDescription}>
                  Tell us about your farm
                </Text>
              </View>

              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Farm Name *</Text>
                  <View style={styles.inputContainer}>
                    <Icon name="business-outline" size={20} color="#9ca3af" />
                    <TextInput
                      style={styles.input}
                      placeholder="Green Valley Farm"
                      value={farmName}
                      onChangeText={setFarmName}
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Farm Type *</Text>
                  <View style={styles.inputContainer}>
                    <Icon name="list-outline" size={20} color="#9ca3af" />
                    <TextInput
                      style={styles.input}
                      placeholder="Vegetables, Dairy, Poultry, etc."
                      value={farmType}
                      onChangeText={setFarmType}
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Farm Size (acres) *</Text>
                  <View style={styles.inputContainer}>
                    <Icon name="resize-outline" size={20} color="#9ca3af" />
                    <TextInput
                      style={styles.input}
                      placeholder="50"
                      value={farmSize}
                      onChangeText={setFarmSize}
                      keyboardType="numeric"
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>

                <View style={styles.infoBox}>
                  <Icon name="information-circle" size={20} color="#4baf31" />
                  <Text style={styles.infoText}>
                    Provide accurate information to help customers find your farm
                  </Text>
                </View>
              </View>
            </View>
          )}

          {/* Step 3: Address */}
          {step === 3 && (
            <View style={styles.stepContainer}>
              <View style={styles.stepHeader}>
                <Icon name="location" size={32} color="#4baf31" />
                <Text style={styles.stepTitle}>Farm Address</Text>
                <Text style={styles.stepDescription}>
                  Where is your farm located?
                </Text>
              </View>

              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Street Address *</Text>
                  <View style={styles.inputContainer}>
                    <Icon name="home-outline" size={20} color="#9ca3af" />
                    <TextInput
                      style={styles.input}
                      placeholder="123 Farm Road"
                      value={address}
                      onChangeText={setAddress}
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>City *</Text>
                  <View style={styles.inputContainer}>
                    <Icon name="location-outline" size={20} color="#9ca3af" />
                    <TextInput
                      style={styles.input}
                      placeholder="Springfield"
                      value={city}
                      onChangeText={setCity}
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={[styles.inputGroup, styles.halfWidth]}>
                    <Text style={styles.label}>State *</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="CA"
                        value={state}
                        onChangeText={setState}
                        autoCapitalize="characters"
                        maxLength={2}
                        placeholderTextColor="#9ca3af"
                      />
                    </View>
                  </View>

                  <View style={[styles.inputGroup, styles.halfWidth]}>
                    <Text style={styles.label}>ZIP Code *</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="12345"
                        value={zipCode}
                        onChangeText={setZipCode}
                        keyboardType="numeric"
                        maxLength={5}
                        placeholderTextColor="#9ca3af"
                      />
                    </View>
                  </View>
                </View>

                <TouchableOpacity style={styles.uploadButton}>
                  <Icon name="document-attach-outline" size={20} color="#4baf31" />
                  <Text style={styles.uploadButtonText}>
                    Upload Proof of Address
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Step 4: Verification */}
          {step === 4 && (
            <View style={styles.stepContainer}>
              <View style={styles.stepHeader}>
                <Icon name="shield-checkmark" size={32} color="#4baf31" />
                <Text style={styles.stepTitle}>Verification</Text>
                <Text style={styles.stepDescription}>
                  Upload required documents
                </Text>
              </View>

              <View style={styles.form}>
                <View style={styles.uploadCard}>
                  <Icon name="card-outline" size={32} color="#4baf31" />
                  <Text style={styles.uploadCardTitle}>Business License</Text>
                  <Text style={styles.uploadCardDescription}>
                    Upload your farm business license
                  </Text>
                  <TouchableOpacity style={styles.uploadCardButton}>
                    <Icon name="cloud-upload-outline" size={20} color="#fff" />
                    <Text style={styles.uploadCardButtonText}>Choose File</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.uploadCard}>
                  <Icon name="finger-print-outline" size={32} color="#4baf31" />
                  <Text style={styles.uploadCardTitle}>ID Verification</Text>
                  <Text style={styles.uploadCardDescription}>
                    Upload a valid government ID
                  </Text>
                  <TouchableOpacity style={styles.uploadCardButton}>
                    <Icon name="cloud-upload-outline" size={20} color="#fff" />
                    <Text style={styles.uploadCardButtonText}>Choose File</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.checkboxContainer}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>
                    I agree to the Terms of Service and Privacy Policy
                  </Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>
                    I certify that all information provided is accurate
                  </Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Navigation Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>
              {step === 4 ? 'Submit Application' : 'Continue'}
            </Text>
            <Icon name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  backButton: {
    width: 20,
    height: 20,
    backgroundColor: '#4baf31',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#020202',
  },
  headerSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8d92a3',
  },
  progressContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  progressStep: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  progressCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  progressCircleActive: {
    backgroundColor: '#4baf31',
  },
  progressCircleComplete: {
    backgroundColor: '#16a34a',
  },
  progressNumber: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#9ca3af',
  },
  progressNumberActive: {
    color: '#fff',
  },
  progressLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
  },
  progressLine: {
    position: 'absolute',
    top: 16,
    left: '50%',
    right: '-50%',
    height: 2,
    backgroundColor: '#e5e7eb',
    zIndex: -1,
  },
  progressLineActive: {
    backgroundColor: '#4baf31',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  stepContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  stepHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  stepTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1f2937',
    marginTop: 12,
  },
  stepDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 4,
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#374151',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1f2937',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfWidth: {
    flex: 1,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#f0fdf4',
    borderRadius: 8,
    padding: 12,
    gap: 12,
    alignItems: 'flex-start',
  },
  infoText: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#15803d',
    lineHeight: 18,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#f0fdf4',
    borderWidth: 2,
    borderColor: '#4baf31',
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingVertical: 16,
  },
  uploadButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#4baf31',
  },
  uploadCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  uploadCardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginTop: 12,
  },
  uploadCardDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  uploadCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#4baf31',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  uploadCardButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 4,
    marginTop: 2,
  },
  checkboxLabel: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#374151',
    lineHeight: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 16,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#4baf31',
    paddingVertical: 16,
    borderRadius: 12,
  },
  nextButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});
