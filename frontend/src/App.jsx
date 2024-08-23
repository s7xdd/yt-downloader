import { useState } from 'react';
import './App.css'
import axios from 'axios'

function App() {

  const [value,setValue] = useState('')

  function onChange(event){
    setValue(event.target.value)
  }

  function check(){
    console.log(`URL: ${value}`);
    sendURL(value);
  }

  async function sendURL(URL){
    const res = await axios.get(`http://localhost:4000/download?url=${URL}`)
  }

  return (
    <div>
      <h1 className='heading'>Youtube Downloader</h1>
      <input className='URL_input' type="text" placeholder='Video URL' onChange={onChange} />
      <button className='download_btn' onClick={check}>Download</button>
    </div>
  )
}

export default App
