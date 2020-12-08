export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5fcf838f0d8a85edd754713c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o821qvyv',
                  apiId: '8d33d1ec-e6e6-4bae-8a32-b8f36d0e4957'
                },
                {
                  buildHookId: '5fcf838f15b8adde8ce313d0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y6jxrosi',
                  apiId: 'f739c300-a524-4d97-93b0-f7c57a67dc4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raduberar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y6jxrosi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
