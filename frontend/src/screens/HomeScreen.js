import React, {useState, useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import SingleProduct from '../components/SingleProduct'
import axios from 'axios'

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
       const fetchProducts = async() => {

           const {data} = await axios.get('/api/products')
           setProducts(data)
       }
       fetchProducts()

    },[])

    return (
        <>
            <h3>Products</h3>
            <Row>
                {products.map((product) =>
                 <Col key={product._id} sm={6} md={4} lg={4}>
                    <SingleProduct product={product} />
                 </Col>
                )}
            </Row>
        </>
    )
}

export default HomeScreen
