<script context="module" lang="ts">
	import { style, tw } from 'twind/style'

	export type HeadingProps = Parameters<typeof headingStyle>[0]
	// const headingVariant = [
	// 	'H1+',
	// 	'H1',
	// 	'H1Light',
	// 	'H2',
	// 	'H3',
	// 	'H3Bold',
	// 	'H4',
	// ] as const
	const headingStyle = style({
		base: `font-sans`,

		variants: {
			variant: {
				'H1+': `font-bold text-h1+`,
				H1: `font-bold text-h1`,
				H1Light: `font-normal text-h1`,
				H2: `font-bold text-h2`,
				H3: `font-medium text-h3`,
				H3Bold: `font-bold text-h3`,
				H4: `font-semibold text-h4`,
			},
		},

		defaults: {
			variant: 'H4',
		},

		matches: [],
	})

	function heading(node: HTMLElement, props?: HeadingProps) {
		node.className = tw(headingStyle(props))

		return {
			update(props?: HeadingProps) {
				node.className = tw(headingStyle(props))
			},
			destroy() {},
		}
	}
</script>

<script lang="ts">
	export let props: HeadingProps
</script>

{#if props.variant === 'H1+' || props.variant === 'H1' || props.variant === 'H1Light'}
	<h1 use:heading={props}>
		<slot />
	</h1>
{:else if props.variant === 'H2'}
	<h2 use:heading={props}>
		<slot />
	</h2>
{:else if props.variant === 'H3' || props.variant === 'H3Bold'}
	<h3 use:heading={props}>
		<slot />
	</h3>
{:else if props.variant === 'H4'}
	<h4 use:heading={props}>
		<slot />
	</h4>
{:else}
	<div>You forgot to pass variant props</div>
{/if}
