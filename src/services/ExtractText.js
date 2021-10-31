import axios from 'axios';
import FormData from 'form-data';
import * as FileSystem from 'expo-file-system';


const ExtractText = async (uri) => {
    var data = new FormData();
    data.append('img', FileSystem.readAsStringAsync(uri));

    var config = {
        method: 'post',
        url: 'http://20.204.96.107',
        headers: {
            "Content-Type": "multipart/form-data; boundary=something"
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}

export default ExtractText