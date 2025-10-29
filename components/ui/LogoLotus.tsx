interface LogoLotusProps {
  className?: string;
}

export default function LogoLotus({ className = "w-16 h-16" }: LogoLotusProps) {
  return (
    <svg
      viewBox="0 0 1440 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Flor de Lótus - Símbolo de transformação espiritual */}
      <g transform="translate(720, 512)">
        {/* Pétala Central Superior */}
        <path
          d="M 0,-280 Q -45,-200 -55,-120 Q -45,-60 0,-15 Q 45,-60 55,-120 Q 45,-200 0,-280 Z"
          fill="none"
          stroke="#B8956A"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pétala Esquerda Superior */}
        <path
          d="M -165,-240 Q -200,-180 -210,-105 Q -195,-45 -90,-15 Q -105,-90 -115,-135 Q -135,-200 -165,-240 Z"
          fill="none"
          stroke="#B8956A"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pétala Direita Superior */}
        <path
          d="M 165,-240 Q 200,-180 210,-105 Q 195,-45 90,-15 Q 105,-90 115,-135 Q 135,-200 165,-240 Z"
          fill="none"
          stroke="#B8956A"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pétala Esquerda Externa */}
        <path
          d="M -255,-165 Q -285,-105 -295,-30 Q -265,25 -150,45 Q -175,-45 -195,-105 Q -225,-145 -255,-165 Z"
          fill="none"
          stroke="#B8956A"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pétala Direita Externa */}
        <path
          d="M 255,-165 Q 285,-105 295,-30 Q 265,25 150,45 Q 175,-45 195,-105 Q 225,-145 255,-165 Z"
          fill="none"
          stroke="#B8956A"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pétalas Laterais Inferiores */}
        {/* Esquerda-Inferior */}
        <path
          d="M -225,-45 Q -255,0 -265,60 Q -235,105 -135,105 Q -165,30 -185,-15 Q -205,-35 -225,-45 Z"
          fill="none"
          stroke="#B8956A"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Direita-Inferior */}
        <path
          d="M 225,-45 Q 255,0 265,60 Q 235,105 135,105 Q 165,30 185,-15 Q 205,-35 225,-45 Z"
          fill="none"
          stroke="#B8956A"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Base da Flor - Linha curva inferior */}
        <ellipse
          cx="0"
          cy="105"
          rx="285"
          ry="45"
          fill="none"
          stroke="#B8956A"
          strokeWidth="24"
          opacity="0.8"
        />
      </g>
    </svg>
  );
}
