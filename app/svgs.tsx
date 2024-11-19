type Size = {
  w: string;
  h: string;
};

type Size2 = {
  w: string;
  h: string;
  s: string;
};
export const IMeteorite = ({ w, h }: Size) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        fill="none"
        viewBox="0 0 24 24"
        id="meteorite-comet"
      >
        <path
          stroke="#323232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M14.363 5.9953L13.9765 4.06254C13.924 3.80023 13.7522 3.57737 13.5119 3.45984C13.2716 3.34231 12.9903 3.34353 12.751 3.46315L8.00824 5.83451C6.99125 6.343 6.06289 7.01213 5.25889 7.81613V7.81613C2.24205 10.833 2.24205 15.7243 5.25889 18.7411V18.7411C8.27575 21.758 13.167 21.758 16.1839 18.7411V18.7411C16.9879 17.9371 17.657 17.0088 18.1655 15.9918L20.5368 11.249C20.6565 11.0098 20.6577 10.7284 20.5402 10.4881C20.4226 10.2478 20.1998 10.076 19.9375 10.0235L18.0047 9.63699L20.8968 4.26589C21.0765 3.93214 21.016 3.52004 20.748 3.25202C20.4799 2.98399 20.0678 2.9235 19.7341 3.10319L14.363 5.9953Z"
          clip-rule="evenodd"
        ></path>
        <circle
          cx="10.499"
          cy="13.501"
          r="4.002"
          stroke="#323232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        ></circle>
      </svg>
    </>
  );
};

export const ISatellite = ({ w, h }: Size) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        fill="none"
        viewBox="0 0 24 24"
        id="satellite"
      >
        <path
          stroke="#323232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M13.6839 6.90404C14.1363 6.45157 14.75 6.19737 15.3899 6.19737C16.0298 6.19737 16.6435 6.45157 17.0959 6.90404V6.90404C17.5484 7.35651 17.8026 7.97019 17.8026 8.61008C17.8026 9.24997 17.5484 9.86365 17.0959 10.3161"
        ></path>
        <path
          stroke="#323232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M6.90404 17.096C5.96221 16.1541 5.9615 14.6264 6.90333 13.6846L13.6846 6.90333C14.6264 5.9615 16.1541 5.96222 17.096 6.90405V6.90405C18.0378 7.84587 18.0385 9.37359 17.0967 10.3154L10.3154 17.0967C9.37359 18.0385 7.84587 18.0378 6.90404 17.096V17.096zM16.5526 14.5805C17.326 13.8071 18.5798 13.8071 19.3532 14.5805L20.4241 15.6514C21.1974 16.4247 21.1974 17.6786 20.4241 18.452L18.452 20.4241C17.6786 21.1974 16.4247 21.1974 15.6514 20.4241L14.5805 19.3532C13.8071 18.5798 13.8071 17.326 14.5805 16.5526L16.5526 14.5805z"
          clip-rule="evenodd"
        ></path>
        <path
          stroke="#323232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M19.8886 15.1159L15.1159 19.8886"
        ></path>
        <path
          stroke="#323232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M5.54801 3.57592C6.32137 2.80256 7.57524 2.80256 8.3486 3.57592L9.41946 4.64679C10.1928 5.42015 10.1928 6.67402 9.41946 7.44738L7.44736 9.41948C6.674 10.1928 5.42013 10.1928 4.64677 9.41948L3.57591 8.34862C2.80254 7.57526 2.80254 6.32139 3.57591 5.54802L5.54801 3.57592Z"
          clip-rule="evenodd"
        ></path>
        <path
          stroke="#323232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M8.88405 4.11136L4.11136 8.88405M15.5665 15.5666L13.706 13.706M10.294 10.294L8.43344 8.43343M15.3899 2.99625C18.4904 2.99625 21.0038 5.50965 21.0038 8.61008M8.61007 21.0038C5.50964 21.0038 2.99625 18.4904 2.99625 15.3899"
        ></path>
      </svg>
    </>
  );
};

export const ISpacestars = ({ w, h, s = "1.5" }: Size2) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        fill="none"
        viewBox={`0 0 24 24`}
        id="space-stars"
      >
        <path
          stroke="#323232"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={s}
          d="M6.1181 3.52262C6.2921 3.19859 6.63012 2.99644 6.99791 2.99644 7.36569 2.99644 7.70371 3.19859 7.87771 3.52262L8.65367 4.9427C8.7456 5.11152 8.8843 5.25022 9.05312 5.34216L10.4732 6.11811C10.7972 6.29211 10.9994 6.63013 10.9994 6.99791 10.9994 7.3657 10.7972 7.70372 10.4732 7.87772L9.05312 8.65367C8.8843 8.74561 8.7456 8.88431 8.65367 9.05313L7.87771 10.4732C7.70371 10.7972 7.36569 10.9994 6.99791 10.9994 6.63012 10.9994 6.2921 10.7972 6.1181 10.4732L5.34215 9.05313C5.25021 8.88431 5.11151 8.74561 4.94269 8.65367L3.52261 7.87772C3.19859 7.70372 2.99643 7.3657 2.99643 6.99791 2.99643 6.63013 3.19859 6.29211 3.52261 6.11811L4.94269 5.34216C5.11151 5.25022 5.25021 5.11152 5.34215 4.9427L6.1181 3.52262zM17.3426 7.39269C17.4731 7.14968 "
          clip-rule="evenodd"
        ></path>
      </svg>
    </>
  );
};