const init = {
  method: 'GET',
  headers: new Headers(),
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

export function sendData(dataForm) {
  const config = {
    method: 'POST',
    body: JSON.stringify(dataForm),
    headers: new Headers({
      'Content-type': 'application/json',
    }),
  };
  return fetch('http://localhost:3000', config);
}
