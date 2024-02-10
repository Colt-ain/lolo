import React, { ReactElement } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	useColorScheme,
	View,
} from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/store/store';

import Auth from '~components/Auth';

import { colors } from '~constants/colors';
import { withIAPContext } from 'react-native-iap';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background.white,
		fontFamily: 'Montserrat',
	},
});

function App(): ReactElement {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<View style={{
			flex: 1,
			backgroundColor: colors.background.white,
		}}>
			<Provider store={store}>
				<SafeAreaView style={{
					flex: 1,
				}}>
					<Auth/>
				</SafeAreaView>
			</Provider>
		</View>
	);
}

export default withIAPContext(App);
