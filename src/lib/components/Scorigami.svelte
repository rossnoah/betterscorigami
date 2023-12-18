<script lang="ts">
	export let matrix: any[] = [];
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import TableInfoPanel from './tableInfoPanel.svelte';
	import { isImpossibleScore } from '$lib/utils';
	import Game from './game.svelte';
	import SelectedCellGames from './SelectedCellGames.svelte';

	const cellSize = writable(0);
	let openDialog = false;
	let hoverLocation = '0 - 0';
	let hoverPlayed =
		matrix[0][0].count == 0
			? 'No matches played'
			: matrix[0][0].count == 1
				? '1 match played'
				: `${matrix[0][0].count} matches played`;
	const maxLoserScore = findMaxLoserScore(matrix);

	function findMaxLoserScore(matrix: any[]) {
		let max = 0;
		for (let i = 0; i < matrix.length; i++) {
			const row = matrix[i];
			for (let j = 0; j < row.length; j++) {
				const cell = row[j];
				if (cell.count > 0 && cell.pts_lose > max) {
					max = cell.pts_lose;
				}
			}
		}
		return max;
	}

	onMount(() => {
		const updateCellSize = () => {
			const screenWidth = window.innerWidth;
			const numCols = matrix[0].length;
			const size = screenWidth / numCols;
			cellSize.set(size);
		};

		updateCellSize();
		window.addEventListener('resize', updateCellSize);

		return () => {
			window.removeEventListener('resize', updateCellSize);
		};
	});

	let clickedX = 0;
	let clickedY = 0;
	let hoverX = -1;
	let hoverY = -1;

	function onBoxClick(rowIndex: number, cellIndex: number) {
		if (clickedX == rowIndex && clickedY == cellIndex) {
			openDialog = !openDialog;
			return;
		}
		console.log(rowIndex, cellIndex);
		console.log(matrix[rowIndex][cellIndex]);
		clickedX = rowIndex;
		clickedY = cellIndex;
		openDialog = true;
	}

	function onHover(rowIndex: number, cellIndex: number) {
		hoverX = rowIndex;
		hoverY = cellIndex;
		if (isImpossibleScore(rowIndex, cellIndex)) {
			hoverLocation = 'Impossible Scorigami';
			hoverPlayed = 'No matches played';
			return;
		}
		if (matrix[rowIndex][cellIndex].count == 0) hoverPlayed = 'No matches played';
		else if (matrix[rowIndex][cellIndex].count == 1) hoverPlayed = '1 match played';
		else hoverPlayed = `${matrix[rowIndex][cellIndex].count} matches played`;
		hoverLocation = `${cellIndex} - ${rowIndex}`;
	}

	// console.log(matrix[21][25].last_team_win);

	function calculateBGColor(rowIndex: number, cellIndex: number, count: number) {
		if (clickedX == rowIndex && clickedY == cellIndex) {
			if (count == 0) return 'bg-gray-700';
		}
		if (clickedX == rowIndex || clickedY == cellIndex) {
			if (count == 0) return 'bg-gray-600';
		} else {
			if (count == 0) return 'bg-gray-500';
		}
	}
</script>

<p class="text-4xl text-center font-semibold">{hoverLocation}</p>
<p class="text-2xl text-center font-medium mb-4">{hoverPlayed}</p>
<SelectedCellGames {matrix} {clickedX} {clickedY} />

<table class="table-fixed w-full">
	<thead>
		<tr>
			{#each Array.from({ length: 75 }, (_, i) => i) as col}
				<th class="text-center text-xxs" style="--cell-size: {cellSize}px"
					>{col - 1 != -1 ? col - 1 : ''}</th
				>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each matrix as row, rowIndex}
			{#if rowIndex <= maxLoserScore}
				<tr>
					<th class="text-center text-xxs" style="--cell-size: {cellSize}px">{rowIndex}</th>
					<!-- Row label -->

					{#each row as cell, cellIndex}
						<!-- svelte-ignore a11y-mouse-events-have-key-events -->
						<td
							class={`cell p-2  border-gray-200 text-center ${
								isImpossibleScore(rowIndex, cellIndex)
									? hoverX == rowIndex || hoverY == cellIndex
										? 'bg-gray-600 hover:bg-gray-800'
										: 'bg-gray-700 hover:bg-gray-800' // Darker shade on hover
									: matrix[rowIndex][cellIndex].count > 0
										? hoverX == rowIndex || hoverY == cellIndex
											? 'bg-green-600 hover:bg-green-800'
											: 'bg-green-700 hover:bg-green-800' // Darker shade on hover
										: hoverX == rowIndex || hoverY == cellIndex
											? 'bg-white hover:bg-gray-300'
											: 'bg-gray-200 hover:bg-gray-380' // Darker shade on hover
							}`}
							style="--cell-size: {cellSize}px"
							on:click={() => onBoxClick(rowIndex, cellIndex)}
							on:mouseover={() => onHover(rowIndex, cellIndex)}
						>
							{#if clickedX == rowIndex && clickedY == cellIndex}
								<TableInfoPanel
									ptsWin={cell.pts_win}
									ptsLose={cell.pts_lose}
									count={cell.count ? String(cell.count) : undefined}
									lastMatchDate={cell.last_date}
									lastTeamWin={cell.last_team_win}
									lastTeamLose={cell.last_team_lose}
									firstMatchDate={cell.first_date}
									firstTeamWin={cell.first_team_win}
									firstTeamLose={cell.first_team_lose}
									lastMatchLink={cell.last_link}
									firstMatchLink={cell.first_link}
									row={rowIndex}
									col={cellIndex}
									open={openDialog}
								/>
							{/if}
						</td>
					{/each}
				</tr>
			{/if}
		{/each}
	</tbody>
</table>

<style>
	.cell {
		width: var(--cell-size);
		height: var(--cell-size);
	}
</style>
