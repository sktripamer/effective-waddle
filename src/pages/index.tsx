import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Player,
  Ui,
  Video,
  Controls,
  Control,
  ControlGroup,
  Icon,
  ScrubberControl,
  ClickToPlay,
  PlaybackControl,
  VolumeControl,
  ControlSpacer,
  IconLibrary,
  Captions,
} from '@vime/react';
import Layout from "../components/Layout";
//import CustomizableVideoPlayer from '@folly-systems/custom-react-player'
//import useAuth from "../hooks/useAuth";
//import UnAuthContent from "../components/UnAuthContent";
import {loadStripe} from '@stripe/stripe-js/pure';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'; 
import { isEmpty, remove } from 'lodash';
import { gql , useMutation } from "@apollo/client";
//import SignUpForm from "../components/SignUpForm";
//import RegisterOpt from "../components/RegisterOpt";
//import UnAuthContent from "../components/UnAuthContent";
//import LoginVerify from "../components/LoginVerify";

import InputField2 from '../components/inputfield';
import Select from "react-dropdown-select";

import { useBetween } from "use-between";
import MessageAlert from "../components/MessageAlert";
import * as Yup from "yup";
import { FormikStepper, FormikStep, InputField, PhoneField } from "formik-stepper";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
// markup

import FacebookIcon from "../images/FacebookIcon";
import TwitterIcon from "../images/TwitterIcon"
import WhatsappIcon from "../images/WhatsappIcon"
import LinkedinIcon from "../images/LinkedinIcon"
import EmailIcon from "../images/EmailIcon"
//const promise = loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3');


const useShareableState = () => {

  const [playing, setPlaying] = useState({
    time: 0,
    status: false,
    speed: 1,
    });
    const player = useRef<HTMLVmPlayerElement>(null);
    const [videoStatus, setVideoStatus] = useState(0)
    const [videoTime, setVideoTime] = useState(0)
    const [boxVisible, setBoxVisible] = useState("hidden");
    const [prevLast4, setLast4] = useState("");
    const [moreDetails, setDetails] = useState("");
    const [error, setError] = useState(null);
    const [heroText, setHero] = useState("");
    const [videoDetails, setVideoDetails] = useState({
      currentTime: 0,
      isPlaying: 0,
      speed: 1,
      totalTime: 0,
      });
  return {
    player,
  playing,
    setPlaying,
    videoStatus,
    setVideoStatus,
    videoTime,
    setVideoTime,
    boxVisible,
    setBoxVisible,
    prevLast4,
    setLast4,
    moreDetails,
    setDetails,
    error,
    setError,
    heroText,
    setHero,
    videoDetails,
    setVideoDetails
  };
};



const LoginVerify = () => {
  if (typeof window !== "undefined") {

    let authTokenData = localStorage.getItem("auth");

    if (!isEmpty(authTokenData)) {

      authTokenData = JSON.parse(authTokenData);

      if (!isEmpty(authTokenData.authToken)) {
      return true
      } else {
      return false
      }
    } else {
      return false
    }
  } // // this will fire only when loadDataOnlyOnce-reference changes
}
const step2verify = () => {
  if (typeof window !== "undefined") {

    let authTokenData = localStorage.getItem("s2");

    if (!isEmpty(authTokenData)) {

      
      return true
    
      
    } else {
      return false
    }
  } // // this will fire only when loadDataOnlyOnce-reference changes
}


const step3verify = () => {
  if (typeof window !== "undefined") {

    let authTokenData = localStorage.getItem("s3");

    if (!isEmpty(authTokenData)) {

      
      return true
    
      
    } else {
      return false
    }
  } // // this will fire only when loadDataOnlyOnce-reference changes
}

const step4verify = () => {
  if (typeof window !== "undefined") {

    let authTokenData = localStorage.getItem("s4");

    if (!isEmpty(authTokenData)) {

      
      return true
    
      
    } else {
      return false
    }
  } // // this will fire only when loadDataOnlyOnce-reference changes
}

const step5verify = () => {
  if (typeof window !== "undefined") {

    let authTokenData = localStorage.getItem("s5");

    if (!isEmpty(authTokenData)) {

      
      return true
    
      
    } else {
      return false
    }
  } // // this will fire only when loadDataOnlyOnce-reference changes
}

const validationSchema = Yup.object().shape({
  // firstName: Yup.string().required("The First Name field is required"),
  phonefield: Yup.string()
  .required("Your phone number is required")
  .min(14, "Please Enter a full US Number"),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),
    // email1: Yup.string()
    // .email("The email must be a valid email address.")
    // .required("The Email field is required"),
    // email2: Yup.string()
    // .email("The email must be a valid email address.")
    // .required("The Email field is required"),
    // email3: Yup.string()
    // .email("The email must be a valid email address.")
    // .required("The Email field is required"),
  // password: Yup.string()
  //   .required("The Password field is required")
  //   .matches(
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
  //     `Must Contain 8 Characters, One Uppercase, One Lowercase,
  //     One Number and one special case Character [@$!%*#?&-_]`
  //   ),
  privacy: Yup.boolean()
    .isTrue()
    .oneOf([true], "The terms and conditions must be accepted."),
});

const validationSchema2 = Yup.object().shape({
  // firstName: Yup.string().required("The First Name field is required"),
  // phonefield: Yup.string().required("The phone field is required"),
  // email: Yup.string()
  //   .email("The email must be a valid email address.")
  //   .required("The Email field is required"),
    email1: Yup.string()
    .email("The email must be a real address.")
    .required("This field is required."),
    email2: Yup.string()
    .email("The email must be a real address.")
    .required("This field is required."),
    email3: Yup.string()
    .email("The email must be a real address.")
    .required("This field is required."),
  // password: Yup.string()
  //   .required("The Password field is required")
  //   .matches(
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
  //     `Must Contain 8 Characters, One Uppercase, One Lowercase,
  //     One Number and one special case Character [@$!%*#?&-_]`
  //   ),
  privacy: Yup.boolean()
    .isTrue()
    .oneOf([true], "The terms and conditions must be accepted."),
});
export const REGISTER_CUSTOMER = gql`
mutation registerUser( $input: RegisterUserInput! ) {
  registerUser( input:$input ) {
        user {
            id
            username
            email
            firstName
            lastName
            jwtAuthToken
        }
    }
}
`;

