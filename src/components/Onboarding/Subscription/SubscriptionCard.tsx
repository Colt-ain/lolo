import React from "react";
import { colors } from "~constants/colors";
import { Pressable, Text, View } from "react-native";
import TickIcon from "~components/@common/Icons/TickIcon";

function SubscriptionCard({
  onClick,
  subscription,
  isTrial,
  isActive,
}: {
  onClick: (sub: string) => void;
  subscription: {
    key: string;
    isTrial?: boolean;
    text: string;
    description: string;
  };
  isTrial?: boolean;
  isActive?: boolean;
}) {
  const handleClick = () => {
    onClick(subscription.key);
  };

  return (
    <Pressable
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: colors.background.white,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 0,
      }}
      onPress={handleClick}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          {isTrial && <Text>7 DAYS FREE TRIAL</Text>}
          <Text>$2 Monthly subscription</Text>
          <Text>Cancel any time!</Text>
        </View>

        {isActive
          ? <View
            style={{
              width: 32,
              height: 32,
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 16,
              backgroundColor: colors.purple,
              paddingLeft: 7,
            }}
          >
            <TickIcon/>
          </View>
          : <View
            style={{
              width: 32,
              height: 32,
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 16,
              borderWidth: 1,
              borderColor: colors.background.disable,
            }}
          ></View>
        }
      </View>
    </Pressable>
  );
}

export default SubscriptionCard;
