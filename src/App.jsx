import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import Dock from "#components/Dock";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Resume from "#windows/Resume";
import Safari from "#windows/Safari";
import Terminal from "#windows/Terminal";
import Finder from "#windows/Finder";
import TextFile from "#windows/TextFile";
import ImageFile from "#windows/ImageFile";
import Contact from "#windows/Contact";

gsap.registerPlugin(Draggable);

const App = () => {
	return (
		<main>
			<Navbar />
			<Welcome />
			<Dock />

			<Terminal />
			<Safari />
			<Resume />
			<Finder />
			<TextFile />
			<ImageFile />
			<Contact />
		</main>
	);
};

export default App;
