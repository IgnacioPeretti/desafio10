// Seleccionar la base de datos 'educacionit'

db = db.getSiblingDB('admin');

// Crear una colección 'test' y agregar un documento de ejemplo

db.test.insertOne({
    name: 'Desafio10',
    description: 'Test para desafio10.'
  });

// Creamos un usuario

db.createUser({
  user: 'root',
  pwd: 'rootpassword',
  roles: [{ role: "readWrite", db: "admin" }]
});

print('Inicializacion completada.');
