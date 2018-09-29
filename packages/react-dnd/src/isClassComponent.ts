export default function isClassComponent(Component: any): boolean {
	return Boolean(
		Component &&
			Component.prototype &&
			typeof Component.prototype.render === 'function',
	)
}
