'use client'

import { Input } from '@/components/ui/input'

interface ScopeInputProps {
	value: string
	onChange: (value: string) => void
}

export function ScopeInput({ value, onChange }: ScopeInputProps) {
	return (
		<div className="space-y-2">
			<label className="text-sm font-medium">Kapsam</label>
			<Input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder="Kapsam girin (örn: auth, api)"
				className="w-[180px]"
			/>
		</div>
	)
}
