import React from "react";
import { CartWidget } from "../cartWidget/CardWidget";


export const NavBar = () => {
    return (
        <header className="header">
            <h1>My Phone</h1>
            <nav>
                <ul>
                    <li>Contacto</li>
                    <li>Producto</li>
                    <li>Carrito</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}