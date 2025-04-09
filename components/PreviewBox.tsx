import { Card, CardContent } from '@/components/ui/card'

interface PreviewBoxProps {
	message: string
}

export function PreviewBox({ message }: PreviewBoxProps) {
	return (
		<Card className="w-full bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
			<CardContent className="p-4">
				<pre className="whitespace-pre-wrap font-mono text-sm">{message}</pre>
			</CardContent>
		</Card>
	)
}
