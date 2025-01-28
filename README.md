# Ecommerce

#### `Diego Olivera`

## Descripción
# Estilo Sin Fronteras - Tienda Online

Este proyecto es una tienda en línea llamada *Estilo Sin Fronteras*, donde los usuarios pueden explorar diferentes categorías de calzado, agregar productos a su carrito y realizar compras de forma sencilla. La aplicación está construida utilizando React, con funcionalidades para gestionar el carrito de compras, hacer compras con formulario de checkout, y más.

## Tecnologías

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Para manejar la navegación entre diferentes páginas de la tienda.
- **Firebase**: Para almacenar los productos y las órdenes de compra de los usuarios.
- **CSS**: Para la estilización de la aplicación.
- **React Context**: Para gestionar el estado global del carrito de compras.

## Características

- **Navegación por categorías**: Los productos se organizan en distintas categorías (Casual, Urbano, Formal, Deportivo, Verano), que se pueden filtrar fácilmente desde la barra de navegación.
- **Vista de productos**: Los usuarios pueden ver una lista de productos y detalles de cada uno, incluyendo imágenes, precios y descripción.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, ver el número total de artículos y el precio total.
- **Formulario de checkout**: Los usuarios pueden completar su compra proporcionando su nombre, teléfono y correo electrónico.
- **Persistencia de datos**: El carrito de compras se guarda en el almacenamiento local del navegador para que la información persista entre sesiones.


## Estructura del Proyecto

    src/components: Contiene los componentes principales de la tienda, como la barra de navegación, la lista de productos, y el carrito.
    src/Context: El contexto global que maneja el carrito de compras.
    src/hooks: Contiene los hooks personalizados, como useConstructionProducts, que se utiliza para obtener los productos de Firebase.
    src/db: Contiene la configuración de la base de datos Firebase.
    src/Styles: Archivos CSS para la estilización de los componentes.
    src/utils: Funciones auxiliares como la validación del formulario de checkout.