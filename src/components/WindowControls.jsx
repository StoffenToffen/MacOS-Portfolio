import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
	const { closeWindow } = useWindowStore();

	return (
		<div id="window-controls">
			<button
				type="button"
				aria-label="Close window"
				className="close"
				onClick={() => closeWindow(target)}
			/>
			<div className="minimize" />
			<div className="maximize" />
		</div>
	);
};

export default WindowControls;
