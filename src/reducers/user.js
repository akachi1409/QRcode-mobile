import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import { Status } from '../constants';

export const initialState = {
    id: null,
    currentUser: null,
    needToSignUp: false,
    selectedUser: {},
    playerId: null,
    errorMessage: '',
    resultMessage: '',
    unreadMessages: 0,
    detectedImage: '',

    opponentPlayer:'',

    topicOneText : '',
  
    loginUserStatus: Status.NONE,

    checkEmailStatus: Status.NONE,
    registerUserStatus: Status.NONE,
    forgotPasswordStatus: Status.NONE,
    // verifyCodePasswordStatus: Status.NONE,
    resetPasswordStatus: Status.NONE,
    changePasswordStatus: Status.NONE,
    getUserStatus: Status.NONE,
    getUserByEmailStatus: Status.NONE,
    restoreUserStatus: Status.NONE,
    updateProfileStatus: Status.NONE,

    allUsers: [],
    getAllUsersStatus: Status.NONE,
    waitingForDebateStatus:Status.NONE,
    invitingForDebateStatus:Status.NONE,
    waitingForAcceptStatus: Status.NONE,
    readyTopicOne: Status.NONE,
    checkReady1: Status.NONE,
  };
  
  //////////////////////////////////////////////////////////////////
  /////////////////////////// Login //// ///////////////////////////
  //////////////////////////////////////////////////////////////////
  const loginUserRequest = (state) => ({
    ...state,
    loginUserStatus: Status.REQUEST,
  });
  
  const loginUserSuccess = (state, action) => ({
    ...state,
    currentUser: action.payload,
    loginUserStatus: Status.SUCCESS,
  });
  
  const loginUserFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
   loginUserStatus: Status.FAILURE,
  });

  
  //////////////////////////////////////////////////////////////////
  ///////////////////////// Restore User ///////////////////////////
  //////////////////////////////////////////////////////////////////
  const restoreUserRequest = (state) => ({
    ...state,
    restoreUserStatus: Status.REQUEST,
  });
  
  const restoreUserSuccess = (state, action) => ({
    ...state,
    currentUser: action.payload,
    restoreUserStatus: Status.SUCCESS,
  });
  
  const restoreUserFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    restoreUserStatus: Status.FAILURE,
  });
  
  //////////////////////////////////////////////////////////////////
  //////////////////////// Register User ///////////////////////////
  //////////////////////////////////////////////////////////////////
  const registerUserRequest = (state) => ({
    ...state,
    registerUserStatus: Status.REQUEST,
  });
  
  const registerUserSuccess = (state, action) => ({
    ...state,
    currentUser: action.payload,
    registerUserStatus: Status.SUCCESS,
  });
  
  const registerUserFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    registerUserStatus: Status.FAILURE,
  });
  
  //////////////////////////////////////////////////////////////////
  /////////////////////// Forgot Password //////////////////////////
  //////////////////////////////////////////////////////////////////
  const forgotPasswordRequest = (state) => ({
    ...state,
    forgotPasswordStatus: Status.REQUEST,
  });
  
  const forgotPasswordSuccess = (state, action) => ({
    ...state,
    resultMessage: action.payload,
    forgotPasswordStatus: Status.SUCCESS,
  });
  
  const forgotPasswordFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    forgotPasswordStatus: Status.FAILURE,
  });
  

  //////////////////////////////////////////////////////////////////
  ////////////////////// Reset Password ////////////////////////////
  //////////////////////////////////////////////////////////////////
  const resetPasswordRequest = (state) => ({
    ...state,
    resetPasswordStatus: Status.REQUEST,
  });
  
  const resetPasswordSuccess = (state, action) => ({
    ...state,
    resultMessage: action.payload,
    resetPasswordStatus: Status.SUCCESS,
  });
  
  const resetPasswordFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    resetPasswordStatus: Status.FAILURE,
  });
  
  //////////////////////////////////////////////////////////////////
  ////////////////////// Change Password ///////////////////////////
  //////////////////////////////////////////////////////////////////
  const changePasswordRequest = (state) => ({
    ...state,
    changePasswordStatus: Status.REQUEST,
  });
  
  const changePasswordSuccess = (state, action) => ({
    ...state,
    resultMessage: action.payload,
    changePasswordStatus: Status.SUCCESS,
  });
  
  const changePasswordFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    changePasswordStatus: Status.FAILURE,
  });
  
  //////////////////////////////////////////////////////////////////
  //////////////////////// Get User ////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const getUserRequest = (state) => ({
    ...state,
    getUserStatus: Status.REQUEST,
  });
  
  const getUserSuccess = (state, action) => {
    state.getUserStatus = Status.SUCCESS;
    const { user} = action.payload;
    if (action.is_update) {
      state.currentUser = user;
    }
    state.selectedUser = user;
    state.userJobs = action.payload.jobs;
    return {
      ...state,
    };
  };
  
  const getUserFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    getUserStatus: Status.FAILURE,
  });
  
   
  //////////////////////////////////////////////////////////////////
  //////////////////////// Get All Users ////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const getAllUsesrRequest = (state) => ({
    ...state,
    getAllUsersStatus: Status.REQUEST,
  });
  
  const getAllUsersSuccess = (state, action) => {
    state.getAllUsersStatus = Status.SUCCESS;
    const users= action.payload;
    state.allUsers = users;
 
    return {
      ...state,
      allUsers: users,
      getAllUsersStatus: Status.SUCCESS,
    };
  };
  
  const getAllUsersFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    getAllUsersStatus: Status.FAILURE,
  });


  //////////////////////////////////////////////////////////////////
  //////////////////////// Debates for waiting ////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const waitingForDebateRequest = (state) => ({
    ...state,
    waitingForDebateStatus: Status.REQUEST,
  });
  
  const waitingForDebateSuccess = (state, action) => {
    // console.log("Reducer:", action.payload);
    return {
      ...state,
      currentUser: action.payload,
      waitingForDebateStatus: Status.SUCCESS,
    };
  };
  
  const waitingForDebateFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    waitingForDebateStatus: Status.FAILURE,
  });

  //////////////////////////////////////////////////////////////////
  //////////////////////// Invite for waiting ////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const invitingForDebateRequest = (state) => ({
    ...state,
    invitingForDebateStatus: Status.REQUEST,
  });
  
  const invitingForDebateSuccess = (state, action) => {
    console.log("Reducer:", action.message);
    return {
      ...state,
      resultmessage: action.message,
      invitingForDebateStatus: Status.SUCCESS,
    };
  };
  
  const invitingForDebateFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    invitingForDebateStatus: Status.FAILURE,
  });

  //////////////////////////////////////////////////////////////////
  //////////////////////// Accept for debating ////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const acceptingForDebateRequest = (state) => ({
    ...state,
    // acceptingForDebateStatus: Status.REQUEST,
  });
  
  const acceptingForDebateSuccess = (state, action) => {
    // console.log("Reducer:", action);
    return {
      ...state,
      currentUser: action.payload,
      // invitingForDebateStatus: Status.SUCCESS,
    };
  };
  
  const acceptingForDebateFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    // invitingForDebateStatus: Status.FAILURE,
  });

  //////////////////////////////////////////////////////////////////
  //////////////////////// Waiting for Accepting ////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const waitingForAcceptRequest = (state) => ({
    ...state,
    resultMessage: "",
    waitingForAcceptStatus: Status.REQUEST,
  });
  
  const waitingForAcceptSuccess = (state, action) => {
    console.log("Waiting For Accept Reducer:", action);
    return {
      ...state,
      resultMessage: "Accepted",
      waitingForAcceptStatus: Status.SUCCESS,
      opponentPlayer : action.payload,
    };
  };
  
  const waitingForAcceptFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    waitingForAcceptStatus: Status.FAILURE,
  });

  //////////////////////////////////////////////////////////////////
  //////////////////////// Cancel the Invite ////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const cancelInviteRequest = (state) => ({
    ...state,
    // invitingForDebateStatus: Status.REQUEST,
  });
  
  const cancelInviteSuccess = (state, action) => {
    console.log("Reducer:", action.message);
    return {
      ...state,
      resultmessage: action.message,
      invitingForDebateStatus: Status.NONE,
    };
  };
  
  const cancelInviteFailure = (state, action) => ({
    ...state,
    errorMessage: action.error,
    invitingForDebateStatus: Status.FAILURE,
  });

  //////////////////////////////////////////////////////////////////
  //////////////////////// Ready for topic 1 ////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const readyForTopic1Request = (state) => ({
    ...state,
    readyTopicOne: Status.REQUEST

  });
  
  const readyForTopic1Success = (state, action) => {
    console.log("Ready for topic 1  Reducer:", action);
    return {
      ...state,
      readyTopicOne: Status.SUCCESS,
      topicOneText: action.message
    };
  };
  
  const readyForTopic1Failure = (state, action) => ({
    ...state,
    readyTopicOne: Status.FAILURE
  });
  //////////////////////////////////////////////////////////////////
  //////////////////////// Check Ready 1 ////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const checkReady1Request = (state) => ({
    ...state,
  });
  
  const checkReady1Success = (state, action) => {
    console.log("Check Ready 1 Reducer:", action);
    return {
      ...state,
      checkReady1: Status.SUCCESS,
      topicOneText: action.text
    };
  };
  
  const checkReady1Failure = (state, action) => ({
    ...state,
    checkReady1: Status.FAILURE
  });
  
  const actionHandlers = {
    [Types.LOGIN_REQUEST]: loginUserRequest,
    [Types.LOGIN_SUCCESS]: loginUserSuccess,
    [Types.LOGIN_FAILURE]: loginUserFailure,
  
    [Types.REGISTER_USER_REQUEST]: registerUserRequest,
    [Types.REGISTER_USER_SUCCESS]: registerUserSuccess,
    [Types.REGISTER_USER_FAILURE]: registerUserFailure,
  
    [Types.GET_ALL_USERS_REQUEST]: getAllUsesrRequest,
    [Types.GET_ALL_USERS_SUCCESS]: getAllUsersSuccess,
    [Types.GET_ALL_USERS_FAILURE]: getAllUsersFailure,

    [Types.DEBATE_WAITING_REQUEST]: waitingForDebateRequest,
    [Types.DEBATE_WAITING_SUCCESS]: waitingForDebateSuccess,
    [Types.DEBATE_WAITING_FAILURE]: waitingForDebateFailure,

    [Types.INVITE_DEBATE_REQUEST]: invitingForDebateRequest,
    [Types.INVITE_DEBATE_SUCCESS]: invitingForDebateSuccess,
    [Types.INVITE_DEBATE_FAILURE]: invitingForDebateFailure,

    [Types.ACCEPT_INVITE_REQUEST]: acceptingForDebateRequest,
    [Types.ACCEPT_INVITE_SUCCESS]: acceptingForDebateSuccess,
    [Types.ACCEPT_INVITE_FAILURE]: acceptingForDebateFailure,

    [Types.ACCEPT_WAITING_REQUEST]: waitingForAcceptRequest,
    [Types.ACCEPT_WAITING_SUCCESS]: waitingForAcceptSuccess,
    [Types.ACCEPT_WAITING_FAILURE]: waitingForAcceptFailure,

    [Types.CANCEL_INVITE_REQUEST]: cancelInviteRequest,
    [Types.CANCEL_INVITE_SUCCESS]: cancelInviteSuccess,
    [Types.CANCEL_INVITE_FAILURE]: cancelInviteFailure,

    [Types.READY_TOPIC1_REQUEST]: readyForTopic1Request,
    [Types.READY_TOPIC1_SUCCESS]: readyForTopic1Success,
    [Types.READY_TOPIC1_FAILURE]: readyForTopic1Failure,

    [Types.CHECK_REDAY1_REQUEST]: checkReady1Request,
    [Types.CHECK_REDAY1_SUCCESS]: checkReady1Success,
    [Types.CHECK_REDAY1_FAILURE]: checkReady1Failure,
  };
  
  export default createReducer(initialState, actionHandlers);
  