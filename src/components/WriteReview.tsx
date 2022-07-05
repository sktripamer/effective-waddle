import * as React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import {useState } from "react";


export default function WriteReview(props: { commentOn: Number, updateComment: String, previous: String, previousContent: String }) {
let UPDATE_PROFILE;

if (props.updateComment === '0') {
   UPDATE_PROFILE = gql`
    mutation writeReview($commentOn: Int!, $content: String!, $rating: Int!) {
        writeReview(
          input: {rating: $rating, commentOn: $commentOn, content: $content}
        ) {
          clientMutationId
          rating
        }
      }
    `;
} else {
   UPDATE_PROFILE = gql`
    mutation updateReview($id: ID!, $rating: Int!, $content: String!, $commentOn: Int!) {
        updateReview(input: {id: $id, rating: $rating, content: $content, commentOn: $commentOn}) {
            rating
            clientMutationId
          }
      }
    `;
}



  const commentOn = props.commentOn;
  const previous = props.previous;
  const id = props.updateComment;
    const previousContent = props.previousContent;
  const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE);
  const wasProfileUpdated = Boolean(data?.writeReview?.rating);
  const [checked, setChecked] = useState(true)
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
   let rating = 5;
   if (((document.getElementById('rating-5') as HTMLInputElement)).checked === true) rating = 5;
   if (((document.getElementById('rating-4') as HTMLInputElement)).checked === true) rating = 4;
   if (((document.getElementById('rating-3') as HTMLInputElement)).checked === true) rating = 3;
   if (((document.getElementById('rating-2') as HTMLInputElement)).checked === true) rating = 2;
   if (((document.getElementById('rating-1') as HTMLInputElement)).checked === true) rating = 1;
  const content = values.content;
   console.log(data)
   console.log(values)
   if (props.updateComment === '0') {
    updateProfile({
        variables: { commentOn, rating, content },
      }).catch(error => {
        console.error(error);
      });
   } else {
    updateProfile({
        variables: { id, commentOn, rating, content },
      }).catch(error => {
        console.error(error);
      });
   }

  }

  return (
    <div className='profile-page'>
    <form method="post" onSubmit={handleSubmit}>
      {wasProfileUpdated ? (
        <p className="profile-update-confirmation">
          Review Submitted, check back later!
        </p>
      ) : null}
      <fieldset disabled={loading} aria-busy={loading}>

        <label class='review-content-label' htmlFor="profile-last-name">Review Content</label>
        <textarea
          id="profile-last-name"
          type="textarea"
          name="content"
          defaultValue={previousContent}
        />
              <div class="rating">
      <input type="radio"  defaultChecked={checked} onChange={() => setChecked(!checked)} name="rating" id="rating-5"/>
      <label for="rating-5"></label>
      <input type="radio" name="rating" id="rating-4"/>
      <label for="rating-4"></label>
      <input type="radio" name="rating" id="rating-3"/>
      <label for="rating-3"></label>
      <input type="radio" name="rating" id="rating-2"/>
      <label for="rating-2"></label>
      <input type="radio" name="rating" id="rating-1"/>
      <label for="rating-1"></label>
  </div>
        {error ? (
          <p className="error-message">{error.message}</p>
        ) : null}

        {props.updateComment !== '0' ?
        (
            <button type="submit" disabled={loading}>
            {loading ? 'Update Review' : 'Update Review'}
          </button>
        ) :
        (
            <button type="submit" disabled={loading}>
            {loading ? 'Submit Review' : 'Submit Review'}
          </button>
        )
        
        }



      </fieldset>
    </form>
    </div>
  );
}
