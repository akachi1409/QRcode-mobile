import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView, Platform
} from 'react-native';

// import RNPickerSelect from 'react-native-picker-select';
// import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { GOOGLE_API_KEY } from '../constants.js'
import Images from '../theme/Images'
import Fonts from '../theme/Fonts'

class FormInput extends Component{
    constructor(){
        super();
        this.state = {
            displayPassword: false,
        }
    }

    render(){
        const{
            style,
            label,
            type,
            value,
            placeholder,
            errorMessage,
            editable,
            onRefInput,
            returnKeyType,
            onChangeText,
            onSubmitEditing,
            font
        } = this.props;

        return(
            <View style = {
                [
                    style,
                    styles.container
                ]
            }>

                <View>
                    {label && <Text style = {styles.labelText}>{label}</Text>}
                    {
                        (type ==="text")
                        ?<TextInput
                            style = {[styles.textInput, 
                                // {fontFamily: font}
                            ]}
                            editable = {editable}
                            placeholderTextColor = "#c9c9c9"
                            underlineColorAndroid = 'transparent'
                            onChangeText = {onChangeText}
                            value = {value}
                            placeholder = {placeholder}
                            ref = {onRefInput}
                            returnKeyType = {returnKeyType}
                            onSubmitEditing = {onSubmitEditing}
                        />
                        :null
                    }
                    {
                        (type === "textview")
                        ? <TextInput
                            style={[styles.textView, 
                                // {fontFamily: font}
                            ]}
                            editable={editable}
                            numberOfLines={6}
                            multiline={true}
                            allowFontScaling={false}
                            placeholderTextColor="#c9c9c9"
                            underlineColorAndroid='transparent'
                            onChangeText={onChangeText}
                            value={value}
                            placeholder={placeholder}
                            ref={onRefInput}
                            returnKeyType={returnKeyType}
                            onSubmitEditing={onSubmitEditing}
                        />
                        : null
                    }
                    {
                        (type === "email")
                        ? <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            editable={editable}
                            keyboardType="email-address"
                            style={styles.textInput}
                            placeholderTextColor="#c9c9c9"
                            underlineColorAndroid='transparent'
                            onChangeText={this.props.onChangeText}
                            value={this.props.value}
                            placeholder={this.props.placeholder}
                            ref={this.props.onRefInput}
                            returnKeyType={this.props.returnKeyType}
                            onSubmitEditing={this.props.onSubmitEditing}
                        />
                        : null
                    }
                    {
                        (type === "phone")
                        ? <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            editable={editable}
                            style={styles.textInput}
                            keyboardType="phone-pad"
                            placeholderTextColor="#c9c9c9"
                            underlineColorAndroid='transparent'
                            onChangeText={this.props.onChangeText}
                            value={this.props.value}
                            placeholder={this.props.placeholder}
                            ref={this.props.onRefInput}
                            returnKeyType={this.props.returnKeyType}
                            onSubmitEditing={this.props.onSubmitEditing}
                        />
                        : null
                    }

                    {
                        (type === "password")
                        ? <View>
                            <TextInput
                                secureTextEntry={!this.state.displayPassword}
                                autoCapitalize='none'
                                autoCorrect={false}
                                editable={editable}
                                style={[styles.textInput, this.props.showPassword ? {paddingRight: 40} : {}]}
                                placeholderTextColor="#c9c9c9"
                                underlineColorAndroid='transparent'
                                onChangeText={this.props.onChangeText}
                                value={this.props.value}
                                placeholder={this.props.placeholder}
                                ref={this.props.onRefInput}
                                returnKeyType={this.props.returnKeyType}
                                onSubmitEditing={this.props.onSubmitEditing}
                            />

                            {
                                this.props.showPassword
                                ? <TouchableOpacity style={[styles.showPasswordButton]} onPress={() => this.setState({displayPassword: !this.state.displayPassword})}>
                                    <Image
                                        style={styles.eye_icon}
                                        source={this.state.displayPassword ? Images.eye_hide_icon : Images.eye_icon}
                                    />
                                </TouchableOpacity>
                                : null
                            }
                        </View>
                        : null
                    }

                    {
                        (type === "forgot_password")
                        ? <View style={styles.formField}>
                            <TextInput
                                secureTextEntry={true}
                                autoCapitalize='none'
                                autoCorrect={false}
                                editable={editable}
                                placeholderTextColor="#c9c9c9"
                                style={styles.textInput}
                                underlineColorAndroid='transparent'
                                onChangeText={this.props.onChangeText}
                                value={this.props.value}
                                placeholder={this.props.placeholder}
                                ref={this.props.onRefInput}
                                returnKeyType={this.props.returnKeyType}
                                onSubmitEditing={this.props.onSubmitEditing}
                            />
                            <TouchableOpacity style={styles.forgotButton} onPress={() => this.props.onForgotPassword()}>
                                <Text style={styles.forgotButtonText}>Forgot</Text>
                            </TouchableOpacity>
                        </View>
                        : null
                    }
                    {
                        (type === "dropdown")
                        ? <View style={styles.dropdownBox}>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                style={{
                                    ...pickerSelectStyles,
                                    iconContainer: {
                                        top: Platform.OS === 'ios' ? 4 : 20,
                                        right: -9,
                                    },
                                    inputIOS: {
                                        // fontFamily: font,
                                        color: 'black',
                                    },
                                    inputAndroid: {
                                        // fontFamily: font,
                                        color: 'black',
                                    }
                                }}
                                value={value}
                                ref={onRefInput}
                                onValueChange={(value) => onChangeText(value)}
                                items={this.props.data}
                                Icon={() => {
                                    return <Image
                                        style={styles.dropdownIcon}
                                        source={Images.dropdown_icon}
                                    />;
                                }}
                            />
                        </View>
                        : null
                    }


                </View>

                {
                    errorMessage
                    ? <Text style={styles.errorMessage}>{errorMessage}</Text>
                    : null
                }

            </View>

        );
    }
}

