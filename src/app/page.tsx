// app/page.tsx
"use client";

export default function Home() {
  return (
    <main className="card">
      {/* SVG Heart */}
      <div className="svg-holder">
        <svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff9aa2" />
              <stop offset="55%" stopColor="#ff6b6b" />
              <stop offset="100%" stopColor="#ffb86b" />
            </linearGradient>
          </defs>
          <g transform="translate(0,6)">
            <path
              className="pulse"
              d="M120 178
                 C120 178 36 124 36 78
                 C36 46 68 34 92 58
                 C106 72 120 88 120 88
                 C120 88 134 72 148 58
                 C172 34 204 46 204 78
                 C204 124 120 178 120 178 Z"
              fill="url(#g1)"
              stroke="rgba(0,0,0,0.12)"
              strokeWidth="2"
            />
          </g>
          <path
            className="swirl"
            d="M26 160
               C60 140, 90 130, 110 120
               C135 108, 165 98, 196 86"
            fill="none"
            stroke="#ffd6c2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
          <circle cx="40" cy="40" r="2.2" fill="#fff9" />
          <circle cx="200" cy="44" r="1.8" fill="#fff5" />
          <circle cx="170" cy="150" r="2.5" fill="#fff6" />
        </svg>
      </div>

      {/* Nama */}
      <div className="name-wrap">
        <div className="name">Anton Love Seni</div>
      </div>
    </main>
  );
}
