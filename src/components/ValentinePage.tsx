import { useState, useMemo } from "react";

export default function ValentinePage() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({
    top: "auto",
    left: "auto",
    position: "static",
  });

  const handleNoHover = () => {
    const buttonWidth = 120;
    const buttonHeight = 50;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const rangeX = window.innerWidth * 0.15;
    const rangeY = window.innerHeight * 0.15;

    const offsetX = (Math.random() - 0.5) * rangeX;
    const offsetY = (Math.random() - 0.5) * rangeY;

    let x = centerX + offsetX - buttonWidth / 2;
    let y = centerY + offsetY - buttonHeight / 2;

    const margin = 20;
    x = Math.max(margin, Math.min(x, window.innerWidth - buttonWidth - margin));
    y = Math.max(
      margin,
      Math.min(y, window.innerHeight - buttonHeight - margin),
    );

    setNoPosition({
      position: "fixed",
      left: `${x}px`,
      top: `${y}px`,
    });
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  // Generate floating hearts once using useMemo
  // eslint-disable-next-line react-compiler/react-compiler
  const hearts = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${8 + Math.random() * 4}s`,
        fontSize: `${1.5 + Math.random() * 2}rem`,
      })),
    [],
  );

  // Generate confetti once using useMemo
  // eslint-disable-next-line react-compiler/react-compiler
  const confetti = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        emoji: ["💖", "💕", "💗", "🌹", "✨"][Math.floor(Math.random() * 5)],
      })),
    [],
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-400 via-pink-400 to-red-400 overflow-hidden relative">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-transparent to-rose-500/30 animate-pulse"></div>

      {/* Floating hearts background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute bottom-0 animate-float opacity-70"
            style={{
              left: heart.left,
              animationDelay: heart.animationDelay,
              animationDuration: heart.animationDuration,
              fontSize: heart.fontSize,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl w-full max-w-md text-center transition-all duration-500 transform hover:scale-[1.02] border border-white/50">
        {/* Decorative corner hearts */}
        <div className="absolute -top-3 -left-3 text-3xl animate-bounce">
          💕
        </div>
        <div
          className="absolute -top-3 -right-3 text-3xl animate-bounce"
          style={{ animationDelay: "0.2s" }}
        >
          💕
        </div>

        {yesPressed ? (
          <div className="animate-fade-in flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src="/toghether.jpeg"
                alt="Flowers and hearts"
                className="w-56 h-56 object-cover rounded-full shadow-2xl ring-4 ring-pink-300"
              />
              <div className="absolute -bottom-2 -right-2 text-5xl animate-ping">
                💖
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-3 font-serif leading-tight">
              Te quiero mi amorrrrrrr<span className="text-pink-600">💐</span>
            </h1>
            <p className="text-pink-600 text-xl font-semibold animate-pulse">
              Gracias por ser parte de mi vida Michel 🙊
            </p>
            <span className="text-pink-600 text-sm mt-2">
              Por cierto, necesitamos mejores fotos 😂
            </span>

            {/* Confetti effect */}
            <div className="absolute inset-0 pointer-events-none">
              {confetti.map((item) => (
                <div
                  key={item.id}
                  className="absolute animate-confetti text-2xl"
                  style={{
                    left: item.left,
                    top: item.top,
                    animationDelay: item.animationDelay,
                  }}
                >
                  {item.emoji}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            {/* Cat image */}
            <div className="mb-4">
              <img
                src="/gato.webp"
                alt="Cute cat"
                className="w-48 h-48 object-cover rounded-full shadow-2xl ring-4 ring-pink-300 mx-auto"
              />
            </div>

            {/* Pulsing heart above title */}
            <div className="text-5xl mb-4 animate-heartbeat">❤️</div>

            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6 font-serif leading-tight">
              Quires ser mi San Valentin Michi?
            </h1>

            <div className="flex flex-wrap justify-center gap-4 relative min-h-[60px]">
              <button
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-full text-xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-2 active:scale-95 focus:outline-none ring-4 ring-green-300/50 hover:ring-green-400"
                onClick={handleYesClick}
              >
                Siiii ❤️
              </button>
              <button
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold rounded-full text-xl shadow-2xl transition-all duration-200 focus:outline-none ring-4 ring-red-300/50 hover:ring-red-400 z-50"
                style={{
                  position: noPosition.position as
                    | "absolute"
                    | "static"
                    | "fixed"
                    | "relative"
                    | "sticky",
                  top: noPosition.top,
                  left: noPosition.left,
                }}
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
              >
                No 🥺
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom decorative hearts */}
      <div
        className="absolute bottom-10 left-10 text-5xl opacity-50 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      >
        💗
      </div>
      <div
        className="absolute bottom-20 right-20 text-5xl opacity-50 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        💝
      </div>
    </div>
  );
}
