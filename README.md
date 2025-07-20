# Mon Portfolio

## Description

Ce portfolio a été conçu comme un projet complet en utilisant Symfony pour le back-end (gestion des routes, rendu Twig et API) et React pour le front-end dynamique (Navbar, Portfolio, Formulaire de contact).
Il utilise Vite.js pour le bundling, Bootstrap 5 (Lux) pour le style de base et est entièrement multilingue (français/anglais).
J’ai mis en place une architecture modulaire (chaque section est un composant React), un formulaire de contact fonctionnel avec envoi d’email via Symfony Mailer, et une organisation SEO-friendly avec sitemap.xml et balises meta personnalisées.
Ce projet illustre ma capacité à créer des sites modernes, performants et maintenables de A à Z.

---

## Technologies utilisées

- **Symfony 7** pour le backend et la gestion des templates avec Twig  
- **Vite** pour un bundler et un serveur de développement ultra-rapide  
- **React** pour construire des interfaces utilisateur dynamiques  
- **Doctrine ORM** pour la gestion de la base de données  
- **Yarn** pour gérer les dépendances JavaScript  

---

## Historique de la mise en place

### 1. Installation de Symfony

```bash
composer create-project symfony/skeleton:"7.2.x" my_project_directory
mv my_project_directory/* ./
mv my_project_directory/.* ./
rm -rf my_project_directory

