import LoginMain from '../components/login/login-main.js';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-sign.jpg')" }}
    >
      {/* Capa de opacidad */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Contenido que no se ve afectado por la opacidad */}
      <div className="relative flex items-center justify-center h-screen text-white">
        <LoginMain />
      </div>
    </div>
  );
}
