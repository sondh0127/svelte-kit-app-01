import { tw as _tw, css, apply } from 'twind/style'

type TwindParams = Parameters<typeof _tw>[number]

function tw(node: HTMLElement, twindParams: TwindParams) {
	node.className = _tw(twindParams)
	return {
		update(twindParams: TwindParams) {
			node.className = _tw(twindParams)
		},
		destroy() {},
	}
}
export { css, tw, apply }
