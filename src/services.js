import axios from 'axios';



const API = 'http://178.128.206.150:7000/'
const APIKEY = { apikey: "0b444a11-9ad9-4ae4-b80a-11637e977686" }
const PLAYER = 'player'
const CREATEBOARD = 'create_board'
const BOARDS = 'boards'



function postPlayer(name) {

    return axios.post(`${API}${PLAYER}`, {
        name: name,
        apikey: APIKEY
    })
        .then((res) => {
            if (res.status === 200) {
                let id = res.data.id
                console.log(res, id, "Uspesna registracija");
                window.localStorage.setItem('id', id)

                return id
            } else console.log(res, "Neuspesna registracija");

        });

}



function createBoard() {
    return axios.post(`${API}${CREATEBOARD}`, {
        apikey: APIKEY
    })


}
function getBoards() {
    return axios.post(`${API}${BOARDS}`, {
        apikey: APIKEY
    })

}

export {
    postPlayer,
    createBoard,
    getBoards,
}