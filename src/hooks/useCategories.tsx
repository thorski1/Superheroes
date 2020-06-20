import * as Types from "../types";
export default (heroList: Types.IHeroObject[]) => {
	const alignmentFilter = (filter: string) => {
		return heroList.filter(
			(hero) => hero.biography.alignment === filter
		);
	};
	const publisherFilter = (filter: string) => {
		return heroList.filter(
			(hero) => hero.biography.publisher === filter
		);
	};
	const genderFilter = (filter: string) => {
		return heroList.filter(
			(hero) => hero.appearance.gender === filter
		);
	};
	const affiliationFilter = (filter: string) => {
		return heroList.filter((hero) =>
			hero.connections.groupAffiliation.includes(filter)
		);
	};

	return {
		alignmentFilter,
		publisherFilter,
		genderFilter,
		affiliationFilter,
	};
};
