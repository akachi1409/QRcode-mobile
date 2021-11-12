export const isValidEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
        return false;
    }
    return true;
}


export const checkInternetConnectivity = async () => {
    return NetInfo.fetch().then(state => {
      return state.isConnected
    });
  };
  