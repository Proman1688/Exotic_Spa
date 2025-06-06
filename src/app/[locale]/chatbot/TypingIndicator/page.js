export default function TypingIndicator() {
  return (
    <div className="typing-indicator message-card">
      Escribiendo...
      <style jsx>{`
        .typing-indicator {
          margin-bottom: 18px;
          margin-right: auto;
          margin-left: 12px; /* margen izquierdo para asistente */
          background: linear-gradient(135deg, #f5f6fa 80%, #e2e2e2 100%);
          border: none;
          text-align: left;
          width: fit-content;
          max-width: 70%;
          min-width: 80px;
          border-radius: 18px 18px 18px 4px;
          box-shadow: 0 2px 12px rgba(44,62,80,0.08);
          padding: 8px 14px;
          border: 1px solid #e2e2e2;
          transition: background 0.2s;
          font-size: 1rem;
          color: #1C2141;
          animation: fadeInMsg 0.3s;
        }
        @keyframes fadeInMsg {
          from { opacity: 0; transform: translateY(10px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}