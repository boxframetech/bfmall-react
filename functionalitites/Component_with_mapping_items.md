# WE CREATE A COMPONENT AND HAVE OUR DATA IN A FORM OF JSON
    eg: const products = [
        {
            name:"Ransben",
            age:34,
            class:"Physics"
        },
         {
            name:"Jerry",
            age:34,
            class:"Flight Academy"
        }
    ]


    # Creating and Looping in our react component

    import React from 'react'
    import products from '../products'

    const HomeScreen = () => {
        return (
            <>
                <h3>Products</h3>
                    { products.map(product => (
                        {product.name}
                    ))}
            </>
        )
    }

    export default HomeScreen
