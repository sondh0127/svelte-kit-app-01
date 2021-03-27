<script lang="ts">
	import Button from './Button.svelte'
	import { tw, apply } from '$lib/twind'
	import Heading from './typography/Heading.svelte'
	const btn = apply`inline-block bg-gray-500 text-base`
</script>

<div
	use:tw={'flex max-w-screen-lg mx-auto bg-gray-300 space-y-4 p-6 items-start text-gray-500 justify-center flex-col'}
>
	<div use:tw={`bg-blue text-white`}>Design System</div>
	<div use:tw={`bg-blue text-white`}>Typography</div>
	<Heading props={{ variant: 'H1+', tw: `text-grey` }}>Heading H1+</Heading>
	<Heading props={{ variant: 'H1', tw: `text-blue` }}>Heading H1</Heading>

	<div use:tw={'bg-gray-200 rounded'}>bg-gray-200 rounded</div>

	<div use:tw={`bg-gray-200 ${false && 'rounded'}`}>bg-gray-200</div>

	<div use:tw={['bg-gray-200', true && 'rounded', 'underline']}>
		bg-gray-200 rounded underline
	</div>
	<button use:tw={btn}> apply button </button>

	<!-- Styles -->
	<div use:tw={'flex items-center space-x-4'}>
		<h6
			use:tw={`text-white bg-blue-500 font-semibold w-40 ${true && 'rounded'}`}
		>
			Size
		</h6>
		<Button props={{ size: 'sm' }}>Twind</Button>
		<Button props={{ size: 'base' }}>Twind</Button>
		<Button props={{ size: 'md' }}>Twind</Button>
		<Button props={{ size: 'lg' }}>Twind</Button>
	</div>
	<div use:tw={'flex items-center space-x-4'}>
		<h6 use:tw={`text-white bg-blue-500 font-semibold w-40`}>Variant</h6>
		<Button props={{ variant: 'blue' }}>blue</Button>
		<Button props={{ variant: 'green' }}>green</Button>
		<Button props={{ variant: 'indigo' }}>indigo</Button>
		<Button props={{ variant: 'pink' }}>pink</Button>
		<Button props={{ variant: 'red' }}>red</Button>
	</div>

	<div use:tw={'flex items-center space-x-4'}>
		<h6 use:tw={`text-white bg-blue-500 font-semibold w-40`}>Outlined</h6>
		<Button props={{ outlined: true }}>Outlined</Button>
	</div>
</div>
