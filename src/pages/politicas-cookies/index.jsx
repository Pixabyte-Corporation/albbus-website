import React from "react";
import "../../app/globals.scss";
import style from "./Politicas.module.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export default function Cookies(){

    return (
        <><Navbar />
        <main>
            <div className={style.cookies}>
                <h1 className={style.titulo}>Politica de Privacidad</h1>
                <div className={style.contenido}>
                    <h6 className={style.fecha}>Fecha de entrada en vigor: 28 de Julio del 2023.</h6>
                    <p>Esta Política de Cookies describe cómo Albbus utiliza cookies y tecnologías similares en su sitio web. Albbus 
                    utiliza cookies para mejorar su experiencia como usuario y para obtener información sobre cómo utiliza nuestro 
                    sitio web. Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta Política de Cookies. 
                    Si no está de acuerdo con el uso de cookies, le recomendamos que ajuste la configuración de su navegador o que 
                    deje de utilizar nuestro sitio web.</p><br /><br />
                    <p><b>¿Qué son las Cookies?</b> Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (como una 
                    computadora, tableta o teléfono móvil) cuando visita nuestro sitio web. Estas cookies nos permiten reconocer 
                    su dispositivo y recopilar información sobre su interacción con nuestro sitio web.</p><br /><br /><br />
                    <ol>
                        <li>
                            <p><b>Cookies de Analítica</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>1.1. Albbus utiliza cookies de análisis para recopilar información sobre cómo los usuarios
                                    interactúan con nuestro sitio web. Estas cookies nos proporcionan datos agregados y anónimos que nos 
                                    ayudan a entender cómo se utiliza nuestro sitio, qué páginas son más populares y cómo mejorar la 
                                    experiencia del usuario.</p><br /><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><b>Cookies de Redes Sociales</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>2.1. Algunas partes de nuestro sitio web pueden incluir contenido y botones de redes
                                    sociales de terceros, como Facebook, Twitter, Instagram, LinkedIn o YouTube. Estos
                                    elementos permiten que los usuarios compartan contenido de nuestro sitio web en sus
                                    perfiles de redes sociales o interactúen con nuestro contenido en estas plataformas.</p><br />
                                </li>
                                <li>
                                    <p>2.2. Estas redes sociales pueden utilizar cookies para rastrear su actividad de navegación y
                                    recopilar información sobre su comportamiento en nuestro sitio web.</p><br /><br /><br />
                                </li>

                            </ol>
                        </li>
                        <li>
                            <p><b>Cookies de Seguimiento y Publicidad</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>3.1. Albbus puede utilizar cookies de seguimiento y publicidad de terceros para ofrecer
                                    anuncios relevantes a los usuarios en nuestro sitio web u otros sitios web que visite.</p><br />
                                </li>
                                <li>
                                    <p>3.2. Estas cookies rastrean su comportamiento de navegación, como las páginas que ha
                                    visitado, los productos que ha visto o las acciones que ha realizado en nuestro sitio web.</p><br />
                                </li>
                                <li>
                                    <p>3.3. La información recopilada a través de estas cookies se utiliza para mostrar anuncios
                                    adaptados a sus intereses y preferencias, tanto en nuestro sitio como en otros sitios web</p><br /><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><b>Publicidad y Proteción de Datos</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>4.1. La información recopilada a través de las cookies se procesa de acuerdo con nuestra
                                    Política de Privacidad. Albbus se compromete a proteger su privacidad y utilizar la
                                    información de conformidad con las leyes de protección de datos aplicables.</p><br />
                                </li>
                                <li>
                                    <p>4.2. Para obtener más información sobre cómo Albbus recopila, utiliza y protege sus datos
                                    personales, le recomendamos revisar nuestra Política de Privacidad, que se encuentra
                                    disponible en nuestro sitio web.</p><br /><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><b>Cookies de Terceros</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>5.1. Es importante destacar que las cookies utilizadas por terceros en nuestro sitio web están
                                    sujetas a sus propias políticas de privacidad y no están bajo nuestro control.</p><br />
                                </li>
                                <li>
                                    <p>5.2. Le recomendamos revisar las políticas de privacidad de estos terceros para comprender
                                    cómo utilizan la información recopilada a través de las cookies y para conocer sus opciones
                                    de privacidad y administración de cookies.</p><br /><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><b>Cookies y Anonimización de Datos</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>6.1. Albbus considera la privacidad y seguridad de sus usuarios como una prioridad.
                                    Utilizamos tecnologías de anonimización y seguridad para proteger la información
                                    recopilada a través de las cookies en la medida de lo posible.</p><br />
                                </li>
                                <li>
                                    <p>6.2. La información recopilada a través de las cookies se utiliza para finos estadísticos y
                                    analíticos, lo que nos ayuda a comprender mejor las preferencias y necesidades de nuestros
                                    usuarios y mejorar continuamente la experiencia en nuestro sitio web.</p><br /><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><b>Derechos del Usuario</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>7.1. Como usuario, tiene ciertos derechos en relación con sus datos personales y el uso de
                                    cookies:</p><br /><br />
                                    <ol className={style.lderechos}>
                                        <li>
                                            <p>Derecho a la Información: Tiene derecho a ser informado de manera clara y
                                            transparente sobre cómo utilizamos las cookies y la finalidad de su uso.</p><br />
                                        </li>
                                        <li>
                                            <p>Derecho al Consentimiento: Podrá aceptar o rechazar el uso de cookies que
                                            requiera su consentimiento, a través de la configuración de su navegador.</p><br />
                                        </li>
                                        <li>
                                            <p>Derecho de Acceso: Tiene derecho a acceder a los datos recopilados a través de
                                            las cookies y solicitar información sobre cómo se utilizan.</p><br />
                                        </li>
                                        <li>
                                            <p>Derecho de Rectificación: Podrá corregir o actualizar la información recopilada a
                                            través de las cookies si es inexacta o está desactualizada.</p><br />
                                        </li>
                                        <li>
                                            <p>Derecho de Supresión: Tiene derecho a solicitar la eliminación de sus datos
                                            personales recopilados a través de las cookies, siempre que sea legalmente posible
                                            y no esté en conflicto con nuestras obligaciones legales o contractuales.</p><br />
                                        </li>
                                        <li>
                                            <p>Derecho de Oposición: Puede oponerse al uso de cookies que requieran su
                                            consentimiento.</p><br />
                                        </li>
                                        <li>
                                            <p>Derecho de Portabilidad: Podrá solicitar la transferencia de sus datos personales
                                            a otro responsable del tratamiento, si es técnicamente posible.</p><br /><br /><br />
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><b>Ejercicio de sus derechos</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>8.1 Podrá solicitar la transferencia de sus datos personales a otro responsable del
                                    tratamiento, si es técnicamente posible.</p><br />
                                </li>
                                <li>
                                    <p>8.2 Ejercicio de sus Derechos:</p><br />
                                </li>
                                <li>
                                    <p>8.3 Podrá solicitar la transferencia de sus datos personales a otro responsable del
                                    tratamiento, si es técnicamente posible.</p><br /><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><b>Idioma</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>9.1. Esta Política de Cookies se encuentra redactada en español y puede estar disponible en
                                    otros idiomas para su conveniencia. En caso de que exista una discrepancia entre las
                                    versiones en diferentes idiomas, prevalecerá la versión en español como la versión oficial.</p><br /><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><b>Ley Aplicable y Jurisdicción</b>:</p><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>10.1. Esta Política de Cookies se rige por las leyes de México donde está establecida la
                                    empresa Albbus. Cualquier disputa o reclamación relacionada con esta política, su
                                    interpretación, implementación o incumplimiento se resolverá exclusivamente ante los
                                    tribunales competentes de México donde se encuentra la empresa Albbus.</p><br /><br /><br />
                                </li>
                            </ol>
                        </li>    
                    </ol>
                    <p>Si tiene alguna pregunta, comente</p><br /><br />
                    <p>Gracias por utilizar el sitio</p>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );

}