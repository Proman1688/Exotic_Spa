"use client";
import { useState, useRef, useEffect } from 'react';
import MessageElement from '../MessageElement/page';
import TypingIndicator from '../TypingIndicator/page';
import AreaMensaje from '../AreaMensaje/page';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

const FAQS = [
  "¿Cuáles son los servicios más populares?",
  "¿Cómo puedo reservar una cita?",
  "¿Cuáles son los métodos de pago aceptados?",
  "¿Dónde están ubicados?",
  "¿Tienen promociones o descuentos vigentes?"
];

const FAQ_RESPUESTAS = [
  "Nuestros servicios más populares son masajes relajantes, faciales y tratamientos corporales.",
  "Puedes reservar una cita llamando al spa o usando nuestro sistema de reservas en línea.",
  "Aceptamos pagos en efectivo, tarjeta de crédito y transferencias bancarias.",
  "Estamos ubicados en Av. Principal 123, Ciudad.",
  "Sí, tenemos promociones mensuales. ¡Consulta nuestras redes sociales!"
];

export default function ChatFlotante() {
  
  const [chats, setChats] = useState([
    {
      Name: "Chat 1",
      mensajes: [
        {
          role: 'assistant',
          content: `¡Hola! Soy Leo, ¿cómo puedo ayudarte?
Preguntas frecuentes:
1 - ¿Cuáles son los servicios más populares?
2 - ¿Cómo puedo reservar una cita?
3 - ¿Cuáles son los métodos de pago aceptados?
4 - ¿Dónde están ubicados?
5 - ¿Tienen promociones o descuentos vigentes?`,
          tipo: 'texto'
        }
      ]
    }
  ]);
  const [mostrarChat, setMostrarChat] = useState(false);
  const [chatExpandido, setChatExpandido] = useState(false);
  const [hover, setHover] = useState(false);
  const [chatSeleccionado] = useState(0);
  const [escribiendo, setEscribiendo] = useState(false);
  const [validando, setValidando] = useState(false);
  const [mensajePopUp, setMensajePopUp] = useState({
    titulo: "",
    contenido: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [idUsuario, setIdUsuario] = useState(null);
  const messagesEndRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  if (!mounted) return null;

  // const generateUUID = () => {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //     const r = Math.random() * 16 | 0,
  //       v = c === 'x' ? r : (r & 0x3) | 0x8;
  //     return v.toString(16);
  //   });
  // };

  const sendMessage = async (message) => {
  const updatedChats = [...chats];
  const userMessage = { role: 'user', content: message.data, tipo: message.tipo };
  updatedChats[chatSeleccionado].mensajes.push(userMessage);
  setChats(updatedChats);

  setEscribiendo(true);
  // Respuesta automática a preguntas frecuentes
  const userInput = message.data.trim();
  if (/^[1-5]$/.test(userInput)) {
    const respuesta = FAQ_RESPUESTAS[parseInt(userInput, 10) - 1];
    setTimeout(() => {
      const autoReply = {
        role: 'assistant',
        content: respuesta,
        tipo: 'texto'
      };
      const autoChats = [...updatedChats];
      autoChats[chatSeleccionado].mensajes.push(autoReply);
      setChats(autoChats);
      setEscribiendo(false);
    }, 1000); // Espera 1 segundo antes de responder
    return;
  }

  // Mensaje para opción no válida
  if (!/^[1-5]$/.test(userInput)) {
    setTimeout(() => {
      const autoReply = {
        role: 'assistant',
        content: 'Por favor, ingresa un número del 1 al 5 para seleccionar una pregunta frecuente.',
        tipo: 'texto'
      };
      const autoChats = [...updatedChats];
      autoChats[chatSeleccionado].mensajes.push(autoReply);
      setChats(autoChats);
      setEscribiendo(false);
    }, 1000);
    return;
  }

  // ...tu lógica normal para otros mensajes...
};

  const abrirChat = () => {
    if (mostrarChat) {
      setMostrarChat(false);
    } else {
      const updatedChats = [...chats];
      if (updatedChats[chatSeleccionado].mensajes.length === 0) {
        updatedChats[chatSeleccionado].mensajes.push({
          role: 'assistant',
          content: '¡Hola! Soy Leo, ¿cómo puedo ayudarte?',
          tipo: 'texto'
        });
        setChats(updatedChats);
      }
      setMostrarChat(true);
    }
  };

  return (
    <>
      <div>
        {mostrarChat && (
          <div 
            className="chat-flotante"
          >
            <div className="chat-cabecera d-flex align-items-center justify-content-between px-3">
                <h5 className="mb-0 titulo-chat">
                  <span className="ml-1">Leo AI</span>
                </h5>
            </div>

            <div className="messages-area">
              <Modal 
                show={showModal} 
                onHide={() => setShowModal(false)}
                centered
              >
                <Modal.Header closeButton className="bg-primary text-white">
                  <Modal.Title>{mensajePopUp.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className="my-4">{mensajePopUp.contenido}</p>
                </Modal.Body>
              </Modal>
              
              <Card className="chat-card">
                <div className="messages-container">
                  <ul className="messages-list">
                    <li className="mensaje-central">
                      Estoy aquí para ayudarte con lo que necesites
                    </li>
                    {chats[chatSeleccionado].mensajes.map((mensaje, index) => (
                      <li 
                        key={index}
                        className={mensaje.role === 'user' ? 'message-user' : 'message-assistant'}
                      >
                        <MessageElement mensaje={mensaje} index={index} />
                      </li>
                    ))}
                    {escribiendo && (
                      <li className="li-mensaje-asistente">
                        <TypingIndicator />
                      </li>
                    )}
                    <div ref={messagesEndRef} />
                  </ul>
                </div>
              </Card>
            </div>

            <AreaMensaje sendMessage={sendMessage} bloqueado={validando} />
          </div>
        )}

        <div 
          className="boton-flotante-gif" 
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)}
          onClick={abrirChat}
          style={{ cursor: 'pointer' }}
        >
          {hover && (
            <div className="help-bubble">
              ¿Necesitas ayuda?
            </div>
          )}
          <img
            src="/logo_chat.gif"
            alt="Abrir Chat"
            className="bot-image"
          />
          <div className="green-icon">
            <img
              src="/sparkles.svg"
              alt="icon verde"
              className="icon-img"
            />
          </div>
        </div>

        <style jsx>{`
          .chat-cabecera {
            background-color: #f8f9fa;
            border-bottom: 2px solid #e0e0e0;
            font-weight: 600;
            border-radius: 15px 15px 0 0;
          }

          .titulo-chat {
            color: #201e45;
            font-size: 22px;
            font-weight: bold;
          }

          .icono-header.fas, .icono-header.far, .icono-header.fab {
            font-size: 20px;
            color: #201e45;
            cursor: pointer;
            transition: all 0.2s;
            padding: 8px;
          }

          .estrella-gris {
            width: 22px;
            height: 22px;
            margin-right: 4px;
            margin-bottom: 6px;
          }

          .icono-header:hover {
            color: #000;
            background-color: #f0f0f0;
            border-radius: 50%;
          }

          .chat-flotante {
            position: fixed;
            bottom: 145px;
            right: 30px;
            width: 370px;
            height: 65%;
            max-height: 80vh;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            z-index: 1000;
            overflow: hidden;
            border: 1px solid #e0e0e0;
          }

          .boton-flotante-gif {
            position: fixed;
            bottom: 50px;
            width: 90px;
            height: 90px;
            cursor: pointer;
            z-index: 1000;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            right: 30px;
          }

          .boton-flotante-gif:hover {
            transform: scale(1.1);
          }

          .chat-card {
            height: 100%;
            background-color: rgba(255, 255, 255, 0.95);
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            margin: 0;
          }

          .messages-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 100%;
            overflow-x: hidden;
          }

          .mensaje-central {
            text-align: center;
            color: #999;
            font-size: 15px;
            padding: 10px 92px;
            margin: 8px 0;
            list-style: none;
            width: 100%;
            line-height: 1.1;
          }

          .card-body::before {
            content: "";
            position: absolute;
            top: -145px;
            right: -125px;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle at 40% 40%, #cceaff 0%, #47B5E7 50%, transparent 100%);
            border-radius: 58% 42% 60% 40% / 50% 60% 40% 50%;
            opacity: 1.45;
            z-index: 0;
            pointer-events: none;
            filter: blur(10px);
            transform: rotate(20deg);
          }

          .bot-image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
            transition: transform 0.2s ease;
          }

          .green-icon {
            position: absolute;
            top: 6px;
            right: 6px;
            transform: translate(35%, 35%);
            background-color: #4dd158;
            color: white;
            border: 1px solid white;
            border-radius: 50%;
            width: 26px;
            height: 26px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
            z-index: 2;
          }

          .icon-img {
            width: 18px;
          }

          .help-bubble {
            position: absolute;
            top: 14px;
            right: 85px;
            background-color: #fff;
            color: #555;
            padding: 6px 14px;
            border-radius: 12px;
            font-size: 0.9rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
            white-space: nowrap;
            transition: opacity 0.3s ease;
          }

          .messages-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            overflow-y: auto;
          }

          .messages-list::-webkit-scrollbar {
            width: 6px;
          }

          .messages-list::-webkit-scrollbar-track {
            background: transparent; 
          }

          .messages-list::-webkit-scrollbar-thumb {
            background-color: rgba(97, 97, 97, 0.3);
            border-radius: 3px;
          }

          .li-mensaje-asistente {
            display: flex;
            justify-content: flex-start;
          }

          .messages-area {
            height: 100%;
            flex: 1;
            background-color: white;
            overflow-y: auto;
          }

          @media (max-width: 768px) {
            .chat-header .header-text h1 {
              font-size: 1.2rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}