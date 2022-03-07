import Title from './components/title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title></Title>
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      {selectedImg && <Modal selectedImg={selectedImg}></Modal> }
    </div>
  );
}

export default App;
