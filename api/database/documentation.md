# Documentacion base de datos



## Coleccion Cursos



### Esquema en tablas

| Campo               | Tipo de Dato     | Descripción                                                |
| ------------------- | ---------------- | ---------------------------------------------------------- |
| titulo              | String           | **Requerido.** Título del Curso                            |
| descripcion         | String           | **Requerido.** Descripción del Curso                       |
| instructor          | string           | **Requerido.** Nombre del  instructor que imparte el curso |
| categoria           | String           | **Requerido**. Nombre de la categoria del curso            |
| duracion            | String           | **Opcional**. Duracion del curso completo                  |
| nivel               | String           | **Requerido**. Nivel requerido para completar el curso     |
| videos              | Array de objetos | **Requerido**. Lista de videos asociados al curso          |
| valoracion_promedio | Decimal          | **Opcional**.  Valoración promedio del curso (puntuación)  |
| comentarios         | Array de objetos | **Opcional**. Comentarios y valoraciones del curso         |

### Videos

| Campo       | Tipo de Dato     | Descripción                                                  |
| ----------- | ---------------- | ------------------------------------------------------------ |
| titulo      | String           | **Requerido**. Título del video                              |
| url         | String           | **Requerido**. URL del video                                 |
| duracion    | String           | **Opcional**. Duración del video (por ejemplo, "15 minutos") |
| orden       | Integer          | **Requerido**. Orden del video en el curso (por ejemplo, 1)  |
| comentarios | Array de objetos | **Opcional**. Lista de comentarios sobre el video            |



### Comentarios

| Campo      | Tipo de Dato | Descripción                                          |
| ---------- | ------------ | ---------------------------------------------------- |
| usuario_id | ObjectId     | **Requerido**. ID del usuario que hizo el comentario |
| texto      | String       | **Requerido**. Texto del comentario                  |



## Esquema completo en documento



``` json
{
  "_id": ObjectId("curso_id"),
  "titulo": "Curso de Programación en Python",
  "descripcion": "Aprende a programar en Python desde cero.",
  "categoria": "Programación",
  "duracion": "8 semanas",
  "nivel": "Principiante",
  "instructor": "John Doe",
  "videos": [
	{ 
    "titulo": "Introducción a Python",
  	"url": "https://www.example.com/video1.mp4",
  	"duracion": "15 minutos",
  	"orden": 1,
  	"comentarios":[
	 	{
            "usuario_id":ObjectId("usuario_id"),
            "texto":"Este curso es excelente. Lo recomiendo."
      	}	
	]
	}
  ]
}
```





### Coleccion Usuarios

| Campo               | Tipo de Dato      | Descripción                                                  |
| ------------------- | ----------------- | ------------------------------------------------------------ |
| discord_id          | String            | **Requerido**. ID de Discord para autenticación              |
| nombre_usuario      | String            | **Requerido**. Nombre de usuario                             |
| correo_electronico  | String            | **Requerido**. Correo electrónico del usuario                |
| imagen_perfil       | String            | **Opcional**. URL de la imagen de perfil del usuario         |
| biografia           | String            | **Opcional**. Descripción o biografía del usuario            |
| cursos_matriculados | Array de ObjectId | **Opcional**. Lista de IDs de cursos en los que está matriculado |
| rol                 | String            | **Requerido**. Rol del usuario (estudiante o instructor)     |

```
```

#### Esquema en documento

```json
{
  "_id": ObjectId("usuario_id"),
  "discord_id": "1234567890", 
  "nombre_usuario": "ejemplo_usuario",
  "correo_electronico": "usuario@correo.com",
   "imagen_perfil": "https://www.example.com/perfil_usuario.jpg",
  "biografia": "Estudiante apasionado por la programación.",
  "cursos_matriculados": [ObjectId("curso_id1"), ObjectId("curso_id2")],
  "rol": "camper" // o "trainer"
}
```



