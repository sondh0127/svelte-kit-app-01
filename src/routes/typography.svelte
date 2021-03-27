<script lang="ts">
	import Twind from '$lib/Twind.svelte'
	import Heading from '$lib/typography/Heading.svelte'
	import TypographyItem from './_typography.svelte'
	import { tw } from 'twind'
</script>

<div class={tw`flex flex-col space-y-4 `}>
	<div class={tw`w-full`}>
		<TypographyItem variant="H1+">
			<svelte:fragment slot="head">Lorem ipsum dolor sit amet consectetur</svelte:fragment>
			<svelte:fragment slot="title">H1+</svelte:fragment>
			<svelte:fragment slot="desc">
				Commonly used for large H1 headings to put strong emphasis on bold typography.
			</svelte:fragment>
		</TypographyItem>
	</div>

	<div class={tw`flex`}>
		<div class={tw`w-1/2`}>
			<TypographyItem variant="H1">
				<svelte:fragment slot="head">The quick brown fox jumps over the lazy</svelte:fragment>
				<svelte:fragment slot="title">H1</svelte:fragment>
				<svelte:fragment slot="desc">
					Commonly used for large H1 headings to put strong emphasis on bold typography.
				</svelte:fragment>
			</TypographyItem>
		</div>

		<div class={tw`w-1/2`}>
			<TypographyItem variant="H1Light">
				<svelte:fragment slot="head">The quick brown fox jumps over the lazy</svelte:fragment>
				<svelte:fragment slot="title">H1 - Light</svelte:fragment>
				<svelte:fragment slot="desc">
					Commonly used for large H1 headings to put strong emphasis on bold typography.
				</svelte:fragment>
			</TypographyItem>
		</div>
	</div>

	<div class={tw`flex`}>
		<div class={tw`w-full`}>
			<TypographyItem variant="H2">
				<svelte:fragment slot="head">The quick brown fox jumps over the lazy dog</svelte:fragment>
				<svelte:fragment slot="title">H2</svelte:fragment>
				<svelte:fragment slot="desc">
					Commonly used for large H1 headings to put strong emphasis on bold typography.
				</svelte:fragment>
			</TypographyItem>
		</div>
	</div>

	<div class={tw`flex`}>
		<div class={tw`w-1/2`}>
			<TypographyItem variant="H3">
				<svelte:fragment slot="head">The quick brown fox jumps over the lazy dog</svelte:fragment>
				<svelte:fragment slot="title">H3</svelte:fragment>
				<svelte:fragment slot="desc">
					Commonly used for large H1 headings to put strong emphasis on bold typography.
				</svelte:fragment>
			</TypographyItem>
		</div>
		<div class={tw`w-1/2`}>
			<TypographyItem variant="H3Bold">
				<svelte:fragment slot="head">The quick brown fox jumps over the lazy dog</svelte:fragment>
				<svelte:fragment slot="title">H3Bold</svelte:fragment>
				<svelte:fragment slot="desc">
					Commonly used for large H1 headings to put strong emphasis on bold typography.
				</svelte:fragment>
			</TypographyItem>
		</div>
	</div>

	<div class={tw`flex`}>
		<div class={tw`w-full`}>
			<TypographyItem variant="H4">
				<svelte:fragment slot="head">The quick brown fox jumps over the lazy dog</svelte:fragment>
				<svelte:fragment slot="title">H4</svelte:fragment>
				<svelte:fragment slot="desc">
					Commonly used for large H1 headings to put strong emphasis on bold typography.
				</svelte:fragment>
			</TypographyItem>
		</div>
	</div>
</div>
