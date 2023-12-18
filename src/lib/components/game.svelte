<script lang="ts">
	import { getAbbreviation } from '$lib/teamParser2';
	import { formatDate } from '$lib/utils';

	export let team_win: string;
	export let team_lose: string;
	export let pts_win: number;
	export let pts_lose: number;
	export let date: string;

	let win_image = getAbbreviation(team_win);
	let lose_image = getAbbreviation(team_lose);

	$: win_image = getAbbreviation(team_win);
	$: lose_image = getAbbreviation(team_lose);

	let formattedDate = formatDate(date);

	$: formattedDate = formatDate(date);
</script>

<div class="bg-white shadow-md rounded-lg p-4 m-2">
	<div class="flex flex-col md:flex-row justify-center items-center mb-4">
		<div class="flex flex-col items-center mb-4 md:mb-0">
			<img class="h-6 md:h-8 mb-2" src={`/teams/${win_image}.png`} alt={team_win} />
			<span class="font-semibold w-36 md:w-48 truncate text-center">{team_win}</span>
		</div>
		<div class="flex justify-center items-center">
			<div class="flex flex-col">
				<div class="flex flex-col items-center">
					<div class="mb-2">
						<span class="font-bold text-3xl md:text-4xl mx-2">{pts_win}</span>
						<span class="font-bold text-3xl md:text-4xl mx-2">-</span>
						<span class="font-bold text-3xl md:text-4xl mx-2">{pts_lose}</span>
					</div>
					<div class="text-xs md:text-sm text-gray-500">{formattedDate}</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center">
			<img class="h-6 md:h-8 mb-2" src={`/teams/${lose_image}.png`} alt={team_lose} />
			<span class="font-semibold w-36 md:w-48 truncate text-center">{team_lose}</span>
		</div>
	</div>
</div>
