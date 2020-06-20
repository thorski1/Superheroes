import React, { useContext } from "react";
import "./HeroCard.css";
import * as Types from "../../types";
import { DataContext, ScreenContext } from "../../App";

export default ({ hero }: { hero: Types.IHeroObject }) => {
	const { dispatchDataReducer } = useContext(DataContext)
	const {dispatchScreen} = useContext(ScreenContext)
	return (
		<button
				className="hero-card"
				onClick={() => {
					dispatchDataReducer({
						type: Types.DataReducerTypes.SetIndividualHero,
						payload: hero,
					});
					dispatchScreen({
						type: Types.ScreenReducerTypes.IndividualHero,
					});
				}}
			>
				<img
					src={hero.images.sm}
					alt={hero.name}
					className="hero-card-image"
				/>
			
				<h1 className="hero-card-name">{hero.name}</h1>
			</button>
		
	);
};
