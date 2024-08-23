import React, { useEffect } from 'react';
import { useRTCClient, useJoin, useLocalMicrophoneTrack, useLocalCameraTrack, useRemoteUsers } from 'agora-rtc-react';

const config = {
  mode: 'rtc',
  codec: 'vp8',
};

const appId = 'Y2af600a214c04e7dae27ff5dc1f39128'; // Replace with your Agora App ID
const token = null; // Generate a token from the Agora dashboard if required

const VideoCall = ({ channel }) => {
  const client = useRTCClient();
  const localAudioTrack = useLocalMicrophoneTrack();
  const localVideoTrack = useLocalCameraTrack();
  const remoteUsers = useRemoteUsers();

  useJoin(client, appId, channel, token, [localAudioTrack, localVideoTrack]);

  useEffect(() => {
    remoteUsers.forEach((user) => {
      if (user.videoTrack) {
        user.videoTrack.play(`user-${user.uid}`);
      }
    });
  }, [remoteUsers]);

  return (
    <div>
      <div id={`user-local`} style={{ width: '400px', height: '400px' }}></div>
      {remoteUsers.map((user) => (
        <div id={`user-${user.uid}`} style={{ width: '400px', height: '400px' }} key={user.uid}></div>
      ))}
    </div>
  );
};

export default VideoCall;
