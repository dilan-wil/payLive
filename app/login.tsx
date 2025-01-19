import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const toSignUp = async () => {
    try {
      console.log('navigating');
      router.replace('/signup');
    } catch (err) {
      console.error('Error clearing onboarding:', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.decorativeShape1} />
      <View style={styles.decorativeShape2} />

      <View style={styles.content}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#6B7280" />
        </TouchableOpacity>

        <View style={{ gap: 0 }}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Login back to your account to use our services
          </Text>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          {/* Email Input */}

          <View>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={24} color="#9CA3AF" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Password Input */}
          <View>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={24} color="#9CA3AF" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Ionicons
                  name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Remember Me and Forgot Password */}
          <View style={styles.rememberMeContainer}>
            <TouchableOpacity
              onPress={toggleRememberMe}
              style={styles.checkboxContainer}
            >
              <Ionicons
                name={rememberMe ? "checkbox" : "square-outline"}
                size={20}
                color={Colors.light.third}
              />
              <Text style={styles.checkboxLabel}>Remember Me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Alternative Login */}
          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>or login with</Text>
            <View style={styles.line} />
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialButtons}>
            <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
              <Ionicons name="logo-facebook" size={20} color="#FFFFFF" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <Ionicons name="logo-google" size={20} color="#FFFFFF" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign In Link */}
        <View style={styles.signInContainer}>
          <Text style={styles.signUpText}>
            Already have an account?{' '}
            <Text onPress={toSignUp} style={styles.signUpLink}>Sign in</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  decorativeShape1: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 200,
    height: 200,
    backgroundColor: '#613EEA',
    borderRadius: 100,
  },
  decorativeShape2: {
    position: 'absolute',
    bottom: -100,
    left: -100,
    width: 200,
    height: 200,
    backgroundColor: '#613EEA',
    borderRadius: 100,
  },
  content: {
    flex: 1,
    padding: 24,
    marginTop: 20,
  },
  backButton: {
    marginBottom: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#111827',
  },
  subtitle: {
    marginBottom: 32,
    fontSize: 18,
    color: Colors.light.text,
  },
  form: {
    gap: 16,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#111827',
    borderRadius: 25,
    paddingVertical: 15,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
  forgotPassword: {
    fontSize: 14,
    color: Colors.light.third,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: Colors.light.third,
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  separatorText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: '#6B7280',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 20,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  socialButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  signInContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  signUpText: {
    color: '#6B7280',
    fontSize: 14,
  },
  signUpLink: {
    color: Colors.light.third,
    fontWeight: '500',
  },
});
