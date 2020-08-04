import React from 'react'

const WeatherForm = (props) => {
	return (
		<div className='card card-body bg-primary'>
			<h2 className='text-center text-warning'>View your Weather</h2>

			<form onSubmit={props.getWeather}>
				<div className='form-group'>
					<input
						type='text'
						name='city'
						className='form-control'
						placeholder='Your City Name'
						autoFocus
						autoComplete='off'
					/>
				</div>

				<div className='form-group'>
					<input
						type='text'
						name='country'
						className='form-control'
						placeholder='Your Country Name'
						autoComplete='off'
					/>
				</div>

				<div className='form-group text-center'>
					<button className='btn btn-success px-5'>Get Weather</button>
				</div>
			</form>
		</div>
	)
}

export default WeatherForm