export const isUserValidated = () => {
    let userLoggedInData = "";
  
    if (undefined !== window) {
      let authTokenData = localStorage.getItem("auth");
  
      if (!isEmpty(authTokenData)) {
        authTokenData = JSON.parse(authTokenData);
  
        if (!isEmpty(authTokenData.authToken)) {
          userLoggedInData = authTokenData;
        }
      }
    }
  
    return userLoggedInData;
  };
  
  export const setAuth = (authData: { authToken: any; user: any; }) => {
    localStorage.setItem("auth", JSON.stringify(authData));
  };


const RegisterOpt = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState("no");
  const [error, setError] = useState(null);
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showAlertBar, setShowAlertBar] = useState(true);
  const isBrowser = typeof window !== "undefined";
  const { boxVisible, setBoxVisible } = useBetween(useShareableState);
  const {playing, setPlaying } = useBetween(useShareableState);
  const {player } = useBetween(useShareableState);
  const {videoStatus, setVideoStatus } = useBetween(useShareableState);
  const {moreDetails, setDetails } = useBetween(useShareableState);
  const {heroText, setHero } = useBetween(useShareableState);
  const {videoTime, setVideoTime } = useBetween(useShareableState);
  const { videoDetails, setVideoDetails } =  useBetween(useShareableState);
  // Check if the user is validated already.
  /**
   * Hide the Status bar on cross button click.
   */
  const onCloseButtonClick = () => {
    setErrorMessage("");
    setShowAlertBar(false);
  };
  async function createOntra() {
    try {
      // Retrieve email and username of the currently logged in user.
      // getUserFromDB() is *your* implemention of getting user info from the DB
      const ontradata = email + "@@" + description 
      fetch('/api/ontraport-create', {
        method: 'POST',
        body: ontradata,
      });
    } catch (error1) {
      console.log('Failed to create ontra');
      console.log(error1);
      return null;
    }
  }
  /**
   * Sets client side error.
   *
   * Sets error data to result of our client side validation,
   * and statusbars to true so that its visible.
   *
   * @param {Object} validationResult Validation result data.
   */
  const setClientSideError = (validationResult: { errors: { email: React.SetStateAction<string>; }; }) => {
    // if (validationResult.errors.password) {
    //   setErrorMessage(validationResult.errors.password);
    // }

    if (validationResult.errors.email) {
      setErrorMessage(validationResult.errors.email);
    }

    // if (validationResult.errors.username) {
    //   setErrorMessage(validationResult.errors.username);
    // }

    setShowAlertBar(true);
  };

  // Register Mutation.
  const [
    register,
    { loading: registerLoading, error: registerError },
  ] = useMutation(REGISTER_CUSTOMER, {
    variables: {
      input: {
        //clientMutationId: v4(), // Generate a unique id.,
        username,
        //password,
        email,
        description
      },
    },
    onCompleted: (data) => {
      // If error.
      if (!isEmpty(registerError)) {
        setErrorMessage(registerError.graphQLErrors[0].message);
      }

      const {
        registerUser: { user },
      } = data;

      
      
      const authData = {
        authToken: user.jwtAuthToken,
        user: user,
      };
      if (isBrowser) {
      console.log(user)
      }

      setAuth(authData);
      setLoggedIn(true);
    },
    onError: (error) => {
      if (error) {
        if (!isEmpty(error)) {
          setErrorMessage(error.graphQLErrors[0].message);
        }
      }
    },
  });

  /**
   * Handles user registration.
   *
   * @param {object} event Event Object.
   * @return {void}
   */

  const onSubmit = async ( values: { email: React.SetStateAction<string>; phonefield: React.SetStateAction<string>; }, { setSubmitting }: any ) => {
    setProcessing("yes");
    console.log(values);
    setSubmitting(false); //// Important
    setEmail(values.email);
    setUsername(values.email.toString().split('@')[0]);
    setDescription(values.phonefield);
    try {
      // Retrieve email and username of the currently logged in user.
      // getUserFromDB() is *your* implemention of getting user info from the DB
      const request = await fetch('/api/user-exists', {
        method: 'POST',
        body: values.email.toString(),
      });
      const intent = (await request.json());
      console.log(intent)
      // Update your user in DB to store the customerID
      // updateUserInDB() is *your* implementation of updating a user in the DB
      if (intent === false) {
        console.log('user doesnt exist! registering and closing...')
        const authData = {
          authToken:'temp',
          user: 'temp',
        };
        setAuth(authData);
        setLoggedIn(true);
        handleRegisterSuccess();
        register();
      } else {
        setError('Email already in use. Try using another email.')
        setProcessing("no");
        console.log('user already exists')
      }
    } catch (error) {
      console.log('didnt get user exists');
      console.log(error);
      return null;
    }
  
};

  /**
   * Handle Register success.
   *
   * @return {void}
   */
  const handleRegisterSuccess = () => {
    // Set form fields value to empty.
    setErrorMessage("");
    //setUsername("");
    //setPassword("");

    // localStorage.setItem( 'registration-success', 'yes' );

    // Add a message.
    setSuccessMessage(
      "Please click the link in your email to verify your email and continue watching"
    );
    localStorage.setItem("s2", "y");
    setVideoStatus(0)
    setBoxVisible('release')
    player.current!.play();
   //createOntra();
  };

  return (
      <div className={`register-form col-md-6 ${processing}`}>
      {/* Title */}
      <h4 className="mb-2">{heroText}</h4>
      <div className="more-details">{moreDetails}</div>
      {/* Error Message */}
      {"" !== errorMessage
        ? showAlertBar && (
            <MessageAlert
              message={errorMessage}
              success={false}
              onCloseButtonClick={onCloseButtonClick}
            />
          )
        : ""}

      {"" !== successMessage
        ? showAlertBar && (
            <MessageAlert
              message={successMessage}
              success={true}
              onCloseButtonClick={onCloseButtonClick}
            />
          )
        : ""}

    
          
          <FormikStepper
          /// Accept all Formik props
          onSubmit={onSubmit} /// onSubmit Function
          
          initialValues={{
            phonefield: "",
            email: "",
          }}
          validationSchema={validationSchema}
          labelsColor="secondary" /// The text label color can be root variables or css => #fff
         // withStepperLine /// false as default and If it is false, it hides stepper line
          nextBtnLabel="Next" /// Next as default
          prevBtnLabel="Back" /// Prev as default
          submitBtnLabel="Keep Watching" /// Submit as default
          nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
          prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
          submitBtnColor="success" /// as default and The color can be root variables or css => #fff
        >
          {/*  First Step */}
          <FormikStep>
          <div class="input-wrap">
          <InputField placeholder="Your Email" name="email" label="Email" type="email" />

</div>

          
          </FormikStep>
          {/* Second Step */}
          <FormikStep>
          <div class="input-wrap phone-wrap">
            <InputField onKeyPress={(e)=>{e.target.keyCode === 13 && onSubmit;}} placeholder="Your Phone" name="phonefield" label="Phone" type="tel"/>
            </div>
          </FormikStep>
        </FormikStepper>
        {error && (
      <div className="share-error card-error" role="alert">
        {error}
      </div>
    )}
    </div>
  );
};


