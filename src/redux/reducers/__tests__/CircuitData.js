import Vector from 'immutable-vector2d';

export const RC_CIRCUIT = {
  // nodes: [
  //   [{viewID: 'Ground', index: 1}],
  //   [{viewID: 'Ground', index: 0},
  //    {viewID: 'VoltageSource', index: 0},
  //    {viewID: 'Capacitor', index: 1}],
  //   [{viewID: 'VoltageSource', index: 1},
  //    {viewID: 'Resistor', index: 0}],
  //   [{viewID: 'Capacitor', index: 1},
  //    {viewID: 'Resistor', index: 1}]
  // ],
  // models: {
  //   Ground: {
  //     typeID: 'Ground',
  //     nodes: [1, 0],
  //     vSources: 1
  //   },
  //   VoltageSource: {
  //     typeID: 'VoltageSource',
  //     nodes: [1, 2],
  //     value: 5
  //   },
  //   Resistor: {
  //     typeID: 'Resistor',
  //     nodes: [2, 3],
  //     value: 100
  //   },
  //   Capacitor: {
  //     typeID: 'Capacitor',
  //     nodes: [3, 1],
  //     value: 5e-6
  //   }
  // },
  views: {
    Ground: {
      typeID: 'Ground',
      id: 'Ground',
      realConnectors: [
        new Vector(10, 20)
      ]
    },
    VoltageSource: {
      typeID: 'VoltageSource',
      id: 'VoltageSource',
      value: 5,
      realConnectors: [
        new Vector(10, 20),
        new Vector(10, 10)
      ]
    },
    Resistor: {
      typeID: 'Resistor',
      id: 'Resistor',
      value: 100,
      realConnectors: [
        new Vector(10, 10),
        new Vector(20, 20)
      ]
    },
    Capacitor: {
      typeID: 'Capacitor',
      id: 'Capacitor',
      value: 5e-6,
      realConnectors: [
        new Vector(20, 20),
        new Vector(10, 20)
      ]
    }
  }
};
