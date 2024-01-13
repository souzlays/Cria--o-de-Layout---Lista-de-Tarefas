var contadorTarefasDia = 0;
var contadorTarefasNoite = 0;

function adicionarTarefa(tabelaId) {
  var tabela = document.getElementById(tabelaId);

  // Criar uma nova linha na tabela
  var novaLinha = tabela.insertRow();
  var idTarefa = tabelaId === 'tabela-dia' ? contadorTarefasDia++ : contadorTarefasNoite++;

  // Criar células para a tarefa e as ações
  var celulaTarefa = novaLinha.insertCell(0);
  var celulaAcoes = novaLinha.insertCell(1);

  // Adicionar um campo de entrada para a tarefa
  var inputTarefa = document.createElement("input");
  inputTarefa.type = "text";
  inputTarefa.className = "form-control";
  inputTarefa.id = tabelaId + "-tarefa-" + idTarefa;
  celulaTarefa.appendChild(inputTarefa);

  // Adicionar botões de ação (Remover)
  var botaoRemover = document.createElement("button");
  botaoRemover.className = "btn";
  botaoRemover.innerHTML = "Remover";
  botaoRemover.onclick = function() {
    removerTarefa(tabelaId, idTarefa);
  };
  celulaAcoes.appendChild(botaoRemover);
}

function removerTarefa(tabelaId, idTarefa) {
  var tabela = document.getElementById(tabelaId);
  var elementoTarefa = document.getElementById(tabelaId + "-tarefa-" + idTarefa);
  tabela.deleteRow(elementoTarefa.parentNode.parentNode.rowIndex);
}