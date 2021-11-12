import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Fonts from '../theme/Fonts'
import Colors from "../theme/Colors"

export default class Button extends React.Component {
    render() {
      return (
             <TouchableOpacity style={[styles.buttonContainer]} onPress={() => this.props.onPress()}>
                 <Text style={[
                  this.props.style,
                     styles.textLabel, 
                     this.props.underline ? styles.underlineText : '',
                     this.props.bold ? styles.boldText : '',
                     ]}>{this.props.title}</Text>
             </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'center',
	},

	textLabel: {
		// fontFamily: Fonts.regular,
		fontSize: 15,
	},

	underlineText: {
		textDecorationLine: 'underline',
	},

	boldText: {
		fontWeight: 'bold',
	}
});