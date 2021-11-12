import { url } from '../constants';
import { Platform } from 'react-native';

//////////////////////////////////////////////////////////////////
////////////////////////// Login /////////////////////////////////
//////////////////////////////////////////////////////////////////

export const loginUser = (email, password, player_id, lat, lng) => {
    const method = 'POST';
    const request_url = `${url}/user/login`
  
    console.log('request_url', request_url);
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ 
      email, 
      password, 
      device_token: player_id, 
      lat: lat,
      lng: lng,
      os: Platform.OS,    
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };
  
//////////////////////////////////////////////////////////////////
///////////////////////// Register User //////////////////////////
//////////////////////////////////////////////////////////////////
export const registerUser = (user) => {
    const method = 'POST';
    const request_url = `${url}/user/register_user`
  
    console.log('request_url', request_url);
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ 
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      level: user.level,
      avatar: user.avatar,
      password: user.password,
      device_token: user.playerId,
      os: Platform.OS,
    });
  
    
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };
  
  //////////////////////////////////////////////////////////////////
  ///////////////////////// Forgot Password ////////////////////////
  //////////////////////////////////////////////////////////////////
  export const forgotPassword = (email) => {
    const method = 'POST';
    const request_url = `${url}/user/forgot_password`
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ 
      email: email,
    });
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };
  
  //////////////////////////////////////////////////////////////////
  ///////////////////////// Verify Code ////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const verifyCodePassword = (email, code) => {
    const method = 'POST';
    const request_url = `${url}/user/verify_resetcode`
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ 
      email: email,
      code: code,
    });
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };
  
  //////////////////////////////////////////////////////////////////
  //////////////////////// Reset Password //////////////////////////
  //////////////////////////////////////////////////////////////////
  export const resetPassword = (email, password) => {
    const method = 'POST';
    const request_url = `${url}/user/reset_newpassword`
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ 
      email: email,
      password: password
    });
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };
  
  //////////////////////////////////////////////////////////////////
  //////////////////////// Change Password /////////////////////////
  //////////////////////////////////////////////////////////////////
  export const changePassword = (user_id, old_password, new_password) => {
    const method = 'POST';
    const request_url = `${url}/user/change_password`
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ 
      id: user_id,
      old_password: old_password,
      new_password: new_password
    });
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };
  
  //////////////////////////////////////////////////////////////////
  ////////////////////////// Get User //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const getUser = (user_id, is_update) => {
    const method = 'POST';
    const request_url = `${url}/user/get_user`
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ 
      user_id: user_id,                
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };
  
  //////////////////////////////////////////////////////////////////
  ////////////////////////// Get All Users //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const getAllUsers = (user_id, is_update) => {
    const method = 'POST';
    const request_url = `${url}/user/get_all_users`
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ 
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };

  //////////////////////////////////////////////////////////////////
  ////////////////////// Get User by email /////////////////////////
  //////////////////////////////////////////////////////////////////
  export const getUserByEmail = (email) => {
    const method = 'POST';
    const request_url = `${url}/user/get_user_by_email`
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ 
      email: email,                
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };
  
  //////////////////////////////////////////////////////////////////
  //////////////////////// Update Profile //////////////////////////
  //////////////////////////////////////////////////////////////////
  export const updateProfile = (user) => {
    const formData = new FormData();
    if (user.avatarFile) {
        var filetype = "image/jpeg";
        if (user.avatarFile.fileName) {
            filetype = user.avatarFile.type;
        }
        const filename = filterFileName(user.avatarFile, Platform.OS);
        const fileUri = filterFileUri(user.avatarFile.uri, Platform.OS);
        formData.append("avatar", {
            name: filename,
            type: filetype,
            uri: fileUri
        });
    }
  
    formData.append("id", user.id);
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    formData.append("location", user.location);
  
    const request_url = `${url}/user/update_profile`
    
    return fetch(request_url, {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
  };
  
  //////////////////////////////////////////////////////////////////
  ////////////////////////// Waiting for the debate //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const waitingForDebate = (email, invitedEmail) => {
    const method = 'POST';
    const request_url = `${url}/user/waiting_for_debate`
    const headers = {
      'Content-Type': 'application/json',
    }
    // console.log("api",email);
    const body = JSON.stringify({ 
      email:email,
      invitedEmail: invitedEmail
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };

  //////////////////////////////////////////////////////////////////
  ////////////////////////// INVITE for the debate //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const invitingForDebate = (useremail, invitemail) => {
    const method = 'POST';
    const request_url = `${url}/user/inviting_for_debate`
    const headers = {
      'Content-Type': 'application/json',
    }
    // console.log("api",useremail, "  ", invitemail);
    const body = JSON.stringify({ 
      useremail:useremail,
      invitemail:invitemail,
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };

  //////////////////////////////////////////////////////////////////
  ////////////////////////// ACCEPT for the debate //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const acceptingForDebate = (useremail, invitesEmail) => {
    const method = 'POST';
    // console.log("iser", useremail);
    const request_url = `${url}/user/accepting_for_debate`
    const headers = {
      'Content-Type': 'application/json',
    }
    // console.log("api",useremail);
    const body = JSON.stringify({ 
      useremail:useremail,
      invitesEmail: invitesEmail
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };

  //////////////////////////////////////////////////////////////////
  ////////////////////////// Waiting For Invite //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const waitingForAccept = (useremail, invitedEmail) => {
    const method = 'POST';
    // const request_url = `${url}/user/waiting_invite`
    const request_url = `${url}/user/waiting_for_accept`
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log("fdafdss",useremail, invitedEmail);
    const body = JSON.stringify({ 
      useremail:useremail,
      invitedEmail:invitedEmail,
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };

  //////////////////////////////////////////////////////////////////
  ////////////////////////// Cancel For Invite //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const cancelForAccept = (useremail, invitemail) => {
    const method = 'POST';
    const request_url = `${url}/user/cancel_invite`
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log("cancel",useremail, invitemail);
    const body = JSON.stringify({ 
      useremail:useremail,
      invitemail:invitemail,
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };

 //////////////////////////////////////////////////////////////////
  ////////////////////////// Reject For Invite //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const rejectForAccept = (useremail, invitemail) => {
    const method = 'POST';
    const request_url = `${url}/user/reject_invite`
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log("reject",useremail, invitemail);
    const body = JSON.stringify({ 
      useremail:useremail,
      invitemail:invitemail,
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };

  //////////////////////////////////////////////////////////////////
  ////////////////////////// Ready for topic 1 //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const readyForTopic1 = (useremail) => {
    const method = 'POST';
    const request_url = `${url}/user/ready_topic1`
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log("useremail", useremail);
    const body = JSON.stringify({ 
      useremail:useremail,
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };

  //////////////////////////////////////////////////////////////////
  ////////////////////////// Check Ready 1 //////////////////////////////
  //////////////////////////////////////////////////////////////////
  export const checkReady1 = (opponentEmail) => {
    const method = 'POST';
    const request_url = `${url}/user/check_ready1`
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log("opponentEmail", opponentEmail);
    const body = JSON.stringify({ 
      opponentEmail:opponentEmail,
    });
  
    return fetch(request_url, { method, body, headers})
      .then((res) => res.json());
  };