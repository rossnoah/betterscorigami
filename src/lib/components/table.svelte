<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const cellSize = writable(0);

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

	function isImpossibleScore(row: number, col: number): boolean {
		if (row > col) return true;
		if (row === 0 && col === 1) return true;
		if (row === 1) {
			if (col <= 5 || col === 7) return true;
		}
		return false;
	}
</script>

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
						<td
							class={`cell p-2 border border-gray-200 text-center ${
								isImpossibleScore(rowIndex, cellIndex)
									? 'bg-gray-700'
									: matrix[rowIndex][cellIndex].count > 0
										? 'bg-green-700'
										: 'bg-red-200'
							}`}
							style="--cell-size: {cellSize}px"
						>
							<!-- Display cell data here -->
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
