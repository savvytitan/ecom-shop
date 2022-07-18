import React from 'react'
import { Button } from '../../components'

import { useSelector } from 'react-redux'
import { AppState } from '../../redux/reducers/root'

import './styles.scss'

interface Props {
  onCartClick: () => void
}

const NavBar: React.FC<Props> = ({ onCartClick }) => {
  const { cart } = useSelector((state: AppState) => state.checkout)

  return (
    <div className="navbar">
      <span className="navbar__title">Fülhaus Shop</span>
      <Button role="CART" className="navbar__cart" onClick={onCartClick}>
        {`CART (${cart.reduce((acc, c) => acc + c.count, 0)})`}
      </Button>
    </div>
  )
}

// Memoize this component
export default React.memo(NavBar)
