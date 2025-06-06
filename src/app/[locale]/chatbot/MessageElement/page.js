"use client";
import { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import markdownItLinkAttributes from 'markdown-it-link-attributes';

export default function MessageElement({ mensaje, index }) {
  const [md, setMd] = useState(null);
  
  const iframeClases = {
    "image/jpeg": "iframe-imagen",
    "image/jpg": "iframe-imagen",
    "image/png": "iframe-imagen",
    "application/pdf": "iframe-pdf",
    "audio/mpeg": "iframe-audio",
  };

  useEffect(() => {
    // Initialize markdown-it with plugins
    const mdInstance = new MarkdownIt({
      linkify: true,
      html: true
    }).use(markdownItLinkAttributes, {
      attrs: {
        target: '_blank',
        rel: 'noopener'
      }
    });
    setMd(mdInstance);
  }, []);

  const renderMarkdown = (content) => {
    if (!md) return content;
    return <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />;
  };

  const renderContent = () => {
    if (mensaje.tipo === 'texto') {
      return mensaje.role === 'user' ? (
        <p className="card-text message-message-user">{mensaje.content}</p>
      ) : (
        <div className="md-body">{renderMarkdown(mensaje.content)}</div>
      );
    } else {
      return (
        <iframe 
          src={mensaje.content.url}
          className={iframeClases[mensaje.content.tipo] || 'default-iframe-class'}
        />
      );
    }
  };

  return (
    <div className={mensaje.role === 'user' ? 'message-user' : 'message-assistant'}>
      {mensaje.role === 'user' ? (
        <div className="message-card-user">
          <div className="card-body message-details">
            {renderContent()}
          </div>
        </div>
      ) : (
        <div className="message-card card">
          <div className="card-body message-details"
               style={{ color: '#1C2141' }}
          >
            {renderContent()}
          </div>
        </div>
      )}

    <style jsx>{`
      .message-card-user {
          margin-bottom: 18px;
          margin-left: auto;
          margin-right: 12px; /* margen derecho para usuario */
          border-radius: 18px 18px 4px 18px;
          background: linear-gradient(135deg, #47B5E7 80%, #3a8fd6 100%);
          width: fit-content;
          max-width: 70%;
          min-width: 80px;
          box-shadow: 0 2px 12px rgba(71,181,231,0.10);
          padding: 8px 14px;
          border: 1px solid #d6f0fa;
          transition: background 0.2s;
      }

      .message-card {
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
      }

      .message-details {
          display: inline-block;
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: pre-line;
          max-width: 100%;
      }

      .md-body p {
          margin-bottom: 0;
          color: #1C2141;
          font-size: 1rem;
          line-height: 1.5;
      }

      .message-message-user {
          color: #fff !important;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
      }

      .card-text {
          text-align: right;
      }

      /* Animación de entrada */
      .message-card-user, .message-card {
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