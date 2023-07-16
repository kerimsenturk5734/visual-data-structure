# visual-data-structure
<style>
r { color: Red }
o { color: Orange }
g { color: Green }
</style>

<div id="top"></div>

<p align="center">
<a href="https://github.com/kerimsenturk5734/visual-data-structure/blob/main/LICENSE.md" target="blank">
<img src="https://img.shields.io/github/license/kerimsenturk5734/visual-data-structure? style=flat-square" alt="visual-data-structure license" />
</a>
<a href="https://github.com/kerimsenturk5734/visual-data-structure/fork" target="blank">
<img src="https://img.shields.io/github/forks/kerimsenturk5734/visual-data-structure?style=flat-square" alt="visual-data-structure forks"/>
</a>
<a href="https://github.com/kerimsenturk5734/visual-data-structure/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/kerimsenturk5734/visual-data-structure?style=flat-square" alt="visual-data-structure stars"/>
</a>
<a href="https://github.com/kerimsenturk5734/visual-data-structure/issues" target="blank">
<img src="https://img.shields.io/github/issues/kerimsenturk5734/visual-data-structure?style=flat-square" alt="visual-data-structure issues"/>
</a>
<a href="https://github.com/kerimsenturk5734/visual-data-structure/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/kerimsenturk5734/visual-data-structure?style=flat-square" alt="visual-data-structure pull-requests"/>
</a>
</p>


<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Visual Data Structure</h3>

  <p align="center">
    <a href="https://github.com/kerimsenturk5734/visual-data-structure">
    <img src="https://raw.githubusercontent.com/kerimsenturk5734/visual-data-structure/main/bin/Debug/books-128.ico" alt="Logo" width="80" height="80">
    </a>

This repository contains a web application to visualize and teach the data structures.
<br/>

```🟥This project developed for "Project-1" course  in grade 3 term spring.🟥``` <br>

<hr>
<br />
<a href="https://github.com/kerimsenturk5734/visual-data-structure"><strong>Explore the docs »</strong></a>
<br/>
·<a href="https://github.com/kerimsenturk5734/visual-data-structure/issues">Report Bug</a>·
<br/>
<br/><br/>
<a href="https://github.com/kerimsenturk5734/visual-data-structure/blob/main/README-tr.md" target="_blank" rel="noreferrer">
<img src="https://emojigraph.org/media/twitter/flag-turkey_1f1f9-1f1f7.png" alt="tr" width="30" height="30"/>

```Türkçe```

</a>
<a href="https://github.com/kerimsenturk5734/visual-data-structure/blob/main/README.md" target="_blank" rel="noreferrer">
<img src="https://preview.redd.it/68cdrlhal0hz.png?auto=webp&s=a7e6c8f70065646b72d45fc6ba12c6bb9bf56923" alt="en" width="30" height="20"/>`

```English```

</a>
</div>

<!-- TABLE OF CONTENTS -->
<div align="left">
    <details>
      <summary><h1>Contents</h1></summary>
      <hr>
      <ol>
        <li>
          <a href="#about-the-project">About The Project</a>
          <ul>
            <li><a href="#abstract">Abstract</a></li>
            <li>
               <a href="#project-details">Project Details</a>
               <ul>
                  <li><a href="#database">Database</a></li>
                  <li><a href="#api">API</a></li>
                  <li><a href="#swagger">Frontend</a></li>
                  <li><a href="#react">Docker</a></li>
               </ul>
            </li>
            <li>
               <a href="#built-with">Built With</a> 
            </li>
          </ul>
        </li>
        <li>
          <a href="#getting-started">Getting Started</a>
          <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ol>
    </details>




<!-- ABOUT THE PROJECT -->
# About The Project

<!--projeyi anlat gif olarak kullanımını göster-->

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

## Getting Started

### Prerequisites
<hr>

1. Docker Engine 
2. 3000, 8080, 3306 ports must be available. If unavailable one of them you can change the ports inside ```./dockercompose.yml``` 

### Installation
<hr>

1. Clone the repo
   ```sh
   git clone https://github.com/kerimsenturk5734/visual-data-structure
   ```
2. ```File > Import > Install > From Existing Installation```  and select the project folder in Eclipse.(If you use IntelliJ, select eclipse project when importing.)

3. Finish.




<!-- CONTACT -->
## Contact
<hr>

<p align="center">
   <a href="mailto: kerimsenturk2002@outlook.com" target="blank"><img align="center" src="https://cdn-icons-png.flaticon.com/512/9840/9840614.png" height="40" width="40" /></a>
   <a href="https://twitter.com/kersenturk57" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="kersenturk57" height="30" width="40" /></a>
   <a href="https://www.linkedin.com/in/kerim-%c5%9fent%c3%bcrk-784a3220a/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="kerim-%c5%9fent%c3%bcrk-784a3220a" height="30" width="40" /></a>
   <a href="https://stackoverflow.com/users/16939669" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="16939669" height="30" width="40" /></a>
   <a href="https://www.instagram.com/s1r_ker1m/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="kerimm_sntrk" height="30" width="40" /></a>
</p>
<hr>
<p align="right">(<a href="#top">back to top</a>)</p>
