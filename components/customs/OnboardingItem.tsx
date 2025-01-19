import { StyleSheet, Text, View, Image, useWindowDimensions, FlatListProps, Button } from 'react-native'
import React from 'react' 
import { OnboardingItemProps } from '@/constants/definitions'
import { Colors } from '@/constants/Colors';
import i18n from '@/translation/i18component';
import { getLocales } from 'expo-localization';
import { useState } from 'react';

const OnboardingItem = ({ item }: { item: OnboardingItemProps }) => {
    const { width } = useWindowDimensions();
    const [locale, setLocale] = useState(getLocales()[0].languageCode ?? 'en');

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'fr' : 'en';
        i18n.locale = newLocale;
        setLocale(newLocale);
      };


    return (
        <View style={[styles.container, { width }]}>
            <Image source={require('../../assets/images/welcome.png')} style={[styles.image, {width, resizeMode: 'contain'}]} />

            <View style={{flex: 0.3}}>
                 <Text style={styles.title}>{i18n.t(item.title)}</Text>
                 <Text style={styles.description}>{item.description}</Text>
            </View>

        </View>
    )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 0.7,
        justifyContent: "center"
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: Colors.light.third,
        textAlign: "center"
    },
    description: {
        fontWeight: '300',
        color: Colors.light.text,
        textAlign: "center",
        paddingHorizontal: 64
    }
})