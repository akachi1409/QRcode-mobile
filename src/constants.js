import {Buffer} from "buffer";
export const url = 'http://10.10.10.98:3000';

const username = "bianjiang@gad.ai";
const password = "crada123456";
export const ONE_SIGNAL_APP_ID = 'ebb27bfd-f949-4563-9a1c-571f293a3270'

// export const ONEDRIVE_CLIENT_ID = '429ad68d-8715-4da1-9a7e-a22a522937b4';
export const ONEDRIVE_CLIENT_ID = 'db31ebe1-1a29-416f-9507-6ffd5067f4f6';
// export const ONEDRIVE_REDIRECT_URL = Platform.OS === 'ios' ? 'urn:ietf:wg:oauth:2.0:oob' : 'graph-tutorial://react-native-auth';
export const ONEDRIVE_REDIRECT_URL = Platform.OS === 'ios' ? 'urn:ietf:wg:oauth:2.0:oob' : 'com.capturethis://react-native-auth';
export const ONEDRIVE_SCOPES = [
                                  'openid',
                                  'offline_access',
                                  'profile',
                                  'User.Read',
                                  'Files.ReadWrite.All'
                                ];
export const ONEDRIVE_SCOPES_FOR_TOKEN = 'openid offline_access profile User.Read Files.ReadWrite.All';
export const DROPBOX_APP_KEY = '7vz8cthduow2sc8';
export const DROPBOX_APP_SECRET = 'okdbj4ajex9k6ls';
export const DROPBOX_REDIRECT_URI = 'https://topskilldev2.temboolive.com/callback/dropbox';
export const TEMPBO_TOKEN = new Buffer(username + ":" + password).toString("base64");

/**
 * Possible requests status
 */
export const Status = {
  NONE: 'NONE',
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

// export const FONT_LIST = [
//   'OpenSans',
//   'Lato',
//   'Montserrat',
//   'Oswald',
//   'Peddana',
//   'Roboto',
//   'Sansita Swashed',
// ];

export const IMAGE_COMPRESS_QUALITY = 50;
export const MAX_IMAGE_WIDTH = 500;
export const MAX_IMAGE_HEIGHT = 1000;
export const TOAST_SHOW_TIME = 2000;
export const RELOAD_GLOBAL_TIME = 20000;
export const PASSWORD_MIN_LENGTH = 8
export const DATE_TIME_FORMAT = 'MMMM DD YYYY, hh:mm A';
export const DATE_FORMAT = 'MMMM DD, YYYY';

export const SITE_URL_TERMS = 'https://koberalysia.gadaiweb.com/terms-and-conditions.html';
export const SITE_URL_PRIVACY = 'https://koberalysia.gadaiweb.com/privacy-policy.html';