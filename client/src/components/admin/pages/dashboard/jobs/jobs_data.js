export const jobTags = [
  {
    name: 'job',
    de: { title: 'Job' },
    hasShortDescription: true,
    readMoreButton: true,
    hasDescription: true,
    // fileOptions: [
    //   {
    //     type: 'file',
    //     slug: 'Files',
    //     title: 'PDF',
    //   },
    //   {
    //     type: 'image',
    //     slug: 'Images',
    //     title: 'Titelbild',
    //   },
    // ],
  },
  {
    name: 'volunteering',
    de: { title: 'Volontariat' },
    hasShortDescription: true,
    descriptionTags: [
      {
        name: 'area',
        de: { title: 'Vorwiegende Aufgabengebiete' },
        en: { title: 'Vorwiegende Aufgabengebiete' },
        type: 'markdown',
      },
      {
        name: 'qualifications',
        de: { title: 'Erwünschte Qualifikationen' },
        en: { title: 'Erwünschte Qualifikationen' },
        type: 'markdown',
      },
      {
        name: 'time',
        de: { title: 'Zeitausmaß' },
        en: { title: 'Zeitausmaß' },
        type: 'input',
      },
      {
        name: 'contact',
        de: { title: 'Kontakt' },
        en: { title: 'Kontakt' },
        type: 'input',
      },
    ],
    // fileOptions: [
    //   {
    //     type: 'file',
    //     slug: 'Files',
    //     title: 'PDF',
    //   },
    //   {
    //     type: 'image',
    //     slug: 'Images',
    //     title: 'Titelbild',
    //   },
    // ],
  },
  {
    name: 'unsalaried',
    de: { title: 'Ehrenamtlich' },
    hasShortDescription: true,
    // fileOptions: [
    //   {
    //     type: 'file',
    //     slug: 'Files',
    //     title: 'PDF',
    //   },
    // ],
  },
]
