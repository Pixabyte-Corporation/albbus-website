"use client";
import { useState } from "react";
import style from "./Testimonial.module.scss"
import Cardtestimonial from "@/components/cardtestimonial"



export default function Testimonials(){

    return(
<section className={style.containertest}>
<Cardtestimonial />
</section>
    )
}
