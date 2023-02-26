interface IconType {
  className?: string;
}

export const LogoIcon = ({ className }: IconType) => (
  <svg
    className={className}
    viewBox="0 0 44 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="9.77783"
      y="8.96289"
      width="26.6671"
      height="26.6671"
      rx="3.00931"
      transform="rotate(-19.6398 9.77783 8.96289)"
      fill="currentColor"
    />
    <rect
      x="2.34739"
      y="10.3469"
      width="29.6765"
      height="29.6765"
      rx="4.51397"
      fill="curentColor"
      stroke="#0B0E2F"
      strokeWidth="3.00931"
    />
  </svg>
);

LogoIcon.defaultProps = {
  className: "",
};

export const PlusIcon = ({ className }: IconType) => {
  return (
    <svg
      className={className}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 36.75C29.6985 36.75 36.75 29.6985 36.75 21C36.75 12.3015 29.6985 5.25 21 5.25C12.3015 5.25 5.25 12.3015 5.25 21C5.25 29.6985 12.3015 36.75 21 36.75Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4375 21H27.5625"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 14.4375V27.5625"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CreditIcon = ({ className }: IconType) => (
  <svg
    className={className}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.63379 6.28516H9.52992"
      stroke="#44CF95"
      strokeWidth="1.45433"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16064 11.4971H5.42402"
      stroke="#44CF95"
      strokeWidth="1.45433"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.00342 11.4971H9.53018"
      stroke="#44CF95"
      strokeWidth="1.45433"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.2676 9.88787V11.243C14.2676 13.5299 13.7054 14.1032 11.4629 14.1032H4.43849C2.19599 14.1032 1.63379 13.5299 1.63379 11.243V5.88753C1.63379 3.60068 2.19599 3.02734 4.43849 3.02734H9.52992"
      stroke="#44CF95"
      strokeWidth="1.45433"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.0044 3.02734V6.93648L14.2678 5.63343"
      stroke="#44CF95"
      strokeWidth="1.45433"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.0046 6.93586L11.7412 5.63281"
      stroke="#44CF95"
      strokeWidth="1.45433"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
