type BrandLogoProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function BrandLogo({
  compact = false,
  inverted = false,
}: BrandLogoProps) {
  return (
    <a
      className={`brand-logo${compact ? ' brand-logo--compact' : ''}`}
      href="#accueil"
      aria-label="RH Conseil 71 — Accueil"
    >
      <svg
        className="brand-logo__mark"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M11 8v28"
          fill="none"
          stroke="#08AEB2"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M23 5v35"
          fill="none"
          stroke="#D41369"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M35 10v26"
          fill="none"
          stroke="#B8C900"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M8 17c8-6 21-6 31 0"
          fill="none"
          stroke={inverted ? '#ffffff' : '#23222B'}
          strokeLinecap="round"
          strokeWidth="2.4"
        />
      </svg>

      {!compact && (
        <span className="brand-logo__copy">
          <span
            className="brand-logo__name"
            style={{ color: inverted ? '#ffffff' : undefined }}
          >
            <strong>RH</strong> CONSEIL
          </span>
          <span
            className="brand-logo__number"
            style={{ color: inverted ? '#ffffff' : undefined }}
          >
            71
          </span>
        </span>
      )}
    </a>
  );
}
