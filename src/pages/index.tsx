  import React, { useState, useEffect, useRef, useMemo } from "react";
  import {
    Player,
    Ui,
    Video,
    Controls,
    Poster,
    Control,
    ControlGroup,
    Icon,
    TimeProgress,
    ScrubberControl,
    ClickToPlay,
    PlaybackControl,
    VolumeControl,
    ControlSpacer,
    CaptionControl,
  } from '@vime/react';
  import Layout from "../components/Layout";
  //import CustomizableVideoPlayer from '@folly-systems/custom-react-player'
  import useAuth from "../hooks/useAuth";
  //import UnAuthContent from "../components/UnAuthContent";
  import {loadStripe, StripeConstructorOptions} from '@stripe/stripe-js';
  import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
  import { isEmpty, remove } from 'lodash';
  import { gql , useMutation } from "@apollo/client";
  import SignUpForm from "../components/SignUpForm";
  //import RegisterOpt from "../components/RegisterOpt";
  import UnAuthContent from "../components/UnAuthContent";
  //import LoginVerify from "../components/LoginVerify";

  import InputField2 from '../components/inputfield';


  import { useBetween } from "use-between";
  import MessageAlert from "../components/MessageAlert";
  import * as Yup from "yup";
  import { FormikStepper, FormikStep, InputField } from "formik-stepper";
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



  const useShareableState = () => {

    const [playing, setPlaying] = useState({
      time: 0,
      status: false,
      speed: 1,
      });
      const [videoStatus, setVideoStatus] = useState(0)
      const [videoTime, setVideoTime] = useState(0)
      const [boxVisible, setBoxVisible] = useState("hidden");
      const [videoDetails, setVideoDetails] = useState({
        currentTime: 0,
        isPlaying: 0,
        speed: 1,
        totalTime: 0,
        });
    return {
    playing,
      setPlaying,
      videoStatus,
      setVideoStatus,
      videoTime,
      setVideoTime,
      boxVisible,
      setBoxVisible,
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

  const validationSchema = Yup.object().shape({
    // firstName: Yup.string().required("The First Name field is required"),
    phonefield: Yup.string().required("The phone field is required"),
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
      .email("The email must be a valid email address.")
      .required("The Email field is required"),
      email2: Yup.string()
      .email("The email must be a valid email address.")
      .required("The Email field is required"),
      email3: Yup.string()
      .email("The email must be a valid email address.")
      .required("The Email field is required"),
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
  mutation RegisterCustomer( $input: RegisterCustomerInput! ) {
      registerCustomer( input:$input ) {
          customer {
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
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showAlertBar, setShowAlertBar] = useState(true);
    const isBrowser = typeof window !== "undefined";
    const { boxVisible, setBoxVisible } = useBetween(useShareableState);
    const {playing, setPlaying } = useBetween(useShareableState);
    const {videoStatus, setVideoStatus } = useBetween(useShareableState);
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
          //username,
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
          registerCustomer: { customer },
        } = data;

        handleRegisterSuccess();
    
        const authData = {
          authToken: customer.jwtAuthToken,
          user: customer,
        };
        if (isBrowser) {
        console.log(customer)
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
      console.log(values);
      setSubmitting(false); //// Important
      setEmail(values.email);
      setDescription(values.phonefield);
      register();
  };

    // const handleRegister = async (event) => {
    //   console.log(event)
    //   if (undefined !== window) {
        
    //     event.preventDefault();

    //     // Validation and Sanitization.
    //     // const validationResult = validateAndSanitizeRegisterForm({
    //     //   //username,
    //     //   email,
    //     //   description
    //     //   //password,
    //     // });

    //     // If the data is valid.
    //    // if (validationResult.isValid) {
    //       //setUsername(validationResult.sanitizedData.username);
    //       //setPassword(validationResult.sanitizedData.password);
    //      // setEmail(validationResult.sanitizedData.email);
    //      // setDescription(validationResult.sanitizedData.description);
    //      setEmail(email);
    //      setDescription(description);
    //       register();
    //     // } else {
    //     //   setClientSideError(validationResult);
    //     // }
    //   }
    // };

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
      setPlaying({status: true, time: videoDetails.currentTime, speed: 1})
    };

    return (
      <div className="register-form col-md-6">
        {/* Title */}
        <h4 className="mb-2">Time's almost up!</h4>

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

        {/* Register Form */}
        {/* <form className="mt-1" onSubmit={(event) => handleRegister(event)}>
          {/* Username */}
          {/* <div className="form-group">
            <label className="lead mt-1" htmlFor="description">
              phone
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter phone"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div> */}

          {/* Username */}
          {/* <div className="form-group">
            <label className="lead mt-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div> */}
            
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
            prevBtnLabel="Change Email" /// Prev as default
            submitBtnLabel="Keep Watching" /// Submit as default
            nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
            prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
            submitBtnColor="success" /// as default and The color can be root variables or css => #fff
          >
            {/*  First Step */}
            <FormikStep>
              <InputField name="email" label="Email" type="email" />
            </FormikStep>
            {/* Second Step */}
            <FormikStep>
              <InputField name="phonefield" label="Phone" />
            
            </FormikStep>
          </FormikStepper>

        


          {/* Password */}
          {/* <div className="form-group">
            <label className="lead mt-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div> */}

          {/* Submit Button */}
          {/* <div className="form-group">
            <button
              className="btn btn-dark"
              disabled={registerLoading ? "disabled" : ""}
              type="submit"
            >
              Keep watching
            </button>
          </div>

          {/*	Loading */}
          {/* {registerLoading ? (
            <img
              className="woo-next-cart-item-spinner"
              //src={cartSpinnerGif}
              alt="loading"
            />
          ) : (
            ""
          )}
        </form> */}
      </div>
    );
  };


  const StepTwo = () => {
    const {playing, setPlaying } = useBetween(useShareableState);
    const {videoStatus, setVideoStatus } = useBetween(useShareableState);
    const {videoTime, setVideoTime } = useBetween(useShareableState);



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

      

      const bodied ={
          "acf": {
              "email1": values.email1,
              "email2": values.email2,
              "email3": values.email3,
                }
        } 
        

        const intent = await createIntent(values.email1 + '@@' + values.email2 + '@@' + values.email3 + '@@' + JSON.parse(localStorage.auth).authToken);
        console.log(intent)

  //     //   const response = await window
  //     //   .fetch('/api/friends-email', {
  //     //     method: `POST`,
  //     //     headers: {
  //     //       "content-type": "application/json",
  //     //     },
  //     //     body: values.email1 + '@@' + values.email2 + '@@' + values.email3 + '@@' + JSON.parse(localStorage.auth).authToken,
  //     //   })
  //     //   .then(res => res.json())
  //     // console.log(response)

  //       const request = await fetch('/api/friends-email', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: values.email1 + '@@' + values.email2 + '@@' + values.email3 + '@@' + JSON.parse(localStorage.auth).authToken
  //       })
    
  //  const intent2 = (await request.json());
  //  console.log(intent2)
  localStorage.removeItem("s2")
  localStorage.setItem("s3", "y")
      setVideoTime(2)
      setPlaying({status: true, time: 5.99, speed: 1})
      setVideoStatus(0)
      //// Important
      // setEmail(values.email);
      // setDescription(values.phonefield);



      
  };

    return (
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
      submitBtnLabel="Done" /// Submit as default
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
        <InputField name="email1" label="Email" type="email" />
        <InputField name="email2" label="Email" type="email" />
        <InputField name="email3" label="Email" type="email" />
      </FormikStep>
    </FormikStepper>
    )


  }


  const StepThree = () => {
    const {playing, setPlaying } = useBetween(useShareableState);
    const {videoStatus, setVideoStatus } = useBetween(useShareableState);
    const {videoTime, setVideoTime } = useBetween(useShareableState);
    const shareUrl = 'revrevdev.xyz';
    const title = 'rev';

    function handleSubmit(e: { preventDefault: () => void; }) {
      e.preventDefault();
  

      localStorage.removeItem("s3")
      localStorage.setItem("s4", "y")
        setVideoTime(3)
        setPlaying({status: true, time: 8.99, speed: 1})
        setVideoStatus(0)
    }



    return (
  <div className="sharesection">
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
    <button onClick={handleSubmit}>
    Continue
  </button>
  </div>
    )


  }

  const StepFour = () => {
    const {playing, setPlaying } = useBetween(useShareableState);
    const {videoStatus, setVideoStatus } = useBetween(useShareableState);
    const {videoTime, setVideoTime } = useBetween(useShareableState);


  //   function handleSubmit(e) {
  //     e.preventDefault();
  

  //     localStorage.removeItem("s4")
  //     localStorage.setItem("s5", "y")
  //        setVideoTime(3)
  //        setPlaying({status: true, time: 8.99, speed: 1})
  //        setVideoStatus(0)
  //   }



  //   return (
  // <div className="sharesection">
    
  // </div>
  //  )


  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const nameForm = useRef(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showAlertBar, setShowAlertBar] = useState(true);
  const [status, setStatus] = React.useState(0) // 0: no show, 1: show yes, 2: show no.
  const stripe = useStripe();
  const elements = useElements();

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
    } catch (error) {
      console.log('Failed to create intent');
      console.log(error);
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
    } catch (error) {
      console.log('Failed to create intent');
      console.log(error);
      return null;
    }
  }


  // async function getCustomerObj() {
  //   try {
  //     // Retrieve email and username of the currently logged in user.
  //     // getUserFromDB() is *your* implemention of getting user info from the DB

  //     const request = await fetch('/api/retrieve-customer', {
  //       method: 'POST',
  //       body: 'a',
  //     });
  //     const customerobj = (await request.json());
  //     // Update your user in DB to store the customerID
  //     // updateUserInDB() is *your* implementation of updating a user in the DB
  //     return customerobj;
  //   } catch (error) {
  //     console.log('Failed to get customer');
  //     console.log(error);
  //     return null;
  //   }
  // }

  // fetch(`/api/payment-intent`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //       amount: 500,
  //     }),
  //   headers: {
  //       "content-type": `application/json`,
  //      },
  //   })
  //   .then(res => res.json())
  //   .then(body => {
  //     console.log(body)
  //     stripe.confirmCardPayment(body.body.client_secret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //         billing_details: {
  //           email: "coolio123@gmail.com",
  //         },
  //       },
  //     });
  //   })

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
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
  };

  const handleSubmit = async (ev: { preventDefault: () => void; }) => {
    ev.preventDefault();
    setProcessing(true);
    const intent = await createIntent();
    console.log(intent)
    //setClientSecret(intent.body.client_secret);
    const payload = await stripe.confirmCardPayment(intent.body.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
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
        setVideoTime(4)
        setPlaying({status: true, time: 11.99, speed: 1})
        setVideoStatus(0)
      setSuccessMessage("first payment complete");
    }
  };




  return (
    <div className='payment'>
    <form id="payment-form" ref={nameForm} onSubmit={handleSubmit}>
      <InputField2 label={'email'} name={'firstname'}/>
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          Stripe dashboard.
        </a>
        Refresh the page to pay again.
      </p>
    </form>


    </div>
  );

  }



  const IndexPage = () => {

    //const promise = loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3');
  const [promise, setStripePromise] = useState(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'));
  // const stripePromise = useMemo(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))
  
    const [loggedIn, setLoggedIn] = useState(LoginVerify());
    const [loggedIn2, setLoggedIn2] = useState(false);
    //const [isLoggedIn, setLoggedIn] = useState(false);
    const [activate, setActivate] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [paused, setPaused] = useState(true);
    const player = useRef<HTMLVmPlayerElement>(null);
    const [showAlertBar, setShowAlertBar] = useState(true);
    const isBrowser = typeof window !== "undefined";
    const {videoStatus, setVideoStatus } = useBetween(useShareableState);
    const {videoTime, setVideoTime } = useBetween(useShareableState);
    const [titleText, setTitleText] = useState(30);
    const { boxVisible, setBoxVisible } = useBetween(useShareableState);
    const [currentTime, setCurrentTime] = useState(0);
    const [playerSize, setPlayerSize] = useState("regular");
    const currentVideoState = () => {
      return videoTime;
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




    const videoLink = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    // const [playing, setPlaying] = useState({
    // 	time: 0,
    // 	status: false,
    // 	speed: 1,
    //   });

      const {playing, setPlaying } = useBetween(useShareableState);
      const [videoProgressFunctions, setVideoProgressFunctions] = useState({
        getPlayingStatus: null,
        getCurrentTime: null,
        getPlaybackSpeed: null,
        });
      
        const { videoDetails, setVideoDetails } =  useBetween(useShareableState);
        
        const handlePlayPause = (status: any) => () => {
        setPlaying({
          status,
          time: videoProgressFunctions.getCurrentTime?.() || playing.time,
          speed: videoProgressFunctions.getPlaybackSpeed?.() || playing.speed,
        });
        };
    
        const handlePlaybackSpeedChange = (speed: any) => () => {
        setPlaying({
          speed,
          time: videoProgressFunctions.getCurrentTime?.() || playing.time,
          status: videoProgressFunctions.getPlayingStatus?.() || playing.status,
        });
        };
      
        const storeVideoDetailFunctions = ({
        getPlaybackSpeed,
        getCurrentTime,
        getPlayingStatus,
        }) => {
        setVideoProgressFunctions({
          getPlayingStatus: getPlayingStatus,
          getCurrentTime: getCurrentTime,
          getPlaybackSpeed: getPlaybackSpeed,
        });
        };
    
        const handleVideoProgress = ({
        currentTime,
        isPlaying,
        speed,
        totalTime,
        }) => {
        setVideoDetails({ currentTime, isPlaying, speed, totalTime });
        if (currentTime > 3 && LoginVerify() === false ) {
        setBoxVisible('reveal')
      //if (currentTime > 3 ) {
          console.log('yes')
          if (Math.floor(33 - currentTime) !== titleText ) {
            setTitleText(Math.floor(33.99 - currentTime));
          }
          if (currentTime > 33) {
          setPlaying({status: false, time: 32.99, speed: speed})
          }
          setVideoStatus(1)
        } 
        if (currentTime > 66  && step2verify()===true) {
          console.log('yes2')
          setPlaying({status: false, time: 65.99, speed: speed})
          setVideoStatus(2)
        }
        if (currentTime > 79  && step3verify()===true) {
          console.log('yes3')
          setPlaying({status: false, time: 78.99, speed: speed})
          setVideoStatus(3)
        }
        if (currentTime > 112  && step4verify()===true) {
          console.log('yes3')
          setPlaying({status: false, time: 111.99, speed: speed})
          setVideoStatus(4)
        }
        console.log(currentTime)
        console.log(isPlaying)
        console.log(loggedIn)
        console.log(videoTime)
        console.log(currentVideoState())
        };


    
        const onClick = () => {
          setPaused(!paused);
          if (playerSize === "regular") {
            setPlayerSize("large")
          } else {
            setPlayerSize("regular")
          }
        };
        const onTimeUpdate = (event: CustomEvent<number>) => {
          
          const currentTimeb = event.detail;
          setCurrentTime(currentTimeb);
          console.log(currentTimeb);
          // if (event.detail > 5) {
          //   console.log('hey')
          //   player.current!.pause()
          // }
          if (currentTimeb > 3 && LoginVerify() === false ) {
            setBoxVisible('reveal')
          //if (currentTime > 3 ) {
              console.log('yes')
              if (Math.floor(33 - currentTimeb) !== titleText ) {
                setTitleText(Math.floor(33.99 - currentTimeb));
              }
              if (currentTimeb > 33) {
                setCurrentTime(32.99);
                player.current!.pause()
              }
              setVideoStatus(1)
            } 
            if (currentTimeb > 66  && step2verify()===true) {
              console.log('yes2')
              player.current!.pause()
              setVideoStatus(2)
            }
            if (currentTimeb > 79  && step3verify()===true) {
              console.log('yes3')
              player.current!.pause()
              setVideoStatus(3)
            }
            if (currentTimeb > 112  && step4verify()===true) {
              console.log('yes3')
              player.current!.pause()
              setVideoStatus(4)
            }
        };



        return (
          <Layout>

      
        <div className={`rev-player ${playerSize}`}>

        {  typeof window !== 'undefined' && Player && <Player
        onVmCurrentTimeChange={onTimeUpdate}
        playsinline
        currentTime={currentTime}
        ref={player}
      theme="dark"
      style={{ '--vm-player-theme': '#CD5C5C' }}
    >
              <div className={`rev-optin ${boxVisible}`}>
<div className='time-section'>
              <div className='time-remaining'>{titleText}</div>
                <div class="star-spinner">
	<div class="outer-star">
<div class="spinnerz">
		</div>
	</div>
	<div class="inner-star">
		<div class="spinnerz">
		</div>
	</div>
</div>
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
                  
                <Elements stripe={promise}>
                <StepFour />  
                </Elements>
                )
              : ""}
              </div>
      <Video
        crossOrigin
        poster="https://media.vimejs.com/poster.png"
      >
        <source 
          data-src="https://media.vimejs.com/720p.mp4" 
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
      <Ui>
      <Poster />
      <ClickToPlay />
          <Controls fullWidth>
            <ControlGroup>
              <ScrubberControl />
            </ControlGroup>
                
            <ControlGroup space="top">
              <PlaybackControl />
              <VolumeControl />
              <TimeProgress separator="/"/>
              <ControlSpacer />
              <CaptionControl />

              <Control
        label="testelement"
        pressed={paused}
      onClick={onClick}
      >
        <Icon name="fullscreen-enter" library="material"/>
      </Control>


            </ControlGroup>
          </Controls>
        </Ui>
        
    </Player> }
  
      </div>

            
          </Layout>
        )

  }

  export default IndexPage
