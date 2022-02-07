# Bienvenue sur le frontend de notre projet POC CRA
@Author Valentin Descomps, Quentin Viricel, Aymeric Faure
-----------------
* Notre application est basé sur :
  * Angular
  * ng-bootstrap
-----------------
  * Le frontend se base sur des components xxx-list qui affichent une vue macro (les projets, les users, etc ...) et des components xxx-details qui affichent plus de détail en cliquant sur un des objets d'un component list (détail des projets par exemple)
  * Chaque objet (projet, user, ...) a un service dédié qui possède les méthodes de connexion à l'api de notre application (get, update, create, ...)
  * Dans app.component.ts, nous avons défini des boolean pour les rôles ADMIN et MANAGER afin de permettent un affichage des onglets de la navbar cohérent en fonction du type d'utilisateur connecté 

