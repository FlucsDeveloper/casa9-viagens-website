interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Flor de Lótus - Centralizada e Maior */}
      <g transform="translate(100, 120)">
        {/* Camada de Pétalas Internas */}
        {/* Pétala Central Superior (maior) */}
        <path
          d="M 0,-90 Q -15,-65 -18,-40 Q -15,-20 0,-5 Q 15,-20 18,-40 Q 15,-65 0,-90 Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pétala Esquerda Superior (maior) */}
        <path
          d="M -55,-80 Q -68,-60 -72,-35 Q -65,-15 -30,-5 Q -35,-30 -38,-45 Q -45,-68 -55,-80 Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pétala Direita Superior (maior) */}
        <path
          d="M 55,-80 Q 68,-60 72,-35 Q 65,-15 30,-5 Q 35,-30 38,-45 Q 45,-68 55,-80 Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Camada de Pétalas Externas */}
        {/* Pétala Esquerda Externa */}
        <path
          d="M -85,-55 Q -95,-35 -98,-10 Q -88,8 -50,15 Q -58,-15 -65,-35 Q -75,-48 -85,-55 Z"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pétala Direita Externa */}
        <path
          d="M 85,-55 Q 95,-35 98,-10 Q 88,8 50,15 Q 58,-15 65,-35 Q 75,-48 85,-55 Z"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pétalas Laterais */}
        {/* Esquerda-Baixo */}
        <path
          d="M -75,-15 Q -85,0 -88,20 Q -78,35 -45,35 Q -55,10 -62,-5 Q -68,-12 -75,-15 Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Direita-Baixo */}
        <path
          d="M 75,-15 Q 85,0 88,20 Q 78,35 45,35 Q 55,10 62,-5 Q 68,-12 75,-15 Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Base da Flor - Folhas */}
        <ellipse
          cx="0"
          cy="35"
          rx="95"
          ry="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.8"
        />

        {/* Centro da Flor */}
        <circle
          cx="0"
          cy="-5"
          r="8"
          fill="currentColor"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}
