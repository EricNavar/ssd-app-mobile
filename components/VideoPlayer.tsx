import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';

type VideoPlayerProps = {
  thumbnail: string,
  source: string,
}

//example video source: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

export const VideoPlayer = (props: VideoPlayerProps) => {
  const [status, setStatus] = React.useState<AVPlaybackStatus | null>(null);
  return (
    <Video
      style={styles.video}
      source={{
        uri: props.source,
      }}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      onPlaybackStatusUpdate={status => setStatus(status)}
      usePoster={true}
      posterSource={{ uri: props.thumbnail }}
      shouldPlay={true}
    >
      <Image
        style={{ width: '100%', height: 100, marginBottom: 12 }}
        source={{uri:props.thumbnail}}
      />
    </Video>
  );
}

const styles = StyleSheet.create({
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 'auto',
    aspectRatio: 1.7777,
    marginBottom: 20,
  }
});
