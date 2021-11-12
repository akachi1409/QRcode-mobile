import {
  put, call, takeLatest, select,
} from 'redux-saga/effects';
import { get } from 'lodash';
import Types from '../actions/actionTypes';
import api from '../api';
import Messages from '../theme/Messages'
import { checkReady1, readyForTopic1 } from '../api/user';

const {
  loginUser,
  registerUser,
  getAllUsers,
  waitingForDebate,
  invitingForDebate,
  acceptingForDebate,
  waitingForAccept,
  cancelForAccept,
} = api;



function* LoginUser(action) {
  // console.log("----sagas: login------", action.user);
  yield put({ type: Types.LOGIN_REQUEST });
  try {
    const res = yield call(loginUser, action.user.email, action.user.password);
    if (res.result) {
      yield put({ type: Types.LOGIN_SUCCESS, payload: res.user });
    } else {
      yield put({ type: Types.LOGIN_FAILURE, error: res.error });
    }
  } catch (error) {
    yield put({ type: Types.LOGIN_FAILURE, error: Messages.NetWorkError });
    console.log(error);
  }
}

function* RegisterUser(action) {
  yield put({ type: Types.REGISTER_USER_REQUEST });
  try {
    const res = yield call(registerUser, action.user);
    if (res.result) {
      yield put({ type: Types.REGISTER_USER_SUCCESS, payload: res.user });
    } else {
      yield put({ type: Types.REGISTER_USER_FAILURE, error: res.error });
    }
  } catch (error) {
    yield put({ type: Types.REGISTER_USER_FAILURE, error: Messages.NetWorkError });
  }
}

function* GetAllUsers(action) {
  yield put({ type: Types.GET_ALL_USERS_REQUEST });
  try {
    const res = yield call(getAllUsers, action.user);
    if (res.result) {
      yield put({ type: Types.GET_ALL_USERS_SUCCESS, payload: res.users });
    } else {
      // console.log("----sagas: getAllUsers failure------", res.error);
      yield put({ type: Types.GET_ALL_USERS_FAILURE, error: res.error });
    }
  } catch (error) {
    yield put({ type: Types.GET_ALL_USERS_FAILURE, error: Messages.NetWorkError });
  }
}

function* WaitingForDebate(action) {
  yield put({ type: Types.DEBATE_WAITING_REQUEST });
  try {
    const res = yield call(waitingForDebate, action.email);
    if (res.result) {
      yield put({ type: Types.DEBATE_WAITING_SUCCESS, payload: res.user });
    } else {
      console.log("----sagas: getAllUsers failure------", res.error);
      yield put({ type: Types.DEBATE_WAITING_FAILURE, error: res.error });
    }
  } catch (error) {
    yield put({ type: Types.DEBATE_WAITING_FAILURE, error: Messages.NetWorkError });
  }
}

function* InviteForDebate(action){
  yield put({ type: Types.INVITE_DEBATE_REQUEST });
  try{
    const res = yield call (invitingForDebate, action.useremail, action.invitemail);
    if (res.result){
      yield put({type: Types.INVITE_DEBATE_SUCCESS, payload: res.message});
    } else{
      yield put({ type: Types.INVITE_DEBATE_FAILURE, error: res.error});
    }
  }catch(error){
    yield put({ type: Types.INVITE_DEBATE_FAILURE, error: Messages.NetWorkError });
  }
}

function* AcceptForDebate(action){
  yield put({ type: Types.ACCEPT_INVITE_REQUEST});
  try{
    const res = yield call (acceptingForDebate, action.useremail);
    if(res.result){
      yield put({type: Types.ACCEPT_INVITE_SUCCESS, payload: res.user});
    }else{
      yield put({ type: Types.ACCEPT_INVITE_FAILURE, error: res.error});
    }
  }catch(error){
    yield put({ type: Types.ACCEPT_INVITE_FAILURE, error: Messages.NetWorkError });
  }
}

function* WaitingForAccept(action){
  yield put({ type: Types.ACCEPT_WAITING_REQUEST});
  try{
    console.log("saga", action.email);
    const res = yield call (waitingForAccept, action.useremail, action.invitedEmail);
    if(res.result){
      yield put({type: Types.ACCEPT_WAITING_SUCCESS, payload: res.message});
    }else{
      yield put({ type: Types.ACCEPT_WAITING_FAILURE, error: res.error});
    }
  }catch(error){
    yield put({ type: Types.ACCEPT_WAITING_FAILURE, error: Messages.NetWorkError });
  }
}

function* CancleInvite(action){
  yield put({ type: Types.CANCEL_INVITE_REQUEST});
  try{
    // console.log("saga", action.email);
    const res = yield call (cancelForAccept, action.useremail, action.invitemail);
    if(res.result){
      yield put({type: Types.CANCEL_INVITE_SUCCESS, payload: res.message});
    }else{
      yield put({ type: Types.CANCEL_INVITE_FAILURE, error: res.error});
    }
  }catch(error){
    yield put({ type: Types.CANCEL_INVITE_FAILURE, error: Messages.NetWorkError });
  }
}

function* RejectInvite(action){
  yield put({ type: Types.REJECT_INVITE_REQUEST});
  try{
    // console.log("saga", action.email);
    const res = yield call (rejectForAccept, action.useremail, action.invitemail);
    if(res.result){
      yield put({type: Types.REJECT_INVITE_SUCCESS, payload: res.message});
    }else{
      yield put({ type: Types.REJECT_INVITE_FAILURE, error: res.error});
    }
  }catch(error){
    yield put({ type: Types.REJECT_INVITE_FAILURE, error: Messages.NetWorkError });
  }
}

function* ReadyForTopic1(action){
  yield put ({ type: Types.READY_TOPIC1_REQUEST});
  try{
    const res = yield call (readyForTopic1, action.useremail );
    if(res.result){
      yield put({ type: Types.READY_TOPIC1_SUCCESS, payload: res.message});
    }else{
      yield put({ type: READY_TOPIC1_FAILURE, error: res.error});
    }
  }catch(error){
    yield put({ type: Types.READY_TOPIC1_FAILURE, error: Messages.NetWorkError });
  }
}

function* CheckReady1(action){
  yield put ({ type: Types.CHECK_REDAY1_REQUEST});
  try {
    console.log("---saga, ", action);
    const res = yield call (checkReady1, action.opponentEmail);
    if(res.result){
      yield put({ type: Types.CHECK_REDAY1_SUCCESS, payload: res.message});
    }else{
      yield put({ type: Types.CHECK_REDAY1_FAILURE, error: res.error});
    }
  }catch(error){
    yield put({ type: Types.CHECK_REDAY1_FAILURE, error: Messages.NetWorkError });
  }
}

export default [
  takeLatest(Types.LOGIN_USER, LoginUser),
  takeLatest(Types.REGISTER_USER, RegisterUser),
  takeLatest(Types.GET_ALL_USERS, GetAllUsers),
  takeLatest(Types.DEBATE_WAITING, WaitingForDebate),
  takeLatest(Types.INVITE_DEBATE, InviteForDebate),
  takeLatest(Types.ACCEPT_INVITE, AcceptForDebate),
  takeLatest(Types.ACCEPT_WAITING, WaitingForAccept),
  takeLatest(Types.CANCEL_INVITE, CancleInvite),
  takeLatest(Types.READY_TOPIC1, ReadyForTopic1),
  takeLatest(Types.CHECK_REDAY1, CheckReady1),
];