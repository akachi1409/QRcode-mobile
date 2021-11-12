import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Fonts from '../theme/Fonts'
import Colors from '../theme/Colors'

class PageLabel extends Component {
    render() {
        const { text } = this.props;
        return (
            <Text style={[this.props.style, styles.labelText]}>{text}</Text>
        );
    }
}

export default PageLabel;

const styles = StyleSheet.create({
    labelText: {
        // fontFamily: Fonts.bold,
        color: Colors.orangeColor,
        fontSize: 26,
        letterSpacing: -0.7,
    }
});