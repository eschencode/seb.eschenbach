export interface Ausstellung {
	slug: string;
	title: string;
	location: string;
	dateFrom: string;
	dateTo: string;
	image: string;
	description: string;
	isCurrent?: boolean;
	orientation?: 'portrait' | 'landscape'; // defaults to portrait
	backImage?: string; // optional: use a real photo for the postcard back instead of the CSS preset
}

export const ausstellungen: Ausstellung[] = [
	{
		slug: 'sommerlicht',
		title: 'Sommerlicht',
		location: 'Galerie im Hafen, Lychen',
		dateFrom: 'Juni 2025',
		dateTo: 'August 2025',
		image: '/OmSommerren-Aussellung.jpeg',
		description:
			'Neue großformatige Ölgemälde aus der Uckermark — Licht und Weite des Nordens.',
		isCurrent: true
	},
	{
		slug: 'birken',
		title: 'Birken',
		location: 'Kunsthaus Prenzlau',
		dateFrom: 'März 2023',
		dateTo: 'April 2023',
		image: '/Ausstellung-Birken.jpeg',
		description:
			'Eine Werkschau der Birkenlandschaften — vertraute Motive in wechselndem Licht.'
	},
	{
		slug: 'im-wald',
		title: 'Im Wald',
		location: 'Galerie am See, Templin',
		dateFrom: 'September 2022',
		dateTo: 'Oktober 2022',
		image: '/Ausstellung-ImWald.jpeg',
		description:
			'Ölgemälde und Zeichnungen aus dem Wald — das Innehalten zwischen den Bäumen.'
	},
	{
		slug: 'dominikanerkloster',
		title: 'Dominikanerkloster',
		location: 'Dominikanerkloster Prenzlau',
		dateFrom: 'Mai 2021',
		dateTo: 'Juli 2021',
		image: '/Ausstellung-DominikanerKloster.jpeg',
		description: 'Landschaften und Stille — Werke im historischen Klosterbau.'
	},
	{
		slug: 'offenes-atelier',
		title: 'Offenes Atelier',
		location: 'Atelier S. Eschenbach, Uckermark',
		dateFrom: 'Oktober 2020',
		dateTo: 'Oktober 2020',
		image: '/OffenesAtelier.jpeg',
		description: 'Einblicke in den Arbeitsprozess — Skizzen, Ölstudien und fertige Werke.'
	}
];
