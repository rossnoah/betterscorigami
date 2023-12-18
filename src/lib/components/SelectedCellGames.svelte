<script lang="ts">
	import Game from './game.svelte';

	export let matrix: any[];
	export let clickedX = 0;
	export let clickedY = 0;
</script>

<div class="flex flex-col md:flex-row justify-around">
	{#if clickedY > -1 && clickedX > -1 && matrix[clickedX][clickedY].count > 0}
		<div class="md:w-1/2">
			<p class="text-center text-xl font-semibold mb-4">First Match</p>
			<Game
				team_win={matrix[clickedX][clickedY].first_team_win}
				team_lose={matrix[clickedX][clickedY].first_team_lose}
				pts_win={matrix[clickedX][clickedY].pts_win}
				pts_lose={matrix[clickedX][clickedY].pts_lose}
				date={matrix[clickedX][clickedY].first_date}
			/>
		</div>
		<div class="md:w-1/2">
			<p class="text-center text-xl font-semibold mb-4">Last Match</p>
			<Game
				team_win={matrix[clickedX][clickedY].last_team_win}
				team_lose={matrix[clickedX][clickedY].last_team_lose}
				pts_win={matrix[clickedX][clickedY].pts_win}
				pts_lose={matrix[clickedX][clickedY].pts_lose}
				date={matrix[clickedX][clickedY].last_date}
			/>
		</div>
	{:else if clickedY < clickedX}
		<div class="md:w-1/2">
			<p class="text-center text-xl font-semibold mb-4">First Match</p>
			<Game
				team_win={'N/A'}
				team_lose={'N/A'}
				pts_win={clickedY}
				pts_lose={clickedX}
				date={'Backwards Score [Invalid]'}
			/>
		</div>
		<div class="md:w-1/2">
			<p class="text-center text-xl font-semibold mb-4">Last Match</p>
			<Game
				team_win={'N/A'}
				team_lose={'N/A'}
				pts_win={clickedY}
				pts_lose={clickedX}
				date={'Backwards Score [Invalid]'}
			/>
		</div>
	{:else}
		<div class="md:w-1/2">
			<p class="text-center text-xl font-semibold mb-4">First Match</p>
			<Game
				team_win={'N/A'}
				team_lose={'N/A'}
				pts_win={clickedY}
				pts_lose={clickedX}
				date={'Never Played'}
			/>
		</div>
		<div class="md:w-1/2">
			<p class="text-center text-xl font-semibold mb-4">Last Match</p>
			<Game
				team_win={'N/A'}
				team_lose={'N/A'}
				pts_win={clickedY}
				pts_lose={clickedX}
				date={'Never Played'}
			/>
		</div>
	{/if}
</div>
