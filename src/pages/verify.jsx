import * as React from "react";
import { useState, useEffect, ReactNode } from "react";
import { navigate } from "gatsby";

export default function Verify() {
    const isBrowser = typeof window !== "undefined";
    const [verifyStep, setVerifyStep] = useState(1)
    const [loadingResults, setLoadingResults] = useState(true)
    const [goToEmail, setGoToEmail] = useState('')
    const [emailText, setEmailText] = useState('')
    const [pwdValidError, setPwdValidError] = useState(false)
    const [emailValidError, setEmailValidError] = useState(false)
    const [verifyErr, setVerifyErr] = useState(false)
    let params;
    let emailParam;
    let codeParam;
    if (isBrowser) {
        params = new URLSearchParams(location.search);
        emailParam = params.get("e");
        codeParam = params.get("c");
    }
    function validateEmail(email) 
    {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    async function handleVerify() {
        setEmailValidError(false)
        let emailvalue = document.getElementById('log-in-email').value
        setEmailText(emailvalue)
        setLoadingResults(true)
        if (validateEmail(emailvalue) === false) {
            setLoadingResults(false)
          setEmailValidError(true)
          return;
        }
      
        const request = await fetch('/api/verify-email', {
          method: 'POST',
          body: emailvalue,
        });
        const intent = (await request.json());
        setLoadingResults(false)
        console.log(intent)
        if (intent.exists.message === true) {
          let splitEmail = emailvalue.split('@');
          setGoToEmail(splitEmail[splitEmail.length - 1])
          //trigger email
          setVerifyStep(5) //email sent modal
        } else {
          //email invalid
          setEmailValidError(true)
        }
      }

      async function handlePassword() {
        setLoadingResults(true)
        setPwdValidError(false)
        let pwdvalue = document.getElementById('log-in-password').value
        if (pwdvalue.length < 7) {
            setLoadingResults(false)
            setPwdValidError(true)
            return;
        }
        let ex = {
            e: emailParam,
            c: codeParam,
            p: pwdvalue
        }
        const request = await fetch('/api/verify-pwd', {
            method: 'POST',
            body: JSON.stringify(ex),
          });
          const intent = (await request.json());
          if (intent.exists.message === true) {
            //password change was successful. now log in with credentials
            setLoadingResults(false)
            setVerifyStep(6) //success stage
          } else {
              //error with pwd (7 chars), or email/code/timestamp. display error.
              setLoadingResults(false)
              if (isBrowser) document.getElementById('log-in-email').value = emailParam
              setVerifyErr(true)
              setVerifyStep(2)
          }

      }


      async function verifyCode(req) {
          if (isBrowser) {
        const request = await fetch('/api/verify-code', {
            method: 'POST',
            body: req,
          });
          const intent = (await request.json());
          if (intent.exists.message === true) {
            //works, now set password.
            setLoadingResults(false)
            setVerifyStep(3) //password set stage
          } else {
            //doesnt work
            setLoadingResults(false)
            setVerifyStep(2) //resend
          }
        }
      }
      useEffect(() => {
      //pull vars from url. if vars dont exist, show "send verification email" button.
      if (emailParam === null || codeParam === null) {
        //one of the two params is null, show resend dialog.
          if (isBrowser) document.getElementById('log-in-email').value = emailParam
          setLoadingResults(false)
          setVerifyStep(2) //resent verifcation
    } else {
        //check the vars now via api. if it returns true, set password, else show resend dialog

      let ex = {
          e: emailParam,
          c: codeParam
      }
      verifyCode(JSON.stringify(ex))
     
    }

      }, []);



  return <div class={`verify-page verifystep-${verifyStep} checkuser-${loadingResults}`}>
        <div className={`verify-sent-container`}>
    {5 === verifyStep
                ? (
                 <div className='search-outer-cont'>
                   <div className="search-bar-title">
                      <div className="search-bar-text">Verify Email</div>
                      <div onClick={() =>  setVerifyStep(2)} className='search-bar-close'>X</div>
                   </div>
                   <div class='email-sent'>
                     <div class="verify-email-text">{`Please click the link that we sent to ${emailText} to confirm your account.`}</div>
                   <div id="anim-wrapper">
  <div id="anim-bg">
    <div id="env-wrapper">
      <div class="speedline line1"></div>
      <div class="speedline line2"></div>
      <div class="speedline line3"></div>
    <i id="env" class="aasd"></i>

    </div>
  </div>
  
    <div id="check-container">
    <div class="check-stroke1"></div>
    <div class="check-stroke2"></div>
  </div>

</div>
<a class='goto-email' href={`https://${goToEmail}`} target="_blank" rel="noreferrer noopener">
  {`Go To ${goToEmail.substr(0, goToEmail.lastIndexOf("."))}`}
</a>
                     </div>
                   </div>
                  )
                : ""}
    </div>
    <h1 onClick={() => navigate('/')}>Revival of Revenue</h1> 
    <div class='verify-form'>
    <h2>Verify Email</h2>
    <div classname='verifystep1'>Loading...</div>
    <div className="verifystep2">
        <div class="inputwrap emailer">

        <input
          id="log-in-email"
          type="text"
          name="email"
          autoComplete="email"
          required
        />

        <div class="label">Email</div>
        </div>
        {emailValidError === true ? (
          <p className="error-message">Invalid email. Please try again.</p>
        ) : null} 
        {verifyErr === true ? (
          <p className="error-message">Error verifying your email. Please try again.</p>
        ) : null}      
        <button className="verify-user-button" onClick={handleVerify} disabled={loadingResults}>Verify</button>
    </div>  

    <div classname='verifystep3'>
    <div class='email-to-use'>{emailParam}</div>
        <div class='set-your-password'>Create your password to continue:</div>
    <div class="inputwrap passworder">
        <input
          id="log-in-password"
          type="password"
          name="password"
          autoComplete="current-password"
          required
        />
        <div class="label">Password</div>
        </div>
        {pwdValidError === true ? (
          <p className="error-message">Invalid email. Please try again.</p>
        ) : null}  
        <button className="verify-user-button" onClick={handlePassword} disabled={loadingResults}>Verify Account</button>
    </div>
    <div classname='verifystep6'>
        Success!
        </div>
    </div>

  </div>;

}
