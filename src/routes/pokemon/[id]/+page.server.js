export async function load({ fetch, params }) {
  const id = await params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();
  return { pokeman };
}
