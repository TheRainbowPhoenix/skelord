import { error } from '@sveltejs/kit';


import type { ChannelRequest, ChannelPage } from './types';
 
export const load: (a: ChannelRequest) => ChannelPage = (({ params }) => {
  console.log(params)
  if (params.id === '@me') {
    return {
      title: 'Me',
      content: 'Your self channel'
    };
  }
 
  throw error(404, 'Not found');
});