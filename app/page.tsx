'use client'

import { useState } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'
import { CommitForm } from '@/components/CommitForm'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function Home() {
	const [isStarted, setIsStarted] = useState(false)

	if (!isStarted) {
		return <BackgroundPaths title="Commit Mesaj Yardımcısı" onStart={() => setIsStarted(true)} />
	}

	return (
		<BackgroundPaths title="Commit Mesaj Yardımcısı">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="relative z-20 container mx-auto p-4 max-w-4xl"
			>
				<div className="flex justify-between items-center mb-6">
					<div className="flex items-center gap-4">
						<ThemeToggle />
					</div>
				</div>

				<Card className="backdrop-blur-md bg-white/80 dark:bg-black/80">
					<CardContent className="p-6">
						<Tabs defaultValue="guide" className="w-full">
							<TabsList className="w-full mb-6">
								<TabsTrigger value="guide" className="flex-1">
									Kılavuz
								</TabsTrigger>
								<TabsTrigger value="form" className="flex-1">
									Commit Oluştur
								</TabsTrigger>
							</TabsList>

							<div className="min-h-[600px]">
								<TabsContent value="guide" className="mt-6 h-[600px] overflow-y-auto custom-scrollbar">
									<div className="prose dark:prose-invert max-w-none">
										<h2 className="text-2xl font-bold mb-4">Conventional Commits Nedir?</h2>
										<p className="text-sm leading-relaxed mb-4">
											Conventional Commits, commit mesajları için standart bir format sağlayan spesifikasyondur. Bu
											format sayesinde otomatik sürüm yönetimi ve değişiklik günlükleri (CHANGELOG) oluşturmak mümkün
											olur.
										</p>

										<h2 className="text-2xl font-bold mt-8 mb-2">Neden Kullanmalıyız?</h2>
										<ul className="list-disc pl-4 space-y-1 mb-8 text-sm">
											<li>Otomatik sürüm numarası belirleme</li>
											<li>Otomatik CHANGELOG oluşturma</li>
											<li>Tutarlı commit geçmişi</li>
											<li>Kolay kod inceleme süreci</li>
										</ul>

										<h2 className="text-2xl font-bold mt-8 mb-4">Commit Mesaj Yapısı</h2>
										<h3 className="text-lg font-semibold mt-4 mb-2">Commit Mesaj Yapısı</h3>
										<pre className="bg-slate-100 dark:bg-gray-900 p-3 rounded-md text-sm mb-4">
											<code>{`<type>[optional scope]: <description>

[optional body]

[optional footer(s)]`}</code>
										</pre>

										<h3 className="text-lg font-semibold mt-4 mb-2">Commit Türleri</h3>
										<ul className="list-disc list-inside space-y-2 text-sm">
											<li>
												<strong>feat:</strong> Yeni bir özellik eklendiğinde
											</li>
											<li>
												<strong>fix:</strong> Bir hata düzeltildiğinde
											</li>
											<li>
												<strong>docs:</strong> Sadece dokümantasyon değişikliklerinde
											</li>
											<li>
												<strong>style:</strong> Kod formatı değişikliklerinde (boşluk, noktalama vb.)
											</li>
											<li>
												<strong>refactor:</strong> Kod yeniden düzenlendiğinde
											</li>
											<li>
												<strong>perf:</strong> Performans iyileştirmelerinde
											</li>
											<li>
												<strong>test:</strong> Test eklendiğinde veya düzeltildiğinde
											</li>
											<li>
												<strong>build:</strong> Build sistemini etkileyen değişikliklerde
											</li>
											<li>
												<strong>ci:</strong> CI konfigürasyonlarında değişiklik
											</li>
											<li>
												<strong>chore:</strong> Diğer değişiklikler
											</li>
										</ul>

										<h3 className="text-lg font-semibold mt-4 mb-2">Detaylı Örnekler</h3>
										<div className="space-y-2 text-sm">
											<div className="p-2 rounded bg-slate-100 dark:bg-gray-900">
												<p className="mb-1">
													<strong>feat:</strong> (kullanıcı için yeni özellik)
												</p>
												<code className="text-xs">feat(auth): kullanıcı girişi özelliği eklendi</code>
											</div>

											<div className="p-2 rounded bg-slate-100 dark:bg-gray-900">
												<p className="mb-1">
													<strong>fix:</strong> (kullanıcı için hata düzeltmesi)
												</p>
												<code className="text-xs">fix(api): kullanıcı verisi çekme hatası giderildi</code>
											</div>

											<div className="p-2 rounded bg-slate-100 dark:bg-gray-900">
												<p className="mb-1">
													<strong>docs:</strong> (dokümantasyon değişiklikleri)
												</p>
												<code className="text-xs">docs: kurulum adımları güncellendi</code>
											</div>

											<div className="p-2 rounded bg-slate-100 dark:bg-gray-900">
												<p className="mb-1">
													<strong>style:</strong> (biçimlendirme, noktalı virgül eksikleri vb.; üretim kodu değişikliği
													yok)
												</p>
												<code className="text-xs">style: kod formatı düzenlendi</code>
											</div>

											<div className="p-2 rounded bg-slate-100 dark:bg-gray-900">
												<p className="mb-1">
													<strong>refactor:</strong> (üretim kodunun yeniden düzenlenmesi, örn. değişken yeniden
													adlandırma)
												</p>
												<code className="text-xs">refactor(user): değişken isimleri düzenlendi</code>
											</div>

											<div className="p-2 rounded bg-slate-100 dark:bg-gray-900">
												<p className="mb-1">
													<strong>test:</strong> (eksik testlerin eklenmesi, testlerin yeniden düzenlenmesi)
												</p>
												<code className="text-xs">test: kullanıcı girişi testleri eklendi</code>
											</div>

											<div className="p-2 rounded bg-slate-100 dark:bg-gray-900">
												<p className="mb-1">
													<strong>chore:</strong> (görev güncellemeleri vb.)
												</p>
												<code className="text-xs">chore: paket bağımlılıkları güncellendi</code>
											</div>
										</div>
									</div>
								</TabsContent>

								<TabsContent value="form" className="mt-6">
									<CommitForm />
								</TabsContent>
							</div>
						</Tabs>
					</CardContent>
				</Card>
			</motion.div>
		</BackgroundPaths>
	)
}
