import { StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import Svg, { G, Circle, Path } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Colors } from '@/constants/Colors';

const NextButton = ({ percentage, scrollTo }: { percentage: number, scrollTo: any }) => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef<Circle | null>(null);

    const animation = (toValue: any) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: false, // Required for non-layout animations
        }).start()
    }
    useEffect(() => {
        animation(percentage)
    }, [percentage]);

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }
        });
        return () => {
            progressAnimation.removeAllListeners()
        }
    }, []);

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>

                <G rotation={-90} origin={`${center}, ${center}`}>

                    <Circle
                        stroke="#E6E7E8"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        fill={"white"}
                    />
                    <Circle
                        ref={progressRef}
                        stroke={Colors.light.third}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        fill={"white"}
                        strokeWidth={strokeWidth}
                    />
                </G>
            </Svg>
            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
                <AntDesign name="arrowright" size={32} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
};

export default NextButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: Colors.light.third,
        borderRadius: 90,
        padding: 20,
    },
});
