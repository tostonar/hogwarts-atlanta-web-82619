import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>

			<div class="ui checkbox">
				<input onChange={props.filterPigs} name="sort" type="radio" class="hidden" readonly="" tabindex="0" />
				<label>Show greased pigs </label>
				<input onChange={props.alphabetizePigs} name="sort" type="radio" class="hidden" readonly="" tabindex="0" />
				<label>Sort pigs alphabetically</label>
				<input onChange={props.sortPigsByWeight} name="sort" type="radio" class="hidden" readonly="" tabindex="0" />
				<label>Sort pigs by weight</label>
			</div>

		</div>
	)
}

export default Nav
