'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface CopyButtonProps {
	text: string
	disabled?: boolean
}

export function CopyButton({ text, disabled = false }: CopyButtonProps) {
	const [copied, setCopied] = useState(false)

	const handleCopy = async (e: React.MouseEvent) => {
		e.preventDefault()

		if (disabled) return

		try {
			await navigator.clipboard.writeText(text)
			setCopied(true)

			setTimeout(() => {
				setCopied(false)
			}, 2000)
		} catch (err) {
			console.error('Kopyalama başarısız:', err)
		}
	}

	return (
		<Button
			onClick={handleCopy}
			variant="outline"
			className={`min-w-[100px] transition-all duration-200 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
			disabled={disabled}
		>
			{copied ? 'Kopyalandı!' : 'Kopyala'}
		</Button>
	)
}
