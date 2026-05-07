export interface Werk {
	slug: string;
	title: string;
	year: number;
	technique: string;
	dimensions: string;
	image: string;
	description?: string;
}

export const werke: Werk[] = [
	{
		slug: 'Bei Gerswalde',
		title: 'Bei Gerswalde',
		year: 2025,
		technique: 'Öl auf MDF',
		dimensions: '40 × 60 cm',
		//price: 200€,
		image: '/landschaft.jpg'
	},
	{
		slug: 'im-wald',
		title: 'Im Wald',
		year: 2022,
		technique: 'Öl auf Leinwand',
		dimensions: '70 × 90 cm',
		image: '/Ausstellung-ImWald.jpeg'
	},
	{
		slug: 'dominikanerkloster',
		title: 'Dominikanerkloster',
		year: 2021,
		technique: 'Acryl auf Papier',
		dimensions: '50 × 70 cm',
		image: '/Ausstellung-DominikanerKloster.jpeg'
	},
	{
		slug: 'sommerlicht',
		title: 'Sommerlicht',
		year: 2024,
		technique: 'Öl auf Leinwand',
		dimensions: '100 × 120 cm',
		image: '/OmSommerren-Aussellung.jpeg'
	}
];
