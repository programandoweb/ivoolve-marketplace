import Products from "@/components/products";
import React from "react";
import return_data from "@/utils/data";

interface TiendaProps {
    params:object;
    title: string;
    dataset: any[];  // Si tienes una interfaz específica para el producto, reemplaza `any` con esa interfaz
}

const Tienda: React.FC<TiendaProps> = (props) => {

    const title:any         =   props.params;
    let dataset:any[]       =   return_data.products;
    
    if(return_data&&title&&title.category){
        const category:any  =   title.category
        dataset             =   return_data[category];
    }   
    
    return (
        <>
            <Products dataset={dataset} title={title?.category} />
        </>
    );
}

export default Tienda;
