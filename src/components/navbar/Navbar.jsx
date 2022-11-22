import React from 'react'
import "./navbar.scss"

export default function Navbar() {
  return (
    <>
        <section class="header">
            <nav>
                <div class="burger">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="links">
                    <a href="#about">Sobre Noostros</a>
                    <a href="#categories">Categorías</a>
                    <a href="#work">Se nuestro aliado</a>
                    <a href="#work">Trabaja con nosotros</a>
                    <a href="#contact">Contacto</a>
                </div>
            </nav>
            <div class="sub-header">
                <div class="logo">LOGO</div>
                <div class="lema"><h3>It Means <br/>No Worries </h3></div>
                <div class="texto">Nos encargamos de resolver todas las necesidades de tu peludo</div>
                <div class="buscar"><span><i class="fa-solid fa-magnifying-glass"></i></span> input type="text" value="¿Que deseas solucionar hoy?"</div>
            </div>
        </section>
    </>
  )
}
