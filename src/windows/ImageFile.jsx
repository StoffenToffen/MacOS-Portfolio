import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageFile = () => {
	const { windows } = useWindowStore();
	const data = windows.imgfile?.data;

	if (!data) return null;

	const { name, imageUrl } = data;

	return (
		<>
			<div id="window-header">
				<WindowControls target="imgfile" />
				<h2>{name}</h2>
			</div>

			<div className="p-5">
				{imageUrl && (
					<img src={imageUrl} alt={name} className="w-full rounded" />
				)}
			</div>
		</>
	);
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");
export default ImageFileWindow;
