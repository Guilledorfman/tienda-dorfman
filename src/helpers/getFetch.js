const productos = [
    {
        name: 'Producto 1',
        price: 45,
        photo:'https://dummyimage.com/200x300/2939b0/f2dc35.jpg',
        description: 'Descripción del Producto 1',
        stock: 10,
        id: 1
    },{
        name: 'Producto 2',
        price: 1160,
        photo:'https://dummyimage.com/200x300/442233/f2dc35.jpg',
        description: 'Descripción del Producto 2',
        stock: 5,
        id: 2
    },{
        name: 'Producto 3',
        price: 99,
        photo:'https://dummyimage.com/200x300/aa55cc/f2dc35.jpg',
        description: 'Descripción del Producto 3',
        stock: 53,
        id: 3
    },{
        name: 'Producto 4',
        price: 40,
        photo:'https://dummyimage.com/200x300/995522/f2dc35.jpg',
        description: 'Descripción del Producto 4',
        stock: 1,
        id: 4
    },{
        name: 'Producto 5',
        price: 660,
        photo:'https://dummyimage.com/200x300/335555/f2dc35.jpg',
        description: 'Descripción del Producto 5',
        stock: 0,
        id: 5
    },{
        name: 'Producto 6',
        price: 120,
        photo:'https://dummyimage.com/200x300/77aa25/f2dc35.jpg',
        description: 'Descripción del Producto 6',
        stock: 3,
        id: 6
    },{
        name: 'Producto 7',
        price: 10,
        photo:'https://dummyimage.com/200x300/227755/f2dc35.jpg',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 7
    }
]

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    },2000)
})
