import React, { useEffect, useRef, useState } from 'react'
import imagenes from '../../assets/imagenes'
import "./carousel.css"


export const Carousel = () => {

  return(
    <div className='bigcar d-flex justify-content-center'>
        <div id="carouselExampleIndicators" class="car carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={imagenes.cup} class="d-block w-100" alt="..." id="carimg"/>
            </div>
            <div class="carousel-item">
              <img src={imagenes.medialuna} class="d-block w-100 h-100" alt="..." id="carimg"/>
            </div>
            <div class="carousel-item" >
            <img src={imagenes.choco} class="d-block w-100 h-100" alt="..." id="carimg"/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
  
}