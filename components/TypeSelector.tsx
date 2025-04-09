'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const commitTypes = [
	{ value: 'feat', label: '✨ Yeni Özellik' },
	{ value: 'fix', label: '🐛 Hata Düzeltme' },
	{ value: 'docs', label: '📚 Dokümantasyon' },
	{ value: 'style', label: '💄 Stil Değişiklikleri' },
	{ value: 'refactor', label: '♻️ Kod Yeniden Düzenleme' },
	{ value: 'test', label: '✅ Test' },
	{ value: 'chore', label: '🔧 Genel Bakım' },
	{ value: 'perf', label: '⚡️ Performans İyileştirme' },
	{ value: 'ci', label: '👷 CI/CD' }
]

interface TypeSelectorProps {
	value: string
	onChange: (value: string) => void
}

export function TypeSelector({ value, onChange }: TypeSelectorProps) {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Commit türü seçin" />
			</SelectTrigger>
			<SelectContent>
				{commitTypes.map((type) => (
					<SelectItem key={type.value} value={type.value}>
						{type.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
