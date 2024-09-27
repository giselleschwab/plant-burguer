# Plant & Burguer

<div align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" height="30px";/>
</div>   


 ## 1. Project Summary

In this project, an interface was developed for a burger restaurant containing different screens for service, kitchen, and administration. The application was developed using REACT and consumed an API.

## 2. User Stories

#### [User Story 1] Waiter/Waitress should be able to log into the system if the admin has already provided the credentials.
#### [User Story 2] Waiter/Waitress should be able to take the customer’s order.
#### [User Story 3] Head chef should be able to see the orders.
#### [User Story 4] Waiter/Waitress should be able to see the orders ready to serve.
#### [User Story 5] Store Administrator should manage their employees.
#### [User Story 6] Store Administrator should manage the products.


## 3. Project Details
The application contains three types of routes: one for service, another for the kitchen, and another for the administrator.

To log in and access any of the routes, click on https://plant-burguer.vercel.app and log in with the credentials below:

| USER                         |PASSWORD|
|------------------------------|:----:|
| atendimento@plantburguer.com | 123456 |
| cozinha@plantburguer.com     | 123456 |
| admin@plantburguer.com       | 123456 |


### Service

In the service route, the waiter/waitress can place a new order and also access orders that are ready to be served. Upon accessing the "New Order" route, the attendant enters the customer's name and is then redirected to the menu. By selecting the desired items from the menu, they are automatically added to the order summary. After finalizing the order and clicking "Send," the orders are immediately forwarded to the kitchen.

In the "Orders to Serve" route, the attendant has access to the orders coming from the kitchen that are ready to be served. Once delivered, the orders can be marked as completed and viewed in the "Delivered Orders" route.


### Kitchen
In the kitchen route, the cook receives the orders that come from service. After finishing the order and clicking "Ready," the order is sent to the "Orders to Serve" route in the service section. Additionally, in the "Completed" tab, the cook will be able to see the orders that have been completed and how long the preparation took.


### Administrator
In this route, it is possible to view, register, edit, and delete products and employees.


## 4. Developers

Giselle Schwab Silva  

Melina Osik  

Talita Martins 


