<script lang="ts">
	import { tw, style } from 'twind/style'

	const buttonVariant = ['red', 'indigo', 'pink', 'green', 'blue'] as const

	type ButtonVariant = typeof buttonVariant[number]

	const _variant = buttonVariant.reduce((result, item) => {
		const getVariant = (color: string) =>
			`bg-${color}-600 hover:bg-${color}-700 focus:ring-${color}-500 focus:ring-offset-${color}-200`
		result[item] = getVariant(item)
		return result
	}, {} as Record<ButtonVariant, string>)

	type Match = typeof buttonStyle[]

	const _matchOutlinedVariant = buttonVariant.map((item) => {
		return {
			variant: item,
			outlined: true,
			use: `ring-${item}-400`,
		}
	})

	const buttonStyle = style({
		base: `py-2 px-4 inline-flex justify-center items-center text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md`,

		variants: {
			size: {
				sm: `text-sm py-1 px-3`,
				base: `text-base py-2 px-4`,
				md: `text-lg py-3 px-5`,
				lg: `text-xl py-4 px-6`,
			},
			variant: _variant,
			outlined: {
				true: `bg-transparent ring-2`,
			},
			disabled: {
				true: `opacity-70 cursor-not-allowed`,
			},
			rounded: {
				true: `rounded-full`,
			},
		},

		defaults: {
			variant: 'blue',
			size: 'base',
		},

		matches: [
			{
				variant: 'red',
				outlined: true,
				use: `ring-red-400`,
			},
		],
	})

	type ButtonProps = Parameters<typeof buttonStyle>[0]

	function button(node: HTMLElement, ButtonProps?: ButtonProps) {
		node.className = tw(buttonStyle(ButtonProps))

		return {
			update(newButtonProps?: ButtonProps) {
				node.className = tw(buttonStyle(newButtonProps))
			},
			destroy() {},
		}
	}
	export let props: ButtonProps
</script>

<button use:button={props}> <slot /> </button>
