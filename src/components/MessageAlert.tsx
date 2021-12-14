import React from 'react';
import DOMPurify from 'dompurify';

const isBrowser = typeof window !== "undefined";

export const sanitize = (content) => {
	return isBrowser ? DOMPurify?.sanitize(content , {USE_PROFILES: {html: true}}) : content
}

const MessageAlert = ( { message, success, onCloseButtonClick } ) => {

	return (

		<div className="alert alert-dismissible mt-3" style={ { border: '1px solid #cecdcd' } }>
			<button type="button" onClick={ onCloseButtonClick } className="close text-muted" data-dismiss="alert">
				<small>&times;</small>
			</button>
			<span
				className={ success ? 'text-success' : 'text-danger' }
				dangerouslySetInnerHTML={ { __html: sanitize( message ) } }
			/>
		</div>

	);
};

export default MessageAlert;
