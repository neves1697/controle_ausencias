# Controle de Ausências
## Contexto
Aplicação criada para registro de ausência de colaboradores.
Há momentos em que os colaboradores precisam se ausentar por motivos pessoais, saúde, folgas etc. Então cada colaborador/a avisa sua coordenação para isso, logo a coordenação precisa ter um controle sobre para fins de informação e organização mas, registrar essas informações em algum momento pode se tornar um processo moroso. Caso o coordenador/a quiser controlar, pode criar uma planilha, bloco de notas, lembretes etc. Mas cada uma dessas ferramentas é uma ferramenta separada que pode ser utilizada, em algum momento isso pode ser esquecido com outros arquivos, entre outros.
Então esta aplicação tem a finalidade de facilitar esse processo, onde tais informações pode ser registradas em um só lugar. 
Posteriormente podendo ter acesso à históricos das ausências, motivos, observações, datas etc.
## Regras
### Essenciais
* A aplicação deve possibilitar gravar as informações de
    * Nome dos colaboradores.
    * Motivo da ausência.
    * Deve conter um campo chamado (Observação) para fins de alguma observação que não se encaixe no motivo.
    * Conter um campo chamado (Inicio) que será um campo do tipo Data hora, sendo possível registrar o dia do mês e hora que aquela ausência iniciará.
    * Conter um campo chamado (Fim) que será um campo do tipo Data hora, sendo possível registrar o dia do mês e hora que a ausência será finalizada.
    * Ter controle de quantas horas a pessoa ficou ausente.
    * Para os campos de (Inicio e Fim), considerar as seguintes regras:
        * A máscara será dd/mm/aaaa hh:mm.
        * O campo (Inicio) não pode conter uma data/hora maior que o campo (Fim).
        * O campo (Fim) não pode conter uma data/hora menor que o campo (Inicio).
* Ter um botão chamado (Adicionar) que será para adicionar as informações registradas nos campos acima.
* Ter um botão (Editar) que servirá para editar algum registro que foi cadastrado com alguma informação incorreta.
* Ter um botão (Remover) que servirá para remover os registros de ausências da linha selecionada.
* Ter uma função que seja possível visualizar os históricos das informações.
* Se comunicar com o banco de dados PostgreSQL.
* Avaliar a possibilidade de adicionar perfil de acesso.
### Não essenciais
* Colocar tema de claro/escuro

