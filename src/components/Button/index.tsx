import React from 'react'
import classNames from 'classnames'
import './styles.scss'

type ROLE = 'ADD_TO_CART' | 'CART' | 'CHECKOUT' | 'SHOP'

interface Props {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  role: ROLE
}

// Customized for common use cases
const Button: React.FC<Partial<Props>> = ({ className, children, onClick, role }) => {
  return (
    <button
      className={classNames(
        role === 'ADD_TO_CART'
          ? 'add-to-cart-button'
          : role === 'CHECKOUT'
          ? 'checkout-button'
          : 'default-button',
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

// Memoize this component
export default React.memo(Button)
