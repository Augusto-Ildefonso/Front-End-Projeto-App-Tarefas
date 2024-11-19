# Projeto App de Tarefas - Front-End
Esse repositório armazena o front-end de um app de tarefas. Ele foi feito com React-Native e utilizou o Expo para simular.
## O que falta:
- Adiconar a lógica das Tarefas (Toggle e Tarefas)
- Design das Tarefas
- Integrar pop-up status com o pop-up de criar tarefa (e fazer com que ele mude as cores) e de editar tarefa
- Mudar input horário para ele trabalhar com horas (atualmente ele tá com a data)
- Integrar com back-end
## Diretórios
A função que cria o app está no arquivo `App.js`, já o resto do código (tela, componentes, rotas e afins) está armazenado dentro da pasta `/src`. Ela está subdividida em algumas pastas:
- `/components`: contém os códigos dos componentes usados para construir as telas
- `/navigators`: contém o arquivo `RootNavigator.js` que cria a pilha de telas que compõem o app e permite a navegação entre elas
- `/screens`: contém as quatro telas dos app
- `/router`: contém o arquivo que lida com as rotas das requisições HTTP

Além disso, na pasta principal, há a pasta `/assets` que contém alguns adicionais como os arquivos da fonte utilizada no aplicativo.
## Funcionamento
Atualmente o front-end está quase implementado, além de faltar as tarefas e integração dos pop-ups, não há comunicação com o servidor. Logo, é possível percorrer as telas do app e visualizar as features mas elas são somente visuais e não estão de fato mudando a base de dados.

Quando terminar a implementação do front-end esse tópico será atualizado para explicar o funcionamento e serão adicionadas fotos do app.
