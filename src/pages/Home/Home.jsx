import Tagline from '../../components/Tagline/Tagline'
import Bio from '../../components/Bio/Bio'

function Home() {
  return (
    <main className="py-16">
      <div className="px-8">
        <Tagline />
        <Bio />
      </div>
    </main>
  )
}

export default Home