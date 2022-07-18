import React from 'react'
import { Button } from '../../components'
import './styles.scss'

interface Props {
  brand: string
  imgSrc: string
}

const Shop: React.FC<Props> = ({ brand, imgSrc }) => {
  return (
    <div className="shop">
      <div className="shop__image" style={{ backgroundImage: `url(${imgSrc})` }} />
      <div className="shop__brand">
        <div className="shop__brand__name">{brand}</div>
        <Button role="SHOP">SHOP</Button>
      </div>
    </div>
  )
}

// Memoize this component
export default React.memo(Shop)