const StepTwo = () => {
  const {playing, setPlaying } = useBetween(useShareableState);
  const {videoStatus, setVideoStatus } = useBetween(useShareableState);
  const {videoTime, setVideoTime } = useBetween(useShareableState);
  const { boxVisible, setBoxVisible } = useBetween(useShareableState);
  const { videoDetails, setVideoDetails } =  useBetween(useShareableState);
  const {moreDetails, setDetails } = useBetween(useShareableState);
  const {heroText, setHero } = useBetween(useShareableState);
  const {player } = useBetween(useShareableState);

  async function createIntent(createtoken: string) {
    try {
      // Retrieve email and username of the currently logged in user.
      // getUserFromDB() is *your* implemention of getting user info from the DB
      const request = await fetch('/api/friends-email', {
        method: 'POST',
        body: createtoken,
      });
      const intent = (await request.json());
      // Update your user in DB to store the customerID
      // updateUserInDB() is *your* implementation of updating a user in the DB
      return intent;
    } catch (error) {
      console.log('Failed to set emails');
      console.log(error);
      return null;
    }
  }

  const onSubmit = async ( values: { email1: string; email2: string; email3: string; }, { setSubmitting }: any ) => {

    
    console.log(values);
    setSubmitting(false);


localStorage.removeItem("s2")
localStorage.setItem("s3", "y")
setVideoStatus(0)
setBoxVisible('release')
player.current!.play();
const intent = await createIntent(values.email1 + '@@' + values.email2 + '@@' + values.email3 + '@@' + JSON.parse(localStorage.auth).authToken);
console.log(intent)

    //// Important
    // setEmail(values.email);
    // setDescription(values.phonefield);



    
};

  return (
    <div className="register-form col-md-6 steptwo">
    {/* Title */}
    <h4 className="mb-2">{heroText}</h4>
    <div className="more-details">{moreDetails}</div>
    <FormikStepper
    /// Accept all Formik props
    onSubmit={onSubmit} /// onSubmit Function
    initialValues={{
      email1: "",
      email2: "",
      email3: "",
    }}
    validationSchema={validationSchema2}
    labelsColor="secondary" /// The text label color can be root variables or css => #fff
    withStepperLine /// false as default and If it is false, it hides stepper line
    nextBtnLabel="step" /// Next as default
    prevBtnLabel="return" /// Prev as default
    submitBtnLabel="Keep Watching" /// Submit as default
    nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
    prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
    submitBtnColor="success" /// as default and The color can be root variables or css => #fff
  >
    {/*  First Step */}
    <FormikStep
      label="Profile Info" /// The text label of Step
      withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
      withNumbers /// If true, it hides the icon and shows the step number
      iconColor="white" /// The color can be root variables or css => #fff
      circleColor="danger" /// The color can be root variables or css => #fff
    >
      <InputField autocomplete="no" placeholder="Your Friend's Email" name="email1" label="Email" type="email" />
      <InputField autocomplete="no" placeholder="Your Family's Email" name="email2" label="Email" type="email" />
      <InputField autocomplete="no" placeholder="Your Coworker's Email" name="email3" label="Email" type="email" />
    </FormikStep>
  </FormikStepper>
  </div>
  )


}


