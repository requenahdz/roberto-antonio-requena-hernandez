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
3. Crea y configura las variables de entorno en el archivo .env:
```bash
PORT=
JWT_SECRET=
MONGODB_URI=
USER_DEFAULT_NAME=
USER_DEFAULT_PASSWORD=
USER_DEFAULT_PHONE=
USER_DEFAULT_IMG=
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

# POST /auth/login
Iniciar sesión y obtener un token JWT.

Body:
```json
{
  "phone": "string",
  "password": "string"
}
 ```
Response:
```json
{
  "token": "string"
}
 ```

## GET /products
Obtener todos los productos.

Headers
```json
{
  "Authorization": "Bearer <token>"
}
 ```
Response:
```json
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

## GET /products:id
Obtener un producto especifico.

Headers
```json
{
  "Authorization": "Bearer <token>"
}
 ```
Response:
```json
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
 ```

## POST /products
Crear un nuevo producto.

Headers
```json
{
  "Authorization": "Bearer <token>"
}
```
Body:
```json
{
  "name": "string",
  "description": "string",
  "height": "number",
  "length": "number",
  "width": "number"
}
```

Response:
```json 
{
    "message" : "Producto creado exitosamente",
    "data" : {
        "_id": "string",
        "name": "string",
        "description": "string",
        "height": "number",
        "length": "number",
        "width": "number",
        "createdAt": "string",
        "updatedAt": "string"
        }
}
```

## PUT /products/:id
Actualizar un producto existente.

Headers
```json
{
  "Authorization": "Bearer <token>"
}
```
Body:
```json
{
  "name": "string",
  "description": "string",
  "height": "number",
  "length": "number",
  "width": "number"
}
```

Response:
```json
{
    "message" : "Producto actualizado exitosamente",
    "data" : {
        "_id": "string",
        "name": "string",
        "description": "string",
        "height": "number",
        "length": "number",
        "width": "number",
        "createdAt": "string",
        "updatedAt": "string"
        }
}
```

## DELETE /products/:id
 Eliminar un producto.

Headers
```json
{
  "Authorization": "Bearer <token>"
}
```

Response:
```json
{
  "message": "Producto eliminado"
}
```

