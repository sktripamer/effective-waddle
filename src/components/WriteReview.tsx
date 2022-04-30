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
    mutation updateReview($id: ID, $rating: Int!, $content: String!, $commentOn: Int!) {
        updateReview(input: {id: $id, rating: $rating, content: $content, commentOn: $commentOn}) {
            rating
            clientMutationId
          }
      }
    `;
}



  const commentOn = props.commentOn;
  const previous = props.previous;
  const ID = props.updateComment;
    const previousContent = props.previousContent;
  const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE);
  const wasProfileUpdated = Boolean(data?.writeReview?.rating);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    const rating = parseInt(values.rating);
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
        variables: { ID, commentOn, rating, content },
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
        <label htmlFor="profile-first-name">Review 1-10</label>
        <input
          id="profile-first-name"
          type="text"
          name="rating"
          defaultValue={previous}
          autoComplete="given-name"
        />
        <label htmlFor="profile-last-name">review content</label>
        <input
          id="profile-last-name"
          type="text"
          name="content"
          defaultValue={previousContent}
          autoComplete="family-name"
        />
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
