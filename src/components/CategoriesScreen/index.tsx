import React from 'react'
import * as Types from '../../types'
import HeroCard from '../HeroCard/HeroCard'
import "./CategoriesScreen.css"
import Spacer from '../Spacer/Spacer'

export default ({heroList, title}: Types.ICategoriesScreenProps) => {
    return (
        <div className="category-screen-container">
            <Spacer height={150} />
            <h1 className="category-screen-title">{title}</h1>
            <Spacer height={50} />
            <div className="hero-card-list">
            {heroList.map((hero: Types.IHeroObject) => {
                return <HeroCard key={hero.id} hero={hero} />
            })}
            </div>
            </div>
    )
}