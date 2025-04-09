interface CommitMessage {
	type: string
	scope?: string
	description: string
	body?: string
	footer?: string
}

export function generateCommitMessage({ type, scope, description, body, footer }: CommitMessage): string {
	let message = type

	if (scope) {
		message += `(${scope})`
	}

	message += `: ${description}`

	if (body) {
		message += `\n\n${body}`
	}

	if (footer) {
		message += `\n\n${footer}`
	}

	return message
}
