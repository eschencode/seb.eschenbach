export interface VitaEntry {
	year: string;
	title: string;
	description?: string;
	category: 'ausbildung' | 'ausstellung' | 'preis' | 'sonstiges';
}

export const vitaEntries: VitaEntry[] = [
	{
		year: '1960',
		title: 'Geboren in Deutschland',
		category: 'sonstiges'
	},
	{
		year: '1980–1985',
		title: 'Studium der Malerei, Kunstakademie',
		category: 'ausbildung'
	},
	{
		year: '2010',
		title: 'Einzelausstellung, Galerie, Stadt',
		category: 'ausstellung'
	},
	{
		year: '2015',
		title: 'Gruppenausstellung, Dominikanerkloster',
		category: 'ausstellung'
	},
	{
		year: '2020',
		title: 'Offenes Atelier',
		category: 'ausstellung'
	},
	{
		year: '2022',
		title: 'Ausstellung »Im Wald«',
		category: 'ausstellung'
	},
	{
		year: '2023',
		title: 'Ausstellung »Birken«',
		category: 'ausstellung'
	}
];
