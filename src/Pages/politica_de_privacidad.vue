<script setup>
import logo from '../Pages/imagenes/logo1.png';
</script>
export default{
    data(){
        return{
            logo
        };
    }
};
<template>

<head>
    <meta charset="UTF-8">
    <!-- Define la codificación de caracteres como UTF-8 para admitir caracteres especiales -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Configura la visualización en dispositivos móviles para que se adapte a diferentes tamaños de pantalla -->

    <title>Política de privacidad</title>
    <!-- Define el título de la página, que aparecerá en la pestaña del navegador -->
</head>

<body style="background-color: #F5F5F5;">
    <!-- Inicia el cuerpo de la página y establece un fondo gris claro -->

    <!-- Inicio de la cabecera -->
    <header>
        <div style="display: flex; align-items: center;">
            <!-- Contenedor flexible que alinea elementos en una fila y los centra verticalmente -->

            <img :src="logo" alt="Logo de la pizzería" width="150px" height="150px">
            <!-- Imagen del logo de la pizzería con tamaño de 150x150 píxeles -->

            <h3 style="margin-left: 20px;">POLÍTICA DE PRIVACIDAD</h3>
            <!-- Título de la política de privacidad con un margen izquierdo de 20px -->
        </div>
    </header>  
    <!-- Cierre de la cabecera -->

    <!-- Inicio del contenedor que contiene información -->
    <div class="container-sm">
        <!-- Contenedor pequeño de Bootstrap para mejorar la estructura y alineación del contenido -->

        <p style="font-family: Arial; font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0; text-align: justify;">
            En Pizzería EL RICÓN DE LA PIZAA, reconocemos la importancia de la privacidad y la protección de los datos personales de nuestros clientes. Por ello, hemos implementado una política de privacidad que garantiza la confidencialidad y seguridad de la información que nos proporcionan.
        </p>
        <!-- Primer párrafo explicando la importancia de la privacidad -->

        <p style="font-family: Arial; font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0; text-align: justify;">
            Fecha últ. modificación: 01/03/2025
        </p>
        <!-- Indica la última fecha de modificación de la política de privacidad -->

        <p style="font-family: Arial; font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0; text-align: justify;">
            Yum! Brands, Inc. y sus subsidiarias globales y afiliados (las “Marcas”, incluidas, entre otras, KFC Corporation, Pizza Hut, LLC, Taco Bell Corp., The Habit Restaurants, LLC, Yum Connect y Yum! Restaurant Services Group, LLC, lo que puede incluir entidades con las que usted interactúe bajo otros nombres, incluidos Collider Labs, Tictuk y DragonTail) (en conjunto, “Yum! Brands”, “nosotros”, “nuestro” o “nos”) se comprometen a proteger su privacidad.  Esta Política de privacidad de Yum! Brands (la “Política”) se aplica a nuestros sitios web, las experiencias en línea y las aplicaciones móviles para dispositivos móviles Apple iOS, Windows o Android que se vinculan a esta Política (en conjunto, nuestros “Sitios”), y describe cómo recopilamos, utilizamos y divulgamos su información personal cuando visita, utiliza, hace pedidos o crea una cuenta en nuestros Sitios o nuestros restaurantes y quioscos en tiendas, o de otro modo interactúa con nosotros (en conjunto, nuestro “Servicio”).  Podemos proporcionar políticas de privacidad adicionales o suplementarias a las personas para productos o servicios específicos que ofrecemos en el momento en que recopilamos información personal. Si bien Yum! Brands, Inc. no posee ni opera directamente ningún restaurante; es posible que, a lo largo de esta Política, nos refiramos a restaurantes que son propiedad de nuestras Marcas o de franquiciados de nuestras Marcas u operados por estos. Es posible que una compañía afiliada de nuestras Marcas lo haya dirigido aquí para que comprenda mejor cómo Yum! Brands utiliza su información. Nuestro grupo corporativo incluye muchas filiales y Marcas, y esta Política se aplica a todas sus interacciones con Yum! Brands y con nuestras Marcas, nuestras filiales y nuestros Servicios. La Marca, entidad o filial específica que controla su información dependerá de la Marca, la entidad, la filial o del Servicio con el que usted interactúe. El responsable del tratamiento de los datos que le corresponde a usted puede encontrarse en las Divulgaciones complementarias jurisdiccionales que se encuentran a continuación.
    Al acceder o utilizar nuestro Servicio, usted indica que ha leído, comprendido y acepta la recopilación, el almacenamiento, el uso y la divulgación de su información personal conforme se describe en esta Política y en nuestras Condiciones de uso, disponibles en nuestro Sitio, con sus respectivas actualizaciones oportunas. Consulte la sección “Opciones y control sobre su información” como también la sección específica de Divulgaciones complementarias jurisdiccionales de esta Política para obtener más información sobre sus opciones con respecto al tratamiento de su información personal
        </p>
        <!-- Párrafo detallado sobre la política de privacidad de Yum! Brands -->
    </div>
    <!-- Cierre del contenedor que contiene información -->

    <!-- Inicio del pie de página -->
    <footer>
        <div style="background-color: #AD2E05; padding: 20px; margin-top: 20px; font-family: Arial; color: white; font-size: 10px" class="row">
            <!-- Contenedor con estilo para el pie de página con fondo marrón, padding y texto en color blanco -->

            <h6 style="margin-left: 20px;">
                <center>©2025 EL RINCÓN DE LA PIZZA. TODOS LOS DERECHOS RESERVADOS</center>
            </h6>
            <!-- Texto centrado con derechos de autor -->
        </div>
    </footer>
    <!-- Cierre del pie de página -->

</body>
</template>