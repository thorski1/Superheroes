import React, { useState, useContext } from "react";
import "./FilterDrawer.css";
import {
	ChevronUp,
	ChevronDown,
} from "react-feather";
import * as Types from "../../types";
import { DataContext, ScreenContext } from "../../App";
import useFilterArrays from "../../hooks/useFilterArrays";
import Spacer from "../Spacer/Spacer";

export default () => {
	const { dataState } = useContext(DataContext);
	const {alignmentArray, publisherArray, genderArray, groupAffiliationArray} = useFilterArrays()

	return (
		<div
			className={`filter-drawer-container ${
				dataState.filterDrawerOpen ? "open" : null
			}`}
		>
			<Category
				label="Alignment"
				filterArray={alignmentArray}
			/>
			<Category
				label="Publisher"
				filterArray={publisherArray}
			/>
			<Category
				label="Affiliation"
				filterArray={groupAffiliationArray}
			/>
			<Category label="Gender" filterArray={genderArray} />
		</div>
	);
};

const Category = ({
	label,
	filterArray,
}: Types.ICategoryProps) => {
	const [toggleCategory, setToggleCategory] = useState(
		false
	);
	return (
		<div className="category-container">
			<button
				className="category"
				onClick={() => setToggleCategory(!toggleCategory)}
			>
				<h1 className="category-title">{label}</h1>
				{toggleCategory ? (
					<ChevronUp size={25} color="#ddd" />
				) : (
					<ChevronDown size={25} color="#ddd" />
				)}
			</button>
			{toggleCategory &&
				filterArray.map((filter) => (
					<Checkbox
						key={filter}
						label={filter}
						payload={filter}
					/>
				))}
			<Spacer height={40} />
		</div>
	);
};

const Checkbox = ({ label, payload }: Types.ICheckboxProps) => {
    const {dispatchScreen} = useContext(ScreenContext)
    const {dispatchDataReducer } = useContext(DataContext)
	return (
		<button
			className="filter-button-container"
            onClick={() => {
                dispatchScreen({ type: Types.ScreenReducerTypes.CategoryScreen, payload })
                dispatchDataReducer({type: Types.DataReducerTypes.CloseFilterDrawer})
            }}
		>
			<h1 className="filter-label">{label}</h1>
		</button>
	);
};
