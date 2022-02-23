import * as React from "react";
import { ReactNode } from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
          <Helmet>
        <html lang="en" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
      </Helmet>
      <title>revrevdev</title>

      <main>{children}</main>
      
      import * as React from "react";
import { ReactNode } from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
          <Helmet>
        <html lang="en" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
      </Helmet>
      <title>revrevdev</title>

      <main>{children}</main>
      <div id='say-hello-container'>
    <div class="say-hello-bg"></div>
  </div>

  <div id='say-hello-list-container'>
    <div class="hello-list-item h-first">
      <div class="hello-list-title">
        <div class="hello-list-number-cont">
        <div class="hello-list-number">1</div>
        </div>
        <div class="hello-list-heading">Lorum Ipsum</div>
      </div>
        <div class="hello-list-subheading">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div class="hello-list-item h-second">
      <div class="hello-list-title">
        <div class="hello-list-number-cont">
        <div class="hello-list-number">2</div>
        </div>
        <div class="hello-list-heading">Lorum Ipsum</div>
      </div>
        <div class="hello-list-subheading">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div class="hello-list-item h-third">
      <div class="hello-list-title">
        <div class="hello-list-number-cont">
        <div class="hello-list-number">3</div>
      </div>
        <div class="hello-list-heading">Lorum Ipsum</div>
      </div>
        <div class="hello-list-subheading">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
  </div>

  <div id='jounrey-list-container'>
    <div class="journey-item j-first">
        <div class="j-text">
            <div class="j-heading">The Entrepreneurial</div>
             <div class="j-subheading">Lifestyle</div>
             <div class="j-transform">is <span>Lorum.</span><span>Ipsum.</span><span>Dolor.</span></div>
        </div>   
        <div class="j-image-cont">
        <div class="j-image"></div>
        </div>  
    </div>
    <div class="journey-item j-second">
        <div class="j-text">
            <div class="j-heading">The Entrepreneurial</div>
             <div class="j-subheading">Mindset</div>
             <div class="j-transform">is <span>Lorum.</span><span>Ipsum.</span><span>Dolor.</span></div>
        </div>   
        <div class="j-image-cont">
          <div class="j-image"></div>
          </div>  
    </div>
    <div class="journey-item j-third">
        <div class="j-text">
            <div class="j-heading">The Entrepreneurial</div>
             <div class="j-subheading">Journey</div>
             <div class="j-transform">is <span>Lorum.</span><span>Ipsum.</span><span>Dolor.</span></div>
        </div>   
        <div class="j-image-cont">
          <div class="j-image"></div>
          </div>  
    </div>
    <div class="journey-item j-fourth">
        <div class="j-text">
            <div class="j-heading">The Entrepreneurial</div>
             <div class="j-subheading">Reward</div>
             <div class="j-transform">is <span>Lorum.</span><span>Ipsum.</span><span>Dolor.</span></div>
        </div>   
        <div class="j-image-cont">
          <div class="j-image"></div>
          </div>  
    </div>
  </div>

  <div id='why-container'>
    <div class="y-heading">Why I wrote this book?</div>
    <div class="y-cont">
      <div class="y-text-cont">
        <div class="y-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div class="y-signature"></div>
        <div class="y-cta">Order your copy now</div>
        <div class="y-preorderbtn">Pre-Order</div>
      </div>  
      <div class="y-image-cont"></div>
    </div>
  </div>  

  <div id='what-container'>
    <div class="w-heading">What's inside?</div>
    <div class="w-list">
      <div class="w-list-item">
        <div class="w-list-title">0. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">1. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">2. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">3. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">4. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">5. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">6. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">7. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">8. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">9. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">10. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="w-list-item">
        <div class="w-list-title">11. <span>Lorum Ipsum</span></div>
        <div class="w-list-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
    </div>
  </div>

  <div id='book-container'>
    <div class="book-spine"></div>
    <div class="book-heading">Your revival of revenue begins...</div>
    <div class="book-heading-change-cont">
    <div class="book-heading-change"><span>Here.</span><span>Today.</span><span>Right Now.</span></div>
      </div>  
    <div class="book-cta">Order your copy now</div>
    <div class="book-preorderbtn">Pre-Order</div>
    <div class="book-render"></div>
  </div>

  <div id='need-container'>
    <div class='need-content-container'>
    <div class="need-heading">I need a revival of revenue because...</div>
    <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
      </ul>
      <div class="need-cta">Get my book to start your Entrepreneurial Journey</div>
      <div class="need-preorderbtn">Pre-Order</div>
    </div>
  </div>

  <div id='compare-container'>
    <div class='compare-title-container'>
        <div class="compare-title-1">My Life <span>Today</span></div>
        <div class="compare-title-vs">VS</div>
        <div class="compare-title-2">My Life <span>Tomorrow</span></div>
    </div>

    <div class='compare-text-container'>
        <div class='compare-today-container'>
            <div class="compare-today-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-today-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-today-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-today-subtext">Lorem ipsum dolor sit amet</div>
        </div>
        <div class='compare-tomorrow-container'>
            <div class="compare-tomorrow-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-tomorrow-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-tomorrow-subtext">Lorem ipsum dolor sit amet</div>
            <div class="compare-tomorrow-subtext">Lorem ipsum dolor sit amet</div>
        </div>
    </div>

  </div>
    </>
  );
}

    </>
  );
}
