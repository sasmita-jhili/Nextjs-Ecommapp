import { useRouter } from 'next/router'
import React from 'react'

const ProductScreen = () => {

    const router = useRouter()
    const productId = router.query.pid

  return (
    <div>
      ProductScreen {productId}
    </div>
  )
}

export default ProductScreen
