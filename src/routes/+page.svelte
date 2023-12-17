<script>
	import Table from '$lib/components/table.svelte';
	import Weeklygames from '$lib/components/weeklygames.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<p class="text-center font-extrabold text-8xl py-4">Football Scorigami</p>

<div class="w-5/6 mx-auto pb-8">
	<Table matrix={data.data.matrix} />
</div>

<Weeklygames />
