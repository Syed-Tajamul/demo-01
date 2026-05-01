import './App.css'
import ImageCard from './components/ImageCard'

function App() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-[672px] h-[615px] border-2 relative bg-[#2f3135]'>
        <ImageCard
          src="Frame 2147231021 1.png"
          top={36}
          left={234}
          height={312}
          width={214}
          backdropFilter="blur(12px)"
          zIndex={10}
        />
        <h1>hey</h1>
        <ImageCard
          src="Frame 2147231019 1.png"
          top={192}
          left={438}
          height={313}
          width={214}
          backdropFilter="blur(2px)"
          zIndex={8}
        />

        <ImageCard
          src="Frame 2147231020 1 (2).png"
          top={77}
          left={117}
          height={200}
          width={137}
          backdropFilter="blur(5px)"
          zIndex={6}
        />

        <ImageCard
          src="Frame 2147231022 1 (2).png "
          top={223}
          left={45}
          height={295}
          width={202}
          backdropFilter="blur(1px)"
          zIndex={4}
        />

        <ImageCard
          src="Frame 2147231023 1.png"
          top={339}
          left={271}
          height={204}
          width={140}
          backdropFilter="blur(4px)"
          zIndex={2}
        />
      </div>
    </div>
  )
}

export default App