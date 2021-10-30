import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
const API_URL = 'http://20.204.96.107'

const MOAuthService = (username, password) => {

    url = API_URL
    config = {
        "username": username,
        "password": password,
    }

    axios.post(url, config)
        // res - status: "y"/"n" , errCode: null/errorcode 
        .then((res) => console.log(res))

        .catch((e) => console.log(e))
}
// const AuthService = () => {

//     url = API_URL
//     config = {
//         "uid": props.uid,
//         "txnId": props.txnId,
//         "otp": props.otp
//     }

//     axios.post(url, config)
//         // res - status: "y"/"n" , errCode: null/errorcode 
//         .then((res) => console.log(res))

//         .catch((e) => console.log(e))
// }

export default MOAuthService
// function login(username, password) {
//     return new Promise((resolve, reject) => {
//         axios.post(`${API_URL}/moauth`, {
//             username,
//             password,
//         })
//             .then((response) => {
//                 AsyncStorage.setItem('userToken', response.data.token)
//                     .then(() => {
//                         resolve(response);
//                         AsyncStorage.setItem('userData', JSON.stringify(response.data.username));
//                     });
//             }).catch(err => reject(err));
//     });
// }

// async function logout(getState) {
//     return new Promise(async (resolve, reject) => {
//         const currentState = await getState();
//         const { token } = currentState.auth;
//         axios.post(`${API_URL}/user/logout`, {}, {
//             headers: {
//                 authorization: `Bearer ${token}`,
//             },
//         }).then(async (response) => {
//             resolve(response);
//             await AsyncStorage.removeItem('userData');
//             await AsyncStorage.removeItem('userToken');
//         }).catch(err => reject(err));
//     });
// }

// export const userService = {
//     login,
//     logout,
// };


// {
//     "uid": "********9999",
//     "txnId": "0acbaa8b-b3ae-433d-a5d2-51250ea8e970",
//     "otp": "122915"
//    }

// {
//     "status": "y",
//     "errCode": null
//    }