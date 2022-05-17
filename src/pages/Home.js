import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidV4 } from "uuid";
export const Home = () => {
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    }
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/code-sync.png" alt="code-sync-logo" />
        <h1 className="mainLabel">Paste invitation ROOM ID</h1>
      <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" onChange={(e) => setRoomId(e.target.value)} value={roomId}/>
          <input type="text" className="inputBox" placeholder="USERNAME" onChange={(e) => setUserName(e.target.value)} value={userName}/>
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">If you don't have an invite then create &nbsp;<a onClick={createNewRoom} href="" className="createNewBtn">new room</a></span>
      </div>
      </div>
      <footer><h4>Built with ❤ by &nbsp;<a href="https://github.com/MrHacker26">Tarun Joshi</a></h4></footer>
    </div>
  );
};

export default Home;
