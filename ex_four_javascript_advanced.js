const tarefas = [];
const inputTarefa = document.getElementById('tarefa');
const listaTarefas = document.getElementById('tarefas');

function addTarefa() {
  const novaTarefa = {
    texto: inputTarefa.value,
    concluida: false
  };
  tarefas.push(novaTarefa);
  renderizarTarefas();
  inputTarefa.value = '';
}

function renderizarTarefas() {
  listaTarefas.innerHTML = '';
  tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    li.textContent = tarefa.texto;
    listaTarefas.appendChild(li);
  });
}