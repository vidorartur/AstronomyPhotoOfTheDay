import { Apod } from "@/component/apod"
import { Provider } from "@/context/provider"

export default function Home(){
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
