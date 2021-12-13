const productos = [
    {
        name: 'volca keys',
        type:"",
        price: 45,
        photo:'https://cdn.korg.com/es/products/upload/ec4b78bc121b7df43a942d2ad77f42a5_pc.png',
        description: 'Descripción del Producto 1',
        stock: 10,
        id: 1
    },{
        name: 'Volca Keys',
        type:"",
        price: 1160,
        photo:'https://cdn.korg.com/es/products/upload/843f90ac26b93b84e9ff9f27445deed2_pc.png',
        description: 'Descripción del Producto 2',
        stock: 5,
        id: 2
    },{
        name: 'Volca Bass',
        type:"",
        price: 99,
        photo:'https://cdn.korg.com/es/products/upload/b40a40caebd1992649538df2c36b7c97_pc.png',
        description: 'Descripción del Producto 3',
        stock: 53,
        id: 3
    },{
        name: 'Volca Beats',
        type:"",
        price: 40,
        photo:'https://cdn.korg.com/es/products/upload/0072f53e964de9fe413c8dbc587fec97_pc.png',
        description: 'Descripción del Producto 4',
        stock: 1,
        id: 4
    },{
        name: 'Volca Kick',
        type:"",
        price: 660,
        photo:'https://cdn.korg.com/es/products/upload/f00edfcce3e226240a3772f9354593c9_pc.png',
        description: 'Descripción del Producto 5',
        stock: 0,
        id: 5
    },{
        name: 'Volca FM',
        type:"",
        price: 120,
        photo:'https://cdn.korg.com/es/products/upload/b3773bb133b4062103d9807e45bb300c_pc.png',
        description: 'Descripción del Producto 6',
        stock: 3,
        id: 6
    },{
        name: 'Volca mix',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/832759cd3522ddb191ff18457bb19db9_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 7
    },{
        name: 'Volca Drum',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/7d9e95d93948da4072dadc31fd718325_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 8
    },{
        name: 'Volca Modular',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/237a4a7dd27e2e70ba9045981d645755_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 9
    }
    ,{
        name: 'MS-20 mini',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/3fe56f5a7c7a7e7d10c970eb4aa6f32c_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 10
    }
    ,{
        name: 'Monotron DELAY',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/7582573dc0e1f0dc3b6b42d23febc52b_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 11
    }
    ,{
        name: 'Monotron DUO',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/9212263563d1775d61e954e7c59915b8_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 12
    }
    ,{
        name: 'Monologue',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/6316544e05f1c1fa7c61b12a0ee552f3_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 13
    }
    ,{
        name: 'Minilogue',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/aeb062af89e71aaa0f4c67aa3b9e2b0e_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 14
    }
    ,{
        name: 'Minilogue xd',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/baecaf881b2d5620a22801ccdd1df297_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 15
    }
    ,{
        name: 'microKORG',
        type:"SYNTHESIZER/VOCODER",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/8e509f6017cffae8ac5fd3cd981b6207_pc.jpg',
        description: 'KORG MICROKORG MK1 El nuevo microKORG es un sintetizador de tamaño compacto que proporciona todo el disfrute de la auténtica síntesis. Debajo de su pequeño exterior se esconde un sintetizador increíblemente potente. Es divertido de tocar, y ofrece un sonido y funcionalidad que satisface a todos, desde el principiante al profesional. Bienvenido a un mundo de creatividad ilimitada',
        stock: 16,
        id: 16
    }
    ,{
        name: 'microKORG S',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/7044a9cd8cdc7ac1aadea5c906e99c15_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 17
    }
    ,{
        name: 'microKORG XL +',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/e71e8f6f96a0a2668ad5393414b24761_pc.jpg',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 18
    }
    ,{
        name: 'kingKORG',
        type:"",
        price: 10,
        photo:'https://cdn.korg.com/es/products/upload/61a164249f61cc0c9da82d1ddaa388fd_pc.png',
        description: 'Descripción del Producto 7',
        stock: 16,
        id: 19
    }
]

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    },2000)
})
