import React from 'react';
import { useState, useEffect } from "react";


export default function WhichOne() {
    const [archetype, setArchtype] = useState(1)
    const [archetypeClick, setArchtypeClick] = useState(false)
    const setArchtype1 = () => {
        setArchtype(1)
        setArchtypeClick(true)
      }
      const setArchtype2 = () => {
        setArchtype(2)
        setArchtypeClick(true)
      }
      const setArchtype3 = () => {
        setArchtype(3)
        setArchtypeClick(true)
      }
      const setArchtype4 = () => {
        setArchtype(4)
        setArchtypeClick(true)
      }
      const setArchtype5 = () => {
        setArchtype(5)
        setArchtypeClick(true)
      }
      const setArchtype6 = () => {
        setArchtype(6)
        setArchtypeClick(true)
      }
      const setArchtype7 = () => {
        setArchtype(7)
        setArchtypeClick(true)
      }
      const setArchtype8 = () => {
        setArchtype(8)
        setArchtypeClick(true)
      }
      useEffect(() => {
        if (archetypeClick===false) {

      let timer = setInterval(() => {

        setArchtype(archetype => {
            const updatedCounter = archetype + 1;
            if (updatedCounter === 9) {
                
                return 1;
            }

            return updatedCounter;
        }); // use callback function to set the state
      
    }, 5000);
    
    
    return () => clearInterval(timer); // cleanup the timer

  }
  }, [archetypeClick]);
return (
    <>
<div class='archtype-title'><span>WHICH </span><span>ONE </span><span>ARE </span><span>YOU?</span></div>
  <div id='archetype-container' class={`acc${archetype}`}>
    <div onClick={setArchtype1} onMouseEnter={setArchtype1} class='arch-cont ac1'>
      <div class='arch-title'></div>

      <div class='arch-text'><p>I am underpaid. I am just doing my job for a boss I don’t like. I’m trying to pay the bills and make it in life. I live paycheck to paycheck and barely make it from month to month. Honestly, sometimes it is hard to breathe! I’ve cut every expense I can and tried every budget plan out there. It hasn’t worked for me. I always feel broke. I struggle to ever get ahead financially. I need a better paying job but can’t seem to find one out there. I just need to make more money!
How in the world can I make more money?
</p><p>You need to stop being minimized and start maximizing your wage! it’s time to Experience your revival of revenue!
</p>
<p>BE ENCOURAGED! YOU CAN DO IT! You might have to learn a few new skills, but we live in  the Information Age. Technology has made it easier to reach more people, in less time to make more money than ever before. Less money is required to start than it ever did as well. C’mon I’ll show you how!
</p>
</div>
 
    </div>
    <div onMouseEnter={setArchtype2} onClick={setArchtype2} class='arch-cont ac2'>
      <div class='arch-title'></div>

      <div class='arch-text'><p>I am under-appreciated. I live in the Corp rat race. I work late most nights and the company stress and pressure usually finds me on the weekends. My personal life suffers. I am overworked and feel pressure most of the time. I feel marginalized. I hate the word “quarterly”! There’s got to be another way to live life. I am tired of using my talents to build somebody else’s company so they can live their dream. I want to build my dream. I want to experience the freedom that those that I work for enjoy themselves. I want to turn my own ideas into income for my own company.</p>
      <p>What’s the best way to do that? It’s time to Stop playing defense! It’s time to Go on Offense! Offense wins championships these days!</p>
      </div>

    </div>
    <div onMouseEnter={setArchtype3} onClick={setArchtype3} class='arch-cont ac3'>
      <div class='arch-title'></div>

      <div class='arch-text'>
      <p>I am frustrated. I recently graduated from high school or college. What do I do with my life? How do I make it on my own? I want a home and I want to get married and raise a family. I’m saddled with a backpack of bricks called college debt. How did I get here? This isn’t what I was promised by my college professors and my parents. I’m just starting my life and trying to make it on my own. I wonder how I can do it?
</p>
      <p>I’m working for a company that pays me about as much as care, very little. I don’t make enough money to live the life I want to live. I want to have a life of freedom, travel and live a nomadic life, the minimalist life. I see others doing it and living that lifestyle. I want to know how I can do it too. I am trying to start a side hustle to make more money and hopefully quit my job someday to live the lifestyle I want to live.
</p>
<p>How do I turn my passions into a profitable lifestyle? You are off to a great start! You need to stop being dependent on others and start becoming independent yourself. You need more than money. YOU NEED TO CREATE YOUR OWN ECONOMY in the only economy that you can truly control… that’s your own!</p>
      </div>

    </div>
    <div onMouseEnter={setArchtype4} onClick={setArchtype4} class='arch-cont ac4'>
      <div class='arch-title'></div>

      <div class='arch-text'>
      <p>I am surviving. Business is a Battlefield! I own a business but it feels more like the business owns me. I started this business to get away from my job but my business has become more like a job! Ironically, I thought I would have more free time but I spend a lot of my time working for free. Go figure! Every day is a battle to be profitable just to keep the doors open and make payroll. I am always the last one to get paid. Owning your own company can be so chaotic at times that it takes a toll on my family and even my personal health. Frankly, sometimes I feel the pressure in my chest. It’s a constant grind to navigate the gauntlet of challenges that I wake up and face every day. I feel alone. Who can help me? I treat myself worse than my boss used to treat me. Somehow, I gave birth to a business that I didn’t know what it would take to raise it. Sometimes I wonder if it is all worth it. I wonder if I should quit and shut it down. Do I double down and try harder to make it work? I feel trapped and wonder how I can leave my business even if I wanted to.
</p>
      <p>How do I create a more profitable life, both personally and professionally? To live your most profitable life, you need to elevate above the turbulence of life and get InTheJetstream! Let’s go, I can lead you there!
</p>
      </div>
    </div>
    <div onMouseEnter={setArchtype5} onClick={setArchtype5} class='arch-cont ac5'>
      <div class='arch-title'></div>

      <div class='arch-text'>
      <p>I am searching. I resigned from my job and am looking for something new to do. The pandemic changed everything. I need to move myself to make more money in these times of change, pain, and even persecution. The world is not the same and the playing field for the workforce has changed. The pendulum of power has shifted between employee and employer and I am not going back to what I was doing before. I am entering a new season in life. I guess I have to take a leap of faith.
</p>
      <p>How do I overcome my fear? What is my next move? You need to enter The Matrix! You can create your revival of revenue! I’ll see you inside The Matrix!
</p>
      </div>
    </div>
    <div onMouseEnter={setArchtype6} onClick={setArchtype6} class='arch-cont ac6'>
      <div class='arch-title'></div>

      <div class='arch-text'>
      <p>I am always running. Life is so busy! Run run run. Kids are so expensive! Money money money! I want a better work life balance. I’m a stay at home parent so I can spend more time with my kids, but I need to be able to make money while I am with them. As the kids grow our need to make more grows. They need $30 as babies, $300 As kids, $3000 in high school, then $30,000 for college. Where does it end?</p>
      <p>Sometimes I think… Hey God, if you’re up there, please help me make more money!</p>
      <p>I have found that spending less and living on a budget is not the only solution. I can only cut so much. I am married and my spouse earns steady income from a full-time job that provides steady income and some benefits. This allows me to work from home and start my own business. Our goal is for my business to eventually make enough money where we can maybe work together one day.</p>
      <p>PK, you are happily married and raised six children. How did you manage it all? I needed a revival of revenue myself. That’s why I created the matrix! I took the five assets that I own and the five actions that I control and created my own Revival of Revenue. It worked for me and my family and it can work for you and your family.</p>
      </div>
    </div>
    <div onMouseEnter={setArchtype7} onClick={setArchtype7} class='arch-cont ac7'>
      <div class='arch-title'></div>

      <div class='arch-text'>
      <p>I am overwhelmed. Life in the ministry is hard enough. Lacking money makes it even more difficult. I live in a constant struggle to create enough money to fund the ministry. My church is full of people that are constantly under financial pressure. This pressure makes my phone ring and  people come to my office. I don’t feel like I have answers for them financially. I can relate. I am constantly torn between taking care of God’s family and my own family. Torn between the house of God and my own household. It’s not easy at all. There has got to be a better way to share The Good News and avoid experiencing so much discouraging news financially. “Lord, What am I doing wrong? Why do so many people struggle financially?”
</p>
      <p>PK, how did you do it in both business and ministry? What do I need to do differently? 
</p>
      <p>You need to come bilingual! You need to operate in the nonprofit world with the skill sets of the for-profit world. This is not something you will be taught in Bible college but it was role modeled by Jesus to his disciples. That is why as The entrepreneurial Evangelist I teach entrepreneurial evangelism, proprietary pastoring, marketplace ministry and impact investing.
</p>
      <p>Just like in business, it is undeniable that money has a way of making your ministry more effective and more efficient. Money to ministry can be like oxygen that breathes life into a smoldering fire. If you want to experience Revival fire in your ministry, learn how to change the brand of Christianity with me from asking people for money to teaching them how to make it. It will make all the difference in the world to both you and them!
</p>
      </div>
    </div>
    <div onMouseEnter={setArchtype8} onClick={setArchtype8} class='arch-cont ac8'>
      <div class='arch-title'></div>

      <div class='arch-text'>
      <p>I am frightened. I am retired living on a fixed income. My fixed income has not fixed my retirement income problem. I need to make more money. My monthly check does not pay my monthly bills. My prescription drugs cost more than my Social Security check. My pension helps but does not make me profitable enough. Stock market collapses, taxes, and inflation have left me older and more vulnerable and not knowing what else I can do. I don’t want to burden my kids either. I never thought I would be in this place. It’s actually quite frightening!
</p>
      <p>At my age, what else can I do?
</p>
      <p>Years ago your plight would be a problem, but not today! Retired folks and Senior citizens everywhere are making money they never imagined they could. You just need to enter the matrix and experiencing your own Revival The Revenue!</p>
      </div>
    </div>
  </div>  
  </>  
)
}
