import React from "react"
import * as Types from '../../types'

export default ({height, width}: Types.ISpacerProps) => {
    return (
        <div style={{height: height ? `${height}px` : 0, width: width ? `${width}px` : 0}}></div>
    )
}