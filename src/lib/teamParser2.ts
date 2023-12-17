export function getAbbreviation(fullName: string) {
	switch (fullName) {
		case 'Arizona Cardinals':
			return 'ARI';
		case 'Atlanta Falcons':
			return 'ATL';
		case 'Baltimore Ravens':
			return 'BAL';
		case 'Buffalo Bills':
			return 'BUF';
		case 'Carolina Panthers':
			return 'CAR';
		case 'Chicago Bears':
			return 'CHI';
		case 'Cincinnati Bengals':
			return 'CIN';
		case 'Cleveland Browns':
			return 'CLE';
		case 'Dallas Cowboys':
			return 'DAL';
		case 'Denver Broncos':
			return 'DEN';
		case 'Detroit Lions':
			return 'DET';
		case 'Green Bay Packers':
			return 'GB';
		case 'Houston Texans':
			return 'HOU';
		case 'Indianapolis Colts':
			return 'IND';
		case 'Jacksonville Jaguars':
			return 'JAX';
		case 'Kansas City Chiefs':
			return 'KC';
		case 'St. Louis Rams':
		case 'Los Angeles Rams':
			return 'LAR';
		case 'Los Angeles Chargers':
			return 'LAC';
		case 'Miami Dolphins':
			return 'MIA';
		case 'Minnesota Vikings':
			return 'MIN';
		case 'New England Patriots':
			return 'NE';
		case 'New Orleans Saints':
			return 'NO';
		case 'New York Giants':
			return 'NYG';
		case 'New York Jets':
			return 'NYJ';
		case 'Las Vegas Raiders':
		case 'Oakland Raiders':
			return 'LV';
		case 'Philadelphia Eagles':
			return 'PHI';
		case 'Pittsburgh Steelers':
			return 'PIT';
		case 'Seattle Seahawks':
			return 'SEA';
		case 'San Francisco 49ers':
			return 'SF';
		case 'Tampa Bay Buccaneers':
			return 'TB';
		case 'Tennessee Titans':
			return 'TEN';
		case 'Washington Commanders':
			return 'WSH';
		default:
			return 'Unknown Team';
	}
}
