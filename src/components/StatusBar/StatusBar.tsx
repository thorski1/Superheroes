import React from 'react'
import * as Types from '../../types'
import "./StatusBar.css"

export default ({percentage, color}: Types.IStatusBarProps) => {
    return (
        <div className="status-bar">
            <div style={{width: `${percentage}%`, height: "100%", background: "linear-gradient(135deg, #184e68 0%,#57ca85 100%)", borderRadius: "30px"}}></div>
        </div>
    )
}