import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Fonts from '../theme/Fonts'

export default class Label extends React.Component {
    render() {
      return (
             <Text style={[this.props.style, styles.textLabel]}>{this.props.title}</Text>
        );
    }
}

const styles = StyleSheet.create({
	textLabel: {
		// fontFamily: Fonts.regular,
		fontSize: 15,
		color: 'black',
	}
});