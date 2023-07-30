import React from "react";
import "../../app/globals.scss";
import style from "./Terminos.module.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export default function Aviso(){

    return (
        <><Navbar />
        <main>
            <div className={style.terminos}>
                <h1 className={style.titulo}>Terminos y Condiciones Albbus</h1>
                <div className={style.contenido}>
                    <p>Términos y Condiciones de Uso del Sitio Web Albbus, Bienvenido al sitio web de Albbus. Antes de continuar 
                        usando este sitio, lea detenidamente los siguientes Términos y Condiciones de Uso, ya que constituye un 
                        acuerdo legal entre usted y Albbus. Al acceder o utilizar este sitio web, usted acepta cumplir con estos 
                        términos. Si no está de acuerdo con alguno de los términos, le recomendamos que no utilice nuestro sitio.</p><br /><br />
                    <ol className={style.lista1}>
                        <li>
                            <p>Uso del Sitio Web:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>1. 1. Usted debe tener al menos 18 años de edad para utilizar este sitio web o contar con el consentimiento y 
                                        supervisión de un adulto si es menor de 18 años.</p><br />
                                </li>
                                <li>
                                    <p>1. 2. Usted se compromete a utilizar el sitio web de Albbus únicamente con fines legales y de acuerdo con 
                                        estos Términos y Condiciones.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Propiedad Intelectual:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>2.1. Todos los contenidos presentes en este sitio web, incluyendo, pero no limitado a textos, gráficos, 
                                        logotipos, imágenes, videos, sonidos, iconos, software y cualquier otro material, son propiedad exclusiva de 
                                        Albbus o sus proveedores y están protegidos por leyes de propiedad intelectual aplicable.</p><br />
                                </li>
                                <li>
                                    <p>2.2. Queda prohibida la reproducción, distribución, modificación, exhibición pública o cualquier otro uso no 
                                        autorizado del contenido presente en este sitio web sin el consentimiento expreso por escrito de Albbus.</p><br />
                                </li>
                                <li>
                                    <p>2.3. Al utilizar este sitio web, usted y reconoce que no adquirirá ningún derecho de propiedad intelectual 
                                        sobre el contenido o materiales proporcionados por Albbus, ya sea por descarga, copia u otro medio</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Enlaces a Terceros:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>3.1. Este sitio web puede contener enlaces a sitios web de terceros. Estos enlaces son proporcionados únicamente 
                                        para su conveniencia y no implican ningún respaldo, aprobación o control por parte de Albbus sobre esos sitios web.</p><br />
                                </li>
                                <li>
                                    <p>3.2. Albbus no asume responsabilidad alguna por el contenido, precisión, seguridad o disponibilidad de los sitios web de 
                                        terceros enlazados. El acceso y uso de estos sitios están bajo su propio riesgo y están sujetos a los términos y 
                                        condiciones de dichos sitios.</p><br />
                                </li>
                                <li>
                                    <p>3.3. Usted comprende y acepta que Albbus no será responsable, directa o indirectamente, de cualquier daño o pérdida causada 
                                        por o en conexión con el uso de cualquier contenido, bienes o servicios disponibles en ó a través de dichos sitios web de 
                                        terceros.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Privacidad y Protección de Datos:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>4.1. Albbus se compromete a proteger la privacidad y seguridad de sus usuarios. Nuestra Política de Privacidad describe cómo 
                                        recopilamos, utilizamos y protegemos la información personal que usted proporciona al utilizar nuestro sitio web. Al 
                                        utilizar este sitio, usted acepta las prácticas descritas en nuestra Política de Privacidad..</p><br />
                                </li>
                                <li>
                                    <p>4.2. Al proporcionar sus datos personales a través de este sitio web, usted declara que toda la información que proporciona 
                                        es precisa, veraz y completa.</p><br />
                                </li>
                                <li>
                                    <p>4.3. La información personal recopilada por Albbus se utilizará con el propósito de brindarle acceso a nuestros servicios, 
                                        mejorar la experiencia del usuario, la seguridad y cumplir con las obligaciones legales.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Limitación de Responsabilidad:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>5.1. Albbus se esfuerza por proporcionar información precisa y actualizada en este sitio web, pero no garantiza su exactitud, 
                                        integridad o actualidad.</p><br />
                                </li>
                                <li>
                                    <p>5.2. Usted acepta que el uso de este sitio web es bajo su propio riesgo. Albbus no será responsable de daños directos, 
                                        indirectos, incidentales, especiales o consecuentes que puedan surgir del uso o la imposibilidad de usar este sitio web, 
                                        incluyendo, entre otros, daños por pérdida de datos, beneficios, oportunidades comerciales o interrupción del negocio.</p><br />
                                </li>
                                <li>
                                    <p>5.3. Albbus no garantiza que este sitio web esté libre de virus, malware u otros componentes dañinos. Es su responsabilidad 
                                        implementar medidas de seguridad adecuadas para proteger su dispositivo y datos.</p><br />
                                </li>
                                <li>
                                    <p>5.4. Usted comprende y acepta que cualquier contenido descargado u obtenido de otra manera a través del uso de este sitio 
                                        web se realiza bajo su propia discreción y riesgo, y que será el único responsable por cualquier daño o pérdida de datos 
                                        resultante de la descarga de dicho contenido.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Modificaciones del Sitio Web:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>6.1. Albbus se reserva el derecho de modificar, actualizar o interrumpir este sitio web, así como sus contenidos 
                                        y servicios, en cualquier momento y sin previo aviso.</p><br />
                                </li>
                                <li>
                                    <p>6.2. Aunque nos esforzamos por mantener este sitio en funcionamiento de manera continua, Albbus no garantiza que 
                                        el sitio esté libre de interrupciones o errores, y no será responsable por cualquier pérdida o daño que pueda 
                                        resultar de tales interrupciones o errores.</p><br />
                                </li>
                                <li>
                                    <p>6.3. Albbus también se reserva el derecho de cambiar o actualizar cualquier información contenida en este sitio 
                                        web sin previo aviso..</p><br />
                                </li>
                                <li>
                                    <p>6.4. Usted acepta que Albbus no será responsable ante usted ni ante terceros por cualquier modificación, 
                                        suspensión o interrupción del sitio web o de cualquier parte de su contenido o servicios.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Uso de Cuentas de Usuario:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>7.1. Algunas áreas de nuestro sitio web pueden requerir que crea una cuenta de usuario. Si elige registrarse, 
                                        es responsable de mantener la confidencialidad de su información de inicio de sesión y de controlar el acceso a 
                                        su cuenta.</p><br />
                                </li>
                                <li>
                                    <p>7.2. Usted acepta ser completamente responsable de todas las actividades que están bajo su cuenta y contraseña. 
                                        Albbus no será responsable de ninguna pérdida o daño que resulte del incumplimiento de esta obligación de seguridad.</p><br />
                                </li>
                                <li>
                                    <p>7.3. Si tiene motivos para creer que la seguridad de su cuenta ha sido comprometida o que ha habido un uso no 
                                        autorizado de su cuenta, notifíquelo de inmediato a Albbus para tomar las medidas adecuadas.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Comentarios y Contenido del Usuario:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>8.1. Albbus puede proporcionar la opción de enviar comentarios, publicar contenido o interactuar con otros 
                                        usuarios a través de su sitio web o en plataformas de redes sociales.</p><br />
                                </li>
                                <li>
                                    <p>8.2. Usted comprende y acepta que cualquier contenido que proporción, incluidos comentarios, publicaciones, 
                                        imágenes o cualquier otra forma de contenido, será de su exclusiva responsabilidad.</p><br />
                                </li>
                                <li>
                                    <p>8.3. Al proporcionar contenido, usted otorga a Albbus una licencia mundial, no exclusiva, libre de regalías, 
                                        sublicenciable y transferible para utilizar, reproducir, modificar, adaptar, publicar, traducir, distribuir y 
                                        mostrar dicho contenido en cualquier medio y en cualquier forma.</p><br />
                                </li>
                                <li>
                                    <p>8.4. Usted declara y garantiza que tiene todos los derechos necesarios para otorgar la licencia mencionada en el 
                                        punto 8.3 y que su contenido no infringe los derechos de propiedad intelectual, privacidad, publicidad u otros 
                                        derechos de terceros.</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Cuentas de Usuario:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>9.1. Algunas áreas de nuestro sitio web pueden requerir que crea una cuenta de usuario. Si elige registrarse, es 
                                        responsable de mantener la confidencialidad de su información de inicio de sesión y de controlar el acceso a su cuenta.</p><br />
                                </li>
                                <li>
                                    <p>9.2. Usted acepta ser completamente responsable de todas las actividades que están bajo su cuenta y contraseña. Albbus 
                                        no será responsable de ninguna pérdida o daño que resulte del incumplimiento de esta obligación de seguridad.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Divisibilidad:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>10.1. Si alguna disposición de estos Términos y Condiciones se considera inválida, ilegal o inaplicable, dicha disposición 
                                        se eliminará o modificará en la medida necesaria para que los demás términos y condiciones sigan siendo válidos y 
                                        aplicables.</p><br />
                                </li>
                                <li>
                                    <p>10.2. La invalidez o inaplicabilidad de cualquier disposición en cualquier jurisdicción no afectará la validez o 
                                        aplicabilidad de dicha disposición en cualquier otra jurisdicción.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Resolución de Conflictos:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>11.1. Si surge algún conflicto relacionado con su uso de este sitio web, usted acepta que intentará resolverlo de 
                                        manera amistosa y de buena fe antes de iniciar cualquier acción legal.</p><br />
                                </li>
                                <li>
                                    <p>11.2. Si no se puede llegar a una solución amistosa, cualquier disputa, reclamación o controversia que surja de o en 
                                        relación con estos Términos y Condiciones estará sujeta a la jurisdicción exclusiva de los tribunales competentes en el 
                                        país en el que Albbus tiene su sede.</p><br />
                                </li>
                                <li>
                                    <p>11.3. Usted acepta que cualquier reclamación o acción legal contra Albbus debe presentarse dentro del plazo de tiempo 
                                        establecido por las leyes correspondientes o de lo contrario será considerada inválida.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Comunicaciones Electrónicas:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>12.1. Al utilizar nuestro sitio web, usted acepta recibir comunicaciones electrónicas de Albbus. Estas comunicaciones 
                                        pueden incluir mensajes de correo electrónico u otros avisos relacionados con su cuenta o el sitio web.</p><br />
                                </li>
                                <li>
                                    <p>12.2. Usted acepta que todos los acuerdos, avisos, divulgaciones y otras comunicaciones que le proporcionemos 
                                        electrónicamente cumplan con cualquier requisito legal de que dichas comunicaciones sean por escrito.</p><br />
                                </li>
                                <li>
                                    <p>12.3. Asimismo, acepta que las comunicaciones electrónicas satisfagan cualquier requisito de notificación o 
                                        consentimiento que pueda ser necesario con respecto al uso de nuestro sitio web y servicios.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Ley Aplicable y Jurisdicción:</p><br></br>
                            <ol className={style.sublista}>
                                <li>
                                    <p>13.1. Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes vigentes del país en el que 
                                        Albbus tiene su sede.</p><br />
                                </li>
                                <li>
                                    <p>13.2. Cualquier disputa, controversia o reclamación que surja de o en relación con estos Términos y Condiciones, 
                                        incluyendo su existencia, validez, interpretación, alcance o terminación, se someterá a la jurisdicción exclusiva de 
                                        los tribunales competentes del país en el que Albbus tiene su sede.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Idioma:</p><br></br><br />
                            <ol className={style.sublista}>
                                <li>
                                    <p>14.1. Estos Términos y Condiciones pueden estar disponibles en varios idiomas. En caso de discrepancia o contradicción 
                                        entre las versiones en diferentes idiomas, prevalecerá la versión en el idioma utilizado en el sitio web de Albbus.</p><br /><br />
                                </li>
                            </ol>
                        </li>
                    </ol>
                    <p>Albbus se reserva el derecho de realizar enmiendas o modificaciones en estos Términos y Condiciones en cualquier momento y 
                        sin previo aviso.</p><br />
                </div>
            </div>
        </main>
        
        <Footer />
        </>
    );

}
