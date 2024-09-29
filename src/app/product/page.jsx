import NavigationMap  from "../components/NavigationMap"
import ProductPageImg  from "../components/ProductPageImg"
import ProductInfo  from "../components/ProductInfo"

const page = () => {
  return (
    <div className="width-container">
      <NavigationMap/>
      <div className="lg:flex justify-center gap-4">
      <ProductPageImg/>
      <ProductInfo/>
      </div>
      
    </div>
  )
}

export default page
