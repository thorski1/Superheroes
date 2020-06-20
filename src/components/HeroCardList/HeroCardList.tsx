import React, {
	useContext,
} from "react";
import HeroCard from "../HeroCard/HeroCard";
import * as Types from "../../types";
import { DataContext } from "../../App";
import Spacer from "../Spacer/Spacer";

export default () => {
	const { dataState } = useContext(DataContext);

	return (
		<>
			<Spacer height={150} />
		<div className="hero-card-list">
			
			{dataState.noResults ? (
				<h1>No Results Found...</h1>
			) : dataState.searchedHeroes.length > 0 ? (
				dataState.searchedHeroes.map(
					(hero: Types.IHeroObject) => {
						return <HeroCard key={hero.id} hero={hero} />;
					}
				)
			) : !dataState.noResults &&
			  dataState.searchedHeroes.length === 0 ? (
				dataState.heroes.map((hero: Types.IHeroObject) => {
					return <HeroCard key={hero.id} hero={hero} />;
				})
			) : null}
			</div>
			</>
	);
};
