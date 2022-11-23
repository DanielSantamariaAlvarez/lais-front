import React from 'react'
import "./navbar.scss"
import images from "../../assets/images/images"

export default function Navbar() {
  return (
    <>
        <section className="header">
            <nav>
                <div className="burger">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="links">
                    <a href="#about">Sobre Nosotros</a>
                    <a href="#categories">Categorías</a>
                    <a href="#work">Se nuestro aliado</a>
                    <a href="#work">Trabaja con nosotros</a>
                    <a href="#contact">Contacto</a>
                </div>
            </nav>
            <div className="sub-header">
                <div className="logo"><img src={images.logo.src} alt={images.logo.alt} /></div>
                <div className="lema"><h3>It Means <br/>No Worries </h3></div>
                <div className="texto">Nos encargamos de resolver todas las necesidades de tu peludo</div>
                <div className="buscar"><span><i className="fa-solid fa-magnifying-glass"></i></span> input type="text" value="¿Que deseas solucionar hoy?"</div>
            </div>
        </section>
    </>
  )
}
