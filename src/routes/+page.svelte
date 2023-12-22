<script lang="ts">
  import { Kysely } from 'kysely';
    import { SQLocalKysely } from 'sqlocal/kysely';
    import { onMount } from 'svelte';
  import type { Database } from '../types';

    onMount(() => {
        const { dialect } = new SQLocalKysely(':memory:');
		const db = new Kysely<Database>({ dialect });
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
