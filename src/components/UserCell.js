import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Dimensions, Image} from 'react-native';

import Colors from '../theme/Colors'
import Fonts from '../theme/Fonts';
// import Images from '../../theme/Images'
import RoundButton from './RoundButton';

import Label from './Label';
import actionTypes from '../actions/actionTypes';

import { Status } from '../constants';
const win = Dimensions.get('window');

export default class UserCell extends Component {
    constructor() {
        super()

    }

    componentDidMount(){

    }

    

    render(){
        const { data, useremail, onSelect, onCancel} = this.props;
        const firstName = (data && data.firstName) ? data.firstName : "";
        const lastName = (data && data.lastName) ? data.lastName: "";
        const status = (data && data.status)? data.status: 0;
        const level = (data && data.level)? data.level: 0;
        const invitemail= (data && data.invited)? data.invited:"";

        // const invitedEmail = (invitedEmail )? invitedEmail:"";

        return(
            <View style={[this.props.style, styles.container]}>
                <TouchableWithoutFeedback>
                    <View style={styles.contentView}>
                        <View style={styles.leftView}>
                            <Text style={styles.amountText}> {firstName} {lastName}</Text>
                        </View>    
                        <View style={styles.middleView}>
                            <Text style={styles.mealText}>
                                <Label title ="Level " />
                                <Label title ={level}/>
                            </Text>
                            <Text style={styles.mealText}>
                                    {
                                    (status ==0)
                                    ?<Label title = "Normal" style={{ backgroundColor:Colors.appliedJobTextColor}}/>
                                    :<Label title = "Debating" style={{ backgroundColor:Colors.completedJobTextColor}}/>
                                }
                            </Text>
                        </View> 
                        <View style={styles.rightView}>
                            {
                                (invitemail == "")
                                ?<RoundButton
                                    theme = "orange"
                                    title = "Debate"
                                    onPress ={() =>  onSelect(useremail, data)}
                                    />
                                :<RoundButton
                                    theme ="blue"
                                    title = "Cancel"
                                    onPress = {() => onCancel(useremail, data)}
                                    />
                            }
                            
                        </View>   
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginBottom: 5,
        paddingHorizontal: 5,
    },

    contentView: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 5,
        shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.1,
		shadowRadius: 7,
        elevation: 7,
    },

    leftView: {
        width: 150,
    },

    amountText: {
        // fontFamily: Fonts.avenirRoman,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 17,
        color: Colors.textColor
    },

    mealText: {
        // fontFamily: Fonts.avenirRoman,
        fontSize: 20,
        color: 'black',
        marginBottom: 5,
        marginTop: 10,
    },

    middleView: {
        width: 80,
    },
    rightView:{
        width: win.width-280,
    },
    mainText: {
        // fontFamily: Fonts.bold,
        color: '#333',
        fontSize: 17,
        marginBottom: 3,
    }
})