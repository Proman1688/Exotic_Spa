"use client";

import { useState } from "react";
import MessageElement from "./MessageElement";
import TypingIndicator from "./TypingIndicator";
import AreaMensaje from "./AreaMensaje";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react"; // Puedes usar cualquier ícono o paquete

export default function ChatFlotante() {
  const [mostrarChat, setMostrarChat] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [escribiendo, setEscribiendo] = useState(false);

  const toggleChat = () => {
    setMostrarChat(!mostrarChat);
  };

  const manejarEnvio = (texto) => {
    if (!texto.trim()) return;
    setMensajes((prev) => [...prev, { texto, tipo: "usuario" }]);
    setEscribiendo(true);

    setTimeout(() => {
      setMensajes((prev) => [...prev, { texto: "Estoy procesando tu mensaje...", tipo: "bot" }]);
      setEscribiendo(false);
    }, 1500);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Panel del chat flotante */}
      {mostrarChat && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-[500px]">
          {/* Cabecera */}
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <strong>Asistente Itevelesa</strong>
            </div>
            <button onClick={toggleChat} className="text-white">
              <X />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {mensajes.map((mensaje, index) => (
              <MessageElement key={index} mensaje={mensaje} />
            ))}
            {escribiendo && <TypingIndicator />}
          </div>

          {/* Entrada */}
          <div className="border-t p-2 bg-gray-50 rounded-b-lg">
            <AreaMensaje onEnviarMensaje={manejarEnvio} />
          </div>
        </div>
      )}
    </>
  );
}
