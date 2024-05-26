'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { updateQuantity, updateFavorites, setQuantity, removeProduct } from "@/store/Slices/shoppingCartSlice"; // Asegúrate de tener la acción removeProduct
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface ProductsItemProps {
    product: any;
}

let st: any = {}
let quantity: any   =   {}
let dispatch: any   =   {}
let remove:any      =   false;

const ShoppinCartItem: React.FC<ProductsItemProps> = ({ product }) => {
    const [favorites, setFavorites] =   useState<{ [id: number]: boolean }>({});

    // Acceder al estado del carrito de compras
    const quantities = useSelector((state: any) => state.shoppingCart.quantities);

    // Obtener la función dispatch para enviar acciones al store
    dispatch = useDispatch();

    // Funciones para aumentar y disminuir la cantidad
    const handleIncreaseQuantity = () => {
        const result = (quantities[product.id] || 0) + 1
        quantity = { ...quantity, [product.id]: result }
        dispatch(updateQuantity({ id: product.id, quantity: (quantities[product.id] || 0) + 1 }));
        localStorage.setItem("quantities", JSON.stringify(quantity));
    };

    const handleDecreaseQuantity = () => {
        const result = Math.max((quantities[product.id] || 0) - 1, 0);
        quantity = { ...quantity, [product.id]: result }
        dispatch(updateQuantity({ id: product.id, quantity: Math.max((quantities[product.id] || 0) - 1, 0) }));
        localStorage.setItem("quantities", JSON.stringify(quantity));
    };

    // Función para eliminar el producto
    const handleRemoveProduct = () => {
        remove=true
        // Elimina el producto del estado de Redux
        dispatch(removeProduct({ id: product.id }));
        
    };

    useEffect(() => {
        if(remove&&quantities){
            remove=false;
            localStorage.setItem("quantities", JSON.stringify(quantities));
        }
    },[quantities])

    // Cargar favoritos desde localStorage al cargar el componente
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            st = JSON.parse(storedFavorites);
            dispatch(updateFavorites(st));
            setFavorites(JSON.parse(storedFavorites));
        }
        const storedQuantities = localStorage.getItem("quantities");
        if (storedQuantities) {
            quantity = JSON.parse(storedQuantities);
            dispatch(setQuantity(quantity));
        }
    }, []);

    // Guardar favoritos en localStorage cada vez que cambian
    useEffect(() => {
        st = { ...st, ...favorites }
        localStorage.setItem("favorites", JSON.stringify(st));
    }, [favorites]);

    return (
        <div className=" bg-white w-[100%] border border-gray-200 rounded-md shadow-md hover:shadow-lg pr-4 mb-3">
            <div className=" flex flex-col md:flex-row ">
                <div className="md:w-1/5 flex-shrink-0">
                    <Link href={`${usePathname()}/producto/${product.slug}`}>
                        <Image
                            alt={`${process.env.NEXT_PUBLIC_NAME} ${product.name}`}
                            src={product.image}
                            className="rounded-md object-cover w-full h-full"
                            width={180}
                            height={400}
                        />
                    </Link>
                </div>
                <div className="md:w-3/5 p-4">
                    <div className="flex flex-col">
                        <div className="text-sm md:text-lg font-semibold">{product.name}</div>
                        <p className="text-xs md:text-md text-gray-600">{product.excerpt}</p>
                    </div>
                </div>
                <div className="md:w-1/5 flex flex-col items-end pt-4">
                    <div className="flex items-center">
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
                    <div className="font-bold text-2xl mb-2 pt-2">
                        ${product.price * (quantities[product.id] || 0)}
                    </div>
                    <button onClick={handleRemoveProduct} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2">
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppinCartItem;
