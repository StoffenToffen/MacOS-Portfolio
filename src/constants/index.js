const navLinks = [
	{
		id: 1,
		name: "Projects",
		type: "finder",
	},
	{
		id: 3,
		name: "Contact",
		type: "contact",
	},
	{
		id: 4,
		name: "Resume",
		type: "resume",
	},
];

const navIcons = [
	{
		id: 1,
		img: "/icons/wifi.svg",
	},
	{
		id: 2,
		img: "/icons/search.svg",
	},
	{
		id: 3,
		img: "/icons/user.svg",
	},
	{
		id: 4,
		img: "/icons/mode.svg",
	},
];

const dockApps = [
	{
		id: "finder",
		name: "Portfolio", // was "Finder"
		icon: "finder.png",
		canOpen: true,
	},
	{
		id: "safari",
		name: "Articles", // was "Safari"
		icon: "safari.png",
		canOpen: true,
	},
	{
		id: "photos",
		name: "Gallery", // was "Photos"
		icon: "photos.png",
		canOpen: true,
	},
	{
		id: "contact",
		name: "Contact", // or "Get in touch"
		icon: "contact.png",
		canOpen: true,
	},
	{
		id: "terminal",
		name: "Skills", // was "Terminal"
		icon: "terminal.png",
		canOpen: true,
	},
	{
		id: "trash",
		name: "Archive", // was "Trash"
		icon: "trash.png",
		canOpen: false,
	},
];

const blogPosts = [
	{
		id: 1,
		date: "Sep 2, 2025",
		title:
			"TypeScript Explained: What It Is, Why It Matters, and How to Master It",
		image: "/images/blog1.png",
		link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
	},
	{
		id: 2,
		date: "Aug 28, 2025",
		title: "The Ultimate Guide to Mastering Three.js for 3D Development",
		image: "/images/blog2.png",
		link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
	},
	{
		id: 3,
		date: "Aug 15, 2025",
		title: "The Ultimate Guide to Mastering GSAP Animations",
		image: "/images/blog3.png",
		link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
	},
];

const techStack = [
	{
		category: "Frontend",
		items: ["React.js", "TanStack", "TypeScript"],
	},
	{
		category: "Styling",
		items: ["Tailwind CSS", "CSS"],
	},
	{
		category: "Database",
		items: ["Prisma", "PostgreSQL"],
	},
	{
		category: "Dev Tools",
		items: ["Git", "GitHub", "Docker"],
	},
];

const socials = [
	{
		id: 1,
		text: "Github",
		icon: "/icons/github.svg",
		bg: "#0f0f0f",
		link: "https://github.com/StoffenToffen",
	},
	{
		id: 3,
		text: "Bluesky",
		icon: "/icons/bluesky.svg",
		bg: "#358ffc",
		link: "https://bsky.app/profile/did:plc:gk4zloe7h3srirv5nspxrndg",
	},
	{
		id: 4,
		text: "LinkedIn",
		icon: "/icons/linkedin.svg",
		bg: "#1361bf",
		link: "https://www.linkedin.com/in/steffen-tveit",
	},
];

const photosLinks = [
	{
		id: 1,
		icon: "/icons/gicon1.svg",
		title: "Library",
	},
	{
		id: 2,
		icon: "/icons/gicon2.svg",
		title: "Memories",
	},
	{
		id: 3,
		icon: "/icons/file.svg",
		title: "Places",
	},
	{
		id: 4,
		icon: "/icons/gicon4.svg",
		title: "People",
	},
	{
		id: 5,
		icon: "/icons/gicon5.svg",
		title: "Favorites",
	},
];

const gallery = [
	{
		id: 1,
		img: "/images/gal1.png",
	},
	{
		id: 2,
		img: "/images/gal2.png",
	},
	{
		id: 3,
		img: "/images/gal3.png",
	},
	{
		id: 4,
		img: "/images/gal4.png",
	},
];

export {
	navLinks,
	navIcons,
	dockApps,
	blogPosts,
	techStack,
	socials,
	photosLinks,
	gallery,
};