const StepThree = () => {
  const {playing, setPlaying } = useBetween(useShareableState);
  const {videoStatus, setVideoStatus } = useBetween(useShareableState);
  const {videoTime, setVideoTime } = useBetween(useShareableState);
  const shareUrl = 'revrevdev.xyz';
  const { boxVisible, setBoxVisible } = useBetween(useShareableState);
  const title = 'My code to continue watching is USA123. Watch along with me!';
  const shareForm = useRef(null);
  const [error, setError] = useState(null);
  const {player } = useBetween(useShareableState);
  const {moreDetails, setDetails } = useBetween(useShareableState);
  const {heroText, setHero } = useBetween(useShareableState);

  async function setThree(createtoken: string) {
    try {
      // Retrieve email and username of the currently logged in user.
      // getUserFromDB() is *your* implemention of getting user info from the DB
      const request = await fetch('/api/set-step-three', {
        method: 'POST',
        body: createtoken,
      });
      const intent = (await request.json());
      // Update your user in DB to store the customerID
      // updateUserInDB() is *your* implementation of updating a user in the DB
      return intent;
    } catch (error) {
      console.log('Failed to set step three');
      console.log(error);
      return null;
    }
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {


    e.preventDefault();
    const form = shareForm.current
    const coder = form['sharecode'].value.toUpperCase();

    if (coder === 'USA123') {

    localStorage.removeItem("s3")
    localStorage.setItem("s4", "y")
    setVideoStatus(0)
    setBoxVisible('release')
      player.current!.play();
      const intent = await setThree(JSON.parse(localStorage.auth).authToken);
      console.log(intent)
    } else {
      setError('Code incorrect. Click one of the social media buttons and share the message to retrieve the code.');
    }

  }



  return (
<div className="register-form col-md-6">
  <h4 className="mb-2">{heroText}</h4>
  <div className="more-details">{moreDetails}</div>
  <div className='sharesection'>
    <div className="Demo__container">
    <div className="Demo__some-network">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

    </div>


    <div className="Demo__some-network">
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <div className="Demo__some-network__share-count">&nbsp;</div>
    </div>

    <div className="Demo__some-network">
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <div className="Demo__some-network__share-count">&nbsp;</div>
    </div>

    <div className="Demo__some-network">
      <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>


    <div className="Demo__some-network">
      <EmailShareButton
        url={shareUrl}
        subject={title}
        body="body"
        className="Demo__some-network__share-button"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  
  </div>
  {error && (
      <div className="share-error card-error" role="alert">
        {error}
      </div>
    )}
  <div className='share-container'>
  <form id="share-form" ref={shareForm} onSubmit={handleSubmit}>
  <input className={'form-control form-control'} placeholder="Your Code (share to retrieve it)" name={'sharecode'}/>
  <button className='btn share-btn' id="submit">
  Keep Watching
</button>
</form>
</div>
</div>
</div>
  )


}

const StepFour = () => {
  const {playing, setPlaying } = useBetween(useShareableState);
  const {videoStatus, setVideoStatus } = useBetween(useShareableState);
  const {videoTime, setVideoTime } = useBetween(useShareableState);
  const {player } = useBetween(useShareableState);

const [succeeded, setSucceeded] = useState(false);
const {error, setError } = useBetween(useShareableState);
const [processing, setProcessing] = useState("");
const [disabled, setDisabled] = useState(true);
const [clientSecret, setClientSecret] = useState("");
const nameForm = useRef(null);
const [successMessage, setSuccessMessage] = useState("");
const [showAlertBar, setShowAlertBar] = useState(true);
const { boxVisible, setBoxVisible } = useBetween(useShareableState);
const [status, setStatus] = React.useState(0) // 0: no show, 1: show yes, 2: show no.
const stripe = useStripe();
const elements = useElements();
const {moreDetails, setDetails } = useBetween(useShareableState);
const {heroText, setHero } = useBetween(useShareableState);
// useEffect(() => {
//   window
//     .fetch("/api/payment-intent", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//            amount: 500,
//       }),
//     })
//     .then((res) => {
//       return res.json();
//     })
//     .then((body) => {
//       console.log(body)
//       setClientSecret(body.body.client_secret);
//     });
// }, []);

const radioHandler = (status) => {
  setStatus(status);
};


async function createIntent() {
  try {
    // Retrieve email and username of the currently logged in user.
    // getUserFromDB() is *your* implemention of getting user info from the DB
    const form = nameForm.current
    const email = form['firstname'].value + "@@" + JSON.parse(localStorage.auth).authToken 
    const request = await fetch('/api/create-intent', {
      method: 'POST',
      body: email,
    });
    const intent = (await request.json());
    // Update your user in DB to store the customerID
    // updateUserInDB() is *your* implementation of updating a user in the DB
    return intent;
  } catch (error1) {
    console.log('Failed to create intent');
    console.log(error1);
    return null;
  }
}

async function setPayment(cID) {
  try {
    // Retrieve email and username of the currently logged in user.
    // getUserFromDB() is *your* implemention of getting user info from the DB

    const email = cID + "@@" + JSON.parse(localStorage.auth).authToken 
    const request = await fetch('/api/set-payment-method', {
      method: 'POST',
      body: email,
    });
    const intent = (await request.json());
    // Update your user in DB to store the customerID
    // updateUserInDB() is *your* implementation of updating a user in the DB
    return intent;
  } catch (error2) {
    console.log('Failed to create intent');
    console.log(error2);
    return null;
  }
}


const cardStyle = {
  style: {
    base: {
      color: "#fff",
      iconColor: "#fff",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#9e9e9e",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

// const getCustomer = async (ev) => {
//   ev.preventDefault();
//   const custobj = await getCustomerObj();
//   console.log(custobj)
// }


const handleChange = async (event: { empty: boolean | ((prevState: boolean) => boolean); error: { message: any; }; }) => {
  setDisabled(event.empty);
  setError(event.error ? event.error.message : "");
  //if nameform ref name is 4+ characters and email is valid, do this. else don't do this.
};

const handleSubmit = async (ev: { preventDefault: () => void; }) => {
  const form = nameForm.current
  ev.preventDefault();
  setProcessing(true);
  const intent = await createIntent();
  console.log(intent)
  //setClientSecret(intent.body.client_secret);
  const payload = await stripe.confirmCardPayment(intent.body.client_secret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name:  form['firstname'].value,
        email: form['fullname'].value,
      }
    },
   
  });

  if (payload.error) {
    setError(`${payload.error.message}`);
    setProcessing(false);
  } else {
    setError(null);
    setProcessing(false);
    setSucceeded(true);
    //fetch wth intent.body.customer
    const spm = await setPayment(intent.body.customer);
    console.log(spm)
    // Update your user in DB to store the customerID
    // updateUserInDB() is *your* implementation of updating a user in the DB
  
    localStorage.removeItem("s4")
    localStorage.setItem("s5", "y")
    setVideoStatus(0)
    setBoxVisible('release')
      player.current!.play()

    setSuccessMessage("first payment complete");
  }
};




return (
  <div className='payment register-form col-md-6'>
    <h4 className="mb-2">{heroText}</h4>
    <div className="more-details">{moreDetails}</div>
  <form id="payment-form" ref={nameForm} onSubmit={handleSubmit}>
  <div className='powered-container'>
    <div className='powered-by-stripe'></div>
    </div>
    <input className={'form-control form-control'} placeholder="Name on Card" name={'firstname'}/>
    <InputField2 label={'fullname'} name={'fullname'}/>
    <CardElement
      id="card-element"
      options={cardStyle}
      onChange={handleChange}
    />
    <div className='powered-by-stripe-small'></div>
    <div className='card-charge'>Your card will be charged $1.00</div>
    
    <button className='pay-btn' disabled={processing || disabled || succeeded} id="submit">
      <span id="button-text">
        {processing ? (
          <div className="spinner" id="spinner">Keep Watching</div>
        ) : (
          "Keep Watching"
        )}
      </span>
    </button>
    {error && (
      <div className="card-error" role="alert">
        {error}
      </div>
    )}
    <p className={succeeded ? "result-message" : "result-message hidden"}>
      Payment succeeded!
    </p>
    
  </form>


  </div>
);

}

const StepFive = () => {
  const [status, setStatus] = React.useState(0) // 0: no show, 1: show yes, 2: show no. radio 
  const stripe = useStripe();
  const elements = useElements();
  const [prevPaymentID, setPrevID] = useState(""); //previous payment ID.
  const [customerID, setCustomerID] = useState("");
  const isBrowser = typeof window !== "undefined";
  const { prevLast4, setLast4 } = useBetween(useShareableState);
  const [prevExpY, setPrevExpY] = useState("");
  const [prevExpM, setPrevExpM] = useState("");
  const [prevName, setPrevName] = useState("");
  const [prevEmail, setPrevEmail] = useState("");
  const [prevBrand, setPrevBrand] = useState("");
  const email = JSON.parse(localStorage.auth).authToken;
  const optionsC = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States of America', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
  ]
  async function setFive(createtoken: string) {
    try {
      // Retrieve email and username of the currently logged in user.
      // getUserFromDB() is *your* implemention of getting user info from the DB
      const request = await fetch('/api/set-step-five', {
        method: 'POST',
        body: createtoken,
      });
      const intent = (await request.json());
      // Update your user in DB to store the customerID
      // updateUserInDB() is *your* implementation of updating a user in the DB
      return intent;
    } catch (error) {
      console.log('Failed to set step 5');
      console.log(error);
      return null;
    }
  }
useEffect(() => {
  if (isBrowser) {
  var style = document.createElement( 'style' )
  var host = document.getElementById('vm-player-1');
  style.innerHTML = '@media (max-width: 666px) { div.player.video { overflow: visible; }}'
  host.shadowRoot.appendChild( style )
  }
  async function fetchMyAPI() {
  // window
  //   .fetch("/api/get-payment-info", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: email,
  //   })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((body) => {
  //     console.log('right here', body)
  //    // setPrevID(body.body.client_secret);
  //   });

    try {
      // Retrieve email and username of the currently logged in user.
      // getUserFromDB() is *your* implemention of getting user info from the DB
      const request = await fetch('/api/get-payment-info', {
        method: 'POST',
        body: email,
      });
      const intent = (await request.json());
      // Update your user in DB to store the customerID
      // updateUserInDB() is *your* implementation of updating a user in the DB
      console.log(intent)
      setCustomerID(intent.paymentMethod.customer);
      setPrevID(intent.paymentMethod.id);
      setLast4(intent.paymentMethod.card.last4);
      setPrevExpY((intent.paymentMethod.card.exp_year).toString().slice(-2));
      setPrevExpM(('0' + intent.paymentMethod.card.exp_month.toString()).toString().slice(-2));
      setPrevName(intent.paymentMethod.billing_details.name);
      setPrevEmail(intent.paymentMethod.billing_details.email);
      setPrevBrand(intent.paymentMethod.card.brand);
      return intent;
      
    } catch (error) {
      console.log('Failed to get cID');
      console.log(error);
      return null;
    }

  }
  fetchMyAPI()
}, []);

const {playing, setPlaying } = useBetween(useShareableState);
  const {videoStatus, setVideoStatus } = useBetween(useShareableState);
  const {videoTime, setVideoTime } = useBetween(useShareableState);
  const {player } = useBetween(useShareableState);

const [succeeded, setSucceeded] = useState(false);
const [error, setError] = useState(null);
const [processingOld, setProcessingOld] = useState("");
const [succeededOld, setSucceededOld] = useState(false);
const [errorOld, setErrorOld] = useState(null);
const [processing, setProcessing] = useState("");
const [disabled, setDisabled] = useState(true);
const [stepCount, setStep] = useState("firststep");
const [clientSecret, setClientSecret] = useState("");
const [country, setCountry] = useState([{
  name: 'United States of America',
  code: 'US'
}]);
const nameForm = useRef(null);
const [successMessage, setSuccessMessage] = useState("");
const [showAlertBar, setShowAlertBar] = useState(true);
const { boxVisible, setBoxVisible } = useBetween(useShareableState);
const {moreDetails, setDetails } = useBetween(useShareableState);
const {heroText, setHero } = useBetween(useShareableState);
// useEffect(() => {
//   window
//     .fetch("/api/payment-intent", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//            amount: 500,
//       }),
//     })
//     .then((res) => {
//       return res.json();
//     })
//     .then((body) => {
//       console.log(body)
//       setClientSecret(body.body.client_secret);
//     });
// }, []);

const radioHandler = (status) => {
  setStatus(status);
};


async function createIntent() {
  try {
    // Retrieve email and username of the currently logged in user.
    // getUserFromDB() is *your* implemention of getting user info from the DB
    const email = customerID
    const request = await fetch('/api/second-intent', {
      method: 'POST',
      body: email,
    });
    const intent = (await request.json());
    // Update your user in DB to store the customerID
    // updateUserInDB() is *your* implementation of updating a user in the DB
    return intent;
  } catch (error) {
    console.log('Failed to create intent');
    console.log(error);
    return null;
  }
}


const cardStyle = {
  style: {
    base: {
      color: "#fff",
      iconColor: "#fff",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#9e9e9e",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};



const handleChange = async (event: { empty: boolean | ((prevState: boolean) => boolean); error: { message: any; }; }) => {
  setDisabled(event.empty);
  setError(event.error ? event.error.message : "");
  //if nameform ref name is 4+ characters and email is valid, do this. else don't do this.
};

const handleSubmit = async (ev: { preventDefault: () => void; }) => {
  const form = nameForm.current
  ev.preventDefault();
  setProcessing(true);
  const intent = await createIntent();
  console.log(intent)
  //setClientSecret(intent.body.client_secret);
  const payload = await stripe.confirmCardPayment(intent.body.client_secret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name:  form['firstname'].value,
        email: form['fullname'].value,
      }
    },
   
  });

  if (payload.error) {
    setError(`${payload.error.message}`);
    setProcessing(false);
  } else {
    setError(null);
    setProcessing(false);
    setSucceeded(true);
    console.log(payload)
    //fetch wth intent.body.customer
    //const spm = await setPayment(intent.body.customer);
    //console.log(spm)
    // Update your user in DB to store the customerID
    // updateUserInDB() is *your* implementation of updating a user in the DB
    const form = nameForm.current
    //form['firstname'].value
    let ex = {
      token: JSON.parse(localStorage.auth).authToken,
      shippingaddress1: form['ship-address1'].value,
      shippingaddress2: form['ship-address2'].value,
      shippingname: form['name'].value,
      shippingcity: form['ship-city'].value,
      shippingstate: form['ship-state'].value,
      shippingzip: form['ship-zip'].value,
      shippingcountry: country[1],
      }
      console.log(ex)
    const settingFive = await setFive(JSON.parse(localStorage.auth).authToken);
    console.log(settingFive)
    localStorage.removeItem("s5")
    localStorage.setItem("s6", "y")
    setVideoStatus(0)
    setBoxVisible('release')
      player.current!.play()
    setSuccessMessage("second payment complete");
  }
};

const handleSubmitOld = async (ev: { preventDefault: () => void; }) => {
  const form = nameForm.current
  ev.preventDefault();
  setProcessingOld(true);
  const intent = await createIntent();
  console.log(intent)
  //setClientSecret(intent.body.client_secret);
  const payload = await stripe.confirmCardPayment(intent.body.client_secret, {
    payment_method: prevPaymentID,
   
  });

  if (payload.error) {
    setErrorOld(`${payload.error.message}`);
    setProcessingOld(false);
  } else {
    setErrorOld(null);
    setProcessingOld(false);
    setSucceededOld(true);
    //fetch wth intent.body.customer
    //const spm = await setPayment(intent.body.customer);
    //console.log(spm)
    // Update your user in DB to store the customerID
    // updateUserInDB() is *your* implementation of updating a user in the DB
    const settingFive = await setFive(JSON.parse(localStorage.auth).authToken);
    console.log(settingFive)
    localStorage.removeItem("s5")
    localStorage.setItem("s6", "y")
    setVideoStatus(0)
    setBoxVisible('release')
      player.current!.play()
    setSuccessMessage("second payment complete");
  }
};

const drawYesContent = () => {

return (
  <div className='prev-payment'>
    <div className='payment-infos'>
    <div className="prev-name-on-card">{prevName}</div>
    <div className="prev-email">{prevEmail}</div> 
    <div className='prev-last-box'>
    <div className="brand-last4"><div className={"prev-brand " + prevBrand}></div><div className="prev-last4">**** {prevLast4}</div></div><div className="prev-expiry">{prevExpM}/{prevExpY}</div>
    </div>
    </div>
    <div className='payment-confirm'>
    <form id="payment-form-old" onSubmit={handleSubmitOld}>
  <button className='pay-btn' disabled={processingOld || succeededOld} id="submit">
    <span id="button-text">
      {processingOld ? (
        <div className="spinner" id="spinner">Click to Place Order</div>
      ) : (
        "Click to Place Order"
      )}
    </span>
  </button>
  {errorOld && (
    <div className="card-error" role="alert">
      {errorOld}
    </div>
  )}
  <p className={succeededOld ? "result-message" : "result-message hidden"}>
    Pre-order successful! Check your email for your copy of the first chapter.
  </p>
</form>
    </div>
  </div>
);

}
const stepSwitch = (e) => {
  e.preventDefault();
  if (disabled === false) {
  setStep("secondstep")
  }
}
const stepBack = (e) => {
  e.preventDefault();

  setStep("firststep")
  
}
const customNoDataRenderer = () => (
   <div className='no-country'>No country found</div>
);

const drawNoContent = () => {

return (
  <form id="payment-form" ref={nameForm} onSubmit={handleSubmit}>
  <div className={`step-one-pay ${stepCount}`}>
  <input className={'form-control form-control'} placeholder="Name on Card" name={'firstname'}/>
  <InputField2 label={'fullname'} name={'fullname'}/>
  <CardElement
    id="card-element"
    options={cardStyle}
    onChange={handleChange}
  />
    <div onClick={stepSwitch} className={`next-btn ${disabled}`}>
    <span id="button-text">
      Continue to Shipping
    </span>
  </div>
  </div>
  <div className={`step-two-pay ${stepCount}`}>
  <label>Full Name</label>
  <div className="ship-name">

  <input required className={'form-control form-control'} placeholder="First and last name" autocomplete="shipping name" name={'name'}/>
  </div>
  <label>Street Address</label>
  <div className="ship-street">

  <input required className={'form-control form-control'} placeholder="Street and number" autocomplete="shipping address-line1" name={'ship-address1'}/>
  <input className={'form-control form-control'} placeholder="Apartment, suite, unit, etc (optional)" autocomplete="shipping address-line2" name={'ship-address2'}/>
  </div>
  <label>City / State</label>
  <div className="ship-citystate">

  <input required className={'form-control form-control'} placeholder="City" name="ship-city" autocomplete="shipping address-level2"/>
  <input required className={'form-control form-control'} placeholder="State / Province" name="ship-state" autocomplete="shipping address-level1"/>
  </div>
  <label>Zip Code / Country</label>
  <div className="ship-zipcountry">
  <input required className={'form-control form-control'} placeholder="Zip / Postal Code" autocomplete="shipping postal-code" name={'ship-zip'}/>
  <Select
  options={optionsC} 
  labelField="name"
  name="ship-country" 
  dropdownPosition="top"
  searchBy="name"
  required
  closeOnSelect={true}
  values={country}
  noDataRenderer={customNoDataRenderer}
  onChange={values => setCountry(values)}
/>
</div>
  <div className='paybtn-cont'>
  <div onClick={stepBack} className={`next-btn stepback`}>
    <span id="button-text">
      Back
    </span>
  </div>
  <button className='pay-btn' disabled={processing || disabled || succeeded} id="submit">
    <span id="button-text">
      {processing ? (
        <div className="spinner" id="spinner">Click to Place Order</div>
      ) : (
        "Click to Place Order"
      )}
    </span>
  </button>
    </div>
  </div>
  <div className="card-error" role="alert">
  {error && (
      <b>{error}</b>
  )}
  </div>

  <p className={succeeded ? "result-message" : "result-message hidden"}>
  Pre-order successful! Check your email for your copy of the first chapter.
  </p>
</form>
);

}

return (
  <div className='payment register-form col-md-6'>
     <h4 className="mb-2">{heroText}</h4>
     <div className="more-details">{moreDetails}</div>
      <div className='content-section'>

    <div className='split-point-view'>
    <div className='final-mobile-hero'>{heroText}</div>
    <div className='final-mobile-text'>{moreDetails}</div>
    <div className='image-section'></div>
    <div className='info-section'>
    <ul>
  <li>Read the first chapter now</li>
  <li>Get your book in hardback</li>
  <li>Get early access to the final book</li>
  <li>Support Patrick's cause</li>
  </ul>

    </div>

    </div>
    
     <div className='pay-section'>
    <div className={`selection-section ${stepCount}`}>
    <div onClick={(e) => radioHandler(0)} className={'previous-payment ' + status}>
    <div className='card-icon'></div>
    <div className="prev-last4">{prevLast4}</div>
    </div>
    <div onClick={(e) => radioHandler(1)} className={'new-payment ' + status}>+ New Card</div>
    </div>
    <div className='powered-by-stripe-final'></div>
    <div className='selection-render'>
    {status === 0 && drawYesContent()}
    {status === 1 && drawNoContent()}
    </div>
    </div>
    </div>
  </div>
);
  //radio selection - select previous payment, or enter a new one.
}


