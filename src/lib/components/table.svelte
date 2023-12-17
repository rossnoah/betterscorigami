<script lang="ts">
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

<div class="grid-74-cols">
	{#each matrix as row, rowIndex}
		{#each row as cell, cellIndex}
			<div
				class={`p-2 border border-gray-200 ${
					isImpossibleScore(rowIndex, cellIndex)
						? 'bg-gray-700'
						: matrix[rowIndex][cellIndex].count > 0
							? 'bg-green-700'
							: 'bg-red-200'
				} text-center`}
			>
				<!-- Display cell data here -->
			</div>
		{/each}
	{/each}
</div>

<!-- Add a <style> tag in your Svelte component -->
<style>
	.grid-74-cols {
		display: grid;
		grid-template-columns: repeat(74, minmax(0, 1fr)); /* Creates a 74-column grid */
		gap: 0rem; /* Adjust the gap as needed */
	}
</style>
