function ufStates() {
  const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  const ufStates = document.querySelector('[data-states="uf"]');
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      data.forEach(state => {
        ufStates.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      });
    })

}

ufStates()


function getCities(event) {
  const cities = document.querySelector('[data-states="city"]');
  const stateInput = document.querySelector('[data-states="state"]')
  const city = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${city}/municipios`
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      data.forEach(item => {
        cities.innerHTML += `<option value="${item.id}">${item.nome}</option>`
      })

      cities.disabled = false
    })

}

document.querySelector('[data-states="uf"]').addEventListener('change', getCities)



