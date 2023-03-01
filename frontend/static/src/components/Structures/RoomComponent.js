import React from "react"

function RoomComponent({ room }) {
    return (
        <div key={room.id}>
        <div className="enter-room">
        <button className="enter-button">{room.name}</button>
        </div>
      </div>
    )
}
export default RoomComponent