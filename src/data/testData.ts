import { PodcastSummaryProps } from '../components/podcastsummary/PodcastSummary';
import { PodcastEntryI, PodcastEpisode } from '../podcast.types';

export const DUMMY_SUMMARY: PodcastSummaryProps = {
  id: '788236947',
  imgSource:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/84/84/ab/8484ab60-8c9e-30d5-92d3-c806c89cbbe7/mza_14154291241936766492.jpg/170x170bb.png',
  name: 'Caresha Please',
  title: 'Caresha Please',
  artist: 'REVOLT',
  description: `Host Yung Miami (of City Girls' fame) welcomes the biggest names in Hip Hop and entertainment for wild and unfiltered conversations about their lives, careers, relationships, and much more. Caresha Brownlee (Yung Miami) is a famous singer, musician, entrepreneur, model, social media star, and Internet sensation from Miami, FL. She is sure to get people talking and bring some surprises with fun, no holds barred interviews.`,
};

export const DUMMY_PODCASTS: PodcastEntryI[] = [
  {
    id: '1633466636',
    name: 'Angie Martinez IRL',
    title: 'Angie Martinez IRL - iHeartPodcasts',
    artist: 'iHeartPodcasts',
    image: [
      {
        height: '55',
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/dd/2a/ac/dd2aacbf-f784-7ff2-94f9-939c923c98b8/mza_15448115337081593321.jpg/55x55bb.png',
      },
      {
        height: '60',
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/dd/2a/ac/dd2aacbf-f784-7ff2-94f9-939c923c98b8/mza_15448115337081593321.jpg/60x60bb.png',
      },
      {
        height: '170',
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/dd/2a/ac/dd2aacbf-f784-7ff2-94f9-939c923c98b8/mza_15448115337081593321.jpg/170x170bb.png',
      },
    ],
  },
  {
    id: '1535809341',
    name: 'The Joe Budden Podcast',
    title: 'The Joe Budden Podcast - The Joe Budden Network',
    artist: 'The Joe Budden Network',
    image: [
      {
        height: '55',
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/55x55bb.png',
      },
      {
        height: '60',
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/60x60bb.png',
      },
      {
        height: '170',
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/170x170bb.png',
      },
    ],
  },
];

