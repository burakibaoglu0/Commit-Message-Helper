export function GuideContent() {
	return (
		<div className="prose dark:prose-invert max-w-none">
			<h2 className="text-2xl font-bold mb-4">Conventional Commits</h2>
			<p className="text-sm leading-relaxed mb-6">
				Commit mesajları için standart bir format sağlayan spesifikasyon. Otomatik sürüm yönetimi ve CHANGELOG
				oluşturmayı kolaylaştırır.
			</p>

			<div className="grid gap-4 mb-8">
				<div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
					<h3 className="font-semibold mb-2">Neden Kullanmalıyız?</h3>
					<div className="grid grid-cols-2 gap-3 text-sm">
						<div className="flex items-center gap-2">
							<svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
							</svg>
							<span>Otomatik sürüm kontrolü</span>
						</div>
						<div className="flex items-center gap-2">
							<svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
								/>
							</svg>
							<span>Otomatik CHANGELOG</span>
						</div>
						<div className="flex items-center gap-2">
							<svg className="w-4 h-4 text-purple-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
							<span>Takım uyumluluğu</span>
						</div>
						<div className="flex items-center gap-2">
							<svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								/>
							</svg>
							<span>Kolay kod inceleme</span>
						</div>
					</div>
				</div>

				<div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
					<h3 className="font-semibold mb-2">Format</h3>
					<pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md text-sm">
						<code>{`<type>[scope]: <description>

[body]

[footer]`}</code>
					</pre>
				</div>

				<div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
					<h3 className="font-semibold mb-2">Commit Türleri</h3>
					<div className="grid grid-cols-2 gap-2 text-sm">
						<div>
							<strong>feat:</strong> Yeni özellik
						</div>
						<div>
							<strong>fix:</strong> Hata düzeltme
						</div>
						<div>
							<strong>docs:</strong> Dokümantasyon
						</div>
						<div>
							<strong>style:</strong> Kod formatı
						</div>
						<div>
							<strong>refactor:</strong> Yeniden düzenleme
						</div>
						<div>
							<strong>perf:</strong> Performans
						</div>
						<div>
							<strong>test:</strong> Test
						</div>
						<div>
							<strong>build:</strong> Build sistemi
						</div>
					</div>
				</div>

				<div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
					<h3 className="font-semibold mb-2">Örnekler</h3>
					<div className="space-y-2 text-sm">
						<code className="block">feat(auth): add login functionality</code>
						<code className="block">fix(api): resolve data fetch issue</code>
						<code className="block">docs: update README</code>
					</div>
				</div>
			</div>
		</div>
	)
}
