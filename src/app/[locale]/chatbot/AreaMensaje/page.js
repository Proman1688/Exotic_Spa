"use client";
import { useState } from 'react';

export default function AreaMensaje({ bloqueado = false, sendMessage }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const mensajeTemp = { data: message, tipo: 'texto' };
      setMessage('');
      sendMessage(mensajeTemp);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && message.trim() !== '') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="writing-section">
      <div className="input-wrapper">
        <input
          type="text"
          className="custom-input"
          placeholder="Hazme una pregunta..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={bloqueado}
        />
        {message && (
          <button 
            onClick={handleSendMessage} 
            className="send-icon" 
            disabled={bloqueado}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="30" 
              width="30" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#1A1A3D" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        )}
      </div>

      <style jsx>{`
        .writing-section {
          width: 100%;
          padding: 20px;
          padding-top: 0px;
          background-color: white;
        }

        .input-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          border: 1.5px solid #1A1A3D;
          border-radius: 9999px;
          padding: 6px 14px;
          background-color: #fff;
        }

        .custom-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1rem;
          color: #1A1A3D;
          background-color: transparent;
          padding: 10px 6px;
        }

        .custom-input::placeholder {
          color: #aaa;
          font-weight: 400;
        }

        .send-icon {
          background: none;
          border: none;
          padding: 0;
          margin-right: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .send-icon:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}