import React, { useContext } from "react";
import { DataContext } from "../../App";
import * as Types from "../../types";
import './SearchBar.css'

export default () => {
	const { dataState, dispatchDataReducer } = useContext(
		DataContext
	);
	const changeHandler = (value: string) => {
		const searchedHeroes = dataState.heroes.filter(
			(hero) => {
				return hero.name
					.toLowerCase()
					.includes(value.toLowerCase());
			}
		);
		if (value.length > 0 && searchedHeroes.length === 0) {
			dispatchDataReducer({
				type: Types.DataReducerTypes.NoSearchResults,
			});
		} else {
			dispatchDataReducer({
				type: Types.DataReducerTypes.SetSearchedResults,
				payload: searchedHeroes,
			});
		}
	};
	return (
		<input
			className="navbar-search-input"
			onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				changeHandler(e.target.value)
			}
			placeholder="Search for heroes"
		/>
	);
};
