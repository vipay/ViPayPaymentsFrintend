export const API_BASE_URL = "http://54.69.15.93:8001";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN_API = getApiUrl("/login");
export const SIGNUP_API = getApiUrl("/register");
export const SOCIAL_LOGIN = getApiUrl("/social_login");
export const FORGOT_PASSWORD = getApiUrl("/forgot_password");
export const TUTORIALS_LIST= getApiUrl('/User/list_tutorials');
export const LOGIN_WITH_MOBILE= getApiUrl('/User/login_with_mobile');
export const OTP_VERIFICTION=getApiUrl('/User/otp_verification');
export const RESEND_OTP=getApiUrl('/User/otp_verification');

