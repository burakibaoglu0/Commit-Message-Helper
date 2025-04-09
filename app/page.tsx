'use client'

import { useState } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'
import { CommitForm } from '@/components/CommitForm'

export default function Home() {
	const [isStarted, setIsStarted] = useState(false)

	if (!isStarted) {
		return <BackgroundPaths title="Commit Message Helper" onStart={() => setIsStarted(true)} />
	}

	return (
		<BackgroundPaths title="Commit Message Helper">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="relative z-20 container mx-auto p-4 max-w-2xl"
			>
				<div className="flex justify-between items-center mb-6">
					<div className="flex items-center gap-4">
						<ThemeToggle />
					</div>
				</div>

				<div className="backdrop-blur-md bg-white/80 dark:bg-black/80 p-6 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-xl">
					<CommitForm />
				</div>
			</motion.div>
		</BackgroundPaths>
	)
}
