import React, { useEffect, useReducer } from "react";
import "./App.css";
import HeroCardList from "./components/HeroCardList/HeroCardList";
import NavBar from "./components/NavBar/NavBar";
import * as Types from "./types";
import axios from "axios";
import IndividualHeroPage from "./components/IndividualHeroPage/IndividualHeroPage";
import screenReducer from "./reducers/screenReducer";
import dataReducer from "./reducers/dataReducer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import useCategories from "./hooks/useCategories";
import CategoriesScreen from "./components/CategoriesScreen";
import useFilterArrays from "./hooks/useFilterArrays";
import FilterDrawer from "./components/FilterDrawer";

export const DataContext = React.createContext(
	{} as Types.IDataContext
);

export const ScreenContext = React.createContext(
	{} as Types.IScreenContext
);

function App() {
	const [screen, dispatchScreen] = useReducer(
		screenReducer,
		{
			status: Types.ScreenReducerTypes.Loading,
			category: "",
		}
	);
	const [dataState, dispatchDataReducer] = useReducer(
		dataReducer,
		{
			heroes: [],
			hero: null,
			searchedHeroes: [],
			noResults: false,
			filterDrawerOpen: false,
		}
	);
	const {
		affiliationFilter,
		alignmentFilter,
		genderFilter,
		publisherFilter,
	} = useCategories(dataState.heroes);
	const {
		groupAffiliationArray,
		publisherArray,
	} = useFilterArrays();

	const fetchData = async () => {
		dispatchScreen({
			type: Types.ScreenReducerTypes.Loading,
		});
		const result = await axios.get(
			"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json"
		);
		dispatchScreen({
			type: Types.ScreenReducerTypes.HomeScreen,
		});
		dispatchDataReducer({
			type: Types.DataReducerTypes.GetList,
			payload: result.data,
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [screen]);

	return (
		<DataContext.Provider
			value={{
				dataState,
				dispatchDataReducer,
			}}
		>
			<ScreenContext.Provider
				value={{ screen, dispatchScreen }}
			>
				<div className="App">
					<NavBar />
					{dataState.filterDrawerOpen ? (
						<FilterDrawer />
					) : null}
					{screen.status ===
						Types.ScreenReducerTypes.Loading && (
						<LoadingSpinner />
					)}
					{screen.status ===
						Types.ScreenReducerTypes.HomeScreen && (
						<HeroCardList />
					)}
					{screen.status ===
						Types.ScreenReducerTypes.IndividualHero && (
						<IndividualHeroPage />
					)}
					{screen.status ===
						Types.ScreenReducerTypes.CategoryScreen &&
						screen.category === "Good" && (
							<CategoriesScreen
								heroList={alignmentFilter("good")}
								title="Heroes"
							/>
						)}
					{screen.status ===
						Types.ScreenReducerTypes.CategoryScreen &&
						screen.category === "Evil" && (
							<CategoriesScreen
								heroList={alignmentFilter("bad")}
								title="Villains"
							/>
						)}
					{publisherArray.map((filter) => {
						return (
							screen.status ===
								Types.ScreenReducerTypes.CategoryScreen &&
							screen.category === filter && (
								<CategoriesScreen
									heroList={publisherFilter(filter)}
									title={filter}
								/>
							)
						);
					})}
					{groupAffiliationArray.map((filter) => {
						return screen.status ===
							Types.ScreenReducerTypes.CategoryScreen &&
							screen.category === filter ? (
							<CategoriesScreen
								heroList={affiliationFilter(filter)}
								title={`The ${filter}`}
							/>
						) : null;
					})}
					{screen.status ===
						Types.ScreenReducerTypes.CategoryScreen &&
						screen.category === "Male" && (
							<CategoriesScreen
								heroList={genderFilter("Male")}
								title="Male Heroes & Villains"
							/>
						)}
					{screen.status ===
						Types.ScreenReducerTypes.CategoryScreen &&
						screen.category === "Female" && (
							<CategoriesScreen
								heroList={genderFilter("Female")}
								title="Female Heroes & Villains"
							/>
						)}
				</div>
			</ScreenContext.Provider>
		</DataContext.Provider>
	);
}

export default App;