const WORK_LOCATION = {
	id: 1,
	type: "work",
	name: "Work",
	icon: "/icons/work.svg",
	kind: "folder",
	children: [
		// ▶ Project 1
		{
			id: 5,
			name: "AI Website Builder",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-10 left-5", // icon position inside Finder
			windowPosition: "top-[5vh] left-5", // optional: Finder window position
			children: [
				{
					id: 1,
					name: "AI Website Builder.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 left-10",
					description: [
						"Weaver is an AI agent designed to create smart React based web-applications suited exactly to your needs.",
						"If you just want to get an idea built without hiring a professional, or don't want to spend months or years learning to code, Weaver is for you.",
						"Want something changed? Weaver is able to make changes without you having to repeating yourself, or you could of course change the code yourself in the built-in editor.",
						"Weaver is built with Next.js, Tailwind, Prisma, Open AI, Inngest, TRPC, and Clerk, ensuring security, reliability, and a professional design.",
					],
				},
				{
					id: 2,
					name: "Weaver.com",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://ai-website-builder-eight-gamma.vercel.app",
					position: "top-10 right-20",
				},
				{
					id: 4,
					name: "Weaver.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 right-80",
					imageUrl: "/images/project-1.png",
				},
				{
					id: 5,
					name: "Weaver 2.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-60 right-20",
					imageUrl: "/images/project-4.png",
				},
			],
		},

		// ▶ Project 2
		{
			id: 6,
			name: "Apple Landing Page",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-52 right-80",
			windowPosition: "top-[20vh] left-7",
			children: [
				{
					id: 1,
					name: "Apple Landing Page.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 right-10",
					description: [
						"The Apple landing page is built to match the simple and sleek design Apple is known for.",
						"With impressive animations and model viewer that makes sure every product is given an unforgettable first impression.",
						"It's built with Next.js, Tailwind, and GSAP, so it runs fast, looks professional with stunning animations, and works seamlessly on any device.",
					],
				},
				{
					id: 2,
					name: "apple-landing.com",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://apple-landing-omega.vercel.app",
					position: "top-20 left-20",
				},
				{
					id: 4,
					name: "Apple Landing.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 left-80",
					imageUrl: "/images/project-2.png",
				},
			],
		},

		// ▶ Project 3
		{
			id: 7,
			name: "Samurai eCommerce Store",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-10 left-80",
			windowPosition: "top-[33vh] left-7",
			children: [
				{
					id: 1,
					name: "Samurai Store.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 left-10",
					description: [
						"Samurai Store is the collective place to get all your home necessities",
						"Whether it's new furniture, cooking appliances, skin care, or decor, Samurai Store has it all",
						"Why go to a dozen different stores, when you can go to just one",
						"It's built with React, so it's fast, reliable, and easy to expand",
					],
				},
				{
					id: 2,
					name: "samurai-store.com",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://gp-7-e-commerce-react.vercel.app",
					position: "top-10 right-20",
				},
				{
					id: 4,
					name: "Samurai Store.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 right-80",
					imageUrl: "/images/project-3.png",
				},
				{
					id: 5,
					name: "Design.fig",
					icon: "/images/plain.png",
					kind: "file",
					fileType: "fig",
					href: "https://google.com",
					position: "top-60 right-20",
				},
			],
		},
	],
};

const ABOUT_LOCATION = {
	id: 2,
	type: "about",
	name: "About me",
	icon: "/icons/info.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-5",
			imageUrl: "/images/steffen.jpg",
		},
		{
			id: 2,
			name: "casual-me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-28 right-72",
			imageUrl: "/images/steffen-2.jpg",
		},
		{
			id: 3,
			name: "sitting-me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-52 left-80",
			imageUrl: "/images/steffen-3.jpg",
		},
		{
			id: 4,
			name: "about-me.txt",
			icon: "/images/txt.png",
			kind: "file",
			fileType: "txt",
			position: "top-60 left-5",
			subtitle: "Meet the Developer Behind the Code",
			image: "/images/steffen.jpg",
			description: [
				"Hi! I'm Steffen 😎, a curiously design-minded person.",
				"I am the creative type. Working with my hands and eyes is where I find my joy in life, either it is designing and making a website, fixing someone's computer, or drawing a piece of art.",
				"I like creating things where you can physically see the effort that went in, which is why seeing others do the same really inspires me to constantly improve.",
				"Outside of dev work and drawing, you'll find me tuning in to the latest dubstep track, looking at cat pictures online, or sweating my ass off playing Beat Saber 🤺",
			],
		},
	],
};

const RESUME_LOCATION = {
	id: 3,
	type: "resume",
	name: "Resume",
	icon: "/icons/file.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "Resume.pdf",
			icon: "/images/pdf.png",
			kind: "file",
			fileType: "pdf",
			// you can add `href` if you want to open a hosted resume
			// href: "/your/resume/path.pdf",
		},
	],
};

const TRASH_LOCATION = {
	id: 4,
	type: "trash",
	name: "Trash",
	icon: "/icons/trash.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "trash1.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-10",
			imageUrl: "/images/trash-1.png",
		},
		{
			id: 2,
			name: "trash2.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-40 left-80",
			imageUrl: "/images/trash-2.png",
		},
	],
};

export const locations = {
	work: WORK_LOCATION,
	about: ABOUT_LOCATION,
	resume: RESUME_LOCATION,
	trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