export default FormInput;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },

    containerGray: {
        backgroundColor: '#E7E7E7',
        borderWidth: 1,
        borderColor: '#979797',
        borderRadius: 21,
        paddingLeft: 20,
        paddingRight: 20,
        height: 42,
    },

    labelText: {
        // fontFamily: Fonts.bold,
        fontSize: 14,
        marginBottom: 10,
        color: '#222',
        marginBottom: 5,
    },

    textInput: {
        paddingHorizontal: 20,
        borderRadius: 25,
        // fontFamily: Fonts.bold,
        backgroundColor: '#e7ebed',
        fontSize: 16,
        height: 43,
        color: 'black',
    },

    dropdownBox: {
        paddingVertical: Platform.OS == 'ios' ? 11 : 0,
        paddingHorizontal: 20,
        borderRadius: 25,
        // fontFamily: Fonts.bold,
        backgroundColor: '#e7ebed',
        fontSize: 16,
        color: 'black',
    },

    textView: {
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#e7ebed',
        fontSize: 16,
        height: 150,
        color: 'black',
        paddingTop: 10,
        textAlignVertical: "top",
    },

    hasShowButtonTextInput: {
        fontSize: 16,
        height: '100%',
        marginRight: 30,
        height: 42,
    },

    forgotTextInput: {
        color: '#474747',
        paddingLeft: 5,
        fontSize: 17,
        paddingRight: 70,
        position: 'relative',
    },

    forgotButton: {
        position: 'absolute',
        right: 0,
    },

    forgotButtonText: {
        fontSize: 11,
        backgroundColor: '#0d4e6c',
        textTransform: 'uppercase',
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
    },

    formField: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    iconView: {
        left: 0,
        top: 7,
        position: 'absolute',
    },

    iconImage: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },

    showPasswordButton: {
        position: 'absolute',
        right: 10,
        top: 5,
        zIndex: 10,
        width: 35,
        height: 35,
    },

    errorMessage: {
        // fontFamily: Fonts.regular,
        fontStyle: 'italic',
        color: 'red',
        fontSize: 11,
        marginTop: 3,
        marginLeft: 15,
    },

    centerText: {
        textAlign: 'center'
    },

    eye_icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        position: 'absolute',
        top: 5,
        right: 5,
    },

    addressInput: {
        paddingHorizontal: 20,
        borderRadius: 25,
        // fontFamily: Fonts.bold,
        backgroundColor: '#e7ebed',
        fontSize: 16,
        height: '100%',
        height: 50,
        color: 'black',
    },

    dropdownIcon: {
        width: 17,
        height: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      color: 'black',
      zIndex: 10,
      paddingRight: 15,
    },
    inputAndroid: {
      fontSize: 16,
      color: 'black',
      zIndex: 10,
    },
});