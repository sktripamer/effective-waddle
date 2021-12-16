import React, { useState } from "react";
import { gql , useMutation } from "@apollo/client";
import { isEmpty, remove } from 'lodash';
import MessageAlert from "./MessageAlert";
import { FormikStepper, FormikStep, InputField } from "formik-stepper";

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
  
  export const setAuth = (authData) => {
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
    // Check if the user is validated already.
    if (isBrowser) {
      const userValidated = isUserValidated();
  
      // Redirect the user to My Account page if user is already validated.
      if (!isEmpty(userValidated)) {
        // @TODO
      }
    }
  
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
    const setClientSideError = (validationResult) => {
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
    const handleRegister = async (event) => {
      if (undefined !== window) {
        event.preventDefault();
  
        // Validation and Sanitization.
        // const validationResult = validateAndSanitizeRegisterForm({
        //   //username,
        //   email,
        //   description
        //   //password,
        // });
  
        // If the data is valid.
       // if (validationResult.isValid) {
          //setUsername(validationResult.sanitizedData.username);
          //setPassword(validationResult.sanitizedData.password);
         // setEmail(validationResult.sanitizedData.email);
         // setDescription(validationResult.sanitizedData.description);
         setEmail(email);
         setDescription(description);
          register();
        // } else {
        //   setClientSideError(validationResult);
        // }
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
    };
  
    return (
      <div className="register-form col-md-6">
        {/* Title */}
        <h4 className="mb-2">Enter your email to keep watching</h4>
  
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
            onSubmit={(event) => handleRegister(event)} /// onSubmit Function
            initialValues={{
              phone: "",
              email: "",
            }}
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
             
             <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            </FormikStep>
            {/* Second Step */}
            <FormikStep
              label="Login Info"
              withIcons="fa fa-lock"
              iconColor="white"
              circleColor="danger"
            >
              <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter phone"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
              {/* <InputField name="phone" label="Phone" type="number" /> */}

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
  
  export default RegisterOpt;
