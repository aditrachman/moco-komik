import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
      <p className='text-4xl font-extrabold text-transparent bg-clip-text bg-slate-800 font-tos '>MOCO KOMiK</p>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright @aditrachman23 &copy; {new Date().getFullYear()} Website Rekomendasi Komik  </p>
      </Container>
    </footer>
  )
}
