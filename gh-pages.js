var ghpages = require('gh-pages');

ghpages.publish(
    'public', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/FordArthur/svelte-app.git', 
        user: {
            name: 'FordArthur',
            email: 'jajasaludos.112358@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)