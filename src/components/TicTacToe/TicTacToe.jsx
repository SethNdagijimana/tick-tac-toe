import React, { useRef, useState } from "react"
import tic1_icon from "../../Assets/tic1.png"
import tic2_icon from "../../Assets/tic2.png"

let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {
  let [count, setCount] = useState(0)
  let [lock, setLock] = useState(false)
  let titleRef = useRef(null)
  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let box4 = useRef(null)
  let box5 = useRef(null)
  let box6 = useRef(null)
  let box7 = useRef(null)
  let box8 = useRef(null)
  let box9 = useRef(null)

  let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

  const toggle = (e, num) => {
    if (lock) {
      return 0
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src ='${tic1_icon}'>`
      data[num] = "x"
      setCount(++count)
    } else {
      e.target.innerHTML = `<img src ='${tic2_icon}'>`
      data[num] = "0"
      setCount(++count)
    }
    winner()
  }

  const winner = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2])
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5])
    } else if (data[6] === data[7] && data[8] === data[8] && data[8] !== "") {
      won(data[8])
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6])
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7])
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8])
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8])
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2])
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6])
    }
  }

  const won = (winner) => {
    setLock(true)
    if (winner === "x") {
      titleRef.current.innerHTML = `congratulation yellow circle wins`
    } else {
      titleRef.current.innerHTML = `congratulation blue circle wins`
    }
  }

  const reset = () => {
    setLock(false)
    data = ["", "", "", "", "", "", "", "", ""]
    titleRef.current.innerHTML = `Tic Tac Toe Game`
    boxes.map((e) => {
      e.current.innerHTML = ""
    })
  }
  return (
    <div>
      <h1 className="text-center text-white text-2xl p-4" ref={titleRef}>
        Tic Tac Toe Game
      </h1>

      <div className="board flex w-[564px] h-[600px] mx-auto">
        <div className="row1">
          <div
            className="boxes flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer mt-50 mr-50 ml-50"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0)
            }}
          ></div>
          <div
            className="boxes flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer mt-50 mr-50 ml-50"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1)
            }}
          ></div>
          <div
            className="boxes flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer mt-50 mr-50 ml-50"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2)
            }}
          ></div>
        </div>

        <div className="row2">
          <div
            className="boxes flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3)
            }}
          ></div>
          <div
            className="boxes flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4)
            }}
          ></div>
          <div
            className="boxes flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5)
            }}
          ></div>
        </div>

        <div className="row3">
          <div
            className="boxes flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6)
            }}
          ></div>
          <div
            className="boxes flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7)
            }}
          ></div>
          <div
            className="boxes flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8)
            }}
          ></div>
        </div>
      </div>

      <button
        className="rounded-2xl bg-slate-500 text-white p-2 w-[200px] flex items-center justify-center mx-auto mt-9"
        onClick={() => {
          reset()
        }}
      >
        Restart
      </button>
    </div>
  )
}

export default TicTacToe
