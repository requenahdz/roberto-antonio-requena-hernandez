# roberto-requena

# E-commerce Backend

## Descripción
API RESTful para la gestión de productos de una tienda de comercio electrónico. Proporciona servicios para crear, actualizar, eliminar y obtener productos. Implementa seguridad mediante tokens JWT para acceder a los servicios.

## Configuración del Proyecto

### Requisitos
- Node.js
- MongoDB

## Instrucciones para correr el proyecto

1. Clonar el repositorio.
2. Instalar dependencias:
```bash 
npm install
```
3. Configurar las variables de entorno:
```bash
some
```
4. Ejecutar el script migraciones de las tablas de bases de datos:
```bash 
npm run migrate
```
5. Ejecutar el servidor:
```bash 
npm run start
```

# Endpoints

## Autenticación
POST /auth/login: Iniciar sesión y obtener un token JWT.
Request Body:
```bash
{
  "phone": "string",
  "password": "string"
}
 ```
Response:
```bash
{
  "token": "string"
}
 ```

 ## Productos
GET /products Obtener todos los productos.

Headers
```bash
{
  "Authorization": "Bearer <token>"
}
 ```
Response:
```bash
[
  {
    "_id": "string",
    "name": "string",
    "description": "string",
    "height": "number",
    "length": "number",
    "width": "number",
    "createdAt": "string",
    "updatedAt": "string"
  }
]
 ```