import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import PieChart from '@/components/PieChart'
import PerformanceTable from '@/components/PerformanceTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex  p-24 ${inter.className}`}
    >
      <PieChart />
      <PerformanceTable />
    </main>
  )
}
