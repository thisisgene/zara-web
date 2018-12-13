const menuItems = [
  {
    name: 'Beratung',
    link: 'beratung',
    id: '1',
    subMenuList: [
      {
        name: 'Beratung & Melden',
        link: 'melden',
        id: '1.1',
        subMenuList: [
          {
            name: 'Rassismus',
            link: 'rassismus',
            id: '1.1.1'
          },
          {
            name: 'Hass im Netz',
            link: 'hassimnetz',
            id: '1.1.2'
          }
        ]
      },
      {
        name: 'KENNE DEINE RECHTE',
        link: 'kennedeinerechte',
        id: '1.2',
        subMenuList: [
          {
            name: 'Was können wir tun?',
            link: 'waskoennenwirtun',
            id: '1.2.1'
          },
          {
            name: 'Wissenswertes & Tipps',
            link: 'wissenswertes',
            id: '1.2.2'
          },
          {
            name: 'Hasspostings in Social Media melden',
            link: 'hasspostingsmelden',
            id: '1.2.3'
          },
          {
            name: 'Folder Hass im Netz',
            link: 'folderhassimnetz',
            id: '1.2.4'
          }
        ]
      }
    ]
  },
  {
    name: 'Training',
    id: '2'
  },
  { name: 'Mitmischen', id: '3' },
  { name: 'Wissen', id: '4' },
  { name: 'Über ZARA', id: '5' }
]

export default menuItems
