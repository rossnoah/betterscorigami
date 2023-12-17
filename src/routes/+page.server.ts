/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`https://nflscorigami.com/data`);
	const data = await res.json();

	return { data };
}
