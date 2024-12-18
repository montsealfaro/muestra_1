import React, { useEffect, useRef, useState } from 'react'
import imagenes from '../../../assets/imagenes'
import Matcha from '../../Animaciones/matcha'


export const Another = () => {

  return(
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imagenes.portada3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={imagenes.portada2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <Matcha/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
  
}