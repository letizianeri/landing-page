
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/images/.DS_Store" | "/images/artists/.DS_Store" | "/images/artists/2023/.DS_Store" | "/images/artists/2023/dolcenera.jpg" | "/images/artists/2023/elisa.png" | "/images/artists/2023/lucio-corsi.png" | "/images/artists/2023/manuel-agnelli.jpg" | "/images/artists/2024/.DS_Store" | "/images/artists/2024/celeb-car-crash.jpg" | "/images/artists/2024/fugue.png" | "/images/artists/2024/namida.png" | "/images/artists/2024/stella-merano.png" | "/images/artists/2025/.DS_Store" | "/images/artists/2025/18k.png" | "/images/artists/2025/cristian-albani.png" | "/images/artists/2025/francesco-picciano.png" | "/images/artists/2025/giulia-mei.png" | "/robots.txt" | string & {};
	}
}