<script context="module">
	// export async function load({ fetch, page }) {
	// const id = page.params.id;
	// const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	// const res = await fetch(url);
	// const pokeman = await res.json();
	// return {props: {pokeman}}
	// }
</script>

<script>
	// export let pokeman;
	// import { pokeman } from "./+page.js";
	export let data;
	const type = data.pokeman.types[0].type.name;
	let pokeman = data.pokeman;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{data.pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> | Weight:
		<strong>{pokeman.weight}</strong>
	</p>
	<img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>
