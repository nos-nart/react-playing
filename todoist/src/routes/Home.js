import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Home = () => {
  const theme = useTheme();

  return <div css={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }}>
    <svg css={{
      width: '12rem'
    }}
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      clipRule="evenodd"
      viewBox="0 0 220 200"
    >
      <path fill="none" d="M-.006 0h219.999v200.001H-.006z" />
      <path
        css={{
          fill: theme.svg_clr_4
        }}
        d="M162.21 13.579h-53.675c.317 10.064-.158 35.359-5.219 46.966h26.838l5.219 13.42 8.2-13.42h13.42c4.44-14.734 5.845-30.515 5.218-46.966z"
      />
      <path
        fill="#fae5e3"
        stroke="#fff"
        strokeWidth={1.63}
        d="M15739.5 990.429c7 1.038 14.3.248 21.4.334"
        transform="matrix(1.41211 -.0411 .02507 1.02017 -22130.416 -330.71)"
      />
      <path
        fill="#fae5e3"
        stroke="#fff"
        strokeWidth={1.63}
        d="M15739.5 990.429c7 1.038 14.3.248 21.4.334"
        transform="matrix(1.41237 -.02664 .01233 1.02048 -22121.716 -552.59)"
      />
      <path
        css={{
          stroke: theme.svg_clr_3,
          fill: theme.svg_clr_3
        }}
        strokeWidth={3.16}
        d="M2850 3514l-2.84-15.28h-90.15L2760 3514c4.6 26 8.19 52.15 0 80h90c7.33-24.72 4.55-52.12 0-80z"
        transform="matrix(.74894 0 -.13916 .65532 -1521.426 -2217.091)"
      />
      <path
        fill="#fff"
        fillOpacity={0.523}
        css={{
          stroke: theme.svg_clr_2
        }}
        strokeOpacity={0.523}
        strokeWidth={2.91}
        d="M16642.6 1390h104.4"
        transform="matrix(.53973 0 0 .80708 -8921.286 -1034.786)"
      />
      <path
        fill="none"
        css={{
          stroke: theme.svg_clr_4
        }}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeWidth={11.001}
        d="M69.884 104.461l10.068 14.175 26.33-20.877"
      />
      <path
        css={{
          stroke: theme.svg_clr_4,
          fill: theme.svg_clr_4
        }}
        strokeWidth={2.29}
        d="M2920 3494h-40c1.07 7.5 1.78 24.21 0 35h20l5 10 5-10h10c2.09-10.98 1.83-22.74 0-35z"
        transform="matrix(.92309 0 -.10257 .92309 -2295.535 -3136.48)"
      />
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth={2.02}
        d="M15739.5 990.429c7 1.038 14.3.248 21.4.334"
        transform="matrix(1.094 -.02973 .02372 .87278 -17231.816 -293.77)"
      />
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth={2.02}
        d="M15739.5 990.429c7 1.038 14.3.248 21.4.334"
        transform="matrix(1.094 -.02973 .02372 .87278 -17231.816 -288.35)"
      />
      <path
        fill="none"
        css={{
          stroke: theme.svg_clr_1
        }}
        strokeWidth={2.001}
        d="M173.805 125.69c-7.984-10.408-11.76-18.63-20.822-16.865-3.416.662-6.353 2.717-9.223 4.585-5.345 3.46-9.099 6.118-14.817 9.02"
      />
      <path
        fill="none"
        css={{
          stroke: theme.svg_clr_1
        }}
        strokeWidth={2.001}
        d="M146.835 122.803c2.051-1.129 4.906-2.897 7.327-2.815 5.618.19 10.72 13.272 14.626 19.21"
      />
      <g transform="matrix(.52087 -.01125 -.04444 .49114 -1173.716 -1592.335)">
        <path
          css={{
            fill: theme.svg_clr_5
          }}
          d="M2843.93 3578.3c-1.2-7.46-2.67-15.03-4.28-22.72l-93.39-1.58c1.74 34.73-11.28 61.21-6.26 100l24.83.29 5.79 24.06 14.67-22.24L2840 3654c4.69-17.12 6.24-32.97 6.26-51.88"
        />
        <clipPath id="prefix__a">
          <path d="M2843.93 3578.3c-1.2-7.46-2.67-15.03-4.28-22.72l-93.39-1.58c1.74 34.73-11.28 61.21-6.26 100l24.83.29 5.79 24.06 14.67-22.24L2840 3654c4.69-17.12 6.24-32.97 6.26-51.88" />
        </clipPath>
        <g clipPath="url(#prefix__a)">
          <path
            css={{
              fill: theme.svg_clr_4
            }}
            d="M2746.314 3555.284c39.97-11.686 38.183 41.64 90.841 37.586l9.086 10.609-6.251 50.532c-20.12.04-37.99 1.475-37.99 1.475s-23.193-44.843-67.198-41.411l-22.002-17.365"
          />
        </g>
        <path
          css={{
            stroke: theme.svg_clr_3,
            fill: theme.svg_clr_4
          }}
          strokeWidth={4.18}
          d="M2843.93 3578.3c-1.2-7.46-2.67-15.03-4.28-22.72l-93.39-1.58c1.74 34.73-11.28 61.21-6.26 100l24.83.29 5.79 24.06 14.67-22.24L2840 3654c4.69-17.12 6.24-32.97 6.26-51.88"
        />
      </g>
      <path
        css={{
          stroke: theme.svg_clr_3,
          fill: theme.svg_clr_4
        }}
        strokeWidth={1.75}
        d="M15739.5 990.429c7 1.038 14.3.248 21.4.334"
        transform="matrix(1.36056 -.03813 .02575 .87272 -21332.916 -119.4)"
      />
      <path
        css={{
          stroke: theme.svg_clr_3,
          fill: theme.svg_clr_4
        }}
        strokeWidth={1.75}
        d="M15739.5 990.429c7 1.038 14.3.248 21.4.334"
        transform="matrix(1.36056 -.03813 .02575 .87272 -21333.016 -113.99)"
      />
      <path
        fill="none"
        css={{
          stroke: theme.svg_clr_1
        }}
        strokeWidth={4.18}
        d="M2787.12 3554.8l-40.86-.8c.59 11.67-.5 22.42-2 33.01"
        transform="matrix(.52087 -.01125 -.04444 .49114 -1173.716 -1592.335)"
      />
      <path
        fill="none"
        css={{
          stroke: theme.svg_clr_1
        }}
        strokeWidth={2.001}
        d="M167.961 137.847c-2.004 1.515-5.197 1.528-7.504.968-6.953-1.691-12.376-6.783-18.85-9.52-6.482-2.735-11.763-1.129-7.874 2.72 6.723 6.672 31.788 26.795 48.296 34.03 4.27 1.87 13.444 5.987 20.454 9.141m-36.157-40.209c.867 1.588 2.46 4.359 3.234 5.535m-3.333-29.627c5.31-.93 7.907 2.588 10.371 6.392 1.454 2.244 4.307 6.944 5.56 9.005M175.571 111.22c2.2.123 4.77 1.654 6.03 3.432.76 1.074 4.955 8.964 7.354 12.94"
      />
      <path
        fill="none"
        css={{
          stroke: theme.svg_clr_1
        }}
        strokeWidth={2.61}
        d="M2991.47 3539.47c8.89.44 11.94 19.06 14.88 27.49 4.52 12.96 10.83 21.44 20.91 27.39"
        transform="matrix(.74198 -.12277 .12775 .77208 -2486.955 -2245.601)"
      />
      <path
        fill="none"
        css={{
          stroke: theme.svg_clr_1
        }}
        strokeWidth={2.001}
        d="M156.966 121.513c-2.109 4.14-2.262 9.052-3.493 13.482"
      />
      <path
        fill="none"
        css={{
          stroke: theme.svg_clr_1
        }}
        strokeWidth={3.15}
        d="M2920.23 3609.25c-1.75 3.41-2.91 7.1-4.83 10.41"
        transform="matrix(.57738 -.09553 .11114 .67175 -1925.324 -2018.38)"
      />
    </svg>
    <p css={{
      textAlign: 'center',
      margin: '2rem',
      lineHeight: '1.5rem',
      fontSize: '0.875rem'
    }}>
      Todoist clone is built using React(Hooks, Context)<br/>Firebase & React Testing library.
    </p>
  </div>
}

export default Home;
