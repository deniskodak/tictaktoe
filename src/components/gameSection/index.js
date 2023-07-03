import React, { useContext, useState } from 'react'
import style from './index.module.scss'
import classNames from 'classnames'
import calculateWinner from '../../utils/calculateWinner'
import isGameOver from '../../utils/isGameOver'
import PlayersInfoContext from '../../context'

const initialBoard = Array(9).fill(null)

const dynamicCeilStyle = (ceil) =>
    classNames([style.gameCeil], ceil !== null ? [style[ceil]] : null)

const dynamicBoardStyle = (position) =>
    classNames(
        [style.gameSection],
        position !== null ? [style[`winner-pos-${position}`]] : null
    )

export default function GameSection() {
    const { setPlayersInfo } = useContext(PlayersInfoContext)

    const [gameBoard, setGameBoard] = useState(initialBoard)
    const [countTurn, setCountTurn] = useState(0)
    const [winnerPosition, setWinnerPosition] = useState(null)
    const [waiting, setWaiting] = useState(false)

    const makeMove = (e) => {
        if (waiting) return

        const index = e.target.getAttribute('data')

        if (gameBoard[index] === null) {
            const updatedGameBoard = [...gameBoard]
            updatedGameBoard[index] = countTurn % 2 === 0 ? 'x' : 'o'

            setCountTurn((prevState) => prevState + 1)
            setGameBoard(updatedGameBoard)

            const result = calculateWinner(updatedGameBoard)

            // checking for Draw
            if (countTurn > 5 && !isGameOver(updatedGameBoard, countTurn)) {
                setDraw()
                refreshGame()
            }

            if (result) {
                // checking is there winner or draw
                setWinner(result)
                refreshGame()
            }
        }
        return
    }

    const refreshGame = () => {
        setWaiting(true)

        setTimeout(() => {
            setCountTurn(0)
            setWaiting(false)
            setGameBoard(initialBoard)
            setWinnerPosition(null)
        }, 1000)
    }

    const setWinner = ({ winner, position }) => {
        setWinnerPosition(position)

        setPlayersInfo((prevState) => ({
            ...prevState,
            [winner]: {
                ...prevState[winner],
                score: prevState[winner].score + 1,
            },
            winner: prevState[winner].name,
        }))
    }

    const setDraw = () => {
        setPlayersInfo((prevState) => ({ ...prevState, winner: 'Draw' }))
    }

    const changeBackground = ({ type, target }) => {
        const { style, classList } = target

        if (type === 'mouseenter' && classList.length < 2) {
            style.backgroundColor = '#a556bf52'
        } else if (type === 'mouseleave' && classList.length <= 2) {
            style.backgroundColor = ''
        }
    }

    return (
        <div className={dynamicBoardStyle(winnerPosition)}>
            {gameBoard.map((ceil, idx) => (
                <div
                    className={dynamicCeilStyle(ceil)}
                    key={idx}
                    data={idx}
                    onClick={makeMove}
                    onMouseEnter={changeBackground}
                    onMouseLeave={changeBackground}
                ></div>
            ))}
            <p className={style.turnText}>
                It is {countTurn % 2 === 0 ? 'X' : 'O'} turn now
            </p>
        </div>
    )
}
