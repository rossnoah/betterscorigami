export function isImpossibleScore(row: number, col: number): boolean {
	if (row > col) return true;
	if (row === 0 && col === 1) return true;
	if (row === 1) {
		if (col <= 5 || col === 7) return true;
	}
	return false;
}

export const formatDate = (
	/** @type {string | number | Date} */ dateString: string | number | Date
) => {
	if (dateString === 'Unknown') return dateString;
	const date = new Date(dateString);
	return date.toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};
