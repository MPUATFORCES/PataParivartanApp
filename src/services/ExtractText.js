import axios from 'axios';
import FormData from 'form-data'
// import AsyncStorage from '@react-native-community/async-storage';
// const API_URL = 'http://127.0.0.1:5000'

const ExtractText = (uri) => {
    console.log(uri)
    let data = new FormData();
    data.append('img', uri);
    // url = `${API_URL}/`

    axios.post('https://10.0.2.2', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        // res - status: "y"/"n" , errCode: null/errorcode 
        .then(
            (res) => console.log(res))

        .catch((e) => console.log(e))
}

export default ExtractText