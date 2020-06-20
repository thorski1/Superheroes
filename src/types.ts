import { Dispatch } from "react";

export interface IDataContext {
	dataState: IDataReducerState;
	dispatchDataReducer: Dispatch<DataReducerActions>;
}

export interface IScreenContext {
	screen: IScreenReducerState;
	dispatchScreen: Dispatch<ScreenReducerActions>;
}

export interface IHeroObject {
	appearance: IAppearanceObject;
	biography: IBiographyObject;
	connections: IConnectionsObject;
	id: number;
	images: IImagesObject;
	name: string;
	powerstats: IPowerstatsObject;
	slug: string;
	work: IWorkObject;
}

export interface IAppearanceObject {
	eyeColor: string;
	gender: string;
	hairColor: string;
	height: string[];
	race: string;
	weight: string[];
}

export interface IBiographyObject {
	aliases: string[];
	alignment: string;
	alterEgos: string;
	firstAppearance: string;
	fullName: string;
	placeOfBirth: string;
	publisher: string;
}

export interface IConnectionsObject {
	groupAffiliation: string;
	relatives: string;
}

export interface IImagesObject {
	xs: string;
	sm: string;
	md: string;
	lg: string;
}

export interface IPowerstatsObject {
	combat: number;
	durability: number;
	intelligence: number;
	power: number;
	speed: number;
	strength: number;
}

export interface IWorkObject {
	base: string;
	occupation: string;
}

export enum DataReducerTypes {
	GetList = "getList",
	SetIndividualHero = "setIndividualHero",
	SetSearchedResults = "setSearchedResults",
	NoSearchResults = "noSearchResults",
	ToggleFilterDrawer = "toggleFilterDrawer",
	CloseFilterDrawer = "closeFilterDrawer"
}

export interface IDataReducerState {
	heroes: IHeroObject[];
	hero: IHeroObject | null;
	searchedHeroes: IHeroObject[];
	noResults: boolean;
	filterDrawerOpen: boolean;
}

export interface IGetListAction {
	type: DataReducerTypes.GetList;
	payload: IHeroObject[];
}

export interface ISetIndividualHeroAction {
	type: DataReducerTypes.SetIndividualHero;
	payload: IHeroObject;
}

export interface ISetSearchedResultsAction {
	type: DataReducerTypes.SetSearchedResults;
	payload: IHeroObject[];
}

export interface INoSearchResultsAction {
	type: DataReducerTypes.NoSearchResults;
}

export interface IToggleFilterDrawerAction {
	type: DataReducerTypes.ToggleFilterDrawer;
	payload: boolean;
}

export interface ICloseFilterDrawerAction {
	type: DataReducerTypes.CloseFilterDrawer
}

export type DataReducerActions =
	| IGetListAction
	| ISetIndividualHeroAction
	| ISetSearchedResultsAction
	| INoSearchResultsAction
	| IToggleFilterDrawerAction
	| ICloseFilterDrawerAction

export enum ScreenReducerTypes {
	HomeScreen = "homeScreen",
	IndividualHero = "individualHero",
	Loading = "Loading",
	CategoryScreen = "categoryScreen"
}

export interface IScreenReducerState {
	status: ScreenReducerTypes;
	category: string;
}

export interface IHomeScreenAction {
	type: ScreenReducerTypes.HomeScreen;
}

export interface IIndividualHeroAction {
	type: ScreenReducerTypes.IndividualHero;
}

export interface ILoadingAction {
	type: ScreenReducerTypes.Loading;
}

export interface ICategoryScreenAction {
	type: ScreenReducerTypes.CategoryScreen
	payload: string;
}

export type ScreenReducerActions =
	| IHomeScreenAction
	| IIndividualHeroAction
	| ILoadingAction
	| ICategoryScreenAction

export interface ISpacerProps {
	width?: number;
	height?: number;
}

export interface IStatusBarProps {
	percentage: number;
	color: string;
}

export interface IIndividualHeroInfoProps {
	label:
		| "Full Name"
		| "Alter Egos"
		| "Place of Birth"
		| "Alignment"
		| "First Appearance"
		| "Publisher"
		| "Occupation"
		| "Base"
		| "Gender"
		| "Race";
	data: string;
}

export interface IStatusBarContainerProps {
	label:
		| "Strength"
		| "Combat"
		| "Intelligence"
		| "Durability"
		| "Power"
		| "Speed";
	data: number;
	color:
		| "#388E3C"
		| "#E65100"
		| "#006064"
		| "#311B92"
		| "#607D8B"
		| "#FF6F00";
}

export interface ICategoryProps {
	label: "Gender" | "Alignment" | "Affiliation" | "Publisher"
	filterArray: string[]
}

export interface ICheckboxProps {
	label: string;
	payload: string;
}

export interface ICategoriesScreenProps {
	heroList: IHeroObject[];
	title: string;
}