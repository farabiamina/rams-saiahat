import * as React from "react";
const SVGComponent = (props) => (
  <svg
    viewBox="0 0 400 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="path-1-inside-1_1087_951" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M290.845 295.113C273.084 295.113 258.689 280.274 258.689 261.969C258.689 243.662 273.084 228.825 290.845 228.825C308.594 228.825 323 243.662 323 261.969C323 280.274 308.594 295.113 290.845 295.113ZM204.72 291.411C218.738 279.77 239.315 281.976 250.676 296.341V296.341C262.038 310.707 259.883 331.793 245.865 343.436L53.246 503.633C39.2281 515.276 18.6518 513.079 7.29029 498.702C-4.07123 484.34 -1.91612 463.262 12.1017 451.611L204.72 291.411Z"
      />
    </mask>
    <path
      d="M250.676 296.341H252.676V295.646L252.245 295.101L250.676 296.341ZM204.72 291.411L203.443 289.872L203.442 289.873L204.72 291.411ZM250.676 296.341H248.676V297.037L249.107 297.582L250.676 296.341ZM245.865 343.436L244.587 341.897L244.586 341.898L245.865 343.436ZM53.246 503.633L54.5238 505.172L54.5248 505.171L53.246 503.633ZM7.29029 498.702L8.85943 497.462L8.85885 497.462L7.29029 498.702ZM12.1017 451.611L13.3802 453.149L13.3806 453.148L12.1017 451.611ZM256.689 261.969C256.689 281.321 271.922 297.113 290.845 297.113V293.113C274.245 293.113 260.689 279.227 260.689 261.969H256.689ZM290.845 226.825C271.922 226.825 256.689 242.614 256.689 261.969H260.689C260.689 244.709 274.245 230.825 290.845 230.825V226.825ZM325 261.969C325 242.614 309.755 226.825 290.845 226.825V230.825C307.434 230.825 321 244.709 321 261.969H325ZM290.845 297.113C309.755 297.113 325 281.321 325 261.969H321C321 279.226 307.434 293.113 290.845 293.113V297.113ZM252.245 295.101C240.193 279.862 218.332 277.508 203.443 289.872L205.998 292.949C219.144 282.033 238.437 284.09 249.107 297.582L252.245 295.101ZM252.676 296.341V296.341H248.676V296.341H252.676ZM247.143 344.974C262.003 332.632 264.274 310.311 252.245 295.101L249.107 297.582C259.801 311.103 257.762 330.954 244.587 341.897L247.143 344.974ZM54.5248 505.171L247.144 344.973L244.586 341.898L51.9671 502.095L54.5248 505.171ZM5.72114 499.942C17.7739 515.194 39.6349 517.538 54.5238 505.172L51.9681 502.095C38.8213 513.014 19.5297 510.964 8.85943 497.462L5.72114 499.942ZM10.8233 450.073C-4.03575 462.423 -6.3083 484.736 5.72173 499.943L8.85885 497.462C-1.83415 483.944 0.203508 464.101 13.3802 453.149L10.8233 450.073ZM203.442 289.873L10.8229 450.073L13.3806 453.148L205.999 292.948L203.442 289.873Z"
      fill="#00705A"
      mask="url(#path-1-inside-1_1087_951)"
    />
    <mask id="path-3-inside-2_1087_951" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M367.845 66.288C350.084 66.288 335.689 51.4489 335.689 33.144C335.689 14.8366 350.084 0 367.845 0C385.594 0 400 14.8366 400 33.144C400 51.4489 385.594 66.288 367.845 66.288ZM281.72 62.5856C295.738 50.9454 316.315 53.1511 327.676 67.5162V67.5165C339.038 81.8817 336.883 102.968 322.865 114.611L130.246 274.808C116.228 286.451 95.6518 284.254 84.2903 269.877C72.9288 255.515 75.0839 234.437 89.1017 222.786L281.72 62.5856Z"
      />
    </mask>
    <path
      d="M327.676 67.5162H329.676V66.8209L329.245 66.2756L327.676 67.5162ZM281.72 62.5856L280.443 61.0469L280.442 61.0479L281.72 62.5856ZM327.676 67.5165H325.676V68.2118L326.107 68.7572L327.676 67.5165ZM322.865 114.611L321.587 113.072L321.586 113.073L322.865 114.611ZM130.246 274.808L131.524 276.347L131.525 276.346L130.246 274.808ZM84.2903 269.877L85.8594 268.637L85.8588 268.637L84.2903 269.877ZM89.1017 222.786L90.3802 224.324L90.3806 224.323L89.1017 222.786ZM333.689 33.144C333.689 52.4959 348.922 68.288 367.845 68.288V64.288C351.245 64.288 337.689 50.402 337.689 33.144H333.689ZM367.845 -2C348.922 -2 333.689 13.7895 333.689 33.144H337.689C337.689 15.8836 351.245 2 367.845 2V-2ZM402 33.144C402 13.789 386.755 -2 367.845 -2V2C384.434 2 398 15.8841 398 33.144H402ZM367.845 68.288C386.755 68.288 402 52.4964 402 33.144H398C398 50.4015 384.434 64.288 367.845 64.288V68.288ZM329.245 66.2756C317.193 51.037 295.332 48.683 280.443 61.0469L282.998 64.1243C296.144 53.2078 315.437 55.2651 326.107 68.7569L329.245 66.2756ZM329.676 67.5165V67.5162H325.676V67.5165H329.676ZM324.143 116.149C339.003 103.807 341.274 81.4856 329.245 66.2758L326.107 68.7572C336.801 82.2777 334.762 102.129 321.587 113.072L324.143 116.149ZM131.525 276.346L324.144 116.148L321.586 113.073L128.967 273.27L131.525 276.346ZM82.7211 271.118C94.7739 286.369 116.635 288.713 131.524 276.347L128.968 273.27C115.821 284.189 96.5297 282.139 85.8594 268.637L82.7211 271.118ZM87.8233 221.248C72.9642 233.598 70.6917 255.911 82.7217 271.118L85.8588 268.637C75.1658 255.119 77.2035 235.276 90.3802 224.324L87.8233 221.248ZM280.442 61.0479L87.8229 221.248L90.3806 224.323L282.999 64.1233L280.442 61.0479Z"
      fill="#A0D773"
      mask="url(#path-3-inside-2_1087_951)"
    />
  </svg>
);
export default SVGComponent;