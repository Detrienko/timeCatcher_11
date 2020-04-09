import React from 'react';
import classes from './Statistics.module.css';

	const Statistics = (props) =>{

		let hours = 5;
		let minutes = 10;

		return(
			<div className={classes.statisticsWrapper}>
				<span>Total hours: {hours}h{minutes}m</span><br/><br/><br/><br/>
				<span>24%</span>
			</div>
			)	
	}

	export default Statistics;
