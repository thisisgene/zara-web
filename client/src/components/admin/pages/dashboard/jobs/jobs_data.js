export const jobTags = [
  {
    name: "job",
    de: { title: "Job" },
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
    name: "volunteering",
    de: { title: "Volontariat" },
    hasShortDescription: true,
    descriptionTags: [
      {
        name: "time",
        de: { title: "Zeitausmaß" },
        en: { title: "Time expenditure" },
        type: "input",
      },
      {
        name: "contact",
        de: { title: "Kontakt" },
        en: { title: "Contact" },
        type: "input",
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
    name: "unsalaried",
    de: { title: "Ehrenamtlich" },
    hasShortDescription: true,
    descriptionTags: [
      {
        name: "contact",
        de: { title: "Kontakt" },
        en: { title: "Contact" },
        type: "input",
      },
    ],
    // fileOptions: [
    //   {
    //     type: 'file',
    //     slug: 'Files',
    //     title: 'PDF',
    //   },
    // ],
  },
]
