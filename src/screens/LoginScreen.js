import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SplashScreen from 'react-native-splash-screen'
import FormInput from '../components/FormInput'
import RoundButton from '../components/RoundButton'
import Button from '../components/Button'
import Label from '../components/Label'
// import { ifIphoneX } from 'react-native-iphone-x-helper'
import { isValidEmail, checkInternetConnectivity } from '../functions'

import Messages from '../theme/Messages'
import Images from '../theme/Images'
import Colors from '../theme/Colors'
import PageLabel from '../components/PageLabel'

// import {
//   Status
// } from '../constants.js'
// import actionTypes from '../actions/actionTypes';
// import * as Storage from '../services/Storage'

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: 'jamespotter@gmail.com',
      emailError: '',
      password: 'dumstrong003',
      passwordError: '',
      remember: false,
      isLoading: false,
      onesignalUserId: '',
    }
  }

  componentDidMount() {
    // SplashScreen.hide();
  }


  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.loginUserStatus != this.props.loginUserStatus) {
    //   if (this.props.loginUserStatus == Status.SUCCESS) {
    //     this.loginSuccess();
    //   } else if (this.props.loginUserStatus == Status.FAILURE) {
    //     this.onFailure();
    //   }
    // }
  }

  onRegister() {
    Keyboard.dismiss();
    // this.props.navigation.navigate('SignUp');
  }

  onLogin() {
    // this.setState({ errorMessage: null });
    // Keyboard.dismiss();

    // let email = this.state.email.trim();
    // let password = this.state.password.trim();

    // var isValid = true;
    // if (email == null || email.length <= 0 || !isValidEmail(email)) {
    //   this.setState({ emailError: Messages.InvalidEmail });
    //   isValid = false;
    // }

    // if (password == null || password.length <= 0) {
    //   this.setState({ passwordError: Messages.InvalidPassword });
    //   isValid = false;
    // }

    // if (isValid) {
    //   this.setState({ isLoading: true }, () => {
    //     this.props.dispatch({
    //       type: actionTypes.LOGIN_USER,
    //       user: {
    //         email,
    //         password
    //       }
    //     });
    //   });
    // }
  }

  

  async onMoveHome(animate) {
    // const { currentUser } = this.props;
    // this.setState({ isLoading: false, email: '', password: '' });
    // var nextScreen = "Play"
    // this.props.navigation.navigate(nextScreen);
    // const user_id = currentUser._id;
    // setTimeout(function () {
    //   SplashScreen.hide();
    // }, 1000);
  }

  async loginSuccess() {
    // this.setState({ isLoading: false });
    // Storage.USERID.set(this.props.currentUser._id);
    // this.onMoveHome(true);
  }

  async onFailure() {

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <KeyboardAwareScrollView>
              <PageLabel text="Login" style={{ paddingHorizontal: 20, paddingTop: 5, }} />
              <View style={styles.contentView}>
                <Image
                  style={styles.logoImage}
                  source={Images.logo01}
                />
                <View style={styles.formView}>
                  <FormInput
                    label="Your Email"
                    placeholder="Your email"
                    type="email"
                    value={this.state.email}
                    errorMessage={this.state.emailError}
                    returnKeyType="next"
                    onSubmitEditing={() => { this.passwordInput.focus() }}
                    onChangeText={(text) => this.setState({ email: text, emailError: null })} />

                  <FormInput
                    label="Password"
                    placeholder="***********"
                    type="password"
                    returnKeyType="done"
                    showPassword={true}
                    value={this.state.password}
                    errorMessage={this.state.passwordError}
                    onRefInput={(input) => { this.passwordInput = input }}
                    onChangeText={(text) => this.setState({ password: text, passwordError: null })}
                    onSubmitEditing={() => { this.onLogin() }}
                  />

                  <View style={{ alignItems: 'flex-end' }}>
                    <Button title="Forgot Password?" style={{ color: Colors.appColor }} onPress={() => this.onForgotPassword()} />
                  </View>

                  <View style={[styles.centerView, { marginTop: 0 }]}>
                    <RoundButton
                      title="LOGIN"
                      theme="orange"
                      style={styles.loginButton}
                      onPress={() => this.onLogin()} />
                  </View>
                </View>

                <View style={styles.bottomView}>
                  <Label title="or"></Label>
                  <Button title="Register with your email" style={{ marginLeft: 5 }} bold={true} onPress={() => this.onRegister()} />
                </View>
              </View>
            </KeyboardAwareScrollView>

          </View>
        </SafeAreaView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },

  contentView: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    // ...ifIphoneX({
    //   marginTop: 20,
    // }, 
    // {
      marginTop: 0,
    // }),
  },

  logoImage: {
    width: 300,
    height: 245,
    resizeMode: 'contain',
  },

  formView: {
    width: '100%',
    // ...ifIphoneX({
    //   marginTop: 20,
    // }, {
      marginTop: 0,
    // }),
  },

  loginButton: {
    marginTop: 25,
    width: '95%',
  },

  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  centerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialView: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialButton: {
    marginLeft: 15,
    marginRight: 15,
  },

  socialIcon: {
    width: 44,
    height: 44,
  },

  bottomView: {
    width: '100%',
    marginTop: '7%',
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    needToSignUp: state.user.needToSignUp,
    errorMessage: state.user.errorMessage,
    playerId: state.user.playerId,
    loginUserStatus: state.user.loginUserStatus,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
