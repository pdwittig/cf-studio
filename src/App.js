const TONES = [
  { label: '01', path: `${process.env.PUBLIC_URL}/tone/kick.ogg` },
  { label: '02', path: `${process.env.PUBLIC_URL}/tone/clap.ogg` },
  { label: '03', path: `${process.env.PUBLIC_URL}/tone/closed-hat.ogg` },
  { label: '04', path: `${process.env.PUBLIC_URL}/tone/open-hat.ogg` },
]

export default function App() {
  return (
    <div className="flex mt-20">
      <div className="grid grid-cols-4 gap-4 mx-auto">
        {
          TONES.map((tone, index) => <Tone tone={tone} key={index} />)
        }
      </div>
    </div>
  )
}

function Tone({ tone, ...restProps }) {

  const audio = new Audio(tone.path)
  const play = () => {
    audio.pause();
    audio.currentTime = 0;  
    audio.play();
  }

  return (
    <div>
     <button
        key={restProps.key}
        className="p-5 bg-gray-100 hover:bg-gray-200 focus:outline-none active:outline-none rounded-md"
        onClick={play}
      >
        {tone.label}
      </button>
    </div>
  )
}