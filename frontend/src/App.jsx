import "./App.css";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [message, setMessage] = useState("");

  const joinRoom = () => {
    if (!username || !roomId) {
      setMessage("Please enter username and room ID.");
      return;
    }

    setMessage("Joining room...");
  };

  const createRoom = () => {
    setMessage("Creating new room...");
  };

  return (
    <div className="app">
      <div className="card">
        <div className="hero">
          <div className="badge">
            PROFESSIONAL REAL-TIME COMMUNICATION
          </div>

          <h1>
            Welcome to <span>EchoRoom</span>
          </h1>

          <p>
            Secure voice rooms built for modern teams.
            Connect instantly, collaborate seamlessly,
            and communicate without distractions.
          </p>

          <div className="features">
            <div className="feature">
              <h4>Low Latency</h4>
              <span>Real-time communication</span>
            </div>

            <div className="feature">
              <h4>Secure Rooms</h4>
              <span>Private room architecture</span>
            </div>

            <div className="feature">
              <h4>Built For Teams</h4>
              <span>Professional collaboration</span>
            </div>
          </div>
        </div>

        <div className="auth-panel">
          <div className="auth-box">
            <h2>Join a Room</h2>

            <p className="auth-sub">
              Enter your details to connect with your team.
            </p>

            <div className="input-group">
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Enter room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
            </div>

            <button className="main-btn" onClick={joinRoom}>
              Request Access
            </button>

            <button className="secondary-btn" onClick={createRoom}>
              Create New Room
            </button>

            <p className="status">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
