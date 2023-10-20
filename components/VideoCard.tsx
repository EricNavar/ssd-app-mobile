
import { Suspense } from 'react';
import { Video, NavigationProps, Screens } from '../commonTypes';
import { Text, Image, TouchableOpacity, View } from 'react-native-ui-lib';

export const VideoCard = (props: { video: Video } & NavigationProps) => {
  const video = props.video;
  const onPress = () => {
    props.navigation.navigate(Screens.VideoScreen, {
      video: video
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ marginTop: 16 }}>
      <Suspense fallback={<View/>}>
        <Image
          source={{ uri: `https://ds1cu037r68vs.cloudfront.net/${video.semester}--${video.title}.png` }}
          style={{ width: 341, height: 192, borderRadius: 4 }}
        />
      </Suspense>
      <Text style={{ fontSize: 16, marginTop: 4 }}>
        {video.title}
      </Text>
    </TouchableOpacity>
  );
}
