import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const TextFile = () => {
	const { windows } = useWindowStore();
	const data = windows.txtfile?.data;

	if (!data) return null;

	const { name, image, subtitle, description } = data;

	return (
		<>
			<div id="window-header">
				<WindowControls target="txtfile" />
				<h2>{name}</h2>
			</div>

			<div className="p-5 space-y-6">
				{image && <img src={image} alt={name} className="w-full rounded" />}

				{subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}

				{Array.isArray(description) && description.length > 0 && (
					<div className="space-y-3 text-gray-800">
						{description.map((para, i) => (
							<p key={i}>{para}</p>
						))}
					</div>
				)}
			</div>
		</>
	);
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");
export default TextFileWindow;
