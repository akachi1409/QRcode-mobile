import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Images from '../theme/Images';
import Fonts from '../theme/Fonts';
import RoundButton from './RoundButton'

export default class Label extends React.Component {
  	render() {
		const { title, icon, onPress } = this.props;
		var iconImage = icon ? icon : Images.sad;

    	return (
    		<View style={styles.container}>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
					<Image style={styles.sadIcon} source={iconImage}/>
    				<Text style={[this.props.style, styles.textLabel]}>{title}</Text>
				</View>
    		</View>	   		
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		top: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},

	sadIcon: {
		width: 50,
		height: 50,
		resizeMode: 'contain',
		marginBottom: 10,
		opacity: 0.5
	},

	textLabel: {
		// fontFamily: Fonts.regular,
		fontSize: 16,
		opacity: 0.5
	},
	placeImage: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
	},
});