export const DUMMY_EPISODES: PodcastEpisode[] = [
  {
    id: 1,
    title: 'Taraji P. Henson',
    description:
      '<p>This week on Angie Martinez IRL Podcast, her girl Taraji P. Henson joins her for a candid conversation that only two close friends could have.</p>\n<p>Taraji didn’t sign up for fame, she signed up to create art as she believes art has the power to change and affect lives. But what happens when she looks in the mirror and doesn’t feel like she can provide that lift anymore? When things she thought made her happy don\'t cut it anymore? She has to go on her own journey to find happiness.</p>\n<p>But Taraji isn\'t alone, Angie reveals her own moments of darkness and the awakening she experienced on a trip with Taraji. The two explain what it means to fight for your joy and digest the importance of friends who can save your life.</p>\n<p>Their convo also explores managing social media addictions in a healthy way, unshakable faith, and a debate over the importance and need of ego.</p>\n<p>In the words of Taraji, If you have a story to tell, tell it.</p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
    link: 'https://omny.fm/shows/angie-martinez-irl/taraji-p-henson',
    published: 1672408555000,
    created: 1672408555000,
    category: [],
    content:
      '<p>This week on Angie Martinez IRL Podcast, her girl Taraji P. Henson joins her for a candid conversation that only two close friends could have.</p>\n<p>Taraji didn’t sign up for fame, she signed up to create art as she believes art has the power to change and affect lives. But what happens when she looks in the mirror and doesn’t feel like she can provide that lift anymore? When things she thought made her happy don\'t cut it anymore? She has to go on her own journey to find happiness.</p>\n<p>But Taraji isn\'t alone, Angie reveals her own moments of darkness and the awakening she experienced on a trip with Taraji. The two explain what it means to fight for your joy and digest the importance of friends who can save your life.</p>\n<p>Their convo also explores managing social media addictions in a healthy way, unshakable faith, and a debate over the importance and need of ego.</p>\n<p>In the words of Taraji, If you have a story to tell, tell it.</p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
    enclosures: [
      {
        url: 'https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/e41e4360-c9ac-4986-9532-af7b00e2f17f/audio.mp3?utm_source=Podcast&in_playlist=910ebdb0-f7f7-4c39-a376-aeca00f9f039',
        length: '46742141',
        type: 'audio/mpeg',
      },
      [
        {
          'media:player': {
            url: 'https://omny.fm/shows/angie-martinez-irl/taraji-p-henson/embed',
          },
          url: 'https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/e41e4360-c9ac-4986-9532-af7b00e2f17f/audio.mp3?utm_source=Podcast&in_playlist=910ebdb0-f7f7-4c39-a376-aeca00f9f039',
          type: 'audio/mpeg',
        },
        {
          url: 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/image.jpg?t=1672244855&size=Large',
          type: 'image/jpeg',
        },
      ],
    ],
    content_encoded:
      '<p>This week on Angie Martinez IRL Podcast, her girl Taraji P. Henson joins her for a candid conversation that only two close friends could have.</p>\n<p>Taraji didn’t sign up for fame, she signed up to create art as she believes art has the power to change and affect lives. But what happens when she looks in the mirror and doesn’t feel like she can provide that lift anymore? When things she thought made her happy don\'t cut it anymore? She has to go on her own journey to find happiness.</p>\n<p>But Taraji isn\'t alone, Angie reveals her own moments of darkness and the awakening she experienced on a trip with Taraji. The two explain what it means to fight for your joy and digest the importance of friends who can save your life.</p>\n<p>Their convo also explores managing social media addictions in a healthy way, unshakable faith, and a debate over the importance and need of ego.</p>\n<p>In the words of Taraji, If you have a story to tell, tell it.</p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
    itunes_author: 'iHeartPodcasts',
    itunes_duration: '14:05',
    itunes_season: 1,
    itunes_episode: 12,
    itunes_episodeType: 'full',
    itunes_image: {
      href: 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/image.jpg?t=1672244855&size=Large',
    },
    media: {
      thumbnail: [
        {
          'media:player': {
            url: 'https://omny.fm/shows/angie-martinez-irl/taraji-p-henson/embed',
          },
          url: 'https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/e41e4360-c9ac-4986-9532-af7b00e2f17f/audio.mp3?utm_source=Podcast&in_playlist=910ebdb0-f7f7-4c39-a376-aeca00f9f039',
          type: 'audio/mpeg',
        },
        {
          url: 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/image.jpg?t=1672244855&size=Large',
          type: 'image/jpeg',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Kim Kardashian',
    description:
      '<p>This is an episode you won’t want to miss. </p>\n<p>This week on Angie Martinez IRL Podcast, Angie is coming to you live from one of the most zen places on earth… Kim Kardashian’s office. Kim has a “big life” full of tons of opinions but has somehow mastered remaining calm mentally and emotionally despite it all. She admits she doesn’t look at comments, is open to self-correction, and believes in the room for redemption but reveals that the robbery in Paris is what really shifted her values in a major way. </p>\n<p>Everyone is going through something in real life, Kim Kardashian included. In this episode, Kim shares how the memories of her own father help her keep it together for her kids and continue to be what leads her in her very complex co-parenting journey.  </p>\n<p>Despite all that’s happening around her, she makes time where there is often none, is dedicated to helping others, and admits to truly feeling at peace. Kim Kardashian is free, having fun, and enjoying dating, even if it means various forms of dating in the house. </p>\n<p>This is an episode you won’t want to miss. </p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
    link: 'https://omny.fm/shows/angie-martinez-irl/kim-kardashian',
    published: 1672077300000,
    created: 1672077300000,
    category: [],
    content:
      '<p>This is an episode you won’t want to miss. </p>\n<p>This week on Angie Martinez IRL Podcast, Angie is coming to you live from one of the most zen places on earth… Kim Kardashian’s office. Kim has a “big life” full of tons of opinions but has somehow mastered remaining calm mentally and emotionally despite it all. She admits she doesn’t look at comments, is open to self-correction, and believes in the room for redemption but reveals that the robbery in Paris is what really shifted her values in a major way. </p>\n<p>Everyone is going through something in real life, Kim Kardashian included. In this episode, Kim shares how the memories of her own father help her keep it together for her kids and continue to be what leads her in her very complex co-parenting journey.  </p>\n<p>Despite all that’s happening around her, she makes time where there is often none, is dedicated to helping others, and admits to truly feeling at peace. Kim Kardashian is free, having fun, and enjoying dating, even if it means various forms of dating in the house. </p>\n<p>This is an episode you won’t want to miss. </p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
    enclosures: [
      {
        url: 'https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/a55a4dcc-d0e5-4f9b-8a37-af77010dd700/audio.mp3?utm_source=Podcast&in_playlist=910ebdb0-f7f7-4c39-a376-aeca00f9f039',
        length: '55789619',
        type: 'audio/mpeg',
      },
      [
        {
          'media:player': {
            url: 'https://omny.fm/shows/angie-martinez-irl/kim-kardashian/embed',
          },
          url: 'https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/a55a4dcc-d0e5-4f9b-8a37-af77010dd700/audio.mp3?utm_source=Podcast&in_playlist=910ebdb0-f7f7-4c39-a376-aeca00f9f039',
          type: 'audio/mpeg',
        },
        {
          url: 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/image.jpg?t=1672244855&size=Large',
          type: 'image/jpeg',
        },
      ],
    ],
    content_encoded:
      '<p>This is an episode you won’t want to miss. </p>\n<p>This week on Angie Martinez IRL Podcast, Angie is coming to you live from one of the most zen places on earth… Kim Kardashian’s office. Kim has a “big life” full of tons of opinions but has somehow mastered remaining calm mentally and emotionally despite it all. She admits she doesn’t look at comments, is open to self-correction, and believes in the room for redemption but reveals that the robbery in Paris is what really shifted her values in a major way. </p>\n<p>Everyone is going through something in real life, Kim Kardashian included. In this episode, Kim shares how the memories of her own father help her keep it together for her kids and continue to be what leads her in her very complex co-parenting journey.  </p>\n<p>Despite all that’s happening around her, she makes time where there is often none, is dedicated to helping others, and admits to truly feeling at peace. Kim Kardashian is free, having fun, and enjoying dating, even if it means various forms of dating in the house. </p>\n<p>This is an episode you won’t want to miss. </p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
    itunes_author: 'iHeartPodcasts',
    itunes_duration: 3486,
    itunes_season: 1,
    itunes_episode: 11,
    itunes_episodeType: 'full',
    itunes_image: {
      href: 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/image.jpg?t=1672244855&size=Large',
    },
    media: {
      thumbnail: [
        {
          'media:player': {
            url: 'https://omny.fm/shows/angie-martinez-irl/kim-kardashian/embed',
          },
          url: 'https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/a55a4dcc-d0e5-4f9b-8a37-af77010dd700/audio.mp3?utm_source=Podcast&in_playlist=910ebdb0-f7f7-4c39-a376-aeca00f9f039',
          type: 'audio/mpeg',
        },
        {
          url: 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/image.jpg?t=1672244855&size=Large',
          type: 'image/jpeg',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'IRL Take Aways: Mike Tyson',
    description:
      '<p>Mike Tyson may be one of the most interesting people walking the Earth and we must protect him. </p>\n<p>We’re back with another IRL #TakeAways. The in-between audio-only podcast where Angie and special guests reflect on episode responses, takeaways, and highlights. </p>\n<p>Does anyone else believe that when someone says something that resonates with you so much you feel it in your spirit, that it somehow shows up later in your life? The conversation Mike Tyson and Angie had about Angels resonated with Angie so much she is convinced she may have run into her own angel, Debbie, from South Jersey. </p>\n<p>But that’s not it!  On this week’s #TakeAways Angie also connects with psycologoist and trauma expert,  Dr. Mariel Bouquet to discuss rage, brain scans, and meditation as a solution. </p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
    link: 'https://omny.fm/shows/angie-martinez-irl/irl-take-aways-mike-tyson',
    published: 1670621110000,
    created: 1670621110000,
    category: [],
    content:
      '<p>Mike Tyson may be one of the most interesting people walking the Earth and we must protect him. </p>\n<p>We’re back with another IRL #TakeAways. The in-between audio-only podcast where Angie and special guests reflect on episode responses, takeaways, and highlights. </p>\n<p>Does anyone else believe that when someone says something that resonates with you so much you feel it in your spirit, that it somehow shows up later in your life? The conversation Mike Tyson and Angie had about Angels resonated with Angie so much she is convinced she may have run into her own angel, Debbie, from South Jersey. </p>\n<p>But that’s not it!  On this week’s #TakeAways Angie also connects with psycologoist and trauma expert,  Dr. Mariel Bouquet to discuss rage, brain scans, and meditation as a solution. </p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
    enclosures: [
      {
        url: 'https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/a1c54e3f-1196-4627-8af2-af66015fbef5/audio.mp3?utm_source=Podcast&in_playlist=910ebdb0-f7f7-4c39-a376-aeca00f9f039',
        length: '15872439',
        type: 'audio/mpeg',
      },
      [
        {
          'media:player': {
            url: 'https://omny.fm/shows/angie-martinez-irl/irl-take-aways-mike-tyson/embed',
          },
          url: 'https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/a1c54e3f-1196-4627-8af2-af66015fbef5/audio.mp3?utm_source=Podcast&in_playlist=910ebdb0-f7f7-4c39-a376-aeca00f9f039',
          type: 'audio/mpeg',
        },
        {
          url: 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/image.jpg?t=1672244855&size=Large',
          type: 'image/jpeg',
        },
      ],
    ],
    content_encoded:
      '<p>Mike Tyson may be one of the most interesting people walking the Earth and we must protect him. </p>\n<p>We’re back with another IRL #TakeAways. The in-between audio-only podcast where Angie and special guests reflect on episode responses, takeaways, and highlights. </p>\n<p>Does anyone else believe that when someone says something that resonates with you so much you feel it in your spirit, that it somehow shows up later in your life? The conversation Mike Tyson and Angie had about Angels resonated with Angie so much she is convinced she may have run into her own angel, Debbie, from South Jersey. </p>\n<p>But that’s not it!  On this week’s #TakeAways Angie also connects with psycologoist and trauma expert,  Dr. Mariel Bouquet to discuss rage, brain scans, and meditation as a solution. </p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
    itunes_author: 'iHeartPodcasts',
    itunes_duration: 991,
    itunes_season: 1,
    itunes_episode: 10,
    itunes_episodeType: 'bonus',
    itunes_image: {
      href: 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/image.jpg?t=1672244855&size=Large',
    },
    media: {
      thumbnail: [
        {
          'media:player': {
            url: 'https://omny.fm/shows/angie-martinez-irl/irl-take-aways-mike-tyson/embed',
          },
          url: 'https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/a1c54e3f-1196-4627-8af2-af66015fbef5/audio.mp3?utm_source=Podcast&in_playlist=910ebdb0-f7f7-4c39-a376-aeca00f9f039',
          type: 'audio/mpeg',
        },
        {
          url: 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/09313230-a088-4537-b3d1-aeca00f910df/image.jpg?t=1672244855&size=Large',
          type: 'image/jpeg',
        },
      ],
    },
  },
];

export const DUMMY_PODCASTS_REQ = {
  feed: {
    entry: [
      {
        'im:name': {
          label: 'The Joe Budden Podcast',
        },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
            attributes: {
              height: '55',
            },
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
            attributes: {
              height: '60',
            },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
            attributes: {
              height: '170',
            },
          },
        ],
        summary: {
          label:
            'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
        },
        'im:price': {
          label: 'Get',
          attributes: {
            amount: '0',
            currency: 'USD',
          },
        },
        'im:contentType': {
          attributes: {
            term: 'Podcast',
            label: 'Podcast',
          },
        },
        rights: {
          label: '© All rights reserved',
        },
        title: {
          label: 'The Joe Budden Podcast - The Joe Budden Network',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
          },
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
          attributes: {
            'im:id': '1535809341',
          },
        },
        'im:artist': {
          label: 'The Joe Budden Network',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music',
          },
        },
        'im:releaseDate': {
          label: '2023-02-22T04:18:00-07:00',
          attributes: {
            label: 'February 22, 2023',
          },
        },
      },
      {
        'im:name': {
          label: 'Million Dollaz Worth Of Game',
        },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/55x55bb.png',
            attributes: {
              height: '55',
            },
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/60x60bb.png',
            attributes: {
              height: '60',
            },
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png',
            attributes: {
              height: '170',
            },
          },
        ],
        summary: {
          label:
            'The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\\n\\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame',
        },
        'im:price': {
          label: 'Get',
          attributes: {
            amount: '0',
            currency: 'USD',
          },
        },
        'im:contentType': {
          attributes: {
            term: 'Podcast',
            label: 'Podcast',
          },
        },
        rights: {
          label: '© 2023 Barstool Sports, Inc.',
        },
        title: {
          label: 'Million Dollaz Worth Of Game - Barstool Sports',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2',
          },
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2',
          attributes: {
            'im:id': '1460157002',
          },
        },
        'im:artist': {
          label: 'Barstool Sports',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/barstool-sports/1524874689?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1523',
            term: 'Music Commentary',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
            label: 'Music Commentary',
          },
        },
        'im:releaseDate': {
          label: '2023-02-24T16:30:00-07:00',
          attributes: {
            label: 'February 24, 2023',
          },
        },
      },
      {
        'im:name': {
          label: 'New Rory & MAL',
        },
        'im:image': [
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/55x55bb.png',
            attributes: {
              height: '55',
            },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/60x60bb.png',
            attributes: {
              height: '60',
            },
          },
          {
            label:
              'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/170x170bb.png',
            attributes: {
              height: '170',
            },
          },
        ],
        summary: {
          label:
            'New stories, new laughs, new random hot takes that no one asked for... New Rory & Mal.',
        },
        'im:price': {
          label: 'Get',
          attributes: {
            amount: '0',
            currency: 'USD',
          },
        },
        'im:contentType': {
          attributes: {
            term: 'Podcast',
            label: 'Podcast',
          },
        },
        rights: {
          label: '© All Rights Reserved',
        },
        title: {
          label: 'New Rory & Clay',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2',
          },
        },
        id: {
          label:
            'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2',
          attributes: {
            'im:id': '1572182022',
          },
        },
        'im:artist': {
          label: 'Rory Farrell & Jamil Clay',
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme:
              'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music',
          },
        },
        'im:releaseDate': {
          label: '2023-02-21T01:00:00-07:00',
          attributes: {
            label: 'February 21, 2023',
          },
        },
      },
    ],
  },
};
