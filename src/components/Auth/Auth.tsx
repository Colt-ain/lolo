import React from "react";
import { Image, ImageBackground, Text, useColorScheme, View } from "react-native";
import AppButton from "~components/@common/AppButton";
import { setIsAuth } from "~slices/auth";
import { useAppDispatch, useAppSelector } from "~store/store";
import { getAuth } from "~store/selectors";
import { ImageResizeModeStatic } from "react-native/Libraries/Image/ImageResizeMode";
import { colors } from "~constants/colors";
import Onboarding from "~components/Onboarding/Onboarding";

const Auth = () => {
	return (
		<Onboarding/>
	);
};

export default Auth;
