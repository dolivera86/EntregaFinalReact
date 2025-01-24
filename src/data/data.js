const products = [
    {
        id: "CALZA1",
        name: "Rocco",
        price: 4500,
        stock: 3,
        image: ["/img/casual/casual1/casual1.jpg", "/img/casual/casual1/rocco2.jpg", "/img/casual/casual1/rocco3.jpg", "/img/casual/casual1/rocco4.jpg"],
        category: "casual",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
    {
        id: "CALZA2",
        name: "Austral",
        price: 4900,
        stock: 2,
        image: ["/img/casual/casual2/casual2.jpg", "/img/casual/casual2/austral2.jpg", "/img/casual/casual2/austral3.jpg", "/img/casual/casual2/austral4.jpg",],
        category: "casual",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
    {
        id: "CALZA3",
        name: "Pony",
        price: 3800,
        stock: 2,
        image: ["/img/casual/casual3/casual3.jpg", "/img/casual/casual3/pony2.jpg", "/img/casual/casual3/pony3.jpg", "/img/casual/casual3/pony4.jpg",],
        category: "casual",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
    {
        id: "CALZA4",
        name: "CountryFree",
        price: 3900,
        stock: 9,
        image: ["/img/casual/casual4/casual4.jpg", "/img/casual/casual4/country2.jpg", "/img/casual/casual4/country3.jpg", "/img/casual/casual4/country4.jpg",],
        category: "casual",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"

    },
    {
        id: "CALZA5", 
        name: "Paso Urbano", 
        price: 5600,
        stock: 9, 
        image: ["/img/formal/formal1/formal1.jpg", "/img/formal/formal1/dress2.jpg", "/img/formal/formal1/dress3.jpg",] ,
        category: "formal", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
    {
        id: "CALZA6",
        name: "CityBoys",
        price: 1500,
        stock: 4,
        image: ["/img/formal/formal2/formal2.jpg", "/img/formal/formal2/boys2.jpg", "/img/formal/formal2/boys3.jpg", "/img/formal/formal2/boys4.jpg",],
        category: "formal",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
    {
        id: "CALZA7",
        name: "Colibry",
        price: 3800,
        stock: 5,
        image: ["/img/formal/formal3/formal3.jpg", "/img/formal/formal3/guillermina2.jpg", "/img/formal/formal3/guillermina3.jpg", "/img/formal/formal3/guillermina4.jpg",],
        category: "formal",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
    {
        id: "CALZA8",
        name: "Vizzanery",
        price: 3900,
        stock: 7,
        image: ["/img/formal/formal4/formal4.jpg", "/img/formal/formal4/vizzano2.jpg", "/img/formal/formal4/vizzano3.jpg", "/img/formal/formal4/vizzano4.jpg",],
        category: "formal",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA9",
        name: "TimeLess",
        price: 3900,
        stock: 3,
        image: ["/img/urbano/urbano1/urbano1.jpg", "/img/urbano/urbano1/timeless2.jpg", "/img/urbano/urbano1/timeless3.jpg", "/img/urbano/urbano1/timeless4.jpg",],
        category: "urbano",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA10",
        name: "Matrial",
        price: 3900,
        stock: 3,
        image: ["/img/urbano/urbano2/urbano2.jpg", "/img/urbano/urbano2/matel2.jpg", "/img/urbano/urbano2/matel3.jpg", "/img/urbano/urbano2/matel4.jpg",],
        category: "urbano",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA11",
        name: "Dark Nees",
        price: 3900,
        stock: 4,
        image: ["/img/urbano/urbano3/urbano3.jpg", "/img/urbano/urbano3/darknes2.jpg", "/img/urbano/urbano3/darknes3.jpg", "/img/urbano/urbano3/darknes4.jpg",],
        category: "urbano",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA12",
        name: "Mitrix",
        price: 3900,
        stock: 5,
        image: ["/img/urbano/urbano4/urbano4.jpg", "/img/urbano/urbano4/matres2.jpg", "/img/urbano/urbano4/matres3.jpg", "/img/urbano/urbano4/matres4.jpg",],
        category: "urbano",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA13",
        name: "TaylorSW",
        price: 3900,
        stock: 1,
        image: ["/img/zapatilla/zapatilla1/zapatilla1.jpg", "/img/zapatilla/zapatilla1/taylor2.jpg", "/img/zapatilla/zapatilla1/taylor3.jpg", "/img/zapatilla/zapatilla1/taylor4.jpg", ],
        category: "deportivo",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA14",
        name: "Beneicio 76",
        price: 3900,
        stock: 8,
        image: ["/img/zapatilla/zapatilla2/zapatilla2.jpg", "/img/zapatilla/zapatilla2/momi2.jpg", "/img/zapatilla/zapatilla2/momi3.jpg", "/img/zapatilla/zapatilla2/momi4.jpg",],
        category: "deportivo",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA15",
        name: "Dialnet",
        price: 3900,
        stock: 6,
        image: ["/img/zapatilla/zapatilla3/zapatilla3.jpg", "/img/zapatilla/zapatilla3/pegas2.jpg", "/img/zapatilla/zapatilla3/pegas3.jpg", "/img/zapatilla/zapatilla3/pegas4.jpg",],
        category: "deportivo",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA16",
        name: "Grey-ON",
        price: 3900,
        stock: 3,
        image: ["/img/zapatilla/zapatilla4/zapatilla4.jpg", "/img/zapatilla/zapatilla4/grey2.jpg", "/img/zapatilla/zapatilla4/grey3.jpg", "/img/zapatilla/zapatilla4/grey4.jpg",],
        category: "deportivo",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA17",
        name: "NewTira",
        price: 3900,
        stock: 4,
        image: ["/img/verano/verano1/verano1.jpg", "/img/verano/verano1/tira2.jpg", "/img/verano/verano1/tira3.jpg", "/img/verano/verano1/tira4.jpg",],
        category: "verano",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA18",
        name: "Chevere",
        price: 3900,
        stock: 2,
        image: ["/img/verano/verano2/verano2.jpg", "/img/verano/verano2/tropi2.jpg", "/img/verano/verano2/tropi3.jpg", "/img/verano/verano2/tropi4.jpg",],
        category: "verano",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
    },
	{
        id: "CALZA19",
        name: "Mekanani",
        price: 3900,
        stock: 5,
        image: ["/img/verano/verano3/verano3.jpg", "/img/verano/verano3/flataf2.jpg", "/img/verano/verano3/flataf3.jpg", "/img/verano/verano3/flataf4.jpg",],
        category: "verano",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt dolor voluptas sapiente? Possimus, est doloribus voluptates nisi dolores alias?"
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