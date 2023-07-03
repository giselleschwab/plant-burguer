# Plant & Burguer

<p align="center"><img src="public/imagens/logo.png" alt="logo plant and burguer" width="200px";></p>

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Histórias de usuário](#2-historias-de-usuario)
* [3. Detalhamento do projeto](#3-detalhamento-do-projeto)

 ## 1. Resumo do projeto

Neste projeto foi desenvolvido uma interface para uma hamburgueria contendo diferentes telas destinadas ao atendimento, cozinha e administração. A aplicação foi desenvolvida utilizando o REACT e com consumo de uma API.

## 2. Histórias de usuários

#### [Historia de usuario 1] Garçom/Garçonete deve poder entrar no sistema, caso o admin já lhe tenha dado as credenciais
#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente
#### [História de usuário 3] Chefe de cozinha deve ver os pedidos
#### [Historia de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir
#### [Historia de usuário 5] Administrador(a) de loja deve administrar seus funcionários
#### [História de usuário 6] Administrador(a) de loja deve administrar os produtos


## 3. Detalhamentos do projeto 
A aplicação contêm três tipos de rotas, uma para o atendimento, outra para a cozinha e outra para o administrador.

Você pode acessar uma dessas rotas logando com os seguintes usuários:

| USUÁRIO                      |SENHA|
|------------------------------|:----:|
| atendimento@plantburguer.com | 123456 |
| cozinha@plantburguer.com     | 123456 |
| admin@plantburguer.com       | 123456 |


### Atendimento ![image](https://github.com/giselleschwab/plant-burguer/assets/118859853/d0f25933-bc6c-42c1-919f-830213d8154e) {400x300}

Na rota do atendimento, o garçom/garçonete pode realizar um novo pedido e também acessar os pedidos que já estão prontos para serem servidos.
Ao acessar a rota "Novo Pedido" o atendente anota o nome do cliente e após isso é redirecionado para o menu do cardápio onde ao clicar nos itens do menu, eles são automaticamente adicionados no resumo do pedido.
Após clicar "Enviar" os pedidos são enviados para a cozinha. 


### Cozinha
Na rota da cozinha, o cozinheiro/cozinheira recebe os pedidos que vem do atendimento. Após terminar o pedido e ao clicar em "Pronto" o pedido é enviado para a rota "Para servir" no atendimento. Além disso, na aba "Finalizados" o cozinheiro/cozinheira vai poder visualizar os pedidos que foram finalizados e quanto tempo levou o preparo.


### Administrador 
Nessa rota, é possível visualizar, cadastrar, editar e excluir produtos e funcionários.


