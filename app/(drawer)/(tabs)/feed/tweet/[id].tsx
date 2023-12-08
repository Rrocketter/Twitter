import {Text} from 'react-native';
import React from 'react'
import Tweet from '../../../../../components/Tweet';
import tweets from '../../../../../assets/data/tweets';
import {useRoute} from '@react-navigation/native';

type RouteParams = {
  id: string;
};

export default function TweetScreen() {
  const route = useRoute();
  const params = route.params as RouteParams; // Cast params to RouteParams
  const {id} = params;

  const tweet = tweets.find((tweet) => tweet.id === id);

  if (!tweet) {
    return <Text>Tweet not found</Text>;
  } 

  return <Tweet tweet={tweet} />;
  
}