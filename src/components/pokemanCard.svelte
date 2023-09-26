<script>
  export let pokeman;
</script>
<a class="p-6 bg-gray-100 text-black-100 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokemon/${pokeman.id}`}>
  <img class="h-30 w-30" src={pokeman.image} alt={pokeman.image}>
  <h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
</a>
