import React from 'react'
import Image from 'next/image'
import style from './CaracteristicasOpciones.module.scss'

const CaracteristicasOpciones = ( {icon,name}) => {
  return (
    <div className={style.opcion}>
        <Image
        src={icon}
        alt={name}
        title={name}
        />
        <p>{name}</p>
    </div>
  )
}

export default CaracteristicasOpciones
