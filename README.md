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

# NOTA

"Recuerdo que comentaron que no se debe subir las credenciales de FireBase a GuitHub pero al observar que en la nota cuandoo realizo la entrega no permite màs de cierta cantidad de caracteres.
Por esa razón las agrego aquí como respaldo"

-Espero que está acción no incida sobre la nota final-

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcfkILR8O76bXp0DWNFcpbYoQW4qnXmr4",
  authDomain: "ecomerce-react-do.firebaseapp.com",
  projectId: "ecomerce-react-do",
  storageBucket: "ecomerce-react-do.firebasestorage.app",
  messagingSenderId: "901124400085",
  appId: "1:901124400085:web:bd96aad7576f98c6f4135c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);