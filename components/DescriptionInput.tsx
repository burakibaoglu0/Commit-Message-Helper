'use client'

import { Input } from '@/components/ui/input'

interface DescriptionInputProps {
	value: string
	onChange: (value: string) => void
}

export function DescriptionInput({ value, onChange }: DescriptionInputProps) {
	return (
		<div className="space-y-2">
			<label className="text-sm font-medium">Açıklama</label>
			<Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Açıklama girin" />
		</div>
	)
}
