const PlayBtn = (props) => (
  <svg
    {...props}
    viewBox='0 0 111 112'
    fill='none'
  >
    <g clipPath='url(#a)'>
      <circle cx={54.692} cy={55.144} r={40.304} fill='#EDEDED' />
      <path
        d='M55.483 9.834a46.1 46.1 0 1 0 0 92.2 46.1 46.1 0 0 0 0-92.2Zm-9.22 66.845v-41.49l27.66 20.745-27.66 20.745Z'
        fill='#FF6363'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path
          fill='#fff'
          transform='translate(.163 .614)'
          d='M0 0h110.64v110.64H0z'
        />
      </clipPath>
    </defs>
  </svg>
)

export default PlayBtn
