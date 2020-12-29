export default {
  widgets: [
    {
      name: 'sanity-tutorials'
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
                  buildHookId: '5feb8af667f9689f666f4455',
                  title: 'Sanity Studio',
                  name: 'sanity-clean-studio-qw6z7khq',
                  apiId: '52eca84a-005a-4a94-aa50-4973a054ddbf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geoffreyjball/sanity-clean',
            category: 'Code'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: []},
      layout: {width: 'medium'}
    }
  ]
}
