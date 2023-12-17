export function isImpossibleScore(row: number, col: number): boolean {
	if (row > col) return true;
	if (row === 0 && col === 1) return true;
	if (row === 1) {
		if (col <= 5 || col === 7) return true;
	}
	return false;
}
