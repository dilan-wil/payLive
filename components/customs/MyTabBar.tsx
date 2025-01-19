import { View, Platform, Dimensions } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/commonjs/src/types';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const icons: Record<string, (props: any) => JSX.Element> = {
    home: (props) => <AntDesign name="home" size={24} color={Colors.light.text} {...props} />,
    products: (props) => <AntDesign name="shoppingcart" size={24} color={Colors.light.text} {...props} />,
    lives: (props) => <MaterialIcons name="live-tv" size={24} color={Colors.light.text} {...props} />,
    transactions: (props) => <MaterialIcons name="history" size={24} color={Colors.light.text} {...props} />,
    profile: (props) => <AntDesign name="user" size={24} color={Colors.light.text} {...props} />,
  };

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        console.log(route.name)
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            onHoverIn={() => setHoveredIndex(index)}
            onHoverOut={() => setHoveredIndex(null)}
            style={[
              styles.tabItemContainer,
              hoveredIndex === index && styles.hoveredTabItem,
            ]}
          >
            {route.name === "lives"
              ?
              <View style={styles.whiteWrapper}>
                <View style={styles.livesContainer}>
                  <View style={styles.livesIconContainer}>
                    {icons[route.name]({
                      color: isFocused ? Colors.light.text : "white",
                    })}
                  </View>
                </View>
              </View>
              :
              <>
                {
                  (icons[route.name] || (() => <AntDesign name="question" size={30} color={Colors.light.text} />))({
                    color: isFocused ? Colors.light.primary : Colors.light.text,
                  })
                }
                <Text style={{ color: isFocused ? Colors.light.primary : Colors.light.text, fontSize: 11 }}>
                  {typeof label === 'function'
                    ? label({ focused: isFocused, color: Colors.light.primary, position: 'below-icon', children: '' })
                    : label}
                </Text>
              </>
            }
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    width: screenWidth - 30,
    bottom: 30,
    display: "flex",
    flexDirection: 'row',
    backgroundColor: "white",
    borderColor: "#A9C0FF",  // Set the border color to black
    borderWidth: 1,  // Define the border width    justifyContent: "space-between",
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 15,
    borderRadius: 90,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 }, // Make the shadow offset equal in all directions
    shadowOpacity: 0.3,
    shadowRadius: 10, // Increase the shadow radius for a more prominent shadow
    elevation: 14, // For Android shadow
  },
  tabItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    zIndex: 100000
  },
  hoveredTabItem: {
    backgroundColor: 'white',
  },
  whiteWrapper: {
    position: "absolute",
    backgroundColor: "white",
    padding: 7,
    borderRadius: 90,
    bottom: -30,
    borderWidth: 1,
    borderColor: "#A9C0FF"
  },
  livesContainer: {
    backgroundColor: "#A9C0FF",
    borderRadius: 90,
    padding: 10
  },
  livesIconContainer: {
    height: 50,
    backgroundColor: "#613EEA",
    borderRadius: 90,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})