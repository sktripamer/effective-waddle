import React from 'react';
import { useState, useEffect } from "react";


export default function Minibook() {
    const [minibook, setMinibook] = useState(1)
    const [minibookClick, setMinibookClick] = useState(false)
    const goRight = () => {
        if (minibook===7) {
          setMinibook(1)
          shiftView(".mb-cont.mb1")
        } else {
          setMinibook(minibook + 1)
          shiftView(".mb-cont.mb" + (minibook + 1))
        }
        setMinibookClick(true)
      }
      const shiftView = (el) => {
        const qselect = document.querySelector(el)
        qselect.parentNode.scroll({left: qselect.offsetLeft - (qselect.parentNode.clientWidth / 2), behavior: 'smooth'});
      }
      const goLeft = () => {
        if (minibook===1) {
          setMinibook(7)
          shiftView(".mb-cont.mb7")
        } else {
          setMinibook(minibook - 1)
          shiftView(".mb-cont.mb" + (minibook - 1))
        }
        setMinibookClick(true)
      }
      const setMinibook1 = () => {
        setMinibook(1)
        shiftView(".mb-cont.mb1")
        setMinibookClick(true)
      }
      const setMinibook2 = () => {
        setMinibook(2)
        shiftView(".mb-cont.mb2")
        setMinibookClick(true)
      }
      const setMinibook3 = () => {
        setMinibook(3)
        shiftView(".mb-cont.mb3")
        setMinibookClick(true)
      }
      const setMinibook4 = () => {
        setMinibook(4)
        shiftView(".mb-cont.mb4")
        setMinibookClick(true)
      }
      const setMinibook5 = () => {
        setMinibook(5)
        shiftView(".mb-cont.mb5")
        setMinibookClick(true)
      }
      const setMinibook6 = () => {
        setMinibook(6)
        shiftView(".mb-cont.mb6")
        setMinibookClick(true)
      }
      const setMinibook7 = () => {
        setMinibook(7)
        shiftView(".mb-cont.mb7")
        setMinibookClick(true)
      }
      
    useEffect(() => {
        if (minibookClick===false) {
  
      let timer2 = setInterval(() => {
  
        setMinibook(minibook => {
            const updatedCounter = minibook + 1;
            if (updatedCounter === 8) {
                shiftView(".mb-cont.mb1")
                return 1;
            }
            shiftView(".mb-cont.mb" + updatedCounter)
            return updatedCounter;
        }); // use callback function to set the state
      
    }, 5000);
    
    
    return () => clearInterval(timer2); // cleanup the timer
  
  }
  }, [minibookClick]);
return (
<div class='minib-r-cont'>

<div class='show-me-title'><span>WHAT'S </span><span>INSIDE </span><em><span>REVIVAL </span><span>OF </span><span>REVENUE?</span></em></div>
  <div id='minibook-container' class={`mbb${minibook}`}>
  <div onClick={goLeft} class='mb-left-arrow'></div>
    <div class='minibook-container'>
    <div class='mb-left-section'>
    <div onClick={setMinibook1} class='mb-cont mb1'>
      <div class='mb-section-cont'>
    <div class='mb-photo'></div>
      
      </div>
      </div>
    <div onClick={setMinibook2} class='mb-cont mb2'>
    <div class='mb-section-cont'>
    <div class='mb-photo'></div>
    
      </div>
      </div>
    <div onClick={setMinibook3} class='mb-cont mb3'>
    <div class='mb-section-cont'>
    <div class='mb-photo'></div>
   
      </div>
      </div>
    <div onClick={setMinibook4} class='mb-cont mb4'>
    <div class='mb-section-cont'>
    <div class='mb-photo'></div>
    
      </div>
      </div>
    <div onClick={setMinibook5} class='mb-cont mb5'>
    <div class='mb-section-cont'>
    <div class='mb-photo'></div>
    
      </div>
      </div>
    <div onClick={setMinibook6} class='mb-cont mb6'>
    <div class='mb-section-cont'>
    <div class='mb-photo'></div>
    
      </div>
      </div>
    <div onClick={setMinibook7} class='mb-cont mb7'>
    <div class='mb-section-cont'>
    <div class='mb-photo'></div>

       </div>
  </div>
      </div>

      <div class='mb-rightdisplay-section'>
    <div class='mb-right-section'>
      <div class='mb-content mb1'>
      <div class='mb-content-picture'></div>
       
      <div className="mb-content-cont">
      <div class='mb-title-cont'>
      <div class='mb-content-picture-small'></div>
        <div class='mb-title-content'>
      <div class='mb-content-pretitle'>Mini Book #1</div>
      <div class='mb-content-title'>Offense Wins Championships</div>
      <div class='mb-content-posttitle'>How to Go ON Offense!</div>
      </div>
      </div>
      <div class='picture-small-cont'>

      </div>
      <div class='mb-content-content'>In Mini Book #1, discover how to build your personalized high-octane Offensive Playbook, Defensive Playbook, and Special Teams Playbook. Your Offensive Playbook shows you how to score more touchdowns by maximizing your income. Your Defensive Playbook shows you how to prevent touchdowns by minimizing your expenses. Your Special Teams Playbook shows you how to manage field position and score extra points by multiplying investments and managing taxation. Together, you are managing a complete game as the head coach of your household. However, the #1 threat to you as an Entrepreneurial is hitting the Middle Class, the Masses, and Main Street Small Business harder every year. People aren’t scoring enough touchdowns. Mini Book #1 helps you make more money, increase your income, and generate more revenue by Going On Offense like an Entrepreneurial. Remember, “Entrepreneurship is living a few years of your life like most people won’t, so that you can spend the rest of your life like most people can’t.”</div>
      </div>
      </div>
    </div>
    <div class='mb-right-section'>
      <div class='mb-content mb2'>
      <div class='mb-content-picture'></div>
    
      <div className="mb-content-cont">
      <div class='mb-title-cont'>
      <div class='mb-content-picture-small'></div>
      <div class='mb-title-content'>
      <div class='mb-content-pretitle'>Mini Book #2</div>
      <div class='mb-content-title'>Maximum Wage</div>
      <div class='mb-content-posttitle'>How to Get OFF Bad Trades</div>
      </div>
      </div>
      <div class='picture-small-cont'>
 
      </div>
      <div class='mb-content-content'>Why Are We Talking About Minimum Wage? In Mini Book #2 Maximum Wage, Patrick Kucera shows you how to go from a Minimized Wage to your Maximum Wage. Maximum wage is about making the most amount of money in the least amount of time and with the least amount of effort. Unlike Offense Wins Championships, this chapter is not focused on creating multiple sources of income. Rather, Maximum Wage is focused on how to generate more revenue from each source of income. To do so, you must Get OFF Bad Trades. This concept pertains to how you maximize every time you trade your time for dollars. After reading this chapter, you will discover how to earn your Maximum Wage in 5 entrepreneurial steps:
STEP #1: Reposition Your Progression as a Micro Market Maker
STEP #2: Revalue What You Produce and Prove It
STEP #3: Rebrand Your Business Promise
STEP #4: Restructure How You Are Paid
STEP #5: Renegotiate Your Maximum Wage</div>
</div>
      </div>
    </div>
    <div class='mb-right-section'>
      <div class='mb-content mb3'>
      <div class='mb-content-picture'></div>
     
      <div className="mb-content-cont">
      <div class='mb-title-cont'>
      <div class='mb-content-picture-small'></div>
      <div class='mb-title-content'>
      <div class='mb-content-pretitle'>Mini Book #3</div>
      <div class='mb-content-title'>Create Your Own Economy</div>
      <div class='mb-content-posttitle'>Get OUT of the BIG’s Economy</div>
      </div>
      </div>
      <div class='picture-small-cont'>

      </div>
      <div class='mb-content-content'>In Mini Book #3 Create Your Own Economy, I’m going to show you how to create your own economy in the only economy that you can truly control, and that’s your own economy. You will discover how to S.E.L.F. Empower, S.E.L.F. Educate, and S.E.L.F. Employ to create more than a business. In today’s world, you must Create Your Own Economy. Learn how to go from Serf to SELF and how to move from the “Industrial” Revolution to the INDIVIDUAL Revolution. You Are the Economy! But corporations, universities, and governments will make you WORK for the economy if you don’t own and control your own profitability. I call them the BIGs: 
BIG Banking
BIG Tech
BIG Media
BIG Pharma
BIG Business
BIG Education
BIG Government
I’m going to show you how to get out from their control by understanding the Trifecta. There are three major economies that directly affect you: My Economy, Man’s Manipulated Economy, and the Maker’s Economy. Discover how to exit man’s manipulated economy. Navigate the gauntlet of challenges of life today without leaving “success” up to chance. Overcome the stress of making ends meet at home every month. Your economy is your home. It is the management of one’s household. In Mini Book #3 Create Your Own Economy, maximize the agility, anti-fragility, and abundance of your personal economy, and get out of the manipulated economy!</div>
     </div>
      </div>
    </div>

    <div class='mb-right-section'>
      <div class='mb-content mb4'>
      <div class='mb-content-picture'></div>
    
      <div className="mb-content-cont">
      <div class='mb-title-cont'>
      <div class='mb-content-picture-small'></div>
      <div class='mb-title-content'>
      <div class='mb-content-pretitle'>Mini Book #4</div>
      <div class='mb-content-title'>Enter God’s Economy</div>
      <div class='mb-content-posttitle'>Get IN God’s Economy</div>
      </div>
      </div>
      <div class='picture-small-cont'>

      </div>
      <div class='mb-content-content'>There are two economies, one with God and one without God. Which one are you in? If God is the Creator, He is the Original Entrepreneur. If you understand God’s Economy, you were created to co-create with Him. He is your Good Dad, raising you by His side to learn His creative ways and redemptive solutions. However, you have a Bad Dad, too. Your Bad Dad seeks to turn you away from your calling to co-create with Good Dad. His goal is to prompt you to reject your God-given story, which your Good Dad wrote about you in the Best Selling Book of All Time. God’s Word. By entering God’s Economy, you are co-creating with Good Dad, by “Putting God Back into the Equation of Making Money”. This is not about the revenue you make but the relationship you make with the Almighty as you pursue the Almighty dollar. God’s Economy is a call to “Bring Life Back to Work and Work Back to Life”. Discover the myths and misunderstandings about God and Money in Mini Book #4 God’s Economy! Where could you go if you entered God’s Economy?</div>
      </div>
      </div>
    </div>
    <div class='mb-right-section'>
      <div class='mb-content mb5'>
      <div class='mb-content-picture'></div>
     
      <div className="mb-content-cont">
      <div class='mb-title-cont'>
      <div class='mb-content-picture-small'></div>
      <div class='mb-title-content'>
      <div class='mb-content-pretitle'>Mini Book #5</div>
      <div class='mb-content-title'>Elevate in TheJetstream</div>
      <div class='mb-content-posttitle'>Go UP in TheJetstream</div>
      </div>
      </div>
      <div class='picture-small-cont'>

      </div>
      <div class='mb-content-content'>What could you accomplish if you elevated in TheJetstream? What if you moved through the speed of life as if the wind were always at your back. TheJetstream is at a higher elevation. It is where revelation lives. It is the most profitable way to live life, but what you consider to be profit may differ from what someone else believes is true profit. Learn how to fly above the turbulence of life in PK’s Jetstream Theory. Discover how to use thermals, updrafts, and downdrafts to your advantage by mastering the Laws of Lift:
1st Law Of Lift: How You Think
2nd Law Of Lift: How You Feel
3rd Law Of Lift: How You Act
4th Law Of Lift: How You Interact
Life Is Hard So Take A Breath. It is time to Elevate in TheJetstream!</div>
</div>
      </div>
    </div>
    <div class='mb-right-section'>
        
      <div class='mb-content mb6'>
      <div class='mb-content-picture'></div>
    
      <div className="mb-content-cont">
      <div class='mb-title-cont'>
      <div class='mb-content-picture-small'></div>
      <div class='mb-title-content'>
      <div class='mb-content-pretitle'>Mini Book #6</div>
      <div class='mb-content-title'>Experience Your Revival of Revenue</div>
      <div class='mb-content-posttitle'>Lorem Ipsum Dolor</div>
      </div>
      </div>
      <div class='picture-small-cont'>

      </div>
      <div class='mb-content-content'>In Mini Book #6 Experience Your Revival of Revenue, I’m going to show you the Vital Signs of Revival and the Vital Sign of Revenue that measure whether your business is alive. I’m going to show you the 5 Assets that Everyone Owns and the 5 Actions that Everyone Controls. God Has Trademarked You for a Purpose! Therefore, you are going to be given a choice. I call this the Value System TradeOff. You must choose “the red pill” or “the blue pill” before you enter the Revival of Revenue Matrix. If you enter, I am going to show you the 25 Quadrant Revival of Revenue Matrix, which breaks down in easy steps your entire entrepreneurial journey. You will discover the exact skillsets I learned as a child and the profitable systems I have used my entire adult life to help people, pastors, professionals, and politicians experience their own Revival of Revenue! What could you do if you experienced your Revival of Revenue today? Let’s get started together! </div>
      </div>
      </div>
    </div>
    <div class='mb-right-section'>
      <div class='mb-content mb7'>
      <div class='mb-content-picture'></div>
     
      <div className="mb-content-cont">
      <div class='mb-title-cont'>
      <div class='mb-content-picture-small'></div>
      <div class='mb-title-content'>
      <div class='mb-content-pretitle'>Mini Book #7</div>
      <div class='mb-content-title'>Entrepreneurial Education in Business, Ministry, &amp; Politics</div>
      <div class='mb-content-posttitle'>Lorem Ipsum Dolor</div>
      </div>
      </div>
      <div class='picture-small-cont'>

      </div>
      <div class='mb-content-content'>What Would The World Look Like If Everyone Was More Entrepreneurial? I close my mini book series with this futuristic question. I also deliver a winning word and a dire warning regarding the United States of America, future generations, and the warped nature of our education system. The future is dark if good people don’t step up. Marxism is afoot in America’s classrooms. Communism, the political arm of Marxists thought, is a power grab from “We the People”. Sadly, Socialism is like a good girl dating a bad boy; in time, she is likely to get toppled by Marxist agendas. But younger generations question whether capitalism is any better. Crony capitalism is fake capitalism. Manipulated markets are nothing like free markets. Younger generations in particular are feeling the pain of the BIGs taking over markets at the expense of the Middle Class, the Masses, and Main Street Small Business. But the tide is turning with the advent and adoption of blockchains and Web 3 technologies. A capitalistic future that seizes the economy back from the BIGs and embeds freedom, values, and economic opportunity into the underlying technology running the free world economy is finally possible. The time is now to fight for technological freedoms suitable for entrepreneurship. Yes, freedom is the best ecosystem for entrepreneurials. Imagine a world of creators who share in the freedom, profits, and abundance of the economy. I take a closer look at the current educational system and how we can train the next generation to fight for opportunity, profits, values, and freedoms across America and around the world. Starting as a child, I share my story in business, ministry, and politics, and I share what we can do as Entrepreneurials in Business, Frontliners in Ministry, and Free Marketers in Politics to lead America back to its original DNA. I believe in the DNA of an American. I believe in the foundation in which our country was built. I encourage you to reflect on this Word: “Remember the Heights from Which You Have Fallen.” I plead for America to return to a nation “Under God”. I cry “Long Live the Dream!”</div>
      </div>
      </div>
    </div>
    </div>
    </div>
    <div onClick={goRight} class='mb-right-arrow'></div>
  </div>

  </div>
)
}
