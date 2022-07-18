import React from 'react'
import { LazyLoading, CollectionItem } from '../../components'
import { Furniture } from '../../types'

import './styles.scss'

interface Props {
  data: Array<Readonly<Furniture>>
  loading: boolean
  error: string | undefined
}

const Collection: React.FC<Props> = ({ data, loading, error }) => {
  return (
    <div className="collection">
      {loading ? (
        <LazyLoading />
      ) : error ? (
        <div className="collection__error">
          <span className="collection__error__message">{error}</span>
        </div>
      ) : data.length === 0 ? (
        <div className="collection__not-found">
          <span className="collection__not-found__message">No furniture</span>
        </div>
      ) : (
        <div className="collection__grid">
          {data.map((c) => (
            <CollectionItem key={c._id} data={c} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Collection
