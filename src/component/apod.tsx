import Context from "@/context/context";
import { useContext, useEffect } from "react";

export function Apod(): JSX.Element  {
  const {setNasaImage, nasaImage} = useContext(Context);
  async function fetchNASA(): Promise<void> {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=6vxLNvZVGzUTnl4qhSFuAjaHeT7S66gkr0fzZfbb';
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    setNasaImage(response);
  }
    useEffect(() => { fetchNASA(); });


    if (typeof nasaImage !== 'undefined') {
      return (
        <div className="container">
          <h1 className="title">{nasaImage.title}</h1>
          <h2 className="copyright">{nasaImage.copyright}</h2>
          <h3 className="date">{nasaImage.date}</h3>
          <p className="text">{nasaImage.explanation}</p>
          <picture>
          <img
          src={nasaImage.hdurl}
          alt="of the day"
          />
          </picture>
        </div>
      )
    }
    return (<div className="loading">Loading...</div>)
}