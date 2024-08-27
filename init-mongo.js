// Seleccionar la base de datos 'educacionit'

db = db.getSiblingDB('educacionit');

// Crear una colección 'test' y agregar un documento de ejemplo

db.test.insertOne({
  name: 'Desafio10',
  description: 'Test para desafio10.'
});

print('Inicializacion completada.');
