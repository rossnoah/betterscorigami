<script>
	import Table from '$lib/components/table.svelte';
	import Weeklygames from '$lib/components/weeklygames.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<head>
	<!-- HTML Meta Tags -->
	<title>Football Scorigami</title>
	<meta
		name="description"
		content="Explore the history and concept of Scorigami in the NFL. Learn about unique score combinations and their significance in football history. A must-read for NFL fans and statisticians alike."
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://fbscorigami.com" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Football Scorigami" />
	<meta
		property="og:description"
		content="Explore the history and concept of Scorigami in the NFL. Learn about unique score combinations and their significance in football history. A must-read for NFL fans and statisticians alike."
	/>
	<meta property="og:image" content="https://fbscorigami.com/opengraph.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="fbscorigami.com" />
	<meta property="twitter:url" content="https://fbscorigami.com" />
	<meta name="twitter:title" content="Football Scorigami" />
	<meta
		name="twitter:description"
		content="Explore the history and concept of Scorigami in the NFL. Learn about unique score combinations and their significance in football history. A must-read for NFL fans and statisticians alike."
	/>
	<meta name="twitter:image" content="https://fbscorigami.com/opengraph.png" />
</head>

<div class="bg-green-700 text-white py-4">
	<p class="text-center font-extrabold text-7xl py-4">Football Scorigami</p>
</div>
<div class="w-5/6 mx-auto pt-8 pb-8">
	<Table matrix={data.data.matrix} />
</div>

<Weeklygames />

<!-- about scorigami -->

<div class="container mx-auto p-16">
	<h1 class="text-4xl font-bold text-center mb-6">About Scorigami</h1>
	<div class="bg-white shadow-lg rounded-lg p-6">
		<h2 class="text-2xl font-semibold mb-4">What is Scorigami?</h2>
		<p class="mb-4">
			Scorigami refers to the achievement of a final score in an NFL game that has never occurred
			before in the league's history. It's a blend of "score" and "origami," reflecting the idea of
			creating something new and unique. Each unique score combination is celebrated for its rarity
			and distinctiveness.
		</p>

		<h2 class="text-2xl font-semibold mb-4">Origins of the Concept</h2>
		<p class="mb-4">
			The concept of Scorigami was popularized by Jon Bois, a sports writer and video producer,
			through his work at SB Nation. Bois introduced the term in his video series and later
			developed an online tracker to monitor NFL games for potential Scorigami scores.
		</p>

		<h2 class="text-2xl font-semibold mb-4">How Scorigami Works</h2>
		<p class="mb-4">
			In Scorigami, the focus is on the combination of points scored by both teams. For example, if
			a game ends with a score of 28-14, and that exact scoreline has never occurred before in NFL
			history, it would be a Scorigami. The thrill lies in witnessing a score that adds a new
			combination to the NFL's historical record.
		</p>

		<h2 class="text-2xl font-semibold mb-4">Historical Significance</h2>
		<p class="mb-4">
			The NFL, with its long history dating back to the early 20th century, has seen a wide variety
			of scores. However, as the game has evolved, scoring patterns have changed, making certain
			score combinations less likely than others. Scorigami captures these shifts and provides a
			unique way to look at the game's evolution.
		</p>

		<h2 class="text-2xl font-semibold mb-4">Famous Scorigami Games</h2>
		<p class="mb-4">
			Some NFL games have become notable for achieving Scorigami. These games often involve unusual
			plays, high-scoring offenses, or defensive battles leading to uncommon scorelines. For fans,
			these games hold a special place due to their rarity and unexpected nature.
		</p>

		<h2 class="text-2xl font-semibold mb-4">Scorigami's Cultural Impact</h2>
		<p class="mb-4">
			Beyond just a statistical curiosity, Scorigami has become a part of NFL fan culture. Fans
			actively root for Scorigami outcomes, especially in games with lopsided scores or in matchups
			where historical precedents are likely to be broken. Social media buzzes with excitement
			whenever a new Scorigami is achieved.
		</p>
	</div>
</div>
