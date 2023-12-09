import {ActivityIndicator, Text} from 'react-native';
import React from 'react'
import Tweet from '../../../../../components/Tweet';
import {useRoute} from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useTweetsApi } from '../../../../../lib/api/tweets';

type RouteParams = {  
  id: string;
};

export default function TweetScreen() {
  const route = useRoute();
  const params = route.params as RouteParams; // Cast params to RouteParams
  const {id} = params;

  const {getTweet} = useTweetsApi();

  const { data, isLoading, error } = useQuery({
    queryKey: ['tweet', id],
    queryFn: () => getTweet(id as string),
  })

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Tweet {id} not found</Text>;
  } 

  return <Tweet tweet={data} />;
  
}