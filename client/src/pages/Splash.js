import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';

class Splash extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }


  render() {
    return (
        <div>
        <section class="no-padding" id="portfolio">
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="col-lg-4 col-sm-6">
                    <div class="portfolio-box">
                        <img src="img/portfolio/Screenshot (34).png" class="img-responsive portfolio-pic" alt="Meal Mapper"/>
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                             
                                <div class="project-name">Dog Walker</div>
                                <div>
                                    <a href="https://dogowalker.herokuapp.com/" target="_blank" class="btn btn-default btn-l">Website</a>
                                    <a href="https://github.com/obgoody/project-two.git" target="_blank" class="btn btn-default btn-l">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="portfolio-box">
                        <img src="img/portfolio/Screenshot (35).png" class="img-responsive portfolio-pic" alt="Collectr"/>
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                             
                                <div class="project-name">Movies/TV Shows Api</div>
                                <div>
                                    <a href=" https://manueltrujillo02.github.io/movies/." target="_blank" class="btn btn-default btn-l">Website</a>
                                    <a href="https://github.com/manueltrujillo02/movies.git" target="_blank" class="btn btn-default btn-l">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="portfolio-box">
                        <img src="img/portfolio/Screenshot (36).png" class="img-responsive portfolio-pic" alt="Between You and Me"/>
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                             
                                <div class="project-name">GOT Quiz</div>
                                <div>
                                    <a href="https://santo092.github.io/Project-1/" target="_blank" class="btn btn-default btn-l">Website</a>
                                    <a href="https://github.com/santo092/Project-1.git" target="_blank" class="btn btn-default btn-l">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <div class="col-lg-4 col-sm-6">
                    <div class="portfolio-box">
                        <img src="img/portfolio/hangman.png" class="img-responsive portfolio-pic" alt="Superhero Hangman"/>
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                   
                                <div class="project-name">Superhero Hangman</div>
                                <div>
                                    <a href="https://secure-hamlet-72687.herokuapp.com/" target="_blank" class="btn btn-default btn-l">Website</a>
                                    <a href="https://github.com/llh914/hangman-game" target="_blank" class="btn btn-default btn-l">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="portfolio-box">
                        <img src="img/portfolio/nyt.png" class="img-responsive portfolio-pic" alt="NYT Scraper"/>
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                          
                                <div class="project-name">New York Times Scraper</div>
                                <div>
                                    <a href="https://sheltered-gorge-91026.herokuapp.com/" target="_blank" class="btn btn-default btn-l">Website</a>
                                    <a href="https://github.com/llh914/Mongo-Scraper" target="_blank" class="btn btn-default btn-l">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="portfolio-box">
                        <img src="img/portfolio/eatdaburger.png" class="img-responsive portfolio-pic" alt=""/>
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                            
                                <div class="project-name">Eat-Da-Burger</div>
                                <div>
                                    <a href="https://calm-plains-98701.herokuapp.com/index" target="_blank" class="btn btn-default btn-l">Website</a>
                                    <a href="https://github.com/llh914/burger" target="_blank" class="btn btn-default btn-l">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>
    <section class="bg-primary" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">About Me</h2>
                    <hr class="light"/>
                </div>
                <div  class="col-lg-2 col-lg-offset-2 text-center">
                    <img id="aboutmeimage" src="img/Picture 9.jpg" style="height:150px;margin:auto;" class="img-responsive"/>
                </div>
                <div class="col-lg-6" id="bio">
                    <p class="text-faded"></p>
                    <p class="text-faded"> </p>
                    <p class="text-faded"></p>
                </div>
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <a href="#contact" class="page-scroll btn btn-default btn-xl sr-button">Contact Me</a>
                </div>
            </div>
        </div>
    </section>
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">Let's Get In Touch!</h2>
                    <hr class="primary"/>
                    <p>For all inquiries, please email me at MannyTrujillo02@outlook.com and I will get back to you as soon as possible!</p>
                </div>
                <div class="col-lg-2 col-lg-offset-3 text-center">
                    <a href="https://www.linkedin.com/in/manuel-trujillo-43200a178/"><i class="fa fa-linkedin-square fa-3x sr-contact social"></i></a>
                    <p><a href="https://www.linkedin.com/in/manuel-trujillo-43200a178/">Manuel Trujillo</a></p>
                </div>
                <div class="col-lg-2 text-center">
                    <a href="https://github.com/manueltrujillo02"><i class="fa fa-github fa-3x sr-contact social"></i></a>
                    <p><a href="https://github.com/manueltrujillo02">ManuelTrujillo02</a></p>
                </div>
                <div class="col-lg-2 text-center">
                    <a href="MannyTrujillo02@outlook.com"><i class="fa fa-envelope-o fa-3x sr-contact social"></i></a>
                    <p><a href="MannyTrujillo02@outlook.com">MannyTrujillo02@outlook.com</a></p>
                </div>
            </div>
        </div>
    </section>
    </div>
    );
  }
}

export default Splash;