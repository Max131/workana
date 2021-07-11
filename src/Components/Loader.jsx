const Loader = () => {
	return (
		<div className="loader">
			<div className="loader__container">
				<div className="loader__animation">
					<div className="loader__cell"></div>
					<div className="loader__cell"></div>
					<div className="loader__cell"></div>
					<div className="loader__cell"></div>
				</div>
				<p className="loader__text">Loading...</p>
			</div>
		</div>
	);
};

export default Loader;
