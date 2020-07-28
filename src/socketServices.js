import io from 'socket.io-client';

const socketURL = 'http://178.128.206.150:7000/'
let socket = null;

function joinGame(boardId, setGame, game) {
    let id = Number(window.localStorage.getItem('id'))
    socket = io(`${socketURL}?id=${id}`)
    socket.on('connect', () => {
        socket.emit('join_room', boardId, (r) => {
        })

    })
    socket.on('joined', (data) => {
        if (data.board_id === boardId) {
            if (data.player.id === id) {
                let matrix = JSON.parse(data.matrix)
                let markedTiles = 0
                for (let i in matrix) {
                    if (matrix[i])
                        markedTiles++
                }
                let isPlaying = (data.seat === 1) || (markedTiles % 2 === 1)
                setGame((prevState) => ({ ...prevState, user: { ...data.player, seat: data.seat }, matrix: JSON.parse(data.matrix), isPlaying }))

            } else {
                setGame((prevState) => ({ ...prevState, opponent: { ...data.player, seat: data.seat }, matrix: JSON.parse(data.matrix) }))
                console.log('laza')

            }

        }
    })
    socket.on('win', (data) => {
        console.log('pobeda', data)
        alert('You won!')

    })
    socket.on('tie', (data) => {
        console.log('nereseno', data)
        alert('Result is tie')

    })
    socket.on('marked', (data) => {
        console.log('marked field', data)
        if (data.board_id === boardId) {
            setGame((prevState) => ({ ...prevState, matrix: data.matrix, isPlaying: !prevState.isPlaying }))
        }
    })

    socket.on('restarted', (data) => {
        setGame((prevState) => ({
            ...prevState,
            isPlaying: prevState.user.seat === 1,
            matrix: {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0,
                "7": 0,
                "8": 0,
            },
        }))
    })


    socket.on('left', (data) => {
        if (data.board_id === boardId) {
            alert(`${data.player.name} has left the game!`)
        }
    })

    socket.on('seat_left', (data) => {
        console.log('left spot', data)
    })


}

function markTile(boardId, tilePosition, setGame, isPlaying) {
    if (isPlaying) {
        socket.emit('mark_tile', boardId, tilePosition, (r) => {
            console.log(r)

        })
    }

}

function restart(boardId) {
    socket.emit('restart', boardId, (r) => {
        console.log(r)
    })

}

function leaveGame(boardId) {
    socket.emit('leave_room', boardId, (r) => {
        console.log(r)
    })

}


function leaveSeat(boardId) {
    socket.emit('leave_seat', boardId, (r) => {
        console.log(r)
    })

}


export {
    joinGame,
    markTile,
    restart,
    leaveGame,
    leaveSeat

}