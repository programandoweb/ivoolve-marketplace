const getRandomImageURL = (id:any, gender:any) => {
    let imageUrl;
    if (gender === 'mujer') {
        imageUrl = `/img/store/outfit/programandoweb-outfit-${id}.jpg`; // Genera una URL de imagen para mujer
    } else {
        imageUrl = `/img/store/outfit/programandoweb-outfit-${id}.jpg`; // Genera una URL de imagen para caballero
    }
    return imageUrl;
};

export const tendencia:any = [
    {
        id: 1,
        name: "Camisa de algodón",
        content: "Descripción del producto...",
        excerpt: "Camisa elegante y cómoda.",
        price: 100,
        slug: "camisa-de-algodon",
        image: getRandomImageURL(1, 'mujer'),
        cover: getRandomImageURL(1, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 2,
        name: "Pantalones vaqueros",
        content: "Descripción del producto...",
        excerpt: "Pantalones modernos y duraderos.",
        price: 120,
        slug: "pantalones-vaqueros",
        image: getRandomImageURL(2, 'hombre'),
        cover: getRandomImageURL(2, 'hombre'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 3,
        name: "Zapatos de cuero",
        content: "Descripción del producto...",
        excerpt: "Zapatos elegantes y cómodos.",
        price: 150,
        slug: "zapatos-de-cuero",
        image: getRandomImageURL(3, 'mujer'),
        cover: getRandomImageURL(3, 'mujer'),
        featured: true,
        store_category_id: 1
    },
    {
        id: 4,
        name: "Sombrero de paja",
        content: "Descripción del producto...",
        excerpt: "Sombrero ligero y fresco para el verano.",
        price: 50,
        slug: "sombrero-de-paja",
        image: getRandomImageURL(4, 'mujer'),
        cover: getRandomImageURL(4, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 5,
        name: "Reloj de pulsera",
        content: "Descripción del producto...",
        excerpt: "Reloj elegante y moderno.",
        price: 200,
        slug: "reloj-de-pulsera",
        image: getRandomImageURL(5, 'hombre'),
        cover: getRandomImageURL(5, 'hombre'),
        featured: true,
        store_category_id: 1
    },
]


export const products:any = [
    {
        id: 1,
        name: "Camisa de algodón",
        content: "Descripción del producto...",
        excerpt: "Camisa elegante y cómoda.",
        price: 100,
        slug: "camisa-de-algodon",
        image: getRandomImageURL(1, 'mujer'),
        cover: getRandomImageURL(1, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 2,
        name: "Pantalones vaqueros",
        content: "Descripción del producto...",
        excerpt: "Pantalones modernos y duraderos.",
        price: 120,
        slug: "pantalones-vaqueros",
        image: getRandomImageURL(2, 'hombre'),
        cover: getRandomImageURL(2, 'hombre'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 3,
        name: "Zapatos de cuero",
        content: "Descripción del producto...",
        excerpt: "Zapatos elegantes y cómodos.",
        price: 150,
        slug: "zapatos-de-cuero",
        image: getRandomImageURL(3, 'mujer'),
        cover: getRandomImageURL(3, 'mujer'),
        featured: true,
        store_category_id: 1
    },
    {
        id: 4,
        name: "Sombrero de paja",
        content: "Descripción del producto...",
        excerpt: "Sombrero ligero y fresco para el verano.",
        price: 50,
        slug: "sombrero-de-paja",
        image: getRandomImageURL(4, 'mujer'),
        cover: getRandomImageURL(4, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 5,
        name: "Reloj de pulsera",
        content: "Descripción del producto...",
        excerpt: "Reloj elegante y moderno.",
        price: 200,
        slug: "reloj-de-pulsera",
        image: getRandomImageURL(5, 'hombre'),
        cover: getRandomImageURL(5, 'hombre'),
        featured: true,
        store_category_id: 1
    },
    {
        id: 6,
        name: "Mochila de viaje",
        content: "Descripción del producto...",
        excerpt: "Mochila espaciosa y resistente.",
        price: 80,
        slug: "mochila-de-viaje",
        image: getRandomImageURL(6, 'hombre'),
        cover: getRandomImageURL(6, 'hombre'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 7,
        name: "Chaqueta de cuero",
        content: "Descripción del producto...",
        excerpt: "Chaqueta clásica y resistente.",
        price: 180,
        slug: "chaqueta-de-cuero",
        image: getRandomImageURL(7, 'hombre'),
        cover: getRandomImageURL(7, 'hombre'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 8,
        name: "Botines de ante",
        content: "Descripción del producto...",
        excerpt: "Botines cómodos y versátiles.",
        price: 90,
        slug: "botines-de-ante",
        image: getRandomImageURL(8, 'hombre'),
        cover: getRandomImageURL(8, 'hombre'),
        featured: true,
        store_category_id: 1
    },
    {
        id: 9,
        name: "Gafas de sol",
        content: "Descripción del producto...",
        excerpt: "Gafas de sol modernas y elegantes.",
        price: 120,
        slug: "gafas-de-sol",
        image: getRandomImageURL(9, 'mujer'),
        cover: getRandomImageURL(9, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 10,
        name: "Bufanda de lana",
        content: "Descripción del producto...",
        excerpt: "Bufanda suave y abrigada para el invierno.",
        price: 30,
        slug: "bufanda-de-lana",
        image: getRandomImageURL(10, 'mujer'),
        cover: getRandomImageURL(10, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 11,
        name: "Mesa de madera",
        content: "Descripción del producto...",
        excerpt: "Mesa robusta y elegante para el hogar.",
        price: 250,
        slug: "mesa-de-madera",
        image: getRandomImageURL(11, 'mujer'),
        cover: getRandomImageURL(11, 'mujer'),
        featured: true,
        store_category_id: 2
    },
    {
        id: 12,
        name: "Silla de comedor",
        content: "Descripción del producto...",
        excerpt: "Silla cómoda y resistente para la cocina o el comedor.",
        price: 100,
        slug: "silla-de-comedor",
        image: getRandomImageURL(12, 'mujer'),
        cover: getRandomImageURL(12, 'mujer'),
        featured: false,
        store_category_id: 2
    }
];




export const hombre:any = [
    {
        id: 1,
        name: "Camisa de algodón",
        content: "Camisa de algodón de alta calidad, perfecta para el uso diario.",
        excerpt: "Camisa elegante y cómoda.",
        price: 100,
        slug: "camisa-de-algodon",
        image: getRandomImageURL(1, 'hombre'),
        cover: getRandomImageURL(1, 'hombre'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 2,
        name: "Pantalones vaqueros",
        content: "Pantalones vaqueros modernos y duraderos, ideales para cualquier ocasión.",
        excerpt: "Pantalones modernos y duraderos.",
        price: 120,
        slug: "pantalones-vaqueros",
        image: getRandomImageURL(2, 'hombre'),
        cover: getRandomImageURL(2, 'hombre'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 3,
        name: "Zapatos de cuero",
        content: "Zapatos de cuero genuino, elegantes y cómodos para el uso diario.",
        excerpt: "Zapatos elegantes y cómodos.",
        price: 150,
        slug: "zapatos-de-cuero",
        image: getRandomImageURL(3, 'hombre'),
        cover: getRandomImageURL(3, 'hombre'),
        featured: true,
        store_category_id: 1
    },
    {
        id: 4,
        name: "Chaqueta de cuero",
        content: "Chaqueta de cuero clásico, resistente y perfecta para el clima frío.",
        excerpt: "Chaqueta clásica y resistente.",
        price: 180,
        slug: "chaqueta-de-cuero",
        image: getRandomImageURL(4, 'hombre'),
        cover: getRandomImageURL(4, 'hombre'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 5,
        name: "Botines de ante",
        content: "Botines de ante cómodos y versátiles, perfectos para cualquier ocasión.",
        excerpt: "Botines cómodos y versátiles.",
        price: 90,
        slug: "botines-de-ante",
        image: getRandomImageURL(5, 'hombre'),
        cover: getRandomImageURL(5, 'hombre'),
        featured: true,
        store_category_id: 1
    },
    {
        id: 6,
        name: "Reloj de pulsera",
        content: "Reloj de pulsera elegante y moderno, ideal para cualquier atuendo.",
        excerpt: "Reloj elegante y moderno.",
        price: 200,
        slug: "reloj-de-pulsera",
        image: getRandomImageURL(6, 'hombre'),
        cover: getRandomImageURL(6, 'hombre'),
        featured: true,
        store_category_id: 1
    }
];



export const mujer:any = [
    {
        id: 1,
        name: "Blusa de seda",
        content: "Blusa de seda de alta calidad, perfecta para ocasiones especiales.",
        excerpt: "Blusa elegante y suave.",
        price: 80,
        slug: "blusa-de-seda",
        image: getRandomImageURL(1, 'mujer'),
        cover: getRandomImageURL(1, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 2,
        name: "Falda plisada",
        content: "Falda plisada moderna y cómoda, ideal para el uso diario o eventos formales.",
        excerpt: "Falda moderna y cómoda.",
        price: 60,
        slug: "falda-plisada",
        image: getRandomImageURL(2, 'mujer'),
        cover: getRandomImageURL(2, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 3,
        name: "Vestido de verano",
        content: "Vestido de verano ligero y fresco, perfecto para los días cálidos.",
        excerpt: "Vestido fresco y cómodo.",
        price: 90,
        slug: "vestido-de-verano",
        image: getRandomImageURL(3, 'mujer'),
        cover: getRandomImageURL(3, 'mujer'),
        featured: true,
        store_category_id: 1
    },
    {
        id: 4,
        name: "Chaqueta de mezclilla",
        content: "Chaqueta de mezclilla clásica, resistente y versátil para cualquier ocasión.",
        excerpt: "Chaqueta clásica y resistente.",
        price: 110,
        slug: "chaqueta-de-mezclilla",
        image: getRandomImageURL(4, 'mujer'),
        cover: getRandomImageURL(4, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 5,
        name: "Bolso de mano",
        content: "Bolso de mano elegante y espacioso, perfecto para llevar todos tus esenciales.",
        excerpt: "Bolso elegante y espacioso.",
        price: 70,
        slug: "bolso-de-mano",
        image: getRandomImageURL(5, 'mujer'),
        cover: getRandomImageURL(5, 'mujer'),
        featured: true,
        store_category_id: 1
    },
    {
        id: 6,
        name: "Zapatillas deportivas",
        content: "Zapatillas deportivas cómodas y duraderas, ideales para actividades físicas.",
        excerpt: "Zapatillas cómodas y duraderas.",
        price: 100,
        slug: "zapatillas-deportivas",
        image: getRandomImageURL(6, 'mujer'),
        cover: getRandomImageURL(6, 'mujer'),
        featured: true,
        store_category_id: 1
    }
];

export const descuentos:any = [
    {
        id: 1,
        name: "Blusa de seda",
        content: "Blusa de seda de alta calidad, perfecta para ocasiones especiales.",
        excerpt: "Blusa elegante y suave.",
        price: 80,
        slug: "blusa-de-seda",
        image: getRandomImageURL(1, 'mujer'),
        cover: getRandomImageURL(1, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 2,
        name: "Falda plisada",
        content: "Falda plisada moderna y cómoda, ideal para el uso diario o eventos formales.",
        excerpt: "Falda moderna y cómoda.",
        price: 60,
        slug: "falda-plisada",
        image: getRandomImageURL(2, 'mujer'),
        cover: getRandomImageURL(2, 'mujer'),
        featured: false,
        store_category_id: 1
    },
    {
        id: 3,
        name: "Vestido de verano",
        content: "Vestido de verano ligero y fresco, perfecto para los días cálidos.",
        excerpt: "Vestido fresco y cómodo.",
        price: 90,
        slug: "vestido-de-verano",
        image: getRandomImageURL(3, 'mujer'),
        cover: getRandomImageURL(3, 'mujer'),
        featured: true,
        store_category_id: 1
    },    
];

const return_data:any={
    products,
    hombre,
    mujer,
    tendencia,
    descuentos   
}

export default return_data;