<script>
	import { isImpossibleScore } from '$lib/utils';

	export let ptsWin = 'N/A';
	export let ptsLose = 'N/A';
	export let count = 'N/A';
	export let lastMatchDate = 'Unknown';
	export let lastTeamWin = 'Unknown';
	export let lastTeamLose = 'Unknown';
	export let firstMatchDate = 'Unknown';
	export let firstTeamWin = 'Unknown';
	export let firstTeamLose = 'Unknown';
	export let lastMatchLink = '#';
	export let firstMatchLink = '#';
	export let row = -1;
	export let col = -1;
	export let open = false;

	const formatDate = (/** @type {string | number | Date} */ dateString) => {
		if (dateString === 'Unknown') return dateString;
		const date = new Date(dateString);
		return date.toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	let formattedLastMatchDate = formatDate(lastMatchDate);
	let formattedFirstMatchDate = formatDate(firstMatchDate);
</script>

{#if open}
	<div
		class="info-panel absolute bg-white border border-gray-300 p-4 shadow-lg rounded-lg z-10 mt-2 ml-2 text-right"
	>
		<div class="text-left">
			{#if ptsWin != 'N/A' && ptsLose != 'N/A'}
				<p class="text-bold text-3xl text-center">{ptsWin} - {ptsLose}</p>
				<!-- <p class="font-bold">Points Won: <span class="font-normal">{ptsWin}</span></p>
				<p class="font-bold">Points Lost: <span class="font-normal">{ptsLose}</span></p> -->

				{#if lastMatchDate == firstMatchDate}
					<p class="font-bold">
						Only Match: <span class="font-normal"
							><span class="font-bold">{firstTeamWin}</span> vs {firstTeamLose} on {formattedFirstMatchDate}</span
						>
						(<a href={firstMatchLink} class="text-blue-600 hover:text-blue-800" target="_blank"
							>Details</a
						>)
					</p>{:else}
					<p class="font-bold">
						Last Match: <span class="font-normal"
							><span class="font-bold">{lastTeamWin}</span> vs {lastTeamLose} on {formattedLastMatchDate}</span
						>
						(<a href={lastMatchLink} class="text-blue-600 hover:text-blue-800" target="_blank"
							>Details</a
						>)
					</p>
					<p class="font-bold">
						First Match: <span class="font-normal"
							><span class="font-bold">{firstTeamWin}</span> vs {firstTeamLose} on {formattedFirstMatchDate}</span
						>
						(<a href={firstMatchLink} class="text-blue-600 hover:text-blue-800" target="_blank"
							>Details</a
						>)
					</p>
				{/if}
				<p class="font-bold">Times Played: <span class="font-normal">{count}</span></p>
			{:else if isImpossibleScore(row, col)}
				<p class="text-bold text-3xl text-center">Impossible</p>
			{:else}
				<p class="text-bold text-3xl text-center">N/A</p>
			{/if}
		</div>
		<button
			type="button"
			class="rounded bg-white px-2 py-1 mt-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
			on:click={() => (open = false)}>Close</button
		>
	</div>
{/if}
