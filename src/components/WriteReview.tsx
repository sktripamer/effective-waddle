import * as React from "react";
import { useMutation, gql } from "@apollo/client";

const UPDATE_PROFILE = gql`
mutation writeReview($commentOn: Int!, $content: String!, $rating: Int!) {
    writeReview(
      input: {rating: $rating, commentOn: $commentOn, content: $content}
    ) {
      clientMutationId
      rating
    }
  }
`;


export default function WriteReview(props: { commentOn: Number }) {
  const commentOn = props.commentOn;
  const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE);
  const wasProfileUpdated = Boolean(data?.writeReview?.rating);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
  
    console.log(parseInt(values.rating))

   console.log(data)
   console.log(values)
    updateProfile({
      variables: { commentOn, ...values, },
    }).catch(error => {
      console.error(error);
    });
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
          defaultValue={'10'}
          autoComplete="given-name"
        />
        <label htmlFor="profile-last-name">review content</label>
        <input
          id="profile-last-name"
          type="text"
          name="content"
          defaultValue={''}
          autoComplete="family-name"
        />
        {error ? (
          <p className="error-message">{error.message}</p>
        ) : null}
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update'}
        </button>
      </fieldset>
    </form>
    </div>
  );
}
