import * as React from 'react'

const SvgClose: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={26}
      height={29}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <path fill="url(#close_svg__pattern0)" d="M0 0h26v29H0z" />
      <defs>
        <pattern
          id="close_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <use xlinkHref="#close_svg__image0" transform="matrix(.03486 0 0 .03125 -.058 0)" />
        </pattern>
        <image
          id="close_svg__image0"
          width={32}
          height={32}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAtklEQVRYhe2WUQrEIAxEkz2SR+qBe6Nl+uNCoSbqpBgWDPiXyXu2xaoAJLM+qfQtsAV6AqpaVLWww4fyAJpLRIqIfOs6rD4nf9zyxewbEMCsxA0OWsAY1JWYzTC7MQdSwuQjfQxm4MMCPQALnxKwQBH4tIAhQcMpgYYEDQeQfxT/1ytowNd9hB4oIhGGRyVegUckXoOzGW9Q7u9YFl1ItDY363edAnCaTU6N5F2BFZV+FG+BLXABADwJBAkRkoUAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  )
}

export default SvgClose
