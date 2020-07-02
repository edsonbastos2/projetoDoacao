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

  cities.innerHTML = "<option value>Selecione a Cidade</option>";
  cities.disabled = true;
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      data.forEach(item => {
        cities.innerHTML += `<option value="${item.id}">${item.nome}</option>`
      })

      cities.disabled = false
    })

}

document.querySelector('[data-states="uf"]').addEventListener('change', getCities);

// Pegar todos os Itens

const itemsToCollect = document.querySelectorAll('.item-grid li')
const collectedItem = document.querySelector('input[name=items]')

// Função para adicionar e remover items 
let selectedItem = [1, 2, 3];
function handleSelectedItem(event) {
  const itemLi = event.target;
  itemLi.classList.toggle('selected')

  const itemId = itemLi.dataset.id;

  // Verifica se existem itens selecionados, se sim
  // Pega os itens selecionados
  const alreadySelected = selectedItem.findIndex(item => item == itemId);

  console.log(alreadySelected)
  // Se já estiver selecionado
  if (alreadySelected != -1) {
    // Tira da seleção
    const filterdItems = selectedItem.filter(item => item != itemId)

    selectedItem = filterdItems
  } else {
    // se não estiver selecionado adicionar a seleção
    selectedItem.push(itemId)
  }

  collectedItem.value = selectedItem
}

itemsToCollect.forEach(item => {
  item.addEventListener('click', handleSelectedItem)
})


