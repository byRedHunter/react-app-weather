import React from 'react'

const WeatherInfo = (props) => {
	return (
		<div>
			{props.weather.error && (
				<div className='alert alert-danger text-center'>
					{props.weather.error}
				</div>
			)}

			{props.weather.country === '' ? (
				''
			) : (
				<div className='card card-body bg-secondary'>
					<p className='text-center h3'>
						{props.weather.city}, {props.weather.country}
					</p>

					<p>
						<span className='font-weight-bold'>Temperature:</span>
						{props.weather.temperature} °C, {props.weather.description}
					</p>

					<p>
						<span className='font-weight-bold'>Humidity:</span>
						{props.weather.humidity}
					</p>

					<p>
						<span className='font-weight-bold'>Wind Speed:</span>
						{props.weather.wind_speed}
					</p>
				</div>
			)}
		</div>
	)
}

export default WeatherInfo
