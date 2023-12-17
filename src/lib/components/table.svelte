<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const cellSize = writable(0);
	let openDialog = false;
	let hoverLocation = '';

	onMount(() => {
		const updateCellSize = () => {
			const screenWidth = window.innerWidth;
			const numCols = 74;
			const size = screenWidth / numCols;
			cellSize.set(size);
		};

		updateCellSize();
		window.addEventListener('resize', updateCellSize);

		return () => {
			window.removeEventListener('resize', updateCellSize);
		};
	});

	import { matrix } from '$lib/data';
	import TableInfoPanel from './tableInfoPanel.svelte';
	import { isImpossibleScore } from '$lib/utils';

	let hoveredX = -1;
	let hoveredY = -1;

	function onBoxClick(rowIndex: number, cellIndex: number) {
		if (hoveredX == rowIndex && hoveredY == cellIndex) {
			openDialog = !openDialog;
			return;
		}
		hoveredX = rowIndex;
		hoveredY = cellIndex;
		openDialog = true;
	}

	function onHover(rowIndex: number, cellIndex: number) {
		if (isImpossibleScore(rowIndex, cellIndex)) {
			hoverLocation = 'Impossible Scorigami';
			return;
		}
		hoverLocation = `${rowIndex} - ${cellIndex}`;
	}
</script>

<p class="text-4xl text-center font-semibold mb-4">{hoverLocation}</p>

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
			{#if rowIndex <= 51}
				<tr>
					<th class="text-center text-xxs" style="--cell-size: {cellSize}px">{rowIndex}</th>
					<!-- Row label -->

					{#each row as cell, cellIndex}
						<!-- svelte-ignore a11y-mouse-events-have-key-events -->
						<td
							class={`cell p-2  border-gray-200 text-center ${
								isImpossibleScore(rowIndex, cellIndex)
									? 'bg-gray-700 hover:bg-gray-800' // Darker shade on hover
									: matrix[rowIndex][cellIndex].count > 0
										? 'bg-green-700 hover:bg-green-800' // Darker shade on hover
										: 'bg-red-200 hover:bg-red-300' // Darker shade on hover
							}`}
							style="--cell-size: {cellSize}px"
							on:click={() => onBoxClick(rowIndex, cellIndex)}
							on:mouseover={() => onHover(rowIndex, cellIndex)}
						>
							{#if hoveredX == rowIndex && hoveredY == cellIndex}
								<TableInfoPanel
									ptsWin={cell.pts_win ? String(cell.pts_win) : undefined}
									ptsLose={cell.pts_lose ? String(cell.pts_lose) : undefined}
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
