import { Apod } from "@/components/Apod"
import { Provider } from "@/context/provider"

export default function Home() {
  return (
    <div className="App">
      <header>
        <Provider>
          <Apod />
        </Provider>
      </header>
    </div>
  )
}
