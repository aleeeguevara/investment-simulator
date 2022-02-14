const init = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
};
export async function getIndicators() {
  const response = await fetch('http://localhost:3000/indicadores', init);
  const indicator = response.json();
  return indicator;
}

export async function getSimulations() {
  const response = await fetch('http://localhost:3000/simulacoes', init);
  const simulation = response.json();
  return simulation;
}

export default {
  getIndicators,
  getSimulations,
};
