<template>
    <footer class="footer">
        <section id="footer" class="footer mt-5">
     <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="contact-address btm-brdr">
              <h4 class="fTitle">Services From <span>Developer</span></h4>
              <ul>
                <li>
                  <i class="fa fa-globe" aria-hidden="true"></i>
                  <span>Web Design and Development</span>
                </li>
                <li>
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                  <span>Mobile App Design and Development</span>
                </li>
                <li>
                  <i class="fa fa-desktop" aria-hidden="true"></i
                  ><span>Short and Long Term Trainings</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="contact-address btm-brdr">
              <h4 class="fTitle">Contact <span>Me</span></h4>
              <ul>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>+(251)943-44-74-99</span>
                </li>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>King George VI St, Addis Ababa 1000</span>
                </li>
                <li>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i
                  ><span>se.lingerew.getie@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="social-icons">
              <h4 class="fTitle">Social <span>News</span></h4>
              <ul>
                <li>
                  <a href="https://www.facebook.com/linge.dana/" target="_blank">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/GetieLingerew" target="_blank">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/lingerew-getie-404aa7208/" target="_blank">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/linge446/" target="_blank">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </footer>
</template>


<script>
export default{
    name: 'Footer'
}
</script>


<style scoped>

/*  Footer css */
.element-btn .element-fill-btn {
    background-color: #0DB8DE;
    border: 0;
    color: #fff;
    padding: 13px 5px;
    font-size: 16px;
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    width: 252px;
    margin: 0 auto;
    border-radius: 25px;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 50px -10px rgba(255, 10, 120, 1);
   
  }
  .fill-btn {
    background-color: #0DB8DE;
    border: 0;
    color: #ECF0F5;
    padding: 13px 5px;
    font-size: 16px;
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    width: 252px;
    margin: 0 auto;
    border-radius: 25px;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
   
  }
  .fill-btn:hover,
  .element-btn .element-fill-btn:hover {
    background-color: #201f1f;
    box-shadow: 0px 10px 50px -10px rgb(32, 31, 31);
  }
  
  
  .footer {
    position: relative;
    background-color: blue;
    padding:50px 0px;
  }
  
  
  .fTitle {
    font-weight: 900;
    font-size: 20px;
    color: #babdc0;
    text-transform: uppercase;
    font-style: italic;
    margin-bottom: 20px;
  }
  
  .fTitle span {
    color: #dce4e6;
  }
  
  .contact-address ul li,
  .contact-address ul li a {
    color: #ffffff;
    font-size: 13px;
    font-style: italic;
    margin-bottom: 15px;
    line-height: 25px;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }
  
  .contact-address ul li i {
    margin-right: 15px;
    display: inline-block;
    float: left;
    line-height: 32px;
  }
  
  .contact-address ul li span {
    display: flex;
  }
  
  .contact-address ul li a:hover {
    color: #0DB8DE;
  }
  
  .subscribe form .fill-btn {
    bottom: auto;
    top: 0;
    right: 0;
    left: auto;
    transform: translate(0%, 0);
    -webkit-transform: translate(0%, 0);
    -moz-transform: translate(0%, 0);
    -ms-transform: translate(0%, 0);
    width: 209px;
  }
  
  .social-icons ul li {
    display: inline-block;
    float: left;
    color: #fff;
    text-align: center;
    line-height: 43px;
    position: relative;
    width: 43px;
    height: 43px;
    margin-right: 28px;
  }
  
  .social-icons ul li a {
    color: #fff;
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 16px;
  }
  
  .social-icons ul li:before {
    content: "";
    width: 43px;
    height: 43px;
    display: inline-block;
    position: absolute;
    border: 1px solid #0DB8DE;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }
  
  .social-icons ul li:last-child {
    margin: 0;
  }
  
  .social-icons ul li:hover:before {
    background: #0DB8DE;
  }
  
</style>