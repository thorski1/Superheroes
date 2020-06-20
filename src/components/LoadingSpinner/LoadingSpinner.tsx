import React from 'react'
import Loader from 'react-loader-spinner'
import './LoadingSpinner.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default () => {
    return (
			<div className="loading-spinner-container">
				<Loader
					type="TailSpin"
					color="#00BFFF"
					height={100}
					width={100}
					// timeout={3000}
				/>
				<h1 style={{ fontSize: "25px", marginTop: "20px" }}>Loading...</h1>
			</div>
		);
}