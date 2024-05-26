'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { updateQuantity , updateFavorites, setQuantity} from "@/store/Slices/shoppingCartSlice";
import { useDispatch , useSelector} from "react-redux";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface ProductsItemProps {
    product: any;
}

let st:any={}
let quantity:any={}
let dispatch:any={}

const ProductsItem: React.FC<ProductsItemProps> = ({ product }) => {

    const [favorites, setFavorites] = useState<{ [id: number]: boolean }>({});

    // Acceder al estado del carrito de compras
    const quantities = useSelector((state:any) => state.shoppingCart.quantities);

    // Obtener la función dispatch para enviar acciones al store
    dispatch = useDispatch();

    // Funciones para aumentar y disminuir la cantidad
    const handleIncreaseQuantity = () => {
        const result                    =   (quantities[product.id] || 0) + 1
        quantity  =   {...quantity,[product.id]:result}
        dispatch(updateQuantity({ id: product.id, quantity: (quantities[product.id] || 0) + 1 }));
        localStorage.setItem("quantities", JSON.stringify(quantity));        
    };

    const handleDecreaseQuantity = () => {
        const result                    =   Math.max((quantities[product.id] || 0) - 1, 0);
        quantity                        =   {...quantity,[product.id]:result}
        dispatch(updateQuantity({ id: product.id, quantity: Math.max((quantities[product.id] || 0) - 1, 0) }));
        localStorage.setItem("quantities", JSON.stringify(quantity));        
    };

    // Cargar favoritos desde localStorage al cargar el componente
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            st      =   JSON.parse(storedFavorites);
            dispatch(updateFavorites(st));
            setFavorites(JSON.parse(storedFavorites));
        }
        const storedQuantities = localStorage.getItem("quantities");
        if (storedQuantities) {
            quantity      =   JSON.parse(storedQuantities);
            dispatch(setQuantity(quantity));
            setFavorites(JSON.parse(storedQuantities));
        }
    }, []);

    // Guardar favoritos en localStorage cada vez que cambian
    useEffect(() => {
        st  =   {...st,...favorites}        
        localStorage.setItem("favorites", JSON.stringify(st));
    }, [favorites]);

    // Función para agregar o eliminar un producto de los favoritos
    const handleToggleFavorite = () => {
        setFavorites((prevFavorites) => {
            const updatedFavorites          =   { ...prevFavorites };
            updatedFavorites[product.id]    =   !updatedFavorites[product.id];
            return updatedFavorites;
        });
    };

    // Verificar si el producto está marcado como favorito
    const isFavorite = favorites[product.id];

    return (
        <div className="border border-gray-200 rounded-md shadow-md hover:shadow-lg">
            <div className="w-full h-64 md:h-[50vh] overflow-hidden relative rounded-t-md">
                <Link href={usePathname()+"/producto/"+product.slug}>
                    <Image
                        alt={String(process.env.NEXT_PUBLIC_NAME + " " + product.name)}
                        src={product.image}
                        className="rounded-t-md object-cover"
                        width={400}
                        height={600}
                    />
                </Link>
                {/* Botón de favoritos */}
                <div className="absolute top-3 right-3">
                    <button onClick={handleToggleFavorite}>
                        {isFavorite ? <IoMdHeart className="h-8 w-8"/> : <IoMdHeartEmpty className="h-8 w-8"/>}
                    </button>
                </div>
                <div className="absolute bottom-3 right-3">
                    <div className="flex items-center mt-3 w-full">
                        <button onClick={handleDecreaseQuantity} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l">
                            -
                        </button>
                        <div className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
                            {quantities[product.id] || 0}
                        </div>
                        <button onClick={handleIncreaseQuantity} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
                <div className="text-sm md:text-lg font-semibold">{product.name}</div>
                <div className="font-bold">${product.price}</div>
            </div>
            <div className="px-4 mb-4">
                <p className="text-xs md:text-md text-gray-600">{product.excerpt}</p>
            </div>            
        </div>
    );
};

export default ProductsItem;

