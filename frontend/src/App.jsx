import './App.css'

function App() {

  var downloadBtn = document.querySelector('.download_btn');
  var URLinput = document.querySelector('.URL_input');

  downloadBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
  })

  function sendURL(URL){
    //
  }

  return (
    <div>
      <h1 className='heading'>Youtube Downloader</h1>
      <input className='URL-input' type="text" placeholder='Video URL'/>
      <button className='download-btn'>Download</button>
    </div>
  )
}

export default App
