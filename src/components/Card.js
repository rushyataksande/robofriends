import React from 'react';

const Card = (props) => {
	return(
		
		<div className='bg-dark-maroon dib pa3 br3 ma2 grow bw2 shadow-4'>
			<img alt='pic' src={`https://robohash.org/${props.id}?200*200`}/>
				<div>
					<h2>{props.name}</h2>
					<p>{props.email}</p>
				</div>
		</div>

		);
}

export default Card;