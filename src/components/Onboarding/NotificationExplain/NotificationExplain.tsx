import React, { useEffect, useRef, useState } from "react";
import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "~constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: colors.background.white, paddingHorizontal: 20, paddingTop: 20,
  },
});

const fadeTime = 500;

function NotificationExplain({ navigation }: { navigation: any }) {
  const [count, setCount] = useState(0);

  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;

  const fadeAnimTranslate1 = useRef(new Animated.Value(70)).current;
  const fadeAnimTranslate2 = useRef(new Animated.Value(70)).current;
  const fadeAnimTranslate3 = useRef(new Animated.Value(70)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) fadeIn1();
        if (prevCount === 1) fadeIn2();
        if (prevCount === 2) fadeIn3();

        return prevCount + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const fadeIn1 = () => {
    console.log('fade in 1');

    Animated.timing(fadeAnimTranslate1, {
      toValue: 0, duration: fadeTime, useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim1, {
      toValue: 1, duration: fadeTime, useNativeDriver: true,
    }).start();
  };

  const fadeIn2 = () => {
    console.log('fade in 2');

    Animated.timing(fadeAnimTranslate2, {
      toValue: 0, duration: fadeTime, useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim2, {
      toValue: 1, duration: fadeTime, useNativeDriver: true,
    }).start();
  };

  const fadeIn3 = () => {
    console.log('fade in 3');

    Animated.timing(fadeAnimTranslate3, {
      toValue: 0, duration: fadeTime, useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim3, {
      toValue: 1, duration: fadeTime, useNativeDriver: true,
    }).start();
  };

  return (<ScrollView
    style={styles.container}
  >
    <Text
      style={{
        fontSize: 24,
        fontWeight: "500",
        color: colors.text.black,
        textAlign: "center",
        marginBottom: 40,
      }}
    >
      Carefully designed affirmation program provides <Text
      style={{
        color: colors.purple,
      }}
    >
      complex support throughout the day</Text>, considering life's natural ups and downs.
    </Text>
    <Animated.View
      style={{
        backgroundColor: "#DFA58A",
        borderRadius: 14,
        paddingHorizontal: 26,
        paddingVertical: 26,
        marginBottom: 30,
        opacity: fadeAnim1,
        transform: [
          {
            translateY: fadeAnimTranslate1,
          },
        ],
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          textAlign: "left",
          marginBottom: 10,
          color: colors.text.white,
          lineHeight: 24,
        }}
      >
        Morning
      </Text>
      <View
        style={{
          flexDirection: "row", alignItems: "center", justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: 3,
            height: 3,
            borderRadius: 3,
            backgroundColor: colors.text.white,
            marginRight: 10,
          }}
        ></View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            textAlign: "left",
            color: colors.text.white,
            lineHeight: 24,
          }}
        >
          feel positive for the day ahead;
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center", justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: 3, height: 3, borderRadius: 3, backgroundColor: colors.text.white, marginRight: 10,
          }}
        ></View>
        <Text
          style={{
            fontSize: 18, fontWeight: "400", textAlign: "left", color: colors.text.white, lineHeight: 24,
          }}
        >
          believe in your powers;
        </Text>
      </View>
    </Animated.View>
    <Animated.View
      style={{
        backgroundColor: "#CAAAD8",
        borderRadius: 14,
        paddingHorizontal: 26,
        paddingVertical: 26,
        marginBottom: 30,
        opacity: fadeAnim2,
        transform: [
          {
            translateY: fadeAnimTranslate2,
          },
        ],
      }}
    >
      <Text
        style={{
          fontSize: 20, fontWeight: "500", textAlign: "left", marginBottom: 10, color: colors.text.white, lineHeight: 24,
        }}
      >
        Morning
      </Text>
      <View
        style={{
          flexDirection: "row", alignItems: "center", justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: 3, height: 3, borderRadius: 3, backgroundColor: colors.text.white, marginRight: 10,
          }}
        ></View>
        <Text
          style={{
            fontSize: 18, fontWeight: "400", textAlign: "left", color: colors.text.white, lineHeight: 24,
          }}
        >
          feel positive for the day ahead;
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row", alignItems: "center", justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: 3, height: 3, borderRadius: 3, backgroundColor: colors.text.white, marginRight: 10,
          }}
        ></View>
        <Text
          style={{
            fontSize: 18, fontWeight: "400", textAlign: "left", color: colors.text.white, lineHeight: 24,
          }}
        >
          believe in your powers;
        </Text>
      </View>
    </Animated.View>
    <Animated.View
      style={{
        backgroundColor: "#6DB2BC",
        borderRadius: 14,
        paddingHorizontal: 26,
        paddingVertical: 26,
        marginBottom: 30,
        opacity: fadeAnim3,
        transform: [
          {
            translateY: fadeAnimTranslate3,
          },
        ],
      }}
    >
      <Text
        style={{
          fontSize: 20, fontWeight: "500", textAlign: "left", marginBottom: 10, color: colors.text.white, lineHeight: 24,
        }}
      >
        Morning
      </Text>
      <View
        style={{
          flexDirection: "row", alignItems: "center", justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: 3, height: 3, borderRadius: 3, backgroundColor: colors.text.white, marginRight: 10,
          }}
        ></View>
        <Text
          style={{
            fontSize: 18, fontWeight: "400", textAlign: "left", color: colors.text.white, lineHeight: 24,
          }}
        >
          feel positive for the day ahead;
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row", alignItems: "center", justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: 3, height: 3, borderRadius: 3, backgroundColor: colors.text.white, marginRight: 10,
          }}
        ></View>
        <Text
          style={{
            fontSize: 18, fontWeight: "400", textAlign: "left", color: colors.text.white, lineHeight: 24,
          }}
        >
          believe in your powers;
        </Text>
      </View>
    </Animated.View>
  </ScrollView>
  );
}

export default NotificationExplain;
