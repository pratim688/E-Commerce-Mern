import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {
  const [uploadProduct , setUploadProduct] = useState(false);
  return (
    <div>
      <div>
        <h2>All Products</h2>
        <button onClick={()=>setUploadProduct(true)}>Upload Product</button>
      </div>

      {/* upload product components */}
      {uploadProduct &&(
        <UploadProduct onClose={()=>setUploadProduct(false)}/>
      )}
      
    </div>
  )
}

export default AllProducts