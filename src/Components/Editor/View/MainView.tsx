import React from 'react';

function MainView() {
  const html = `<!--<!DOCTYPE html>
  <html lang="en">
  <head>-->
  
  <!--TITLE
  <title>Levioosar pizza hut</title>-->
  
  <!--SHORTCUT ICON
  <link rel="shortcut icon" href="assets/images/favicon.ico" />-->
  
  <!--META TAGS
  <meta charset="UTF-8" />
  <meta name="language" content="ES" />
  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />-->
  
  <!--FONT AWESOME-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
  <!--GOOGLE FONTS-->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Dancing+Script:wght@400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  
  <!--PLUGIN-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  
  <!--STYLE SHEET
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/home.css" />
  <link rel="stylesheet" href="assets/css/animate.css" />-->
  </head>
  <body>
  
  
  <!--NAV-->
  <nav>
      <section class="flex_content">
          <strong class="logo fixed_flex">LOGO.</strong>
      </section>
      <section class="flex_content">
          <a href="javascript:void(0)" class="ham"><i class="fa fa-bars"></i></a>
      </section>
  </nav>
  
  
  <!--MENU-->
  <menu id="menu">
      <a href="javascript:void(0)" class="close"><i class="fa fa-times"></i></a>
      <strong class="fixed_flex logo">LOGO.</strong>
      <br>
      <ul>
          <li><a href="#" target="_blank"><i class="fa fa-map-o"></i> 753 Gaffney Rd Fairbanks, AK 99701 </a></li>
          <li><a href="emailto:support@sp.domain"><i class="fa fa-envelope-o"></i> support@sp.domain</a></li>
          <li><a href="tel:1234567890"><i class="fa fa-headphones"></i> 123-456-7890</a></li>
      </ul>
      <br>
      <ul>
          <li><a href="#">Home</a></li>
          <li class="dropdown">
              <a href="javascript:void(0)">Categories</a>
              <aside>
                  <a href="#">Category one</a>
                  <a href="#">Category two</a>
                  <a href="#">Category three</a>
                  <a href="#">Category four</a>
              </aside>
          </li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li class="fixed_flex"><a href="javascript:void(0)" class="btn btn_1 chat_popup">Get our app</a> <a href="#" class="btn btn_2 chat_popup">Order now</a> </li>
      </ul>
  </menu>
  
  
  <!--HEADER-->
  <header class="flex">
      <section class="flex_content">
          <article>
              <h1 class="cursive big">Skip the queue<br><strong class="title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get it <b>today!</b></strong></h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </article>
      </section>
      <section class="flex_content">
          <figure><img src="https://i.postimg.cc/5264Ydjr/header-1.png" alt="" loading="lazy" /></figure>
          <figure><img src="https://i.postimg.cc/c4D1L41Y/header-2.png" alt=""  /></figure>
          <aside class="tag fixed_flex">
              <img src="https://i.postimg.cc/N02jVqcX/header-icon-01.png" alt="" />
              <strong>
                  <h6>French fries</h6>
                  <p>Book today</p>
              </strong>
          </aside>
      </section>
  </header>
  
  
  <!--MAIN-->
  <main>
      <!--division_1-->
      <div class="divisions division_1 flex">
          <section class="flex_content">
              <figure>
                  <img src="https://i.postimg.cc/8c4pWTh2/01.png" alt="" loading="lazy" />
              </figure>
          </section>
          <section class="flex_content padding_2x">
              <em class="cursive">How it works?</em>
              <h2 class="title big">Get it easy</h2>
              <span class="bar"></span>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
              <ul class="flex">
                  <li class="fixed_flex">
                      <figure><img src="https://i.postimg.cc/zBmGYtzc/icon-1.png" alt="" /></figure>
                      <aside>
                          <h5>Pick your fab</h5>
                          <p>Choose your favourite meal</p>
                      </aside>
                  </li>
                  <li class="fixed_flex">
                      <figure><img src="https://i.postimg.cc/zBmGYtzc/icon-1.png" alt="" /></figure>
                      <aside>
                          <h5>Delivery time</h5>
                          <p>Choose your pickup time</p>
                      </aside>
                  </li>
                  <li class="fixed_flex">
                      <figure><img src="https://i.postimg.cc/zBmGYtzc/icon-1.png" alt="" /></figure>
                      <aside>
                          <h5>Pay securely</h5>
                          <p>Make a secure payment</p>
                      </aside>
                  </li>
                  <li class="fixed_flex">
                      <figure><img src="https://i.postimg.cc/zBmGYtzc/icon-1.png" alt="" /></figure>
                      <aside>
                          <h5>Enjoy your meal</h5>
                          <p>Have a delicious & fresh meal ready.</p>
                      </aside>
                  </li>
              </ul>
          </section>
      </div>
      
      <!--division_3-->
      <div class="divisions division_3">
          <article class="flex">
              <section class="flex_content padding_2x">
                  <figure><img src="https://i.postimg.cc/6pg9Cjvp/02.png" alt="" loading="lazy" /></figure>
              </section>
              <section class="flex_content padding_2x">
                  <h3 class="title medium">Try our <b>app!</b></h3>
                  <p>Available on android and apple devices</p>
                  <aside class="fixed_flex">
                      <a href="#" class="fixed_flex">
                          <img src="https://i.postimg.cc/DyjTrjXb/play-store.png" alt="" />
                          <strong>
                              <h5>GET IT ON</h5>
                              <h3>Google play</h3>
                          </strong>
                      </a>
                      <a href="#" class="fixed_flex">
                          <img src="https://i.postimg.cc/wTF5xJsV/apple-store.png" alt="" />
                          <strong>
                              <h5>Download on the</h5>
                              <h3>App store</h3>
                          </strong>
                      </a>
                  </aside>
              </section>
          </article>
      </div>
  </main>
  
  
  <!--FOOTER-->
  <footer class="padding_3x">
      <section class="flex padding_1x">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
      </section>
      <section class="flex">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Careers</a>
          <a href="#">Contact us</a>
          <a href="#">Terms & conditions</a>
      </section>
      <section class="flex">
          <p>© Copyright 2023 || All rights reserved || website name</p>
      </section>
  </footer>
  
  
  <!--ADDITIONAL-->
  <div class="overlay"></div>
  <section class="social_icons">
      <a href="#" title="Facebook"><i class="fa fa-facebook"></i></a>
      <a href="#" title="Instagram"><i class="fa fa-instagram"></i></a>
      <a href="#" title="Twitter"><i class="fa fa-twitter"></i></a>
  </section>
  <a href="#" class="google_play fixed_flex" title="Play store">
      <img src="https://i.postimg.cc/sgXYMXYR/g-play.png" alt="" />
      <strong>
          <h6>Download now on</h6>
          <h3>Play Store</h3>
      </strong>
  </a>
  
  <!--JAVASCRIPT
  <script type="text/javascript" src="assets/js/main.js"></script>
  <script type="text/javascript" src="assets/js/home.js"></script>
  <script type="text/javascript" src="assets/js/animate.js"></script>
  </body>
  </html>-->
    
    
    
    
  <!--REMOVE THIS-->
  <div class="credits">
  <b>Credits:</b>
  <a href="https://postimg.cc" title="Publish Your Images" target="_blank">PostImages</a> , 
  <a href="https://www.canva.com/search/templates?q=mobile%20app" title="Mobile Frames" target="_blank">Canva</a> ,
  <a href="https://www.freepik.com" title="Images" target="_blank">Freepik</a> ,
    <a href="flaticon.com/" title="Icons" target="_blank">FlatIcons</a> 
  </div>`;
  
  const css = `
  
  `

  const content = `
  <style>${css}</style>
  <div>${html}</div>
`;
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: content}} />
      <h1 >hey</h1>
    </div>
  );
}

export default MainView;
