@import "~react-image-gallery/styles/css/image-gallery.css";

@font-face {
  font-family: 'Josefin Sans';
  src: url(../fonts/josefin.woff2) format('woff2');
}
@font-face {
  font-family: 'Nunito Regular';
  src: url(../fonts/nunitoregular.woff2) format('woff2');
}
@font-face {
  font-family: 'Nunito Bold';
  src: url(../fonts/nunitobold.woff2) format('woff2');
}
@font-face {
  font-family: 'Poppins';
  src: url(../fonts/poppins.woff2) format('woff2');
}
::-webkit-scrollbar {
  width: 8px;
}
html.noover {
  overflow-y: hidden;
  overflow: hidden;
}
html.noover body {
  overflow-y: hidden;
  overflow: hidden;
}
.focusmode {
  backdrop-filter: brightness(1) blur(0px);
  transition: .2s all;
}

::-webkit-scrollbar-thumb {
  background-clip: content-box;
  background-color: #a21826b3;
  border-radius: 40px;
}
.main-main {
  width: 100vw;
  -webkit-transform: none;

}

:root {
  --border-radius: 8px;

  /* Colors */
  --color-white: #fff;
  --color-gray-1: #102a43;
  --color-gray-2: #243b53;
  --color-gray-3: #334e68;
  --color-gray-4: #486581;
  --color-gray-5: #627d98;
  --color-gray-6: #829ab1;
  --color-gray-7: #9fb3c8;
  --color-gray-8: #bcccdc;
  --color-gray-9: #d9e2ec;
  --color-gray-10: #f0f4f8;
  --color-yellow-1: #8d2b0b;
  --color-yellow-2: #b44d12;
  --color-yellow-3: #cb6e17;
  --color-yellow-4: #de911d;
  --color-yellow-5: #f0b429;
  --color-yellow-6: #ff2425;
  --color-yellow-7: #fadb5f;
  --color-yellow-8: #fce588;
  --color-yellow-9: #fff3c4;
  --color-yellow-10: #fffbea;

  /* Box Shadows */
  --box-shadow-1: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  --box-shadow-2: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  --box-shadow-3: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  --box-shadow-4: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  --box-shadow-5: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
  --box-shadow-6: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
  --box-shadow-7: rgba(0, 0, 0, 0.2) 0px 4px 5px -2px,
    rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
  --box-shadow-8: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
  --box-shadow-9: rgba(0, 0, 0, 0.2) 0px 5px 6px -3px,
    rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px;
  --box-shadow-10: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px,
    rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
  --box-shadow-11: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px,
    rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
  --box-shadow-12: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px,
    rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
  --box-shadow-13: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px,
    rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
  --box-shadow-14: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px,
    rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px;
  --box-shadow-15: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px,
    rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px;
}
*:not(html) {
  -webkit-transform: translate3d(0, 0, 0);
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: #1414b8;
  color: var(--color-gray-2);
}

html {
  overflow-y: overlay;
 
}

h1 {
  font-size: 2.1rem;
  line-height: 1.2;
}
h2 {
  font-size: 1.7rem;
  line-height: 1.3;
}
h3 {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);
  font-family: Josefin Sans;
  font-size: 2em;

  margin-top: 2em;
  text-transform: uppercase;
}
h4 {
  font-size: 1.3rem;
  line-height: 1.5;
}
h5 {
  font-size: 1rem;
  line-height: 1.6;
}
h6 {
  font-size: 0.8rem;
  line-height: 1.7;
}

a {
  color: inherit;
}

* {
  box-sizing: border-box;
}
.rest-of-content {
  overflow-x:hidden;
  transform: none;
}
main {
  /* margin: 0 auto 4rem;
  max-width: 1000px;
  padding: 4rem 1rem 0; */
  background: #fff;
  display: flex;
  -webkit-transform: none;



}
main.modalup {
  overflow-y: scroll;
}

.powered-by-stripe-small {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/stripe-small-min.png);
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 32px;
  position: absolute;
  width: 126px;
}
@keyframes neon1 {
  from {
  text-shadow: 0 0 4px #ffffff78, 0 0 8px #ffffff85, 0 0 16px #ffffff0d, 0 0 28px #0e42857d, 0 0 36px #0e428594, 0 0 48px #0e42859e, 0 0 64px #0e428591, 0 0 84px #0e42858c;
  }
  to {
  text-shadow: 0 0 2px #ffffff78, 0 0 4px #ffffff85, 0 0 8px #ffffff0d, 0 0 14px #0e42857d, 0 0 18px #0e428594, 0 0 24px #0e42859e, 0 0 32px #0e428591, 0 0 42px #0e42858c;
  }
}
.selection-section.secondstep {
  display: none;
}

.step-one-pay.secondstep {
  display: none;
}
.step-two-pay.firststep {
  display: none;
}

.split-point-view {
  width: 60%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-right: 20px;
  }
  .next-btn {
    background: linear-gradient( 
90deg
,#f23,#ff2278);
    border: 2px solid #ff005e;
    border-radius: 3px;
    color: #fff;
    float: right;
    font-weight: 700;
    margin-top: 10px;
    opacity: 1;
    padding: 6px 10px;
    width: 100%;
    cursor: pointer;
}

.next-btn.true {
    opacity: .7;
    cursor: default;
}
.white-sh-var {
  filter: drop-shadow(0 3px 4px rgba(0,0,0,.12)) drop-shadow(0 3px 3px rgba(0,0,0,.14)) drop-shadow(0 1px 8px rgba(0,0,0,.12)) drop-shadow(0 -2px 2px rgba(0,0,0,.1));
  color: #fff;
  font-family: Nunito Bold;
  text-align: left;
  font-size: 1.3em;
  margin-top: 0.8em;
  margin-bottom: 0.3em;
}
div.react-dropdown-select {
    height: 38px;
    padding: 0 10px;
    background: linear-gradient( 
302deg
,rgba(255,255,255,.12),rgba(255,255,255,0));
    border: 3px solid #bd9bd4;
    border-radius: 0;
    color: #f7f7f7;
font-weight: normal;
}


#payment-form .ship-zipcountry input.form-control.form-control, #payment-form-old .ship-zipcountry input.form-control.form-control {
  width: 48%;
}

.paybtn-cont {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.white-sh-l span {
  display: inline;
  font-style: italic;
}

.white-sh {
color: #fff;
  text-align: center;
  font-family: 'Nunito Bold';
margin: 2em auto 1em auto;
  max-width: 950px;
  padding-left: 1em;
  padding-right: calc(1em + 10px);
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 3px rgba(0, 0, 0, 0.14)) drop-shadow(0 1px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
}
.white-sh-l {
font-family: Nunito Bold;
margin: 0em auto 0em;
max-width: 950px;
color: #fff;
padding-left: 1em;
padding-right: calc(1em + 10px);
text-align: center;
filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 3px rgba(0, 0, 0, 0.14)) drop-shadow(0 1px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
}
.white-sh span {
display: inline;
}
.white-hero-1p {
color: #fff;
padding-left: 1em;
padding-right: calc(1em + 10px);
text-align: center;
font-family: Nunito Regular;
font-size: 1.2em;
margin: 0em auto 0em;
max-width: 850px;
}
.white-hero-p {
  color: #fff;
  text-align: center;
  font-family: 'Nunito Regular';
  margin: 0.5em auto 1em auto;
  max-width: 850px;
  padding-left: 1em;
  font-size: 1.2em;
  padding-right: calc(1em + 10px);
}
.y-heading.y-sec {
  text-align: right;
}

ul.graph-list {
  columns: 3;
  list-style-type: none;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding:0;
}

ul.graph-list li {
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  font-size: 1.5em;
  color: #fff;
  height: 165px;
  text-align: center;
  break-inside: avoid-column;
}

ul.graph-list li span {
  display: table;
  font-family: 'Nunito Regular';
  font-size: .7em;
  margin: 0 auto;
}

.graphtitlecont {
  margin-top: 7em;
}
ul.graph-list li:nth-child(2) {height: 100px; padding-top:5px;}
ul.graph-list li:nth-child(1) {
border-bottom: 5px solid #ef4141;
padding-bottom: 5px;
margin-top: -5px;
padding-top: 10px;
}
ul.graph-list li:nth-child(3) {
  border-bottom: 5px solid #000;
  padding-bottom: 5px;
  padding-top: 5px;
}

.white-h {
  font-size: 2.1rem;
  letter-spacing: 0;
  margin: 1em auto;
  margin-top:3em;
  text-align: center;
  color: #fff;
  padding-left: 1em;
  padding-right: 1em;
  max-width: 1300px;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 3px rgba(0, 0, 0, 0.14)) drop-shadow(0 1px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
}
.white-hero-p span {
  font-style: italic;
  margin-right: 4px;
}

.final-p-section {
  margin-top: 3em;
}
.next-btn.stepback {
  padding: 6px 25px;
  width: 20%;
  width: fit-content;
  margin-top: 0px;
  background: none;
  border: 2px solid #7d4360;
  font-weight: normal;
}

.selection-render .secondstep .pay-btn {
  width: 73%;
}

.ship-zipcountry {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
#payment-form .ship-street input.form-control.form-control {
  margin-bottom: 4px;
}
#payment-form-old .ship-street input.form-control.form-control {
  margin-bottom: 4px;
}
div.ship-street > input:nth-of-type(2) {
  border: 2px solid #bd9bd4c2;
  height: 32px;
}
form .secondstep label {
  display: block;
    margin: 0;
    font-size: 12px;
    text-align: left;
    color: #c7c7c7;
    margin-bottom: -4px;
    margin-top: -5px;
}
.ship-zipcountry > div {
  width: 48%;
  margin-bottom: 8px;
}

.ship-citystate {
  display: flex;
  justify-content: space-between;
}


.preorder-bookimg-cont {
  position: relative;

  margin: 0 auto;
}
.preorder-bookimg-cont:before {
  display: block;
  content: "";
  width: 100%;
  padding-top: calc((475 / 656) * 100%);
}




#payment-form .ship-citystate input.form-control.form-control {
  width: 48%;
}
#payment-form-old .ship-citystate input.form-control.form-control {
  width: 48%;
}
.react-dropdown-select-content.react-dropdown-select-type-single span {
    margin-top: -2px;
    overflow: hidden;
    text-overflow: ellipsis;
}
div.react-dropdown-select-content.react-dropdown-select-type-single {

  align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    white-space: nowrap;
}
span.react-dropdown-select-item.react-dropdown-select-item-selected {
    background: rgb(49 0 128);
    border-bottom: 1px solid rgb(255 255 255 / 17%);
}
span.react-dropdown-select-item {
    background: rgb(49 0 128);
    border-bottom: 1px solid rgb(255 255 255 / 17%);
}
div.react-dropdown-select:hover, div.react-dropdown-select:focus-within {
    border: 3px solid #bd9bd4;
}

.react-dropdown-select-dropdown.react-dropdown-select-dropdown-position-top {
  bottom: 36px;
  max-height: 260px;
  opacity: .98;
  width: 200%;
  left: -98%;
}
span.react-dropdown-select-item:hover, span.react-dropdown-select-item:focus {
background: rgb(49 0 128);
}
div.react-dropdown-select-dropdown-handle {
    height: 36px;
}
input.react-dropdown-select-input {
    line-height: 36px;
    margin-top: 16px;
    color: #f7f7f7;
    font-size: medium;
}
@keyframes letterspace {
  0% {
    letter-spacing: 0rem;
  }
  100% {
    letter-spacing: 0.3rem;
  }
}

.hello-list-content-cont {
  width: fit-content
}
@media (max-width: 1050px) {

  body vm-player {
    --vm-control-spacing: 2px;
    --vm-control-padding: 2px;
  }

  .time-section svg.stopper {
    height: 120px;
    width: 120px;
  }
  
  div.compare-today-subtext {
    font-size: 20px;
}

  .j-third div.j-paragraph {
    font-size:1em;
  }
  .j-second div.j-paragraph {
    font-size:1em;
    margin-top: -16%;
  }
  .j-first div.j-paragraph {
    font-size:1em;
    margin-top: -18%;
  }
  div.show-me-title {
    font-size: 42px;
    line-height: 64px;
}

  div.firststep-btn {
    padding: 6px 8px;
    font-size: 15px;
}
  div.before-text, div.after-text {
    font-size: 60px;
  }
  div.bonus-preprice {
    margin-right: 10px;
    margin-left: -100px;
}
  div.mb-right-arrow {margin-right: 10px;margin-left: 10px;width: 10%;}

  div.mb-left-arrow {width: 10%;margin-right: 10px;}
  
  div.minibook-container {width: 80%;}
  div.y-heading.second-h {
    text-align: center;
}
  div.mb-content-content {
    column-count: 1;
}


  div.y-cont.y-second-el {
    flex-direction: column-reverse;
}


  

  div.y-subheading {
    font-size: 18px;
}

  div.y-signature {
    background-position: center;
}
div.y-cta {
  margin-left: 0;
  text-align: center;
}

div.y-container .y-preorderbtn {
  margin: 40px auto;
} 
  div.y-cont {
    flex-direction: column-reverse;
}
div.y-heading {
  font-size: 38px;
  text-align: center;
  margin-left: 0;
}

div.y-text-cont {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

div.y-image-contain {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}


  div.bg-renderer-pl {
    background-size: 8%;
}

  .main-main div.read-more-title {
    font-size: 40px;

  }
  div.archtype-title {
    font-size: 44px;
}
  div.compare-today-subtext:after, div.compare-tomorrow-subtext:before {
  
    height: 10px;
    margin-top: 9px;
    width: 10px;
}
  div.compare-title-1, div.compare-title-2 {font-size: 60px;}

div.compare-title-1>span, div.compare-title-2>span {font-size: 24px;}

div.compare-today-container, div.compare-tomorrow-container {font-size: 20px;}
  div.icon-section-text {
    font-size: 12px;
}
div.hello-list-number-cont {
  width: 10%;
}
  div.vid-section-cta {
    font-size: 1.7rem;
  }
div.hello-list-item.h-second {
  margin-top: 0;
}
div.hello-list-item.h-third {
margin-top: 0;
}

  div.hello-list-item {
    width: 80%;
  }

  main div#say-hello-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}


  #archetype-container div.arch-cont {
    width: 50%;
    height: 400px;
  }
  #archetype-container.acc1 div.arch-cont.ac1, #archetype-container.acc2 div.arch-cont.ac2, #archetype-container.acc3 div.arch-cont.ac3, #archetype-container.acc4 div.arch-cont.ac4, #archetype-container.acc5 div.arch-cont.ac5, #archetype-container.acc6 div.arch-cont.ac6, #archetype-container.acc7 div.arch-cont.ac7, #archetype-container.acc8 div.arch-cont.ac8 {
    width: 60%;
}

#archetype-container.acc1 div.arch-cont.ac2, #archetype-container.acc2 div.arch-cont.ac1, #archetype-container.acc3 div.arch-cont.ac4, #archetype-container.acc4 div.arch-cont.ac3, #archetype-container.acc5 div.arch-cont.ac6,#archetype-container.acc6 div.arch-cont.ac5, #archetype-container.acc7 div.arch-cont.ac8, #archetype-container.acc8 div.arch-cont.ac7 {
    width: 40%;
}

  div.powered-by-stripe-final {

    height: 32px;
    margin: 0 auto 2px;
    width: 120px;
}
  div.ship-zipcountry>div {
    margin-bottom: 5px;
  }
.payment div.react-dropdown-select-dropdown-handle {
    height: 32px;
}
.payment input.react-dropdown-select-input {
    line-height: 32px;
    margin-top: 16px;
    color: #f7f7f7;
    font-size: medium;
}
.payment div.react-dropdown-select {
  min-height: 32px;
  height: 32px;
}
.payment div.react-dropdown-select-dropdown-handle {
  height: 32px;
  margin: 0;
}
  div.more-details {
    font-size: 15px;
}
  .final .payment div.more-details {
    display: none;
}

.payment div.more-details {
  display: block;
  }

  .selection-render #payment-form input.form-control.form-control {
    height: 32px;
    margin-bottom: 5px;
}
.selection-render #payment-form-old input.form-control.form-control {
  height: 32px;
  margin-bottom: 5px;
}
div.selection-render div#card-element {
  padding: 3px 2px;
}
div.prev-name-on-card, div.prev-email, div.prev-last-box {
  padding: 1px 10px;
  margin-bottom: 4px;
}
.loader-player {
  position: relative;
  transform: none;
    overflow: hidden;
}
  div.final-mobile-hero {
    display:block;
    color: #e0e0e0;
    font-weight: 700;
    font-size: 18px;
    font-style: italic;
    }
    
    div.final-mobile-text {
    display:block;
    color: #e0e0e0;
    line-height: 20px;
    font-size: 15px;
    }

    div.content-section {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: 100%;
      justify-content: center;
      align-items: center;
  }
  div.split-point-view {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-right: 20px;
    height: 100%;
    justify-content: center;
}
div.image-section {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/book-example-min.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 35%;
  width: 100%;
}

div.info-section {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  width: 100%;
height: auto;
  align-items: center;
}

div.info-section>ul>li {
    color: #dedede;
    font-size: 15px;
    margin-bottom: 2px;
    padding-left: 10px;
    text-align: left;
}

div.pay-section {
  width: 45%;
  top: 50%;
margin-top: 8px;
}

.final h4.mb-2 {
  display: none;
}



div.rev-optin.reveal.final>div.payment.register-form.col-md-6 {

  margin-top: 4px;
  }

  div.rev-optin-mobile.final>h4.mb-2 {
    display: block;
}



.rev-optin-mobile.final .time-section {
  display: none;

}


  .credit-card-last4:before {
    content: "**** ";
    color: #747474;
    font-size: 16px;
  }
  
  div.register-form h4 {
    font-size: 20px;
  }
  div.powered-by-stripe-small {
    background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/stripe-small-min.png);
    background-repeat: no-repeat;
    background-size: contain;
    height: 32px;
    width: 126px;
  
    position: absolute;
    display: block;
  }
  div.powered-by-stripe {
    display: none;
  }
  div.outer-star>.spinnerz:after {
    height: 3.1rem;
  }
  div.time-remaining {
    font-size: 3rem;

}
div.rev-optin>div.register-form.col-md-6 {
}
  div.spinnerz {
    margin-top:5px;
  }

  .regular div.rev-loadin  {
    padding-left: 1.5rem;
padding-right: 1.5rem;
}
.large div.rev-loadin  {
  padding-left: 0;
padding-right: 0;
}
.regular div.rev-player  {
  padding-left: 1.5rem;
padding-right: 1.5rem;
}
.large div.rev-player  {
padding-left: 0;
padding-right: 0;
}
div.rev-optin {


  width: 100%;
}


}
.content-section {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: center;
}

.info-section {
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  width: 50%;
}

.info-section>ul>li {
  color: #dedede;
  font-size: 18px;
  margin-bottom: 20px;
  padding-left: 10px;
  text-align: left;
}

.image-section {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/book-example-min.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 75%;
  width: 50%;
}
form#payment-form-old {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: -15px;
  flex-direction: column;
}

#payment-form-old > .pay-btn {
  width: 100%;
}
.selection-render .pay-btn {
  width: 100%;
}
/*  NUMBER FORMATTING */
.prev-last-box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: linear-gradient(
    0deg
    ,rgb(255 255 255/10%),hsla(0,0%,100%,0) 70%);
  border: 3px solid #bd9bd4;
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 3px;
  color: #868686;
  padding: 4px 10px;
  transition: all .2s .15s;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  cursor: default;
  margin-bottom: 8px;
}
.selection-render .card-error {
  position: initial;
  height: 0px;
  margin-top: 0;
  font-size: 12PX;
}
.powered-by-stripe-final {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/stripe-small-min.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 48px;
  width: 177px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.prev-name-on-card, .prev-email {
  background: linear-gradient(
    0deg
    ,rgb(255 255 255/10%),hsla(0,0%,100%,0) 70%);
  border: 3px solid #bd9bd4;
  border-top: none;
  border-right: none;
  border-left: none;  
  border-radius: 3px;
  color: #868686;
  flex: none;
  padding: 4px 10px;
  transition: all .2s .15s;
  text-align: left;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  cursor: default;
  margin-bottom: 8px;
}
.new-card-form {
  margin-bottom: 4px;
}
.selection-section {
  border-bottom: 2px solid #d522bd;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 16px;
  margin-top: 12px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}

.rev-optin.reveal.final > .time-section {
  display: none;
}

.load-false {

  visibility: hidden;
}

.load-true {
opacity:0;
  animation: newput .25s .25s forwards;

}
.load-false:after {
content: '';
background-repeat: no-repeat;
background-position: center;
background-image: url("data:image/svg+xml, %3Csvg version='1.1' id='loader-1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'%3E%3Cpath fill='%23fff' d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z'%3E%3CanimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E");
width: 96px;
height: 96px;
position: absolute;
background-size: contain;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
visibility: visible;
}

.rev-optin.reveal.final {
  width: 100%;
  z-index: 120;
  background: #320083d1;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 0s 50000s, color 0s 50000s!important;
}
.final-mobile-hero {
  display:none;
  }
  
  .final-mobile-text {
  display:none;
  }
.rev-optin.reveal.final > div.register-form.col-md-6 {
  margin-top: 14px;
  height: 90%;
}
.card-error{
  color: #f00;
  font-size: 14px;
  margin-top: 54px;
  font-weight: bold;
text-align: left;
}

.card-error-mobile {
  color: #f00;
  font-size: 14px;
  position: absolute;
  left: 50%;
    transform: translate(-50%, 0%);
}
.pay-btn:disabled {
  opacity: 0.55;
  cursor: default;
}
.pay-section {
  width: 30%;
  margin-top: 4px;
}
.disabled-true {
  opacity: .7;
  pointer-events: none;
}
.step-2 .new-card-form {
display: none;
}

.step-2 .powered-by-stripe-small {
display: none;
}
.result-message-success {
left: 0;
right: 0;
margin: auto;
font-size: 18px;
color: #fff;
font-weight: bold;
}
.success-true .card-error {
display: none;
}

.success-true .shipping-form-data {
display: none;
}

.success-true .powered-by-stripe-small {
display: none;
}

.success-true .new-card-form {
display: none;
}

.success-true .powered-container {
display: none;
}

p.result-message-text {
color: #fff;
}

p.result-message-text a {
color: #4226ff;
font-weight: bold;
}

.payment h2 {
  margin-top: auto;
  color: #ffffff;
  font-family: Josefin Sans;
  margin-bottom: 20px;
  font-size: 2.5em;
  padding-left: 0.5em;
  text-transform: uppercase;
  padding-right: 0.5em;
  padding-top: 2.5em;
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 3px rgba(0, 0, 0, 0.14)) drop-shadow(0 1px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
}
.result-message-success:before {
position: absolute;
content: "L";
color: white;
font-family: arial;
transform: scaleX(-1) rotate(-35deg);
margin-left: -25px;
}
.pay-btn {
  padding: 0;
  background: linear-gradient( 
90deg
, rgba(255,34,51,1) 0%, rgba(255,34,120,1) 100%);
  border: 2px solid rgb(255 0 94);
  font-weight: 700;
  color: #fff;
  padding: 6px 32px;
  border-radius: 3px;
  float: right;
  margin-top: 0px;
  opacity: 1;
}
div.status-1 .previous-payment {
  background: none;
  font-weight: normal;
}
.status-1 .new-payment {
background: linear-gradient( 
  294deg
  ,#a2f,#ff2278);
  font-weight: bold;
}


.previous-payment.is-checked {
  background: linear-gradient( 
    294deg
    ,#a2f,#ff2278);
    font-weight: bold;
}
.previous-payment.\30 {
  background: linear-gradient( 
    294deg
    ,#a2f,#ff2278);
}

.new-payment.\31 {
  background: linear-gradient( 
294deg
,#a2f,#ff2278);
}
.new-payment {
  border-radius: 3px;
  border: 2px solid #ff005e;
  padding: 4px;
  cursor: pointer;
}
button.btn.btn-danger {
  background: none;
  border: 2px solid #7d4360;
}
button.ml-auto.btn.btn-success:focus {
  box-shadow: none;
}
button.ml-auto.btn.btn-primary:after {
  content: " \203A";
  font-size: 30px;
  line-height: 0px;
  position: relative;
  top: 2px;
}
#share-form input.form-control.form-control {
  width: 60%;
}
form#share-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn.share-btn {
  background: linear-gradient( 
90deg, rgba(255,34,51,1) 0%, rgba(255,34,120,1) 100%);
  border: 2px solid rgb(255 0 94);
  font-weight: 700;
  color:#fff;
  width: 60%;
}
.btn.share-btn:hover {
color:#fff;
}
.btn.share-btn:after {
  content: ' \203A';
  font-size: 30px;
  line-height: 0px;
  position: relative;
  top: 2px;
}
button.ml-auto.btn.btn-success {
  background: linear-gradient( 
90deg, rgba(255,34,51,1) 0%, rgba(255,34,120,1) 100%);
  border: 2px solid rgb(255 0 94);
  font-weight: 700;
}
button.ml-auto.btn.btn-success:after {
  content: ' \203A';
  font-size: 30px;
  line-height: 0px;
  position: relative;
  top: 2px;
}
.rev-optin > div.register-form.col-md-6 {
  max-width: 100%;
}
.input-wrap {
  margin-top: 20px;
  opacity: 0;
  animation: newput .5s forwards;

}
.loader-player.engaged .focusmode {  backdrop-filter: brightness(0.66) blur(10px);  overflow-y: scroll;content: '';position: fixed;width: 100vw;height: 100vh;    transition: .2s all;left: 0;top: 0;z-index: 2;transform: none;}
.engaged .close-focus {
  height: 26px;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 460.775 460.775' style='fill:%23fff;enable-background:new 0 0 460.775 460.775;' xml:space='preserve'%3E%3Cpath d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z'/%3E%3C/svg%3E%0A");
  cursor: pointer;
  right: 0;
  position: fixed;
  top: 0;
  transform: none;
  margin-top: 12px;
  width: 26px;
  z-index: 3;
  margin-right: 12px;
}
.rev-optin-mobile.reveal {
  max-height: 400px;
  opacity: 1;
    padding-bottom: 20px;
    padding-top: 20px;
    background: rgba(0,0,0,0.35);
    background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/STARS.svg);
    backdrop-filter: saturate(180%) blur(4px);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 3;
}
.rev-optin-mobile.hidden {
  opacity: 0;
  max-height:0;
}

.rev-optin-mobile {
  transition: .8s all;
  display:none;
}
div.rev-optin-mobile > h4.mb-2 {
  color: #e0e0e0;
  font-family: Verdana;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  text-shadow: -1px -1px 1px #111, 2px 2px 1px #3c3c3c;
  text-align: center;
  margin-top: 4px;
}


div.rev-optin-mobile > div.time-section > .time-remaining {
  font-size: 3rem;
  padding-bottom: 30px;
}
button.ml-auto.btn.btn-primary {
  background: linear-gradient( 
90deg, rgba(255,34,51,1) 0%, rgba(255,34,120,1) 100%);
  border: 2px solid rgb(255 0 94);
  font-weight: 700;
}
input.form-control.form-control:focus {
box-shadow: none;
}

.Demo__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sharesection {
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Demo__some-network {
  margin-left: 4px;
}
.steptwo input.form-control.form-control {
  width: 100%;
}
div#card-element {
  background: linear-gradient( 
302deg
, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
  border: 3px solid rgb(189, 155, 212);
  color: rgb(247, 247, 247);
  padding: 6px 2px;
}
#payment-form input.form-control.form-control {
  width: 100%;
  margin-bottom: 8px;
}
#payment-form-old input.form-control.form-control {
  width: 100%;
  margin-bottom: 8px;
}
.share-error.card-error {
  position: static;
  font-size: 12px;
  display: block;
  margin-top: -25px;
}
.loader-player {
  position: relative;
  margin-top: 30px;
  margin-bottom: 20px;
  transform: none;

}

@supports (-webkit-touch-callout: none) {
  main div.main-vid-area {
    margin-left:0;
  }
}
.mb-title-cont {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.mb-title-content {
  width: 75%;
}
@media (max-width: 666px) and (min-height: 800px) { 

  .book-section-cont div.book-section-content-cont {

  }
  }

  @media (max-width: 1250px) {
    div.arch-title:after {
      font-size: 20px;
    padding: 10px 2px;
    }
  }

  .mb-content-picture-small {
display: none;
}
span.Typewriter__cursor {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);
}

.j-heading-big {
  display: block;

}



.before-text {
  background-image: linear-gradient(90deg,#320ce3,#e00a2d);
    color: #e00a2d;
    margin-right: 5%;
    text-align: end;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: Josefin Sans;
    font-size: 80px;
    width: 100%;
}

.after-text {
  background-image: linear-gradient(270deg,#320ce3,#e00a2d);
    color: #320ce3;

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: Josefin Sans;
    font-size: 80px;
    width: 100%;
}

@media (max-width: 666px) {
  div.hero-render-title {
    font-size: 1.2em;
  }
  div.time-section svg.stopper {
    height: 90px;
    width: 90px;
  }
  #compare-container div.compare-today-subtext {
    font-size: 14px;
}


  div.j-text {
    width: 90%;
  }

  div.j-visible {
    max-width: unset;
  }
  
div.preorder-bookimg-cont {

  width: 300px;

}
  div.minib-r-cont div.show-me-title {
    font-size: 26px;
    line-height: 40px;
}
  #compare-container div.before-text,#compare-container div.after-text {
    font-size: 36px;
  }


  div.mockup-element:before {
    animation: grow2 5s cubic-bezier(.42,.04,.58,1) 2s infinite forwards;
    margin-left: -100px;
    margin-top: -10px;
    transform: rotate(35deg);
    z-index: 99;
    height: 100px;
    width: 108px;
    background-size: cover;
}
  div.subheader-title {
    margin-bottom: 4em;
    font-size: 1.3em;
}
  #minibook-container div.mb-left-arrow {
    margin-left:10px
  }
  div.bonus-preprice:after {
    height: 80%;
    margin-top: -15px;
}
  div.bonus-price div.bonus-preprice {
    font-size: 1.2em;
    padding-top: 10px;
}
  div.bonus-realprice {
    font-size: 28px;
}

div.bonus-flag {
  margin-bottom: 0.3em;
}
  div.payment-area-cont > div {
    width: 100%;
}
div.register-form .bonus-flag h4 {
  display: inline-block;
  font-size: 16px;
}
div.payment-area-content h3.bonus-header {
  
  margin-bottom: 0.7em;
  font-size: 1em;
}
div.payment h2 {
  font-size: 1.6em;
}
div.payment h3 {
  font-size: 0.8em;
}
div.payment-area-cont {

  flex-direction: column;
}
  div.j-third div.j-paragraph {
    margin-top: 3em;
}
  div.j-third div.j-transform {margin-top: 0;}
div.j-first div.j-transform {
  margin-top: 0;
}
div.j-second div.j-transform {margin-top: 0;}
  div.j-heading-big {
    display: none;
  
  }
  div.show-me-item {

    margin-top: 0.6em;
    width: 85%;
    margin-left: 10px;
}
  div.book-heading {
    font-size: 38px;
    padding-left: 0.5em;
    padding-right: 0.5em;
}
div.book-subheading {
  font-size: 24px;
}
  div.show-me-title {
    font-size: 28px;
}

  div.show-me-grid {
    flex-direction: column;
    align-items: center;
}
  div.mb-content-title {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 10px;
}
div.mb-content-posttitle {
  font-size: 18px;
}
div.mb-content-pretitle {
  font-size: 16px;
}
div.mb-content {
  margin-left: 2px;
}
  div.mb-cont {
    width: 90px;
}
  div.mb-photo {
    width: 70px;
    height: 112px;
}
.picture-small-cont {
  width: 70%;
    margin: 0 auto;
}
  div.mb-content-picture-small {
    background: url(https://portal.revrevdev.xyz/wp-content/uploads/cover.jpg);
    background-size: cover;
    display: block;
    margin: 0 auto;
    margin-right: 13px;
    margin-top: 14px;
    height: 147px;
    width: 92px;
    flex-shrink: 0;
}

  div.mb-content-picture {
    display: none;
}
  .y-content-container div.y-heading {
    font-size: 28px;
}
  div.y-cont div.y-image-contain {

    max-width: 300px;

}
  main div.bg-renderer-pl {
    background-size: 15%;
}

 div.book-section-cont > div.margin-relative {
  transform: scale(0.8);
  
  
  }
  
  div.book-section-cont > div.fixed {

      transform: translate(50%,-50%) scale(0.8);

  }
  div.book-section-cont > div.nomargin-relative {
    transform: scale(0.8);
  
  }


  div.main-main div#archetype-container > div.arch-cont {
    height: 330px;
    width: 100% !important;
}
  div.compare-tomorrow-subtext:before {
    margin-left: -14px;
}
  
  div.compare-today-subtext:after {
    margin-left: 6px;
}

.main-main div.read-more-title {
  font-size: 28px;
}

  .main-main div.archtype-title {
    font-size: 27px;
}

  #compare-container div.compare-today-subtext:after, #compare-container div.compare-tomorrow-subtext:before {
    background-size: contain;
    content: "";
    height: 8px;
    margin-top: 5px;
    position: absolute;
    width: 8px;
}
  div.compare-title-vs {
    font-size: 16px;
}
  #compare-container div.compare-title-1, #compare-container div.compare-title-2 {font-size: 36px;}

#compare-container div.compare-title-1>span, #compare-container div.compare-title-2>span {font-size: 18px;margin-top: 0;line-height: 18px;}

#compare-container div.compare-today-container, #compare-container div.compare-tomorrow-container {font-size: 14px;}
  div.icons-container {flex-direction: column;}

div.icon-section:first-child {clip-path: none;margin-left: 0;width: 100%;padding-left: 12%;padding-right: 15%;}

div.icon-section:nth-child(2) {margin-left: 0;clip-path: none;width: 100%;padding-left: 12%;padding-right: 15%;}

div.icon-section:last-child {clip-path: none;margin-left: 0;width: 100%;padding-left: 12%;padding-right: 15%;}

div.icon-section > div.icon-section-text {font-size: 14px;}

div.icon-section:first-child>.icon-section-text {padding-right: 0;}
  div.acc1 .ac1 .arch-title:after {

    font-size: 44px;

    }
    
    div.acc2 .ac2 .arch-title:after {
      font-size: 44px;
    }
    
    div.acc3 .ac3 .arch-title:after {
      font-size: 44px;
    }
    
    
    div.acc4 .ac4 .arch-title:after {
      font-size: 44px;
    }
    
    
    div.acc5 .ac5 .arch-title:after {
      font-size: 44px;
    }
    
    div.acc6 .ac6 .arch-title:after {
      font-size: 44px;
    }
    
    div.acc7 .ac7 .arch-title:after {
      font-size: 44px;
    }
    
    div.acc8 .ac8 .arch-title:after {
      font-size: 44px;
    }
    div.white-super-h {
      font-size: 1.4em;
  } 
  em {
    display: table;
    margin: 0 auto;
}
div.arch-title:before {
  font-size: 20px;
  line-height: 16px;
}
div.arch-text {
  font-size: 13px;
  width: 75%;
  margin-top: 40px;
}
div.arch-cont div.arch-title:after {
  font-size: 32px;
}
div.journey-item div.j-paragraph {margin-top: -8%;width: 100%;margin-right: 6.5%;margin-left: 6.5%;}


div#jounrey-list-container div.j-third div.j-paragraph {
  margin-top: 3em;
}

div.j-heading:first-child {font-size: 9.1vw; display: block;}

div.j-headingj1 {font-size: 6.2vw;display: block;}

div.j-first .typewrap1 {font-size: 7VW;margin-top: 0;
}
div.j-second .typewrap2 {font-size: 11VW;margin-top: 0;
}
div.j-third .typewrap3 {font-size: 7.4VW;margin-top: 0; 
}

div.Typewriter {    margin-top: 18px;margin-bottom: 60px;}

div.j-image-cont {width: 70%;}

div.j-headingj2 {font-size: 5.42vw;display: block;}

div.j-headingj3 {font-size: 4.55vw;display: block;}
  div.journey-item div.j-paragraph {
    width: 100%;
    margin-right: 6.5%;
    margin-left: 6.5%;
  }
  div.j-first span.Typewriter__cursor {
    font-size: 7VW;
    margin-top: 0;
    position: relative;
    top: -0.1em;
}
div.j-second span.Typewriter__cursor {
  font-size: 11VW;
  margin-top: 0;
  position: relative;
  top: -0.1em;
}
div.j-third span.Typewriter__cursor {
  font-size: 7.4VW;
  margin-top: 0;
  position: relative;
  top: -0.1em;
}
div.j-first span.Typewriter__cursor {
  font-size: 7VW;
  margin-top: 0;
  position: relative;
  top: -0.1em;
}
  .hello-list-title div.hello-list-number-cont {
    width: 20%;
}
  div.book-section-content-cont {

}
  div.y-preorderbtn {
    font-size: 18px;
    padding: 8px 12px;
  }

div.book-section {

}

  h2.white-sh {
    font-size: 1.3em;
}

p.white-hero-p {
  font-size: 1.05em;
}
h1.white-h {
font-size: 1.8em;
}

h2.white-sh-l {
  font-size: 1em;
}

p.white-hero-1p {
font-size: 1.05em;
}

  div.hello-list-number {
    font-size: 54px;
  line-height: 54px;
  }
  main div.hello-list-item {
    width: 90%;
  }
  div.preorder-btn-container label {
    display: none;
}
div.preorder-btn-container .payment div.pay-section {
    width: 100%;
}
  div.preorder-book-picture {
    height: 150px;
  }
  div.preorder-book-price {
    font-size: 24px;
    line-height: 64px;
}
.preorder-btn-container .register-form h4.mb-2 {
  font-size: 13px;
}
  div.preorder-book-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}
  div.rev-optin.reveal.final {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background: #320083;
}
.payment div.content-section {
    display: flex;
    flex-direction: column;
height: 100%;
}

.payment div.split-point-view {
    width: 90%;
margin-right: 0px;
}
div.selection-section {
  margin: 4px auto 8px;
    padding-bottom: 8px;
}
.payment div.final-mobile-hero {
font-size: 24px;
}

.payment div.final-mobile-text {
font-size: 15px;
    line-height: 18px;
}

.payment div.info-section>ul>li {
font-size: 14px;
    margin-bottom: 0;
}

.payment div.pay-section {
width: 90%;
margin-right: 0px;
}

.payment div.image-section {
height:50%
}

.payment div.split-point-view {
height: 50%;
}

div.rev-optin.reveal.final>div.register-form.col-md-6 {

    height: 100%;
}


  main h2.revival-of-revenue {
    font-size: 1.1rem;
}
  div.more-details {
    display: none;
  }
  main h1.revival-of-revenue {
    font-size: 1.15rem;
  }
  main h1 span {
    font-size: 1.25rem;
  }
  div.rev-loadin {
}
div.rev-player-cont {
}
  div.rev-player-cont.loadswitch-el {
  }
  
form #share-form input.form-control.form-control {
  width: 90%;
  margin-bottom: 8px;
}

button.btn.share-btn {

  width: 90%;
}
  div.sharesection {
    height: 80%;
  }
  div.card-error { 
    display: none;
  }
  div.payment-area-pay div.card-error {
    display: block;

}
div.firststep-btn {
  padding: 6px 12px;
}
  div.rev-optin {

  }

  div.powered-container {

    margin-bottom: 0px;
}
  div.rev-optin > div.time-section > div.star-spinner > div.inner-star>.spinnerz:after, div.rev-optin > div.time-section >div.star-spinner > div.outer-star>.spinnerz:after {
display:none;
  }
  .rev-optin-mobile {

    display:block;
  }
div.register-form h4 {
  display: none;
}
#payment-form input.form-control.form-control {
  height: 32px;
  margin-bottom: 5px;
}
div.payment div.more-details  {
  display: none;
}

.payment div#card-element {
  padding: 3px 2px;
}
div.rev-optin>div.payment.register-form.col-md-6 {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  margin-top: -2px;
  justify-content: center;
}
div.rev-optin > div.time-section > div.time-remaining {
display:none;

  }
  div.input-wrap>div>div>input.form-control.form-control {
    height: 34px;
  }
  div.rev-optin>div.register-form.col-md-6 {
    margin: 1.5rem auto 0;
  }
  div.steptwo > form > .position-relative.form-group {
    margin-bottom: 3px;
}

div.steptwo > form > div.form-group > div.input-group > input.form-control.form-control {
  padding: 0 10px;
  width: 100%;
  height: 34px;
  border-radius: 0px;
  margin-bottom: 10px;
  flex: none;
  transition: .2s .15s all;
}
div>small.form-text.text-danger {
  margin-top: -14px;
}
div.rev-optin>div.register-form.col-md-6.steptwo {
  margin: 0;
  margin-top: -1px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

div.w-100.d-flex.justify-content-between {
  margin-top: -8px;
}
.d-flex button.ml-auto.btn.btn-success {
  padding: 0.25rem 0.75rem;
}
}
h1.revival-of-revenue {
  color: #fff;
  text-align: center;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  padding-top: 10px;
}
h1 span {
display: table;
margin: 0 auto;
font-size: 2.8rem;
margin-top: 16px;
letter-spacing: 0rem;
animation: letterspace 2.5s ease-out forwards, neon1 1.5s ease-in-out infinite alternate;
}
h2.revival-of-revenue {
  color: #fff;
  font-family: Josefin Sans;
  font-size: 2.4rem;
  opacity: 0;
  padding-top: 40px;
  text-align: center;
  text-transform: uppercase;
  animation: newput .5s .5s forwards;
}
h2 span {
  display: table;
  letter-spacing: 0;
  margin: 16px auto 0;
  text-transform: initial;
}
.regular .rev-player {
  margin: 0 auto;
  transition: all .25s ease-out;
  max-width: 1000px;
  padding-left: 4rem;
  padding-right: 4rem;
}
.large .rev-player {
  margin: 0 auto;
  transition: all .25s ease-out;
  max-width: 1500px;
  padding-left: 4rem;
  padding-right: 4rem;
}
.regular .rev-loadin {
  margin: 0 auto;
  max-width: 1000px;
  padding-left: 4rem;
  padding-right: 4rem;
}
.large .rev-loadin {
  margin: 0 auto;
  max-width: 1500px;
  padding-left: 4rem;
  padding-right: 4rem;
  transition: all .25s ease-out;
}
.more-details {
  color: #d4d4d4;
  line-height: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 12px;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 20px;
}

.more-detail {
  color: #d4d4d4;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 8px;
  padding-left: 20px;
  margin-top: 12px;
  padding-right: 20px;
  text-align: center;
  font-weight: 500;
  text-shadow: 2px 2px 1px rgb(0 0 0 / 30%);
}
.rev-optin {
  background: #32008385;
  height: 100%;
  opacity: 1;
  position: absolute;
  width: 36%;
  left: 0px;
 background: url("https://portal.revrevdev.xyz/wp-content/uploads/starsseam.svg"),linear-gradient(68deg,#320083f0 50%,rgb(35 35 35/85%)),url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' data-name='Layer 1' viewBox='0 0 436 800'%3E%3Cdefs%3E%3ClinearGradient id='prefix__a' x1='323.6' x2='309.81' y1='40.74' y2='773' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.11' stop-color='%231614ff'/%3E%3Cstop offset='.74' stop-color='%23c52127'/%3E%3C/linearGradient%3E%3ClinearGradient id='prefix__b' x1='119.24' x2='105.45' y1='36.9' y2='769.15' xlink:href='%23prefix__a'/%3E%3ClinearGradient id='prefix__c' x1='226.53' x2='212.74' y1='38.92' y2='771.17' xlink:href='%23prefix__a'/%3E%3ClinearGradient id='prefix__d' x1='325.36' x2='311.58' y1='40.78' y2='773.03' xlink:href='%23prefix__a'/%3E%3ClinearGradient id='prefix__e' x1='123.37' x2='109.58' y1='36.97' y2='769.23' xlink:href='%23prefix__a'/%3E%3C/defs%3E%3Cpath fill='url(%23prefix__a)' d='M360.19 213.56a74.77 74.77 0 0 0 30.61-33.31 105.4 105.4 0 0 0 10-45.42q0-41-26.4-64.66T300 46.48h-78v262.2h39.33l11.38-83.21v-.15h33.9l54.21 83.36H420zm-21.33-50.41q-9.45 12.3-30.08 12.3h-36V96.36h36.37q23.08 0 31.13 13a51.07 51.07 0 0 1 8 27.25q.02 14.27-9.42 26.54z'/%3E%3Cpath fill='url(%23prefix__b)' d='M135.11 46Q87.2 46 60.79 69.69t-26.4 64.66a105.32 105.32 0 0 0 10 45.42A74.74 74.74 0 0 0 75 213.08L15.15 308.2h59.11l54.21-83.36h33.85v-.2.2h.07v.54l11.7 82.82h39V46zm27.28 129h-36q-20.62 0-30.08-12.29t-9.44-26.54a51 51 0 0 1 8-27.25q8.06-13 31.13-13h36.37z'/%3E%3Cpath fill='url(%23prefix__c)' d='M324.08 529.91 217.28 779.2 110.49 529.91h55.3l53.4 134.36 50.22-134.36z'/%3E%3Cpolygon fill='url(%23prefix__d)' points='332.36 354.42 332.36 354.37 262.29 354.36 262.29 398.52 349.54 398.52 349.54 398.55 381.52 398.55 364.92 437.92 323.58 437.92 323.58 437.9 262.29 437.89 262.29 482.61 345.04 482.61 328.22 521.99 222.25 521.98 222.26 314.98 360.87 314.99 360.87 315.05 418.14 315.05 400.92 354.42 332.36 354.42'/%3E%3Cpolygon fill='url(%23prefix__e)' points='214.37 314.95 214.37 521.95 107.26 521.95 90.06 482.58 174.33 482.58 174.33 437.86 89.82 437.86 89.82 437.89 70.78 437.89 53.31 398.52 87.08 398.52 87.08 398.49 174.33 398.49 174.33 354.33 75.76 354.33 75.76 354.3 34.77 354.3 18 314.92 87.37 314.92 87.37 314.95 214.37 314.95'/%3E%3C/svg%3E");
background-repeat: repeat, repeat, no-repeat;
    background-position: 50%;
  z-index: 22;
  transition: .8s all;

  overflow-y: auto;
  padding-bottom: 5em;
}

.rev-optin.hidden {
  opacity: 0;
  left: -600px;
  transition: .8s all  ease-in;
  z-index: 22;
}
.rev-optin.release {
  opacity: 0;
  left: -300px;
  z-index: 22;
  transition: .8s all  ease-in;
  pointer-events: none;
  
}
.time-section {
  transform: none;
}
div.no-content > div.payment-area-pay {
  width: 100%;
}
div.no-content > div.payment-area-content {
  width: 0;
}
form label.save-payment {
  display: flex;
  align-items: center;
  color: #dbdbdb;
  margin: 0;
  margin-top: 0.2em;
}
.rev-optin .payment h2 {
  padding-top: 0;
}
.save-payment input[type="checkbox"] {
  padding: 0;
  appearance: none;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.2em;
  height: 1.2em;
  border: 0.15em solid #cdcdcd;
  border-radius: 0.15em;
  display: grid;
  place-content: center;
  margin-right: 0.3em;
}
.save-payment input[type="checkbox"]:checked::before {
  transform: scale(1);
}
.save-payment input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #fff;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
.register-form.col-md-6 {
  flex: 0 0 100%;
  max-width: 90%;
  text-align: center;
  margin: 0 auto;
}

.register-form {
  z-index: 1;
}

svg.stopper {
	position: relative;
	display:block;
	z-index:23;
  margin: 0 auto;
}
circle#stopwatchload {
  fill: transparent;
	transform-origin:center;
		transform: rotate(-90deg);
  stroke:  url(#prefix__a);
  stroke-width: 30;
  stroke-dasharray: 315;
  stroke-dashoffset: 313;
  animation: rotate 30s linear forwards;
}
#stopwatchborder {
  fill: transparent;
stroke:  #8D1A59;
  stroke-width: 5;
}
#stopwatchborder2 {
  fill: transparent;
stroke: #8D1A59;
  stroke-width: 3;
}
#stopwatchborder3 {
  fill: transparent;
stroke:  #8D1A59;
  stroke-width: 5;
}
#pausestop1 {
  display: none;
  fill: hsl(0deg 0% 100% / 89%);
  filter: drop-shadow(2px 4px 6px black);
}
#pausestop2 {
  display: none;
  fill: hsl(0deg 0% 100% / 89%);
  filter: drop-shadow(2px 4px 6px black);
}
#stopwatchbg {
  display: none;

}
#stopwatch-time {
	    fill: hsla(0,0%,100%,.5);
      font-weight: bold;

    font-size: 3rem;
    text-shadow: #bbb 0 0 1px, #fff 0 -1px 2px, #313131ed 0 -3px 2px, rgb(0 0 0 / 95%) 0 10px 15px;
}
@keyframes rotate {
  to {
    stroke-dashoffset: 0;
  }
}


.time-remaining {
  FONT-WEIGHT: 700;
  color: hsla(0,0%,100%,.5);
  font-size: 3rem;
  position: relative;
  text-align: center;
  z-index: 1;
  letter-spacing: -.3rem;
  text-shadow: #bbb 0 0 1px, #fff 0 -1px 2px, #313131ed 0 -3px 2px, rgb(0 0 0 / 95%) 0 10px 15px;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: visible;
  background-position: center;
  padding-top: 18px;
  padding-bottom: 36px;
  margin-bottom: -4px;
  background-image: url("data:image/svg+xml,%3Csvg id='splitsvg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='370' height='623' version='1.1'%3E%3Cdefs%3E%3ClinearGradient id='logo-gradient' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cc22ff'%3E%3Canimate attributeName='stop-color' values='%23cc22ff; %23ff2233; %23cc22ff' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' values='%23ff2233; %23cc22ff; %23ff2233' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='svgg'%3E%3Cpath id='path0' d='M 123.503 30.931 C 101.55 33.031 82.86 41.924 71.493 55.68 C 48.227 83.835 54.759 136.701 84.009 156.971 C 89.181 160.555 90.797 157.094 65.633 196.345 C 53.558 215.538 43.198 232.078 42 234 L 90 234 L 111.183 201.449 L 132.582 169.082 L 145.303 169.082 L 158.024 169.082 L 161.183 191.546 C 162.92 203.901 165.028 218.466 165.867 223.913 L 167.371 233.976 L 183.231 233.988 L 199.011 233.975 L 199.034 131.884 L 199.034 29.952 L 164.976 30.087 C 146.244 30.161 127.581 30.541 123.503 30.931 M 204.831 132.785 L 204.82 234.003 L 220.683 234.014 C 232.201 233.992 236.553 233.997 236.988 233.997 C 237.186 232.911 239.298 218.346 241.638 201.208 L 245.894 170.049 L 258.937 170.055 L 271.981 170.061 L 293.237 202.403 L 314.016 234.012 L 338.377 234.026 C 350.898 234.005 361.421 233.997 362.006 234.001 C 361.91 233.848 352.039 217.938 339.474 198.374 C 312.872 156.951 314.589 160.8 320.838 156.591 C 351.829 135.715 355.761 79.054 328.119 51.661 C 310.332 34.034 300.86 31.666 246.048 30.239 L 204.798 29.949 L 204.831 132.785 M 158.454 100.135 L 158.454 130.706 L 140.338 130.174 C 110.632 129.302 99.987 121.466 100.007 100.483 C 100.029 76.955 109.698 69.908 142.271 69.679 L 158.454 69.565 L 158.454 100.135 M 290.166 73.308 C 306.574 81.387 308.93 110.507 294.223 123.452 C 287.907 129.011 284.898 129.692 264.493 130.181 L 246.377 130.616 L 246.377 100.502 L 246.377 70.389 L 265.942 70.702 C 284.242 70.994 285.809 71.163 290.166 73.308 M 44.605 239.508 C 44.799 239.967 47.754 246.931 51.208 254.95 L 57.488 269.531 L 112.319 269.548 L 167.15 269.565 L 167.15 285.99 L 167.15 302.415 L 119.807 302.415 C 91.907 302.403 72.464 302.375 72.088 302.384 C 72.591 303.625 75.612 310.808 79.111 318.999 L 85.758 333.816 L 126.454 334.068 L 167.15 334.32 L 167.15 351.218 L 167.15 368.116 L 134.196 368.116 C 103.222 368.116 101.244 368.112 100.88 368.116 C 102.068 370.75 105.076 377.648 108.482 385.242 L 114.493 398.987 L 157.246 399.011 L 199.05 399.018 L 199.054 318.858 L 199.008 239.045 L 122.058 239.017 C 76.976 238.816 44.419 239.009 44.397 238.997 M 204.831 318.841 L 204.831 399.034 L 247.24 399.034 C 279.996 398.988 289.494 398.99 289.762 398.993 C 290.512 397.192 293.308 390.566 296.539 383.168 C 299.556 375.73 302.151 369.235 302.56 368.134 C 302.151 368.134 287.85 368.116 270.048 368.116 L 237.681 368.116 L 237.681 351.208 L 237.681 334.3 L 278.112 334.3 L 318.543 334.3 L 324.993 319.082 C 328.355 310.655 331.21 303.456 331.521 302.638 C 331.351 302.63 310.314 302.415 284.541 302.415 L 237.681 302.415 L 237.681 285.998 L 237.681 269.581 L 292.433 269.332 L 347.184 269.082 L 353.785 254.23 C 357.416 246.062 360.386 239.214 360.386 239.013 C 360.386 238.812 325.386 238.647 282.609 238.647 L 204.901 238.961 L 204.831 318.841 M 116.881 404.784 C 121.97 416.323 201.626 597.791 202.1 597.31 C 203.08 596.316 285.192 405.872 287.026 404.018 C 285.576 404.007 279.276 404.018 264.126 404.088 L 242.289 404.035 L 222.83 455.415 L 203.398 506.483 L 201.94 503.172 C 201.139 501.351 191.787 478.273 181.159 451.886 L 161.903 403.972 L 139.242 403.972 C 126.872 403.927 116.902 404.006 116.543 404.007 Z Z' stroke='none' fill='url(%23logo-gradient)' fill-rule='evenodd'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}

.spinnerz {
  margin-top: 5px;
}
.star-spinner > .spinnerz {
  height: 50%;
  width: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}


.inner-star {

    height: 100%;
  width: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  
}

.inner-star>.spinnerz:after {
  clip-path: polygon(0 90%, 100% 90%, 100% 100%, 0% 100%);
  animation: breathe 30s linear forwards;

}
.outer-star > .spinnerz:after {
  content:'';
  height: 4.6rem;
  z-index: 1;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  width: auto;
  background-repeat: no-repeat;
      background-position: center;
  background-image: url("https://portal.revrevdev.xyz/wp-content/uploads/starline.svg");
}
.inner-star > .spinnerz:after {
  height: 4.6rem;
    z-index: 1;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    width: auto;
  background-repeat: no-repeat;
      background-position: center;
  content:'';
  background-image: url("https://portal.revrevdev.xyz/wp-content/uploads/starfill.svg");
}
@keyframes breathe {
  to {
    clip-path: polygon(0 24%,100% 24%,100% 100%,0 100%);
  }
  
}

.card-charge {
  font-size: 11px;
  text-align: end;
  color: #c5c5c5ab;
  font-style: italic;
}
nav.image-gallery-thumbnails-container {
  height: auto;
  background-color: initial;
  position: initial;
  top: initial;
}
nav {
  min-width: 70px;
  max-width: 70px;
  height: 100vh;
  position: absolute;
  background-color: #380369;
  transition: .2s all;
  z-index: 99;
  top: 0;
}

navmain {
top: 0;
background-color: #380369;
height: 100vh;
max-width: 200px;
position: absolute;
transition: all .2s;
z-index: 99;
}
navmain .link-dropdown {
background: #fff;
box-shadow: 0 10px 15px 0 rgb(0 0 0 / 5%);
color: #bbb;
position: absolute;
margin-left: 171px;
top: 0px;
right: auto;
}
.nav-button-cont {
display: flex;
margin-bottom: 50px;
}
navbar .nav {
margin-top: 50px;
justify-content: flex-start;
}
.nav-button-cont > button {
width: 50%;
border-radius: 0;
background: #410a51;
background: linear-gradient(181deg, rgb(41 15 65) 0%, rgb(63 23 74) 100%);
color: #fff;
}

tr:nth-child(odd) {
background-color: #f2f2f2;
}
.render-tab tr > td:first-child {
font-weight: bold;
width: 25%;
}
.render-tab table {
width: 100%;

}
.nav-button-cont {
margin-top: auto;
display: flex;
margin-bottom: 50px;
}

navmain .nav a.dropdown {
margin-right: 0px;
padding-right: 20px;
}
.nav a.dropdown {
color: #fff;
display: block;
font-weight: 700;
line-height: 76px;
margin-right: 20px;
overflow: visible;
text-decoration: none;
}
navmain .nav a {
overflow: visible;
}
.nav {
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: 0;
  animation: .2s newput forwards;
}

.nav li {
  list-style: none;
  white-space: nowrap;
  max-width: 70px;
  transition: .2s all;
  border-bottom: 2px solid #505050;
}
.orders li.nav-orders {
  background: linear-gradient(202deg, #ee091c,#900b6d);
  font-weight: bold;
}
.nav li.nav-logo {
border: none;
height: 100px;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 415 593'%3E%3Cdefs%3E%3ClinearGradient id='prefix__a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c2f'%3E%3Canimate attributeName='stop-color' dur='5s' repeatCount='indefinite' values='%23cc22ff; %23ff2233; %23cc22ff'/%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' dur='5s' repeatCount='indefinite' values='%23ff2233; %23cc22ff; %23ff2233'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23prefix__a)' fill-rule='evenodd' d='M123.503 30.931c-21.953 2.1-40.643 10.993-52.01 24.749-23.266 28.155-16.734 81.021 12.516 101.291 5.172 3.584 6.788.123-18.376 39.374A18336.554 18336.554 0 0 0 42 234h48l21.183-32.551 21.399-32.367h25.442l3.159 22.464c1.737 12.355 3.845 26.92 4.684 32.367l1.504 10.063 15.86.012 15.78-.013.023-102.091V29.952l-34.058.135c-18.732.074-37.395.454-41.473.844m81.328 101.854-.011 101.218 15.863.011c11.518-.022 15.87-.017 16.305-.017.198-1.086 2.31-15.651 4.65-32.789l4.256-31.159 13.043.006 13.044.006 21.256 32.342 20.779 31.609 24.361.014c12.521-.021 23.044-.029 23.629-.025-.096-.153-9.967-16.063-22.532-35.627-26.602-41.423-24.885-37.574-18.636-41.783 30.991-20.876 34.923-77.537 7.281-104.93-17.787-17.627-27.259-19.995-82.071-21.422l-41.25-.29.033 102.836m-46.377-32.65v30.571l-18.116-.532c-29.706-.872-40.351-8.708-40.331-29.691.022-23.528 9.691-30.575 42.264-30.804l16.183-.114v30.57m131.712-26.827c16.408 8.079 18.764 37.199 4.057 50.144-6.316 5.559-9.325 6.24-29.73 6.729l-18.116.435V70.389l19.565.313c18.3.292 19.867.461 24.224 2.606m-245.561 166.2c.194.459 3.149 7.423 6.603 15.442l6.28 14.581 54.831.017 54.831.017v32.85h-47.343c-27.9-.012-47.343-.04-47.719-.031.503 1.241 3.524 8.424 7.023 16.615l6.647 14.817 40.696.252 40.696.252v33.796h-32.954c-30.974 0-32.952-.004-33.316 0 1.188 2.634 4.196 9.532 7.602 17.126l6.011 13.745 42.753.024 41.804.007.004-80.16-.046-79.813-76.95-.028c-45.082-.201-77.639-.008-77.661-.02m160.434 79.844v80.193h42.409c32.756-.046 42.254-.044 42.522-.041.75-1.801 3.546-8.427 6.777-15.825 3.017-7.438 5.612-13.933 6.021-15.034-.409 0-14.71-.018-32.512-.018h-32.367V334.3h80.862l6.45-15.218c3.362-8.427 6.217-15.626 6.528-16.444-.17-.008-21.207-.223-46.98-.223h-46.86v-32.834l54.752-.249 54.751-.25 6.601-14.852c3.631-8.168 6.601-15.016 6.601-15.217 0-.201-35-.366-77.777-.366l-77.708.314-.07 79.88m-87.95 85.943c5.089 11.539 84.745 193.007 85.219 192.526.98-.994 83.092-191.438 84.926-193.292-1.45-.011-7.75 0-22.9.07l-21.837-.053-19.459 51.38-19.432 51.068-1.458-3.311c-.801-1.821-10.153-24.899-20.781-51.286l-19.256-47.914h-22.661c-12.37-.045-22.34.034-22.699.035z'/%3E%3C/svg%3E");
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
margin-bottom: auto;
margin-top: 12px;
}

.hm-true {
display: block;
}

.hm-false {
display: none;
}

navbar input
{
-webkit-touch-callout: none;
cursor: pointer;
display: block;
height: 50px;
left: -2px;
opacity: 0;
position: absolute;
top: -2px;
margin-left: 20px;
width: 40px;
z-index: 101;
}

navbar span
{
display: block;
width: 30px;
height: 4px;
margin-bottom: 5px;
position: relative;
margin-left: 20px;
background: #cdcdcd;
border-radius: 3px;

z-index: 1;

transform-origin: 4px 0px;

transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            opacity 0.55s ease;
}

navbar span.hm-1
{
transform-origin: 0% 0%;
}

navbar span.hm-3
{
transform-origin: 0% 100%;
}

navbar input:checked ~ span
{
z-index: 100;
transform: rotate(45deg) translate(-2px, -1px);
background: #232323;
}

navbar input:checked ~ span.hm-2
{
opacity: 0;
transform: rotate(0deg) scale(0.2, 0.2);
}

navbar input:checked ~ span.hm-3
{
transform: rotate(-45deg) translate(0, -1px);
}
.buttons {
display: flex;
}
.attr-option {    border-radius: 50%;
  cursor: pointer;
  height: 32px;
  margin-left: 8px;
  width: 32px;
  border: 2px solid #d3d3d3;
}
.attr-option.is-checked {
  border-color: #000;
}
.attr-option.is-checked.attr-Red {background-color: #f00;
border-radius: 50%;border-width: 0px;}

.attr-Blue {border: 3px solid #0000ff;
border-radius: 50%;}

.attr-Red {border: 3px solid #f00;}

.attr-option.is-checked.attr-Blue {
background-color: #0000ff;
  border-radius: 50%;
  border-width: 0px;
}
.navbar-holder ul {
align-items: center;
display: flex;
font-size: 1.2rem;
list-style-type: none;
margin: 0;
padding: 0;
margin-right: 1em;
}
.navbar-holder li {
  font-family: 'Nunito Bold';
cursor: pointer;
display: inline-block;
padding: 0 0.5rem;
}

.buttons input {
width: 44px;
height: 3rem;
font-size: 1rem;
font-weight: 700;
text-align: center;
line-height: 14px;
border-radius: 0;
border-width: 1px 0 1px 0;
border-color: #e7e7e7;
color: #222529;
padding-left: 0;
padding-right: 0;
box-shadow: none;
outline: none;
border: 1px solid #e7e7e7;
border-left: transparent;
border-right: transparent;
}

.buttons button {
width: 30px;
height: 3rem;
border: solid 1px #e7e7e7;
color: #222529;
border-radius: 0;
background: 0 0;
padding: 0;
outline: none;
line-height: 1;
position: relative;
}

.nav li:first-child {
border: none;
height: 50px;
margin-bottom: auto;
background: red;
max-width: initial;
}
html.scroll main>div:last-child{
width: 100%;
max-width: 1450px;
margin: 0 auto;
padding-left: 70px;
padding-right: 70px;
background: #f9f9f9;
}
html.scroll main {
  background-color: #f9f9f9;
  background-size: 6%;
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 142 142'%3E%3Cpolygon style='fill:%232b2f84;opacity:0.03;' class='a' points='0 106 10 131 35 133 26 142 0 142 0 106 0 106'/%3E%3Cpolygon style='fill:%232b2f84;opacity:0.03;' class='a' points='115 142 106 133 132 131 142 106 142 142 115 142 115 142'/%3E%3Cpolygon style='fill:%232b2f84;opacity:0.03;' class='a' points='26 0 16 9 22 35 0 22 0 0 26 0 26 0'/%3E%3Cpolygon style='fill:%232b2f84;opacity:0.03;' class='a' points='142 22 120 35 125 9 115 0 142 0 142 22 142 22'/%3E%3Cpolygon style='fill:%232b2f84;opacity:0.03;' class='a' points='71 35 81 60 106 63 87 80 93 106 71 93 49 106 55 80 35 63 61 60 71 35 71 35'/%3E%3C/svg%3E"); */
}
@media (max-width: 1400px) {
  main navbar {

}
  html.scroll main>div:last-child{
    max-width: 1000px;
  }

}

div.navbar-title {
  left: 0;
  transform: translate(0, -50%);
  top: 50%;
}
div.bread-home {
  font-size: 0;

}
@media (max-width: 800px) {
  main .navbar-home {display: none;}
  main a.down-get-started {display: none;}

  main a.down-shop {display: none;}
  
  main a.down-enroll {display: none;}
  
  main a.down-resources {display: none;}
  
  
  main div.navbar-title {
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
}
  main navbar > div:first-of-type {
    display: block;
  }

  div.mini-price {
    font-size: 16px;
}
  html.scroll main>div:last-child {
    padding-left: 20px;
    padding-right: 20px;
  }
html body main navbar {
  left:0;
}

div.heroproduct-cont {
  margin-left: -20px;
  margin-right: -20px;
}
main h1.cat-page-header {
  margin-left: -20px;
  margin-right: -20px;
}
}
@media (max-width: 1100px) {
  main h1.cat-page-header {
    font-size: 2.2em;
}
main h1.cat-page-header {
  font-size: 1.8em;
  padding: 1em 10%;
}
main h1.cat-page-header span {
  font-size: 1.3rem;
}
main h2.featured-header {
  font-size: 2em;
}
h4.featured-subheader {
  font-size: 1.4em;
}
main h3 {
  font-size: 1.6em;
}
main h4.all-subheader {
  font-size: 1.2em;
}
main .mini-product-cont {
  width: 50%;
}
main .mini-title {
  font-size: 18px;
}
  body main navbar {

}
  div.heroproduct-title {
    font-size: 1.3em;
}
  html.scroll main>div:last-child{
    max-width: 800px;
  }

}
.nav li:first-child:hover {
background-color: transparent;
}
.nav li:last-child {
  border: none;
  margin-bottom: auto;
}
.nav a {
  display: block;
  height: 76px;
  line-height: 76px;
  padding-left: 72px;
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  overflow: hidden;
  font-weight: bold;
}
li.nav-orders:before {
  content: '';
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='510.000000pt' height='420.000000pt' viewBox='0 0 510.000000 420.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(238,9,28);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(133,11,144);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(0.000000,420.000000) scale(0.100000,-0.100000)'%0Afill='url(%23grad1)' stroke='none'%3E%3Cpath d='M91 4077 c-16 -16 -15 -181 2 -195 7 -6 110 -12 267 -14 286 -4 296%0A-6 371 -85 44 -46 61 -79 83 -158 10 -33 23 -80 30 -105 7 -25 21 -71 30 -102%0A9 -32 23 -84 32 -115 36 -124 44 -155 58 -200 7 -27 22 -77 31 -113 10 -36 23%0A-83 30 -105 7 -22 20 -67 29 -100 10 -33 23 -80 31 -105 7 -25 21 -74 30 -110%0A10 -36 23 -83 30 -105 7 -22 21 -69 30 -105 10 -36 23 -83 30 -105 7 -22 19%0A-65 28 -95 8 -30 22 -80 31 -110 48 -165 75 -262 91 -320 10 -36 23 -83 30%0A-105 7 -22 21 -69 30 -105 9 -36 23 -83 31 -105 8 -23 14 -48 14 -58 0 -9 16%0A-51 36 -94 27 -57 54 -95 103 -144 66 -66 94 -84 185 -120 48 -19 78 -20 1108%0A-20 583 1 1064 3 1069 7 14 8 11 178 -3 192 -9 9 -256 12 -1051 12 -1004 0%0A-1039 1 -1080 19 -49 23 -116 91 -139 141 -9 19 -24 64 -33 100 -10 36 -24 82%0A-32 104 -7 21 -11 47 -8 57 6 19 35 19 1206 19 660 0 1204 2 1209 5 11 7 27%0A59 87 285 8 30 20 72 26 93 14 49 12 50 -105 66 -269 37 -483 156 -669 371%0A-79 92 -174 279 -199 395 -5 22 -14 56 -20 75 -5 19 -10 89 -10 156 0 91 -3%0A124 -14 133 -10 8 -274 11 -987 11 l-974 -1 -17 22 c-10 12 -18 28 -18 37 0%0A15 -18 82 -45 167 -7 22 -20 69 -30 105 -65 242 -103 320 -198 406 -122 109%0A-224 134 -543 133 -144 0 -215 -4 -223 -12z'/%3E%3Cpath d='M4050 3920 c-59 -7 -156 -32 -186 -48 -11 -5 -39 -19 -64 -31 -207%0A-100 -368 -299 -431 -535 -26 -99 -26 -303 0 -402 74 -276 277 -495 541 -584%0A245 -82 496 -46 730 104 65 42 190 172 231 241 114 193 154 419 108 610 -19%0A79 -69 206 -100 253 -16 24 -29 45 -29 48 0 24 -171 185 -245 231 -158 98%0A-356 138 -555 113z m502 -408 c2 -4 29 -29 61 -57 31 -27 57 -56 57 -64 0 -9%0A-15 -32 -33 -53 -17 -20 -57 -67 -87 -104 -30 -37 -64 -77 -75 -90 -11 -12%0A-45 -52 -75 -90 -30 -37 -84 -102 -120 -144 -36 -42 -83 -99 -105 -125 -22%0A-27 -57 -69 -78 -93 -21 -25 -45 -55 -54 -68 -29 -45 -52 -30 -165 104 -59 70%0A-130 152 -158 182 -27 30 -49 61 -50 68 0 19 126 132 147 132 5 0 45 -42 89%0A-94 43 -52 86 -95 94 -95 9 -1 45 34 80 77 36 42 69 82 75 88 21 24 53 62 91%0A109 21 28 49 61 61 75 51 60 101 119 138 165 22 27 48 57 58 67 18 19 43 24%0A49 10z'/%3E%3Cpath d='M1966 720 c-66 -30 -134 -96 -162 -157 -113 -239 83 -501 346 -461%0A197 30 320 241 253 433 -23 63 -110 154 -177 183 -64 29 -201 30 -260 2z'/%3E%3Cpath d='M3407 713 c-66 -34 -117 -87 -150 -156 -38 -80 -39 -192 -2 -270 93%0A-195 324 -250 501 -119 64 46 124 168 124 249 0 91 -56 206 -128 261 -68 51%0A-105 62 -205 61 -78 0 -99 -4 -140 -26z'/%3E%3C/g%3E%3C/svg%3E%0A");
  width: 48px;
  height: 76px;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  left: 11px;
  pointer-events: none;
}
li.nav-profile:before {
content: '';
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='900.000000pt' height='900.000000pt' viewBox='0 0 900.000000 900.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(238,9,28);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(133,11,144);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)'%0Afill='url(%23grad1)' stroke='none'%3E%3Cpath d='M3750 7989 c-25 -4 -74 -13 -110 -18 -80 -13 -145 -29 -188 -47 -18%0A-8 -40 -14 -50 -14 -9 0 -26 -7 -36 -15 -11 -8 -27 -15 -35 -15 -25 0 -202%0A-93 -297 -155 -287 -187 -515 -468 -637 -785 -96 -249 -117 -399 -117 -840 0%0A-420 22 -601 97 -805 29 -78 103 -234 133 -280 11 -16 23 -37 27 -45 12 -26%0A84 -123 156 -208 123 -146 335 -311 507 -394 101 -49 169 -79 205 -89 17 -4%0A62 -17 100 -29 139 -41 251 -55 440 -55 189 0 301 14 440 55 39 12 84 25 100%0A29 17 5 62 22 100 39 390 170 674 439 858 813 67 136 94 214 139 409 17 73 20%0A136 25 460 6 467 -3 583 -60 790 -75 268 -227 523 -431 725 -94 93 -225 198%0A-292 235 -22 12 -55 31 -74 42 -58 35 -241 113 -310 132 -36 10 -78 23 -95 28%0A-16 5 -57 14 -90 18 -33 5 -89 14 -125 19 -76 12 -315 12 -380 0z'/%3E%3Cpath d='M5039 4015 c-43 -28 -220 -120 -246 -128 -10 -3 -43 -15 -73 -27%0A-217 -84 -422 -126 -706 -146 -172 -12 -547 41 -714 101 -70 25 -106 37 -137%0A46 -17 5 -102 45 -188 89 -87 44 -165 80 -174 80 -19 0 -77 -21 -108 -38 -12%0A-7 -27 -12 -33 -12 -17 0 -216 -100 -298 -150 -40 -25 -81 -49 -90 -55 -114%0A-66 -376 -313 -499 -471 -96 -123 -253 -396 -283 -491 -5 -15 -18 -53 -30 -83%0A-12 -30 -26 -73 -30 -96 -5 -22 -13 -51 -18 -65 -14 -36 -40 -161 -57 -281%0A-12 -84 -15 -210 -15 -601 0 -481 1 -496 21 -542 28 -64 94 -126 156 -148 48%0A-16 168 -17 1975 -17 1059 0 1927 3 1930 6 3 3 -40 51 -96 107 -76 77 -110%0A119 -136 172 -33 65 -35 77 -38 182 -3 81 0 120 11 145 8 18 22 52 32 75 17%0A39 15 63 -6 63 -5 0 -39 14 -75 31 -77 37 -177 126 -205 183 -51 105 -59 144%0A-59 296 1 100 5 157 15 185 8 22 15 47 15 55 0 22 54 99 106 152 41 41 119 88%0A198 117 21 9 26 15 21 29 -56 135 -68 191 -60 287 10 118 56 199 185 325 59%0A58 122 112 141 121 101 47 112 50 215 50 56 0 112 -4 122 -10 16 -8 25 -7 42%0A7 l22 18 -44 39 c-160 146 -392 288 -608 375 -30 12 -70 28 -88 36 -43 18 -50%0A17 -93 -11z'/%3E%3Cpath d='M6342 3477 c-12 -13 -22 -26 -22 -30 0 -4 -14 -38 -31 -75 -48 -104%0A-57 -125 -64 -148 -7 -28 -30 -46 -85 -68 -25 -10 -67 -29 -93 -42 l-49 -24%0A-66 25 c-37 14 -80 32 -97 39 -16 7 -47 21 -68 30 -21 9 -57 16 -81 16 -40 0%0A-47 -5 -114 -74 -53 -54 -72 -81 -72 -101 0 -24 17 -71 55 -160 33 -75 55%0A-135 55 -151 0 -9 -9 -35 -19 -58 -10 -23 -27 -61 -36 -86 -20 -49 -57 -90%0A-82 -90 -8 0 -27 -6 -41 -14 -15 -8 -63 -29 -107 -47 -112 -47 -114 -51 -115%0A-184 0 -133 -1 -131 150 -190 118 -46 180 -77 180 -91 0 -6 18 -52 40 -102%0Al39 -92 -25 -62 c-38 -91 -52 -124 -70 -163 -9 -19 -17 -53 -17 -76 0 -38 6%0A-47 72 -112 91 -91 104 -92 266 -22 141 61 154 63 200 39 17 -9 55 -25 85 -36%0A56 -20 100 -57 100 -84 0 -7 13 -42 28 -76 16 -35 37 -83 48 -108 31 -73 43%0A-79 165 -80 122 0 129 4 168 100 13 30 27 59 32 64 5 6 9 16 9 23 0 7 14 42%0A31 78 29 58 36 66 78 81 25 8 69 27 96 40 28 13 55 24 61 24 7 0 45 -14 85%0A-31 41 -16 83 -34 94 -38 11 -5 37 -16 58 -25 73 -31 100 -24 176 52 37 37 71%0A77 74 90 7 30 -1 56 -82 254 l-32 78 24 52 c13 29 32 73 43 98 18 44 49 79 69%0A80 22 0 231 95 253 113 20 19 22 29 22 127 0 119 -3 126 -85 164 -22 10 -52%0A25 -67 32 -14 8 -31 14 -37 14 -6 0 -40 14 -75 30 -59 28 -66 35 -81 78 -10%0A26 -28 69 -41 95 -26 53 -29 68 -15 95 5 9 23 53 41 97 17 44 38 93 46 108 8%0A16 14 47 14 70 0 38 -6 48 -63 104 -35 34 -75 66 -89 72 -26 10 -78 2 -113%0A-16 -25 -14 -136 -60 -188 -79 -35 -12 -42 -11 -90 11 -29 13 -74 32 -102 43%0Al-50 20 -61 141 c-33 77 -68 149 -79 161 -16 18 -30 20 -125 20 -98 0 -108 -2%0A-128 -23z m215 -742 c124 -28 202 -71 284 -159 111 -118 153 -282 115 -456%0A-18 -87 -60 -159 -137 -237 -79 -79 -159 -119 -271 -135 -165 -23 -310 25%0A-429 142 -77 77 -114 147 -141 270 -17 78 -17 90 -3 146 8 33 15 66 15 74 0%0A32 65 143 120 202 69 76 157 125 270 149 97 22 97 22 177 4z'/%3E%3C/g%3E%3C/svg%3E%0A");
width: 48px;
height: 76px;
position: absolute;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
left: 11px;
pointer-events: none;
}
li.nav-payments:before {
content: '';
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='1875.000000pt' height='1506.000000pt' viewBox='0 0 1375.000000 1106.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(238,9,28);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(133,11,144);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(0.000000,1506.000000) scale(0.100000,-0.100000)'%0Afill='url(%23grad1)' stroke='none'%3E%3Cpath d='M1520 14271 c-55 -7 -105 -21 -168 -47 -18 -8 -40 -14 -48 -14 -16 0%0A-119 -54 -145 -76 -8 -8 -21 -14 -28 -14 -15 0 -241 -223 -241 -239 0 -6 -13%0A-30 -30 -53 -16 -22 -30 -47 -30 -54 0 -7 -11 -35 -25 -63 -14 -27 -34 -85%0A-45 -127 -20 -76 -20 -124 -20 -3029 0 -2901 0 -2953 20 -3026 25 -95 44 -147%0A58 -161 7 -7 12 -18 12 -25 0 -12 20 -45 87 -143 37 -55 152 -164 213 -203 36%0A-23 74 -48 85 -55 11 -6 27 -15 35 -18 8 -3 28 -12 43 -20 16 -7 37 -14 47%0A-14 10 0 21 -4 24 -9 3 -5 41 -17 83 -27 75 -18 188 -19 3358 -19 l3280 0 6%0A117 c4 65 10 130 14 145 4 16 11 55 16 88 11 80 28 161 45 210 8 23 14 48 14%0A57 0 10 6 32 14 50 7 18 21 58 31 88 28 88 146 323 213 425 40 61 134 189 147%0A200 6 6 29 32 51 60 83 105 231 238 389 351 112 79 134 94 139 94 3 0 38 19%0A78 43 40 23 93 51 118 61 25 11 68 29 95 41 28 12 82 32 120 45 39 12 86 28%0A105 35 39 14 140 36 270 59 232 41 659 24 870 -33 114 -32 251 -77 308 -103%0A34 -15 66 -28 70 -28 15 0 218 -109 280 -151 24 -16 46 -29 49 -29 3 0 19 -11%0A37 -25 17 -14 69 -55 116 -91 95 -74 254 -228 299 -289 16 -22 42 -53 57 -70%0A30 -34 119 -164 166 -242 27 -44 140 -274 148 -301 5 -15 18 -52 30 -82 12%0A-30 26 -71 30 -90 4 -19 18 -71 30 -115 12 -44 26 -107 31 -140 18 -112 24%0A-138 35 -142 17 -6 124 115 172 193 72 120 112 232 128 358 21 167 21 5699 0%0A5861 -24 187 -80 312 -211 471 -67 80 -204 190 -275 220 -8 4 -40 18 -70 32%0A-30 14 -68 29 -85 33 -16 4 -48 14 -70 21 -32 10 -1055 13 -5280 14 -2882 1%0A-5265 -2 -5295 -5z m1568 -704 c29 -29 54 -64 61 -86 7 -24 11 -133 11 -298 0%0A-293 -4 -312 -68 -371 -71 -64 -45 -62 -707 -62 -567 0 -606 1 -647 19 -46 19%0A-103 76 -119 118 -5 13 -9 150 -9 304 0 258 2 283 20 318 20 41 81 95 115 104%0A11 3 307 4 657 3 l637 -1 49 -48z m8541 -1474 c74 -23 129 -66 152 -121 18%0A-41 19 -75 19 -544 0 -352 -3 -512 -12 -539 -17 -58 -93 -126 -149 -134 -24%0A-3 -429 -5 -901 -3 l-856 3 -44 30 c-25 18 -55 52 -70 80 l-28 50 0 508 c0%0A551 -3 521 53 596 24 33 86 70 117 71 14 0 32 5 40 10 9 6 317 10 819 10 729%0A0 809 -2 860 -17z m-8387 -2313 c62 -36 83 -76 83 -155 0 -80 -14 -106 -80%0A-149 l-39 -26 -821 0 -821 0 -47 30 c-51 32 -87 95 -87 151 0 45 36 106 82%0A139 l41 30 828 0 c807 0 829 -1 861 -20z m2116 4 c15 -9 42 -34 60 -56 29 -36%0A32 -47 32 -104 0 -60 -3 -67 -37 -105 -66 -73 -13 -69 -922 -69 l-817 0 -40%0A26 c-103 67 -111 201 -17 283 l46 41 834 0 c749 0 838 -2 861 -16z m2147 -3%0Ac44 -23 67 -52 90 -113 17 -45 17 -49 0 -85 -27 -57 -61 -100 -96 -117 -28%0A-14 -125 -16 -851 -16 -585 0 -826 3 -841 11 -72 37 -126 135 -108 196 17 56%0A33 79 79 111 l46 32 823 0 c787 0 825 -1 858 -19z m2183 -30 c53 -53 66 -90%0A55 -158 -8 -49 -55 -110 -100 -128 -30 -13 -157 -15 -852 -15 l-816 0 -45 30%0Ac-56 37 -79 80 -80 147 0 63 26 113 79 149 l36 24 837 0 837 0 49 -49z m-4349%0A-777 c24 -9 54 -34 75 -61 32 -41 36 -53 36 -102 -1 -68 -33 -122 -95 -157%0Al-40 -23 -541 -1 c-520 0 -542 1 -582 20 -76 37 -124 129 -102 198 18 55 57%0A102 104 123 38 17 75 19 573 19 462 0 538 -2 572 -16z m1928 -7 c53 -30 111%0A-134 100 -179 -13 -50 -65 -115 -109 -137 -44 -21 -53 -21 -582 -21 -580 0%0A-564 -1 -624 54 -55 49 -71 140 -37 207 20 39 33 50 90 79 39 20 53 20 585 18%0A505 -3 547 -4 577 -21z'/%3E%3Cpath d='M10139 8536 c-2 -3 -54 -10 -114 -16 -105 -11 -163 -23 -265 -56 -25%0A-8 -53 -14 -62 -14 -10 0 -34 -7 -55 -16 -21 -9 -51 -22 -68 -28 -44 -18 -108%0A-47 -125 -57 -8 -4 -50 -26 -93 -48 -171 -89 -355 -242 -516 -426 -51 -59%0A-195 -268 -208 -303 -4 -9 -18 -37 -33 -62 -14 -25 -34 -70 -44 -100 -10 -30%0A-22 -59 -26 -65 -7 -9 -23 -58 -64 -191 -9 -29 -16 -61 -16 -72 0 -11 -8 -49%0A-17 -84 -14 -51 -17 -108 -18 -308 0 -247 4 -287 47 -445 6 -22 14 -56 19 -75%0A4 -19 17 -60 29 -90 12 -30 25 -67 30 -82 15 -47 109 -235 145 -288 19 -29 35%0A-55 35 -59 0 -4 14 -20 30 -36 17 -16 30 -33 30 -38 0 -22 185 -222 285 -307%0A43 -37 153 -120 158 -120 3 0 28 -16 57 -35 89 -60 254 -136 400 -185 36 -12%0A79 -27 95 -32 17 -6 53 -14 80 -18 28 -4 68 -14 90 -21 55 -19 560 -19 625 0%0A25 7 68 16 96 21 28 4 61 13 72 19 11 6 34 11 49 11 16 0 38 7 49 15 10 8 28%0A15 39 15 11 0 29 7 39 15 11 8 26 15 34 15 20 0 218 98 282 139 30 20 60 38%0A67 41 7 3 59 43 117 89 106 84 216 195 291 291 22 29 47 59 55 68 28 30 82%0A116 124 197 15 28 31 57 36 65 19 32 70 151 70 164 0 8 4 17 9 21 5 3 12 20%0A16 38 3 17 12 52 20 77 57 185 75 313 75 526 0 163 -25 385 -49 439 -5 11 -12%0A31 -15 45 -7 34 -31 115 -51 170 -17 47 -32 70 -46 70 -7 0 -87 -87 -274 -301%0A-56 -64 -107 -121 -279 -313 -39 -43 -101 -111 -137 -150 -37 -39 -86 -94%0A-110 -123 -44 -52 -118 -136 -273 -307 -45 -50 -105 -117 -135 -150 -71 -80%0A-73 -83 -193 -215 -57 -63 -116 -129 -131 -147 -16 -19 -32 -34 -36 -34 -5 0%0A-26 13 -47 30 -22 16 -44 33 -49 37 -6 5 -29 24 -51 43 -23 19 -76 64 -119%0A100 -76 63 -214 179 -265 224 -14 12 -43 35 -65 51 -22 17 -52 41 -66 55 -14%0A14 -43 39 -64 55 -42 33 -160 131 -190 158 -11 10 -54 46 -96 80 -178 144%0A-369 309 -369 317 0 24 427 480 449 480 6 0 32 -23 58 -52 53 -56 100 -106%0A398 -413 110 -114 250 -259 311 -322 86 -90 115 -114 127 -107 8 5 39 41 68%0A79 29 39 57 73 61 76 5 3 23 27 41 52 40 58 150 198 182 233 14 15 25 30 25%0A35 0 4 17 28 38 53 20 24 62 77 92 117 30 39 60 77 65 83 6 6 21 28 35 48 14%0A21 28 38 32 38 3 0 20 21 37 48 17 26 49 70 72 97 53 66 117 148 152 196 15%0A21 41 53 57 71 17 18 30 35 30 39 0 3 8 15 18 26 9 11 42 53 72 93 30 40 70%0A89 88 110 17 20 32 41 32 45 0 5 7 16 15 25 14 15 10 22 -37 70 -88 88 -278%0A224 -388 279 -25 12 -52 26 -60 30 -64 36 -199 90 -251 100 -19 4 -42 12 -49%0A16 -8 5 -32 12 -55 16 -22 4 -60 12 -85 18 -128 29 -473 55 -491 37z'/%3E%3C/g%3E%3C/svg%3E%0A");
width: 48px;
height: 76px;
position: absolute;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
left: 11px;
pointer-events: none;
}
li.nav-home:before {
background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.0' viewBox='0 0 1360 1360'%3E%3Cdefs%3E%3ClinearGradient id='prefix__a' x1='0%25' x2='100%25' y1='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='rgb(238,9,28)'/%3E%3Cstop offset='100%25' stop-color='rgb(133,11,144)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='url(%23prefix__a)' transform='matrix(.1 0 0 -.1 0 1560)'%3E%3Cpath d='M6531 14105c-18-8-44-15-57-15-29 0-136-39-194-71-8-5-29-16-46-24-17-9-40-24-50-33-11-9-37-29-59-44s-68-51-102-80c-104-89-251-211-296-247-23-18-56-45-72-60-17-14-55-46-85-71s-72-61-93-80-47-39-57-45c-10-5-42-31-71-56-79-69-290-246-394-330-160-132-326-270-369-310-28-25-72-62-99-81-26-20-71-57-100-82-28-25-110-93-182-152-71-59-132-110-135-113s-36-32-75-63c-38-31-82-67-96-80-15-13-57-48-95-78-37-30-104-86-150-125-45-38-124-105-176-147-89-74-326-271-378-315-132-112-392-327-502-418-40-32-116-95-168-140-52-44-108-91-125-104-16-12-46-37-65-54-19-18-57-50-85-72-27-22-73-61-102-87-28-26-55-48-60-48-4 0-26-17-48-38-23-20-74-64-115-97s-81-66-90-75c-8-8-42-36-75-62s-76-62-97-80c-20-18-67-58-104-88s-102-84-144-120c-43-36-122-102-176-147-294-245-730-608-809-673-217-183-225-194-225-333 0-72 4-98 15-107 8-7 15-18 15-24s31-48 68-93 94-115 126-155c33-40 78-93 100-119 23-25 50-56 61-70 11-13 48-58 81-99 119-146 185-189 290-190 93 0 148 36 465 300 334 278 329 274 388 325 26 22 93 78 150 125 164 134 366 303 371 310 3 3 37 31 75 61 39 31 77 64 85 74s27 25 41 34c15 9 51 37 80 63 103 88 229 193 441 367 57 47 132 110 168 141s79 66 95 79c17 12 46 37 65 55 19 17 59 51 89 75 30 23 75 60 100 81 25 22 107 90 181 152 142 118 148 123 221 184 25 22 65 55 89 74s79 66 124 104c164 138 352 295 391 325 17 12 46 37 65 55 19 17 58 50 85 71 28 22 69 58 93 79 23 22 54 47 70 57 15 9 41 30 58 45 16 16 52 47 80 68 27 22 70 58 95 80 25 23 90 78 145 123 198 163 299 247 304 253 3 3 37 32 75 63 115 94 177 146 235 196 30 27 78 65 105 86 28 20 55 42 60 49 6 6 42 37 80 68 39 31 79 65 90 75 19 17 133 112 305 254 41 34 103 86 138 117 54 47 99 83 158 127 9 7 19 7 28 0 59-44 104-80 158-127 35-31 97-83 138-117 241-199 398-330 460-385 14-13 48-40 75-61 28-20 75-59 105-86 58-50 120-102 235-196 39-31 72-60 75-63 5-6 106-90 304-253 55-45 120-100 145-123 25-22 68-58 95-80 28-21 68-56 90-76 23-21 45-38 49-38 5 0 32-22 60-48 29-26 75-65 102-87 28-22 66-54 85-72 19-17 49-42 65-54 38-29 214-176 391-325 45-38 101-85 125-104s64-52 89-74c54-46 51-43 220-184 74-62 156-130 181-152 25-21 70-58 100-81 30-24 70-58 89-75 19-18 49-43 65-55 17-13 59-48 95-79s111-94 168-141c212-174 338-279 441-367 29-26 65-54 80-63 14-9 33-24 41-34s47-43 85-74c39-30 72-58 75-61 5-7 207-176 371-310 57-47 124-103 150-125 25-22 57-49 70-60s148-123 299-249c351-294 374-309 462-314 121-7 191 37 329 208 24 30 53 66 64 79 11 14 38 45 61 70 22 26 67 79 100 119 32 40 89 110 126 155s68 87 68 93 7 17 15 24c11 9 15 35 15 107 0 141-3 145-250 353-47 39-94 79-105 88-11 10-56 47-100 82-44 36-89 73-100 84-11 10-36 30-55 44s-42 33-51 42c-21 19-51 45-114 95-27 22-61 50-75 64-14 13-42 37-64 52-21 16-62 48-90 73-52 45-160 135-395 330-74 61-169 140-211 176-43 36-123 103-179 150l-101 84v1712c0 1672 0 1712-19 1755-20 45-62 90-116 125-29 18-58 19-911 19h-881l-55-37c-44-29-62-49-84-95l-29-58-3-822-2-823h-23c-12 0-44 21-73 48-27 26-77 68-110 94-58 47-143 118-195 163-42 37-326 274-399 335-37 30-121 100-186 155-66 55-132 111-149 123-16 13-46 38-65 55-19 18-57 50-85 72-27 22-82 67-121 100-173 147-412 345-542 450-136 110-200 154-242 171-8 3-28 11-45 19-62 27-116 45-139 45-13 0-40 7-59 15-51 21-367 21-416 0z'/%3E%3Cpath d='M6691 11953c-19-16-66-55-105-88s-120-101-181-150c-119-96-169-137-279-230-39-33-91-76-116-95s-49-39-55-45c-5-6-32-29-60-50-27-22-55-44-61-50-6-5-28-24-50-42-251-205-427-350-674-555-102-84-205-169-230-188s-63-51-85-71c-22-21-62-54-90-74-27-21-54-42-60-49-5-6-32-29-60-51-47-37-166-136-399-328-167-139-181-150-251-207-38-30-100-82-139-115s-93-78-121-100c-27-22-67-55-88-75-21-19-47-39-57-45-10-5-36-26-57-45s-58-51-83-70-103-84-175-143c-71-60-159-132-193-160-35-29-99-81-141-117-43-36-109-90-146-120-38-30-100-82-139-115-39-34-99-83-134-110-113-89-146-116-187-153-22-20-61-52-85-71-25-19-78-64-117-99l-73-64V6031c0-1873 1-2050 16-2096 60-182 170-293 354-359 42-15 197-16 1675-14l1630 3 5 1570 5 1570h2110l5-1570 5-1570 1630-3c1478-2 1633-1 1675 14 179 64 286 170 354 352 14 38 16 239 16 2096v2054l-72 64c-40 35-93 80-118 99-24 19-63 51-85 71-41 37-74 64-187 153-35 27-95 76-134 110-39 33-101 85-139 115-37 30-103 84-146 120-42 36-106 88-141 117-34 28-122 100-193 160-72 59-150 124-175 143s-62 51-83 70-47 40-57 45c-10 6-36 26-57 45-21 20-60 53-88 75-27 22-82 67-121 100s-101 85-139 115c-71 57-90 73-251 207-55 45-160 132-234 193s-157 130-185 154c-27 23-72 59-100 80-27 21-68 54-90 75-22 20-60 52-85 71s-128 104-230 188c-324 268-358 296-674 555-22 18-44 37-50 42-6 6-33 28-61 50-27 21-54 44-60 50-5 6-30 26-55 45s-77 62-116 95c-110 93-160 134-279 230-60 49-142 117-181 150-125 105-138 115-154 115-9 0-31-12-49-27z'/%3E%3C/g%3E%3C/svg%3E");
content: '';
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
content: "";
height: 76px;
left: 11px;
pointer-events: none;
position: absolute;
width: 48px;
}
li.nav-subscriptions:before {
background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.0' viewBox='0 0 600 600'%3E%3Cdefs%3E%3ClinearGradient id='prefix__a' x1='0%25' x2='100%25' y1='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='rgb(238,9,28)'/%3E%3Cstop offset='100%25' stop-color='rgb(133,11,144)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='url(%23prefix__a)' transform='matrix(.1 0 0 -.1 0 600)'%3E%3Cpath d='M4935 5889c-22-5-56-11-75-15-34-5-84-22-145-49-16-7-37-16-45-19-53-23-139-86-202-148-86-85-126-139-168-228-75-157-84-198-84-385 1-126 4-168 17-199 10-21 17-45 17-53 0-46 134-269 204-339s293-204 339-204c8 0 32-7 53-17 59-24 336-24 419 1 200 61 348 163 466 321 80 107 118 196 150 349 24 111 23 186 0 301-23 107-33 138-79 230-94 190-267 342-472 414-122 43-299 61-395 40zm503-592 43-44-276-276-277-277h-44c-41 0-47 4-149 104-58 57-105 108-105 113 0 10 112 123 123 123 4 0 34-25 67-55s63-55 67-55c5 0 109 101 232 224l225 225 25-19c14-10 45-38 69-63zM3230 5731c0-61-4-112-9-115s-127-7-272-9c-263-4-310-9-514-53-134-28-339-91-397-120-14-8-32-14-38-14-21 0-260-120-365-183-203-122-422-304-611-508-36-40-201-256-231-304-84-135-175-306-220-412-7-18-19-48-27-65-8-18-17-42-19-53-3-11-16-51-30-90-39-113-64-214-104-425-26-137-26-639 1-785 28-159 66-319 91-385 8-19 16-48 20-64 6-30 13-31 85-6 77 27 85 34 84 71-1 18-6 48-12 64-32 90-54 189-87 381-18 109-21 535-4 629 6 33 14 87 18 120 10 74 45 219 73 300 5 17 13 44 18 60 4 17 12 41 18 55 5 14 18 45 28 70 24 61 140 298 164 335 11 17 23 37 27 45 11 24 92 139 157 225 78 103 308 333 411 411 86 65 201 146 225 157 8 4 29 16 45 27 37 24 273 140 335 164 42 17 60 24 150 56 19 6 51 16 70 20 60 15 123 31 176 46 28 8 64 14 80 14s61 7 99 15c51 11 137 15 311 15 211 0 243-2 248-16 3-9 6-58 6-110 0-61 4-94 11-94 21 0 529 311 529 324 0 7-19 22-42 35-24 12-56 31-73 41-16 11-39 24-50 30s-33 19-50 30c-16 11-39 24-50 30s-33 19-50 30c-16 11-39 24-50 30s-33 19-50 30c-16 11-40 24-52 29-11 5-24 15-28 20-3 6-15 11-26 11-18 0-19-8-19-109z'/%3E%3Cpath d='M2138 3895c-64-44-76-75-79-208-1-64 0-119 3-122 7-7 2127-7 2139 0 5 4 9 51 9 105 0 122-19 175-81 220l-42 30H2175l-37-25zM5410 3845c-14-8-34-14-45-15-11 0-31-7-44-16-24-17-25-45-3-109 28-82 57-207 86-381 22-125 22-530 1-663-31-188-55-291-102-426-14-38-28-84-32-100-4-17-12-39-18-50-5-11-17-36-25-55-51-118-127-262-185-349-24-35-43-65-43-68 0-8-123-167-164-213-52-56-234-238-268-266-107-90-277-208-383-266-87-48-255-128-268-128-7 0-17-4-22-9-10-9-178-67-280-95-66-19-177-42-296-61-121-19-538-22-557-3-8 8-12 47-12 110 0 64-4 98-11 98-21 0-529-311-529-324 0-7 19-22 42-35 24-12 57-31 73-41 17-11 39-24 50-30s34-19 50-30c17-11 39-24 50-30s34-19 50-30c17-11 39-24 50-30s34-19 50-30c17-11 40-24 52-29 11-5 24-15 28-20 3-6 15-11 26-11 18 0 19 8 19 109 0 75 4 112 13 119 7 6 48 8 112 4 130-9 411 4 499 23 38 8 80 15 94 15s48 6 76 14c53 15 116 31 176 46 33 8 56 15 143 46 187 68 398 171 525 255 24 16 45 29 48 29s60 41 127 92c150 113 267 221 402 373 63 72 215 269 215 280 0 4 11 21 24 38 30 41 72 117 136 247 66 134 80 166 124 288 31 86 38 109 46 142 15 60 31 123 46 176 8 28 14 62 14 77 0 14 8 56 17 94 25 103 25 637-1 778-28 159-66 319-91 385-8 19-16 47-19 63-7 30-27 34-66 12z'/%3E%3Cpath d='M2062 3348c-4-13-6-305-4-650l2-627 48-49c36-36 57-50 87-55 69-12 1846-8 1888 4 46 12 95 62 113 114 11 32 14 158 14 652 0 595-1 613-19 623-13 7-365 10-1071 10H2070l-8-22zm916-177c10-1 12-23 10-88l-3-88-87-3c-66-2-88 0-89 10-4 61 2 162 9 167 8 5 97 6 160 2zm939-4c4-4 7-124 4-165-1-10-23-12-88-10l-88 3-3 84c-2 46 1 87 7 90 10 7 161 4 168-2zm-462-87v-85h-180l-3 74c-2 41-1 80 2 88 4 11 26 13 93 11l88-3v-85zm-947-282c7-7 12-43 12-90 0-94-4-97-110-89l-75 6-3 80c-2 66 0 82 14 92 23 17 146 17 162 1zm480-77c2-48-2-89-7-94-11-11-157-14-168-4-7 8-4 167 3 179 3 5 42 7 87 6l82-3 3-84zm453 79c16-9 19-22 19-90 0-44-5-82-11-85-14-9-153-10-167-1-8 4-12 37-12 86 0 65 3 81 18 89 22 14 128 14 153 1zm473 2c7-12 10-172 3-179-9-8-151-8-165 1-13 8-17 167-5 179 9 10 161 9 167-1zm-1396-475-3-82h-180v170l75 5c109 7 111 5 108-93zm460 94c10-1 12-23 10-88l-3-88-87-3c-66-2-88 0-89 10-4 61 2 162 9 167 8 5 97 6 160 2zm477-91v-85h-180l-3 74c-2 41-1 80 2 88 4 11 26 13 93 11l88-3v-85zM800 1761c-62-9-158-34-186-49-11-6-39-20-64-32-88-41-143-82-228-168-62-63-125-149-148-202-3-8-12-28-19-45-27-61-44-111-49-145-3-19-10-55-15-80-29-131 8-339 85-493 79-158 214-293 374-373 104-52 269-93 376-94 64 0 207 26 284 53 191 65 392 243 471 417 77 169 83 199 83 385-1 126-4 168-17 199-10 21-17 45-17 53 0 46-134 269-204 339s-293 204-339 204c-8 0-30 6-49 14-41 18-257 28-338 17zm220-316c5-38 7-40 69-62 71-25 118-58 155-106 31-41 63-134 50-147-8-7-106-14-157-11-10 0-27 16-37 34-29 49-56 57-185 57-113 0-113 0-144-31-39-39-42-85-7-122 30-33 42-35 201-40 109-3 136-7 169-25 48-26 116-82 116-95 0-6 6-18 13-26 18-21 37-90 37-132 0-71-37-148-94-201-36-34-100-68-127-68-39 0-59-19-59-55 0-45-17-53-110-46l-75 6-5 45c-5 44-6 45-46 50-107 15-224 137-224 235v35h90c51 0 90-4 90-10 0-5 14-25 31-45l31-35h132c122 0 134 2 152 21 26 29 26 109 0 138-18 19-30 21-147 21-163 0-239 24-306 98-56 61-73 104-73 187s17 127 73 187c41 44 68 60 140 82 56 18 57 18 57 55 0 21 3 41 7 45s46 5 93 4l85-3 5-40z'/%3E%3C/g%3E%3C/svg%3E");
content: '';
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
content: "";
height: 76px;
left: 11px;
pointer-events: none;
position: absolute;
width: 48px;
}
.mockup-more {
  padding-bottom: 61.7%;
  background: url(https://portal.revrevdev.xyz/wp-content/uploads/more-mockup.jpg);
  width: 37%;
  background-size: contain;
  float: right;
  margin-right: 8px;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,.12)) drop-shadow(0 3px 1px rgba(0,0,0,.14)) drop-shadow(0 1px 5px rgba(0,0,0,.12)) drop-shadow(0 -1px 2px rgba(0,0,0,.1));
}
.mockup-read {
  background: url(https://portal.revrevdev.xyz/wp-content/uploads/read-mockup.jpg);
  background-size: contain;
  float: left;
  margin: 2px 14px -1px 2px;
  width: 38%;
  padding-bottom: 61.53%;
  overflow: hidden;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,.12)) drop-shadow(0 3px 1px rgba(0,0,0,.14)) drop-shadow(0 1px 5px rgba(0,0,0,.12)) drop-shadow(0 -1px 2px rgba(0,0,0,.1)); 
}

.read-more-section-cta {
  margin-top: 1em;  
  text-align: center;
  font-family: 'Nunito Bold';
  font-size: 1.6em;
  margin-bottom: 1em;
}
.three-icons-container {display: flex;flex-direction: column;margin-top: 100px;

  background: linear-gradient(180deg, rgba(255,255,255,1) 1%, rgba(48,48,48,1) 2%, rgba(48,48,48,1) 98%, rgba(255,255,255,1) 99%);
}

.seam-paper-1 {width: 100%;height: 80px;background: url(https://portal.revrevdev.xyz/wp-content/uploads/paper1.png);}

.seam-paper-2 {width: 100%;
    height: 100px;
    background: url(https://portal.revrevdev.xyz/wp-content/uploads/paper2.png);
    margin-top: -2px;
  }

.three-icons-content {background: #303030;
  margin-top: -1px;
}

.white-super-h {
  
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-family: 'Josefin Sans';font-size: 2.1em;text-align: center;margin-bottom: 0.5em;color: #fff;background-image: linear-gradient(#fff,#c6c6c6);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;margin-top: 2.5em;text-transform: uppercase;
    filter: drop-shadow(0 3px 4px rgba(0,0,0,.12)) drop-shadow(0 3px 3px rgba(0,0,0,.14)) drop-shadow(0 1px 8px rgba(0,0,0,.12)) drop-shadow(0 -2px 2px rgba(0,0,0,.1));
  }

.icons-container {display: flex;
  
  max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
  width: 100%;margin-top: 6em;margin-bottom: 5em;justify-content: center;

  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.12)) drop-shadow(0 1px 18px rgba(0, 0, 0, 0.14)) drop-shadow(0 3px 5px rgba(0, 0, 0, 0.12)) drop-shadow(0 -2px 3px rgba(0, 0, 0, 0.1));
}

.icon-section {width: 32.5%;display: flex;align-items: center;}

.icon-section:nth-child(2) {clip-path: polygon( 10% 0, /* left top */ 100% 0%, /* right top */ 100% 100%, /* right bottom */ 0 100% /* left bottom */ );margin-left: -6%;padding-right: 4%;padding-left: 5%;width: 35%;
background: linear-gradient(27deg, rgba(67,16,93,1) 0%, rgba(100,22,141,1) 70%);}

.icon-section:first-child {
clip-path: polygon(
    0% 0, /* left top */
    100% 0%, /* right top */ 
    100% 100%, /* right bottom */
    0 100% /* left bottom */
  );
  padding-left: 2%;

background: linear-gradient(27deg, rgba(143,22,36,1) 0%, rgba(183,26,44,1) 70%);}

.icon-section:last-child {clip-path: polygon(10% 0,100% 0,100% 100%,0 100%);
    margin-left: -4%;padding-right: 2%;
    padding-left: 5%;background: linear-gradient(27deg, rgba(21,18,92,1) 0%, rgba(33,28,144,1) 70%);}

.icon-section:nth-child(2):before {content: '';
  
  
  
  }

.icon-section-text {color: #fff;font-family: 'Nunito Bold';margin-left: 12px;}

.icon-1 {
  margin-bottom: 1.5em;
    margin-top: 1.5em;
    flex-shrink: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='prefix__Layer_1' x='0' y='0' enable-background='new 0 0 512 512' version='1.1' viewBox='0 0 512 512' xml:space='preserve'%3E%3Ccircle cx='256' cy='256' r='256' style='fill:%23fff'/%3E%3ClinearGradient id='prefix__logo-gradient' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c2f'%3E%3Canimate attributeName='stop-color' dur='5s' repeatCount='indefinite' values='%23cc22ff; %23ff2233; %23cc22ff'/%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' dur='5s' repeatCount='indefinite' values='%23ff2233; %23cc22ff; %23ff2233'/%3E%3C/stop%3E%3C/linearGradient%3E%3Cpath style='fill: url(%23prefix__logo-gradient)' d='M434.8 126h-32.5v-17.2c0-6-3.3-11.6-8.7-14.4-41-21.6-96.1-22.8-137.7-3.7-42.7-19.1-97.8-17.9-137.7 3.8-5.2 2.8-8.5 8.3-8.5 14.3V126H77.2c-9 0-16.2 7.3-16.2 16.2v260c0 9 7.3 16.2 16.2 16.2h211.2v16.3l32.5-32.5 32.5 32.5v-16.3h81.3c9 0 16.2-7.3 16.2-16.2v-260c.1-8.9-7.2-16.2-16.1-16.2zm-162.6-7c5.2-2.2 10.6-4 16.2-5.4v211.2c-5.5 1.1-10.9 2.5-16.2 4.1V119zm97.5 23.2v187.5c-5.4-1.7-10.8-3.1-16.2-4.2V113.8c5.6 1.4 11 3.2 16.2 5.3v23.1zM142.3 119c29.2-12.3 67.3-12.3 97.5.1v210.6c-.2 0-.3-.1-.5-.1-.5-.2-1-.3-1.6-.5-.6-.2-1.2-.3-1.8-.5-.5-.2-1.1-.3-1.6-.4-.6-.2-1.2-.3-1.8-.5-.5-.1-1-.3-1.6-.4-.6-.2-1.2-.3-1.9-.5-.5-.1-1-.2-1.5-.4l-2.7-.6c-.6-.1-1.2-.2-1.7-.4-.7-.1-1.4-.3-2.1-.4-.5-.1-1-.2-1.6-.3l-1.8-.3c-.5-.1-1.1-.2-1.6-.3l-1.8-.3c-.5-.1-1.1-.2-1.6-.2-.6-.1-1.2-.2-1.8-.2-.5-.1-1.1-.1-1.6-.2-.6-.1-1.3-.1-1.9-.2-.5-.1-1-.1-1.5-.2-1.1-.1-2.1-.2-3.2-.3-.5 0-.9-.1-1.4-.1-.7 0-1.3-.1-2-.1-.5 0-1.1-.1-1.6-.1-.6 0-1.2-.1-1.8-.1-.5 0-1.1 0-1.6-.1H184c-1.1 0-2.1.1-3.2.1-.5 0-1 .1-1.4.1-.6 0-1.3.1-1.9.1-.5 0-1 .1-1.6.1-.6 0-1.2.1-1.8.1-.5 0-1.1.1-1.6.2-.6.1-1.2.1-1.8.2-.5.1-1 .1-1.6.2-.6.1-1.2.2-1.8.2-.5.1-1 .1-1.5.2l-2.1.3c-.5.1-1.1.2-1.6.3-.9.2-1.8.3-2.7.5-.5.1-.9.2-1.4.3-.6.1-1.2.2-1.8.4l-1.5.3c-.6.1-1.2.3-1.7.4-.5.1-1 .2-1.5.4-.6.1-1.1.3-1.7.4-.5.1-1 .3-1.5.4-.6.2-1.2.3-1.8.5-.5.1-.9.3-1.4.4-.8.2-1.5.5-2.2.7-.3.1-.5.2-.8.2V142.2l.2-23.2zM93.5 386V158.5h16.2v195c0 12.4 13.2 20.2 24.1 14.2 32.6-17.9 77.5-17.7 115.1.4.1 0 .1.1.2.1l.6.3h.1c.1 0 .2.1.3.1.2.1.4.2.6.2.1 0 .3.1.4.1.2.1.4.1.6.2.1 0 .3.1.4.1.2 0 .4.1.6.1.2 0 .3.1.5.1s.4.1.6.1c.1 0 .3 0 .4.1.2 0 .4 0 .6.1h2.4c.3 0 .5 0 .8-.1h.2c.3 0 .5-.1.8-.1h.2c.2-.1.5-.1.7-.2.1 0 .2-.1.3-.1.2-.1.4-.1.7-.2.1 0 .3-.1.4-.1.2-.1.4-.1.5-.2l.6-.3c.1 0 .2-.1.3-.1.3-.2.7-.3 1-.5h.1c2.8-1.5 10-3.5 20.4-5.6.9-.2 2.4-.5 4.2-.8V386H93.5zm325 0h-65v-24.4c.2 0 .4.1.6.1 12.2 2.5 21.8 4.9 24.9 6.4.2.1.4.2.5.2.2.1.3.1.5.2s.3.1.5.2.3.1.5.2.3.1.5.1c.2.1.3.1.5.2.2 0 .3.1.5.1s.4.1.5.1c.2 0 .3.1.5.1s.4.1.5.1h3c.2 0 .4 0 .6-.1h.4c.2 0 .4-.1.5-.1.2 0 .3 0 .5-.1.2 0 .4-.1.5-.1.1 0 .3-.1.4-.1.2-.1.4-.1.6-.2.1 0 .3-.1.4-.1.2-.1.3-.1.5-.2.1-.1.3-.1.4-.2.2-.1.3-.1.5-.2s.3-.1.5-.2.3-.2.5-.2c.1-.1.3-.1.4-.2.1-.1.3-.2.4-.2.1-.1.3-.2.4-.3.2-.1.3-.2.5-.3.1-.1.2-.1.3-.2.2-.1.3-.3.5-.4.1-.1.2-.1.3-.2.1-.1.3-.2.4-.4l.3-.3.3-.3c.1-.1.3-.2.4-.4l.3-.3c.1-.1.2-.3.4-.4l.3-.3c.1-.1.2-.3.4-.4.1-.1.1-.2.2-.3.1-.2.3-.4.4-.6 0-.1.1-.1.1-.2.1-.2.3-.5.4-.7 0-.1.1-.2.1-.2.3-.5.5-1 .8-1.6.1-.1.1-.2.1-.4.1-.2.2-.4.2-.6.1-.3.2-.5.2-.8 0-.1 0-.1.1-.2.1-.3.1-.5.2-.8 0-.1 0-.2.1-.2 0-.1 0-.3.1-.5.2-.9.2-1.8.2-2.8v-195h16.2l.2 227.7z'/%3E%3C/svg%3E");
  width: 64px;height: 64px;background-repeat: no-repeat;background-position: center;}

.icon-section:first-child > .icon-section-text {padding-right: 17%;}

.icon-2 {
  margin-bottom: 1.5em;
    margin-top: 1.5em;
    flex-shrink: 0;
  width: 64px;
    height: 64px;
    background-repeat: no-repeat;
    background-position: center;
    
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='prefix__Layer_1' x='0' y='0' enable-background='new 0 0 900 900' version='1.1' viewBox='0 0 900 900' xml:space='preserve'%3E%3Ccircle cx='450' cy='450' r='450' style='fill:%23fff'/%3E%3Cg transform='matrix(.1 0 0 -.1 0 900)'%3E%3ClinearGradient id='prefix__logo-gradient' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c2f'%3E%3Canimate attributeName='stop-color' dur='5s' repeatCount='indefinite' values='%23cc22ff; %23ff2233; %23cc22ff'/%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' dur='5s' repeatCount='indefinite' values='%23ff2233; %23cc22ff; %23ff2233'/%3E%3C/stop%3E%3C/linearGradient%3E%3Cpath fill='url(%23prefix__logo-gradient)' d='M2358.4 7515.9c-2.9-4.4-15.3-7.3-27.7-7.3-33.5 0-77.2-8-82.2-15.3-2.2-3.6-10.2-6.6-18.2-6.6-41.5 0-257.7-89.5-305-126.6-5.8-4.4-23.3-14.6-37.8-21.8-14.6-7.3-28.4-18.2-30.6-23.3-2.2-5.8-7.3-10.2-11.6-10.2-25.5 0-184.1-156.5-258.4-255.5-29.8-39.3-54.6-73.5-54.6-75.7s-8.7-17.5-19.7-34.9c-29.1-45.1-89.5-167.4-89.5-179.8 0-6.6-2.9-14.6-6.6-18.2-9.5-10.2-37.1-91-37.1-109.2 0-8-4.4-23.3-10.2-33.5-5.1-10.2-12.4-40.8-14.6-67.7-2.9-26.2-8.7-49.5-12.4-51.7-3.6-2.9-6.6-50.2-6.6-105.5v-101.9l369.7-1.5 369-2.2 2.2-2055.5c.7-1388 3.6-2058.4 8.7-2064.2 4.4-5.1 7.3-18.9 7.3-29.8-.7-42.2 29.8-157.9 44.4-167.4 3.6-2.2 6.6-9.5 6.6-16 0-32.8 92.4-172.5 157.2-238 42.2-42.9 136.8-111.4 199.4-143.4 40.8-21.8 123-49.5 182-62.6 49.5-10.2 232.2-11.6 1884.4-13.8 1045.9-1.5 1833.5.7 1837.8 4.4s23.3 8.7 42.9 10.9c18.9 2.9 42.9 10.2 54.6 16 10.9 5.1 26.2 10.2 34.2 10.2 8.7 0 18.2 2.9 21.8 6.6 4.4 3.6 20.4 10.2 36.4 15.3 35.7 10.9 141.2 62.6 157.2 77.2 5.8 5.8 13.8 10.2 16.7 10.2 3.6 0 18.2 10.2 33.5 21.8 15.3 12.4 29.8 21.8 32.8 21.8 7.3 0 63.3 45.1 83 67.7 10.2 10.9 21.8 19.7 25.5 19.7 10.2 0 69.9 59.7 69.9 69.1 0 4.4 8.7 16 20.4 25.5 31.3 28.4 154.3 197.2 154.3 213.3 0 2.2 9.5 18.2 20.4 35.7 11.6 17.5 25.5 42.9 30.6 56.8 11.6 31.3 34.2 83.7 48 111.4 5.8 11.6 10.2 25.5 10.2 32 0 5.8 4.4 21.1 10.2 33.5 13.8 32.8 31.3 97.5 37.1 136.1 2.2 18.2 7.3 39.3 10.9 47.3 8 17.5 23.3 131.7 24.7 182l.7 36.4-1986.3 2.2c-1462.3.7-1988.5-.7-1995.8-6.6-5.8-4.4-10.2-14.6-10.2-21.8 0-19.7-28.4-120.8-44.4-156.5-7.3-16.7-15.3-39.3-18.2-50.9-4.4-16.7-34.9-80.1-111.4-227.1-5.8-10.9-46.6-56-91-100.4-80.1-80.1-114.3-103.4-186.3-125.2-30.6-10.2-80.8-18.9-90.3-16.7-3.6.7-22.6 4.4-42.2 8-38.6 7.3-83 34.9-120.1 74.2-23.3 24.7-60.4 88.1-60.4 104.1 0 5.1-5.1 18.9-10.9 29.8-5.8 11.6-10.9 37.8-10.9 59 0 20.4-3.6 40-7.3 42.2-5.1 2.9-8 704.6-8 2091.1-.7 1147.8-2.9 2107.9-4.4 2134.1-2.2 26.2-5.8 50.9-9.5 54.6-2.9 4.4-8 24-10.2 43.7-2.9 20.4-10.9 54.6-18.9 76.4-18.2 53.9-69.9 154.3-83.7 162.3-5.8 2.9-10.9 10.2-10.9 14.6 0 11.6-57.5 67-75.7 73.5-9.5 2.9-11.6 7.3-7.3 11.6 8 8 3314.6 6.6 3369.2-1.5 104.1-13.8 188.5-52.4 250.4-113.5 23.3-23.3 44.4-46.6 46.6-52.4 2.9-5.8 11.6-21.8 20.4-35.7 13.1-21.8 22.6-49.5 50.9-146.3 7.3-26.2 10.2-362.5 13.1-1725l4.4-1692.3 246.7-2.2c136.1-.7 249.7.7 253.3 4.4 5.8 5.8 6.6 3312.5.7 3422.4-1.5 29.8-5.8 61.1-8.7 69.1-3.6 8-10.2 39.3-13.8 69.1-9.5 66.2-21.1 113.5-34.9 140.5-5.8 11.6-10.2 25.5-10.2 31.3 0 5.8-2.9 16-6.6 23.3-4.4 6.6-16 32-26.9 56-32 71.3-82.2 141.2-155 216.9-37.8 38.6-71.3 70.6-75.7 70.6-3.6 0-18.9 9.5-33.5 20.4-55.3 42.9-227.1 117.9-270 117.9-7.3 0-15.3 2.9-17.5 6.6-5.1 7.3-48.8 15.3-82.2 15.3-12.4 0-24.7 2.9-27.7 7.3-6.2 10-3494.1 10-3500.6-.2z'/%3E%3Cpath fill='url(%23prefix__logo-gradient)' d='M4334.5 6526c-5.8-3.6-18.2-7.3-26.9-7.3s-51-24-94.6-52.4l-78.6-53.1-94.6-2.2c-97.5-2.2-121.6-8-166-40.8-24-17.5-37.1-41.5-59.7-109.9-24.7-72.8-37.8-96.1-67.7-118.6-14.6-10.9-29.8-24-32.8-28.4-2.9-5.1-8.7-9.5-13.1-9.5-17.5 0-72.8-50.2-87.3-78.6-13.8-27.7-15.3-40-11.6-91 2.2-33.5 8.7-69.1 15.3-81.5 6.6-11.6 11.6-29.1 11.6-37.8s3.6-18.2 7.3-20.4c4.4-2.2 7.3-15.3 7.3-29.1s-2.9-26.9-7.3-29.1c-3.6-2.2-7.3-11.6-7.3-20.4 0-8.7-5.1-25.5-11.6-37.8-15.3-28.4-21.8-124.5-10.9-157.2 9.5-28.4 38.6-63.3 70.6-83.7 93.9-59.7 107-75.7 137.6-167.4 40.8-124.5 73.5-148.5 201.6-148.5 107.7 0 120.1-4.4 240.9-86.6 34.9-24 107.7-38.6 136.8-27.7 37.1 13.8 69.9 31.3 100.4 54.6 64.8 48.8 83 54.6 190 59 93.2 4.4 100.4 5.8 133.2 26.2 24.7 15.3 38.6 31.3 49.5 54.6 8 18.2 18.2 38.6 21.8 45.1 3.6 7.3 6.6 18.2 6.6 25.5 0 6.6 10.2 32.8 22.6 57.5 18.2 37.8 29.1 50.2 63.3 72.8 136.8 89.5 158.7 144.1 110.6 279.5-11.6 34.2-21.8 72.1-21.8 83.7 0 12.4 10.2 49.5 21.8 83.7 25.5 72.1 29.1 133.9 9.5 169.6-15.3 27.7-45.9 63.3-54.6 63.3-3.6 0-29.1 17.5-57.5 38.6-40.8 30.6-54.6 46.6-72.1 82.2-12.4 24-21.8 50.9-21.8 59.7 0 8-2.9 16.7-6.6 18.9s-8.7 13.1-11.6 24c-7.3 30.6-44.4 72.1-78.6 88.8-26.2 13.1-45.1 15.3-115.7 15.3-98.3 0-109.2 3.6-195.8 62.6-34.9 24-72.8 44.4-90.3 47.3-16 2.9-34.2 7.3-40 9.5-5.9 2.1-16.1.7-21.9-3zm385.8-596.8c0-11.6-445.4-456.4-460-460-6.6-1.5-64.8 50.2-142.7 126.6l-131.7 128.8 45.1 46.6c24.7 26.2 50.2 48.8 56 50.2 6.6 2.2 37.8-22.6 82.2-64.1 50.2-48 76.4-68.4 88.8-68.4 13.1 0 42.9 26.2 117.9 103.4 55.3 56.8 132.5 135.4 171 175.4l71.3 72.1 50.9-50.9c27.9-27.7 51.2-54.6 51.2-59.7zM3351.2 4754.4c-3.6-4.4-6.6-59.7-6.6-124.5s2.9-120.1 6.6-123.7c4.4-4.4 379.9-5.8 1006.6-3.6l999.3 3.6v247.5l-999.3 3.6c-626.7 2.2-1002.2.8-1006.6-2.9zM4349.1 4255.1l-746.1-3.6V4004l748.2-3.6c468-2.2 751.1-.7 755.5 3.6 10.2 10.2 8.7 240.9-2.2 248.2-5.7 3.7-335.5 5.1-755.4 2.9zM3351.2 3750c-3.6-4.4-6.6-59.7-6.6-124.5s2.9-120.1 6.6-123.7c4.4-4.4 379.9-5.8 1006.6-3.6l999.3 3.6v247.4l-999.3 3.6c-626.7 2.3-1002.2.8-1006.6-2.8z'/%3E%3C/g%3E%3C/svg%3E");}

.icon-3 {
  margin-bottom: 1.5em;
    margin-top: 1.5em;
    flex-shrink: 0;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 26.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 600 600' style='enable-background:new 0 0 600 600;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Ccircle class='st0' cx='300' cy='300' r='300'/%3E%3Cg transform='translate(0.000000,600.000000) scale(0.100000,-0.100000)'%3E%3ClinearGradient id='logo-gradient' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cc22ff'%3E%3Canimate attributeName='stop-color' values='%23cc22ff; %23ff2233; %23cc22ff' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' values='%23ff2233; %23cc22ff; %23ff2233' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3C/linearGradient%3E%3Cpath style='fill:url(%23logo-gradient);' d='M3019.2,4995.6c-32.9-3.4-64.1-8.4-70-12.6c-5.1-3.4-27.8-9.3-50.6-13.5c-49.8-8.4-101.2-26.1-178.8-60.7 c-16-7.6-35.4-16-42.2-18.6c-6.7-3.4-20.2-10.1-29.5-16c-9.3-5.9-36.3-21.1-59-34.6c-128.2-75-280-226.8-355-355 c-13.5-22.8-28.7-49.8-34.6-59c-5.9-9.3-12.6-22.8-16-29.5c-2.5-6.7-10.1-23.6-16-37.9c-43-98.7-54.8-132.4-63.2-181.3 c-4.2-21.1-11-48.1-16-60.7c-13.5-35.4-20.2-246.2-10.1-339.8c8.4-81,17.7-131.5,36.3-185.5c4.2-13.5,11-37.1,14.3-51.4 c7.6-27.8,75.9-169.5,102-210c9.3-13.5,19.4-31.2,22.8-37.9c2.5-6.7,7.6-14.3,10.1-16.9s15.2-19.4,27.8-37.9 c47.2-69.1,205.8-214.2,297.7-271.5c64.1-40.5,216.7-107.1,274.1-120.6c16-3.4,46.4-10.1,67.5-15.2c150.1-36.3,330.6-36.3,480.7,0 c21.1,5.1,51.4,11.8,67.5,15.2c77.6,18.6,208.3,79.3,307.8,145c74.2,48.9,218.4,186.4,274.1,262.3c70,95.3,148.4,254.7,167.8,343.2 c4.2,16,11,44.7,16,63.2c36.3,138.3,36.3,350.8,0,489.1c-5.1,18.6-11.8,47.2-16,63.2c-11.8,56.5-79.3,209.1-119.7,274.1 c-47.2,75-124.8,166.1-209.1,245.4c-107.9,100.3-327.2,215.9-454.5,240.3c-21.1,3.4-51.4,11-67.5,16 C3340.5,4997.3,3098.5,5004,3019.2,4995.6z M3219.9,4371.6c19.4-9.3,44.7-28.7,56.5-44.7c19.4-26.1,21.1-34.6,22.8-153.5 c1.7-68.3,5.1-128.2,7.6-132.4c2.5-4.2,59-7.6,125.6-7.6c107.9,0,124.8-1.7,150.9-17.7c43-25.3,64.1-64.1,64.1-117.2 c0-36.3-4.2-49.8-26.1-76.7c-32.9-42.2-62.4-49.8-190.6-49.8c-56.5,0-107.9-2.5-115.5-5.1c-11-4.2-13.5-21.9-13.5-107.9 c0-140.8-4.2-159.4-44.7-199c-31.2-32-35.4-33.7-85.2-33.7c-57.3,0-88.5,15.2-115.5,55.7c-13.5,21.1-16,41.3-16,147.6 c0,88.5-3.4,125.6-10.1,132.4c-5.9,5.1-67.5,10.1-137.4,11.8c-116.4,2.5-129,4.2-150.9,21.1c-75,59-71.7,159.4,5.9,215 c24.5,17.7,38.8,19.4,157.7,23.6l130.7,4.2l2.5,129.9c1.7,124.8,2.5,129.9,24.5,158.5c24.5,32,72.5,60.7,102,61.6 C3176.1,4387.6,3200.5,4380,3219.9,4371.6z'/%3E%3Cpath style='fill:url(%23logo-gradient);' d='M4275.7,2744.1c-13.5-3.4-32.9-10.1-42.2-15.2c-16-8.4-41.3-18.6-119.7-48.1c-50.6-18.6-105.4-39.6-133.2-51.4 c-13.5-5.9-42.2-17.7-63.2-25.3c-21.1-8.4-53.1-20.2-71.7-27c-18.6-7.6-44.7-17.7-59-23.6c-39.6-16.9-91.1-36.3-111.3-42.2 c-39.6-11-21.1-27.8,42.2-37.1c32.9-5.9,81-20.2,104.6-32l44.7-21.9l98.7,48.1c54.8,27,105.4,52.3,112.2,56.5 c6.7,4.2,18.6,10.1,25.3,12.6c6.7,3.4,86.9,42.2,177.1,86.9c101.2,50.6,165.3,86.9,167,95.3 C4451.9,2745.8,4345.7,2761,4275.7,2744.1z'/%3E%3Cpath style='fill:url(%23logo-gradient);' d='M4528.7,2608.3c-87.7-45.5-201.5-104.6-253-130.7c-50.6-26.1-98.7-50.6-105.4-54.8c-6.7-4.2-18.6-9.3-25.3-12.6 c-6.7-2.5-46.4-22.8-88.5-44.7c-82.6-43-91.9-56.5-68.3-102c7.6-13.5,16-52.3,18.6-85.2c5.9-64.1,17.7-79.3,43.8-57.3 c7.6,6.7,85.2,55.7,172.9,108.8c86.9,53.1,168.6,102.9,181.3,110.5c12.6,8.4,30.4,18.6,39.6,23.6c9.3,5.1,28.7,16,42.2,25.3 c14.3,9.3,32.9,20.2,42.2,25.3c9.3,5.1,28.7,16,42.2,25.3c14.3,9.3,32.9,20.2,42.2,25.3c9.3,5.1,28.7,16,42.2,25.3 c14.3,9.3,32.9,20.2,42.2,25.3c9.3,5.1,24.5,13.5,33.7,19.4c70,43,86.9,53.1,101.2,63.2c9.3,5.1,25.3,13.5,36.3,18.6 c30.4,13.5,22.8,38.8-17.7,58.2c-27.8,13.5-51.4,17.7-99.5,16.9C4688.9,2691,4688,2691,4528.7,2608.3z'/%3E%3Cpath style='fill:url(%23logo-gradient);' d='M843.7,2651.3c-202.4-14.3-212.5-15.2-255.5-38.8c-48.1-25.3-89.4-71.7-113.8-124.8c-18.6-41.3-19.4-247.1-1.7-465.5 c6.7-83.5,12.6-190.6,12.6-238.6c0-47.2,5.9-163.6,12.6-257.2c14.3-191.4,22.8-219.2,83.5-282.5c36.3-37.9,83.5-64.1,131.5-72.5 c46.4-7.6,514.4,11,556.5,22.8c43,11.8,115.5,59.9,122.3,82.6c6.7,21.1,28.7,27,50.6,12.6c27-17.7,127.3-29.5,324.7-38.8 c95.3-5.1,178.8-11,186.4-12.6c7.6-2.5,83.5-8.4,168.6-12.6c85.2-4.2,210-11.8,277.4-16.9s177.1-12.6,244.5-17.7 c67.5-5.1,187.2-12.6,265.6-16c79.3-4.2,179.6-11.8,223.5-16.9c43.8-5.1,171.2-10.1,282.5-11c209.1-0.8,230.2,1.7,375.2,42.2 c82.6,22.8,198.2,70.8,257.2,106.2c69.1,41.3,258,170.3,324.7,220.9c25.3,19.4,50.6,37.1,55.7,38.8c5.1,1.7,32.9,20.2,61.6,41.3 c84.3,60.7,190.6,135.8,250.4,177.1c30.4,21.1,92.8,64.9,138.3,97c102.9,73.4,204.9,145,282.5,199 c242.9,168.7,259.7,188.9,258.9,306.9c0,78.4-14.3,112.2-75,170.3c-42.2,41.3-131.5,74.2-175.4,65.8c-39.6-8.4-82.6-23.6-97-34.6 c-6.7-5.1-18.6-11.8-25.3-15.2c-6.7-2.5-23.6-12.6-37.9-21.9c-13.5-9.3-32.9-20.2-42.2-25.3c-9.3-5.1-27.8-16-42.2-25.3 c-13.5-9.3-32.9-20.2-42.2-25.3c-9.3-5.1-27.8-16-42.2-25.3c-13.5-9.3-32.9-20.2-42.2-25.3c-19.4-10.1-37.1-21.1-84.3-51.4 c-18.6-11.8-39.6-24.5-46.4-27c-6.7-3.4-22.8-12.6-35.4-21.1c-97-62.4-717.6-431.7-744.6-441.9c-114.7-47.2-134.1-48.1-651.8-49.8 c-387.9-0.8-416.6,0-431.7,13.5c-22.8,20.2-21.1,56.5,2.5,77.6c17.7,16.9,30.4,17.7,444.4,21.9c490.8,5.9,497.5,6.7,555.7,65.8 c38.8,37.9,68.3,100.3,68.3,142.5c0,66.6-59,152.6-124,178.8c-31.2,13.5-299.4,41.3-386.2,40.5c-136.6-0.8-473.1,48.1-624,90.2 c-89.4,25.3-135.8,38.8-164.4,48.9c-58.2,20.2-89.4,30.4-143.4,47.2c-30.4,9.3-71.7,22.8-92.8,29.5c-21.1,6.7-45.5,11.8-54,11.8 c-9.3,0-35.4,5.1-59,11.8c-89.4,25.3-220.1,38.8-362.6,38.8c-167,0-294.3-18.6-435.1-64.1c-57.3-17.7-79.3-15.2-100.3,12.6 c-10.1,12.6-40.5,34.6-66.6,48.1C1201.2,2669,1137.1,2671.6,843.7,2651.3z M998.8,1665.6c96.1-43.8,114.7-178.8,32.9-240.3 c-58.2-43.8-138.3-40.5-186.4,7.6c-72.5,72.5-55.7,180.5,36.3,231.1C919.5,1684.1,955,1685,998.8,1665.6z'/%3E%3C/g%3E%3C/svg%3E%0A");width: 64px;
    height: 64px;
    background-repeat: no-repeat;
    background-position: center;}


li.nav-courses:before {
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='900.000000pt' height='900.000000pt' viewBox='0 0 900.000000 900.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' x2='100%25' y1='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23EE091C'/%3E%3Cstop offset='100%25' stop-color='%23850B90'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)'%0Afill='url(%23grad1)' stroke='none'%3E%3Cpath d='M1665 8620 c-4 -6 -21 -10 -38 -10 -46 0 -106 -11 -113 -21 -3 -5%0A-14 -9 -25 -9 -57 0 -354 -123 -419 -174 -8 -6 -32 -20 -52 -30 -20 -10 -39%0A-25 -42 -32 -3 -8 -10 -14 -16 -14 -35 0 -253 -215 -355 -351 -41 -54 -75%0A-101 -75 -104 0 -3 -12 -24 -27 -48 -40 -62 -123 -230 -123 -247 0 -9 -4 -20%0A-9 -25 -13 -14 -51 -125 -51 -150 0 -11 -6 -32 -14 -46 -7 -14 -17 -56 -20%0A-93 -4 -36 -12 -68 -17 -71 -5 -4 -9 -69 -9 -145 l0 -140 508 -2 507 -3 3%0A-2824 c1 -1907 5 -2828 12 -2836 6 -7 10 -26 10 -41 -1 -58 41 -217 61 -230 5%0A-3 9 -13 9 -22 0 -45 127 -237 216 -327 58 -59 188 -153 274 -197 56 -30 169%0A-68 250 -86 68 -14 319 -16 2589 -19 1437 -2 2519 1 2525 6 6 5 32 12 59 15%0A26 4 59 14 75 22 15 7 36 14 47 14 12 0 25 4 30 9 6 5 28 14 50 21 49 15 194%0A86 216 106 8 8 19 14 23 14 5 0 25 14 46 30 21 17 41 30 45 30 10 0 87 62 114%0A93 14 15 30 27 35 27 14 0 96 82 96 95 0 6 12 22 28 35 43 39 212 271 212 293%0A0 3 13 25 28 49 16 24 35 59 42 78 16 43 47 115 66 153 8 16 14 35 14 44 0 8%0A6 29 14 46 19 45 43 134 51 187 3 25 10 54 15 65 11 24 32 181 34 250 l1 50%0A-2729 3 c-2009 1 -2732 -1 -2742 -9 -8 -6 -14 -20 -14 -30 0 -27 -39 -166 -61%0A-215 -10 -23 -21 -54 -25 -70 -6 -23 -48 -110 -153 -312 -8 -15 -64 -77 -125%0A-138 -110 -110 -157 -142 -256 -172 -42 -14 -111 -26 -124 -23 -5 1 -31 6 -58%0A11 -53 10 -114 48 -165 102 -32 34 -83 121 -83 143 0 7 -7 26 -15 41 -8 16%0A-15 52 -15 81 0 28 -5 55 -10 58 -7 4 -11 968 -11 2873 -1 1577 -4 2896 -6%0A2932 -3 36 -8 70 -13 75 -4 6 -11 33 -14 60 -4 28 -15 75 -26 105 -25 74 -96%0A212 -115 223 -8 4 -15 14 -15 20 0 16 -79 92 -104 101 -13 4 -16 10 -10 16 11%0A11 4554 9 4629 -2 143 -19 259 -72 344 -156 32 -32 61 -64 64 -72 4 -8 16 -30%0A28 -49 18 -30 31 -68 70 -201 10 -36 14 -498 18 -2370 l6 -2325 339 -3 c187%0A-1 343 1 348 6 8 8 9 4551 1 4702 -2 41 -8 84 -12 95 -5 11 -14 54 -19 95 -13%0A91 -29 156 -48 193 -8 16 -14 35 -14 43 0 8 -4 22 -9 32 -6 9 -22 44 -37 77%0A-44 98 -113 194 -213 298 -52 53 -98 97 -104 97 -5 0 -26 13 -46 28 -76 59%0A-312 162 -371 162 -10 0 -21 4 -24 9 -7 10 -67 21 -113 21 -17 0 -34 4 -38 10%0A-9 14 -4801 14 -4810 0z'/%3E%3Cpath d='M4380 7260 c-8 -5 -25 -10 -37 -10 -12 0 -70 -33 -130 -72 l-108 -73%0A-130 -3 c-134 -3 -167 -11 -228 -56 -33 -24 -51 -57 -82 -151 -34 -100 -52%0A-132 -93 -163 -20 -15 -41 -33 -45 -39 -4 -7 -12 -13 -18 -13 -24 0 -100 -69%0A-120 -108 -19 -38 -21 -55 -16 -125 3 -46 12 -95 21 -112 9 -16 16 -40 16 -52%0A0 -12 5 -25 10 -28 6 -3 10 -21 10 -40 0 -19 -4 -37 -10 -40 -5 -3 -10 -16%0A-10 -28 0 -12 -7 -35 -16 -52 -21 -39 -30 -171 -15 -216 13 -39 53 -87 97%0A-115 129 -82 147 -104 189 -230 56 -171 101 -204 277 -204 148 0 165 -6 331%0A-119 48 -33 148 -53 188 -38 51 19 96 43 138 75 89 67 114 75 261 81 128 6%0A138 8 183 36 34 21 53 43 68 75 11 25 25 53 30 62 5 10 9 25 9 35 0 9 14 45%0A31 79 25 52 40 69 87 100 188 123 218 198 152 384 -16 47 -30 99 -30 115 0 17%0A14 68 30 115 35 99 40 184 13 233 -21 38 -63 87 -75 87 -5 0 -40 24 -79 53%0A-56 42 -75 64 -99 113 -17 33 -30 70 -30 82 0 11 -4 23 -9 26 -5 3 -12 18 -16%0A33 -10 42 -61 99 -108 122 -36 18 -62 21 -159 21 -135 0 -150 5 -269 86 -48%0A33 -100 61 -124 65 -22 4 -47 10 -55 13 -8 3 -22 1 -30 -4z m530 -820 c0 -16%0A-612 -627 -632 -632 -9 -2 -89 69 -196 174 l-181 177 62 64 c34 36 69 67 77%0A69 9 3 52 -31 113 -88 69 -66 105 -94 122 -94 18 0 59 36 162 142 76 78 182%0A186 235 241 l98 99 70 -70 c38 -38 70 -75 70 -82z'/%3E%3Cpath d='M3029 4826 c-5 -6 -9 -82 -9 -171 0 -89 4 -165 9 -170 6 -6 522 -8%0A1383 -5 l1373 5 0 170 0 170 -1373 5 c-861 3 -1377 1 -1383 -4z'/%3E%3Cpath d='M4400 4140 l-1025 -5 0 -170 0 -170 1028 -5 c643 -3 1032 -1 1038 5%0A14 14 12 331 -3 341 -8 5 -461 7 -1038 4z'/%3E%3Cpath d='M3029 3446 c-5 -6 -9 -82 -9 -171 0 -89 4 -165 9 -170 6 -6 522 -8%0A1383 -5 l1373 5 0 170 0 170 -1373 5 c-861 3 -1377 1 -1383 -4z'/%3E%3C/g%3E%3C/svg%3E%0A");
content: '';
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
content: "";
height: 76px;
left: 11px;
pointer-events: none;
position: absolute;
width: 48px;
}

.profile li.nav-profile:before {
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='900.000000pt' height='900.000000pt' viewBox='0 0 900.000000 900.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(238,9,28);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(133,11,144);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)'%0Afill='%23fff' stroke='none'%3E%3Cpath d='M3750 7989 c-25 -4 -74 -13 -110 -18 -80 -13 -145 -29 -188 -47 -18%0A-8 -40 -14 -50 -14 -9 0 -26 -7 -36 -15 -11 -8 -27 -15 -35 -15 -25 0 -202%0A-93 -297 -155 -287 -187 -515 -468 -637 -785 -96 -249 -117 -399 -117 -840 0%0A-420 22 -601 97 -805 29 -78 103 -234 133 -280 11 -16 23 -37 27 -45 12 -26%0A84 -123 156 -208 123 -146 335 -311 507 -394 101 -49 169 -79 205 -89 17 -4%0A62 -17 100 -29 139 -41 251 -55 440 -55 189 0 301 14 440 55 39 12 84 25 100%0A29 17 5 62 22 100 39 390 170 674 439 858 813 67 136 94 214 139 409 17 73 20%0A136 25 460 6 467 -3 583 -60 790 -75 268 -227 523 -431 725 -94 93 -225 198%0A-292 235 -22 12 -55 31 -74 42 -58 35 -241 113 -310 132 -36 10 -78 23 -95 28%0A-16 5 -57 14 -90 18 -33 5 -89 14 -125 19 -76 12 -315 12 -380 0z'/%3E%3Cpath d='M5039 4015 c-43 -28 -220 -120 -246 -128 -10 -3 -43 -15 -73 -27%0A-217 -84 -422 -126 -706 -146 -172 -12 -547 41 -714 101 -70 25 -106 37 -137%0A46 -17 5 -102 45 -188 89 -87 44 -165 80 -174 80 -19 0 -77 -21 -108 -38 -12%0A-7 -27 -12 -33 -12 -17 0 -216 -100 -298 -150 -40 -25 -81 -49 -90 -55 -114%0A-66 -376 -313 -499 -471 -96 -123 -253 -396 -283 -491 -5 -15 -18 -53 -30 -83%0A-12 -30 -26 -73 -30 -96 -5 -22 -13 -51 -18 -65 -14 -36 -40 -161 -57 -281%0A-12 -84 -15 -210 -15 -601 0 -481 1 -496 21 -542 28 -64 94 -126 156 -148 48%0A-16 168 -17 1975 -17 1059 0 1927 3 1930 6 3 3 -40 51 -96 107 -76 77 -110%0A119 -136 172 -33 65 -35 77 -38 182 -3 81 0 120 11 145 8 18 22 52 32 75 17%0A39 15 63 -6 63 -5 0 -39 14 -75 31 -77 37 -177 126 -205 183 -51 105 -59 144%0A-59 296 1 100 5 157 15 185 8 22 15 47 15 55 0 22 54 99 106 152 41 41 119 88%0A198 117 21 9 26 15 21 29 -56 135 -68 191 -60 287 10 118 56 199 185 325 59%0A58 122 112 141 121 101 47 112 50 215 50 56 0 112 -4 122 -10 16 -8 25 -7 42%0A7 l22 18 -44 39 c-160 146 -392 288 -608 375 -30 12 -70 28 -88 36 -43 18 -50%0A17 -93 -11z'/%3E%3Cpath d='M6342 3477 c-12 -13 -22 -26 -22 -30 0 -4 -14 -38 -31 -75 -48 -104%0A-57 -125 -64 -148 -7 -28 -30 -46 -85 -68 -25 -10 -67 -29 -93 -42 l-49 -24%0A-66 25 c-37 14 -80 32 -97 39 -16 7 -47 21 -68 30 -21 9 -57 16 -81 16 -40 0%0A-47 -5 -114 -74 -53 -54 -72 -81 -72 -101 0 -24 17 -71 55 -160 33 -75 55%0A-135 55 -151 0 -9 -9 -35 -19 -58 -10 -23 -27 -61 -36 -86 -20 -49 -57 -90%0A-82 -90 -8 0 -27 -6 -41 -14 -15 -8 -63 -29 -107 -47 -112 -47 -114 -51 -115%0A-184 0 -133 -1 -131 150 -190 118 -46 180 -77 180 -91 0 -6 18 -52 40 -102%0Al39 -92 -25 -62 c-38 -91 -52 -124 -70 -163 -9 -19 -17 -53 -17 -76 0 -38 6%0A-47 72 -112 91 -91 104 -92 266 -22 141 61 154 63 200 39 17 -9 55 -25 85 -36%0A56 -20 100 -57 100 -84 0 -7 13 -42 28 -76 16 -35 37 -83 48 -108 31 -73 43%0A-79 165 -80 122 0 129 4 168 100 13 30 27 59 32 64 5 6 9 16 9 23 0 7 14 42%0A31 78 29 58 36 66 78 81 25 8 69 27 96 40 28 13 55 24 61 24 7 0 45 -14 85%0A-31 41 -16 83 -34 94 -38 11 -5 37 -16 58 -25 73 -31 100 -24 176 52 37 37 71%0A77 74 90 7 30 -1 56 -82 254 l-32 78 24 52 c13 29 32 73 43 98 18 44 49 79 69%0A80 22 0 231 95 253 113 20 19 22 29 22 127 0 119 -3 126 -85 164 -22 10 -52%0A25 -67 32 -14 8 -31 14 -37 14 -6 0 -40 14 -75 30 -59 28 -66 35 -81 78 -10%0A26 -28 69 -41 95 -26 53 -29 68 -15 95 5 9 23 53 41 97 17 44 38 93 46 108 8%0A16 14 47 14 70 0 38 -6 48 -63 104 -35 34 -75 66 -89 72 -26 10 -78 2 -113%0A-16 -25 -14 -136 -60 -188 -79 -35 -12 -42 -11 -90 11 -29 13 -74 32 -102 43%0Al-50 20 -61 141 c-33 77 -68 149 -79 161 -16 18 -30 20 -125 20 -98 0 -108 -2%0A-128 -23z m215 -742 c124 -28 202 -71 284 -159 111 -118 153 -282 115 -456%0A-18 -87 -60 -159 -137 -237 -79 -79 -159 -119 -271 -135 -165 -23 -310 25%0A-429 142 -77 77 -114 147 -141 270 -17 78 -17 90 -3 146 8 33 15 66 15 74 0%0A32 65 143 120 202 69 76 157 125 270 149 97 22 97 22 177 4z'/%3E%3C/g%3E%3C/svg%3E%0A");  
}
.subscriptions li.nav-subscriptions:before {
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='600.000000pt' height='600.000000pt' viewBox='0 0 600.000000 600.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(238,9,28);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(133,11,144);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(0.000000,600.000000) scale(0.100000,-0.100000)'%0Afill='%23fff' stroke='none'%3E%3Cpath d='M4935 5889 c-22 -5 -56 -11 -75 -15 -34 -5 -84 -22 -145 -49 -16 -7%0A-37 -16 -45 -19 -53 -23 -139 -86 -202 -148 -86 -85 -126 -139 -168 -228 -75%0A-157 -84 -198 -84 -385 1 -126 4 -168 17 -199 10 -21 17 -45 17 -53 0 -46 134%0A-269 204 -339 70 -70 293 -204 339 -204 8 0 32 -7 53 -17 59 -24 336 -24 419%0A1 200 61 348 163 466 321 80 107 118 196 150 349 24 111 23 186 0 301 -23 107%0A-33 138 -79 230 -94 190 -267 342 -472 414 -122 43 -299 61 -395 40z m503%0A-592 l43 -44 -276 -276 -277 -277 -44 0 c-41 0 -47 4 -149 104 -58 57 -105%0A108 -105 113 0 10 112 123 123 123 4 0 34 -25 67 -55 33 -30 63 -55 67 -55 5%0A0 109 101 232 224 l225 225 25 -19 c14 -10 45 -38 69 -63z'/%3E%3Cpath d='M3230 5731 c0 -61 -4 -112 -9 -115 -5 -3 -127 -7 -272 -9 -263 -4%0A-310 -9 -514 -53 -134 -28 -339 -91 -397 -120 -14 -8 -32 -14 -38 -14 -21 0%0A-260 -120 -365 -183 -203 -122 -422 -304 -611 -508 -36 -40 -201 -256 -231%0A-304 -84 -135 -175 -306 -220 -412 -7 -18 -19 -48 -27 -65 -8 -18 -17 -42 -19%0A-53 -3 -11 -16 -51 -30 -90 -39 -113 -64 -214 -104 -425 -26 -137 -26 -639 1%0A-785 28 -159 66 -319 91 -385 8 -19 16 -48 20 -64 6 -30 13 -31 85 -6 77 27%0A85 34 84 71 -1 18 -6 48 -12 64 -32 90 -54 189 -87 381 -18 109 -21 535 -4%0A629 6 33 14 87 18 120 10 74 45 219 73 300 5 17 13 44 18 60 4 17 12 41 18 55%0A5 14 18 45 28 70 24 61 140 298 164 335 11 17 23 37 27 45 11 24 92 139 157%0A225 78 103 308 333 411 411 86 65 201 146 225 157 8 4 29 16 45 27 37 24 273%0A140 335 164 42 17 60 24 150 56 19 6 51 16 70 20 60 15 123 31 176 46 28 8 64%0A14 80 14 16 0 61 7 99 15 51 11 137 15 311 15 211 0 243 -2 248 -16 3 -9 6%0A-58 6 -110 0 -61 4 -94 11 -94 21 0 529 311 529 324 0 7 -19 22 -42 35 -24 12%0A-56 31 -73 41 -16 11 -39 24 -50 30 -11 6 -33 19 -50 30 -16 11 -39 24 -50 30%0A-11 6 -33 19 -50 30 -16 11 -39 24 -50 30 -11 6 -33 19 -50 30 -16 11 -40 24%0A-52 29 -11 5 -24 15 -28 20 -3 6 -15 11 -26 11 -18 0 -19 -8 -19 -109z'/%3E%3Cpath d='M2138 3895 c-64 -44 -76 -75 -79 -208 -1 -64 0 -119 3 -122 7 -7%0A2127 -7 2139 0 5 4 9 51 9 105 0 122 -19 175 -81 220 l-42 30 -956 0 -956 0%0A-37 -25z'/%3E%3Cpath d='M5410 3845 c-14 -8 -34 -14 -45 -15 -11 0 -31 -7 -44 -16 -24 -17%0A-25 -45 -3 -109 28 -82 57 -207 86 -381 22 -125 22 -530 1 -663 -31 -188 -55%0A-291 -102 -426 -14 -38 -28 -84 -32 -100 -4 -17 -12 -39 -18 -50 -5 -11 -17%0A-36 -25 -55 -51 -118 -127 -262 -185 -349 -24 -35 -43 -65 -43 -68 0 -8 -123%0A-167 -164 -213 -52 -56 -234 -238 -268 -266 -107 -90 -277 -208 -383 -266 -87%0A-48 -255 -128 -268 -128 -7 0 -17 -4 -22 -9 -10 -9 -178 -67 -280 -95 -66 -19%0A-177 -42 -296 -61 -121 -19 -538 -22 -557 -3 -8 8 -12 47 -12 110 0 64 -4 98%0A-11 98 -21 0 -529 -311 -529 -324 0 -7 19 -22 42 -35 24 -12 57 -31 73 -41 17%0A-11 39 -24 50 -30 11 -6 34 -19 50 -30 17 -11 39 -24 50 -30 11 -6 34 -19 50%0A-30 17 -11 39 -24 50 -30 11 -6 34 -19 50 -30 17 -11 40 -24 52 -29 11 -5 24%0A-15 28 -20 3 -6 15 -11 26 -11 18 0 19 8 19 109 0 75 4 112 13 119 7 6 48 8%0A112 4 130 -9 411 4 499 23 38 8 80 15 94 15 14 0 48 6 76 14 53 15 116 31 176%0A46 33 8 56 15 143 46 187 68 398 171 525 255 24 16 45 29 48 29 3 0 60 41 127%0A92 150 113 267 221 402 373 63 72 215 269 215 280 0 4 11 21 24 38 30 41 72%0A117 136 247 66 134 80 166 124 288 31 86 38 109 46 142 15 60 31 123 46 176 8%0A28 14 62 14 77 0 14 8 56 17 94 25 103 25 637 -1 778 -28 159 -66 319 -91 385%0A-8 19 -16 47 -19 63 -7 30 -27 34 -66 12z'/%3E%3Cpath d='M2062 3348 c-4 -13 -6 -305 -4 -650 l2 -627 48 -49 c36 -36 57 -50%0A87 -55 69 -12 1846 -8 1888 4 46 12 95 62 113 114 11 32 14 158 14 652 0 595%0A-1 613 -19 623 -13 7 -365 10 -1071 10 l-1050 0 -8 -22z m916 -177 c10 -1 12%0A-23 10 -88 l-3 -88 -87 -3 c-66 -2 -88 0 -89 10 -4 61 2 162 9 167 8 5 97 6%0A160 2z m939 -4 c4 -4 7 -124 4 -165 -1 -10 -23 -12 -88 -10 l-88 3 -3 84 c-2%0A46 1 87 7 90 10 7 161 4 168 -2z m-462 -87 l0 -85 -90 0 -90 0 -3 74 c-2 41%0A-1 80 2 88 4 11 26 13 93 11 l88 -3 0 -85z m-947 -282 c7 -7 12 -43 12 -90 0%0A-94 -4 -97 -110 -89 l-75 6 -3 80 c-2 66 0 82 14 92 23 17 146 17 162 1z m480%0A-77 c2 -48 -2 -89 -7 -94 -11 -11 -157 -14 -168 -4 -7 8 -4 167 3 179 3 5 42%0A7 87 6 l82 -3 3 -84z m453 79 c16 -9 19 -22 19 -90 0 -44 -5 -82 -11 -85 -14%0A-9 -153 -10 -167 -1 -8 4 -12 37 -12 86 0 65 3 81 18 89 22 14 128 14 153 1z%0Am473 2 c7 -12 10 -172 3 -179 -9 -8 -151 -8 -165 1 -13 8 -17 167 -5 179 9 10%0A161 9 167 -1z m-1396 -475 l-3 -82 -90 0 -90 0 0 85 0 85 75 5 c109 7 111 5%0A108 -93z m460 94 c10 -1 12 -23 10 -88 l-3 -88 -87 -3 c-66 -2 -88 0 -89 10%0A-4 61 2 162 9 167 8 5 97 6 160 2z m477 -91 l0 -85 -90 0 -90 0 -3 74 c-2 41%0A-1 80 2 88 4 11 26 13 93 11 l88 -3 0 -85z'/%3E%3Cpath d='M800 1761 c-62 -9 -158 -34 -186 -49 -11 -6 -39 -20 -64 -32 -88 -41%0A-143 -82 -228 -168 -62 -63 -125 -149 -148 -202 -3 -8 -12 -28 -19 -45 -27%0A-61 -44 -111 -49 -145 -3 -19 -10 -55 -15 -80 -29 -131 8 -339 85 -493 79%0A-158 214 -293 374 -373 104 -52 269 -93 376 -94 64 0 207 26 284 53 191 65%0A392 243 471 417 77 169 83 199 83 385 -1 126 -4 168 -17 199 -10 21 -17 45%0A-17 53 0 46 -134 269 -204 339 -70 70 -293 204 -339 204 -8 0 -30 6 -49 14%0A-41 18 -257 28 -338 17z m220 -316 c5 -38 7 -40 69 -62 71 -25 118 -58 155%0A-106 31 -41 63 -134 50 -147 -8 -7 -106 -14 -157 -11 -10 0 -27 16 -37 34 -29%0A49 -56 57 -185 57 -113 0 -113 0 -144 -31 -39 -39 -42 -85 -7 -122 30 -33 42%0A-35 201 -40 109 -3 136 -7 169 -25 48 -26 116 -82 116 -95 0 -6 6 -18 13 -26%0A18 -21 37 -90 37 -132 0 -71 -37 -148 -94 -201 -36 -34 -100 -68 -127 -68 -39%0A0 -59 -19 -59 -55 0 -45 -17 -53 -110 -46 l-75 6 -5 45 c-5 44 -6 45 -46 50%0A-107 15 -224 137 -224 235 l0 35 90 0 c51 0 90 -4 90 -10 0 -5 14 -25 31 -45%0Al31 -35 132 0 c122 0 134 2 152 21 26 29 26 109 0 138 -18 19 -30 21 -147 21%0A-163 0 -239 24 -306 98 -56 61 -73 104 -73 187 0 83 17 127 73 187 41 44 68%0A60 140 82 56 18 57 18 57 55 0 21 3 41 7 45 4 4 46 5 93 4 l85 -3 5 -40z'/%3E%3C/g%3E%3C/svg%3E%0A");
}
.payments li.nav-payments:before {
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='1875.000000pt' height='1506.000000pt' viewBox='0 0 1375.000000 1106.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(238,9,28);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(133,11,144);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(0.000000,1506.000000) scale(0.100000,-0.100000)'%0Afill='%23fff' stroke='none'%3E%3Cpath d='M1520 14271 c-55 -7 -105 -21 -168 -47 -18 -8 -40 -14 -48 -14 -16 0%0A-119 -54 -145 -76 -8 -8 -21 -14 -28 -14 -15 0 -241 -223 -241 -239 0 -6 -13%0A-30 -30 -53 -16 -22 -30 -47 -30 -54 0 -7 -11 -35 -25 -63 -14 -27 -34 -85%0A-45 -127 -20 -76 -20 -124 -20 -3029 0 -2901 0 -2953 20 -3026 25 -95 44 -147%0A58 -161 7 -7 12 -18 12 -25 0 -12 20 -45 87 -143 37 -55 152 -164 213 -203 36%0A-23 74 -48 85 -55 11 -6 27 -15 35 -18 8 -3 28 -12 43 -20 16 -7 37 -14 47%0A-14 10 0 21 -4 24 -9 3 -5 41 -17 83 -27 75 -18 188 -19 3358 -19 l3280 0 6%0A117 c4 65 10 130 14 145 4 16 11 55 16 88 11 80 28 161 45 210 8 23 14 48 14%0A57 0 10 6 32 14 50 7 18 21 58 31 88 28 88 146 323 213 425 40 61 134 189 147%0A200 6 6 29 32 51 60 83 105 231 238 389 351 112 79 134 94 139 94 3 0 38 19%0A78 43 40 23 93 51 118 61 25 11 68 29 95 41 28 12 82 32 120 45 39 12 86 28%0A105 35 39 14 140 36 270 59 232 41 659 24 870 -33 114 -32 251 -77 308 -103%0A34 -15 66 -28 70 -28 15 0 218 -109 280 -151 24 -16 46 -29 49 -29 3 0 19 -11%0A37 -25 17 -14 69 -55 116 -91 95 -74 254 -228 299 -289 16 -22 42 -53 57 -70%0A30 -34 119 -164 166 -242 27 -44 140 -274 148 -301 5 -15 18 -52 30 -82 12%0A-30 26 -71 30 -90 4 -19 18 -71 30 -115 12 -44 26 -107 31 -140 18 -112 24%0A-138 35 -142 17 -6 124 115 172 193 72 120 112 232 128 358 21 167 21 5699 0%0A5861 -24 187 -80 312 -211 471 -67 80 -204 190 -275 220 -8 4 -40 18 -70 32%0A-30 14 -68 29 -85 33 -16 4 -48 14 -70 21 -32 10 -1055 13 -5280 14 -2882 1%0A-5265 -2 -5295 -5z m1568 -704 c29 -29 54 -64 61 -86 7 -24 11 -133 11 -298 0%0A-293 -4 -312 -68 -371 -71 -64 -45 -62 -707 -62 -567 0 -606 1 -647 19 -46 19%0A-103 76 -119 118 -5 13 -9 150 -9 304 0 258 2 283 20 318 20 41 81 95 115 104%0A11 3 307 4 657 3 l637 -1 49 -48z m8541 -1474 c74 -23 129 -66 152 -121 18%0A-41 19 -75 19 -544 0 -352 -3 -512 -12 -539 -17 -58 -93 -126 -149 -134 -24%0A-3 -429 -5 -901 -3 l-856 3 -44 30 c-25 18 -55 52 -70 80 l-28 50 0 508 c0%0A551 -3 521 53 596 24 33 86 70 117 71 14 0 32 5 40 10 9 6 317 10 819 10 729%0A0 809 -2 860 -17z m-8387 -2313 c62 -36 83 -76 83 -155 0 -80 -14 -106 -80%0A-149 l-39 -26 -821 0 -821 0 -47 30 c-51 32 -87 95 -87 151 0 45 36 106 82%0A139 l41 30 828 0 c807 0 829 -1 861 -20z m2116 4 c15 -9 42 -34 60 -56 29 -36%0A32 -47 32 -104 0 -60 -3 -67 -37 -105 -66 -73 -13 -69 -922 -69 l-817 0 -40%0A26 c-103 67 -111 201 -17 283 l46 41 834 0 c749 0 838 -2 861 -16z m2147 -3%0Ac44 -23 67 -52 90 -113 17 -45 17 -49 0 -85 -27 -57 -61 -100 -96 -117 -28%0A-14 -125 -16 -851 -16 -585 0 -826 3 -841 11 -72 37 -126 135 -108 196 17 56%0A33 79 79 111 l46 32 823 0 c787 0 825 -1 858 -19z m2183 -30 c53 -53 66 -90%0A55 -158 -8 -49 -55 -110 -100 -128 -30 -13 -157 -15 -852 -15 l-816 0 -45 30%0Ac-56 37 -79 80 -80 147 0 63 26 113 79 149 l36 24 837 0 837 0 49 -49z m-4349%0A-777 c24 -9 54 -34 75 -61 32 -41 36 -53 36 -102 -1 -68 -33 -122 -95 -157%0Al-40 -23 -541 -1 c-520 0 -542 1 -582 20 -76 37 -124 129 -102 198 18 55 57%0A102 104 123 38 17 75 19 573 19 462 0 538 -2 572 -16z m1928 -7 c53 -30 111%0A-134 100 -179 -13 -50 -65 -115 -109 -137 -44 -21 -53 -21 -582 -21 -580 0%0A-564 -1 -624 54 -55 49 -71 140 -37 207 20 39 33 50 90 79 39 20 53 20 585 18%0A505 -3 547 -4 577 -21z'/%3E%3Cpath d='M10139 8536 c-2 -3 -54 -10 -114 -16 -105 -11 -163 -23 -265 -56 -25%0A-8 -53 -14 -62 -14 -10 0 -34 -7 -55 -16 -21 -9 -51 -22 -68 -28 -44 -18 -108%0A-47 -125 -57 -8 -4 -50 -26 -93 -48 -171 -89 -355 -242 -516 -426 -51 -59%0A-195 -268 -208 -303 -4 -9 -18 -37 -33 -62 -14 -25 -34 -70 -44 -100 -10 -30%0A-22 -59 -26 -65 -7 -9 -23 -58 -64 -191 -9 -29 -16 -61 -16 -72 0 -11 -8 -49%0A-17 -84 -14 -51 -17 -108 -18 -308 0 -247 4 -287 47 -445 6 -22 14 -56 19 -75%0A4 -19 17 -60 29 -90 12 -30 25 -67 30 -82 15 -47 109 -235 145 -288 19 -29 35%0A-55 35 -59 0 -4 14 -20 30 -36 17 -16 30 -33 30 -38 0 -22 185 -222 285 -307%0A43 -37 153 -120 158 -120 3 0 28 -16 57 -35 89 -60 254 -136 400 -185 36 -12%0A79 -27 95 -32 17 -6 53 -14 80 -18 28 -4 68 -14 90 -21 55 -19 560 -19 625 0%0A25 7 68 16 96 21 28 4 61 13 72 19 11 6 34 11 49 11 16 0 38 7 49 15 10 8 28%0A15 39 15 11 0 29 7 39 15 11 8 26 15 34 15 20 0 218 98 282 139 30 20 60 38%0A67 41 7 3 59 43 117 89 106 84 216 195 291 291 22 29 47 59 55 68 28 30 82%0A116 124 197 15 28 31 57 36 65 19 32 70 151 70 164 0 8 4 17 9 21 5 3 12 20%0A16 38 3 17 12 52 20 77 57 185 75 313 75 526 0 163 -25 385 -49 439 -5 11 -12%0A31 -15 45 -7 34 -31 115 -51 170 -17 47 -32 70 -46 70 -7 0 -87 -87 -274 -301%0A-56 -64 -107 -121 -279 -313 -39 -43 -101 -111 -137 -150 -37 -39 -86 -94%0A-110 -123 -44 -52 -118 -136 -273 -307 -45 -50 -105 -117 -135 -150 -71 -80%0A-73 -83 -193 -215 -57 -63 -116 -129 -131 -147 -16 -19 -32 -34 -36 -34 -5 0%0A-26 13 -47 30 -22 16 -44 33 -49 37 -6 5 -29 24 -51 43 -23 19 -76 64 -119%0A100 -76 63 -214 179 -265 224 -14 12 -43 35 -65 51 -22 17 -52 41 -66 55 -14%0A14 -43 39 -64 55 -42 33 -160 131 -190 158 -11 10 -54 46 -96 80 -178 144%0A-369 309 -369 317 0 24 427 480 449 480 6 0 32 -23 58 -52 53 -56 100 -106%0A398 -413 110 -114 250 -259 311 -322 86 -90 115 -114 127 -107 8 5 39 41 68%0A79 29 39 57 73 61 76 5 3 23 27 41 52 40 58 150 198 182 233 14 15 25 30 25%0A35 0 4 17 28 38 53 20 24 62 77 92 117 30 39 60 77 65 83 6 6 21 28 35 48 14%0A21 28 38 32 38 3 0 20 21 37 48 17 26 49 70 72 97 53 66 117 148 152 196 15%0A21 41 53 57 71 17 18 30 35 30 39 0 3 8 15 18 26 9 11 42 53 72 93 30 40 70%0A89 88 110 17 20 32 41 32 45 0 5 7 16 15 25 14 15 10 22 -37 70 -88 88 -278%0A224 -388 279 -25 12 -52 26 -60 30 -64 36 -199 90 -251 100 -19 4 -42 12 -49%0A16 -8 5 -32 12 -55 16 -22 4 -60 12 -85 18 -128 29 -473 55 -491 37z'/%3E%3C/g%3E%3C/svg%3E%0A");
}
.orders li.nav-orders:before {
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='510.000000pt' height='420.000000pt' viewBox='0 0 510.000000 420.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(238,9,28);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(144,11,39);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(0.000000,420.000000) scale(0.100000,-0.100000)'%0Afill='%23ffffff' stroke='none'%3E%3Cpath d='M91 4077 c-16 -16 -15 -181 2 -195 7 -6 110 -12 267 -14 286 -4 296%0A-6 371 -85 44 -46 61 -79 83 -158 10 -33 23 -80 30 -105 7 -25 21 -71 30 -102%0A9 -32 23 -84 32 -115 36 -124 44 -155 58 -200 7 -27 22 -77 31 -113 10 -36 23%0A-83 30 -105 7 -22 20 -67 29 -100 10 -33 23 -80 31 -105 7 -25 21 -74 30 -110%0A10 -36 23 -83 30 -105 7 -22 21 -69 30 -105 10 -36 23 -83 30 -105 7 -22 19%0A-65 28 -95 8 -30 22 -80 31 -110 48 -165 75 -262 91 -320 10 -36 23 -83 30%0A-105 7 -22 21 -69 30 -105 9 -36 23 -83 31 -105 8 -23 14 -48 14 -58 0 -9 16%0A-51 36 -94 27 -57 54 -95 103 -144 66 -66 94 -84 185 -120 48 -19 78 -20 1108%0A-20 583 1 1064 3 1069 7 14 8 11 178 -3 192 -9 9 -256 12 -1051 12 -1004 0%0A-1039 1 -1080 19 -49 23 -116 91 -139 141 -9 19 -24 64 -33 100 -10 36 -24 82%0A-32 104 -7 21 -11 47 -8 57 6 19 35 19 1206 19 660 0 1204 2 1209 5 11 7 27%0A59 87 285 8 30 20 72 26 93 14 49 12 50 -105 66 -269 37 -483 156 -669 371%0A-79 92 -174 279 -199 395 -5 22 -14 56 -20 75 -5 19 -10 89 -10 156 0 91 -3%0A124 -14 133 -10 8 -274 11 -987 11 l-974 -1 -17 22 c-10 12 -18 28 -18 37 0%0A15 -18 82 -45 167 -7 22 -20 69 -30 105 -65 242 -103 320 -198 406 -122 109%0A-224 134 -543 133 -144 0 -215 -4 -223 -12z'/%3E%3Cpath d='M4050 3920 c-59 -7 -156 -32 -186 -48 -11 -5 -39 -19 -64 -31 -207%0A-100 -368 -299 -431 -535 -26 -99 -26 -303 0 -402 74 -276 277 -495 541 -584%0A245 -82 496 -46 730 104 65 42 190 172 231 241 114 193 154 419 108 610 -19%0A79 -69 206 -100 253 -16 24 -29 45 -29 48 0 24 -171 185 -245 231 -158 98%0A-356 138 -555 113z m502 -408 c2 -4 29 -29 61 -57 31 -27 57 -56 57 -64 0 -9%0A-15 -32 -33 -53 -17 -20 -57 -67 -87 -104 -30 -37 -64 -77 -75 -90 -11 -12%0A-45 -52 -75 -90 -30 -37 -84 -102 -120 -144 -36 -42 -83 -99 -105 -125 -22%0A-27 -57 -69 -78 -93 -21 -25 -45 -55 -54 -68 -29 -45 -52 -30 -165 104 -59 70%0A-130 152 -158 182 -27 30 -49 61 -50 68 0 19 126 132 147 132 5 0 45 -42 89%0A-94 43 -52 86 -95 94 -95 9 -1 45 34 80 77 36 42 69 82 75 88 21 24 53 62 91%0A109 21 28 49 61 61 75 51 60 101 119 138 165 22 27 48 57 58 67 18 19 43 24%0A49 10z'/%3E%3Cpath d='M1966 720 c-66 -30 -134 -96 -162 -157 -113 -239 83 -501 346 -461%0A197 30 320 241 253 433 -23 63 -110 154 -177 183 -64 29 -201 30 -260 2z'/%3E%3Cpath d='M3407 713 c-66 -34 -117 -87 -150 -156 -38 -80 -39 -192 -2 -270 93%0A-195 324 -250 501 -119 64 46 124 168 124 249 0 91 -56 206 -128 261 -68 51%0A-105 62 -205 61 -78 0 -99 -4 -140 -26z'/%3E%3C/g%3E%3C/svg%3E%0A");
}
.home li.nav-home:before {
background-image: url("data:image/svg+xml,%3c%3fxml version='1.0' standalone='no'%3f%3e %3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e %3csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='1560.000000pt' height='1560.000000pt' viewBox='0 0 1360.000000 1360.000000' preserveAspectRatio='xMidYMid meet'%3e%3cdefs%3e%3clinearGradient id='grad1' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3e%3cstop offset='0%25' style='stop-color:rgb(238%2c9%2c28)%3bstop-opacity:1'/%3e%3cstop offset='100%25' style='stop-color:rgb(133%2c11%2c144)%3bstop-opacity:1'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg transform='translate(0.000000%2c1560.000000) scale(0.100000%2c-0.100000)' fill='%23fff' stroke='none'%3e%3cpath d='M6531 14105 c-18 -8 -44 -15 -57 -15 -29 0 -136 -39 -194 -71 -8 -5 -29 -16 -46 -24 -17 -9 -40 -24 -50 -33 -11 -9 -37 -29 -59 -44 -22 -15 -68 -51 -102 -80 -104 -89 -251 -211 -296 -247 -23 -18 -56 -45 -72 -60 -17 -14 -55 -46 -85 -71 -30 -25 -72 -61 -93 -80 -21 -19 -47 -39 -57 -45 -10 -5 -42 -31 -71 -56 -79 -69 -290 -246 -394 -330 -160 -132 -326 -270 -369 -310 -28 -25 -72 -62 -99 -81 -26 -20 -71 -57 -100 -82 -28 -25 -110 -93 -182 -152 -71 -59 -132 -110 -135 -113 -3 -3 -36 -32 -75 -63 -38 -31 -82 -67 -96 -80 -15 -13 -57 -48 -95 -78 -37 -30 -104 -86 -150 -125 -45 -38 -124 -105 -176 -147 -89 -74 -326 -271 -378 -315 -132 -112 -392 -327 -502 -418 -40 -32 -116 -95 -168 -140 -52 -44 -108 -91 -125 -104 -16 -12 -46 -37 -65 -54 -19 -18 -57 -50 -85 -72 -27 -22 -73 -61 -102 -87 -28 -26 -55 -48 -60 -48 -4 0 -26 -17 -48 -38 -23 -20 -74 -64 -115 -97 -41 -33 -81 -66 -90 -75 -8 -8 -42 -36 -75 -62 -33 -26 -76 -62 -97 -80 -20 -18 -67 -58 -104 -88 -37 -30 -102 -84 -144 -120 -43 -36 -122 -102 -176 -147 -294 -245 -730 -608 -809 -673 -217 -183 -225 -194 -225 -333 0 -72 4 -98 15 -107 8 -7 15 -18 15 -24 0 -6 31 -48 68 -93 37 -45 94 -115 126 -155 33 -40 78 -93 100 -119 23 -25 50 -56 61 -70 11 -13 48 -58 81 -99 119 -146 185 -189 290 -190 93 0 148 36 465 300 334 278 329 274 388 325 26 22 93 78 150 125 164 134 366 303 371 310 3 3 37 31 75 61 39 31 77 64 85 74 8 10 27 25 41 34 15 9 51 37 80 63 103 88 229 193 441 367 57 47 132 110 168 141 36 31 79 66 95 79 17 12 46 37 65 55 19 17 59 51 89 75 30 23 75 60 100 81 25 22 107 90 181 152 142 118 148 123 221 184 25 22 65 55 89 74 24 19 79 66 124 104 164 138 352 295 391 325 17 12 46 37 65 55 19 17 58 50 85 71 28 22 69 58 93 79 23 22 54 47 70 57 15 9 41 30 58 45 16 16 52 47 80 68 27 22 70 58 95 80 25 23 90 78 145 123 198 163 299 247 304 253 3 3 37 32 75 63 115 94 177 146 235 196 30 27 78 65 105 86 28 20 55 42 60 49 6 6 42 37 80 68 39 31 79 65 90 75 19 17 133 112 305 254 41 34 103 86 138 117 54 47 99 83 158 127 9 7 19 7 28 0 59 -44 104 -80 158 -127 35 -31 97 -83 138 -117 241 -199 398 -330 460 -385 14 -13 48 -40 75 -61 28 -20 75 -59 105 -86 58 -50 120 -102 235 -196 39 -31 72 -60 75 -63 5 -6 106 -90 304 -253 55 -45 120 -100 145 -123 25 -22 68 -58 95 -80 28 -21 68 -56 90 -76 23 -21 45 -38 49 -38 5 0 32 -22 60 -48 29 -26 75 -65 102 -87 28 -22 66 -54 85 -72 19 -17 49 -42 65 -54 38 -29 214 -176 391 -325 45 -38 101 -85 125 -104 24 -19 64 -52 89 -74 54 -46 51 -43 220 -184 74 -62 156 -130 181 -152 25 -21 70 -58 100 -81 30 -24 70 -58 89 -75 19 -18 49 -43 65 -55 17 -13 59 -48 95 -79 36 -31 111 -94 168 -141 212 -174 338 -279 441 -367 29 -26 65 -54 80 -63 14 -9 33 -24 41 -34 8 -10 47 -43 85 -74 39 -30 72 -58 75 -61 5 -7 207 -176 371 -310 57 -47 124 -103 150 -125 25 -22 57 -49 70 -60 13 -11 148 -123 299 -249 351 -294 374 -309 462 -314 121 -7 191 37 329 208 24 30 53 66 64 79 11 14 38 45 61 70 22 26 67 79 100 119 32 40 89 110 126 155 37 45 68 87 68 93 0 6 7 17 15 24 11 9 15 35 15 107 0 141 -3 145 -250 353 -47 39 -94 79 -105 88 -11 10 -56 47 -100 82 -44 36 -89 73 -100 84 -11 10 -36 30 -55 44 -19 14 -42 33 -51 42 -21 19 -51 45 -114 95 -27 22 -61 50 -75 64 -14 13 -42 37 -64 52 -21 16 -62 48 -90 73 -52 45 -160 135 -395 330 -74 61 -169 140 -211 176 -43 36 -123 103 -179 150 l-101 84 0 1712 c0 1672 0 1712 -19 1755 -20 45 -62 90 -116 125 -29 18 -58 19 -911 19 l-881 0 -55 -37 c-44 -29 -62 -49 -84 -95 l-29 -58 -3 -822 -2 -823 -23 0 c-12 0 -44 21 -73 48 -27 26 -77 68 -110 94 -58 47 -143 118 -195 163 -42 37 -326 274 -399 335 -37 30 -121 100 -186 155 -66 55 -132 111 -149 123 -16 13 -46 38 -65 55 -19 18 -57 50 -85 72 -27 22 -82 67 -121 100 -173 147 -412 345 -542 450 -136 110 -200 154 -242 171 -8 3 -28 11 -45 19 -62 27 -116 45 -139 45 -13 0 -40 7 -59 15 -51 21 -367 21 -416 0z'/%3e%3cpath d='M6691 11953 c-19 -16 -66 -55 -105 -88 -39 -33 -120 -101 -181 -150 -119 -96 -169 -137 -279 -230 -39 -33 -91 -76 -116 -95 -25 -19 -49 -39 -55 -45 -5 -6 -32 -29 -60 -50 -27 -22 -55 -44 -61 -50 -6 -5 -28 -24 -50 -42 -251 -205 -427 -350 -674 -555 -102 -84 -205 -169 -230 -188 -25 -19 -63 -51 -85 -71 -22 -21 -62 -54 -90 -74 -27 -21 -54 -42 -60 -49 -5 -6 -32 -29 -60 -51 -47 -37 -166 -136 -399 -328 -167 -139 -181 -150 -251 -207 -38 -30 -100 -82 -139 -115 -39 -33 -93 -78 -121 -100 -27 -22 -67 -55 -88 -75 -21 -19 -47 -39 -57 -45 -10 -5 -36 -26 -57 -45 -21 -19 -58 -51 -83 -70 -25 -19 -103 -84 -175 -143 -71 -60 -159 -132 -193 -160 -35 -29 -99 -81 -141 -117 -43 -36 -109 -90 -146 -120 -38 -30 -100 -82 -139 -115 -39 -34 -99 -83 -134 -110 -113 -89 -146 -116 -187 -153 -22 -20 -61 -52 -85 -71 -25 -19 -78 -64 -117 -99 l-73 -64 0 -2047 c0 -1873 1 -2050 16 -2096 60 -182 170 -293 354 -359 42 -15 197 -16 1675 -14 l1630 3 5 1570 5 1570 1055 0 1055 0 5 -1570 5 -1570 1630 -3 c1478 -2 1633 -1 1675 14 179 64 286 170 354 352 14 38 16 239 16 2096 l0 2054 -72 64 c-40 35 -93 80 -118 99 -24 19 -63 51 -85 71 -41 37 -74 64 -187 153 -35 27 -95 76 -134 110 -39 33 -101 85 -139 115 -37 30 -103 84 -146 120 -42 36 -106 88 -141 117 -34 28 -122 100 -193 160 -72 59 -150 124 -175 143 -25 19 -62 51 -83 70 -21 19 -47 40 -57 45 -10 6 -36 26 -57 45 -21 20 -60 53 -88 75 -27 22 -82 67 -121 100 -39 33 -101 85 -139 115 -71 57 -90 73 -251 207 -55 45 -160 132 -234 193 -74 61 -157 130 -185 154 -27 23 -72 59 -100 80 -27 21 -68 54 -90 75 -22 20 -60 52 -85 71 -25 19 -128 104 -230 188 -324 268 -358 296 -674 555 -22 18 -44 37 -50 42 -6 6 -33 28 -61 50 -27 21 -54 44 -60 50 -5 6 -30 26 -55 45 -25 19 -77 62 -116 95 -110 93 -160 134 -279 230 -60 49 -142 117 -181 150 -125 105 -138 115 -154 115 -9 0 -31 -12 -49 -27z'/%3e%3c/g%3e%3c/svg%3e");
}
.courses li.nav-courses:before {
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='900.000000pt' height='900.000000pt' viewBox='0 0 900.000000 900.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' x2='100%25' y1='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23EE091C'/%3E%3Cstop offset='100%25' stop-color='%23850B90'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)'%0Afill='%23fff' stroke='none'%3E%3Cpath d='M1665 8620 c-4 -6 -21 -10 -38 -10 -46 0 -106 -11 -113 -21 -3 -5%0A-14 -9 -25 -9 -57 0 -354 -123 -419 -174 -8 -6 -32 -20 -52 -30 -20 -10 -39%0A-25 -42 -32 -3 -8 -10 -14 -16 -14 -35 0 -253 -215 -355 -351 -41 -54 -75%0A-101 -75 -104 0 -3 -12 -24 -27 -48 -40 -62 -123 -230 -123 -247 0 -9 -4 -20%0A-9 -25 -13 -14 -51 -125 -51 -150 0 -11 -6 -32 -14 -46 -7 -14 -17 -56 -20%0A-93 -4 -36 -12 -68 -17 -71 -5 -4 -9 -69 -9 -145 l0 -140 508 -2 507 -3 3%0A-2824 c1 -1907 5 -2828 12 -2836 6 -7 10 -26 10 -41 -1 -58 41 -217 61 -230 5%0A-3 9 -13 9 -22 0 -45 127 -237 216 -327 58 -59 188 -153 274 -197 56 -30 169%0A-68 250 -86 68 -14 319 -16 2589 -19 1437 -2 2519 1 2525 6 6 5 32 12 59 15%0A26 4 59 14 75 22 15 7 36 14 47 14 12 0 25 4 30 9 6 5 28 14 50 21 49 15 194%0A86 216 106 8 8 19 14 23 14 5 0 25 14 46 30 21 17 41 30 45 30 10 0 87 62 114%0A93 14 15 30 27 35 27 14 0 96 82 96 95 0 6 12 22 28 35 43 39 212 271 212 293%0A0 3 13 25 28 49 16 24 35 59 42 78 16 43 47 115 66 153 8 16 14 35 14 44 0 8%0A6 29 14 46 19 45 43 134 51 187 3 25 10 54 15 65 11 24 32 181 34 250 l1 50%0A-2729 3 c-2009 1 -2732 -1 -2742 -9 -8 -6 -14 -20 -14 -30 0 -27 -39 -166 -61%0A-215 -10 -23 -21 -54 -25 -70 -6 -23 -48 -110 -153 -312 -8 -15 -64 -77 -125%0A-138 -110 -110 -157 -142 -256 -172 -42 -14 -111 -26 -124 -23 -5 1 -31 6 -58%0A11 -53 10 -114 48 -165 102 -32 34 -83 121 -83 143 0 7 -7 26 -15 41 -8 16%0A-15 52 -15 81 0 28 -5 55 -10 58 -7 4 -11 968 -11 2873 -1 1577 -4 2896 -6%0A2932 -3 36 -8 70 -13 75 -4 6 -11 33 -14 60 -4 28 -15 75 -26 105 -25 74 -96%0A212 -115 223 -8 4 -15 14 -15 20 0 16 -79 92 -104 101 -13 4 -16 10 -10 16 11%0A11 4554 9 4629 -2 143 -19 259 -72 344 -156 32 -32 61 -64 64 -72 4 -8 16 -30%0A28 -49 18 -30 31 -68 70 -201 10 -36 14 -498 18 -2370 l6 -2325 339 -3 c187%0A-1 343 1 348 6 8 8 9 4551 1 4702 -2 41 -8 84 -12 95 -5 11 -14 54 -19 95 -13%0A91 -29 156 -48 193 -8 16 -14 35 -14 43 0 8 -4 22 -9 32 -6 9 -22 44 -37 77%0A-44 98 -113 194 -213 298 -52 53 -98 97 -104 97 -5 0 -26 13 -46 28 -76 59%0A-312 162 -371 162 -10 0 -21 4 -24 9 -7 10 -67 21 -113 21 -17 0 -34 4 -38 10%0A-9 14 -4801 14 -4810 0z'/%3E%3Cpath d='M4380 7260 c-8 -5 -25 -10 -37 -10 -12 0 -70 -33 -130 -72 l-108 -73%0A-130 -3 c-134 -3 -167 -11 -228 -56 -33 -24 -51 -57 -82 -151 -34 -100 -52%0A-132 -93 -163 -20 -15 -41 -33 -45 -39 -4 -7 -12 -13 -18 -13 -24 0 -100 -69%0A-120 -108 -19 -38 -21 -55 -16 -125 3 -46 12 -95 21 -112 9 -16 16 -40 16 -52%0A0 -12 5 -25 10 -28 6 -3 10 -21 10 -40 0 -19 -4 -37 -10 -40 -5 -3 -10 -16%0A-10 -28 0 -12 -7 -35 -16 -52 -21 -39 -30 -171 -15 -216 13 -39 53 -87 97%0A-115 129 -82 147 -104 189 -230 56 -171 101 -204 277 -204 148 0 165 -6 331%0A-119 48 -33 148 -53 188 -38 51 19 96 43 138 75 89 67 114 75 261 81 128 6%0A138 8 183 36 34 21 53 43 68 75 11 25 25 53 30 62 5 10 9 25 9 35 0 9 14 45%0A31 79 25 52 40 69 87 100 188 123 218 198 152 384 -16 47 -30 99 -30 115 0 17%0A14 68 30 115 35 99 40 184 13 233 -21 38 -63 87 -75 87 -5 0 -40 24 -79 53%0A-56 42 -75 64 -99 113 -17 33 -30 70 -30 82 0 11 -4 23 -9 26 -5 3 -12 18 -16%0A33 -10 42 -61 99 -108 122 -36 18 -62 21 -159 21 -135 0 -150 5 -269 86 -48%0A33 -100 61 -124 65 -22 4 -47 10 -55 13 -8 3 -22 1 -30 -4z m530 -820 c0 -16%0A-612 -627 -632 -632 -9 -2 -89 69 -196 174 l-181 177 62 64 c34 36 69 67 77%0A69 9 3 52 -31 113 -88 69 -66 105 -94 122 -94 18 0 59 36 162 142 76 78 182%0A186 235 241 l98 99 70 -70 c38 -38 70 -75 70 -82z'/%3E%3Cpath d='M3029 4826 c-5 -6 -9 -82 -9 -171 0 -89 4 -165 9 -170 6 -6 522 -8%0A1383 -5 l1373 5 0 170 0 170 -1373 5 c-861 3 -1377 1 -1383 -4z'/%3E%3Cpath d='M4400 4140 l-1025 -5 0 -170 0 -170 1028 -5 c643 -3 1032 -1 1038 5%0A14 14 12 331 -3 341 -8 5 -461 7 -1038 4z'/%3E%3Cpath d='M3029 3446 c-5 -6 -9 -82 -9 -171 0 -89 4 -165 9 -170 6 -6 522 -8%0A1383 -5 l1373 5 0 170 0 170 -1373 5 c-861 3 -1377 1 -1383 -4z'/%3E%3C/g%3E%3C/svg%3E%0A"); 
}
nav:hover {
max-width: 200px;
transition: .2s all;
}

nav:hover .nav li {
max-width: 200px;
transition: .2s all;
}
.nav li:hover {
background-color: #410188;
}

.nav.orders li.nav-orders:hover {
background: linear-gradient(202deg,#ee091c,#900b6d);
}
.nav.payments li.nav-payments:hover {
background: linear-gradient(202deg,#ee091c,#900b6d);
}
.nav.profile li.nav-profile:hover {
background: linear-gradient(202deg,#ee091c,#900b6d);
}
.nav.courses li.nav-courses:hover {
background: linear-gradient(202deg,#ee091c,#900b6d);
}
.subscriptions li.nav-subscriptions {
background: linear-gradient(202deg, #ee091c,#900b6d);
font-weight: bold;
}
.home li.nav-home {
background: linear-gradient(202deg, #ee091c,#900b6d);
font-weight: bold;
}
.payments li.nav-payments {
background: linear-gradient(202deg, #ee091c,#900b6d);
font-weight: bold;
}
.courses li.nav-courses {
background: linear-gradient(202deg, #ee091c,#900b6d);
font-weight: bold;
}
.nav.subscriptions li.nav-subscriptions:hover {
background: linear-gradient(202deg,#ee091c,#900b6d);
}
.nav.home li.nav-home:hover {
background: linear-gradient(202deg,#ee091c,#900b6d);
}
.nav.profile li.nav-profile {
background: linear-gradient(202deg,#ee091c,#900b6d);
}
.error-message {
  color: var(--color-yellow-1);
}

fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

form label {
  display: none;
  font-size: 0.9rem;
}

form input,
form textarea {
  border: 2px solid var(--color-gray-9);
  padding: 0.5rem;
  border-radius: var(--border-radius);
  margin: 0.1rem 0 1rem;
  width: 100%;
}
.input-wrap > div > div > input.form-control.form-control {
  border: 3px solid #bd9bd4;
  border-radius: 0px;
  flex: none;
  height: 38px;
  padding: 0 10px;
  transition: all .2s .15s;
  width: 70%;
  background: linear-gradient(
302deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%);
  color: #f7f7f7;
  margin-bottom: 4px;
}
input.form-control.form-control::placeholder {
  color: #9e9e9e;
}
.input-wrap>div>div>input.form-control.form-control:focus {
  width: 100%;
  height: 42px;
  border: 3px solid #bd9bd4;
  background: linear-gradient( 
302deg, rgb(255 255 255 / 3%) 0%, rgba(255,255,255,0) 100%);
box-shadow: none;
margin-bottom: 0px;
}
text.keep-watching {
  text-shadow: 1px 1px 1px #664200;
}
.input-group > svg {
  opacity: 1;
  transition: opacity 0.4s ease;
  margin-right: -10px;
  margin-left: 10px;
  animation: floating 2s infinite ease-out;
  
}
div.stepper-horizontal {
  display: none;
}
.svg-img-item {
  width: 30%;
  background-image: url("https://portal.revrevdev.xyz/wp-content/uploads/continue.svg");
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 0.4s ease;
  opacity: 0.75;
  animation: floating 2s infinite ease-out;
  z-index: 20;
}

div.steptwo > form > div > div > .svg-img-item {
  display: none;
}

input:focus + .svg-img-item {
  opacity: 0;
}

.input-wrap.phone-wrap>div>div>input.form-control.form-control {
  width: 100%;
}
.powered-by-stripe {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/stripe-small-min.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 38px;
  width: 152px;
  display: none;
}
.powered-container {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}
@keyframes floating {
  0%, 100% {
    margin-left: 5px;
    margin-right: -10px;
  }
  50% {
    margin-left: -10px;
    margin-right: 5px;
  }
}

@keyframes newput {
  0% {
  opacity:0;
  }
  100% {
  opacity:1;
  }
}
@keyframes oldput {
  0% {
  opacity:1;
  z-index: 2;
  }
  99% {
    z-index: 2;
    opacity:0;
  }
  100% {
    z-index: 1;
  opacity:0;
  }
}
@keyframes relout-mobile {
  0% {
    position: absolute;
    margin-top: 119px;
  }
  99% {
    position: absolute;
    margin-top: 119px;
  }
  100% {
    position: relative;
    margin-top: 233px;
  }
}
@keyframes relout {
  0% {
  position: absolute;
  }
  99% {
    position: absolute;
    margin-top: 0px;
  }
  100% {
    position: relative;
    margin-top: -166px;
  }
}
@keyframes disout {
  0% {
    display:block;
  }
  99% {
    display:block;
  }
  100% {
    display:none;
  }
}
@keyframes oldput2 {
  0% {
  opacity:1;
  }

  100% {
  opacity:0;
  }
}

form input:focus {
  outline: none;
  border-color: var(--color-yellow-6);
}
.rev-player {
    padding-bottom: 30px;
    position: relative;
    z-index: 2;
    opacity:0;
}
main .main-vid-area{
 
  background-image: linear-gradient( 270deg, hsl(240deg 80% 40% / .7) 0%, hsl(275deg 100% 34% / .7) 31%, hsl(294deg 100% 31% / .7) 48%, hsl(310deg 100% 34% / .7) 60%, hsl(321deg 100% 38% / .7) 71%, hsl(330deg 100% 42% / .7) 80%, hsl(336deg 100% 44% / .7) 87%, hsl(342deg 100% 46% / .7) 93%, hsl(347deg 100% 47% / .7) 97%, hsl(358deg 88% 53% / .7) 100%), url(https://portal.revrevdev.xyz/wp-content/uploads/bg.jpg);
        background-position: 100% 0;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 100px;
        min-height: 1200px;
        background-attachment: fixed;
        -webkit-transform: none;
        padding-top: 1px;
}

div.input-group {
  flex-wrap: nowrap;
  flex-direction: row-reverse;
}
.form-text.text-danger {
  position: absolute;
  margin-top: -4px;
}
input.form-control.form-control {
  border: 3px solid #bd9bd4;
  border-radius: 0px;
  flex: none;
  height: 38px;
  padding: 0 10px;
  transition: all .2s .15s;
  width: 70%;
  background: linear-gradient(
302deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%);
  color: #f7f7f7;
}
.w-100.d-flex.justify-content-between {
  margin-top: 0;
  animation: newput .5s forwards;
  opacity: 0;
}
.btn {
  animation: newput .5s forwards;
  opacity: 0;
}
.result-message.hidden {
  display: none;
}
.register-form h4 {
  color: #e0e0e0;
  font-family: 'Josefin Sans';
  text-shadow: -1px -1px 1px #111, 2px 2px 1px #3c3c3c;
  font-weight: BOLD;
  font-size: 28px;
}
button {
  display: block;
  font-weight: 700;
  border: none;
  border-radius: var(--border-radius);
  padding: 14px 18px;
  background-color: var(--color-yellow-6);
  color: var(--color-yellow-3);
  cursor: pointer;
}

.previous-payment {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 3px;
  border: 2px solid #ff005e;
  padding: 4px;
  cursor: pointer;
  margin-left: 6px;
  margin-right: 6px;
  align-items: center;
}

.card-icon {
  width: 28px;
  pointer-events: none;
  height: 28px;
  margin-right: 4px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' viewBox='0 0 24 24'%3E%3Cpath d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'/%3E%3C/svg%3E");
}

.profile-update-confirmation {
  display: block;
  background: var(--color-gray-9);
  border-radius: var(--border-radius);
  padding: 1rem;
}
.prev-payment {
  animation: newput .5s forwards;
}
form#payment-form {
  animation: newput .5s forwards;
}
.forgot-password-link {
  display: block;
  font-size: 0.7rem;
  margin-bottom: 1rem;
}

.account-sign-up-message {
  margin-top: 2.5rem;
}
.success-false .result-message {
  display: none;
  opacity: 0;
}

/* spinner/processing state, errors */

.yes button.ml-auto.btn.btn-success {
  color: #fff0;
  background-repeat: no-repeat;
  background-position: center;
  background-image:  url("data:image/svg+xml, %3Csvg version='1.1' id='loader-1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'%3E%3Cpath fill='%23fff' d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z'%3E%3CanimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E"), linear-gradient(90deg,#f23,#ff2278);
  opacity: 0.7 !important;
  cursor: default;
}
.spinner {
  color: #fff0;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml, %3Csvg version='1.1' id='loader-1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'%3E%3Cpath fill='%23fff' d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z'%3E%3CanimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E");
}


@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


/*
navbar start
*/
navbar > div {
  transform: none;
}

.cart-btn-container.cart-true {
  align-items: flex-start;
  backdrop-filter: blur(3px) brightness(.5) contrast(110%);
  display: flex;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}

.cart-outer-cont {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 10% auto 0;
  max-width: 600px;
  width: 80%;
}

.cart-bar-title {
  background: linear-gradient(183deg,#ff1d2d,#c41a72);

}

.cart-bar-text {
  color: #fff;
  font-family: Nunito Bold;
  font-size: 24px;
  margin-bottom: 6px;
  margin-left: 20px;
  margin-top: 6px;
  text-align: center;
}
.cart-cont {
display: flex;
flex-direction: row;
flex-wrap: nowrap;
padding: 1em;

width: 100%;
max-width: 600px;
background: #f6f4fa;
padding-bottom: 3em;
padding-top: 3em;
}
.cart-img {
align-self: center;
}
.name-total-cart-cont {
line-height: 24px;
align-self: center;
margin-right:2em;
margin-left: 1em;
}
.cart-name {
font-size: 20px;
color: #606060;
font-family: "Josefin Sans";
}
.cart-item-total {
font-size: 16px;
margin-left: 2px;
}
.remove-cart-item {
align-self: center;
margin-left: auto;

cursor: pointer;
}
html.scroll {
overflow-y: overlay;
}
.heroproduct-img-cont {
  padding-bottom: 100%;
  width: calc(100% - 2px);
  margin-left: 1px;
  pointer-events: none;
}
.heroproduct-price {
  font-family: Nunito Regular;
  font-size: 18px;
  text-align: center;
}
.breadcrumbs-cont {
  margin-top: 6.5em;
  display: flex;
  opacity: .75;
}
navbar > div:first-of-type {
  display: none;
}
h4.all-subheader {
  font-size: 1.4em;
  font-family: 'Nunito Bold';
  margin-bottom: 1.4em;
  color: #512e8a;
}
.bread-item.bread-active {
  cursor: initial;
}

.bread-item.bread-home:before {
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='495.398px' height='495.398px' viewBox='0 0 495.398 495.398' style='enable-background:new 0 0 495.398 495.398;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z'/%3E%3Cpath d='M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  width: 14px;
  height: 14px;
  left: -14px;
}


.bread-item {
  text-transform: uppercase;
  font-family: 'Nunito Bold';
  font-size: .8em;
  padding-left: 1.5em;
  cursor: pointer;
  padding-bottom: 1em;
}
.bread-item:before {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg id='Capa_1' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 39.02 67.55'%3E%3Cpath d='M9.11,70.14a5.25,5.25,0,0,1-3.71-9L30.21,36.36,5.4,11.55a5.25,5.25,0,0,1,7.42-7.42L41.35,32.65a5.26,5.26,0,0,1,0,7.42L12.82,68.6A5.25,5.25,0,0,1,9.11,70.14Z' transform='translate(-3.86 -2.59)'/%3E%3C/svg%3E"); 
  width: 10px;
  height: 10px;
  margin-left: -1em;
  margin-top: 0.25em;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
h2.featured-header {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  text-align: center;
  font-size: 2.6em;
  margin-top: 3em;

}
.heroproduct-cont {
  display: flex;
    flex-direction: row;
    margin-left: -70px;
    margin-right: -70px;
}
.heroproduct-render {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  cursor: pointer;
}
.heroproduct-title {
  font-family: 'Josefin Sans';
  font-size: 1.6em;
  text-align: center;
  padding: 6px;
  color: #512e8a;
}
.mini-product-cont .rating-cont {
  padding-bottom: 0.2em;
}

navbar {
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
height: 64px;
width: 100%;
z-index: 99;
background: linear-gradient(183deg,#ff1d2d,#c41a72);
box-sizing: border-box;
color: white;
opacity: 0;
transform: translatey(-100px);
transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .15s linear .285s;
}
navbar > navmain {
box-shadow: 0 0 8px 4px rgb(0 0 0 / 20%);
background: linear-gradient(310deg, rgba(56,3,105,1) 0%, rgba(94,3,105,1) 100%);
transform: translatex(-300px) translatey(100px);
opacity: 0;
transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .15s linear .285s;
}
navbar.active>navmain {
  transform: translatex(0px) translatey(0px);
  opacity: 1;
  transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .05s linear;
}
.navbar-title > ul {
list-style-type: none;
margin: 0;
padding: 0;
font-family: "Josefin Sans";
font-size: 24px;
}
.navbar-holder {
position: absolute;
width: 100%;
max-width: 1450px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
justify-content: flex-end;
}

.navbar-title {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}

a.dropdown {
  font-family: 'Nunito Bold';
position: relative;
display:block;
line-height: 64px;
cursor: pointer;
padding-left: 0.4em;
    padding-right: 0.4em;
}
a.dropdown:hover {
  color: unset;
  text-decoration: none;
  background: linear-gradient(173deg, rgb(233 18 36) 0%, rgb(193 12 82) 100%);
}
a.dropdown:hover .active2 {
display: block;
animation: newput .2s forwards;
}

.active2 { display: none;
  opacity: 0; }
.navitemind:hover>img {
  transform: scale(1.1);
}
.navbar-title em {font-style: normal;display: table;line-height: 1em;font-size: .5em;margin-left: auto;margin-right: auto;}

.navbar-title li {text-align: center;font-size: .8em;line-height: 1.2em;margin-left: 46px;}

.navbar-title > ul > li > em:last-child {font-size: .9em;line-height: 1.4em;}

.navbar-title>ul:before {content: '';width: 32px;left: 10px;height: 58px;background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 404.8 733.2'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='509.6' y1='40.74' x2='495.81' y2='773' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.11' stop-color='%231614ff'/%3E%3Cstop offset='0.74' stop-color='%23c52127'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='305.24' y1='36.9' x2='291.45' y2='769.15' xlink:href='%23a'/%3E%3ClinearGradient id='c' x1='412.53' y1='38.92' x2='398.74' y2='771.17' xlink:href='%23a'/%3E%3ClinearGradient id='d' x1='310.21' y1='-5.22' x2='296.42' y2='727.03' xlink:href='%23a'/%3E%3ClinearGradient id='e' x1='108.21' y1='-9.03' x2='94.43' y2='723.23' xlink:href='%23a'/%3E%3C/defs%3E%3Cpath d='M546.2,213.6a75.1,75.1,0,0,0,30.6-33.3,106.5,106.5,0,0,0,10-45.5q0-41-26.4-64.6T486,46.5H408V308.7h39.4l11.4-83.2v-.2h33.9l54.2,83.4H606Zm-21.3-50.4c-6.3,8.1-16.4,12.2-30.1,12.2h-36v-79h36.3c15.4,0,25.8,4.3,31.2,13a51.2,51.2,0,0,1,8,27.2C534.3,146.1,531.2,155,524.9,163.2Z' transform='translate(-201.2 -46)' style='fill:url(%23a)'/%3E%3Cpath d='M321.1,46q-47.9,0-74.3,23.7t-26.4,64.6a105,105,0,0,0,10,45.5A74.6,74.6,0,0,0,261,213.1l-59.8,95.1h59.1l54.2-83.4h33.8v0h.1v.6l11.7,82.8h39V46Zm27.3,129h-36c-13.8,0-23.8-4.1-30.1-12.3s-9.4-17.1-9.4-26.6a50.3,50.3,0,0,1,8-27.2c5.4-8.7,15.7-13,31.1-13h36.4Z' transform='translate(-201.2 -46)' style='fill:url(%23b)'/%3E%3Cpath d='M510.1,529.9,403.3,779.2,296.5,529.9h55.3l53.4,134.4,50.2-134.4Z' transform='translate(-201.2 -46)' style='fill:url(%23c)'/%3E%3Cpolygon points='317.2 308.4 317.2 308.4 247.1 308.4 247.1 352.5 334.4 352.5 334.4 352.6 366.4 352.6 349.8 391.9 308.4 391.9 308.4 391.9 247.1 391.9 247.1 436.6 329.9 436.6 313.1 476 207.1 476 207.1 269 345.7 269 345.7 269.1 403 269.1 385.8 308.4 317.2 308.4' style='fill:url(%23d)'/%3E%3Cpolygon points='199.2 268.9 199.2 475.9 92.1 475.9 74.9 436.6 159.2 436.6 159.2 391.9 74.7 391.9 74.7 391.9 55.6 391.9 38.2 352.5 71.9 352.5 71.9 352.5 159.2 352.5 159.2 308.3 60.6 308.3 60.6 308.3 19.6 308.3 2.8 268.9 72.2 268.9 72.2 268.9 199.2 268.9' style='fill:url(%23e)'/%3E%3C/svg%3E");position: absolute;background-size: cover;}
.link-dropdown {
  cursor: default;
position: absolute;
color: #bbbbbb;
top: 64px;
right: 0;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 5495 4172'%3E%3Cdefs%3E%3CradialGradient id='a' cx='561.4' cy='-909.92' r='2496.57' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.12' stop-color='%23c8001d'/%3E%3Cstop offset='0.17' stop-color='%23c8001d'/%3E%3Cstop offset='0.34' stop-color='%23c8001d'/%3E%3Cstop offset='0.35' stop-color='%23c5001d'/%3E%3Cstop offset='0.55' stop-color='%239d0017'/%3E%3Cstop offset='0.73' stop-color='%23810012'/%3E%3Cstop offset='0.89' stop-color='%236f0010'/%3E%3Cstop offset='1' stop-color='%2369000f'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='3466.56' cy='-777.87' r='3850.72' xlink:href='%23a'/%3E%3CradialGradient id='c' cx='2706.7' cy='3867.99' r='6991.7' xlink:href='%23a'/%3E%3CradialGradient id='d' cx='705.46' cy='1022.85' r='1963.88' xlink:href='%23a'/%3E%3CradialGradient id='e' cx='437.8' cy='-669.83' r='2742.91' xlink:href='%23a'/%3E%3CradialGradient id='f' cx='2842.32' cy='926.81' r='3845.43' xlink:href='%23a'/%3E%3CradialGradient id='g' cx='4735.52' cy='2151.31' r='4271.15' xlink:href='%23a'/%3E%3CradialGradient id='h' cx='5047.64' cy='3159.71' r='1990.95' xlink:href='%23a'/%3E%3CradialGradient id='i' cx='2706.7' cy='3867.99' r='6991.71' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.12' stop-color='%23c8001d'/%3E%3Cstop offset='0.17' stop-color='%23c8001d'/%3E%3Cstop offset='0.34' stop-color='%23c8001d'/%3E%3Cstop offset='1' stop-color='%2369000f'/%3E%3C/radialGradient%3E%3CradialGradient id='j' cx='4975.61' cy='3495.84' r='2564.11' xlink:href='%23a'/%3E%3CradialGradient id='k' cx='5335.75' cy='182.51' r='4444.95' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.12' stop-color='%23c8001d'/%3E%3Cstop offset='0.17' stop-color='%23c8001d'/%3E%3Cstop offset='0.48' stop-color='%23c8001d'/%3E%3Cstop offset='0.49' stop-color='%23c5001d'/%3E%3Cstop offset='0.64' stop-color='%239d0017'/%3E%3Cstop offset='0.79' stop-color='%23810012'/%3E%3Cstop offset='0.91' stop-color='%236f0010'/%3E%3Cstop offset='1' stop-color='%2369000f'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg style='isolation:isolate'%3E%3Cg style='opacity:0.06'%3E%3Crect width='5495' height='4171.39' style='fill:%23bf0000'/%3E%3Cpolygon points='0 1 0 558 558 1 0 1' style='fill:url(%23a)'/%3E%3Cpolygon points='3502 1 0 3502 0 4172 312 4172 4483 1 3502 1' style='mix-blend-mode:soft-light;fill:url(%23b)'/%3E%3Cpolygon points='4483 1 312 4172 1293 4172 5464 1 4483 1' style='mix-blend-mode:darken;fill:url(%23c)'/%3E%3Cpolygon points='558 1 0 558 0 1540 1539 1 558 1' style='fill:url(%23d)'/%3E%3Cpolygon points='1539 1 0 1540 0 2521 2520 1 1539 1' style='mix-blend-mode:hard-light;fill:url(%23e)'/%3E%3Cpolygon points='2520 1 0 2521 0 3502 3502 1 2520 1' style='mix-blend-mode:hard-light;fill:url(%23f)'/%3E%3Cpolygon points='5495 2914 4237 4172 5218 4172 5495 3895 5495 2914' style='fill:url(%23g)'/%3E%3Cpolygon points='5495 3895 5218 4172 5495 4172 5495 3895' style='fill:url(%23h)'/%3E%3Cpolygon points='5495 1 5464 1 1293 4172 2274 4172 5495 951 5495 1' style='mix-blend-mode:darken;fill:url(%23i)'/%3E%3Cpolygon points='5495 1932 3256 4172 4237 4172 5495 2914 5495 1932' style='fill:url(%23j)'/%3E%3Cpolygon points='5495 951 2274 4172 3256 4172 5495 1932 5495 951' style='mix-blend-mode:hard-light;fill:url(%23k)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), linear-gradient(hsl(355deg 63% 48%),hsl(336deg 80% 45%));
background-size: cover;
box-shadow: inset -12px -12px 30px 5px rgb(201 7 81), inset 12px 12px 30px 5px rgb(201 7 81), 0 10px 15px 0 rgb(0 0 0 / 24%);

}

.navitemind:hover .navitem-text span {
  background-image: linear-gradient(#fff,#afafaf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navitemind:hover .navitem-text {
  transform: translate(-50%,-50%) scale(1.05);
}
.navitem-text span {
  margin-right: 0.25em;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(#ee091c,#850b90);
  -webkit-background-clip: text;
  background: unset;
  border-radius: unset;
  height: unset;
  position: unset;
  transform-origin: unset;
  transition: unset;
  width: unset;
  margin-bottom: unset;
  z-index: unset;
  font-family: 'Josefin Sans';
  font-size: 1.3em;
  display: inline-block;
  margin-left: unset;
}

.navitemind:hover .navitem-text span {
  background-image: linear-gradient(#fff,#afafaf);
} 
.navitemind:after {content: '';width: 100%;height: 100%;position: absolute;left: 0;top: 0;    background-image: linear-gradient(181deg,rgb(249 249 249 / 54%),rgb(255 255 255 / 70%));}
.navitem-text span {-webkit-text-fill-color: transparent;
  background-image: linear-gradient(#ee091c,#850b90);
  -webkit-background-clip: text;}

.navitemind:hover::after {background-image: linear-gradient(#ee0947c2,#510b90bd);}

.navitemind {
  overflow: hidden;
  cursor: pointer;
}
.navcont-50 {width: 50%;display: flex;flex-wrap: wrap;margin-top: 1.5em;}

.navcont-cont {display: flex;}

.navitem-50 {width: 50%;padding-left: 1em;padding-right: .5em;}

.navitemind > img {background-size: cover;max-width: 100%;transition: .2s all; filter: grayscale(0.7);}

.navitem-100 {width: 100%;padding-bottom: 2.8em;padding-right: 1.5em;}

.navitem-100 > img {max-width: 100%;}

.navitem-text {position: absolute;z-index: 2;top: 50%;
  left: 50%;padding: 0.5em;
  transform: translate(-50%, -50%);text-align: center;    transition: .2s all;    line-height: 1.55em;}

.navcont-50 > .navitem-50:nth-of-type(2n) {padding-right: 1em;padding-left: .5em;}

.navcont-50 > .navitem-50:nth-of-type(1n+3) {margin-top: -1.3em;}


.link-dropdown label {
cursor: pointer;
padding: 1em 2em;
white-space: nowrap;
display: block;
}

.link-dropdown label:hover {
color: #1c2541;
}

.active { 
transform: translatey(0);
opacity: 1;
transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .05s linear;
}


navbar > ul {
list-style-type: none;
padding: 0;
font-size: 1.2rem;
margin:0;
display: flex;
  align-items: center;
}
navbar > ul > li {
display: inline-block;
padding: 0 0.5rem;
cursor: pointer;
}

/*
navbar end
*/

vm-player {
  /*******************************
  * Colors
  *******************************/

  --vm-color-dark: #313131;

  --vm-color-gray-100: rgba(0, 0, 0, 0.1);
  --vm-color-gray-200: rgba(0, 0, 0, 0.27);
  --vm-color-gray-300: rgba(0, 0, 0, 0.38);
  /* --vm-color-gray-400: rgba(0, 0, 0, 0.54); */
  --vm-color-gray-500: rgba(0, 0, 0, 0.64);
  --vm-color-gray-600: rgba(0, 0, 0, 0.7);
  /* --vm-color-gray-700: rgba(0, 0, 0, 0.87); */

  --vm-color-white-100: rgba(255, 255, 255, 0.1);
  --vm-color-white-200: rgba(255, 255, 255, 0.27);
  /* --vm-color-white-300: rgba(255, 255, 255, 0.38); */
  /* --vm-color-white-400: rgba(255, 255, 255, 0.54); */
  /* --vm-color-white-500: rgba(255, 255, 255, 0.64); */
  /* --vm-color-white-600: rgba(255, 255, 255, 0.7); */
  --vm-color-white-700: rgba(255, 255, 255, 0.87);

  /*******************************
  * Transitions
  *******************************/

  --vm-fade-transition: opacity 0.3s ease-in-out;

  /*******************************
  * Z-Index
  *******************************/

  /* Root stack. */
  --vm-media-z-index: 0;
  --vm-blocker-z-index: 1;
  --vm-ui-z-index: 2;

  /* UI stack. */
  --vm-loading-screen-z-index: 1;
  --vm-poster-z-index: 5;
  --vm-scrim-z-index: 10;
  --vm-click-to-play-z-index: 20;
  --vm-dbl-click-fullscreen-z-index: 20;
  --vm-captions-z-index: 30;
  --vm-spinner-z-index: 40;
  --vm-controls-z-index: 50;
  --vm-tooltip-z-index: 60;
  --vm-menu-z-index: 70;
  --vm-skeleton-z-index: 100;

  /*******************************
  * Player
  *******************************/

  --vm-player-bg: #000;
  /* --vm-player-theme: #eb7290; */
  --vm-player-border-radius: 4px;
  --vm-player-font-family: 'Helvetica Neue', 'Segoe UI', Helvetica, Arial,
    sans-serif;

  /*******************************
  * Loading Screen
  *******************************/

  --vm-loading-screen-dot-size: 12px;
  --vm-loading-screen-pulse-duration: 1.5s;
  --vm-loading-screen-dot-color: var(
    --vm-player-theme,
    var(--vm-color-white-700)
  );

  /*******************************
  * Skeleton
  *******************************/

  --vm-skeleton-color: hsl(0, 10%, 90%);
  --vm-skeleton-sheen-color: hsl(0, 10%, 97%);

  /*******************************
  * Slider
  *******************************/

  --vm-slider-thumb-width: 13px;
  --vm-slider-thumb-height: 13px;
  --vm-slider-thumb-bg: #fff;
  --vm-slider-thumb-border: 2px solid transparent;

  --vm-slider-track-height: 3px;
  --vm-slider-track-focused-height: 5px;
  --vm-slider-track-color: var(--vm-color-white-200);
  --vm-slider-value-color: var(--vm-player-theme, #fff);

  /*******************************
  * Tooltip
  *******************************/

  --vm-tooltip-border-radius: 3px;
  --vm-tooltip-font-size: 14px;
  --vm-tooltip-padding: calc(var(--vm-control-spacing) / 1.5);
  --vm-tooltip-fade-duration: 0.2s;
  --vm-tooltip-fade-timing-func: ease;
  --vm-tooltip-spacing: 14px;
  --vm-tooltip-box-shadow: 0 0 2px var(--vm-color-gray-500);
  --vm-tooltip-bg: var(--vm-color-dark);
  --vm-tooltip-color: var(--vm-color-white-700);

  /*******************************
  * Spinner
  *******************************/

  --vm-spinner-width: 80px;
  --vm-spinner-height: 80px;
  --vm-spinner-thickness: 3px;
  --vm-spinner-fill-color: #fff;
  --vm-spinner-track-color: var(--vm-color-white-200);
  --vm-spinner-spin-duration: 1.1s;
  --vm-spinner-spin-timing-func: linear;

  /*******************************
  * Scrim
  *******************************/

  --vm-scrim-bg: var(--vm-color-gray-300);

  /*******************************
  * Captions
  *******************************/

  --vm-captions-text-color: #fff;
  --vm-captions-font-size: 18px;
  --vm-captions-font-size-medium: 22px;
  --vm-captions-font-size-large: 24px;
  --vm-captions-font-size-xlarge: 28px;
  --vm-captions-cue-bg-color: var(--vm-color-gray-600);
  --vm-captions-cue-border-radius: 2px;
  --vm-captions-cue-padding: 0.2em 0.5em;
  --vm-captions-z-index: 20;

  /*******************************
  * Controls
  *******************************/

  --vm-controls-bg: transparent;
  --vm-controls-border-radius: 4px;
  --vm-controls-padding: var(--vm-control-spacing);
  --vm-controls-spacing: var(--vm-control-spacing);

  /*******************************
  * Control Group
  *******************************/

  --vm-control-group-spacing: var(--vm-control-spacing);

  /*******************************
  * Control
  *******************************/

  --vm-control-border: 0;
  --vm-control-scale: 1;
  --vm-control-border-radius: 3px;
  --vm-control-spacing: 8px;
  --vm-control-padding: 4px;
  --vm-control-icon-size: 28px;
  --vm-control-color: #fff;
  --vm-control-tap-highlight: var(--vm-color-white-200);
  --vm-control-focus-color: #fff;
  --vm-control-focus-bg: var(--vm-player-theme, var(--vm-color-white-200));

  /*******************************
  * Scrubber Control
  *******************************/

  --vm-scrubber-loading-stripe-size: 25px;
  --vm-scrubber-buffered-bg: var(--vm-color-white-200);
  --vm-scrubber-loading-stripe-color: var(--vm-color-white-200);
  --vm-scrubber-tooltip-spacing: 10px;

  /*******************************
  * Time
  *******************************/

  --vm-time-font-size: 14px;
  --vm-time-font-weight: 400;
  --vm-time-color: var(--vm-color-white-700);

  /*******************************
  * Menu
  *******************************/

  --vm-menu-color: var(--vm-color-white-700);
  --vm-menu-bg: var(--vm-color-dark);
  --vm-menu-font-size: 14px;
  --vm-menu-font-weight: 400;
  --vm-menu-transition: transform 0.25s ease-out;

  /*******************************
  * Menu Item
  *******************************/

  --vm-menu-item-padding: 8px;
  --vm-menu-item-focus-color: var(--vm-menu-color);
  --vm-menu-item-focus-bg: var(--vm-color-white-100);
  --vm-menu-item-tap-highlight: var(--vm-color-white-100);

  --vm-menu-item-hint-color: var(--vm-menu-color);
  --vm-menu-item-hint-font-size: 13px;
  --vm-menu-item-hint-opacity: 0.54;

  --vm-menu-item-badge-color: var(--vm-menu-color);
  --vm-menu-item-badge-bg: transparent;
  --vm-menu-item-badge-font-size: 10px;

  --vm-menu-item-arrow-color: var(--vm-menu-color);

  --vm-menu-item-check-icon-size: 16px;

  --vm-menu-item-divider-color: var(--vm-color-white-100);

  /*******************************
  * Settings
  *******************************/

  --vm-settings-width: 275px;
  --vm-settings-padding: 8px;
  --vm-settings-max-height: 75%;
  --vm-settings-border-radius: 2px;
  --vm-settings-shadow: 0 0 8px 2px var(--vm-color-gray-100);

  --vm-settings-scroll-width: 10px;
  --vm-settings-scroll-thumb-color: var(--vm-color-white-200);
  --vm-settings-scroll-track-color: var(--vm-menu-bg);

  --vm-settings-transition: transform 0.2s cubic-bezier(0, 0, 0.4, 1) 0.16s,
    opacity 0.2s cubic-bezier(0, 0, 0.4, 1) 0.16s;
}
::cue {
  opacity: 0;
}
vm-player[video] {
  --vm-tooltip-spacing: 18px;
}

vm-player[mobile],
vm-player[touch] {
  --vm-control-border-radius: 50%;
}

vm-player[mobile] {
  --vm-settings-width: 100%;
  --vm-menu-control-padding: 12px calc(var(--vm-control-padding) * 2);
}

vm-player[audio] {
  --vm-controls-bg: var(--vm-color-dark);
  --vm-settings-max-height: 200px;
  --vm-tooltip-spacing: 10px;
}
.payment-infos {
  margin-bottom: -4px;
}
.status-1 .payment-infos {
  display: none;
}
.status-0 .new-card-form {
display: none;
}
.brand-last4 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.selection-section.true {
  display: none;
}
.tap-to-unmute {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  z-index: 21;
  top: 0;
    left: 0;
    
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity:1;
  
}

.step-1 .shipping-form-data {
  display: none;
}

.step-2 .payment-infos {
  display: none;
}

.step-2 .selection-section {
  display: none;
}

.step-2 .firststep-btn {
  display: none;
}



.firststep-btn {
  width: fit-content;
  padding: 6px 32px;
}

.firststep-btn:after {
  content: '';
  border: solid currentColor;
  border-width: 0 .2em .2em 0;
  display:      inline-block;
  padding:      .20em;
  transform: rotate(-45deg);
  margin-left: 5px;
}


.revealer-el .rev-loadin {
  animation: disout .5s forwards step-end;
}
.revealer-el .rev-player {
  opacity: 1;
}
.inner-loadin {
  padding-bottom: 56.25%;
      background: #09051b;
      background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/starline.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 18%;
  }
  .rev-loadin {
}
  .rev-player-cont {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3;
  }
  .revealer-el .rev-player-cont {

}

.tap-to-unmute-svg {
  background-repeat: no-repeat;
  background-size: contain;
  height: 26%;
  opacity: 1;
  width: 15%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150px' height='100px' viewBox='0 0 16 16' class='bi bi-volume-mute' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04L4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0z'/%3E%3Cpath fill-rule='evenodd' d='M9.146 5.646a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0z'/%3E%3C/svg%3E");
}

.tap-to-unmute-text {
  color: #fff;
  text-transform: uppercase;
  padding: 2px 8px;
  background: #000;
  opacity:1;
  border-radius: 5px;
  font-size: 20px;
}
.prev-brand {
pointer-events: none;
}
.tap-to-unmute.rev-mute {
  display: none;
}
.prev-brand.visa {
  height: 16px;
  width: 50px;
  background-image: url('data:image/png;base64,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');
}

.prev-brand.mastercard {
  width: 40px;
  height: 25px;
  background-image: url('data:image/png;base64,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');
}

.prev-brand.amex,
.prev-brand.american-express {
  width: 50px;
  height: 14px;
  background-image: url('data:image/png;base64,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');
}
.prev-last4 {
  margin-left: 4px;
  pointer-events: none;
}


.prev-brand.diners,
.prev-brand.diners-club {
  width: 30px;
  height: 24px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAED2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkFDMEM4Rjk2NTQzRDExRTQ5MzZBQzlERDRCNDEwQzZDPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkFDMEM4RjkzNTQzRDExRTQ5MzZBQzlERDRCNDEwQzZDPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkFDMEM4Rjk0NTQzRDExRTQ5MzZBQzlERDRCNDEwQzZDPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9t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');
}

.prev-brand.discover {
  width: 50px;
  height: 14px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAOCAYAAABth09nAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAA/tJREFUSA19ll2IVVUUx73jmEYgiUpYiIREkFqQD0FhKiVIoPaSRaEPQlATZmk9JERBQVCSldjHk9iDqE8KQaTQB0lFoljDSGKiFI3VWJZZfo6n32+fta5nrrcW/O/6r8+999n77HNbVVWNHnVZqlardSlNYj1yffAWVFt9qSNPX/axxzB2kehhfERdjNs5njmO4RyyBlok52W80pNziLmVpPaPA8fgnT4btyWL0bmAdixJt1inr9FnRP/s8X+aWuda6lqQmZHsUxxklX9qR8J0Ob7vwzcDPQHsx/cPOb3oixG7A309OIjvELEetDt5Nb5ZwAV/h++kdXB7/Yp9HBvlVKqx+G4Bx4H8WnAejAH6zoCJwB05Rc0faOd6lT8X7BByHv0OuCYSDsA/D64/ZQgyO/yz4P0ZCH1fxJZiH2nEfoGvjNg+eH9wF+ZcHo/ce9EfBE+1FvJkGL+jz4G3wFTQZ7GyHcwFG4CyOxoPwHeB2TqRl8EU8CKYDCaCU+Bv8DBwUW+AuWAeSHFnRMqDkAfCmONYCvZBcDS4D/EwuAvcDyaBV4GyGDxXWFU9gx6fC3m+dKqbZcIcEvaAj4Bc2ZB5Mdibtbu6vemP2LcRO4POhZwN3zH0DeA02B75Tlh5KuxD8E/lKdivm9CwNd8ttgx5pRG8sXZVK9Efg6+Mod8Pv5NaD3zR9oIjEdf2XJtrD3dJGa5V+zd35mY87YnB346MSdHj67B/Cv0Q2uOlrAFbCquqheaXsylpyLjgvkiuvuTwYi2ncD32KuBTGwJeDNcBxdxyXaPz+tTfFHOEN42Lfg88Td8X0EvBVsY5gVYcdxC8BBxjL/AiUNbVatQ88j+jvieP1toIaG8CimfyC2DiOOCNVATuEfHlfxYod2ZMjT0aeMaVbkfLm8rbz1z7p9ytT8ExAD6srfoXeyOwtg8oSyK31wLlS+CknLjSFwlH4Z8Aj5LX7QrgApRHI+fn2iz1C+Bu+T1gfvi7qcfqqZUJPxIJe9IXfV2It9Nq8Bq4DawD7qjz3iZHbi11kH5wGHgWXciiEqiTd2BvAtPBNyBlM8Tvgw2nAS+EFHdrfsSWwX/IANpFPxExvyvWjwe/gXx46d+Jz8vgBFBWBdyRMWACGAQ77dOCWNj5VyE/Zp55eX70bsI+i/0j2kk0P4hTcHlcjhF397JHfhDtNUDsL7S10FY+3am4hrB9CMWP9lvm3IaB79Q5YA/frdMkeWn4oXTMk+Cy2ARccQHgK08pMyOvvNjGtDPW1Pi79ept5v8Xb/bpxqkr42fMiafDR1GeUAZzEP3BSy62T6ktzRjOK3YXX44x4s9mNqDeB2WsPT6+rGmnBSGt/mObOdr/Ap6tK4eqKaaFAAAAAElFTkSuQmCC');
}

.prev-brand.jcb {
  width: 30px;
  height: 15px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAPCAYAAADzun+cAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACsklEQVQ4EX2U32uOYRjH32c2zIjyKyc7IDkRZw4cMEcjxIHSyoH4C6yNNJRJOZKWAyeEQqI4wQnlhE0phCHmR1NsI43ttdnm8fk8nktPWu+3Prvu676v57qv+3rve0kJpWk6FbMdVkICRemfS5LkiZPEbsSsgRpdUNpauEbc7WwiTVdjjXW+GDcd/4GJauAiVJJFGXusUhBrh/O4XYzHKsReryZwEzTBOFiZJ9ROgLIbgyRZgm11Ao1AsTPGzoAfxBl/CMxdzi3mX07jhl00YSjaZ1LHod8M6qEKxsB2TSbjFsG8fNFNJlPixkXFiT8y2Q1usAqmwC9QFvQUXoNdshhPth5cc3PVBf2gH9/OZtwIVX4UctP46AqXxIDN8BZMGK0/ztoK/Gb4Brb9IbyHOIixu4nbgu2BpXAH3+LaoM5AN1QmHwVPJ8obadstyPFnOADqLDSA2vHXlC5j4zDT8rlZ2DqYmftztG7sZbCtc2EhqPjIFsVls5gvVP2TC7SA8WJQFhWbZRP88TBx+nuM++A+qPkw4QdWdBc2wDN4BadBNcAy8ELZjeVsupbN/e3a4SvYbn/zIbC4uCfOq21wEHaC6oDUqgzYD1beAgOO2WAfdi/Es/F3U+dZO4J9B0fBFr6EPWCn3NgDbSXuObYTXsAbfA/n3fjuP4UWCA0z6IVyTOS2Ebvuvzld361vfEgHNUM9hO/cCBg3rpPrQvwOFJG10ncXby+eitVLyHm7IHFhohu2OjrEMHtudiE64Z3xTlWb0NYox7bbxCYqJvA2x+YRrzUuYFj6AM6bJxTrzsW3PSazAuVz0rcLVi76Z7hMj7BxOuNiPaw5bsFVKHatmMtYT/4YOlzoBRMPQpyKYVb1TewJHfQJboD/MIqyM51wigK9lGXGl6AWPG3IjbvhpK/iD/ZAl+AbzJMOAAAAAElFTkSuQmCC');
}

.prev-brand.unionpay {
  width: 50px;
  height: 30px;
  background-image: url('data:image/png;base64,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');
}

.seam-paper-render {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/cutout.jpg);
  padding-top: 25.6%;
  margin-top: 20px;
  background-size: contain;
}
.book-render.rdmr {
 margin: 0 auto;
}
.hero-render-title {
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  text-align: center;
  font-size: 2em;
  filter: drop-shadow(0 0 40px #000);
  animation: neon1 1.5s ease-in-out infinite alternate;
  color: #fff;
  margin-bottom: 5em;
  transform: translate(50%,-50%);
  position: absolute;
  right: 50%;
  top: 23%;
  width: 100%;
  padding: 0.4em;
}
.hero-render-content .y-preorderbtn {
  filter: drop-shadow(0 0 40px #000) saturate(1);
  transform: translate(50%,-50%);
    position: absolute;
    right: 50%;
    top: 73%;
}
.search-item-cont {
  display: flex;
  margin-top: 8px;
  background: #ffffffb5;
}

img.search-item-img {
  padding: 8px;
}

.search-item-name {
  font-family: 'Nunito Bold';
  font-size: 20px;
  padding-right: 8px;
}

.search-item-content-cont {
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-btn-container.cart-true {
  align-items: flex-start;
  backdrop-filter: blur(3px) brightness(.5) contrast(110%);
  display: flex;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}
.search-item-price {
  font-family: 'Nunito Bold';
}

.search-section-results {height: 400px;overflow: overlay;}
.matrix-cont {
  max-width: 1150px;
  margin:0 auto;
  padding:1em;
}

.matrix-item {
  background-image: url('https://portal.revrevdev.xyz/wp-content/uploads/matrix.png');
  padding-bottom: 56.25%;
  background-size: contain;
}
.hero-render-content {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  max-height: 441px;
    transform: translate(0,-50%);
    top: 50%;
}
ul.show-lister {
  columns: 2;
  list-style-type: auto;
  width: 70%;
  margin: 0 auto;
  color: #512e8a;
}

.show-lister li {
  font-family: 'Nunito Bold';
  font-size: 1.5em;
  margin-bottom: .5em;
}

.show-lister li span {
  display: table;
  font-family: 'Nunito Regular';
  font-size: 1em;
}

.graphsvg {
  margin: 50px auto;
  margin-bottom: 110px;
  max-width: 1150px;
  width: 70%;
}
#graphsvg {
  overflow: visible;
}
.tre-1 {
    fill:#fff;
animation: arrowtopanim 12s linear forwards;
}
.tre-2 {
   fill:#fff;
  transform: translate(36px, 159px);
  animation: arrowbot 12s linear forwards;
}

@keyframes arrowbot{
 0% {
  
    opacity:0
  }
    59.7% {
      opacity:0;
  
  }
   63.1% {
     opacity:0;
   
  }
    66.9% {
    opacity:1;
  }
}

.ttc-1 {
  fill:#fff;
animation: toplineanim 12s linear forwards;
}

.asd-1 {
  fill:#fff;
  transform: translate(36px, 216px);
  animation: flattext 12s linear forwards;
}
.clsssss-1 {
  stroke:#fff; fill:#fff;stroke-dasharray:5;
stroke-width: 2;
  tranform: translate(500px, 0px);
animation: strokeanim 12s linear forwards;

}
.wwn-1 {
   filter: drop-shadow( -2px 3px 1px rgba(0, 0, 0, .4));
  stroke:#fff; fill:#fff;
  animation: wwn 12s linear forwards;
  transform: translate(36px, 109px);
}
@keyframes flattext{

  0% {
   opacity:0;
  }
   10% {
   opacity:0;
  }
   15% {
   opacity:1;
  }
}
@keyframes wwn{

  0% {
   opacity:0;
  }
   80% {
   opacity:0;
  }
   85% {
   opacity:1;
  }
}

@keyframes strokeanim{

  0% {
   clip-path: circle(0px at 0 206px);
  }

    59.7% {
    clip-path: circle(0px at 0 206px);
  }
   63.1% {
     clip-path: circle(0px at 0 196px);
  }
  66.9% {
 clip-path: circle(18px at 0 196px);
  }
  70.3% {
    clip-path: circle(20px at 0 194px);
  }
   74.4% {
       clip-path: circle(28px at 0 186px);
  }
    77.8% {
 clip-path: circle(42px at 0 174px);
  }
    81.6% {
 clip-path: circle(48px at 0 168px);
  }
  
   85.3% {
    clip-path: circle(48px at 0 168px);
  }
 89.4% {
  clip-path: circle(58px at 0 158px);
  }
 92.5% {
     clip-path: circle(78px at 0 138px);
  }
      96.9% {
    clip-path: circle(72px at 0 144px);
  }
      100% {
  clip-path: circle(102px at 0 114px);
  }
  
}
.ccll2-1 {
   transform: translate(0, 0px); stroke:#fff; fill:#fff;
}
.ccc-1 {
  fill: #fff;
}

.ll-1 {
  stroke:#fff;stroke-miterlimit:10;
  transform: translate(0, -28px);
}

.ssc-1 {
  transform: translate(0, 0px); stroke:#fff; fill:#fff;
}
.clss-1{fill:#ef4141;
  opacity:1;
  filter: drop-shadow( -2px 3px 1px rgba(0, 0, 0, .4));
/*      transform: translate(744px, 198px); */
animation: youanim 12s linear forwards;
}
.clss-2{fill:#fff;

animation: youanim2 12s linear forwards;
}

.cls-1 {
  fill:#010101;opacity:0.5;
   clip-path: inset(0px 100% 0px 0px);
    animation: dash4 12s linear forwards;
}
.cls-2 {
  fill:none;stroke-miterlimit:10;
  stroke:#010101;stroke-width:2.88px;
   stroke-dasharray: 1235;
  stroke-dashoffset: 1260;
   animation: dash3 12s linear forwards;
}

.cls-4 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 12s linear forwards;
  fill:none;stroke:#ef4141;stroke-miterlimit:10;stroke-width:3.6px;
}
@keyframes youanim{
  0% {
  transform: translate(-48px, 210px);
  }
   7.8% {
  transform: translate(14.4px, 203px);
  }
    21.9% {
  transform: translate(127.2px, 197px);
  }
     39.1% {
   transform: translate(264.8px, 200px);
  }
   52.5% {
    transform: translate(372px, 198px);
  }
    55% {
     transform: translate(392px, 204px);
  }
    60% {
transform: translate(432px, 208px);
  }
    67.8% {
  transform: translate(494.4px, 212px);
  }
    77.8% {
     transform: translate(574.4px, 208px);
  }
   88.4% {
         transform: translate(659.2px, 198px);
  }

 93.1% {
   transform: translate(696.8px, 200px);
  }
      96.8% {
            transform: translate(726.4px, 194px);
  }
      100% {
 transform: translate(752px, 198px);
  }
}

@keyframes youanim2{
  0% {
  transform: translate(-48px, -145.24px);
  }
   7.8% {
  transform: translate(14.4px, -152.24px);
  }
    21.9% {
  transform: translate(127.2px, -158.24px);
  }
     39.1% {
   transform: translate(264.8px, -155.24px);
  }
   52.5% {
    transform: translate(372px, -157.24px);
  }
    55% {
     transform: translate(392px, -151.24px);
  }
    60% {
transform: translate(432px, -147.24px);
  }
    67.8% {
  transform: translate(494.4px, -143.24px);
  }
    77.8% {
     transform: translate(574.4px, -147.24px);
  }
   88.4% {
         transform: translate(659.2px, -157.24px);
  }

 93.1% {
   transform: translate(696.8px, -155.24px);
  }
      96.8% {
            transform: translate(726.4px, -161.24px);
  }
      100% {
 transform: translate(752px, -157.24px);
  }
}
.clsss-1{fill:#010101;
/*   transform: translate(-23px, 210px); */
animation: themanim 12s linear forwards;
  filter: drop-shadow( -2px 3px 1px rgba(0, 0, 0, .4));
}

.clsss-2{fill:#fff;
animation: themanim2 12s linear forwards;
}
@keyframes themanim{
  0% {
  transform: translate(-48px, 210px);
  }
    3.4% {
  transform: translate(-20.8px, 202px);
  }
   7.8% {
  transform: translate(14.5px, 204px);
  }
  14.7% {
  transform: translate(69.6px, 170px);
  }
  18.75% {
     transform: translate(102px, 144px);
  }
    21.9% {
 transform: translate(127.2px, 104px);
  }
    25.9% {
transform: translate(159.2px, 86px);
  }
 29.7% {
transform: translate(189.6px, 103px);
  }
   33.4% {
transform: translate(219.2px, 133px);
  }
     36.9% {
   transform: translate(247.2px, 168px);
  }
   40.6% {
     transform: translate(276.8px, 142px);
  }
  44.4% {
     transform: translate(307.2px, 138px);
  }
    48% {
       transform: translate(336px, 134px);
  }
    51.9% {
transform: translate(367.2px, 121px);
  }
    55.6% {
  transform: translate(396.8px, 130px);
  }
    59.7% {
   transform: translate(429.6px, 186px);
  }
   63.1% {
    transform: translate(456.8px, 162px);
  }
  66.9% {
  transform: translate(487.2px, 150px);
  }
  70.3% {
  transform: translate(514.4px, 151px);
  }
   74.4% {
  transform: translate(547.2px, 136px);
  }
    77.8% {
transform: translate(574.4px, 100px);
  }
    81.6% {
transform: translate(604.8px, 80px);
  }
   85.3% {
   transform: translate(634.4px, 90px);
  }
 89.4% {
   transform: translate(667.2px, 66px);
  }
 92.5% {
   transform: translate(692px, 20px);
  }
      96.9% {
    transform: translate(727.2px, 38px);
  }
      100% {
 transform: translate(752px, -20px);
  }
}
@keyframes toplineanim{
  0% {
  transform: translate(36px, 210px);
  }
    3.4% {
  transform: translate(36px, 202px);
  }
   7.8% {
  transform: translate(36px, 204px);
  }
  14.7% {
  transform: translate(36px, 170px);
  }
  18.75% {
     transform: translate(36px, 144px);
  }
    21.9% {
 transform: translate(36px, 104px);
  }
    25.9% {
transform: translate(36px, 86px);
  }
 29.7% {
transform: translate(36px, 103px);
  }
   33.4% {
transform: translate(36px, 133px);
  }
     36.9% {
   transform: translate(36px, 168px);
  }
   40.6% {
     transform: translate(36px, 142px);
  }
  44.4% {
     transform: translate(36px, 138px);
  }
    48% {
       transform: translate(36px, 134px);
  }
    51.9% {
transform: translate(36px, 121px);
  }
    55.6% {
  transform: translate(36px, 130px);
  }
    59.7% {
   transform: translate(36px, 186px);
  }
   63.1% {
    transform: translate(36px, 162px);
  }
  66.9% {
  transform: translate(36px, 150px);
  }
  70.3% {
  transform: translate(36px, 151px);
  }
   74.4% {
  transform: translate(36px, 136px);
  }
    77.8% {
transform: translate(36px, 100px);
  }
    81.6% {
transform: translate(36px, 80px);
  }
   85.3% {
   transform: translate(36px, 90px);
  }
 89.4% {
   transform: translate(36px, 66px);
  }
 92.5% {
   transform: translate(36px, 20px);
  }
      96.9% {
    transform: translate(36px, 38px);
  }
      100% {
 transform: translate(36px, -20px);
  }
}
@keyframes arrowtopanim{
  0% {
  transform: translate(36px, 210px);
    opacity:0
  }
    59.7% {
      opacity:0;
   transform: translate(36px, 186px);
  }
   63.1% {
    opacity:0;
    transform: translate(36px, 162px);
  }
  66.9% {
    opacity:1;
  transform: translate(36px, 150px);
  }
  70.3% {
  transform: translate(36px, 151px);
  }
   74.4% {
  transform: translate(36px, 136px);
  }
    77.8% {
transform: translate(36px, 100px);
  }
    81.6% {
transform: translate(36px, 80px);
  }
   85.3% {
   transform: translate(36px, 90px);
  }
 89.4% {
   transform: translate(36px, 66px);
  }
 92.5% {
   transform: translate(36px, 20px);
  }
      96.9% {
    transform: translate(36px, 38px);
  }
      100% {
 transform: translate(36px, -20px);
  }
}
@keyframes themanim2{
   0% {
  transform: translate(-48px, -145px);
  }
    3.4% {
  transform: translate(-20.8px, -153px);
  }
   7.8% {
  transform: translate(14.5px, -151px);
  }
  14.7% {
  transform: translate(69.6px, -185px);
  }
  18.75% {
     transform: translate(102px, -211px);
  }
    21.9% {
 transform: translate(127.2px, -251px);
  }
    25.9% {
transform: translate(159.2px, -269px);
  }
 29.7% {
transform: translate(189.6px, -252px);
  }
   33.4% {
transform: translate(219.2px, -222px);
  }
     36.9% {
   transform: translate(247.2px, -187px);
  }
   40.6% {
     transform: translate(276.8px, -213px);
  }
  44.4% {
     transform: translate(307.2px, -217px);
  }
    48% {
       transform: translate(336px, -221px);
  }
    51.9% {
transform: translate(367.2px, -234px);
  }
    55.6% {
  transform: translate(396.8px, -225px);
  }
    59.7% {
   transform: translate(429.6px, -169px);
  }
   63.1% {
    transform: translate(456.8px, -193px);
  }
  66.9% {
  transform: translate(487.2px, -205px);
  }
  70.3% {
  transform: translate(514.4px, -204px);
  }
   74.4% {
  transform: translate(547.2px, -219px);
  }
    77.8% {
transform: translate(574.4px, -255px);
  }
    81.6% {
transform: translate(604.8px, -275px);
  }
   85.3% {
   transform: translate(634.4px, -265px);
  }
 89.4% {
   transform: translate(667.2px, -289px);
  }
 92.5% {
   transform: translate(692px, -335px);
  }
      96.9% {
    transform: translate(727.2px, -317px);
  }
      100% {
 transform: translate(752px, -375px);
  }
}
@keyframes dash{
  to {
    stroke-dashoffset: 198;
  }
}
@keyframes dash3{
  0% {
    stroke-dashoffset: 1260;
  }
   26% {
    stroke-dashoffset: 980;
  }
    37% {
    stroke-dashoffset: 860;
  }
     47% {
    stroke-dashoffset: 770;
  }
   57% {
    stroke-dashoffset: 665;
  }
    67% {
    stroke-dashoffset: 560;
  }
    77% {
    stroke-dashoffset: 460;
  }
    87% {
    stroke-dashoffset: 360;
  }
    97% {
    stroke-dashoffset: 240;
  }
  100% {
    stroke-dashoffset: 180;
  }
}
@keyframes dash2{
  to {
    clip-path: inset(0px 0% 0px 0px);
  }
}
.cls-3 {
  fill:#ef4142;opacity:.88;
 clip-path: inset(0px 100% 0px 0px);
    animation: dash2 12s linear forwards;
}
@keyframes dash4{
  0% {
    clip-path: inset(0px 100% 0px 0px);
  }
  26% {
    clip-path: inset(0px 74% 0px 0px);
  }
  37% {
    clip-path: inset(0px 63% 0px 0px);
  }
  52% {
    clip-path: inset(0px 48% 0px 0px);
  }
   62% {
    clip-path: inset(0px 38% 0px 0px);
  }
   72% {
    clip-path: inset(0px 28% 0px 0px);
  }
  100% {
    clip-path: inset(0px 0% 0px 0px);
  }
}

.hero-render-content .y-preorderbtn:hover {
  transform: translate(50%,-50%);
 }

.hero-render-all {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/heromockup.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: clamp(100px, 47.3%, 441px);
  margin-top: 30px;
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
}


.say-hello-bg {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/hello.jpg);
  padding-top: 26.3%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

div#say-hello-container {
  position: relative;
}


.hello-list-title {
  display: flex;
  justify-content: center;
  margin-left: -3%;
  margin-top: 40px;
}

.hello-list-item {
  width: 30%;
  opacity: 0;
  margin-bottom: 30px;
}

div#say-hello-list-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}

.hello-list-heading {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(202deg, #fff,#e1e1e1);
  line-height: 30px;
  font-family: Josefin Sans;
  font-size: 26px;
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 3px rgba(0, 0, 0, 0.14)) drop-shadow(0 1px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
  width: 100%;
  margin-top: 8px;
  max-width: 400px;
}

.hello-list-number-cont {
  position: relative;
  width: 20%;
  display: flex;
  float: right;
  justify-content: flex-end;
  margin-right: 1em;
}

.hello-list-number-cont:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.hello-list-number {
  color: #f0f0f0;
  align-items: baseline;
  display: flex;
  font-family: Josefin Sans;
  font-size: clamp(16px,5vw,80px);
  font-weight: bolder;
  height: 100%;
  justify-content: center;
  line-height: clamp(16px,5.5vw,80px);
  position: absolute;
  width: 100%;
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 3px rgba(0, 0, 0, 0.14)) drop-shadow(0 1px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
}

.hello-list-subheading {
  font-family: 'Nunito Regular';
  color: #fff;
  max-width: 400px;
}

.hello-list-item.h-first {
  animation-duration: .6s;
  animation-name: opacitystart;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}

.hello-list-item.h-second {
  animation-duration: .6s;
  animation-name: opacitystart;
  animation-delay: .2s;
  animation-fill-mode: forwards;
}

.hello-list-item.h-third {
  animation-duration: .6s;
  animation-name: opacitystart;
  animation-delay: .4s;
  animation-fill-mode: forwards;
}

@keyframes opacitystart {
  0% {
      opacity: 0;
  }

  100% {
      opacity: 1;
  }
  
}



.j-text {
  width: 44%;
}

.j-heading {
  font-size: 2.7vw;
  font-family: Josefin Sans;
  white-space: nowrap;
  color: #320ce3;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#8d74ff,#320ce3);
}
.j-subheading {
  color: #320ce3;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#320ce3,#ed2092);
}
.j-first .j-subheading {
  font-size: 7.1vw;
  font-family: Josefin Sans;
  white-space: nowrap;
  line-height: 11vw;
  margin-left: -0.4vw;
}
.j-second .j-subheading {
  font-family: Josefin Sans;
  font-size: 7.5vw;
  line-height: 10vw;
  margin-left: -0.4vw;
}
.j-heading-big {width: 90%;color: #320ce3;
  font-family: Josefin Sans;
  
  white-space: nowrap;margin-bottom: 1em;-webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#8d74ff,#320ce3);}

.j-heading-big span {
  background: linear-gradient(#6442ff,#320ce3);-webkit-text-fill-color: initial;border-radius: .1em;color: #fff;padding: 0.2em;padding-top: 0.3em;}

.j-first .j-heading-big {font-size: 3.7vw;}
.j-third .j-subheading {
  font-family: Josefin Sans;
  font-size: 7.8vw;
  line-height: 10vw;
}

.j-fourth .j-subheading {
  font-family: Josefin Sans;
  font-size: 21vw;
  line-height: 22vw;
  margin-left: -1.5vw;
}

.j-fifth .j-subheading {
  font-size: 11.6vw;
  line-height: 12vw;
  font-family: 'Josefin Sans';
  margin-left: -0.6vw;
}
@keyframes entstart {

  0% {
      opacity: 0;
  }

  16.5% {
      opacity: 1;
  }
  33% {
      opacity: 0;
  }  

}
@keyframes entstart2 {

  33% {
      opacity: 0;
  }

  49.5% {
      opacity: 1;
  }
  66% {
      opacity: 0;
  }  

}

@keyframes entstart3 {

  66% {
      opacity: 0;
  }

  82.5% {
      opacity: 1;
  }
  100% {
      opacity: 0;
  }  

}
.j-paragraph {
  width: 45%;
    margin-left: 6.7%;
    margin-right: auto;
    color: #512E8A;
}
.j-heading:first-child {
  display: none;
  font-size: 3.7vw;
}
.j-headingj1 {
  display: none;
  font-size: 2.4vw;
  color: #320ce3;
    font-family: Josefin Sans;
    white-space: nowrap;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(#8d74ff,#320ce3);
}
.j-headingj2 {
  display: none;
  font-size: 2.12vw;
  color: #320ce3;
    font-family: Josefin Sans;
    white-space: nowrap;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(#8d74ff,#320ce3);
}
.j-headingj3 {
  display: none;
  font-size: 1.78vw;
  color: #320ce3;
    font-family: Josefin Sans;
    white-space: nowrap;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(#8d74ff,#320ce3);
}
.j-heading span {
  background: linear-gradient(#6442ff,#320ce3);
  -webkit-text-fill-color: initial;
  border-radius: 0.1em;
  color: #fff;
  padding: 0.2em;
  padding-top: 0.3em;
}
.j-paragraph.false .j-invisible {display: none;}

.j-paragraph {width: 45%;margin-right: auto;margin-left: 6.5%;color: #512E8A;}

.j-paragraph.true .click-to-read-j {display: none;}

.click-to-read-j {font-family: 'Nunito Bold';
  cursor: pointer;}
  .j-second .j-paragraph {

}

.j-second .j-heading-big {font-size: 3.41vw;}

.j-second .j-transform {margin-top: -30%;}

.j-visible {font-family: 'Nunito Regular';     max-width: 45vw;}

.j-heading:first-child {font-size: 3.7vw;}

.j-first .j-paragraph {           margin-top: -22%;
  font-size: 1.3vw;}

.j-second .j-paragraph {    margin-left: auto;
  margin-right: 4.5%;
  margin-top: -19%;
  font-size: 1.3vw;}

.j-third .j-paragraph {    margin-top: -19%;
  font-size: 1.3vw;}

.j-third .j-heading-big {font-size: 3.05vw;}
.j-first span.Typewriter__cursor {
  font-size: 4vw;
  position: relative;
  top: -8px;
  display: inline-block;
}
.j-second span.Typewriter__cursor {
  font-size: 5vw;
  position: relative;
  top: -12px;
  display: inline-block;
}
.j-third span.Typewriter__cursor {
  font-size: 4vw;
  position: relative;
  top: -7px;
  display: inline-block;
}

.j-third .j-transform {margin-top: -30%;}
.j-first .typewrap1 {font-size: 4.2VW;
  white-space: nowrap;   -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);}

.j-second .typewrap2 {font-size: 5.5VW;
  white-space: nowrap;   -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);}
.j-third .typewrap3 {font-size: 4.2VW;
  white-space: nowrap;   -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);}

.journey-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 260px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.j-image {
  padding-top: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}

.journey-item:nth-of-type(2n) {
  flex-direction: row-reverse;
}
.j-image-cont {
  width: 31%;
}

.y-heading {

  font-family: Josefin Sans;
  font-size: 58px;
  font-weight: bold;
  color: #fff;
  margin: 25px auto 0;
  max-width: 1300px;
}
.y-signature {
  height: 108px;
  background-size: contain;
  background-image: url("https://portal.revrevdev.xyz/wp-content/uploads/sig.png");
  background-repeat: no-repeat;
  background-position: 0%;
}
.y-text-cont {
  width: 60%;
  padding: 20px;
  font-family: Arial;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.y-cont {
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 auto;
  max-width: 1300px;
  margin-top: 25px;

  align-items: flex-start;
}
.mb-section-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 2px;
}
.y-preorderbtn {
  font-family: 'Poppins';
  text-align: center;
  font-size: 26px;
  line-height: 28px;
  padding: 14px 32px;
  width: fit-content;
  animation: gradient 6.5s ease infinite;
  font-weight: bold;
  filter: drop-shadow(0 0 0.75rem #00000080) saturate(1);
  color: #fff;
  cursor: pointer;
  margin: 10px auto;
  background: linear-gradient(286deg,#ff1d2d,#c41ab8);
  border-radius: 100000000000000px;
  -webkit-text-fill-color: initial;
  transition: .3s all;
  background-size: 200% 200%;

}
.y-preorderbtn:after {content: '';
position: absolute;
border-radius: 100000000000000px;top: 20%;
left: 2px;
width: 0;
height: 60%;
background-color: rgba(255,255,255,0.4);

  
      transition: none;}

.y-preorderbtn:hover:after {width: 105%;
background-color: rgba(255,255,255,0);

      transition: all 0.4s ease-in-out;height: 100%;top: 0%;}
.y-preorderbtn:hover {
transform: scale(1.05);
text-shadow: 0px 0px 3px #d3d3d3;
transition: .3s all;
filter: drop-shadow(0 0 0.75rem #00000080) saturate(1.5);
}
.y-preorderbtnsmall:hover {
transform: scale(1.05);
text-shadow: 0px 0px 3px #d3d3d3;
transition: .3s all;
filter: drop-shadow(0 0 0.75rem #00000080) saturate(1.5);
}
.y-image-contain {
  width: 40%;
  height: fit-content;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 20px;
  filter: drop-shadow(0 0 0.55rem #181818);
  margin-top: 35px;
  margin-left: 30px;
  margin-right: 20px;
}
.y-image-cont {
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/pkps.jpg);
background-repeat: no-repeat;
background-size: contain;
padding-bottom: 66.66%;
border-radius: 10px;
}

.y-subheading {
  color: #fff;
  font-size: 20px;
  text-align: justify;
  font-family: 'Nunito Regular';
  margin: 10px;
}



.y-cta {
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 2em;

  font-style: italic;
  font-family: 'Nunito Bold';
  margin-top: 3em;
}
.y-container .y-preorderbtn {

  margin-top: 40px;
  margin-bottom: 80px;
}
.w-heading {
  text-align: center;
  font-family: Josefin Sans;
  font-size: 32px;
  font-weight: bold;
  color: #320ce3;
}

.w-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 16px;
  margin-left: 20px;
}

.w-list-title {
  font-family: Josefin Sans;
  font-size: 22px;
  font-weight: bold;
  color: #e00a2d;
}

.w-list-subtext {
  font-size: 18px;
  font-family: Arial;
}

div#what-container {
  max-width: 1300px;
  margin: 0 auto;
}

.book-heading-change span:nth-child(1) {
  animation-duration: 6s;
  animation-name: entstart;
  animation-iteration-count: infinite;
}
.book-heading-change span:nth-child(2) {
  animation-duration: 6s;
  animation-name: entstart2;
  animation-iteration-count: infinite;
}

.book-heading-change span:nth-child(3) {
  animation-duration: 6s;
  animation-name: entstart3;
  animation-iteration-count: infinite;
}

.book-heading {
  font-family: 'Josefin Sans';
  color: #dadada;
  padding-top: 120px;
  font-size: 58px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding-left: 1em;
  padding-right: 1em; 
}

.book-heading-change span {
  position: absolute;
  opacity: 0;
  width: 500px;
  text-align: center;
  font-family: Arial;
  font-size: 32px;
  font-weight: bold;
  color: #e00a2d;
}

.book-cta {
  margin-top: 50px;
}

.book-heading-change-cont {
  display: flex;
  justify-content: center;
}

.book-heading-change {
  width: 500px;
}

.book-cta {
  margin-top: 100px;
  text-align: center;
  font-weight: bold;
  color: #320ce3;
  font-size: 24px;
  font-style: italic;
  font-family: Josefin Sans;
}

.book-spine {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/binder.jpg);
  padding-top: 11.88%;
  background-size: cover;
  width: 100%;
  position: relative;
  margin: 0;

}

.book-render {
  background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/mockup-1.png);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
  margin: 0px auto 25vh;
  max-width: 800px;
  padding-top: 80%;
}

.need-content-container ul {
  list-style-position: inside;
}

.need-content-container {
  max-width: 1000px;
  text-align: center;
  margin: 50px auto;
  background: linear-gradient(286deg, rgb(188 10 86) 0%, rgb(238 9 28) 100%);
  padding: 40px;
  width: fit-content;
}

.need-heading {
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 26px;
  font-family: Josefin Sans;
}

.need-cta {
  text-align: center;
  font-family: Josefin Sans;
  font-size: 26px;
  font-weight: bold;
  color: #320ce3;
}

.need-content-container li {
  color: #fff;
  font-family: Arial;
  font-size: 18px;
  margin-left: -60px;
}

.compare-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

}

.compare-title-1 {
  font-size: 80px;
  font-family: Josefin Sans;
  width: 100%;
  color: #e00a2d;
  text-align: end;
  margin-right: 5%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(90deg, rgba(50,12,227,1) 0%, rgba(224,10,45,1) 100%);
  margin-bottom: 4px;
}

.compare-title-2 {
  font-size: 80px;
  font-family: Josefin Sans;
  width: 100%;
  color: #320ce3;
  margin-left: 5%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(270deg, rgba(50,12,227,1) 0%, rgba(224,10,45,1) 100%);
  margin-bottom: 4px;
}

.compare-title-1 > span {
  display: block;
  font-size: 34px;
  font-weight: bold;
  padding-right: 4px;
  margin-top: -25px;
  transform: none;
}

.compare-title-2 > span {
  display: block;
  font-size: 34px;
  font-weight: bold;
  padding-right: 4px;
  margin-top: -25px;  
  transform: none;
}
.compare-today-subtext {
  font-size: 22px;
  opacity: 0;
  text-align: end;
  margin-right: 10%;
  margin-top: 6px;
  width: 500px;
  max-width: 500px;
  position: relative;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(90deg, rgba(50,12,227,1) 50%, rgba(224,10,45,1) 100%);
}

.compare-tomorrow-subtext {
opacity: 0;
  margin-left: 10%;
  margin-top: 6px;
  width: 500px;
  max-width: 500px;
  position: relative;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(270deg, rgba(50,12,227,1) 50%, rgba(224,10,45,1) 100%);
}
.compare-title-vs {
  font-family: 'Josefin Sans';
  font-size: 24px;
  padding: 5px 10px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);
  position: absolute;
  transform: none;
}

.compare-text-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  PADDING-bottom: 40px;
}

.compare-tomorrow-container {
  color: #320ce3;
  font-family: 'Nunito Bold';
  padding-top: 16px;
  font-size: 22px;
  width: 50%;
  white-space: nowrap;
}

.compare-today-container {
  color: #e00a2d;
  font-family: 'Nunito Bold';
  font-size: 22px;
  padding-top: 16px;
  width: 50%;
  border-right: 5px solid #e00a2d;
  display: flex;
    flex-direction: column;
    align-items: flex-end;
    white-space: nowrap;
}
/* 
.compare-today-subtext {
  opacity: 0;
  left: 25%;
  position: absolute;
}

.compare-tomorrow-subtext {
  opacity: 0;
right: 25%;
  position: absolute;
} */

@keyframes opacitystartlist {
  0% {
    opacity: 0;
}

100% {
    opacity: 1;
} 
}

@keyframes opacitystartlist2 {
  0% {
    opacity: 0;
}

100% {
    opacity: 1;
}

  
}

div#say-hello-container {
  max-width: 1450px;
  margin: 0 auto;
  margin-top: 70px;
}



div#jounrey-list-container {
  margin-top: 80px;
  background: #fff;
  padding-bottom: 1px;

}

div#say-hello-list-container {
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 70px;
}

div#why-container {
  margin-bottom: 80px;
}

.y-heading {
  margin-bottom: -30px;
  margin-top: 40px;
  padding: 30px;
  text-align: left;
}

.w-heading {
  margin-bottom: 20px;
}
.journey-item.j-fifth {
  margin-bottom: 160px;
}
div#book-container {
  background: #2c0070e8;
  padding-bottom: 80px;
  position: relative;
}
div#book-container > div {position: relative;z-index: 3;}

div#book-container:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg id='splitsvg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='405' height='623' version='1.1'%3E%3Cdefs%3E%3ClinearGradient id='logo-gradient' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cc22ff'%3E%3Canimate attributeName='stop-color' values='%23cc22ff; %23ff2233; %23cc22ff' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' values='%23ff2233; %23cc22ff; %23ff2233' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='svgg'%3E%3Cpath id='path0' d='M 123.503 30.931 C 101.55 33.031 82.86 41.924 71.493 55.68 C 48.227 83.835 54.759 136.701 84.009 156.971 C 89.181 160.555 90.797 157.094 65.633 196.345 C 53.558 215.538 43.198 232.078 42 234 L 90 234 L 111.183 201.449 L 132.582 169.082 L 145.303 169.082 L 158.024 169.082 L 161.183 191.546 C 162.92 203.901 165.028 218.466 165.867 223.913 L 167.371 233.976 L 183.231 233.988 L 199.011 233.975 L 199.034 131.884 L 199.034 29.952 L 164.976 30.087 C 146.244 30.161 127.581 30.541 123.503 30.931 M 204.831 132.785 L 204.82 234.003 L 220.683 234.014 C 232.201 233.992 236.553 233.997 236.988 233.997 C 237.186 232.911 239.298 218.346 241.638 201.208 L 245.894 170.049 L 258.937 170.055 L 271.981 170.061 L 293.237 202.403 L 314.016 234.012 L 338.377 234.026 C 350.898 234.005 361.421 233.997 362.006 234.001 C 361.91 233.848 352.039 217.938 339.474 198.374 C 312.872 156.951 314.589 160.8 320.838 156.591 C 351.829 135.715 355.761 79.054 328.119 51.661 C 310.332 34.034 300.86 31.666 246.048 30.239 L 204.798 29.949 L 204.831 132.785 M 158.454 100.135 L 158.454 130.706 L 140.338 130.174 C 110.632 129.302 99.987 121.466 100.007 100.483 C 100.029 76.955 109.698 69.908 142.271 69.679 L 158.454 69.565 L 158.454 100.135 M 290.166 73.308 C 306.574 81.387 308.93 110.507 294.223 123.452 C 287.907 129.011 284.898 129.692 264.493 130.181 L 246.377 130.616 L 246.377 100.502 L 246.377 70.389 L 265.942 70.702 C 284.242 70.994 285.809 71.163 290.166 73.308 M 44.605 239.508 C 44.799 239.967 47.754 246.931 51.208 254.95 L 57.488 269.531 L 112.319 269.548 L 167.15 269.565 L 167.15 285.99 L 167.15 302.415 L 119.807 302.415 C 91.907 302.403 72.464 302.375 72.088 302.384 C 72.591 303.625 75.612 310.808 79.111 318.999 L 85.758 333.816 L 126.454 334.068 L 167.15 334.32 L 167.15 351.218 L 167.15 368.116 L 134.196 368.116 C 103.222 368.116 101.244 368.112 100.88 368.116 C 102.068 370.75 105.076 377.648 108.482 385.242 L 114.493 398.987 L 157.246 399.011 L 199.05 399.018 L 199.054 318.858 L 199.008 239.045 L 122.058 239.017 C 76.976 238.816 44.419 239.009 44.397 238.997 M 204.831 318.841 L 204.831 399.034 L 247.24 399.034 C 279.996 398.988 289.494 398.99 289.762 398.993 C 290.512 397.192 293.308 390.566 296.539 383.168 C 299.556 375.73 302.151 369.235 302.56 368.134 C 302.151 368.134 287.85 368.116 270.048 368.116 L 237.681 368.116 L 237.681 351.208 L 237.681 334.3 L 278.112 334.3 L 318.543 334.3 L 324.993 319.082 C 328.355 310.655 331.21 303.456 331.521 302.638 C 331.351 302.63 310.314 302.415 284.541 302.415 L 237.681 302.415 L 237.681 285.998 L 237.681 269.581 L 292.433 269.332 L 347.184 269.082 L 353.785 254.23 C 357.416 246.062 360.386 239.214 360.386 239.013 C 360.386 238.812 325.386 238.647 282.609 238.647 L 204.901 238.961 L 204.831 318.841 M 116.881 404.784 C 121.97 416.323 201.626 597.791 202.1 597.31 C 203.08 596.316 285.192 405.872 287.026 404.018 C 285.576 404.007 279.276 404.018 264.126 404.088 L 242.289 404.035 L 222.83 455.415 L 203.398 506.483 L 201.94 503.172 C 201.139 501.351 191.787 478.273 181.159 451.886 L 161.903 403.972 L 139.242 403.972 C 126.872 403.927 116.902 404.006 116.543 404.007 Z Z' stroke='none' fill='url(%23logo-gradient)' fill-rule='evenodd'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  top: 0;
  left: 0;
  opacity: 0.05;
  background-size: contain;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: center;
}
.need-content-container {
  border-radius: 10PX;
}

.compare-today-subtext:nth-child(1) {
  animation: opacitystartlist 1s forwards;
}
.compare-today-subtext:nth-child(2) {
  animation: opacitystartlist 1s .5s forwards;
}
.compare-today-subtext:nth-child(3) {
  animation: opacitystartlist 1s 1s forwards;
}
.compare-today-subtext:nth-child(4) {
  animation: opacitystartlist 1s 1.5s forwards;
}
.compare-today-subtext:nth-child(5) {
  animation: opacitystartlist 1s 2s forwards;
}
.compare-today-subtext:nth-child(6) {
  animation: opacitystartlist 1s 2.5s forwards;
}
.compare-today-subtext:nth-child(7) {
  animation: opacitystartlist 1s 3s forwards;
}
.compare-today-subtext:nth-child(8) {
  animation: opacitystartlist 1s 3.5s forwards;
}
.compare-today-subtext:nth-child(9) {
  animation: opacitystartlist 1s 4s forwards;
}
.compare-today-subtext:nth-child(10) {
  animation: opacitystartlist 1s 4.5s forwards;
}
.compare-today-subtext:nth-child(11) {
  animation: opacitystartlist 1s 5s forwards;
}
.compare-today-subtext:nth-child(12) {
  animation: opacitystartlist 1s 5.5s forwards;
}
.compare-today-subtext:nth-child(13) {
  animation: opacitystartlist 1s 6s forwards;
}
.compare-today-subtext:nth-child(14) {
  animation: opacitystartlist 1s 6.5s forwards;
}
.compare-today-subtext:nth-child(15) {
  animation: opacitystartlist 1s 7s forwards;
}
.compare-tomorrow-subtext:nth-child(1) {
  animation: opacitystartlist2 1s forwards;
}
.compare-tomorrow-subtext:nth-child(2) {
  animation: opacitystartlist2 1s .5s forwards;
}
.compare-tomorrow-subtext:nth-child(3) {
  animation: opacitystartlist2 1s 1s forwards;
}
.compare-tomorrow-subtext:nth-child(4) {
  animation: opacitystartlist2 1s 1.5s forwards;
}
.compare-tomorrow-subtext:nth-child(5) {
  animation: opacitystartlist2 1s 2s forwards;
}
.compare-tomorrow-subtext:nth-child(6) {
  animation: opacitystartlist2 1s 2.5s forwards;
}
.compare-tomorrow-subtext:nth-child(7) {
  animation: opacitystartlist2 1s 3s forwards;
}
.compare-tomorrow-subtext:nth-child(8) {
  animation: opacitystartlist2 1s 3.5s forwards;
}
.compare-tomorrow-subtext:nth-child(9) {
  animation: opacitystartlist2 1s 4s forwards;
}
.compare-tomorrow-subtext:nth-child(10) {
  animation: opacitystartlist2 1s 4.5s forwards;
}
.compare-tomorrow-subtext:nth-child(11) {
  animation: opacitystartlist2 1s 5s forwards;
}
.compare-tomorrow-subtext:nth-child(12) {
  animation: opacitystartlist2 1s 5.5s forwards;
}
.compare-tomorrow-subtext:nth-child(13) {
  animation: opacitystartlist2 1s 6s forwards;
}
.compare-tomorrow-subtext:nth-child(14) {
  animation: opacitystartlist2 1s 6.5s forwards;
}
.compare-tomorrow-subtext:nth-child(15) {
  animation: opacitystartlist2 1s 7s forwards;
}
/* 
.compare-today-subtext:nth-child(1) {
  animation-duration: 2s;
  animation-name: opacitystartlist;
  animation-fill-mode: forwards;
}
.compare-today-subtext:nth-child(2) {
  animation-duration: 2s;
  animation-name: opacitystartlist;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
  margin-top: 28px;
}
.compare-today-subtext:nth-child(3) {
  animation-duration: 2s;
  animation-name: opacitystartlist;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  margin-top: 56px;
}

.compare-today-subtext:nth-child(4) {
  animation-duration: 2s;
  animation-name: opacitystartlist;
  animation-fill-mode: forwards;
  animation-delay: 4.5s;
  margin-top: 84px;
}
.compare-today-subtext:nth-child(4) {
  animation-duration: 2s;
  animation-name: opacitystartlist;
  animation-fill-mode: forwards;
  animation-delay: 6s;
  margin-top: 84px;
}

.compare-tomorrow-subtext:nth-child(1) {
  animation-duration: 2s;
  animation-name: opacitystartlist2;
  animation-fill-mode: forwards;
}
.compare-tomorrow-subtext:nth-child(2) {
  animation-duration: 2s;
  animation-name: opacitystartlist2;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
  margin-top: 28px;
}
.compare-tomorrow-subtext:nth-child(3) {
  animation-duration: 2s;
  animation-name: opacitystartlist2;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  margin-top: 56px;

}

.compare-tomorrow-subtext:nth-child(4) {
  animation-duration: 2s;
  animation-name: opacitystartlist2;
  animation-fill-mode: forwards;
  animation-delay: 4.5s;
  margin-top: 84px;
} */

div#compare-container {
  margin: 0 auto;
  background: #fff;
  padding-top: 80px;
  padding-bottom: 80px;
  overflow-x: hidden;
  width: calc(100vw - 10px);
}


div#archetype-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-x: hidden;
}
.journey-item.j-third {
  margin-bottom: 80px;
}
.arch-cont {
  cursor: pointer;
  height: 500px;
  width: 25%;
  transition: .2s all;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image-gallery-image > img {
  object-fit: contain;
  width: 100%;
}
div.image-gallery-slide {
  width: calc(100% + 1px);
}
.arch-cont:before {
  content: '';
    position: absolute;
top: 0; left: 0;
width: calc(100% + 1px);
height: 100%;
  background-position: 50%;
  background-size: cover;
  filter: grayscale(100%);
}

.arch-cont.ac1:before {
  background: linear-gradient(181deg,rgb(255 255 255/54%),rgb(255 255 255/70%)), url(https://portal.revrevdev.xyz/wp-content/uploads/self.jpeg);
  background-position: 24%;
  background-size: cover;
}
.arch-cont.ac2:before {
background: linear-gradient(181deg,rgb(255 255 255/54%),rgb(255 255 255/70%)) ,url(https://portal.revrevdev.xyz/wp-content/uploads/executive.jpeg);
background-position: 26%;
background-size: cover;
}

.arch-cont.ac3:before {
background: linear-gradient(181deg,rgb(255 255 255/54%),rgb(255 255 255/70%)), url(https://portal.revrevdev.xyz/wp-content/uploads/millenial.jpeg);
background-position: 74%;
background-size: cover;
}

.arch-cont.ac4:before {
background: linear-gradient(181deg,rgb(255 255 255/54%),rgb(255 255 255/70%)), url(https://portal.revrevdev.xyz/wp-content/uploads/retired.jpeg);
background-position: 62%;
background-size: cover;
}

.arch-cont.ac5:before {
background: linear-gradient(181deg,rgb(255 255 255/54%),rgb(255 255 255/70%)), url(https://portal.revrevdev.xyz/wp-content/uploads/resigned.jpeg);
background-position: 40%;
background-size: cover;
}

.arch-cont.ac6:before {
background: linear-gradient(181deg,rgb(255 255 255/54%),rgb(255 255 255/70%)), url(https://portal.revrevdev.xyz/wp-content/uploads/parent.jpeg);
background-position: 80%;
background-size: cover;
}

.arch-cont.ac7:before {
background: linear-gradient(181deg,rgb(255 255 255/54%),rgb(255 255 255/70%)), url(https://portal.revrevdev.xyz/wp-content/uploads/ministry.jpeg);
background-position: 51%;
background-size: cover;
}

.arch-cont.ac8:before {
background: linear-gradient(181deg,rgb(255 255 255/54%),rgb(255 255 255/70%)), url(https://portal.revrevdev.xyz/wp-content/uploads/nomad.jpeg);
background-position: 50%;
background-size: cover;
}


.acc1 .arch-cont.ac1 {
  width: 40%;

}
.acc2 .arch-cont.ac2 {
  width: 40%;

}
.acc3 .arch-cont.ac3 {
  width: 40%;

}
.acc4 .arch-cont.ac4 {
  width: 40%;

}

.acc5 .arch-cont.ac5 {
  width: 40%;

}

.acc6 .arch-cont.ac6 {
  width: 40%;

}
.acc7 .arch-cont.ac7 {
  width: 40%;

}
.acc8 .arch-cont.ac8 {
  width: 40%;

}

.acc1 .arch-cont.ac1:before {

  filter: grayscale(0%);
        top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.acc2 .arch-cont.ac2:before {

  filter: grayscale(0%);
        top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.acc3 .arch-cont.ac3:before {

  filter: grayscale(0%);
        top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.acc4 .arch-cont.ac4:before {

  filter: grayscale(0%);
        top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.acc5 .arch-cont.ac5:before {

  filter: grayscale(0%);
        top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.acc6 .arch-cont.ac6:before {

  filter: grayscale(0%);
        top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.acc7 .arch-cont.ac7:before {

  filter: grayscale(0%);
        top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.acc8 .arch-cont.ac8:before {

  filter: grayscale(0%);
        top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


.acc2 .arch-cont.ac1 {
  width: 20%;
}
.acc3 .arch-cont.ac1 {
  width: 20%;
}
.acc4 .arch-cont.ac1 {
  width: 20%;
}

.acc1 .arch-cont.ac2 {
  width: 20%;
}
.acc3 .arch-cont.ac2 {
  width: 20%;
}
.acc4 .arch-cont.ac2 {
  width: 20%;
}

.acc1 .arch-cont.ac3 {
  width: 20%;
}
.acc2 .arch-cont.ac3 {
  width: 20%;
}
.acc4 .arch-cont.ac3 {
  width: 20%;
}

.acc1 .arch-cont.ac4 {
  width: 20%;
}
.acc2 .arch-cont.ac4 {
  width: 20%;
}
.acc3 .arch-cont.ac4 {
  width: 20%;
}

.acc6 .arch-cont.ac5 {
  width: 20%;
}
.acc7 .arch-cont.ac5 {
  width: 20%;
}
.acc8 .arch-cont.ac5 {
  width: 20%;
}

.acc5 .arch-cont.ac6 {
  width: 20%;
}
.acc7 .arch-cont.ac6 {
  width: 20%;
}
.acc8 .arch-cont.ac6 {
  width: 20%;
}

.acc6 .arch-cont.ac7 {
  width: 20%;
}
.acc5 .arch-cont.ac7 {
  width: 20%;
}
.acc8 .arch-cont.ac7 {
  width: 20%;
}

.acc6 .arch-cont.ac8 {
  width: 20%;
}
.acc7 .arch-cont.ac8 {
  width: 20%;
}
.acc5 .arch-cont.ac8 {
  width: 20%;
}

.ac1 .arch-title:after {
  content:'Employee'
}
.ac1 .arch-title:before {
  content:'Working A Job'
}
  .ac2 .arch-title:after {
  content:'Executive'
}
.ac2 .arch-title:before {
  content:'Running A Corporation'
}  

    .ac3 .arch-title:after {
      content:'Millennial'
        }

.ac3 .arch-title:before {
  content:'Starting Your Side Hustle'
}  
        .ac4 .arch-title:after {
          content:'Owner'
            }
.ac4 .arch-title:before {
  content:'Building Your Business'
}  
            .ac5 .arch-title:after {
              content:' Resigned'
                }
                .ac5 .arch-title:before {
  content:'Looking For Opportunity'
}  
                .ac6 .arch-title:after {
                  content:'Parent'
                    }
                .ac6 .arch-title:before {
  content:'Working From Home'
}  
                    .ac7 .arch-title:after {
                      content:'Pastor'
                        }
                                        .ac7 .arch-title:before {
  content:'Leading Your Ministry'
}  
                        .ac8 .arch-title:after {
                          content:'Retired'
                            }
.ac8 .arch-title:before {
  content:'Needing More Money'
}  
          


.acc1 .arch-cont.ac1:after {
  opacity: 1;
  transition: .4s all;
}
.acc1 .ac1 .arch-title:after {
background-image: linear-gradient(#ffffff,#afafaf);
font-size: 48px;
transition: .4s all;
}
.acc2 .arch-cont.ac2:after {
  opacity: 1;
  transition: .4s all;
}
.acc2 .ac2 .arch-title:after {
background-image: linear-gradient(#ffffff,#afafaf);
font-size: 48px;
transition: .4s all;
}
.acc3 .arch-cont.ac3:after {
  opacity: 1;
  transition: .4s all;
}
.acc3 .ac3 .arch-title:after {
background-image: linear-gradient(#ffffff,#afafaf);
font-size: 48px;
transition: .4s all;
}

.acc4 .arch-cont.ac4:after {
opacity: 1;
transition: .4s all;
}
.acc4 .ac4 .arch-title:after {
background-image: linear-gradient(#ffffff,#afafaf);
font-size: 48px;
transition: .4s all;
}

.acc5 .arch-cont.ac5:after {
opacity: 1;
transition: .4s all;
}
.acc5 .ac5 .arch-title:after {
background-image: linear-gradient(#ffffff,#afafaf);
font-size: 48px;
transition: .4s all;
}

.acc6 .arch-cont.ac6:after {
opacity: 1;
transition: .4s all;
}
.acc6 .ac6 .arch-title:after {
background-image: linear-gradient(#ffffff,#afafaf);
font-size: 48px;
transition: .4s all;
}

.acc7 .arch-cont.ac7:after {
opacity: 1;
transition: .4s all;
}
.acc7 .ac7 .arch-title:after {
background-image: linear-gradient(#ffffff,#afafaf);
font-size: 48px;
transition: .4s all;
}

.acc8 .arch-cont.ac8:after {
opacity: 1;
transition: .4s all;
}
.acc8 .ac8 .arch-title:after {
background-image: linear-gradient(#ffffff,#afafaf);
font-size: 48px;
transition: .4s all;
}
.acc8 .ac8 .arch-title:before {
  background-image: linear-gradient(#ffffff,#afafaf);
  }
.acc7 .ac7 .arch-title:before {
  background-image: linear-gradient(#ffffff,#afafaf);
}
.acc1 .ac1 .arch-title:before {
  background-image: linear-gradient(#ffffff,#afafaf);
}
.acc6 .ac6 .arch-title:before {
  background-image: linear-gradient(#ffffff,#afafaf);
}
.acc5 .ac5 .arch-title:before {
  background-image: linear-gradient(#ffffff,#afafaf);
}
.acc4 .ac4 .arch-title:before {
  background-image: linear-gradient(#ffffff,#afafaf);
}
.acc3 .ac3 .arch-title:before {
  background-image: linear-gradient(#ffffff,#afafaf);
}
.acc2 .ac2 .arch-title:before {
  background-image: linear-gradient(#ffffff,#afafaf);
}
.arch-text-wrapper {
  max-height: 0%;
  margin: 20px auto 0;
  width: 90%;
  max-width: 600px;
  position: relative;
  background: linear-gradient(181deg,rgb(255 255 255/74%),rgb(255 255 255/90%));
}
.arch-title {
  color: #ef1b3d;
  font-size: 34px;
  text-align: center;
  font-weight: 500;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  padding: 4px;
  position: relative;
  z-index: 3;
}
body {
  -webkit-transform: none;
  

}

div#___gatsby {-webkit-transform: none;}

div#gatsby-focus-wrapper {-webkit-transform: none;}

.arch-cont:after {
  background-image: linear-gradient(#ee091cab,#900b68bd);
  content: '';
  width: 100%;
  position: absolute;
  opacity: 0;
  height: 100%;
  z-index: 0;
}


  .arch-title:before {
    content: "";
    height: 100%;
    position: absolute;
    width: 90%;
    line-height: 22px;
    left: 0;
    margin-left:5%;
    font-family: 'Nunito Bold';
    font-size: 22px;
    top: 90%;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(#b00a60,#b00a60);
    color: #ef1b3d;
    z-index: 4;
    text-transform: initial;
    bottom: 0;
}

.arch-title:after {
  font-family: Josefin Sans;
  font-size: 34px;
  font-weight: BOLD;
  padding: 10px;
  line-height: 28px;
  position: relative;
  transition: .4s all;
  text-align: center;
  color: #ef1b3d;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);
  z-index: 8;

}
.acc1 .ac1 .arch-title {
  color: #ef1b3d;
}
.acc2 .ac2 .arch-title {
  color: #ef1b3d;
}
.acc3 .ac3 .arch-title {
  color: #ef1b3d;
}
.acc4 .ac4 .arch-title {
  color: #ef1b3d;
}
.acc5 .ac5 .arch-title {
  color: #ef1b3d;
}
.acc6 .ac6 .arch-title {
  color: #ef1b3d;
}
.acc7 .ac7 .arch-title {
  color: #ef1b3d;
}
.acc8 .ac8 .arch-title {
  color: #ef1b3d;
}
.acc1 .ac1 .arch-text {
  z-index: 1;
  opacity: 1;
  height: 100%;
  transition: opacity .6s .3s, height .5s .1s;
  overflow: auto;
}
.acc2 .ac2 .arch-text {
  z-index: 1;
  opacity: 1;
  height: 100%;
  transition: opacity .6s .3s, height .5s .1s;
  overflow: auto;
}
.acc3 .ac3 .arch-text {
  opacity: 1;
  z-index: 1;
  height: 100%;
  transition: opacity .6s .3s, height .5s .1s;
  overflow: auto;
}
.acc4 .ac4 .arch-text {
  opacity: 1;
  z-index: 1;
  height: 100%;
  transition: opacity .6s .3s, height .5s .1s;
  overflow: auto;
}
.acc5 .ac5 .arch-text {
  opacity: 1;
  z-index: 1;
  height: 100%;
  transition: opacity .6s .3s, height .5s .1s;
  overflow: auto;
}
.acc6 .ac6 .arch-text {
  opacity: 1;
  z-index: 1;
  height: 100%;
  transition: opacity .6s .3s, height .5s .1s;
  overflow: auto;
}
.acc7 .ac7 .arch-text {
  opacity: 1;
  z-index: 1;
  height: 100%;
  transition: opacity .6s .3s, height .5s .1s;
  overflow: auto;
}
.acc8 .ac8 .arch-text {
  opacity: 1;
  z-index: 1;
  height: 100%;
  transition: opacity .6s .3s, height .5s .1s;
  overflow: auto;
}
.acc1 .ac1 .arch-text-wrapper {
  
  
  transition: .6s .3s all;
  max-height: fit-content;
}
.acc2 .ac2 .arch-text-wrapper {
  
  
  transition: .6s .3s all;
  max-height: fit-content;
}
.acc3 .ac3 .arch-text-wrapper {
  
  
  transition: .6s .3s all;
  max-height: fit-content;
}
.acc4 .ac4 .arch-text-wrapper {
  
  transition: .6s .3s all;
  max-height: fit-content;
}
.acc5 .ac5 .arch-text-wrapper {
  
  
  transition: .6s .3s all;
  max-height: fit-content;
}
.acc6 .ac6 .arch-text-wrapper {
  
  transition: .6s .3s all;
  max-height: fit-content;
}
.acc7 .ac7 .arch-text-wrapper {
  
  
  transition: .6s .3s all;
  max-height: fit-content;
}
.acc8 .ac8 .arch-text-wrapper {
  transition: .6s .3s all;
  max-height: fit-content;
}
.arch-text {

  font-size: 18px;
  max-height: 200px;
  height: 0%;
  max-width: 600px;
  opacity: 0;
  overflow: auto;
  padding: 8px;
  position: relative;
  transition: height .6s, opacity .3s;
  overflow-y: hidden;
  width: 90%;
  max-width: 400px;
  z-index: -1;
  margin: 0 auto;

  color: #e5e5e5;
  margin-top: 40px;
}


.minibook-container {
  display: flex;
  width: 84%;
  flex-direction: column-reverse;
  flex-wrap: nowrap;
  max-width: 1150px;
}

#minibook-container {
  width: calc(100vw - 10px);
  margin: 20px auto;
  max-width: 1800px;
  justify-content: space-around;
  display: flex;
}
.mb-content-cont {
  display: flex;
  overflow: auto;
  margin-bottom: 8px;
  flex-direction: column;
  margin-left: 4px;
  margin-top: 12px;
}
.mb-left-section {
  background: url(https://portal.revrevdev.xyz/wp-content/uploads/STARS.svg),#0a00a8eb;
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 123%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-left: 18px;
  padding-right: 12px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  display: inline;
  text-align: center;
}
.mockup-read-cont {
  width: 77%;
}
.preorder-btn-container.true {
  backdrop-filter: blur(10px);
  background-image: linear-gradient(155deg,rgba(201,34,40,.8),rgba(209,0,52,.8) 11%,rgba(219,0,73,.8) 22%,rgba(219,0,91,.8) 33%,rgba(219,0,113,.8) 44%,rgba(209,0,139,.8) 56%,rgba(194,0,165,.8) 67%,rgba(171,0,194,.8) 78%,rgba(131,0,224,.8) 89%,rgba(33,29,252,.8)), url(https://portal.revrevdev.xyz/wp-content/uploads/bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

}

.mb-rightdisplay-section {
  height: 410px;
  width: 100%; 
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: url(https://portal.revrevdev.xyz/wp-content/uploads/STARS.svg),linear-gradient(286deg,#771383,#a21010);
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 100%;
}


.mbb1 .mb1 .mb-title:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z' fill='%23fff'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E");
}
.mbb2 .mb2 .mb-title:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z' fill='%23fff'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E");
}
.mbb3 .mb3 .mb-title:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z' fill='%23fff'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E");
}
.mbb4 .mb4 .mb-title:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z' fill='%23fff'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E");
}
.mbb5 .mb5 .mb-title:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z' fill='%23fff'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E");
}
.mbb6 .mb6 .mb-title:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z' fill='%23fff'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E");
}
.mbb7 .mb7 .mb-title:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z' fill='%23fff'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E");
}

.mbb1 .mb1 .mb-title {
  color: #fff;
}
.mbb2 .mb2 .mb-title {
  color: #fff;
}
.mbb3 .mb3 .mb-title {
  color: #fff;
}
.mbb4 .mb4 .mb-title {
  color: #fff;
}
.mbb5 .mb5 .mb-title {
  color: #fff;
}
.mbb6 .mb6 .mb-title {
  color: #fff;
}
.mbb7 .mb7 .mb-title {
  color: #fff;
}
.mb-cont {
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  display: inline-block;
  white-space: normal;
  width: 120px;
  text-align: center;
}
::-webkit-scrollbar{
height: 10px;

}

.mbb1 .mb1 .mb-photo, .mbb2 .mb2 .mb-photo, .mbb3 .mb3 .mb-photo, .mbb4 .mb4 .mb-photo, .mbb5 .mb5 .mb-photo, .mbb6 .mb6 .mb-photo, .mbb7 .mb7 .mb-photo {
  transform: scale(1.1);
  filter: drop-shadow(0px 0px 6px #ffffff78) brightness(1.1);
}


.mb-photo {
  height: 154px;
  width: 98px;
background: url(https://portal.revrevdev.xyz/wp-content/uploads/cover.jpg);
background-size: cover;
filter: drop-shadow(2px 2px 2px transparent) brightness(1);
transition: .2s all;
}
.mb-content {
  height: 410px;
  margin-left: 10px;
  margin-right: 25px;
  opacity: 0;
  overflow: hidden;
  padding-left: 20px;
  padding-right: 6px;
  position: absolute;
  visibility: hidden;
  width: 98%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.mb-content-picture {
  background: url(https://portal.revrevdev.xyz/wp-content/uploads/cover.jpg);
  background-size: cover;
  height: 356px;
  width: 219px;
  transition: .2s all;
  margin: 30px 10px 11px -12px;
  flex-shrink: 0;

}
.mb-content-title {
  font-family: 'Josefin Sans';
  color: #fff;
  font-size: 28px;
  margin-top: 8px;
}
.mb-title {
  color: #cfcfcf;
  font-family: 'Josefin Sans';
  line-height: 20px;
  margin-top: 10px;
}
.mb-subtitle {
  font-size: 14px;
  margin-top: -2px;
  margin-bottom: 8px;
  color: #bbb;
}
.mb-content-content {
  color: #e2e2e2;
  column-count: 2;
  font-family: 'Nunito Regular';
  column-gap: 25px;
  margin-bottom: 8px;
  margin-right: 8px;
  margin-top: 8px;
  text-align: justify;
}
.mbb1 .mb-content.mb1 {
  animation: mbcontent .4s forwards;
}
.mbb2 .mb-content.mb2 {
  animation: mbcontent .4s forwards;
}
.mbb3 .mb-content.mb3 {
  animation: mbcontent .4s forwards;
}
.mbb4 .mb-content.mb4 {
  animation: mbcontent .4s forwards;
}
.mbb5 .mb-content.mb5 {
  animation: mbcontent .4s forwards;
}
.mbb6 .mb-content.mb6 {
  animation: mbcontent .4s forwards;
}
.mbb7 .mb-content.mb7 {
  animation: mbcontent .4s forwards;
}


@keyframes mbcontent {
  0% {
      visibility: hidden;
  }

  1% {
    visibility: visible;
    opacity: 0;
  }
  100% {
    visibility: visible;
      opacity: 1;
  }
}
.y-container {
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 8vh;
  padding-top: 8vh;
  position: relative;
  overflow: hidden;
}

.y-content-container {
z-index: 1;
margin-left: -10px;
}
.y-container:before {
background-image: linear-gradient(180deg,rgb(205 30 37/90%),rgb(14 12 253/90%));
content: '';
width: 100%;
height: 100%;
position: absolute;
z-index: 1;
}
.bg-renderer-pl {
background-size: 5%;
bottom: 0;
content: " ";
width: 600%;
height: 600%;
filter: blur(4px);
top: -250%;
left: -250%;
transform: rotate(-30deg);
position: absolute;
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/seamless.jpg);
z-index: 0;
}
.y-cont.y-second-el {
  display: flex;
  flex-direction: row-reverse;
}
.y-heading.second-h {
  text-align: end;
  margin-top: 3em;
}
.book-obj-cont {
transition: .5s all;
position: relative;
  z-index: 2;
}
.mockup-element:after {
content: "";
height: 174px;
margin-top: 431px;
position: absolute;
width: 420px;
z-index: -1;
background: url(https://portal.revrevdev.xyz/wp-content/uploads/book2mockup.png)}

.mockup-element {    position: relative;
display: flex;
height: 100%;
width: 100%;
justify-content: center;
z-index: 1;
transform: none;
}
.peek-inside-container {
height: 600px;
display: flex;
justify-content: center;
margin-bottom: 4em;
  margin-top: -3.5em;
  transform: none;
}

.modal-book-cont p {font-size: 0.35em;text-align: justify;
text-indent: 10px;margin-bottom: .3rem;font-family: Nunito Regular;
color: #470006;
padding-right:5px;
}
.modal-book-cont::-webkit-scrollbar {
  width: 4px;
}
.modal-book-cont {    margin-left: 0.3em;
  overflow-y: auto;
  padding-right: 0.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;}


  .modal-book-cont .y-preorderbtn {
    margin-bottom: 30px;
  }

.modal-book-title {font-family: 'JOSEFIN SANS';font-size: .8em;margin-top: 0.3em;color: #cc0213;}

.modal-book-title-text {font-family: 'JOSEFIN SANS';
  font-size: .6em;margin-top: .2em;margin-bottom: .1em;color: #cc0213;}



.book-section-content-cont {

}
.open + .y-preorderbtn {
  opacity: 0;
}
.y-preorderbtnsmall {
font-family: 'Poppins';
text-align: center;
font-size: 8px;
line-height: 10px;
padding: 4px 8px;
width: fit-content;
animation: gradient 6.5s ease infinite;
font-weight: bold;
filter: drop-shadow(0 0 0.75rem #00000080) saturate(1);
color: #fff;
cursor: pointer;
margin: 4px auto;
background: linear-gradient(286deg,#ff1d2d,#c41ab8);
border-radius: 100000000000000px;
-webkit-text-fill-color: initial;
transition: .3s all;
background-size: 200% 200%;
margin-top: 4px;
}

.book2 {
width: 900px;
height: 1400px;
position:relative;
text-align: center;
}

.book-cover {
position: absolute;
z-index:2;
width: 100%;
    transform: translateZ(1px) perspective(5000px);
    height: 96%;
    top: 2%;
transform-origin: 0 50%;
-webkit-transform-origin: 0 50%;
background: #111;
background-size:cover;
border-radius: 3px;
box-shadow: 
  inset 4px 1px 3px #ffffff60,
  inset 0 -1px 2px #00000080;
transition: all .5s ease-in-out;
-webkit-transition: all .5s ease-in-out;
}

.cover2 {
background: url('https://portal.revrevdev.xyz/wp-content/uploads/cover.jpg');
}


.book2 .book-cover {
background-size: 100% 100%;
transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform: perspective(5000px) rotateY(-24deg);
}


.effect {
width: 20px;
height: 100%;
margin-left: 10px;
border-left: 2px solid #00000010;
background-image: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
transition: all .5s ease;
}

.light {
width: 90%;
height: 100%;
position: absolute;
border-radius: 3px; 
background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%);
top: 0;
right:0;
opacity: .1;
transition: all .5s ease;
-webkit-transition: all .5s ease;
}
.darken-book {
  position: fixed;
  left: 0;
  transition: all .2s;
  width: 100vw;
  height: 103vh;
  top: 0;
  background: rgb(0 0 0/50%);
  opacity: 0;
  pointer-events: none;
}

.idle .close-preorder, .hover .close-preorder {
display: none;
}
.open .close-preorder {
top: 0;
font-size: 24px;
margin-right: 14px;
color: #fff;
}
.mockup-element:before {
content: '';
width: 150px;
position: absolute;
height: 138px;
background: url(https://portal.revrevdev.xyz/wp-content/uploads/lookinside.png);
z-index: 1;
margin-left: -400px;
margin-top: 75px;
transform: rotateZ(12deg);
animation: grow 5s cubic-bezier(0.42, 0.04, 0.58, 1) 2s infinite forwards;
}
@keyframes grow {
0% {
    transform: rotateZ(12deg) scale(1);
  
}
50% {
    transform:rotateZ(12deg) scale(1.1);
}
  100% {
    transform:rotateZ(12deg) scale(1);
}
}
@keyframes grow2 {
  0% {
      transform: rotateZ(35deg) scale(1);
    
  }
  50% {
      transform:rotateZ(35deg) scale(1.1);
  }
    100% {
      transform:rotateZ(35deg) scale(1);
  }
  }
.open .darken-book {

display: block;

transition: .5s all;
opacity: 1;
overflow: scroll;
}
div.open .book-cover.cover2 {
transform: perspective(5000px) rotateY(-118deg);
}
.open .peek-inner-cont {
height: 100%;
left: 0;
position: fixed;
top: 0;
width: 100%;
z-index: 9999;
}
.peek-inner-cont {
align-items: center;
display: flex;
justify-content: center;
transform: none;
}
.idle .book-obj-cont {
animation: bellshake 5s cubic-bezier(.55,.08,.19,.97) 2s infinite forwards;
}
.book2:hover { cursor:pointer; }

.book2:hover .book-cover {
transform: perspective(5000px) rotateY(-33deg);
-webkit-transform: perspective(5000px) rotateY(-33deg);
transform-style: preserve-3d;
-webkit-transform-style: preserve-3d;
box-shadow: 
  inset 4px 1px 3px #ffffff60,
  inset 0 -1px 2px #00000080,
  10px 0px 10px -5px #00000030
}
.book-cover:before {
content: '';
    transform: translateZ(-1px) ;
position: absolute;
z-index:1;
top:0;
left:0;
width: 100%;
height: 100%;
transform-origin: 0 50%;
-webkit-transform-origin: 0 50%;
background: url('https://portal.revrevdev.xyz/wp-content/uploads/covergradient.jpg');
background-size:cover;
border-radius: 3px;
box-shadow: 
  inset 4px 1px 3px #ffffff60,
  inset 0 -1px 2px #00000080;
transition: all .5s ease-in-out;
-webkit-transition: all .5s ease-in-out;
}
.book2:hover .effect {
width: 40px;
/** margin-left:13px;
opacity: 0.5; **/
}

.book2:hover .light {
opacity: 1;
width: 70%;
}

.book-inside{
  background: url(https://portal.revrevdev.xyz/wp-content/uploads/page.jpg);
  background-position: center;
  background-size: contain;
border: 1px solid #930202;
border-radius: 3px;
box-shadow: 10px 40px 40px -10px #00000030, inset -2px 0 0 #930202, inset -3px 0 0 #dbdbdb, inset -4px 0 0 #fefefe, inset -5px 0 0 #dbdbdb, inset -6px 0 0 #fefefe, inset -7px 0 0 #dbdbdb, inset -8px 0 0 #fefefe, inset -9px 0 0 #dbdbdb;
height: 96%;
position: relative;
top: 2%;
width: calc(100% - 2px);

}
@keyframes bellshake {
0% {
  transform: scale(.25) rotate(0);
}
2.5% {
  transform: scale(.25) rotate(3deg);
}
5% {
  transform: scale(.25) rotate(-3deg);
}
7.5% {
  transform: scale(.25) rotate(2deg);
}
10% {
  transform: scale(.25) rotate(-2deg);
}
12.5% {
  transform: scale(.25) rotate(1deg);
}
14.167% {
  transform: scale(.25) rotate(-1deg);
}
15.333% {
  transform: scale(.25) rotate(0.5deg);
}
16.667% {
  transform: scale(.25) rotate(0);
}
100% {
  transform: scale(.25) rotate(0);
}
}

.read-more-container {
padding: 1em;
max-width: 1300px;
COLOR: #470006;
margin:0 auto;
margin-top:80px;
}
.read-more-container span {
font-style: italic;
}
.click-to-read {
text-align: center;
font-weight: bold;
cursor: pointer;
-webkit-text-fill-color: initial;
position: relative;
}
.click-to-read:after {
content: "\2304";
position: absolute;
margin-top: -5px;
margin-left: 8px;
}
.click-to-read:before {
content: "\2304";
position: absolute;
margin-top: -5px;
margin-left: -16px;
}
.click-to-read-less {
  margin-top: 4em;
text-align: center;
font-weight: bold;
cursor: pointer;
-webkit-text-fill-color: initial;
}
.click-to-read-less:after {
content: "\2303";
position: absolute;
margin-top: 4px;
margin-left: 8px;
}
.click-to-read-less:before {
content: "\2303";
position: absolute;
margin-top: 4px;
margin-left: -16px;
}
.always-visible:after {
content: '';
position: absolute;
width: 100%;
height: 50px;
margin-top: -50px;
background: linear-gradient(180deg,#ffffff00 0,#fff);
}
.compare-title-container:after {
  width: 100%;
  position: absolute;
  content: '';
  height: 5px;
  bottom: 0;
  background: linear-gradient(90deg,#320ce3,#e00a2d 50%,#320ce3);
}
.more-to-read {
display: none;
}
.true .click-to-read {
display: none;
}

.true .more-to-read {
display: initial;
}

.true .always-visible:after {
background: none;
}

.always-visible > p > ol {
margin: 0;
}

.always-visible > p:last-child {
margin: 0;
}
.read-more-title {
font-size: 46px;
text-align: center;
font-family: Josefin Sans;
}
.read-more-title em {
  display: table;
  margin: 0 auto;
}
div.read-more-title  span {
  font-style: normal;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);
  font-family: Josefin Sans;
  text-align: center;
}
.read-more-content {
  margin: 12px auto;
  max-width: 800px;
  padding: 0.5em;
  color: #512E8A;
  font-family: 'Nunito Regular';
}

.preorder-book-section {
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
}

.preorder-btn-container .register-form.col-md-6 {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  max-width: 100%;
}

.preorder-book-section {
}

.preorder-book-cont {
display: flex;
flex-direction: column;
width: 40%;
}

.preorder-book-picture {
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/mockup-2.png);
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
height: 40vh;
filter: drop-shadow(-2px 3px 8px #00000080);
width: 100%;
}

.preorder-btn-container .content-section {
display: flex;
justify-content: flex-end;
margin-top: -20vh;
display: none;
}

.preorder-btn-container .pay-section {
width: 100%;
display: flex;
  flex-direction: column-reverse;
}
.preorder-book-price {
color: #fff;
margin-top: -30px;
font-weight: bold;
font-size: 48px;
background-repeat: no-repeat;
background-position: center 0px;
line-height: 96px;
padding-top: 7px;
font-family: 'Josefin Sans';
filter: drop-shadow(0 0 0.75rem #00000080);
}
.payment h3 {    margin-bottom: 20px;font-family: 'Nunito Bold';padding-left: 1em;padding-right: 1em;color: #f1f1f1;margin: 0 auto;max-width: 1200px;font-size: 1.3em;}

.payment-area-cont {    padding-bottom: 2.5em;display: flex;width: 100%;margin: 0 auto;max-width: 1300px;align-items: center;     margin-bottom: auto;}

.payment-area-cont > div {width: 50%;}

.preorder-book-image {
  background: url(https://portal.revrevdev.xyz/wp-content/uploads/checkout-mockup.png);
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
h3.bonus-header {font-family: 'Josefin Sans';text-transform: uppercase;font-size: 1.3em;margin-top: .4em;line-height: 1.8em;margin-bottom: 1em;}

.bonus-header span {background: linear-gradient(#ed1c24,#bc2558);
    border-radius: 0.1em;
    color: #fff;
    padding: 0.4em 0.2em 0.2em;filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 3px rgba(0, 0, 0, 0.14)) drop-shadow(0 1px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));}

.bonus-flag h4:before {border: 1.25em solid #e51e2d;
    content: "";
    position: absolute;
    top: 0;border-right: none;
    border-left-color: transparent;
    left: -1.25em;border-right-color: initial;
    border-left-color: transparent;}

.bonus-flag h4 {
    
    background: #e51e2d;
    color: #fcfcf9;
    display: inline-block;
    
    font-family: 'Josefin Sans';font-size: 1.5em;
    letter-spacing: .06em;
    line-height: 2.5em;
    margin: 0 auto 0.5em;
    padding: 0 1em;
    position: relative;
    text-transform: uppercase;filter: drop-shadow(0 4px 5px rgba(0, 0, 0, 0.02))
          drop-shadow(0 1px 5px rgba(0, 0, 0, 0.04))
          drop-shadow(0 2px 2px rgba(0, 0, 0, 0.12))
          drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1));
;;
;;text-shadow: 3px 2px 0px rgb(0 0 0 / 30%);}

.bonus-flag {text-align: center;margin-bottom: 1em;}

.bonus-flag h4:after {content: '';border: 1.25em solid #e51e2d;
    content: "";
    position: absolute;
    top: 0;border-left: none;
    border-right-color: transparent;
    right: -1.25em;border-left-color: initial;
    }

.bonus-price {display: flex;justify-content: center;}

.bonus-preprice {background-position: center 0;
background-repeat: no-repeat;
color: #fff;
filter: drop-shadow(0 0 0.75rem #00000080);
font-family: 'Nunito Regular';
font-size: 1.4em;
margin-left: -111px;margin-right: 22px;



padding-top: 7px;}

.bonus-preprice:after {content: '';
position: absolute;
width: 100%;
height: 100%;
left: 0;
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/slashs.png);
background-size: contain;
background-repeat: no-repeat;
background-position: center;
margin-top: -17px;
opacity: 0.7;transform: rotate(17deg);}

.bonus-realprice {color: #fff;
margin-top: -30px;
font-weight: bold;
font-size: 48px;
background-repeat: no-repeat;
background-position: center 0px;
line-height: 96px;
padding-top: 7px;
font-family: 'NUNITO BOLD';
text-underline-offset: 6px;text-decoration: underline;filter: drop-shadow(0 0 0.75rem #00000080);text-decoration-color: #e51e2d;}
.preorder-btn-container .powered-by-stripe-final {
margin-left: 1px;
}
.preorder-btn-container ul {
width: fit-content;
margin: 0 auto;
}

.preorder-btn-container h4.mb-2 {
display: initial;
text-shadow: none;
font-family: 'Josefin Sans';
text-transform: uppercase;
font-style: normal;
color: #fff;
}
.preorder-cont-section li {
color: #d8d8d8;
text-align: left;
}
.Typewriter {
font-family: 'Josefin Sans';
color: #e80a24;
font-size: 3.4VW;
white-space: nowrap;
margin-top: 16px;
height: 40px;
}

span.typewrap1:before {
content:'FEAR OF '

}
span.typewrap2:before {
  content:'FEAR OF '
  
  }
  span.typewrap3:before {
    content:'LACK OF '
    
    }




span.typewrap4:before {
content:'I Face '

}

span.typewrap5:before {
content:'I Gain '
}
.j-fourth .j-transform {
margin-top: -34px;
}
.close-preorder {
cursor: pointer;
color: #2e2e2e;
text-align: end;
margin-right: 14px;
padding: 4px;
width: fit-content;
position: fixed;
top: 0;
right: 0;
z-index: 9999;
}

.book-subheading {
  color: #dbdbdb;
  font-family: 'Nunito Bold';
  font-size: 28px;
  margin-top: 8px;
  padding-left: 1em;
  text-align: center;
  padding-right: calc(1em + 10px);
}

.book-maintext {
  color: #dbdbdb;
  font-size: 18px;
  margin: 26px auto;
  font-family: 'Nunito Regular';
  max-width: 600px;
  text-align: center;
  padding-left: 1em;
  padding-right: calc(1em + 10px);
}
.mb-222 {
color: #fff;
margin-bottom: 40px;
font-size: 40px;
font-family: Josefin Sans;
font-style: normal;
text-shadow: none;
text-transform: uppercase;
}
.preorder-cont-section {
width: 60%;
margin-right: 28px;
}
.archtype-title {
color: #fc1d36;
font-family: Josefin Sans;
font-size: 58px;
font-weight: 700;
padding-right: 1em;
padding-left: 1em;
text-align: center;
margin-bottom:20px;
margin-top: 120px;
}
.subheader-title {
font-family: "Nunito Bold";
text-align: center;
font-size: 1.7rem;
color: #512E8A;
margin: 0 2em;
}


.show-me-title {
color: #fc1d36;
font-family: Josefin Sans;
font-size: 54px;
margin-left: 0.5em;
margin-right: 0.5em;
font-weight: 700;
text-align: center;
margin-top: 80px;
padding-right: 0.3em;
}

.show-me-grid {
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 0 auto;

max-width: 720px;
margin-bottom: 60px;
font-size: 18px;
padding-left: 14px;
}

.show-me-item {
  color: #512E8A;
  font-size: 20px;
  padding: 12px 30px 12px 20px;
  position: relative;
  width: 50%;
  font-family: 'Nunito Bold';
}

.show-me-item:before {
content: '';
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='Layer_1' x='0px' y='0px' viewBox='0 0 32 32' style='enable-background:new 0 0 32 32;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23fb1d38;%7D .st1%7Bfill:%23FFFFFF;%7D %3C/style%3E%3Ccircle class='st0' cx='16' cy='15.9' r='15.8'%3E%3C/circle%3E%3Cpolygon class='st1' points='23,9 13.2,18.8 9,14.5 6.4,17 10.7,21.3 13.2,23.8 15.8,21.3 25.6,11.5 '%3E%3C/polygon%3E%3C/svg%3E ");
position: absolute;
width: 16px;
height: 16px;
margin-left: -28px;
margin-top: 8px;
}
.hello-list-item.h-second {margin-top: 80px;}

.hello-list-item.h-third {
  margin-top: 160px;
}

input.bottom-section-form-name {
background: #ffffff0f;
color: #fff;

}

form#bottom-opt-form {
max-width: 800px;
margin: 0 auto;
padding: 20px;
margin-bottom: 25vh;
padding-right: 30px;
position: relative;
    z-index: 3;
}
input.bottom-section-form-name:focus {
border-color: #b2222c;
}


#bottom-opt-form label {
display: initial;
color: #b3b3b3;
margin-left: 8px;
}
.j-first .j-transform {
  margin-top: -30%;
}

.j-first .j-image {
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/lifestyle.png);
}

.j-second .j-image {
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/mindset.png);
}
.j-third .j-image {
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/journey.png);
}
.j-fourth .j-image {
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/114.svg);
}

.j-fifth .j-image {
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/57.svg);
}

div#shows-me-container {
padding-bottom: 120px;
padding-top: 100px;
margin-top: 150px;
background-color: rgb(249, 249, 252);
}

.vid-section-cta {
color: #fff;
font-family: Josefin Sans;
font-size: 2.1rem;
margin-top: 100px;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 20px;
text-align: center;
}

.mb-right-arrow {
  margin-left: 20px;
width:8%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
transform: scaleX(-1);
cursor: pointer;
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='451.847px' height='451.847px' viewBox='0 0 451.847 451.847' style='enable-background:new 0 0 451.847 451.847;' xml:space='preserve'%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient id='logo-gradient' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cc22ff'%3E%3Canimate attributeName='stop-color' values='%23cc22ff; %23ff2233; %23cc22ff' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' values='%23ff2233; %23cc22ff; %23ff2233' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23logo-gradient)' d='M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
}
button.heroprev {background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: initial;cursor: pointer;
  
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='451.847px' height='451.847px' viewBox='0 0 451.847 451.847' style='enable-background:new 0 0 451.847 451.847;' xml:space='preserve'%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient id='logo-gradient' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cc22ff'%3E%3Canimate attributeName='stop-color' values='%23cc22ff; %23ff2233; %23cc22ff' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' values='%23ff2233; %23cc22ff; %23ff2233' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23logo-gradient)' d='M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");padding: 0;
  width: 70px;}

button.heronext {background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform: scaleX(-1);background-color: initial;cursor: pointer;
  
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='451.847px' height='451.847px' viewBox='0 0 451.847 451.847' style='enable-background:new 0 0 451.847 451.847;' xml:space='preserve'%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient id='logo-gradient' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cc22ff'%3E%3Canimate attributeName='stop-color' values='%23cc22ff; %23ff2233; %23cc22ff' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' values='%23ff2233; %23cc22ff; %23ff2233' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23logo-gradient)' d='M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");padding: 0;
  width: 70px;}
.mb-left-arrow {
  margin-right: 20px;
width:8%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
cursor: pointer;
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='451.847px' height='451.847px' viewBox='0 0 451.847 451.847' style='enable-background:new 0 0 451.847 451.847;' xml:space='preserve'%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient id='logo-gradient' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cc22ff'%3E%3Canimate attributeName='stop-color' values='%23cc22ff; %23ff2233; %23cc22ff' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%2301FF89'%3E%3Canimate attributeName='stop-color' values='%23ff2233; %23cc22ff; %23ff2233' dur='5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23logo-gradient)' d='M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
}

.mb-right-section {
position: relative;
}

.mb-content-pretitle {
  color: #d9d9d9;
  font-size: 18px;
  margin-bottom: -10px;
  font-family: 'Nunito Regular';
  margin-bottom: 0px;
  margin-top: 10px;
}

.mb-content-posttitle {
  color: #f0f0f0;
  font-family: 'Nunito Bold';
  font-size: 22px;
  margin-top: -4px;
}

@keyframes gradient {
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
}
div.margin-relative {
	margin-bottom: auto;
position: relative;

}

div.fixed {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%,-50%);
    margin-bottom: 0;
}
div.nomargin-relative {
	margin-bottom: 0;
position: relative;

}

.book-section
{
  /* align-items: center;
  display: flex;
  justify-content: center;
  perspective: 1000px;
  position: relative;
  transform: none;
  margin-bottom: auto; */

  position: sticky;
  top: calc(50% - 270px);
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  transform-style: preserve-3d;

}
.book-section .book
{
transform-style: preserve-3d;
box-shadow: 20px 20px 20px rgb(0 0 0 / 20%);
position: relative;
aspect-ratio: 177 / 283;
height: 60vh;
max-height: 710px;
min-height: 490px;
}
.book-section .book:hover
{
transform: rotateY(35deg);
box-shadow: 0px 20px 20px rgba(0 0 0 / 20%);
}

.book-section .book:before
{
content: '';
position: absolute;
width: 60px;
height: 100%;
margin-left: 1px;
transform-origin: left;
background: url(https://portal.revrevdev.xyz/wp-content/uploads/side2.jpg);
background-position: center;
transform: rotateY(90deg);
background-size: cover;
}
.book-section .book:after
{
content: '';
position: absolute;
width: 100%;
height: 100%;
transform-origin: center;
background: url(https://portal.revrevdev.xyz/wp-content/uploads/back2.jpg);
background-position: center;
transform: rotateY(180deg) translateZ(60px);
background-size: contain;
}
.book-section .book img
{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
}

.book-section-cont {
/* height: 200vh;
display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 20vh;
  transform: none; */
  height: 200vh;  
}

.compare-today-subtext:after {
content: '';
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='198' height='198'%3E%3Ccircle fill='%23e00a2d' cx='99' cy='99' r='75'/%3E%3C/svg%3E");
width: 12px;
background-size: contain;
height: 12px;
margin-left: 10px;
margin-top: 11px;
position: absolute;
top: 0;
}
.compare-tomorrow-subtext span {display: table;background-image: linear-gradient(270deg,#320ce3 50%,#e00a2d);-webkit-text-fill-color: transparent;
  -webkit-background-clip: text;position: relative;
  width: 500px;
  max-width: 500px;margin-top: -6px;}

.compare-today-subtext span {display: table;
  background-image: linear-gradient(90deg,#320ce3 50%,#e00a2d);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  position: relative;
  width: 500px;
  max-width: 500px;margin-top: -6px;}

.compare-tomorrow-subtext:before {
content: '';
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='198' height='198'%3E%3Ccircle fill='%23e00a2d' cx='99' cy='99' r='75'/%3E%3C/svg%3E");
width: 12px;
background-size: contain;
height: 12px;
margin-left: -20px;
margin-top: 11px;
position: absolute;
top: 0;
}

.vid-section-cta span {
font-style: italic;
margin-left: 4px;
margin-right: 8px;
}

.y-heading span {
font-style: italic;
}

.compare-title-1>span>span {
font-style: italic;

}

.compare-title-2>span>span {
font-style: italic;
}

.show-me-title span {
  font-style: normal;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);
}
div.archtype-title span {
  font-style: normal;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(#ee091c,#850b90);
}

.minib-r-cont {
padding-top: 10px;

}

.preorder-book-oldprice:after {
content: '';
position: absolute;
width: 100%;
height: 100%;
left: 0;
background-image: url(https://portal.revrevdev.xyz/wp-content/uploads/slashs.png);
background-size: contain;
background-repeat: no-repeat;
background-position: center;
margin-top: -5px;
opacity: 0.7;
}

.preorder-book-price-cont {
display: flex;
justify-content: center;
}
.preorder-book-oldprice {
background-position: center 0;
background-repeat: no-repeat;
color: #fff;
filter: drop-shadow(0 0 0.75rem #00000080);
font-family: Josefin Sans;
font-size: 28px;
margin-right: 12px;
font-weight: 700;
line-height: 96px;
margin-top: -30px;
padding-top: 7px;
}

.name-email-group {
display: flex;
flex-direction: row;
justify-content: space-between;
}

.preorder-btn-container #payment-form  .name-email-group input.form-control.form-control {
width: 49%;
}

.name-email-group > div {
width: 49%;
}

.preorder-btn-container #payment-form .name-email-group > div > input.form-control.form-control {
width: 100%;
}
.buttons-addtocart {
display: flex;
margin-top: 2em;
}

navbar > navmain .nav a.dropdown {padding-left: 20px;padding-right: 80px;}

.render-tab {
font-family: 'Nunito Regular';
}
.success-true button#submit {
  display: none;
}
.success-true .paybtn-cont {
  display: none;
}
.product-short-desc {
font-family: 'Nunito Regular';
margin-top: 2em;
  margin-bottom: 4em;
}
button.image-gallery-thumbnail.active {
border: 4px solid #fc1d34;
border-radius: 0;
}
.attr-cont {
display: flex;
margin-top: 2em;
padding-bottom: 2em;
  border-bottom: 1px solid #dbdbdb;
  flex-direction: column;
}
.node-attr-cont {
  display: flex;
  margin-bottom: 1.3em;
}
.attr-option.attr-3xl:after {
  content: '3XL';
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  text-align: center;
  line-height: 27px;
}
.attr-option.attr-2xl:after {
  content: '2XL';
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  line-height: 27px;
  text-align: center;
}
.attr-option.attr-xl:after {
  content: 'XL';
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  text-align: center;
  line-height: 27px;
}
.attr-option.attr-s:after {
  content: 'S';
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  text-align: center;
  line-height: 27px;
}
.attr-option.attr-m:after {
  content: 'M';
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  text-align: center;
  line-height: 27px;
}
.attr-option.attr-l:after {
  content: 'L';
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  text-align: center;
  line-height: 27px;
}
.product-pricer {
display: inline-block;
padding-bottom: 0.5em;
padding-top: 1em;
border-top: 2px solid #dbdbdb;
}
.product-pricer h3 {
font-size: 1.7rem;
font-family: 'Nunito Bold';
}
.rating-cont {
padding-bottom: 1.5em;
}


.t-shirts > .all-products-cont > .t-shirts {display: block;}

.mini-product-cont {display: none;}

.all .mini-product-cont {display: block;}

.hoodies > .all-products-cont > .hoodies {display: block;}
.tank-tops > .all-products-cont > .tank-tops {display: block;}
.long-sleeves > .all-products-cont > .long-sleeves {display: block;}
.polos > .all-products-cont > .polos {display: block;}
.mens > .all-products-cont > .mens {display: block;}
.womens > .all-products-cont > .womens {display: block;}

.cat-gallery-cont {max-width: 1000px;
  width: 100%;
  margin: 0 auto;}
  div[data-testid="use-spring-carousel-wrapper"] {
    width: 80%!important;
    margin-left: auto;
    margin-right: auto;
}
.tag-cont {display: flex;
  flex-wrap: wrap;}
.t-shirts .ind-tag.tag-t-shirts {border-color: #512e8a;border-width: 2px;font-weight: bold;}
.all .ind-tag.tag-all {border-color: #512e8a;border-width: 2px;font-weight: bold;}
.hoodies .ind-tag.tag-hoodies {border-color: #512e8a;border-width: 2px;font-weight: bold;}
.tank-tops .ind-tag.tag-tanktops {border-color: #512e8a;border-width: 2px;font-weight: bold;}
.long-sleeves .ind-tag.tag-longsleeves {border-color: #512e8a;border-width: 2px;font-weight: bold;}
.polos .ind-tag.tag-polos {border-color: #512e8a;border-width: 2px;font-weight: bold;}
.mens .ind-tag.tag-mens {border-color: #512e8a;border-width: 2px;font-weight: bold;}
.womens .ind-tag.tag-womens {border-color: #512e8a;border-width: 2px;font-weight: bold;}
h4.featured-subheader {
  font-family: 'Nunito Bold';
  text-align: center;
  color: #512e8a;
  margin-bottom: 3em;
  font-size: 1.8em;
}
.ind-tag {    color: #512e8a;margin-right: 8px;
  margin-right: 8px;
  margin-top: 8px;
  border: 1px solid #bdbdbd;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 4px;
  font-family: 'Nunito Regular';
  cursor: pointer;}
  h1.cat-page-header span {
    animation: none;
    font-size: 1.8rem;
    font-family: 'Nunito Bold';
    text-transform: none;
    max-width: 700px;
    padding-top: 1em;
    margin: 0;
}
.all-products-cont {display: flex;flex-wrap: wrap; opacity: 0;
  animation: .2s newput .1s forwards;}
h1.cat-page-header {
  margin-top: 4em;
  margin-top: 1.4em;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    background-image: linear-gradient(90deg, rgba(238,9,28,0.7) 0%, rgba(194,10,81,.7) 100%), url(https://portal.revrevdev.xyz/wp-content/uploads/2022/06/shirtbg.jpg);
    background-size: cover;
    background-position: center;
    margin-left: -70px;
    margin-right: -70px;
    font-family: 'Josefin Sans';
    text-transform: uppercase;
    padding-left: 70px;
    padding-right: 70px;
    color: #fff;
    font-size: 2.8em;
}

.mini-product-cont {padding: 10px;width: 33.33%;    cursor: pointer;margin-bottom: 1.4em;}

.you-might-like-cont {display: flex;justify-content: space-between;margin-top: 5em;margin-bottom: 5em;}

.you-might-like-cont h4 {position: absolute;margin-top: -1em;}

.mini-product-cont img {width: 90%;margin-left: 5%;     pointer-events: none;}

.mini-title {font-size: 24px;font-family: 'Nunito Bold';pointer-events: none;color: #512e8a;}
.cart-btn-cont {display: flex;justify-content: space-evenly;}
.mini-product-cont > div {
  pointer-events: none;
}
.cart-btn-cont > button {background: linear-gradient(206deg,#ff1d2d,#c41ab8);color: #fff;width: 40%;border-radius: 0;}
.mini-price {font-family: Nunito Regular;font-size: 18px;}
.star-select {width: 24px;
height: 24px;
margin-top: auto;

margin-left: -4px;background-repeat: no-repeat;
background-position: center;background-size: 76%;background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23f23' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");}
.star-no-select {width: 24px;
  height: 24px;
  margin-top: auto;
  
  margin-left: -4px;background-repeat: no-repeat;
  background-position: center;background-size: 76%;background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");}

  .star-half-select {width: 24px;
    height: 24px;
    margin-top: auto;
    
    margin-left: -4px;background-repeat: no-repeat;
    background-position: center;background-size: 76%;background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126.73 126.73'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23f23;%7D.cls-2%7Bfill:%23e3e3e3;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M63.36,3.16a5.92,5.92,0,0,0-5.65,3.75l-12.4,30.3a5.91,5.91,0,0,1-5,3.7l-34.9,3.3A6,6,0,0,0,2,54.71l26.3,23.1a6,6,0,0,1,1.9,5.9l-7.9,32.4a6,6,0,0,0,8.9,6.6l29.1-17.1a6.07,6.07,0,0,1,3-.82'/%3E%3Cpath class='cls-2' d='M63.36,104.79a6.07,6.07,0,0,1,3,.82l29.11,17.1a6,6,0,0,0,8.89-6.6l-7.8-32.4a6,6,0,0,1,1.9-5.9l26.3-23.1a6.11,6.11,0,0,0-3.6-10.5l-34.89-3.3a6,6,0,0,1-5-3.7L68.82,6.91a5.9,5.9,0,0,0-5.46-3.75'/%3E%3C/svg%3E");}
  


    
.rating-cont {display: flex;}
.node-name {
text-transform: uppercase;
font-size: 15px;
color: #787878;
font-family: Nunito Bold;
margin-right: 10px;
line-height: 35px;
}
.attr-option.attr-navy {
  background: #000080;
}
.attr-option.attr-black {
  background: #000;
}
.review-total-cont {
display: flex;
}

.review-total-text {
margin-left: 6px;
font-size: 14px;
margin-top: 2px;
color: #666;
}

button.addcart-btn {
margin: 0 0.625rem 0.375rem 0;
background: linear-gradient(206deg,#ff1d2d,#c41ab8);
color: #fff;
display: inline-block;
text-align: center;
text-transform: uppercase;
font-size: 1em;
letter-spacing: -0.015em;
font-weight: 700;
line-height: 2rem;
border: none;
padding: 0.5em 2em;
border-radius: 0;
margin-left: 1em;
}

.gallery-info-cont {
display: flex;
margin-top: 7em;
}
.product-info-cont h2 {
font-size: 2.3rem;
font-family: "Josefin Sans";
margin: 0;
}
.product-container {
margin: 0 auto;
max-width: 1300px;
}

.gallery-cont {
width: 50%;
}

.product-info-cont {
width: 50%;
margin-left: 3em;
}

.searc-former {
background: #fbf8ff;
padding-top: 3em;
padding-bottom: 3em;
}
.search-bar-title {
background: linear-gradient(183deg,#ff1d2d,#c41a72);
}

.search-icon {
  background-image: url("data:image/svg+xml,%3Csvg id='Capa_1' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 489.71 489.71'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M457,427.6,351.22,321.75a177.22,177.22,0,0,0,40.11-112.39c0-98.1-79.79-178-178-178s-177.87,79.87-177.87,178,79.78,177.87,178,177.87a177.35,177.35,0,0,0,112.39-40.11L431.61,452.89a17.64,17.64,0,0,0,25.46,0A17.36,17.36,0,0,0,457,427.6ZM71,209.36A142.48,142.48,0,0,1,213.36,67c78.57,0,142.48,63.91,142.48,142.47S291.93,351.92,213.36,351.92,71,287.92,71,209.36Z'/%3E%3C/svg%3E");
  width: 26px;
  height: 26px;
}
input#header-search {
width: 90%;
margin: 0 auto;
display: block;
background: linear-gradient(302deg,rgba(255,255,255,.12),rgba(255,255,255,0)), url("data:image/svg+xml,%3Csvg id='Capa_1' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 489.71 489.71'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23e71c49;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M457,427.6,351.22,321.75a177.22,177.22,0,0,0,40.11-112.39c0-98.1-79.79-178-178-178s-177.87,79.87-177.87,178,79.78,177.87,178,177.87a177.35,177.35,0,0,0,112.39-40.11L431.61,452.89a17.64,17.64,0,0,0,25.46,0A17.36,17.36,0,0,0,457,427.6ZM71,209.36A142.48,142.48,0,0,1,213.36,67c78.57,0,142.48,63.91,142.48,142.47S291.93,351.92,213.36,351.92,71,287.92,71,209.36Z'/%3E%3C/svg%3E");
border: 3px solid #e71c49;
border-radius: 0;
background-repeat: no-repeat;
background-position: right;
color: #393939;
flex: none;
height: 2.3em;
font-size: 1.2em;
margin-bottom: 4px;
padding: 0 10px;
}
.search-bar-text {
margin-left: 20px;
font-size: 24px;
font-family: "Nunito Bold";
margin-top: 6px;
margin-bottom: 6px;
color: #fff;
text-align: center;
}

.search-bar-close {
line-height: 36px;
cursor: pointer;
padding: 6px;
padding-left: 20px;
padding-right: 20px;
color: #fff;
position: absolute;
    top: 0;
    right: 0;
}
.search-btn-container.search-true {
backdrop-filter: blur(3px) brightness(.5) contrast(110%);
height: 100%;
left: 0;
position: fixed;
top: 0;
width: 100%;
display: flex;
z-index: 9999;
align-items: flex-start;
}
.search-outer-cont {
display: flex;
flex-direction: column;
width: 80%;
max-width: 600px;
height: fit-content;
margin: 0 auto;
border-top-left-radius: 8px;
  border-top-right-radius: 8px;
margin-top: 10%;
}
.search-section-results> p {
margin-top: -30px;
text-align: center;
}

form.search-former {
padding-top: 3em;
padding-bottom: 3em;
background: #f6f4fa;
}
.product-tabs-cont {
display: flex;
font-size: 15px;
text-transform: uppercase;
flex-wrap: wrap;
color: #787878;
border-bottom: 1px solid #dbdbdb;
font-family: "Nunito Bold";
margin-bottom: 2em;
}
.product-tabs-cont > div:hover {
border-bottom: 2px solid #000;
margin-bottom: 0px;
}
.product-tabs-cont > div {
margin-left: 2em;
margin-top: 1em;
cursor: pointer;
margin-bottom: 2px;
}
.product-tabs-cont.idx-0 > div:nth-child(1) {
color: #000;
border-bottom: 2px solid #000;
margin-bottom: 0px;
}
.product-tabs-cont.idx-1 > div:nth-child(2) {
color: #000;
border-bottom: 2px solid #000;
margin-bottom: 0px;
}
.product-tabs-cont.idx-2 > div:nth-child(3) {
color: #000;
border-bottom: 2px solid #000;
margin-bottom: 0px;
}
.product-tabs-cont.idx-3 > div:nth-child(4) {
color: #000;
border-bottom: 2px solid #000;
margin-bottom: 0px;
}

.b-bt
{
display: flex;
justify-content: center;
align-items: center;
transform-style: preserve-3d;
perspective: 1000px;
}
.b-bt .book-bt
{
position: relative;
width: 383px;
height: 567px;
box-shadow: 20px 20px 20px rgba(0,0,0,0.2);
transform-style: preserve-3d;
transition: 0.5s;
}
.b-bt .book-bt:hover
{
transform: rotateY(35deg);
box-shadow: 0px 20px 20px rgba(0,0,0,0.2);
}
.b-bt .book-bt:active
{
transform: rotateY(180deg);
}
.b-bt .book-bt:before
{
content: '';
position: absolute;
width: 60px;
height: 100%;
transform-origin: left;
background: url(https://portal.revrevdev.xyz/wp-content/uploads/side.jpg);
background-position: center;
transform: rotateY(90deg);
}
.b-bt .book-bt:after
{
content: '';
position: absolute;
width: 100%;
height: 100%;
transform-origin: center;
background: url(https://portal.revrevdev.xyz/wp-content/uploads/back.jpg);
background-position: center;
transform: rotateY(180deg) translateZ(60px);
}
.b-bt .book-bt img
{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
}
