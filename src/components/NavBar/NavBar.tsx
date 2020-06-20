import React, { useContext } from "react";
import "./NavBar.css";
import * as Types from "../../types";
import { Home, Menu } from "react-feather";
import { ScreenContext, DataContext } from "../../App";
import SearchBar from "../SearchBar";
import Spacer from "../Spacer/Spacer";

export default () => {
	const { dispatchScreen, screen } = useContext(
		ScreenContext
	);
	const { dataState, dispatchDataReducer } = useContext(
		DataContext
	);

	return (
		<div className="navbar-container">
			{screen.status !==
			Types.ScreenReducerTypes.HomeScreen ? (
				<button
					className="nav-link"
					onClick={() => {
						dispatchScreen({
							type: Types.ScreenReducerTypes.HomeScreen,
						});
						dispatchDataReducer({
							type:
								Types.DataReducerTypes.CloseFilterDrawer,
						});
					}}
				>
					<Home size={40} color="#ccc" />
				</button>
			) : (
				<Spacer width={10} />
			)}
			{screen.status ===
			Types.ScreenReducerTypes.HomeScreen ? (
					<SearchBar />
			) : (
				<Spacer width={10} />
			)}

			<button
				className="nav-link"
				onClick={() => {
					dispatchDataReducer({
						type: Types.DataReducerTypes.ToggleFilterDrawer,
						payload: !dataState.filterDrawerOpen,
					});
				}}
			>
				<Menu size={40} color="#eee" />
			</button>
		</div>
	);
};
