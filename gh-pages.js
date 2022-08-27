import ghpages from 'gh-pages';

ghpages.publish(
  'public', // path to public directory
  {
      branch: 'gh-pages',
      repo: 'https://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@github.com/simonzeiger/svelte-game.git', // Update to point to your repository  
      user: {
          name: 'simonzeiger', // update to use your name
          email: 'monzeiger@gmail.com' // Update to use your email
      }
  },
  () => {
      console.log('Deploy Complete!')
  }
);