const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/select-clients.svelte"),
	() => import("../../../src/routes/specialties.svelte"),
	() => import("../../../src/routes/industries.svelte"),
	() => import("../../../src/routes/contact.svelte"),
	() => import("../../../src/routes/news.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/select-clients.svelte
	[/^\/select-clients\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/specialties.svelte
	[/^\/specialties\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/industries.svelte
	[/^\/industries\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/news.svelte
	[/^\/news\/?$/, [c[0], c[7]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];