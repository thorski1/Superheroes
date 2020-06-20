import * as Types from "../types"

export default (state: Types.IScreenReducerState, action: Types.ScreenReducerActions) => {
    switch (action.type) {
        case Types.ScreenReducerTypes.HomeScreen: 
            return {
                status: Types.ScreenReducerTypes.HomeScreen,
                category: ""
            }
        case Types.ScreenReducerTypes.IndividualHero: 
            return {
                status: Types.ScreenReducerTypes.IndividualHero,
                category: state.category ? state.category : ""
            }
        case Types.ScreenReducerTypes.Loading:
            return {
                status: Types.ScreenReducerTypes.Loading,
                category: ""
            }
        case Types.ScreenReducerTypes.CategoryScreen:
            return {
                status: Types.ScreenReducerTypes.CategoryScreen,
                category: action.payload
            }
    }
}