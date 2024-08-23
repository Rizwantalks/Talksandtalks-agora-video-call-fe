import React, { useState } from 'react';
import VideoCall from './components/VideoCall';

function App() {
  const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState('');

  return (
    <div className="App">
      <h1>Agora Video Call</h1>
      {!inCall ? (
        <div>
          <input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Enter Channel Name"
          />
          <button onClick={() => setInCall(true)}>Join Call</button>
        </div>
      ) : (
        <VideoCall channel={channelName} />
      )}
    </div>
  );
}

export default App;
