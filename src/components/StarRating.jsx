import React from 'react';


export default function StarRating(props) {



return (
    <>
            <div class='review-total-cont'>
        {props.total === 0 ?
        (
          <div className='rating-cont no-reviews'>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
          </div>
        ) : ''

        }
              {props.total === 1 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {props.total === 1.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {props.total === 2 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {props.total === 2.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {props.total === 3 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {props.total === 3.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {props.total === 4 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {props.total === 4.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
        </div>
        ) : ''

        }
              {props.total === 5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
        </div>
        ) : ''

        }

  </div>  

    </>
)

}
