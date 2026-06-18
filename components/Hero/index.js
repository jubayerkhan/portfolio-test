import { useState, useRef } from "react";
import Socials from "../Socials";

export default function Hero({ data, textOne, textTwo, textThree, textFour }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imgWrapRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgWrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="relative laptop:mt-10 mt-6 overflow-hidden">
      {/* solid black base */}
      <div className="absolute inset-0 -z-20 bg-black" />

      {/* glow anchored behind the photo, off-center, fading to black */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 65% at 78% 35%, rgba(56,189,248,0.35) 0%, rgba(37,99,235,0.22) 35%, rgba(14,116,144,0.08) 55%, transparent 72%)",
        }}
      />

      {/* faint dot-grid texture for depth */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="pointer-events-none absolute top-12 right-16 w-[260px] h-[260px] rounded-full bg-sky-500/15 blur-[100px] animate-blob" />
      <div className="pointer-events-none absolute bottom-16 right-1/3 w-[180px] h-[180px] rounded-full bg-blue-600/10 blur-[100px] animate-blob [animation-delay:5s]" />

      <div className="flex flex-col laptop:flex-row items-center gap-10 relative z-10 px-4 laptop:px-0 py-14 laptop:py-20 container mx-auto">

        {/* LEFT HALF — text */}
        <div className="w-full laptop:w-1/2">
          <p
            ref={textOne}
            className="reveal-line text-sm tablet:text-2xl font-medium tracking-wide text-sky-400"
            style={{ animationDelay: "0.05s" }}
          >
            {data.headerTaglineOne}
          </p>

          <h1
            ref={textTwo}
            className="reveal-line text-3xl tablet:text-5xl laptop:text-6xl font-bold text-white mt-2 leading-tight"
            style={{ animationDelay: "0.18s" }}
          >
            {data.headerTaglineTwo}
          </h1>

          <h1
            ref={textThree}
            className="reveal-line text-3xl tablet:text-5xl laptop:text-6xl font-bold mt-1 leading-tight bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-x"
            style={{ animationDelay: "0.30s" }}
          >
            {data.headerTaglineThree}
          </h1>

          <p
            ref={textFour}
            className="reveal-line text-gray-300 text-base laptop:text-lg mt-4 max-w-md"
            style={{ animationDelay: "0.42s" }}
          >
            {data.headerTaglineFour}
          </p>

          <div className="reveal-line mt-8" style={{ animationDelay: "0.55s" }}>
            <a
              href="/pdf/Jubayer_Khan_CV.pdf"
              download
              className="inline-block px-7 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:opacity-90 transition"
            >
              Download CV
            </a>
          </div>

          <Socials
            className="mt-4 reveal-line"
            style={{ animationDelay: "0.65s" }}
          />
        </div>

        {/* RIGHT HALF — image, 4:5 ratio */}
        <div className="w-full laptop:w-1/2 flex justify-center laptop:justify-end">
          <div
            ref={imgWrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="relative w-full max-w-[420px] aspect-[4/5]"
            style={{ perspective: "1000px" }}
          >
            {/* glow behind the photo */}
            <div className="absolute inset-0 rounded-[40%] bg-gradient-to-br from-blue-500/40 to-sky-400/25 blur-2xl scale-105" />

            <img
              className="rounded-lg object-cover relative w-full h-full transition-transform duration-200 ease-out will-change-transform"
              src="https://i.imgur.com/3cUhd15.png"
              alt="Header Image"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-15px, -20px) scale(1.1);
          }
          66% {
            transform: translate(10px, 15px) scale(0.92);
          }
        }
        .animate-blob {
          animation: blob 12s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 4s ease infinite;
        }
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .reveal-line {
          animation: reveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .animate-gradient-x,
          .reveal-line {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}