const IndexPage = () => {

 // const promise = loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3');
  //const [promise = loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'));
 //const stripePromise = useMemo(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))
 const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))
  const [loggedIn, setLoggedIn] = useState(LoginVerify());
  const [loggedIn2, setLoggedIn2] = useState(false);
  //const [isLoggedIn, setLoggedIn] = useState(false);
  const [activate, setActivate] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [muteClass, setMuteClass] = useState("");
  const [firstPlay, setFirstPlay] = useState(false);
  const [paused, setPaused] = useState(true);
  const [muter, setMuter] = useState(true);
  const {player } = useBetween(useShareableState);
  const [showAlertBar, setShowAlertBar] = useState(true);
  const isBrowser = typeof window !== "undefined";
  const {videoStatus, setVideoStatus } = useBetween(useShareableState);
  const {videoTime, setVideoTime } = useBetween(useShareableState);
  const [titleText, setTitleText] = useState(30);
  const { boxVisible, setBoxVisible } = useBetween(useShareableState);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTimeb, setCurrentTimeb] = useState(0);
  const { prevLast4, setLast4 } = useBetween(useShareableState);
  const [playerSize, setPlayerSize] = useState("regular");
  const {moreDetails, setDetails } = useBetween(useShareableState);
  const {heroText, setHero } = useBetween(useShareableState);
  const {error, setError } = useBetween(useShareableState);
  const [revealer, setRevealer] = useState("");
  const [revealerh2, setRevealerh2] = useState("");
  const [loadrevealer, setLoadRevealer] = useState("");
  const [loadswitcher, setLoadswitcher] = useState("");
  const [fileURL, setFile] = useState("https://1768239509.rsc.cdn77.org/pk.mp4")
  const currentVideoState = () => {
    return videoTime;
  }

  useEffect(() => {

    async function fetchMyAPI() {
      timeoutResolver(3000).then(() =>  lastResort());
    }
    function timeoutResolver(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(true);
        }, ms);
      });
    }
    function lastResort() {
      console.log('first play value', firstPlay)
      let video = document.getElementsByClassName('lazy sc-vm-file sc-vm-file-s')[0];
      if (video.readyState === 2) {
        window.location.reload();
      }
    }
    fetchMyAPI();
    }, []);

    useEffect(() => {
 
     
      
      
      // if (event.detail > 5) {
      //   console.log('hey')
      //   player.current!.pause()
      // }
      if (currentTimeb > 3 && LoginVerify() === false ) {
        setHero("Time's almost up!");
        setDetails('Enter your info to continue watching and get amazing deals and breaking news');
        setBoxVisible('reveal')
      //if (currentTime > 3 ) {
          if (Math.floor(33 - currentTimeb) !== titleText ) {
            setTitleText(Math.floor(33.99 - currentTimeb));
          }
          if (currentTimeb > 33) {
            setCurrentTime(32);
            player.current!.pause()
          }
          setVideoStatus(1)
        } 
        if (currentTimeb > 36 && step2verify() === true ) {
          setHero("Time's almost up!");
          setDetails('Just enter 3 emails of people that need to see this');
          setBoxVisible('reveal')
        //if (currentTime > 3 ) {
            if (Math.floor(66 - currentTimeb) !== titleText ) {
              setTitleText(Math.floor(66.99 - currentTimeb));
            }
            if (currentTimeb > 66) {
              setCurrentTime(65);
              player.current!.pause()
            }
            setVideoStatus(2)
          } 
        // if (currentTimeb > 66  && step2verify()===true) {
        //   console.log('yes2')
        //   player.current!.pause()
        //   setVideoStatus(2)
        // }

        if (currentTimeb > 69 && step3verify() === true ) {
          setHero("Time's almost up!");
          setDetails('Share this video to any of these social media channels to get your code to keep watching');
          setBoxVisible('reveal')
        //if (currentTime > 3 ) {
            if (Math.floor(99 - currentTimeb) !== titleText ) {
              setTitleText(Math.floor(99.99 - currentTimeb));
            }
            if (currentTimeb > 99) {
              setCurrentTime(98);
              player.current!.pause()
            }
            setVideoStatus(3)
          }   

        // if (currentTimeb > 79  && step3verify()===true) {
        //   console.log('yes3')
        //   player.current!.pause()
        //   setVideoStatus(3)
        // }

        if (currentTimeb > 102 && step4verify() === true ) {
          setHero("The Ending is Nuts");
          setDetails('Find out what comes next for just one crisp dollar');
          setBoxVisible('reveal')
        //if (currentTime > 3 ) {
            if (Math.floor(132 - currentTimeb) !== titleText ) {
              setTitleText(Math.floor(132.99 - currentTimeb));
            }
            if (currentTimeb > 132) {
              setCurrentTime(131);
              player.current!.pause()
            }
            setVideoStatus(4)
          }   

        // if (currentTimeb > 112  && step4verify()===true) {
        //   console.log('yes3')
        //   player.current!.pause()
        //   setVideoStatus(4)
        // }

        if (currentTimeb > 136 && step5verify() === true) {
          setHero("Limited Time Offer!");
          setDetails("Pre-order Patrick's new book and get exclusive access to the first chapter!");
          setVideoStatus(5)
          if (prevLast4 != "") {
           setBoxVisible('reveal final')
          }  
            
          }  
    }, [currentTimeb]);
  
    
  // const useMountEffect = (fun) => useEffect(fun, [loggedIn, setLoggedIn])
  // Check if the user is validated already.
  // useMountEffect(LoginVerify)
