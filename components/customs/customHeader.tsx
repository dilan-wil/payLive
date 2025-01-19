import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Avatar } from '@luanyata/react-native-avatar';
import UserAvatar from 'react-native-user-avatar-component';

const NotificationBell = ({ datas }: any) => {
  const notificationCount = datas?.length; // Use `datas` to determine notification count dynamically

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons name="notifications" size={25} style={styles.bellIcon} />
        {notificationCount > 0 && (
          <View style={styles.badge}>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const CustomHeader = ({ type, title }: { type: 'index' | 'page' | 'profile'; title?: string }) => {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      {type === 'index' && (
        <>
          <UserAvatar style={{ backgroundColor: "#A9C0FF" }} src='' size={50} name="Avishay Bar" />
          {/* <Image
            source={{ uri: 'https://example.com/app-logo.png' }} // Replace with actual logo URL
            style={styles.logo}
          /> */}
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>payLive</Text>

          <NotificationBell datas={[0, 2]}/>
        </>
      )}
      {type === 'page' && (
        <>
          <TouchableOpacity onPress={() => router.back()}>
            <UserAvatar style={{ backgroundColor: "#A9C0FF" }} size={50} name="Avishay Bar" />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>{title}</Text>
          <TouchableOpacity>
            <NotificationBell />
          </TouchableOpacity>
        </>
      )}
      {type === 'profile' && (
        <>
          <TouchableOpacity>
            <NotificationBell />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.container}>
              <TouchableOpacity>
                <Ionicons name="settings-outline" size={24} color="#613EEA" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // borderBottomStartRadius: 30,
    // borderBottomEndRadius: 30,
    marginTop: StatusBar.currentHeight
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  icon: {
    fontSize: 24,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    position: 'relative',
    backgroundColor: "#A9C0FF",
    padding: 10,
    borderRadius: 90
  },
  bellIcon: {
    color: '#613EEA',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    display: "flex",
    borderRadius: 15,
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
