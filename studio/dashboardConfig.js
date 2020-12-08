export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcf170b72dc524f69dffaab',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-w3pxkyvb',
                  apiId: 'ae5d544d-27c2-4f83-b410-11233e93cc2c'
                },
                {
                  buildHookId: '5fcf170bc4b7f955fc74ccbb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ps2spcc9',
                  apiId: 'c6dc14e7-260f-4dd5-b625-89fb7c02c9ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bisyrivarco/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ps2spcc9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