//   useEffect(() => {
//     if (undefined !== window) {
//       console.log('heyyy')
//       console.log(loggedIn)
//       let authTokenData = localStorage.getItem("auth");
  
//       if (!isEmpty(authTokenData)) {
//         console.log('heyyy1')
//         console.log(loggedIn)
//         authTokenData = JSON.parse(authTokenData);
  
//         if (!isEmpty(authTokenData.authToken)) {
//           setLoggedIn(true)
//           console.log('heyyy2')
//           console.log(loggedIn)
//         } else {
//           console.log('empty')
//         }
//       }
//     } // // this will fire only when loadDataOnlyOnce-reference changes
// }, [loggedIn, setLoggedIn]);



  // const [playing, setPlaying] = useState({
  // 	time: 0,
  // 	status: false,
  // 	speed: 1,
  //   });



      const onMutedChange = () => {
        setMuteClass("rev-mute")
      }
      const unmuteClick = () => {
       player.current!.muted = false;
        setMuteClass("rev-mute")
      };
      const onClick = () => {
        setPaused(!paused);
        if (playerSize === "regular") {
          setPlayerSize("large")
        } else {
          setPlayerSize("regular")
        }
      };
      const emitError = (event) => {
        console.log(event)
      }
      const setPlay = () => {
        console.log('setting play')
        if (isBrowser && firstPlay === false) {
          var video = document.getElementsByClassName('lazy sc-vm-file sc-vm-file-s')[0];
          var myClick = (function() {
            var handler = function(event) {
              video.muted = true;
              video.play();
              console.log('set mute')
              video.removeEventListener('canplay', myClick);
              console.log('removed listener')
            };
            return handler;
        })();
          console.log(video)
          video.addEventListener('canplay', myClick);

        }
        

      }
      const loadStart = () => {
        console.log('setting play')


      }

      const pausedSet = () => {
        console.log('paused changed')
      }
      const playingChange = () => {
        console.log('playing changed')
      }
      const playTransition = () => {
        console.log('play transition begin')
      }
      const playStart = () => {
        console.log('play started')
        setFirstPlay(true)
       console.log('set first play value', firstPlay)
          setRevealer('revealer-el')
          // setRevealerh2('revealerh2-el')
          // setLoadRevealer('loadrevealer-el')
          // setLoadswitcher('loadswitch-el')

      }

      const onTimeUpdate = (event: CustomEvent<number>) => {
        // const currentTimeb = event.detail;
        // setCurrentTime(currentTimeb);
        setCurrentTime(event.detail);
        setCurrentTimeb(event.detail);
       
      };



      return (
        <Layout>
          <h1 className="revival-of-revenue">Welcome to your <span>Revival of Revenue</span></h1>
          <div className={`rev-optin-mobile ${boxVisible}`}>
    <div className='time-section'>
            <div className='time-remaining'>{titleText}</div>
            
</div>
<h4 className="mb-2">{heroText}</h4>
<div className="more-detail">{moreDetails}</div>
{error && (
      <div className="card-error-mobile" role="alert">
        {error}
      </div>
    )}
</div>
          <div className={`loader-player ${revealer} ${playerSize}`}>
         
 <div className={`rev-loadin`}><div className='inner-loadin'></div></div>         

<div className={`rev-player-cont`}>
      <div className={`rev-player`}>
       
      {  typeof window !== 'undefined' && Player && <Player
      icons="my-library"
      onVmCurrentTimeChange={onTimeUpdate}
      onVmPlaybackReady={setPlay}
      onVmLoadStart={loadStart}
      onVmPlaybackStarted={playStart}
      onVmError={emitError}
      onVmPausedChange={pausedSet}
      playsinline={true}
      onVmPlayingChange={playingChange}
      onVmPlay={playTransition}
      controls={false}
      currentTime={currentTime}
      ref={player}
    theme="dark"
    style={{ '--vm-player-theme': '#CD5C5C' }}
  >     
    <Video
      crossOrigin
      preload="auto"
    >
      <source 
        data-src={fileURL}
        type="video/mp4"
      />
      <track 
        default 
        kind="subtitles" 
        src="https://media.vimejs.com/subs/english.vtt" 
        srclang="en" 
        label="English" 
      />
    </Video>
    <div onClick={unmuteClick} id="tap-mute" className={`tap-to-unmute ${muteClass}`}><div className={`tap-to-unmute-svg`}></div><div className={`tap-to-unmute-text`}>Click to unmute</div></div>
    <div className={`rev-optin ${boxVisible}`}>
<div className='time-section'>
            <div className='time-remaining'>{titleText}</div>
</div>

      {1 == videoStatus
            ? showAlertBar && (
                

              <RegisterOpt setLoggedIn={setLoggedIn} />  
    
              )
            : ""}
            {2 == videoStatus
            ? showAlertBar && (
                

              <StepTwo />  
    
              )
            : ""}
            {3 == videoStatus
            ? showAlertBar && (
                

              <StepThree />  
    
              )
            : ""}
              {4 == videoStatus
            ? showAlertBar && (
              <Elements stripe={stripePromise}>
              <StepFour />  
              </Elements>
              )
            : ""}
             {5 == videoStatus
            ? showAlertBar && (
                
              
              <Elements stripe={stripePromise}>
              <StepFive />  
              </Elements>
            
              )
            : ""}
            </div>
    <Ui>
    <ClickToPlay />
    <IconLibrary name="my-library" resolver={(iconName) => `/icons/${iconName}.svg`}  />
    <Captions />
        <Controls fullWidth>
          <ControlGroup>
            <ScrubberControl hideTooltip noKeyboard />
          </ControlGroup>
              
          <ControlGroup space="top">
            <PlaybackControl hideTooltip keys={''} />
            <VolumeControl hideTooltip muteKeys={''} noKeyboard/>
            <ControlSpacer />

            <Control
      label="testelement"
      pressed={paused}
    onClick={onClick}
    >
      <Icon name="fullscreen-enter" library="my-library"/>
    </Control>


          </ControlGroup>
        </Controls>
      </Ui>
       {/* <DefaultUi /> */}
  </Player> }
         
    </div>
 </div>   
  
</div>
<h2 className={`revival-of-revenue`}>Maximize, Monetize, &amp; Market <span>Your God-Given Gifts With PK</span></h2>    
        </Layout>
      )

}

export default IndexPage
