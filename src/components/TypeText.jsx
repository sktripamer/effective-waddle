import React from 'react';
import { useState, useRef } from "react";
import Typewriter from 'typewriter-effect';

export default function TypeText() {
    const [readmorej1, setReadmorej1] = useState(false)
    const [readmorej2, setReadmorej2] = useState(false)
    const [readmorej3, setReadmorej3] = useState(false)
    const j1Ref = useRef(null)
    const j2Ref = useRef(null)
    const j3Ref = useRef(null)
    const setj1 = () => {
      setReadmorej1(true)
    }
    const setj2 = () => {
      setReadmorej2(true)
    }
    const setj3 = () => {
      setReadmorej3(true)
    }
    const setReadLessj1 = () => {
      setReadmorej1(false)
      j1Ref.current.scrollIntoView({block: 'center'})
    }
    const setReadLessj2 = () => {
      setReadmorej2(false)
      j2Ref.current.scrollIntoView({block: 'center'})
    }
    const setReadLessj3 = () => {
      setReadmorej3(false)
      j3Ref.current.scrollIntoView({block: 'center'})
    }

    return (


<div id='jounrey-list-container'>
    <div class="journey-item j-first">
        <div class="j-text">
            <div class="j-heading">The #1 Reason Why</div>
            <div class="j-headingj1">People Don’t Start a Business</div>
              <div class="j-transform"><Typewriter
    options={{
      strings: ['FAILURE', 'MISTAKES','SOCIAL STATUS'],
      autoStart: true,
      wrapperClassName: 'typewrap1',
      loop: true,
    }}
  /></div>
        </div>   
        <div class="j-image-cont">
        <div class="j-image"></div>
        </div> 
        <div class={`j-paragraph ${readmorej1}`}>
          <div ref={j1Ref} class='j-visible'>
            <p>
          42.6% of American entrepreneurs experience fear of failure. Thomas Edison said, "Many of life's failures are people who did not realize how close they were to success when they gave up." "I have not failed,” he said. “I've just found ten thousand ways that won't work." Thomas Edison understood that failure was a naturally occurring event that coincided with success. You must fail to succeed. By failing, you identify how not to fail again, and you go on to find new ways to succeed. 
          </p>
          </div>
          <div onClick={setj1} class='click-to-read-j'>Read More</div> 
          <div class='j-invisible'>
            <p>Here’s a real world model of failure and success. Whether you are a professional leading a company, a pastor leading a church, or a politician leading a constituent, every great idea starts with the <b>Birth of the Vision.</b> These are usually good times for leaders. Everyone believes in the future, and nobody has faced failure, which, again, is a naturally occurring event on your way to success.</p>
            <p>Then, inevitably, comes obstacles that often lead to the <b>Death of the Vision.</b> The majority of leaders and believers quit here. Faced with failure, the vision often dies. </p>
            <p>Only the bravest visionaries still believe, and usually they alone experience the final phase of this journey of success. This phase is called the <b>Rebirth of the Vision.</b> After learning ways to fail, you also discover ways to succeed. In doing so, you overcome Death of the Vision and experience Rebirth of the Vision!</p>
            <p>You see, successes and failures have one thing in common. Every success story is littered with failures. The difference between your story leading to success versus ending in failure is simple: Did you stop at failure or did you leverage your failures to achieve successes?</p>
            <p>The Rebirth of the Vision is a true story of success, and this success can be financial, but it can also be based on achieving goals that align with your life values, lifestyle goals, and relationships. Regardless, this success can rarely be achieved by avoiding failure. Fear of Failure makes sense, but overcoming it makes all the difference. Pursue your vision for your life and experience your Revival of Revenue today!</p>
            <div onClick={setReadLessj1} class='click-to-read-less'>Read Less</div> 
          </div>
          </div> 
    </div>
    <div class="journey-item j-second">
        <div class="j-text">
        <div class="j-heading">The #1 Reason Why</div>
            <div class="j-headingj2">People Don’t Follow Their Dreams</div>
             <div class="j-transform"><Typewriter
  options={{
    strings: ['LOSS', 'RISK','DEBT', 'HARM'],
    autoStart: true,
    wrapperClassName: 'typewrap2',
    loop: true,
  }}
/></div>
        </div>   
        <div class="j-image-cont">
          <div class="j-image"></div>
          </div>
          <div class={`j-paragraph ${readmorej2}`}>
          <div ref={j2Ref} class='j-visible'>
            <p>
            The risk and financial instability of running my own business is terrifying. What if I can't pay for rent because of a bad month? Even if I can start a business, I have no idea how to grow it. I'm scared that I will just be a small business forever and will never be able to replace my current job. I don't want to be stuck always playing credit card catch up, but I don't want to fall into an even worse position either. How can I overcome this crippling fear I have? 
          </p>
          </div>
          <div onClick={setj2} class='click-to-read-j'>Read More</div> 
          <div class='j-invisible'>
            <p>I failed. They won't see me in the same way any more. I knew I was in over my head. There is no coming back from this one. I should have given up a long time ago. This was a stupid idea. It's not my fault. I feel ashamed. I'm a loser. It was impossible anyways. It was a pipe dream. </p>
            <p>I'm scared of others seeing me differently. I am afraid of being rejected by others. 
                You may relate. Fear of loss, fear of failure, and fear of the unknown are only a few of a host of fears evoked by the idea of starting your own business.</p>
            <p>Challenges usually are not a bad thing but sometimes the walls are so high that I don't know what to do anymore. Life is a gauntlet of challenges that I am facing everyday. Trying to create another source of income is another obstacle on top of the ever growing pile. Why would I want to make my life harder than it already is? How is adding more challenges to my life going to help me? If only there was a way to get past my current financial challenges without adding new ones to the list.</p>
            <div onClick={setReadLessj2} class='click-to-read-less'>Read Less</div> 
          </div>
          </div> 
    </div>
    <div class="journey-item j-third">
        <div class="j-text">
        <div class="j-heading">The #1 Reason Why</div>
            <div class="j-headingj3"> People Give Up On Their Business Ideas</div>
             <div class="j-transform"><Typewriter
    options={{
      strings: ['VISION', 'DIRECTION','INITIATIVE', 'CONVICTION'],
      autoStart: true,
      wrapperClassName: 'typewrap3',
      loop: true,
    }}
  /></div>
        </div>   
        <div class="j-image-cont">
          <div class="j-image"></div>
          </div> 
          <div class={`j-paragraph ${readmorej3}`}>
          <div ref={j3Ref} class='j-visible'>
            <p>
            Lack of vision is the #1 reason why aspiring entrepreneurs can’t find a clear path forward. It's amazing that we can search for anything we want on the internet yet we don't even know what to search for. How are you supposed to know which way to go when there are so many dead ends and pitfalls in life? The problem in life is clear but I just don't have the time to figure out which way is the best way out.  I need to make more money. If only there was a map to help give me the direction I need to see clearly and avoid these financial pitfalls that I have seen others fall into. I don't want to move without being able to see where I am going, it's too dangerous.
 
          </p>
          </div>
          <div onClick={setj3} class='click-to-read-j'>Read More</div> 
          <div class='j-invisible'>
            <p>What do you want to be when you grow up? We were asked this question a lot as kids. Most of us wanted to be something like an astronaut, or to be a celebrity or even a firefighter that saves people. We had a clear vision of the person we wanted to be when we grew up. How many of us actually took steps to manifest that vision we had as kids though? If you ever took steps towards your vision did you ever think to yourself “maybe this isn't what I wanted after all.” There are also some of us that never strayed from our childhood vision and continued toward it no matter how hard it got or how many people said they couldn't do it. 
 </p>
            <p>Most successful leaders usually have a clear vision that they are following. A lot of people may feel lost in life. Not knowing where you are going is the definition of lacking vision.What if you start heading down a path and realize that it's not what you wanted or a waste of time? Ift feels like there are either too many options or no real options at all. There are so many different things I could aim for but what if they are dead ends and I waste years of my life going in the wrong direction? After all there are no promises in life. If only I had foresight and could see into the future.</p>
            <p>Unfortunately we don't have foresight, we only have our imaginations. The only way to ensure what our future becomes is by creating it ourselves with our own two hands (If you have no hands you can still create your own future by the way).  </p>
            <p>“Where there is no vision, the people perish: but he that keepeth the law, happy is he.”  Proverbs 29:18 KJV</p>
            <div onClick={setReadLessj3} class='click-to-read-less'>Read Less</div> 
          </div>
          </div>  
    </div>
    {/* <div class="journey-item j-fourth">
        <div class="j-text">
            <div class="j-heading">My Entrepreneurial</div>
             <div class="j-subheading">Risk</div>
             <div class="j-transform"><Typewriter
    options={{
      strings: ['Failure', 'Monetary Loss', 'Financial Liabilities', 'Regulatory Errors', 'Political Mandates' , 'Economic Meltdowns' ,'Business Competition' ,'Reputational Injury'],
      autoStart: true,
      wrapperClassName: 'typewrap4',
      loop: true,
    }}
  /></div>
        </div>   
        <div class="j-image-cont">
          <div class="j-image"></div>
          </div>  
    </div>
    <div class="journey-item j-fifth">
        <div class="j-text">
            <div class="j-heading">My Entrepreneurial</div>
             <div class="j-subheading">Reward</div>
             <div class="j-transform"><Typewriter
    options={{
      strings: ['Personal Achievements', 'Financial Independence', 'New Relationships', 'Opportunities to Help People', 'Changing the World' , 'Generational Wealth' ,'Economic Freedom' ,'Tax Write Offs'],
      autoStart: true,
      wrapperClassName: 'typewrap5',
      loop: true,
    }}
  /></div>
        </div>   
        <div class="j-image-cont">
          <div class="j-image"></div>
          </div>  
    </div> */}
  </div>

)
}
