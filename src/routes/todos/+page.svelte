<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<h1 class="title-1">Todos App</h1>

<ul class="todo-items">
  {#each data.todos as todo, index (todo.id)}
    <li>{todo.title}</li>
  {/each}
</ul>

<style>
  .title-1 {
    font-size: 1.125rem;
    font-weight: 600;
  }
</style>
