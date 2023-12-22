<script>
	import { createEventDispatcher } from 'svelte';

	// Event dispatcher
	const dispatch = createEventDispatcher();

	// Exported variable for two-way binding
	export let checked = false;
	export let name = 'toggle';

	// Function to update the toggle state
	function toggle() {
		checked = !checked;
		dispatch('change', checked);
	}
</script>

<div class="flex justify-center items-center mb-4">
	<label class="flex items-center cursor-pointer">
		<div class="relative">
			<input id="toggleB" type="checkbox" class="sr-only" {checked} on:change={toggle} />
			<div class={`block ${checked ? 'bg-green-700' : 'bg-gray-600'} w-14 h-8 rounded-full`}></div>
			<div
				class={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full ${
					checked ? 'transform translate-x-6' : ''
				}`}
			></div>
		</div>
		<div class="ml-3 text-gray-700 font-medium">{name}</div>
	</label>
</div>

<style>
	.dot {
		transition: transform 0.2s ease-in-out;
	}
</style>
