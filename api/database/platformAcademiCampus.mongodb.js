use('platform_academic_campus')
db.createCollection('cursos', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['_id', 'titulo', 'descripcion', 'categoria', 'nivel', 'instructor', 'videos'],
        properties: {
          _id: {
            bsonType: 'objectId',
            description: 'El _id es requerido y de tipo ObjectId'
          },
          titulo: {
            bsonType: 'string',
            description: 'El titulo es requerido y de tipo string'
          },
          descripcion: {
            bsonType: 'string',
            description: 'La descripcion es requerida y de tipo string'
          },
          categoria: {
            bsonType: 'string',
            description: 'La categoria es requerida y de tipo string'
          },
          duracion: {
            bsonType: 'string',
            description: 'La duracion es requerida y de tipo string'
          },
          nivel: {
            bsonType: 'string',
            description: 'El nivel es requerido y de tipo string'
          },
          instructor: {
            bsonType: 'string',
            description: 'El instructor es requerido y de tipo string'
          },
          videos: {
            bsonType: 'array',
            description: 'Los videos son requeridos y de tipo array',
            items: {
              bsonType: 'object',
              required: ['titulo', 'url', 'orden'],
              properties: {
                titulo: {
                  bsonType: 'string',
                  description: 'El titulo del video es requerido y de tipo string'
                },
                url: {
                  bsonType: 'string',
                  description: 'La URL del video es requerida y de tipo string'
                },
                duracion: {
                  bsonType: 'string',
                  description: 'La duracion del video es  de tipo string'
                },
                orden: {
                  bsonType: 'int',
                  description: 'El orden del video es requerido y de tipo int'
                },
                comentarios: {
                  bsonType: 'array',
                  description: 'Los comentarios son  de tipo array',
                  items: {
                    bsonType: 'object',
                    required: ['usuario_id', 'texto'],
                    properties: {
                      usuario_id: {
                        bsonType: 'objectId',
                        description: 'El usuario_id es requerido y de tipo ObjectId'
                      },
                      texto: {
                        bsonType: 'string',
                        description: 'El texto del comentario es requerido y de tipo string'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })
  

  use('platform_academic_campus')
  db.createCollection('usuarios', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['_id', 'discord_id', 'nombre_usuario', 'correo_electronico'],
        properties: {
          _id: {
            bsonType: 'objectId',
            description: 'El _id es requerido y de tipo ObjectId'
          },
          discord_id: {
            bsonType: 'string',
            description: 'El codigo de discord es requerido y de tipo string'
          },
          nombre_usuario: {
            bsonType: 'string',
            description: 'El username es requerido y de tipo string'
          },
          correo_electronico: {
            bsonType: 'string',
            description: 'El email es requerido y de tipo string'
          },
          imagen_perfil: {
            bsonType: 'string',
            description: 'La url de la imagen_perfil es de tipo string'
          },
          biografia: {
            bsonType: 'string',
            description: 'La biografia es de tipo string'
          },
          cursos_matriculados: {
            bsonType: 'array',
            description: 'Los cursos matriculados son de tipo array',
            items: {
              bsonType: 'objectId',
              description: 'Cada elemento en cursos_matriculados debe ser de tipo ObjectId'
            }
          },
          rol: {
            enum: ['camper', 'trainer'],
            description: 'El rol debe ser uno de los siguientes: "camper" o "trainer"'
          }
        }
      }
    }
  })
  