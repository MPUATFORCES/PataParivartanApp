import axios from 'axios'

const MobileOperatorLogin = () => {
    axios.get('https://aadharbackend.herokuapp.com/mologin')
        .then(() => {

        })
        .catch((e) => {
            console.log(e)
        })
}

export default MobileOperatorLogin