const Error = ({ error }) => {
	return (
		<div className="error">
			<div>
				<p className="error__text error__smiley">😥</p>
				<p className="error__text">{error}</p>
			</div>
		</div>
	);
};
export default Error;
