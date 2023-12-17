<script>
	import Table from '$lib/components/table.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<p class="text-center font-extrabold text-8xl py-4">Simple Scorigami</p>

<div class="w-5/6 mx-auto pb-8">
	<Table matrix={data.data.matrix} />
</div>
