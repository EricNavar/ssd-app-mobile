 
import { Video, NavigationProps, Screens } from '../commonTypes';
import { Text, Image, TouchableOpacity } from 'react-native-ui-lib';

export const VideoCard = (props: {video: Video} & NavigationProps) => {
  const video = props.video;
  const onPress = () => {
    props.navigation.navigate(Screens.VideoScreen, {
      trackId: video._id
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={{marginTop:16}}>
      <Image
        source={{uri:`https://d34lypc6o619vf.cloudfront.net/${video.semester}.${video.video_number}.jpg`}}
        style={{ width:341, height: 192, borderRadius: 4 }}
      />
      <Text style={{fontSize:16, marginTop: 4}}>
        Video {video.video_number}: {video.title}
      </Text>
    </TouchableOpacity>
  );
}
