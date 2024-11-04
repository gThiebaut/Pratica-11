const listtarefas = {
    tarefas: [
        {
            id: 1,
            nometarefa: 'tarefa 1',
            pontos: 10,
            concluido: true
        }
    ]
};

//create

function criaTarefa(dados) {
    listtarefas.tarefas.push({
        id: listtarefas.tarefas.Length + 1,
        nometarefa: dados.nometarefa,
        pontos: dados.pontos,
        concluido: dados.concluido
    })
}
criaTarefa({ nometarefa: 'tarefa 2', pontos: 15, concluido: false });

//read

function pegaTarefa() {
    return listtarefas.tarefas;
}

//update

function attTarefa(id, concluido) {
    pegaTarefa().find((tarefa) => {
        return tarefa.id === id;
    })
    tarefaQueVaiSerAtt.content = concluido
}
attTarefa(1, True)

//delete

function apagaTarefa(id) {
    const listaTarefasAtt = pegaTarefa().filter((tarefaAtual) => {
        return tarefaAtual.id !== id;
    })
    listtarefas.tarefas = listaTarefasAtt;
}
apagaTarefa(2);