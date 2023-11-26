module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		['module-resolver', {
			root: ['.'],
			alias: {
				'^~(.+)': './src/\\1',
			},
		}],
		['module:react-native-dotenv', {
			'envName': 'APP_ENV',
			'moduleName': '@env',
			'safe': true,
			'allowUndefined': false,
		}],
	],
};
