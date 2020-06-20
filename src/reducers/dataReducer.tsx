import * as Types from "../types"

export default (state: Types.IDataReducerState, action: Types.DataReducerActions) => {
    switch (action.type) {
        case Types.DataReducerTypes.GetList:
            return {
                ...state,
                heroes: action.payload
            }
        case Types.DataReducerTypes.SetIndividualHero:
            return {
                ...state,
                hero: action.payload,
                searchedHeroes: [],
                filterDrawerOpen: false
            }
        case Types.DataReducerTypes.SetSearchedResults:
            return {
                ...state,
                searchedHeroes: action.payload,
                noResults: false
            }
        case Types.DataReducerTypes.NoSearchResults:
            return {
                ...state,
                noResults: true
            }
        case Types.DataReducerTypes.ToggleFilterDrawer:
            return {
                ...state,
                filterDrawerOpen: action.payload
            }
        case Types.DataReducerTypes.CloseFilterDrawer:
            return {
                ...state,
                filterDrawerOpen: false
            }
    }
}