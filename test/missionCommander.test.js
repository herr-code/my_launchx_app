/* 
	Comando para ejecutar la prueba

	npm test  test/missionCommander.test.js

	Se indica el archivo de la prueba si no se especifica hará todas las pruebas
	dentro de test/
*/
const MissionCommander = require('./../app/missionCommander');

describe("Esto es una suite de pruebas", () => {
  // Este caso debe fallar
  test('Caso de prueba 1', () => {
    const result = 1 + 2 
    expect(result).toBe(10);
  });

  // Este caso debe funcionar correctamente
  test('Caso de prueba 1', () => {
    const result = 8 + 2 
    expect(result).toBe(10);
  });
})

describe("Unit Tests for Mission Commander Class", () => {
  test('1) Create a mission commander objet', () => {
    const myMissionCommander = new MissionCommander("Woopa")

    // Este caso pasa
    expect(myMissionCommander.name).toBe("Woopa");
  });

  test('1) Create a mission commander objet', () => {
    const myMissionCommander = new MissionCommander("Woopa")

    // Este caso debe fallar
    expect(myMissionCommander.name).toBe("Wooper");
  });
});