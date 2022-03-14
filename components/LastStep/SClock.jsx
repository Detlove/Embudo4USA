const SClock = (props) => (
  <svg
    viewBox='0 0 100 100'
    {...props}
  >
    <circle
      fill='none'
      strokeWidth={4}
      strokeMiterlimit={10}
      cx={50}
      cy={50}
      r={48}
    />
    <path
      fill='none'
      strokeLinecap='round'
      strokeWidth={4}
      strokeMiterlimit={10}
      d='m50 50 35 .5'
    >
      <animateTransform
        attributeName='transform'
        dur='10s'
        type='rotate'
        from='0 50 50'
        to='360 50 50'
        repeatCount='indefinite'
      />
    </path>
    <path
      fill='none'
      strokeLinecap='round'
      strokeWidth={4}
      strokeMiterlimit={10}
      d='m50 50-.5 24'
    >
      <animateTransform
        attributeName='transform'
        dur='30s'
        type='rotate'
        from='0 50 50'
        to='360 50 50'
        repeatCount='indefinite'
      />
    </path>
  </svg>
)

export default SClock
