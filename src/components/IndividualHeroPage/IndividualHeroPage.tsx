import React, { useContext } from "react";
import * as Types from "../../types";
import "./IndividualHeroPage.css";
import { DataContext, ScreenContext } from "../../App";
import Spacer from "../Spacer/Spacer";
import StatusBar from "../StatusBar/StatusBar";
import { ChevronLeft } from "react-feather";

export default () => {
	const { dataState } = useContext(
		DataContext
	);
	const { dispatchScreen, screen} = useContext(ScreenContext)
	const {
		alterEgos,
		placeOfBirth,
		alignment,
		firstAppearance,
		publisher,
		fullName,
	} = dataState.hero!.biography;
	const { occupation, base } = dataState.hero!.work;
	const { gender, race } = dataState.hero!.appearance;
	const {
		strength,
		combat,
		intelligence,
		durability,
		power,
		speed,
	} = dataState.hero!.powerstats;
	const individualHeroInfoArray: Types.IIndividualHeroInfoProps[] = [
		{ label: "Alter Egos", data: alterEgos },
		{ label: "Place of Birth", data: placeOfBirth },
		{ label: "Alignment", data: alignment },
		{ label: "First Appearance", data: firstAppearance },
		{ label: "Publisher", data: publisher },
		{ label: "Occupation", data: occupation },
		{ label: "Base", data: base },
		{ label: "Gender", data: gender },
		{ label: "Race", data: race },
	];
	const powerstatsArray: Types.IStatusBarContainerProps[] = [
		{ label: "Strength", data: strength, color: "#388E3C" },
		{ label: "Combat", data: combat, color: "#E65100" },
		{
			label: "Intelligence",
			data: intelligence,
			color: "#006064",
		},
		{
			label: "Durability",
			data: durability,
			color: "#311B92",
		},
		{ label: "Power", data: power, color: "#607D8B" },
		{ label: "Speed", data: speed, color: "#FF6F00" },
	];
	const categoryScreen = screen.category
	return (
		<>
			<Spacer height={130} />
			{categoryScreen &&
				<button className="back-button" onClick={() => dispatchScreen({ type: Types.ScreenReducerTypes.CategoryScreen, payload: screen.category })}>
					<ChevronLeft size={30} color="#333" />
				<h1 className="back-button-text">Back</h1>
				</button>}
			{dataState.hero ? (
				<>
					<div className="individual-hero-screen">
						<div className="individual-hero-screen-row">
							<div className="individual-hero-img-container">
								<img
									className="individual-hero-img"
									src={dataState.hero.images.lg}
									alt={dataState.hero.name}
								/>
								<Spacer height={20} />
								<h1 className="individual-hero-name">
									{dataState.hero.name}
								</h1>
								<Spacer height={20} />
								<h1 className="individual-hero-info-data">
									{fullName}
								</h1>
							</div>
							<div className="individual-hero-info-container">
								{individualHeroInfoArray.map(
									(info, index) => {
										return !info.data ||
											info.data === "-" ? null : (
											<div key={index}>
												{index === 0 ? null : (
													<Spacer height={30} />
												)}
												<IndividualHeroInfo
													label={info.label}
													data={info.data}
												/>
											</div>
										);
									}
								)}
							</div>
						</div>
							<div className="individual-hero-powerstats">
								{powerstatsArray.map((stat, index) => {
									return (
										<div key={index}>
											{index === 0 ? null : (
												<Spacer height={40} />
											)}
											<StatusBarContainer
												data={stat.data}
												label={stat.label}
												color={stat.color}
											/>
										</div>
									);
								})}
						</div>
						<Spacer height={50} />
					</div>
					<Spacer height={100} />
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
};

const IndividualHeroInfo = ({
	label,
	data,
}: Types.IIndividualHeroInfoProps) => {
	return (
		<h2 className="individual-hero-info">
			{label}:{" "}
			<span className="individual-hero-info-data">
				{data}
			</span>
		</h2>
	);
};

const StatusBarContainer = ({
	label,
	data,
	color,
}: Types.IStatusBarContainerProps) => {
	return (
		<div className="individual-hero-powerstat-container">
			<h2 className="individual-hero-powerstat-text">
				{label}:
			</h2>
			<StatusBar color={color} percentage={data} />
		</div>
	);
};
