
<div id="top"></div>

<div align="center">

   <h1>Visual Data Structure</h1>
   <hr>

   ![GitHub Issues](https://img.shields.io/github/issues/kerimsenturk5734/visual-data-structure)
   ![GitHub License](https://img.shields.io/github/license/kerimsenturk5734/visual-data-structure)
   ![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kerimsenturk5734/visual-data-structure)
   ![GitHub Forks](https://img.shields.io/github/forks/kerimsenturk5734/visual-data-structure)
   ![GitHub Stars](https://img.shields.io/github/stars/kerimsenturk5734/visual-data-structure)

   | [English](README.md) | [Turkish](./docs/readme/README_TR.md) |


   <a href="https://github.com/kerimsenturk5734/lab-report/tree/master/docs">
      <strong>Explore the more documentation »</strong>
   </a>

   This repository contains a web application to visualize and teach the data structures.

   ```🟥This project developed for "Project-1" course  in grade 3 term spring.🟥```
</div>


<!-- PROJECT LOGO -->
<br />


<!-- ABOUT THE PROJECT -->
# About The Project

## Abstract
<hr>

Data structures are important concepts that play a fundamental role in computer science. They are used to organize and effectively manipulate data. Data structures are designed to perform basic operations such as storing, accessing, inserting and deleting data items.
Effective use of data structures improves performance, optimizes memory usage, and provides an overall more efficient programming experience.
In this project, a web-based application was made to facilitate and facilitate learning by providing the educational content and visualization of such an important field.
   
   <p align="right">(<a href="#top">back to top</a>)</p>

   <img src="./images/presantation.gif">

### Project Details 
<hr>

#### Database
   <p>
      MySQL used in this project as a relational database. We have those tables and relations in this database what mentioned below:
      <img src="./images/ERmodelEN.png">
   </p>
   

#### API
   <p>
      Spring Boot Framework used to develop API in this project. We have those endpoints and its JSON templates in this API what mentioned below
      <img src="./images/Endpoints.png">
   </p>

#### Docker
   <p>
      Docker used to install project easily in this project. We have three subimage in visualdatastruct container;
      <br>
   </p>

   >**```app-client```** This is frontend react service in running on localhost:3000<br> 
   
   >**```app-server```** This is Spring Boot API service in running on localhost:8080<br>
   
   >**```docker-db-datastructurecourse```** This is MySQL server in running on localhost:3306<br>

### Built With
<hr>

   
   <p align="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" width="240" height="64" alt="Spring Boot" title="Spring Boot" class="img-small">
      <img src="https://maven.apache.org/images/maven-logo-black-on-white.png" width="240" height="64" alt="Maven" title="Maven" class="img-small">
      <br>
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" width="70" height="70" alt="Java" title="Java" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" width="70" height="70" alt="React" title="React" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" width="70" height="70" alt="JS" title="JS" class="img-small">
      <img src="https://d3js.org/logo.svg" width="70" height="64" alt="" title="D3" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" width="70" height="70" alt="" title="Docker" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width="70" height="70" alt="" title="MySQL" class="img-small">
   </p>

## Getting Started

### Prerequisites
<hr>

1. Docker Engine 
2. 3000, 8080, 3306 ports must be available. If unavailable one of them you can change it with available ports in ```./dockercompose.yml``` 

### Installation
<hr>

1. Clone the repo
   ```sh
   git clone https://github.com/kerimsenturk5734/visual-data-structure
   ```
   
2. Run following code in ```./visualdatastruct-api``` to build api:
   ```sh
   mvn clean install -DskipTests
   ```
   
3. Be sure that Docker Engine is running.

4. Run following code in root location. It will take a while when installing dependencies, be patient.
   ```sh
   docker-compose up
   ```

5. After installation, you will see the green light visualdatastruct container running on Docker Desktop.

6. Open the browser and locate to ```localhost:3000``` (If you have changed the port then put into ```./dockercompose.yml``` new port instead of 3000)




<!-- CONTACT -->
## Contact
<hr>

<p align="center">
   <a href="mailto: kerimsenturk2002@outlook.com" target="blank"><img align="center" src="https://cdn-icons-png.flaticon.com/512/9840/9840614.png" height="40" width="40" /></a>
   <a href="https://twitter.com/kersenturk57" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="kersenturk57" height="30" width="40" /></a>
   <a href="https://www.linkedin.com/in/kerim-%c5%9fent%c3%bcrk-784a3220a/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="kerim-%c5%9fent%c3%bcrk-784a3220a" height="30" width="40" /></a>
   <a href="https://stackoverflow.com/users/16939669" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="16939669" height="30" width="40" /></a>
   <a href="https://www.instagram.com/_kerimsntrk" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="kerimm_sntrk" height="30" width="40" /></a>
</p>
<hr>
<p align="right">(<a href="#top">back to top</a>)</p>
