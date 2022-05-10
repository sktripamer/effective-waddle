    import React, { useState, useEffect, useRef, useMemo, Suspense  } from "react";
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
    import Dashboard from "../components/Dashboard";
    const SayHello = React.lazy(() => import("../components/say-hello"));
    //const SayHelloList = React.lazy(() => import("../components/say-hello-list"));
    import SayHelloList from "../components/say-hello-list";
    const CompareList = React.lazy(() => import("../components/compare"));
    const WhichOne = React.lazy(() => import("../components/WhichOne"));
    const Minibook = React.lazy(() => import("../components/Minibook"));
    const TypeText = React.lazy(() => import("../components/TypeText"));
    //import CustomizableVideoPlayer from '@folly-systems/custom-react-player'
    import useAuth, { User } from "../hooks/useAuth";
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
   // import "../styles/global1.css";

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
        const [preorderButton, setPreorderButton] = useState(false);
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
        preorderButton,
        setPreorderButton,
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
      //     One Number and one special case Character [@$!%*#? -_]`
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
      const [websiteUrl, setUrl] = useState("http://notregistered");
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

      setHero("Subscribe to Keep Watching!")
      const onCloseButtonClick = () => {
        setErrorMessage("");
        setShowAlertBar(false);
      };

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
            websiteUrl,
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
              nextBtnLabel="Keep Watching" /// Next as default
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
        let tokenGet = function() {
          let authTokenData = localStorage.getItem("auth");
          if (!isEmpty(authTokenData)) {
            authTokenData = JSON.parse(authTokenData);
            if (!isEmpty(authTokenData.authToken)) {
            return JSON.parse(localStorage.auth).authToken;
            } else {
            return null;
            }
          } else {
            return null;
          }
        }
        let ex = {
          token: tokenGet(),
          //cart: JSON.parse(localStorage.cart),
          cart: [30],
          newAccount: null,
        }

        const request = await fetch('/api/intent-init', {
          method: 'POST',
          body: JSON.stringify(ex),
        });
        const intent = (await request.json());
        console.log(intent)
        return intent;
      } catch (error1) {
        console.log('Failed to create intent');
        console.log(error1);
        return null;
      }
    }

    async function intentVerify(paymentIntent) {
      try {
        let tokenGet = function() {
          let authTokenData = localStorage.getItem("auth");
          if (!isEmpty(authTokenData)) {
            authTokenData = JSON.parse(authTokenData);
            if (!isEmpty(authTokenData.authToken)) {
            return JSON.parse(localStorage.auth).authToken;
            } else {
            return null;
            }
          } else {
            return null;
          }
        }
        let ex = {
          token: tokenGet(),
          //cart: JSON.parse(localStorage.cart),
          cart: [30],
          intent:paymentIntent,
          newAccount: null,
          shippingData: null,
          metafield: "onedollar",
          metavalue: true,
        }

        const request = await fetch('/api/intent-verify', {
          method: 'POST',
          body: JSON.stringify(ex),
        });
        const intent = (await request.json());
        console.log(intent)
        return intent;
      } catch (error1) {
        console.log('Failed to verify intent');
        console.log(error1);
        return null;
      }
    }
    // async function createIntent() {
    //   try {
    //     const form = nameForm.current
    //     const email = form['firstname'].value + "@@" + JSON.parse(localStorage.auth).authToken 
    //     const request = await fetch('/api/create-intent', {
    //       method: 'POST',
    //       body: email,
    //     });
    //     const intent = (await request.json());
    //     return intent;
    //   } catch (error1) {
    //     console.log('Failed to create intent');
    //     console.log(error1);
    //     return null;
    //   }
    // }

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
      console.log(intent.paymentIntent.client_secret)
      //setClientSecret(intent.body.client_secret);
      const payload = await stripe.confirmCardPayment(intent.paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name:  form['firstname'].value,
            email: form['email'].value,
          }
        },
      
      });

      if (payload.error) {
        setError(`${payload.error.message}`);
        setProcessing(false);
      } else {
        console.log(payload.paymentIntent)
        const verifyIntent = await intentVerify(payload.paymentIntent.id);
        console.log(verifyIntent)
        if (verifyIntent === true) {
          setError(null);
          setProcessing(false);
          setSucceeded(true);
        
          localStorage.removeItem("s4")
          localStorage.setItem("s5", "y")
          setVideoStatus(0)
          setBoxVisible('release')
            player.current!.play()
  
          setSuccessMessage("first payment complete");
        } else {
          setProcessing(false);
        }

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
        <InputField2 label={'email'} name={'email'}/>
        <input className={'form-control form-control'} placeholder="Name on Card" name={'firstname'}/>

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
        <div className={succeeded ? "result-message" : "result-message hidden"}>
         <div className='result-message-success'> Payment succeeded!</div>
        </div>
        
      </form>


      </div>
    );

    }
    const StepSix = (props) => {
      let [shipping, setShipping] = useState(false);
      const [currentStep, setCurrentStep] = useState(1);
      if (props.shipping === true) {
         [shipping, setShipping] = useState(true);
      }



      const stripe = useStripe();
      const elements = useElements();
      const isBrowser = typeof window !== "undefined";
      const [succeeded, setSucceeded] = useState(false);
      const {error, setError } = useBetween(useShareableState);
      const [processing, setProcessing] = useState("");
      const [methodProcessing, setMethodProcessing] = useState(true);
      const [doneLoading, setDoneLoading] = useState(false);
      const [disabled, setDisabled] = useState(true);
      const nameForm = useRef(null);
      const [status, setStatus] = useState(0);
      let newA = [];
      const [arrayTest, setArray] = useState({});
      const [prevExpY, setPrevExpY] = useState("");
      const [prevExpM, setPrevExpM] = useState("");
      const [prevName, setPrevName] = useState("");
      const [prevEmail, setPrevEmail] = useState("");
      const [prevBrand, setPrevBrand] = useState("");
      const [prevPaymentID, setPrevID] = useState(""); //previous payment ID.
      const { prevLast4, setLast4 } = useBetween(useShareableState);
      const [clickedItem, setClickedItem] = useState(0);
      const [firstDisabled, setFirstDisabled] = useState(false);
      const [country, setCountry] = useState([{
        name: 'United States of America',
        code: 'US'
      }]);    
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
  const customNoDataRenderer = () => (
        <div className='no-country'>No country found</div>
      );
      
      const email = function() {
        try {
          return JSON.parse(localStorage.auth).authToken;
        } catch {
          return null;
        }
      }

      useEffect(() => {
        async function fetchMyAPI() {
          console.log('start here')
          if (email() == null) {
            // setAccount(true)
            // setCard(true)
            // radioHandler(1)
            
            radioHandler(1)
            setDoneLoading(true)
            console.log('its not here')
          } else {
          try {
            // Retrieve email and username of the currently logged in user.
            // getUserFromDB() is *your* implemention of getting user info from the DB
            const request = await fetch('/api/get-payment', {
              method: 'POST',
              body: email(),
            });
            const intent = (await request.json());
            console.log(intent)
            if (intent =='') {
        
              setDoneLoading(true)
              radioHandler(1)
              return;
            }
            setArray(intent.paymentMethod.data);
            console.log()
            
            // Update your user in DB to store the customerID
            // updateUserInDB() is *your* implementation of updating a user in the DB
              setDisabled(false)
              setPrevID(intent.paymentMethod.data[0].id);
              setLast4(intent.paymentMethod.data[0].card.last4);
              setPrevExpY((intent.paymentMethod.data[0].card.exp_year).toString().slice(-2));
              setPrevExpM(('0' + intent.paymentMethod.data[0].card.exp_month.toString()).toString().slice(-2));
              setPrevName(intent.paymentMethod.data[0].billing_details.name);
              setPrevEmail(intent.paymentMethod.data[0].billing_details.email);
              setPrevBrand(intent.paymentMethod.data[0].card.brand);
              setMethodProcessing(false)
              setDoneLoading(true)
            return intent;
            
          } catch (error) {
            console.log('Failed to get cID');
            console.log(error);
            return null;
          }
        }
        }
        fetchMyAPI()
      }, []);
      if (isBrowser) console.log(arrayTest);


      const radioHandler = (status) => {
        setStatus(status);
      };

      const handleChange = async (event: { empty: boolean | ((prevState: boolean) => boolean); error: { message: any; }; }) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
        //if nameform ref name is 4+ characters and email is valid, do this. else don't do this.
      };

      
    const handleSubmit = async (ev: { preventDefault: () => void; }) => {
      const form = nameForm.current
      const email = form['email'].value 
      ev.preventDefault();
      setProcessing(true);
      const intent = await createIntent(email);
      console.log(intent)
      let payload;
      if (status===0) {
         payload = await stripe.confirmCardPayment(intent.paymentIntent.client_secret, {
          payment_method: prevPaymentID,
        
        });
      } else {
         payload = await stripe.confirmCardPayment(intent.paymentIntent.client_secret, {
         
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name:  form['firstname'].value,
              email: form['email'].value,
            }
          },
        });
      }


      if (payload.error) {
        setCurrentStep(1)
        setError(`${payload.error.message}`);
        setProcessing(false);
      } else {
        console.log(payload.paymentIntent)
        const verifyIntent = await intentVerify(payload.paymentIntent.id, email);
        console.log(verifyIntent)
        if (verifyIntent.new === true) {
          const authData = {
            authToken: verifyIntent.newUser,
            user: {email: email},
          };
          setAuth(authData);
          setError(null);
          setProcessing(false);
          setSucceeded(true);
        }


        if (verifyIntent === true) {
          setError(null);
          setProcessing(false);
          setSucceeded(true);

        } 

      }
    };

      async function createIntent(newEmail) {
        let newAccuntEmail = null;
        try {
          let tokenGet = function() {
            let authTokenData = localStorage.getItem("auth");
            if (!isEmpty(authTokenData)) {
              authTokenData = JSON.parse(authTokenData);
              if (!isEmpty(authTokenData.authToken)) {
              return JSON.parse(localStorage.auth).authToken;
              } else {
                newAccuntEmail = newEmail
              return null;
              }
            } else {
              newAccuntEmail = newEmail
              return null;
            }
          }
          let ex = {
            token: tokenGet(),
            //cart: JSON.parse(localStorage.cart),
            cart: [105],
            newAccount: newAccuntEmail,
          }
  
          const request = await fetch('/api/intent-init', {
            method: 'POST',
            body: JSON.stringify(ex),
          });
          const intent = (await request.json());
          console.log(intent)
          return intent;
        } catch (error1) {
          console.log('Failed to create intent');
          console.log(error1);
          return null;
        }
      }
  
      async function intentVerify(paymentIntent, newEmail) {
        const form = nameForm.current
        let newAccuntEmail = null;
        try {
          let tokenGet = function() {
            let authTokenData = localStorage.getItem("auth");
            if (!isEmpty(authTokenData)) {
              authTokenData = JSON.parse(authTokenData);
              if (!isEmpty(authTokenData.authToken)) {
              return JSON.parse(localStorage.auth).authToken;
              } else {
                newAccuntEmail = newEmail
              return null;
              }
            } else {
              newAccuntEmail = newEmail
              return null;
            }
          }
          let ex = {
            token: tokenGet(),
            //cart: JSON.parse(localStorage.cart),
            cart: [105],
            intent:paymentIntent,
            newAccount: newAccuntEmail,
            shippingData: null,
            metafield: "onedollar",
            metavalue: true,
          }

          if (shipping===true) {
            ex.shippingData = {
              shippingaddress1: form['ship-address1'].value,
              shippingaddress2: form['ship-address2'].value,
              accountemail: form['email'].value,
              shippingname: form['name'].value,
              shippingcity: form['ship-city'].value,
              shippingstate: form['ship-state'].value,
              shippingzip: form['ship-zip'].value,
              shippingcountry: country[0].code,
            }
          }
  
          const request = await fetch('/api/intent-verify', {
            method: 'POST',
            body: JSON.stringify(ex),
          });
          const intent = (await request.json());
          console.log(intent)
          return intent;
        } catch (error1) {
            console.log('Failed to verify intent');
           console.log(error1);
          return null;
        }
      }
      const newCardButton = () => {
        radioHandler(1)
        if (firstDisabled === false) {
          setDisabled(true)
          setFirstDisabled(true)
        }

      }

      const nextStep = () => {
        setCurrentStep(2)
      }
      const prevStep = () => {
        setCurrentStep(1)
      }


      const getButtonId = (e) => {
        setDisabled(false)
        radioHandler(0)
        setClickedItem(parseInt(e.target.dataset.idindex));
        setPrevID(e.target.dataset.id);
        setLast4(e.target.dataset.last4);
        setPrevExpY((e.target.dataset.year).toString().slice(-2));
        setPrevExpM(('0' + e.target.dataset.month.toString()).toString().slice(-2));
        setPrevName(e.target.dataset.prevname);
        setPrevEmail(e.target.dataset.prevemail);
        setPrevBrand(e.target.dataset.brand);
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
//onClick={(e) => radioHandler(0)}
// (el.card.exp_year).toString().slice(-2)
// ('0' + el.card.exp_month.toString()).toString().slice(-2)
const noShippingForm = () => {


  return (
    <button className='pay-btn' disabled={processing || disabled || succeeded} id="submit">
    <span id="button-text">
      {processing ? (
        <div className="spinner" id="spinner">Order Course</div>
      ) : (
        "Order Course"
      )}
    </span>
  </button>
  )
}
  const drawShippingForm = () => {

    return (
      <div className='shipping-form-data'>
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
      valueField="code"
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
      <div onClick={prevStep} className={`next-btn stepback`}>
        <span id="button-text">
          Back
        </span>
      </div>
      <button className='pay-btn' disabled={processing || disabled || succeeded} id="submit">
            <span id="button-text">
              {processing ? (
                <div className="spinner" id="spinner">Order Course</div>
              ) : (
                "Order Course"
              )}
            </span>
          </button>
      </div>

      </div>
    )
  
  } 


      return (
        <div className={`payment register-form col-md-6 status-${status} load-${doneLoading} step-${currentStep} success-${succeeded}`}>
            <h2>{props.header}</h2>
            <h3>{props.subheader}</h3>
            <div class='payment-area-cont'>
              <div class='payment-area-content'>{props.content}</div>
              <div class='payment-area-pay'>
           {methodProcessing ? (
                <></>
              ) : (
                <div class={`selection-section`}>
               {arrayTest && arrayTest.map((el, index) =>
                      <React.Fragment key={index}>
                      <div data-id={el.id} data-month={el.card.exp_month} data-year={el.card.exp_year} data-brand={el.card.brand} data-last4={el.card.last4} data-prevname={el.billing_details.name} data-prevemail={el.billing_details.email} onClick={getButtonId} data-idindex={index} className={index === clickedItem ? "previous-payment is-checked" : "previous-payment"}>
                      <div className={`prev-brand ${el.card.brand}`}></div>
                      <div className="prev-last4">{el.card.last4}</div>

        </div>
                      </React.Fragment>
)}
<div onClick={newCardButton} className={`new-payment`}>+ New Card</div>
                </div>
                )}
        <form id="payment-form" ref={nameForm} onSubmit={handleSubmit}>
        <div className='powered-container'>
          <div className='powered-by-stripe'></div>
          </div>
          <div className='new-card-form'>
          <InputField2 label={'email'} name={'email'}/>
          <input className={'form-control form-control'} placeholder="Name on Card" name={'firstname'}/>
          <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
          />
          </div>
          <div className='powered-by-stripe-small'></div>
          <div className='payment-infos'>
            <div className="prev-name-on-card">{prevName}</div>
            <div className="prev-email">{prevEmail}</div> 
            <div className='prev-last-box'>
              <div className="brand-last4"><div className={"prev-brand " + prevBrand}></div><div className="prev-last4">**** {prevLast4}</div></div><div className="prev-expiry">{prevExpM}/{prevExpY}</div>
            </div>
          </div>
          {shipping === true && (
                  <div onClick={nextStep} className={`next-btn firststep-btn disabled-${disabled}`}>
                  <span id="button-text">
                    Continue to Shipping
                  </span>
                </div>
          )}

          {shipping === true && drawShippingForm()}
          {shipping === false && noShippingForm()}


          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
        <div className={"result-message"}>
         <div className='result-message-success'>Payment succeeded!</div>
         <p className='result-message-text'>{props.success}</p>
        </div>
          
        </form>
        </div>
        </div>
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
      const { preorderButton, setPreorderButton } = useBetween(useShareableState);
      const [prevExpY, setPrevExpY] = useState("");
      const [prevExpM, setPrevExpM] = useState("");
      const [prevName, setPrevName] = useState("");
      const [prevEmail, setPrevEmail] = useState("");
      const [prevBrand, setPrevBrand] = useState("");
      const [noAccount, setAccount] = useState(false);
      const [accountExists, setAccountExists] = useState(true);
      const [noCard, setCard] = useState(false);
      const email = function() {
        try {
          return JSON.parse(localStorage.auth).authToken;
        } catch {
          return '';
        }
      }
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
      async function setPreorder(createtoken: string) {
        try {
          // Retrieve email and username of the currently logged in user.
          // getUserFromDB() is *your* implemention of getting user info from the DB
          const request = await fetch('/api/new-preorder-noacc', {
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
      async function setPreorderAccExists(createtoken: string) {
        try {
          // Retrieve email and username of the currently logged in user.
          // getUserFromDB() is *your* implemention of getting user info from the DB
          const request = await fetch('/api/new-preorder-acc', {
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

        if (email() =='') {
          setAccount(true)
          setCard(true)
          radioHandler(1)
        } else {
        try {
          // Retrieve email and username of the currently logged in user.
          // getUserFromDB() is *your* implemention of getting user info from the DB
          const request = await fetch('/api/get-payment-info', {
            method: 'POST',
            body: email(),
          });
          const intent = (await request.json());
          // Update your user in DB to store the customerID
          // updateUserInDB() is *your* implementation of updating a user in the DB
          if (intent =='') {
            setCard(true)
            radioHandler(1)
            return '';
          } else {
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
          }
        } catch (error) {
          console.log('Failed to get cID');
          console.log(error);
          return null;
        }
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
    const nameFormOld = useRef(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [showAlertBar, setShowAlertBar] = useState(true);
    const { boxVisible, setBoxVisible } = useBetween(useShareableState);
    const {moreDetails, setDetails } = useBetween(useShareableState);
    const {heroText, setHero } = useBetween(useShareableState);

    const radioHandler = (status) => {
      setStatus(status);
    };


    async function createIntent() {
      try {
        // Retrieve email and username of the currently logged in user.
        const email2 = customerID
        if (email2 == '') {
          //no customerID from stripe (set in useeffect), which means no "pay one dollar" succeeded
          //now we need to split up - whether the user is on an account (first step complete) or not
          if (email() == '') {
              //no account - check if user exists from form, and do intent process, create account at the end
              //no localstorage account
            const form = nameForm.current
            const request = await fetch('/api/user-exists', {
              method: 'POST',
              body: form['email'].value,
            });
            const intent = (await request.json());
            if (intent === false) {
            
            } else {
              setAccountExists(false)
              //setError('Email already in use. Try using another email.')
              //make a note in the state that this email exists. this will be checked after the return of this createIntent function, and will be added to said email.
              console.log('user already exists')
            }
            try {
              const request2 = await fetch('/api/create-intent-noacc', {
                method: 'POST',
                body: form['email'].value,
              });
              const intent2 = (await request2.json());
              return intent2;
            } catch (error1) {
              console.log('Failed to create intent');
              console.log(error1);
              return '';
            }
            
          } else {
            //user exists, but hasnt done first payment - so now we mimick the first intent (create-intent), but have it for preorder.
            try {

              const request3 = await fetch('/api/create-intent-acc', {
                method: 'POST',
                body: JSON.parse(localStorage.auth).authToken,
              });
              const intent3 = (await request3.json());
              return intent3;
            } catch (error1) {
              console.log('Failed to create intent');
              console.log(error1);
              return '';
            }
          }

        } else {
          //customerID is set - basically, user is on the video player flow and is on the final optin, or has completed step four at least, and it browsing around on the preorder optin from content sections.
          const request = await fetch('/api/second-intent', {
          method: 'POST',
          body: email2,
        });
        const intent = (await request.json());
        // Update your user in DB to store the customerID
        // updateUserInDB() is *your* implementation of updating a user in the DB
        return intent;
      }
      } catch (error) {
        console.log('Failed to create intent');
        console.log(error);
        return '';
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
      //new card processing only.
      const form = nameForm.current
      ev.preventDefault();
      setProcessing(true);
      const intent = await createIntent();
      if (intent == '') {
        return;
        //user account already exists, or theres an error with intent
      } else {

          //user account exists - same process, even if they paid the one dollar step, or are here for the first time.
          console.log(intent)
          //setClientSecret(intent.body.client_secret);
          const payload = await stripe.confirmCardPayment(intent.body.client_secret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name:  form['firstname'].value,
                email: form['email'].value,
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
            if (email()=='') {
              if (accountExists===false) {
                //no user account - submit payment info, and create account/save info based on the form data
                let ex = {
                  token: JSON.parse(localStorage.auth).authToken,
                  shippingaddress1: form['ship-address1'].value,
                  shippingaddress2: form['ship-address2'].value,
                  accountemail: form['email'].value,
                  shippingname: form['name'].value,
                  shippingcity: form['ship-city'].value,
                  shippingstate: form['ship-state'].value,
                  shippingzip: form['ship-zip'].value,
                  shippingcountry: country[0].code,
                  transactionid: payload.paymentIntent.id
                  }
                  console.log(ex)
                const settingFive = await setPreorder(JSON.stringify(ex));
                console.log(settingFive)
              }  else {
                //account exists, but not authenticated to it (like they are on another device, revisting site, etc). add preorder purchase to the account that already exists. api will query the user ID based on email.
                let ex = {
                  shippingaddress1: form['ship-address1'].value,
                  shippingaddress2: form['ship-address2'].value,
                  accountemail: form['email'].value,
                  shippingname: form['name'].value,
                  shippingcity: form['ship-city'].value,
                  shippingstate: form['ship-state'].value,
                  shippingzip: form['ship-zip'].value,
                  shippingcountry: country[0].code,
                  transactionid: payload.paymentIntent.id
                  }
                  console.log(ex)
                const settingFive = await setPreorderAccExists(JSON.stringify(ex));
                console.log(settingFive)
              }
              

            } else {
            //fetch wth intent.body.customer
            //const spm = await setPayment(intent.body.customer);
            //console.log(spm)
            // Update your user in DB to store the customerID
            // updateUserInDB() is *your* implementation of updating a user in the DB
            //form['firstname'].value
            let ex = {
              token: JSON.parse(localStorage.auth).authToken,
              shippingaddress1: form['ship-address1'].value,
              shippingaddress2: form['ship-address2'].value,
              shippingname: form['name'].value,
              shippingcity: form['ship-city'].value,
              shippingstate: form['ship-state'].value,
              shippingzip: form['ship-zip'].value,
              shippingcountry: country[0].code,
              transactionid: payload.paymentIntent.id
              }
              console.log(ex)
            const settingFive = await setFive(JSON.stringify(ex));
            console.log(settingFive)
            localStorage.removeItem("s5")
            localStorage.setItem("s6", "y")
            setVideoStatus(0)
            setBoxVisible('release')
              player.current!.play()
            setSuccessMessage("second payment complete");
            }
          }
        
      }


    };

    const handleSubmitOld = async (ev: { preventDefault: () => void; }) => {
      const form = nameFormOld.current
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

        let ex = {
          token: JSON.parse(localStorage.auth).authToken,
          shippingaddress1: form['ship-address1'].value,
          shippingaddress2: form['ship-address2'].value,
          shippingname: form['name'].value,
          shippingcity: form['ship-city'].value,
          shippingstate: form['ship-state'].value,
          shippingzip: form['ship-zip'].value,
          shippingcountry: country[0].code,
          transactionid: payload.paymentIntent.id
          }


        const settingFive = await setFive(JSON.stringify(ex));
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
        <div className={`step-one-pay ${stepCount}`}>
        <div className='payment-infos'>
        <div className="prev-name-on-card">{prevName}</div>
        <div className="prev-email">{prevEmail}</div> 
        <div className='prev-last-box'>
        <div className="brand-last4"><div className={"prev-brand " + prevBrand}></div><div className="prev-last4">**** {prevLast4}</div></div><div className="prev-expiry">{prevExpM}/{prevExpY}</div>
        </div>
        </div>
        <div onClick={stepSwitchOld} className={`next-btn`}>
        <span id="button-text">
          Continue to Shipping
        </span>
      </div>
      </div>
        <div className='payment-confirm'>
        <form id="payment-form-old" ref={nameFormOld} onSubmit={handleSubmitOld}>
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
      valueField="code"
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
      <button className='pay-btn' disabled={processingOld || succeededOld} id="submit">
        <span id="button-text">
          {processingOld ? (
            <div className="spinner" id="spinner">Click to Place Order</div>
          ) : (
            "Click to Place Order"
          )}
        </span>
      </button>
        </div>
      </div>
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
    const stepSwitchOld = (e) => {
      e.preventDefault();

      setStep("secondstep")
      
    }
    const stepBack = (e) => {
      e.preventDefault();
      console.log(country)
      setStep("firststep")
      
    }
    const customNoDataRenderer = () => (
      <div className='no-country'>No country found</div>
    );

    const drawNoContent = () => {

    return (
      <form id="payment-form" ref={nameForm} onSubmit={handleSubmit}>
      <div className={`step-one-pay ${stepCount}`}>
        <div class="name-email-group">
        <InputField2 label={'email'} name={'email'}/>
      <input className={'form-control form-control'} placeholder="Name on Card" name={'firstname'}/>
      </div>
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
      valueField="code"
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

{false == preorderButton
                ? (
                  <React.Fragment>
                  <h4 className="mb-2">{heroText}</h4>
        <div className="more-details">{moreDetails}</div>
        </React.Fragment>
                  )
                :  
                <div class='preorder-book-section'>
                   <div class='preorder-book-cont'>
                <div class='preorder-book-picture'></div>
                <div class='preorder-book-price-cont'>
                <div class='preorder-book-oldprice'>$80</div>
                <div class='preorder-book-price'>$50</div>
                </div>
                </div>
                <div class='preorder-cont-section'>
                <div className="mb-222">PREORDER YOUR COPY TODAY</div>
                <h4 className="mb-2">Your <strong>Revival of Revenue</strong> Begins Now</h4>

              <div className='pay-section'>
        <div className={`selection-section ${stepCount} ${noCard}`}>
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
                }

       
          <div className='content-section'>

          {false == preorderButton
                ? (
                  <React.Fragment>
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
        </React.Fragment>
                  )
                :       <div className='info-section-pre'>
        
                </div>}


                {false == preorderButton
                ? (
        <div className='pay-section'>
        <div className={`selection-section ${stepCount} ${noCard}`}>
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
                )
                :""}
        </div>
      </div>
    );
      //radio selection - select previous payment, or enter a new one.
    }


    const IndexPage = () => {
      const { preorderButton, setPreorderButton } = useBetween(useShareableState);
    // const promise = loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3');
      //const [promise = loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'));
    //const stripePromise = useMemo(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))
    const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))
      const [loggedIn, setLoggedIn] = useState(LoginVerify());
      const [loggedIn2, setLoggedIn2] = useState(false);
      //const [isLoggedIn, setLoggedIn] = useState(false);
      const [activate, setActivate] = useState(false);
      const [loadPreorder, setPreorder] = useState(false);
      const [loadPreorder2, setPreorder2] = useState(false);
      const [loadPreorder3, setPreorder3] = useState(false);
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
      const [archetype, setArchtype] = useState(1)
      const [minibook, setMinibook] = useState(1)
      const [readmore, setReadmore] = useState(false)

      const [archetypeClick, setArchtypeClick] = useState(false)
      const [minibookClick, setMinibookClick] = useState(false)
      const [bookWidth, setBookWidth] = useState(0)
      const [windowWidth, setWindowWidth] = useState(0)
      const titleRef = useRef(null)

      const setArchtype1 = () => {
        setArchtype(1)
        setArchtypeClick(true)
      }
      const [book2, setBook2] = useState('idle')
      const [book2Scale, setBook2Scale] = useState(1);
      function scrollToSmoothly(pos, time) {
        var currentPos = window.pageYOffset;
        var start = null;
        if(time == null) time = 500;
        pos = +pos, time = +time;
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start;
            var progress = currentTime - start;
            if (currentPos < pos) {
                window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
            } else {
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
            }
            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, pos);
            }
        });
    }
      const openBook = (e) => {
        if (document.getElementsByClassName('y-preorderbtnsmall')[0] === event.target) return;
        scrollToSmoothly(document.getElementsByClassName("peek-inner-cont")[0].getBoundingClientRect().top + window.pageYOffset + 300  - (window.innerHeight / 2), 200)
 
        document.getElementsByTagName( 'html' )[0].classList.add('noover')
        document.getElementsByTagName( 'main' )[0].classList.add('modalup')
        const timer = setTimeout(() => {
                //1.555 is ratio of heght / width of the book css properties
                setBook2('open')
          if (window.innerHeight / window.innerWidth <= 1.555) {
            //height is bottleneck
            setBook2Scale((window.innerHeight * .9) / 350)
        } else {
          //width is bottleneck
          setBook2Scale((window.innerWidth * .9) / 225)
        }
        }, 200);
        return () => clearTimeout(timer);
  

      }
      const hoverBook = () => {
        if (book2 === 'open') return;
        setBook2('hover')
      }
      const leaveHoverBook = () => {
        if (book2 === 'open') return;
        setBook2('idle')
      }

      const closeBook = () => {
        setBook2Scale(1)
        setBook2('idle')
        document.getElementsByTagName( 'html' )[0].classList.remove('noover')
        document.getElementsByTagName( 'main' )[0].classList.remove('modalup')
      }
      
      const closeBook2outside = (e) => {
        console.log(e.target)
        if (book2 !== 'open') return;
        if (document.getElementsByClassName('y-preorderbtnsmall')[0] === event.target) {
          setBook2Scale(1)
          setBook2('idle')
          return;
        }
        if(document.getElementsByClassName('peek-inner-cont')[0] !== event.target) return;
        setBook2Scale(1)
        setBook2('idle')
        document.getElementsByTagName( 'html' )[0].classList.remove('noover')
        document.getElementsByTagName( 'main' )[0].classList.remove('modalup')
      }
      const closeBook2 = () => {
        if (book2 !== 'open') return;
        document.getElementsByTagName( 'html' )[0].classList.remove('noover')
        document.getElementsByTagName( 'main' )[0].classList.remove('modalup')
        setBook2Scale(1)
        setBook2('idle')
      }
      // idle state: bellshake animation, slight open book animation
      //hover state: stop bellshake/slight open, do the hover animatin like already is
      //open state: clicked book/activated. pulls it up full screen with text inside.
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
     
      const setReadMore = () => {
        setReadmore(true)
      }
      const setReadLess = () => {
        setReadmore(false)
        titleRef.current.scrollIntoView()
      }
      const [fileURL, setFile] = useState("https://revrevdev2.b-cdn.net/pk.mp4")
      const currentVideoState = () => {
        return videoTime;
      }
      function preReveal() {
        document.getElementsByTagName( 'html' )[0].classList.add('noover')
        document.getElementsByTagName( 'main' )[0].classList.add('modalup')
        setPreorderButton(true)
        setPreorder(true)
    }
    function  preRevealBook2(e) {

    
      setBook2('idle')
      setPreorderButton(true)
      setPreorder(true)
  }
    function preReveal2() {
      document.getElementsByTagName( 'html' )[0].classList.add('noover')
      document.getElementsByTagName( 'main' )[0].classList.add('modalup')
      setPreorderButton(true)
      setPreorder2(true)
  }
  function preReveal3() {
    document.getElementsByTagName( 'html' )[0].classList.add('noover')
    document.getElementsByTagName( 'main' )[0].classList.add('modalup')
    setPreorderButton(true)
    setPreorder3(true)
}
    function preHide() {
      document.getElementsByTagName( 'html' )[0].classList.remove('noover')
      document.getElementsByTagName( 'main' )[0].classList.remove('modalup')
      setPreorderButton(false)
      setPreorder(false)
  }
  function preHide2() {
    document.getElementsByTagName( 'html' )[0].classList.remove('noover')
    document.getElementsByTagName( 'main' )[0].classList.remove('modalup')
    setPreorderButton(false)
    setPreorder2(false)
}
function preHide3() {
  document.getElementsByTagName( 'html' )[0].classList.remove('noover')
  document.getElementsByTagName( 'main' )[0].classList.remove('modalup')
  setPreorderButton(false)
  setPreorder3(false)
}
  const [shadowPosition, setShadowPosition] = useState('');
  const [yClass, setYClass] = useState('margin-relative')
  const [bookHeroClass, setBookHeroClass] = useState('margin')
  const [scrollPosition, setScrollPosition] = useState(180);
  const [plaxVal, setPlax] = useState(0);
const handleScroll = () => {
  let plax = document.querySelector('.y-container');


     const element = document.getElementsByClassName("book-section")[0]
     const element2 = document.getElementById('say-hello-list-container')
     const element3 = document.getElementsByClassName("book-section-hero-cta")[0]
      const elementRect1 = element3.getBoundingClientRect();
     const elementRect2 = element2.getBoundingClientRect();
     const absoluteElementBottom = elementRect2.bottom + window.pageYOffset;
     const absoluteElementTop = elementRect1.top + window.pageYOffset;
     let yPosition = absoluteElementBottom + (element.offsetHeight / 2) - (window.innerHeight / 2) + 100
     let ogYPos =  absoluteElementTop - (element.offsetHeight / 2) - (window.innerHeight / 2)
    
     if (window.scrollY <= yPosition) {
        // scroll is above top pos
        console.log('above top', yPosition)
        setYClass('margin-relative')   
        setScrollPosition(180)
        setShadowPosition(20)
     }
     if (window.scrollY > yPosition && window.scrollY < ogYPos) {
      const between = (window.scrollY - yPosition) / (ogYPos - yPosition)
      const sinbetween = -(Math.cos(Math.PI * between) - 1) / 2
       //within the bounds, set to absoltue etc
      setScrollPosition(180 - 157 * sinbetween)
      setShadowPosition(Math.abs(20 - 40 * sinbetween))
       setYClass('fixed') 
     }

     if (window.scrollY > ogYPos) {
       console.log('below', ogYPos)
       //past it, set back
       setScrollPosition(23)
       setShadowPosition(20)
       setYClass('nomargin-relative')  
     }
     if (plax.getBoundingClientRect().top < window.innerHeight && plax.getBoundingClientRect().bottom > 0) {
      setPlax((plax.getBoundingClientRect().top + (Math.abs(plax.getBoundingClientRect().top - plax.getBoundingClientRect().bottom))) / (window.innerHeight + (Math.abs(plax.getBoundingClientRect().top - plax.getBoundingClientRect().bottom)) ) * 6)
   }
};
const reportWindowSize = () => {
  setBookWidth(document.querySelector('.book-section .book img').height * .625)
  setWindowWidth(window.innerWidth)
  const element = document.getElementsByClassName("book-section")[0]
  const element2 = document.getElementById('say-hello-list-container')
  const element3 = document.getElementsByClassName("book-section-hero-cta")[0]
   const elementRect1 = element3.getBoundingClientRect();
  const elementRect2 = element2.getBoundingClientRect();
  const absoluteElementBottom = elementRect2.bottom + window.pageYOffset;
  const absoluteElementTop = elementRect1.top + window.pageYOffset;
  let yPosition = absoluteElementBottom + (element.offsetHeight / 2) - (window.innerHeight / 2) + 100
  let ogYPos =  absoluteElementTop - (element.offsetHeight / 2) - (window.innerHeight / 2)

  if (window.scrollY <= yPosition) {
     // scroll is above top pos
     console.log('above top', yPosition)
     setYClass('margin-relative')   
     setScrollPosition(180)
     setShadowPosition(20)
  }
  if (window.scrollY > yPosition && window.scrollY < ogYPos) {
    //within the bounds, set to absoltue etc
   setScrollPosition(180 - 157 * (window.scrollY - yPosition) / (ogYPos - yPosition))
   setShadowPosition(Math.abs(20 - 40 * (window.scrollY - yPosition) / (ogYPos - yPosition)))
    setYClass('fixed') 
  }

  if (window.scrollY > ogYPos) {
    console.log('below', ogYPos)
    //past it, set back
    setScrollPosition(23)
    setShadowPosition(20)
    setYClass('nomargin-relative')  
  }
}
useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', reportWindowSize);
    return () => {
     window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', reportWindowSize);
    };
}, []);


      useEffect(() => {
        setWindowWidth(window.innerWidth)
        setBookWidth(document.querySelector('.book-section .book img').height * .625)
        async function fetchMyAPI() {
          timeoutResolver(6000).then(() =>  lastResort());
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
      
        
        async function testIntent1() {
          try {
            let tokenGet = function() {
              let authTokenData = localStorage.getItem("auth");

              if (!isEmpty(authTokenData)) {
      
                authTokenData = JSON.parse(authTokenData);
      
                if (!isEmpty(authTokenData.authToken)) {
                return JSON.parse(localStorage.auth).authToken;
                } else {
                return null;
                }
              } else {
                return null;
              }
            }
            let ex = {
              token: tokenGet(),
              //cart: JSON.parse(localStorage.cart),
              cart: [30],
              newAccount: null,
            }
  
            const request = await fetch('/api/intent-init', {
              method: 'POST',
              body: JSON.stringify(ex),
            });
            const intent = (await request.json());
            console.log(intent)
            return intent;
          } catch (error1) {
            console.log('Failed to create intent');
            console.log(error1);
            return null;
          }
        }

        async function testIntent2() {
          try {
            let tokenGet = function() {
              let authTokenData = localStorage.getItem("auth");

              if (!isEmpty(authTokenData)) {
      
                authTokenData = JSON.parse(authTokenData);
      
                if (!isEmpty(authTokenData.authToken)) {
                return JSON.parse(localStorage.auth).authToken;
                } else {
                return null;
                }
              } else {
                return null;
              }
            }
            let ex = {
              token: tokenGet(),
              //cart: JSON.parse(localStorage.cart),
              cart: [30],
              newAccount: 'lxcvhhey100100100@wwwwf.com',
            }
  
            const request = await fetch('/api/intent-init', {
              method: 'POST',
              body: JSON.stringify(ex),
            });
            const intent = (await request.json());
            console.log(intent)
            return intent;
          } catch (error1) {
            console.log('Failed to create intent');
            console.log(error1);
            return null;
          }
        }
        async function testIntent3() {
          try {
            let tokenGet = function() {
              let authTokenData = localStorage.getItem("auth");

              if (!isEmpty(authTokenData)) {
      
                authTokenData = JSON.parse(authTokenData);
      
                if (!isEmpty(authTokenData.authToken)) {
                return JSON.parse(localStorage.auth).authToken;
                } else {
                return null;
                }
              } else {
                return null;
              }
            }
            let ex = {
              token: tokenGet(),
              //cart: JSON.parse(localStorage.cart),
              cart: [30, 91],
              newAccount: 'aisudausudy@cccccccccccccc.com',
            }
  
            const request = await fetch('/api/intent-init', {
              method: 'POST',
              body: JSON.stringify(ex),
            });
            const intent = (await request.json());
            console.log(intent)
            return intent;
          } catch (error1) {
            console.log('Failed to create intent');
            console.log(error1);
            return null;
          }
        }


        const tester1 = async (ev: { preventDefault: () => void; }) => {
          ev.preventDefault();
          const intent = await testIntent1();
          console.log(intent);
        }
        const tester2 = async (ev: { preventDefault: () => void; }) => {
          ev.preventDefault();
          const intent = await testIntent2();
          console.log(intent.paymentIntent.client_secret);
        }
        const tester3 = async (ev: { preventDefault: () => void; }) => {
          ev.preventDefault();
          const intent = await testIntent3();
          console.log(intent);
        }


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
        //    const currentTimeb = event.detail;
        //    setCurrentTimeb(currentTimeb);
          setCurrentTime(event.detail);
         setCurrentTimeb(Math.round(event.detail * 100) / 100);
        //  setCurrentTime(event.detail);
        //  setCurrentTimeb(event.detail);
          };

          require('../styles/global1.css');

          return (
            <Dashboard>
                  <div className={`preorder-btn-container ${loadPreorder}`}>
    {true == loadPreorder
                ? (
                    
                  
                  <Elements stripe={stripePromise}>
                    <div onClick={preHide} class='close-preorder'>X</div>
                  <StepSix content={<><div class="preorder-book-image"></div><h3 class="bonus-header">Get a <span>FREE</span> Bonus Revenue Map with your order!</h3><div class="bonus-flag"><h4>Worth $77.00!</h4></div><div class="bonus-price"><div class="bonus-preprice">$107.00</div><div class="bonus-realprice">$28.95</div></div></>} header={'Revival Of Revenue Book Bundle'} subheader={"Order PK's book and get CHAPTER 1 sent right to your inbox, plus its BONUS REVENUE MAP revealing The 7 Steps to Becoming Your Own Boss & Turning Your Passions into Profit Today!"} shipping={true} success={["1. Please check your email for more details on your order. Go to your ", <a href={'/orders'}>Order Page</a>, " to see your orders."]} />  
                  </Elements>
                
                  )
                : ""}
    </div>
    <div className={`preorder-btn-container ${loadPreorder2}`}>
    {true == loadPreorder2
                ? (
                    
                  
                  <Elements stripe={stripePromise}>
                    <div onClick={preHide2} class='close-preorder'>X</div>
                  <StepSix shipping={true} success={["2. Please check your email for more details on your order. Go to your ", <a href={'/orders'}>Order Page</a>, " to see your orders."]} />  
                  </Elements>
                
                  )
                : ""}
    </div>
    <div className={`preorder-btn-container ${loadPreorder3}`}>
    {true == loadPreorder3
                ? (
                    
                  
                  <Elements stripe={stripePromise}>
                    <div onClick={preHide3} class='close-preorder'>X</div>
                  <StepSix shipping={true} success={["3. Please check your email for more details on your order. Go to your ", <a href={'/orders'}>Order Page</a>, " to see your orders."]} />  
                  </Elements>
                
                  )
                : ""}
    </div>
              <div class='main-main'>
              <div className="main-vid-area">
              <h1 className="revival-of-revenue">Experience your <span>Revival of Revenue</span></h1>
              <h2 className="white-sh-l">Bringing to Life the Business Income in You</h2>
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
          //currentTime={currentTime}
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
    <h2 className="white-sh">Entrepreneurs are more likely to succeed when they follow a proven system. 
Today, the system is broken, and the Great Resignation is underway. 
Underappreciated employees are escaping the 9-5 rat race for a more 
profitable, meaningful, and flexible lifestyle… 
</h2>
<h2 className="white-sh ">Isn’t it time to become your own boss?</h2>
<p className="white-hero-p">You are not alone if you don’t know how to start a business. 
“Entrepreneurial” may be a new word to you, or perhaps you already 
live entrepreneurially but business is hard. Either way, you need help; you need a “Roadmap to Revenue” that shows you exactly how to succeed.</p>
    <p className="white-hero-p">After all, elementary school, high school, and college didn’t prepare you 
to start your own business. Worse, your job conditioned you to depend on 
someone else’s business rather than become your own business.
</p>


				<SayHelloList />


    </div>
    <div class="book-section-cont">

    <div class={`book-section ${yClass}`}>
		<div style={Object.assign({width: `${bookWidth}px`,transform: `rotateY(${scrollPosition}deg)` }, {boxShadow: `20px 20px 20px rgb(0 0 0 / ${shadowPosition}%)`})} class="book"> 
			<img src="https://portal.revrevdev.xyz/wp-content/uploads/cover2.jpg"></img>
		</div>
	</div>
  <div class="book-section-hero-cta">
    <div class='book-section-content-cont'>           
  <h2 className="white-sh">Get PK’s Book to Build Your Dream Business!</h2>
  <p className="white-hero-p">Pre Order your copy today to get CHAPTER 1 sent right to your inbox!
By pre ordering today, you will also INSTANTLY unlock our limited time
 <span> BOOK BUNDLE!</span> Get the book plus its <span>BONUS REVENUE MAP</span> revealing <span>The 7 Steps to Becoming Your Own Boss & Turning Your Passions into Profit Today!</span>
</p>
    <div onClick={preReveal} class="y-preorderbtn">Pre-Order My Book Bundle Now!</div>
    </div>   
    </div>
</div>
    

</div>
{/*  
    <div id='say-hello-container'>
    <div class="say-hello-bg"></div>
  </div> */}

{isBrowser && (<Suspense fallback={<div></div>}>
				<TypeText />
</Suspense>)}

  {isBrowser && (<Suspense fallback={<div></div>}>
				<SayHello />
</Suspense>)}

{isBrowser && (<Suspense fallback={<div></div>}>
				<WhichOne />
</Suspense>)}



  <div class='three-icons-container'>
  <div class='seam-paper-1'></div>
  <div class='three-icons-content'>
    <div class='white-super-h'>Anyone can experience your Revival of Revenue</div>
    <h2 class='white-sh-l'>You can start building on your goals today</h2>
    <div class='icons-container'>
      <div class='icon-section'>
        <div class='icon-1'></div>
        <div class='icon-section-text'>Learn how your Revival of Revenue works with PK</div>
      </div>
      <div class='icon-section'>
      <div class='icon-2'></div>
        <div class='icon-section-text'>Participate in courses with hundreds of others like you</div>
      </div>
      <div class='icon-section'>
      <div class='icon-3'></div>
        <div class='icon-section-text'>Bring value to yourself and those around you</div>
      </div>
    </div>
  </div>
  <div class='seam-paper-2'></div>
  </div>



  <div class='read-more-container'>
    <div class='read-more-title'>
    <span>WHY </span><span>START </span><span>YOUR </span><span>REVIVAL </span><span>OF </span><span>REVENUE?</span>
    </div>
    <div class={`read-more-content ${readmore}`}>
      <div ref={titleRef} class='always-visible'>
      <div class="mockup-read"></div>
        <p>There’s a map for everything under the sun— everything you need to know and everywhere you want to go… Except for how to navigate your entrepreneurial journey.</p>
        <p><strong>The entrepreneurial journey is like one big question mark.</strong> It’s basically 3D Tetris for business, and every block on the board is moving too fast; critical blocks are missing; repeatedly rearranging the blocks is a frantic hopeless strategy, and time is not on your side. </p>
        <p>What is your entrepreneurial journey? Your entrepreneurial journey is every step of the business creation process from the conception of your business idea to the go-to-market promotion of your business product. It is a journey of ups and down, which, for those who win, can take you higher up in life.</p>
        <p>If you are like millions of entrepreneurials learning how to start a business, however, you probably understand just how time-consuming, exhausting, and confusing the entrepreneurial journey can feel like if you are just beginning. You solve one problem only to discovery you learned business backwards. All you want to do is business the right way. You may not even care about business. You simply care about what you are building and how your entrepreneurial journey can help you:</p>
        <p>
        <ol>
  <li>Pioneer Your Passions into Profit - <span>You Have a Meaningful Vision for Your Future. You Just Don’t Know Where to Start.</span></li>
  <li>Invent Your Ideas into Income -<span>You Have Great Ideas. You Just Don’t Know How to Protect, Develop, and Launch Them.</span></li>
  </ol>
  </p>
  </div>
  <div onClick={setReadMore} class='click-to-read'>Read More</div> 
  <div class='more-to-read'>
  <p>
        <ol start="3">
  <li>Negotiate Your Networks to Net-worth - <span>You Have a Professional Network. You Just Don’t Know Who to Ask for Help.</span></li>
  <li>Turn Your Talents into Transactions - <span>You Have Skill Sets. You Just Don’t Know How to Creatively Attract Clients.</span></li>
  <li>Win Your Work to Wealth - <span>You Work Everyday. You Just Don’t Know How to Achieve Profitability &amp; Acquire Wealth.</span></li>
  </ol>
  </p>
  <p>The majority of entrepreneurial speakers, books, and courses teach simple principles of business. While these principles lead to success, they are often too general to help you start a business.<strong> You don’t need to listen to business principles on podcasts for years waiting to get started.</strong> That’s too general. Even more importantly, that’s too slow.</p>
  <p>As a result, you may turn to business gurus. But business gurus may be too specific for your ultimate end goal. Business gurus specialize in business specialties. Think of each specialty like a silo. You go deep, but you probably go too deep. At least for a start up. What they train is singular in nature. One. Thing. At. A. Time. When you are starting a business, you don’t need to learn everything about one thing right now. That’s too much information on one topic. You will likely be faced with a bunch of different types of problems all at once, the so all you need is help knocking out key obstacles in your entrepreneurial journey.</p>
  <p>Remember why you started your entrepreneurial journey. <strong>You are on a mission to start creating, and since you hope to own and control what you create, you need a business.</strong> You are not on a mission to become a business motivational speaker or a business guru. You simply want to become a business. Where should someone like you start learning?</p>
  <p>Great question! The entrepreneurial journey feels like a fractured system of hundreds of business parts that don’t fit together. At least not at first. Each part makes up the entrepreneurial engine, and that engine powers your car, which we call your business. Unless you know what part you need, where to find each part, and how to install each part, you are out of luck. Your business is going nowhere soon. You need a mechanic for your car the same way you need a Revival of Revenue for your business. If you ever hope to get out of the world of ideas—if you decide to drive your business on the highways of revenue—you need a way to bring the business parts together to create a business engine.</p>
  <p>You need all the information in one place. <strong>I call these Revenue Maps.</strong></p>   
  <p>Imagine a map that showed you every step of the entrepreneurial journey, and gave you answers to the questions that you actually need answered on a daily basis, such as, “What do I do first? Where do I go to find solutions? How much does each issue cost to solve? Who can help me each step of the way? When can I start testing my ideas? Why am I starting my business? Who am I in business to help?”</p>
  <p>You need a Revenue Map the same way every driver needs a car manual. How do you start a business that is safe to rev up? What if you hope to drive your car fast, pedal to the metal, pushing RPMs and higher speeds as your business grows? Regardless of whether you already have entrepreneurial exposure or no business experience, the entrepreneurial journey is confusing and vulnerable to failure, error, and loss for anyone. Experienced entrepreneurs need help. Inexperienced entrepreneurials need twice the help. That’s why Revenue Maps help you navigate the gauntlet of challenges of starting a business.</p>
  <p>Each Revenue Map tackles a highly specific problem that you will likely face somewhere along your entrepreneurial journey. In fact, that’s why we design Revenue Maps for each step and most problems entrepreneurials face. <strong>All you need to do is follow.</strong> By following each Revenue Map, your entrepreneurial journey will finally be ready-to-go, easy-to-follow, and not confusing. Not impossible. The goal of each Revenue Map is quite simple:</p>
  <p>
        <ol>
        <li>Solve highly specific problems in less time - Save time by following ready-to-go solutions!</li>
        <li>Don’t recreate the wheel - Save mind power for your business. Leverage us to do the rest!</li>
        <li>Don’t make easy to avoid mistakes - Save energy by not constantly undoing blunders and errors!</li>
        <li>Don’t sweat technical issues - Get the right answers fast at your fingertips! Research less! Do more!</li>
        <li>Don’t exhaust friends, family, and your professional network - Save social capital by learning with us!</li>
        <li>Don’t get stuck when business gets confusing - Get the maps, detours, & exits to bypass traffic jams with less effort!</li>
        <li>Focus on your business &amp; less on becoming a business guru - Save capital by solving problems faster than …</li>
        </ol>
  </p>
  <p>Survive entrepreneurial road blocks by following our Revenue Maps! Try not to get stuck figuring out every problem alone. You may find you are suddenly frozen in time, right where you started, even after months of research and work, still asking yourself the same questions about how to solve this problem or that issue. Remember, time is everything. Saving time is the first step to becoming more profitable. Let’s get you off the ground, shift your business in gear, and experience your Revival of Revenue today. Let’s team up together to take control of your entrepreneurial journey! Cut the cheap talk, say yes to action. Become an Entrepreneurial today!
</p>
<p class='p-title'><strong>BOTTOMLINE—YOU CAN SKIP THE HEADACHES OF DOING BUSINESS ALONE BY FINALLY OWNING:</strong> </p>
<p>
        <ol>
                  <li>The 25 Quadrant Matrix Every Mini CEO Needs to Follow </li>
                  <li>The 50+ Unlocked Revenue Maps That Every Business Needs Daily</li>
                  <li>The Offensive Playbook (Workbook) Every Entrepreneurial Needs from Day 1</li>
                  <li>The Easy-to-Follow Entrepreneurial Journey Explained in 24 Course Hours - A Day with PK!</li>
                  <li>The Turn-Key Start Up Bundle that Makes Entrepreneurship Easy. Not Impossible. </li>

        </ol>
</p>
<div class="mockup-more"></div>
<p class='p-title'><strong>INSTEAD OF TAKING MONTHS, LEVERAGE IN MINUTES HOW TO:</strong> </p>  
<p>
        <ol>
                  <li>Get help starting your side hustle</li>
                  <li>Discover Your Entrepreneurial Journey</li>
                  <li>Build Your Business</li>
                  <li>Create Something New</li>
                  <li>Create from Nothing</li>
                  <li>Dare to Explore</li>
                  <li>Explore the Possibilities</li>
                  <li>Consider the Cost</li>
                  <li>Start Your Side Hustle</li>
                  <li>Begin Your Journey</li>
                  <li>Become an Entrepreneurial</li>
                  <li>Design Your Lifestyle</li>
                  <li>Develop Your Best Work</li>
                  <li>Trademark your God-given Talents</li>
                  <li>Envision Your Future</li>


        </ol>
</p>
<div class="read-more-section-cta">Begin your Revival of Revenue today!</div>
<div onClick={preReveal} class="y-preorderbtn">Pre-Order My Copy Now!</div>
<div onClick={setReadLess} class='click-to-read-less'>Read Less</div> 
    </div>
    
  </div>
</div>

  {isBrowser && (<Suspense fallback={<div></div>}>
				<CompareList />
</Suspense>)}

<div class="y-container">
    <div class='y-content-container'>
    <div class="y-heading">WHY I WROTE <span>REVIVAL OF REVENUE</span></div>
    <div class="y-cont">
      <div class="y-text-cont">
        <div class="y-subheading">Everyday self-employed people ask me, “How in the world do I make more money? And how can I make money multiple ways?” Employees ask me, “How can I do more for God? How can I start a meaningful business from nothing?” Executives ask me, “Where is America going as a nation? How do you think we can navigate today’s political turmoil and economic challenges?” Everyone wants to maximize their wage, increase their personal income, and generate more business revenue, but doing so while doing something they love. They just don’t know how…UNTIL NOW! I wrote this book because, like so many people, I needed a Revival of Revenue myself.</div>
        <div class="y-signature"></div>
        <div class="y-cta-cont">
        </div>
      </div>  
      <div class="y-image-contain"><div class="y-image-cont"></div></div>
    </div>
    <div class="y-heading second-h">WHY I WROTE <span>REVIVAL OF REVENUE</span> FOR YOU</div>
    <div class="y-cont y-second-el">
      <div class="y-text-cont">
        <div class="y-subheading">Everyday self-employed people ask me, “How in the world do I make more money? And how can I make money multiple ways?” Employees ask me, “How can I do more for God? How can I start a meaningful business from nothing?” Executives ask me, “Where is America going as a nation? How do you think we can navigate today’s political turmoil and economic challenges?” Everyone wants to maximize their wage, increase their personal income, and generate more business revenue, but doing so while doing something they love. They just don’t know how…UNTIL NOW! I wrote this book because, like so many people, I needed a Revival of Revenue myself.</div>

      </div>  
    
      <div class="y-image-contain"><div class="y-image-cont"></div></div>
    </div>
    <div class="y-cta-cont">
        <div class="y-cta">Order your copy now</div>
        <div onClick={preReveal} class="y-preorderbtn">Pre-Order My Copy Now!</div>
        </div>
    </div>
    <div style={Object.assign({'background-position-y': `${plaxVal}%` })} class='bg-renderer-pl'></div>
    </div>

{isBrowser && (<Suspense fallback={<div></div>}>
				<Minibook />
</Suspense>)}

  <div class="show-me-title"><span>READ </span><span>THE </span><span>FIRST </span><span>PAGE </span><span>OF </span><span>PK'S </span><span>BOOK </span><span>NOW!</span></div>
  <div class="subheader-title">Start your Revival of Revenue now and peek inside to read the first page of PK's book.</div>
  <div class={`peek-inside-container ${book2}`}>
    <div id='mockup-element' className='mockup-element'>
    <div onClick={closeBook2outside} className="peek-inner-cont">
  <div onClick={closeBook} class='close-preorder'>X</div>
<div style={Object.assign({transform: `scale(${book2Scale})` })}  className="book-obj-cont">
<div onMouseOver={hoverBook} onMouseOut={leaveHoverBook} onClick={openBook} class="book2">
  <div class="book-cover cover2">
    <div class="effect"></div>
    <div class="light"></div>
  </div>
  <div class="book-inside">
  <div class='modal-book-cont'>
    <div class="modal-book-title">Chapter 1</div>
    <div class="modal-book-title-text">OFFENSE WINS CHAMPIONSHIPS</div>
    <div class='modal-boo-content'>
    <p>In Mini Book #1, discover how to build your personalized high-octane Offensive Playbook, Defensive Playbook, and Special Teams Playbook. Your Offensive Playbook shows you how to score more touchdowns by maximizing your income. Your Defensive Playbook shows you how to prevent touchdowns by minimizing your expenses. Your Special Teams Playbook shows you how to manage field position and score extra points by multiplying investments and managing taxation. Together, you are managing a complete game as the head coach of your household. However, the #1 threat to you as an Entrepreneurial is hitting the Middle Class, the Masses, and Main Street Small Business harder every year. People aren’t scoring enough touchdowns. Mini Book #1 helps you make more money, increase your income, and generate more revenue by Going On Offense like an Entrepreneurial. Remember, “Entrepreneurship is living a few years of your life like most people won’t, so that you can spend the rest of your life like most people can’t.”</p>
    <p>Why Are We Talking About Minimum Wage? In Mini Book #2 Maximum Wage, Patrick Kucera shows you how to go from a Minimized Wage to your Maximum Wage. Maximum wage is about making the most amount of money in the least amount of time and with the least amount of effort. Unlike Offense Wins Championships, this chapter is not focused on creating multiple sources of income. Rather, Maximum Wage is focused on how to generate more revenue from each source of income. To do so, you must Get OFF Bad Trades. This concept pertains to how you maximize every time you trade your time for dollars. After reading this chapter, you will discover how to earn your Maximum Wage in 5 entrepreneurial steps: STEP #1: Reposition Your Progression as a Micro Market Maker STEP #2: Revalue What You Produce and Prove It STEP #3: Rebrand Your Business Promise STEP #4: Restructure How You Are Paid STEP #5: Renegotiate Your Maximum Wage</p>
    <div onClick={preRevealBook2} class="y-preorderbtnsmall">Pre-Order My Copy Now!</div>
    </div>
  </div>
  </div>
</div>
</div>
</div>
</div>
<div onClick={closeBook2} class="darken-book"></div>
</div>
<div onClick={openBook} class="y-preorderbtn">Read The First Page</div>

<div id='shows-me-container'>
  <div class='show-me-title'><span>PK'S </span><span>BOOK </span><span>SHOWS </span><span>ME </span><span>HOW </span><span>TO...</span></div>
  <div class='show-me-grid'>
    <div class="show-me-item">Begin My Entrepreneurial Journey on Day 1</div>
    <div class="show-me-item">Go-to-Market By Following a 25-Step Entrepreneurial Journey</div>
    <div class="show-me-item">Generate Multiple Revenue Streams (Mini Book 1: Offense Wins Championships)</div>
    <div class="show-me-item">Increase Revenue from Each Source (Mini Book 2: Maximum Wage)</div>
    <div class="show-me-item">Go from minimum wage to “Maximum Wage” in 365 days</div>
    <div class="show-me-item">Turn your ideas into income on a budget</div>
    <div class="show-me-item">Turn your passions into profits with a predictable model!</div>
    <div class="show-me-item">Create your own economy with a clearly defined life plan</div>
  </div>
</div>

  

  <div class="book-spine"></div>
  <div id='book-container'>

    <div class="book-heading">Pre-Order PK’s Book Today</div>
    <div class="book-subheading">Read Chapter 1 Before PK’s Book Even Hits the Shelves!</div>
    <div class="book-maintext">Get access to the first chapter of PK’s upcoming book Revival of Revenue for free today! Don’t do life the hard way. Don’t do business alone. Start your Entrepreneurial Journey with PK on page 1 today!</div>
    <div onClick={preReveal} class="y-preorderbtn">Preorder My Copy Now!</div>
    <div class="book-render"></div>
    <div class="book-subheading">Experience Your Revival of Revenue and Become an Entrepreneurial with PK today.</div>
    <form id="bottom-opt-form">
<div className="first-name">
<label>First Name</label>
<input required className='bottom-section-form-name' placeholder="First Name" autocomplete="first name" name={'name'}/>
</div>
<div className="email-address-form">
<label>Email</label>
<input required className='bottom-section-form-name' placeholder="Email" autocomplete="email" name={'email'}/>
</div>
      <button className='y-preorderbtn' id="submit">
<span id="button-text">Subscribe Me!
</span>
</button>
</form>
  
  </div>



  </div>
            </Dashboard>
          )

    }



    export default IndexPage
