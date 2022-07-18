import React from 'react'
import './styles.scss'

const LazyLoading: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading__spinner" />
    </div>
  )
}

// Memoize this static component
export default React.memo(LazyLoading)
