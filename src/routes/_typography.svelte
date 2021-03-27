<script lang="ts">
	import Heading from '$lib/typography/Heading.svelte'
	import type { HeadingProps } from '$lib/typography/Heading.svelte'
	import { tw } from 'twind'

	export let variant: HeadingProps['variant']
</script>

<Heading props={{ variant }}>
	<slot name="head" slot="default">The quick brown fox jumps over the lazy</slot>
</Heading>
<div class={tw`text-blue font-semibold`}>
	<slot name="title">H1 - Light</slot>
</div>
<p class={tw`text-grey#1 text-base`}>
	<slot name="desc">
		Commonly used for large H1 headings to put strong emphasis on bold typography.
	</slot>
</p>
