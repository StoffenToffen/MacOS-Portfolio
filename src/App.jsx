import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import Dock from "#components/Dock";
import Home from "#components/Home";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Contact from "#windows/Contact";
import Finder from "#windows/Finder";
import ImageFile from "#windows/ImageFile";
import Photos from "#windows/Photos";
import Resume from "#windows/Resume";
import Safari from "#windows/Safari";
import Terminal from "#windows/Terminal";
import TextFile from "#windows/TextFile";

gsap.registerPlugin(Draggable);

const App = () => {
	return (
		<main>
			<Navbar />
			<Home />
			<Welcome />
			<Dock />

			<Finder />
			<Resume />
			<TextFile />
			<ImageFile />

			<Safari />
			<Photos />
			<Contact />
			<Terminal />
		</main>
	);
};

export default App;
