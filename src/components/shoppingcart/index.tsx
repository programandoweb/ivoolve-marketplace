'use client';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity } from "@/store/Slices/shoppingCartSlice";
import ShoppinCartItem from "./ShoppinCartItem";
import {products} from '../../utils/data';
import Totalizador from "./Totalizador";

const ShoppingcartComponent = () => {
    // Acceder al estado del carrito de compras
    const quantities:any = useSelector((state: any) => state.shoppingCart.quantities);

    // Obtener la función dispatch para enviar acciones al store
    const dispatch = useDispatch();

    // Cargar favoritos y cantidades desde localStorage al cargar el componente
    useEffect(() => {
        const storedQuantities = localStorage.getItem("quantities");
        if (storedQuantities) {
            const parsedQuantities = JSON.parse(storedQuantities);
            dispatch(setQuantity(parsedQuantities));
        }
    }, [dispatch]);

    return (
        <div className="w-full mt-4">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4">
                    <h2 className="text-md md:text-2xl font-bold uppercase">
                        Carro de compras
                    </h2>
                </div>
                <div className="col-span-4 md:col-span-3">
                    {   
                        Object.entries(quantities).map((product, key) => {
                            return <ShoppinCartItem product={products.find(search=>search.id===parseInt(product[0]))} key={key}/>
                        })
                    }
                </div>
                <div className="col-span-4 md:col-span-1">
                    <Totalizador/>
                </div>
            </div>
        </div>
    );
};

export default ShoppingcartComponent;
