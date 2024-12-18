const products = [
    {
        id: "CALZA1",
        name: "Rocco",
        price: 4500,
        image: "/img/casual1.jpg",
        category: "casual"
    },
    {
        id: "CALZA2",
        name: "Venecia",
        price: 4900,
        image: "/img/casual2.jpg",
        category: "casual"
    },
    {
        id: "CALZA3",
        name: "Raza 86",
        price: 3800,
        image: "/img/casual3.jpg",
        category: "urbano"
    },
    {
        id: "CALZA4",
        name: "Rocía",
        price: 3900,
        image: "/img/casual4.jpg",
        category: "urbano"

    },
    {
        id: "CALZA5", 
        name: "Paso Urbano", 
        price: 5600, 
        image: "/img/casual5.jpg", 
        category: "formal", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
    {
        id: "CALZA6",
        name: "ZapaChic",
        price: 1500,
        image: "/img/casual6.jpg",
        category: "formal"
    },
    {
        id: "CALZA7",
        name: "Raza 86",
        price: 3800,
        image: "/img/casual3.jpg",
        category: "deportivo"
    },
    {
        id: "CALZA8",
        name: "Rocía",
        price: 3900,
        image: "/img/casual4.jpg",
        category: "deportivo"
    },
]

const productsFuture = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}

export { productsFuture }