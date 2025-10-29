import { Award } from "lucide-react";

export default function CredentialsStrip() {
  return (
    <div className="w-full bg-sand-50 border-y border-sand-200">
      <div className="container-max py-3">
        <div className="flex items-center justify-center gap-2 text-sm text-neutral-text-light">
          <Award className="w-4 h-4 text-ocean-500" />
          <span className="text-center">
            <strong className="text-neutral-text">Bia Castro</strong> — Consultora independente afiliada à{" "}
            <strong className="text-neutral-text">Primetour</strong>{" "}
            <span className="hidden sm:inline">
              (agência membro da rede <strong className="text-neutral-text">Virtuoso</strong>)
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
