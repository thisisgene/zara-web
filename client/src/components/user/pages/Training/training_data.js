import EmbedPopUp from '../../../admin/common/EmbedPopUp/EmbedPopUp';

export const heroData = {
  image: '01-zara_training-logo.png',
  imageSide: 'left',
  de: {
    title:
      'ZARA Training gemeinnützige GmbH:<br />Kompetenz für gleiche Chancen',
    text:
      'Unsere Trainingskonzepte für Kinder, Jugendliche und Erwachsene sind jahrelang erprobt und stützen sich auf praktische Erfahrungen aus der Anti-Rassismus-Arbeit in Österreich unter Einbeziehung wissenschaftlicher Theorien und international anerkannter Trainingsmethoden.',
  },
  en: {
    title: 'ZARA Training gemeinnützige GmbH: Kompetenz für gleiche Chancen',
    text:
      'Unsere Trainingskonzepte für Kinder, Jugendliche und Erwachsene sind jahrelang erprobt und stützen sich auf praktische Erfahrungen aus der Anti-Rassismus-Arbeit in Österreich unter Einbeziehung wissenschaftlicher Theorien und international anerkannter Trainingsmethoden.',
  },
};

export const oneLineAlert = {
  type: 'info',
  de: {
    title: 'Termine & Trainings-Buchung',
    text:
      'Bitte kontaktieren Sie uns, um gemeinsam einen passenden Trainings-Termin zu vereinbaren. ',
    button: {
      text: 'Anfragen',
      type: 'default',
      linkAction: 'popUp',
      // link: 'kontakt/#training'
    },
  },
  en: {
    title: 'Termine & Trainings-Buchung',
    text:
      'Bitte kontaktieren Sie uns, um gemeinsam einen passenden Trainings-Termin zu vereinbaren. ',
    button: {
      text: 'Anfragen',
      type: 'default',
      linkAction: 'popUp',
    },
  },
};

export const oneLineAlertDetail = {
  type: 'info',
  de: {
    title: 'Workshop buchen',
    text:
      'Unsere Workshops und Seminare sind maßgeschneidert, da wir auf unsere Kunden individuell eingehen.<br>Bitte kontaktieren Sie uns, um ein auf Sie angepasstes Angebot zu erhalten.',
    button: {
      text: 'Anfragen',
      type: 'default',
      link: 'kontakt/#training',
    },
  },
  en: {
    title: 'Workshop buchen',
    text:
      'Unsere Workshops und Seminare sind maßgeschneidert, da wir auf unsere Kunden individuell eingehen. Bitte kontaktieren Sie uns, um ein auf Sie angepasstes Angebot zu erhalten.',
    button: {
      text: 'Anfragen',
      type: 'default',
      link: 'kontakt/#training',
    },
  },
};

export const trainingBoxData = {
  de: {
    text:
      'ZARA Training gemeinnützige GmbH bietet in ganz Österreich zielgruppengerechte und individuell gestaltbare Aus- und Fortbildungen, Workshops und Projekte in den Bereichen Diversity, Bewusstseinsbildung, Anti-Rassismus und Zivilcourage an. Bedarfs- und praxisorientiert unterstützt die GmbH auf diese Weise Kompetenzvermehrung in Unternehmen, Schulen, Behörden, Vereinen uvm.',
    text2:
      'ZARA Training wurde im Februar 2014 von ZARA – Zivilcourage und Anti-Rassismus-Arbeit – gegründet und führt dessen Präventionsarbeit fort.',
    title: 'Unser Trainingsangebot',
    privacyPolicyText: 'Datenschutzerklärung ZARA Training',
    privacyPolicyLink:
      'https://assets.zara.or.at/download/pdf/Training/ZARA%20Training_Datenschutzerkla%CC%88rung.pdf',
    agbText: 'ZARA Training AGBs',
    agbLink:
      'https://assets.zara.or.at/download/pdf/Training/AGBs_ZARA%20Training.pdf',
    categories: [
      {
        index: '1',
        text: 'Offene Workshops & Vorträge',
        link: 'workshops_vortraege',
        testimonials: [
          {
            name: 'AHS Friesgasse, Wien',
          },
          {
            name: 'AHS Polgargasse, Wien',
          },
          {
            name: 'AHS Stubenbastei, Wien',
          },
          {
            name: 'BAKIP Kolleg, Wien',
          },
          {
            name: 'Berufsschule Apollogasse, Wien',
          },
        ],
      },
      {
        index: '2',
        text: 'Für Schulklassen',
        link: 'kinder_jugendliche',
      },
      { index: '3', text: 'Für Erwachsenengruppen', link: 'erwachsene' },
      { index: '4', text: 'Für Unternehmen', link: 'unternehmen' },
      // {
      //   index: '4',
      //   text: 'Training & mehr',
      //   link: null,
      //   subMenuList: [
      //     {
      //       index: '4.1',
      //       text: 'Aktuelle Trainingsprojekte',
      //       link: 'trainingsprojekte'
      //     },
      //     { index: '4.2', text: 'Trainer*innen-Pool', link: 'trainer_innen' }
      //   ]
      // }
    ],
  },
  en: {
    text:
      'ZARA Training gemeinnützige GmbH bietet in ganz Österreich zielgruppengerechte und individuell gestaltbare Aus- und Fortbildungen, Workshops und Projekte in den Bereichen Diversity, Bewusstseinsbildung, Anti-Rassismus und Zivilcourage an. Bedarfs- und praxisorientiert unterstützt die GmbH auf diese Weise Kompetenzvermehrung in Unternehmen, Schulen, Behörden, Vereinen uvm.',
    text2:
      'ZARA Training wurde im Februar 2014 von ZARA – Zivilcourage und Anti-Rassismus-Arbeit – gegründet und führt dessen Präventionsarbeit fort.',
    title: 'Our Trainingsangebot',
    privacyPolicyText: 'Data Privacy Statement ZARA Training',
    privacyPolicyLink:
      'https://zara-training.at/wp-content/uploads/Datenschutzerkl%C3%A4rung-von-ZARA-Training-Mai-2018.pdf',
    categories: [
      {
        index: '1',
        text: 'For Children & Young Adults',
        link: 'kinder_jugendliche',
        testimonials: [
          {
            name: 'AHS Friesgasse, Wien',
          },
          {
            name: 'AHS Polgargasse, Wien',
          },
          {
            name: 'AHS Stubenbastei, Wien',
          },
          {
            name: 'BAKIP Kolleg, Wien',
          },
        ],
      },
      { index: '2', text: 'For Adults', link: 'erwachsene' },
      { index: '3', text: 'For Businesses', link: 'unternehmen' },
    ],
  },
};
export const trainingItems = {
  items: [
    {
      _id: 'ASnf39',
      category: '1',
      related: [{ id: 'aeFErf2' }, { id: 'fwfsRG' }],
      de: {
        title: 'Vielfalt & Zivilcourage I',
        text:
          'Schon für die Kleinsten - Unterschiede wertschätzen, sowie Teamfähigkeit und Selbstbehauptung stärken',
        demographic: 'Kinder von 6 bis 10 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Am ersten Halbtag steht das Thema „Vielfalt“ im Mittelpunkt. Ausgehend von der Vielfalt in der Gruppe bezüglich Name, Familie, Herkunft, Geschlecht, Religion etc. lernen die Kinder, Selbst- und Fremdwahrnehmung zu hinterfragen, Zuschreibungen zu erkennen, Grenzen wahrzunehmen und Gefühle zu benennen. Ziel dieses Workshopteils ist es, ausgehend von Gemeinsamkeiten, Unterschiede wertzuschätzen und einen positiven Umgang miteinander zu gestalten. Am zweiten Halbtag geht es um die Zivilcourage „im Kleinen“, also in der Klasse, in der Schule und im Freundeskreis. Die Kinder nähern sich spielerisch den Themen Achtsamkeit und Verantwortung an und sie erlernen Handlungskompetenzen in Konfliktsituationen. Ziel dieses Workshopteils ist es, soziale Kompetenz, Teamfähigkeit und Selbstbehauptung zu stärken.',
      },
      en: {
        title: 'Vielfalt & Zivilcourage I',
        text:
          'Schon für die Kleinsten - Unterschiede wertschätzen, sowie Teamfähigkeit und Selbstbehauptung stärken',
        demographic: 'Kinder von 6 bis 10 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Am ersten Halbtag steht das Thema „Vielfalt“ im Mittelpunkt. Ausgehend von der Vielfalt in der Gruppe bezüglich Name, Familie, Herkunft, Geschlecht, Religion etc. lernen die Kinder, Selbst- und Fremdwahrnehmung zu hinterfragen, Zuschreibungen zu erkennen, Grenzen wahrzunehmen und Gefühle zu benennen. Ziel dieses Workshopteils ist es, ausgehend von Gemeinsamkeiten, Unterschiede wertzuschätzen und einen positiven Umgang miteinander zu gestalten. Am zweiten Halbtag geht es um die Zivilcourage „im Kleinen“, also in der Klasse, in der Schule und im Freundeskreis. Die Kinder nähern sich spielerisch den Themen Achtsamkeit und Verantwortung an und sie erlernen Handlungskompetenzen in Konfliktsituationen. Ziel dieses Workshopteils ist es, soziale Kompetenz, Teamfähigkeit und Selbstbehauptung zu stärken.',
      },
    },
    {
      _id: 'AFnbfe2',
      category: '1',
      de: {
        title: 'Vielfalt & Zivilcourage II',
        text:
          'Positive Impulse für ein respektvolles Zusammenleben im (Schul-)Alltag',
        demographic: 'Jugendliche ab 11 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Der erste Halbtag ist den Themen soziale Kompetenz, Teamfähigkeit, und Zivilcourage gewidmet. Im Rahmen dieses Workshopteils erarbeiten die Schüler*innen neue Möglichkeiten, mit „unangenehmen“ Situationen in der Öffentlichkeit umzugehen und erweitern ihre Handlungskompetenzen in diskriminierenden Situationen. Am zweiten Halbtag stehen die Themenfelder Diversität, Diskriminierung und Rassismus im Mittelpunkt. Ziele des Workshops sind das Erkennen und Anerkennen von Vielfalt und das Sichtbarmachen von Diskriminierungen und institutionellem Rassismus. Es werden Handlungskompetenzen in diskriminierenden Situationen erworben und Strategien im Umgang mit Vielfalt erarbeitet. Darüber hinaus zielt der Workshop auf eine Stärkung des Selbstwerts und der Selbstbehauptung.',
      },
      en: {
        title: 'Vielfalt & Zivilcourage II',
        text:
          'Positive Impulse für ein respektvolles Zusammenleben im (Schul-)Alltag',
        demographic: 'Jugendliche ab 11 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Der erste Halbtag ist den Themen soziale Kompetenz, Teamfähigkeit, und Zivilcourage gewidmet. Im Rahmen dieses Workshopteils erarbeiten die Schüler*innen neue Möglichkeiten, mit „unangenehmen“ Situationen in der Öffentlichkeit umzugehen und erweitern ihre Handlungskompetenzen in diskriminierenden Situationen. Am zweiten Halbtag stehen die Themenfelder Diversität, Diskriminierung und Rassismus im Mittelpunkt. Ziele des Workshops sind das Erkennen und Anerkennen von Vielfalt und das Sichtbarmachen von Diskriminierungen und institutionellem Rassismus. Es werden Handlungskompetenzen in diskriminierenden Situationen erworben und Strategien im Umgang mit Vielfalt erarbeitet. Darüber hinaus zielt der Workshop auf eine Stärkung des Selbstwerts und der Selbstbehauptung.',
      },
    },
    {
      _id: 'AFnbfafr',
      category: '1',
      de: {
        title: 'Sensibilisierung',
        text:
          'Sensibilisierung von SchülerInnen, um diskriminierende Stereotypsierungen im Alltag zu erkennen und zu vermeiden',
        demographic: 'Jugendliche ab 16 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Sensibilisierungs-Workshops ermöglichen eine intensive Auseinandersetzung mit den Themen Vorurteile, Fremd-/Anderssein und Diskriminierung: Welche Vorurteile habe ich selbst und wie gehe ich damit um? Was macht meine Identität aus? Wie wirkt sich Diskriminierung auf Einzelne aus? Ziel ist es, Vielfalt zu erkennen und anzuerkennen sowie sich mit dem Entstehen von Vorurteilen zu beschäftigen und Auswirkungen von Diskriminierung und institutionellem Rassismus sichtbar zu machen. Dabei werden Vorurteile reflektiert und Strategien im Umgang mit Vielfalt erarbeitet.',
      },
      en: {
        title: 'Sensibilisierung',
        text:
          'Sensibilisierung von SchülerInnen, um diskriminierende Stereotypsierungen im Alltag zu erkennen und zu vermeiden',
        demographic: 'Jugendliche ab 16 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Sensibilisierungs-Workshops ermöglichen eine intensive Auseinandersetzung mit den Themen Vorurteile, Fremd-/Anderssein und Diskriminierung: Welche Vorurteile habe ich selbst und wie gehe ich damit um? Was macht meine Identität aus? Wie wirkt sich Diskriminierung auf Einzelne aus? Ziel ist es, Vielfalt zu erkennen und anzuerkennen sowie sich mit dem Entstehen von Vorurteilen zu beschäftigen und Auswirkungen von Diskriminierung und institutionellem Rassismus sichtbar zu machen. Dabei werden Vorurteile reflektiert und Strategien im Umgang mit Vielfalt erarbeitet.',
      },
    },
    {
      _id: 'aeFErf2',
      category: '1',
      de: {
        title: 'Zivilcourage',
        text: '.. kann man lernen!',
        demographic: 'Jugendliche ab 16 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Der Zivilcourage-Workshop beschäftigt sich mit dem Mut des/der Einzelnen, in der Öffentlichkeit in „unangenehmen“ Situationen einzugreifen. Auf Basis der inhaltlichen Auseinandersetzung mit dem Thema Zivilcourage erlernen die Teilnehmer*innen, wie man mit Angriffen, Ohnmacht, Aggression und Angst umgehen kann. Es wird erarbeitet, was man in solchen Situationen tun kann bzw. wo die eigenen Grenzen liegen. Ziel des Workshops ist der Erwerb von Handlungskompetenzen in diskriminierenden Situationen sowie die Stärkung des Selbstwerts und der Selbstbehauptung.',
      },
      en: {
        title: 'Zivilcourage',
        text: '.. kann man lernen!',
        demographic: 'Jugendliche ab 16 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Der Zivilcourage-Workshop beschäftigt sich mit dem Mut des/der Einzelnen, in der Öffentlichkeit in „unangenehmen“ Situationen einzugreifen. Auf Basis der inhaltlichen Auseinandersetzung mit dem Thema Zivilcourage erlernen die Teilnehmer*innen, wie man mit Angriffen, Ohnmacht, Aggression und Angst umgehen kann. Es wird erarbeitet, was man in solchen Situationen tun kann bzw. wo die eigenen Grenzen liegen. Ziel des Workshops ist der Erwerb von Handlungskompetenzen in diskriminierenden Situationen sowie die Stärkung des Selbstwerts und der Selbstbehauptung.',
      },
    },
    {
      _id: 'fwfsRG',
      category: '1',
      de: {
        title: 'Zivilcourage on- & offline',
        text: 'Zivilcourage und Medienkompetenz gegen Hass im Netz',
        demographic: 'Jugendliche ab 12 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Diskriminierende Situationen on- und offline stehen im Zentrum dieses Workshops. Zusätzlich zum „klassischen“ Zivilcouragetraining vermittelt dieser Workshop Medienkompetenz. Er soll Jugendliche darin unterstützen, reflektiert gefährdende Inhalte zu erkennen, sie richtig  einzuordnen und souveräner damit umzugehen. Dabei vermitteln die Trainings mit interaktiven Methoden folgende Kompetenzen:',
        list1: [
          {
            text: 'Wie begegne ich Angriffen und Aggression im Netz?',
          },
          {
            text:
              'Wie treten rechtsextreme/ nationalistische/ rassistische Gruppen im Internet auf?',
          },
          { text: 'Wie erkenne ich Fake News?' },
          { text: 'Wie kann ich selbst aktiv gegen Hass  und Hetze vorgehen?' },
          {
            text: 'Wie ist die rechtliche Situation in Österreich?',
          },
          {
            text: 'Wie kann ich Opfer von Hass im Netz unterstützen?',
          },
          {
            text: 'Wo und wie bekomme ich als Opfer Hilfe?',
          },
        ],
        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Sensibilisierung für die Auswirkungen von Hass und Hetze im Internet',
            },
            {
              text:
                'Wissenstransfer rund um den Themenbereich Digitale Medien und Hass im Netz',
            },
            {
              text:
                'Erweitern der Kommunikations- und Handlungskompetenzen und der rhetorischen Fähigkeiten',
            },
          ],
        },
      },
      en: {
        title: 'Zivilcourage on- & offline',
        text: 'Zivilcourage und Medienkompetenz gegen Hass im Netz',
        demographic: 'Jugendliche ab 12 Jahren',
        duration: 'zwei halbtägige Workshops',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Diskriminierende Situationen on- und offline stehen im Zentrum dieses Workshops. Zusätzlich zum „klassischen“ Zivilcouragetraining vermittelt dieser Workshop Medienkompetenz. Er soll Jugendliche darin unterstützen, reflektiert gefährdende Inhalte zu erkennen, sie richtig  einzuordnen und souveräner damit umzugehen. Dabei vermitteln die Trainings mit interaktiven Methoden folgende Kompetenzen:',
        list1: [
          {
            text: 'Wie begegne ich Angriffen und Aggression im Netz?',
          },
          {
            text:
              'Wie treten rechtsextreme/ nationalistische/ rassistische Gruppen im Internet auf?',
          },
          { text: 'Wie erkenne ich Fake News?' },
          { text: 'Wie kann ich selbst aktiv gegen Hass  und Hetze vorgehen?' },
          {
            text: 'Wie ist die rechtliche Situation in Österreich?',
          },
          {
            text: 'Wie kann ich Opfer von Hass im Netz unterstützen?',
          },
          {
            text: 'Wo und wie bekomme ich als Opfer Hilfe?',
          },
        ],
        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Sensibilisierung für die Auswirkungen von Hass und Hetze im Internet',
            },
            {
              text:
                'Wissenstransfer rund um den Themenbereich Digitale Medien und Hass im Netz',
            },
            {
              text:
                'Erweitern der Kommunikations- und Handlungskompetenzen und der rhetorischen Fähigkeiten',
            },
          ],
        },
      },
    },
    {
      _id: 'h4shgva',
      category: '2',
      de: {
        title: 'Umgang mit Vielfalt',
        text:
          'Der Workshop setzt sich mit den Themen Identität, Vielfalt, Eigen- und Fremdzuschreibungen und Diskriminierung Auseinander.',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Die intensive Auseinandersetzung mit den Themen Identität, Vielfalt, Eigen- und Fremdzuschreibungen und Diskriminierung auf individueller Ebene steht im Zentrum dieses Trainings. Gemeinsam werden Unterschiede thematisiert, eigene und fremde Vorurteile reflektiert und Strategien im Umgang mit Vielfalt erarbeitet – ohne Zeigerfingermoral!',
        list1: [
          { text: 'Wie wirkt sich Diskriminierung auf Einzelne aus?' },
          {
            text:
              'Was ist meine Identität und mein Umgang mit Gruppenzugehörigkeit?',
          },
          { text: 'Was bedeutet Vielfalt?' },
          { text: 'Welche Relevanz haben Unterschiede?' },
          {
            text:
              'Wie kann ich mit Unterschieden positiv umgehen und „Vielfalt“ als positiven Wert in meinem Arbeitsalltag fördern?',
          },
        ],
        detailText2: 'Zur Anwendung kommen:',
        list2: [
          { text: 'Grundlagen der Interkulturellen Kompetenz' },
          { text: 'Erfahrungsaustausch' },
          { text: 'Praktische Übungen' },
        ],
        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Sensibilisierung für die Bedeutung unterschiedlicher ethnischer/kultureller/sozialer Hintergründe im (Arbeits-)alltag',
            },
            {
              text:
                'Sensibilisierung für die Auswirkungen von individueller und gesellschaftlicher Diskriminierung und deren Relevanz für die Arbeit',
            },
            {
              text:
                'Reflexion eigener Haltungen und Einstellungen gegenüber Vielfalt und unterschiedlichen Aspekten der eigenen oder einer anderen Identität',
            },
            {
              text:
                'Handlungssicherheit im Umgang mit Personen anderer ethnischer/kultureller/sozialer Hintergründe',
            },
          ],
        },
      },
      en: {
        title: 'Umgang mit Vielfalt',
        text:
          'Der Workshop setzt sich mit den Themen Identität, Vielfalt, Eigen- und Fremdzuschreibungen und Diskriminierung Auseinander.',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Die intensive Auseinandersetzung mit den Themen Identität, Vielfalt, Eigen- und Fremdzuschreibungen und Diskriminierung auf individueller Ebene steht im Zentrum dieses Trainings. Gemeinsam werden Unterschiede thematisiert, eigene und fremde Vorurteile reflektiert und Strategien im Umgang mit Vielfalt erarbeitet – ohne Zeigerfingermoral!',
        list1: [
          { text: 'Wie wirkt sich Diskriminierung auf Einzelne aus?' },
          {
            text:
              'Was ist meine Identität und mein Umgang mit Gruppenzugehörigkeit?',
          },
          { text: 'Was bedeutet Vielfalt?' },
          { text: 'Welche Relevanz haben Unterschiede?' },
          {
            text:
              'Wie kann ich mit Unterschieden positiv umgehen und „Vielfalt“ als positiven Wert in meinem Arbeitsalltag fördern?',
          },
        ],
        detailText2: 'Zur Anwendung kommen:',
        list2: [
          { text: 'Grundlagen der Interkulturellen Kompetenz' },
          { text: 'Erfahrungsaustausch' },
          { text: 'Praktische Übungen' },
        ],
        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Sensibilisierung für die Bedeutung unterschiedlicher ethnischer/kultureller/sozialer Hintergründe im (Arbeits-)alltag',
            },
            {
              text:
                'Sensibilisierung für die Auswirkungen von individueller und gesellschaftlicher Diskriminierung und deren Relevanz für die Arbeit',
            },
            {
              text:
                'Reflexion eigener Haltungen und Einstellungen gegenüber Vielfalt und unterschiedlichen Aspekten der eigenen oder einer anderen Identität',
            },
            {
              text:
                'Handlungssicherheit im Umgang mit Personen anderer ethnischer/kultureller/sozialer Hintergründe',
            },
          ],
        },
      },
    },
    {
      _id: 'h4s4nyva',
      category: '2',
      de: {
        title: 'Digitale Zivilcourage',
        text:
          'Der Workshop vermittelt mit interaktiven Methoden Medienkompetenzen gegen Hass im Netz.',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Der Workshop vermittelt mit interaktiven Methoden <b>Medienkompetenzen</b> für folgende Fragestellungen:',
        list1: [
          { text: 'Wie begegne ich Angriffen und Aggression im Netz?' },
          {
            text:
              'Wie treten rechtsextreme/ nationalistische/ rassistische Gruppen im Internet auf?',
          },
          { text: 'Wie erkenne ich Fake News?' },
          {
            text:
              'Wie kann ich selbst aktiv gegen Hass  und Hetze vorgehen? Wie ist die rechtliche Situation in Österreich?',
          },
          {
            text: 'Wie kann ich Opfer von Hass im Netz unterstützen?',
          },
          {
            text: 'Wo und wie bekomme ich als Opfer Hilfe?',
          },
        ],

        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Sensibilisierung für die Auswirkungen von Hass und Hetze im Internet',
            },
            {
              text:
                'Wissenstransfer rund um den Themenbereich Digitale Medien und Hass im Netz',
            },
            {
              text:
                'Erweitern der Kommunikations- und Handlungskompetenzen und der rhetorischen Fähigkeiten',
            },
          ],
        },
      },
      en: {
        title: 'Digitale Zivilcourage',
        text:
          'Der Workshop vermittelt mit interaktiven Methoden Medienkompetenzen gegen Hass im Netz.',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Der Workshop vermittelt mit interaktiven Methoden <b>Medienkompetenzen</b> für folgende Fragestellungen:',
        list1: [
          { text: 'Wie begegne ich Angriffen und Aggression im Netz?' },
          {
            text:
              'Wie treten rechtsextreme/ nationalistische/ rassistische Gruppen im Internet auf?',
          },
          { text: 'Wie erkenne ich Fake News?' },
          {
            text:
              'Wie kann ich selbst aktiv gegen Hass  und Hetze vorgehen? Wie ist die rechtliche Situation in Österreich?',
          },
          {
            text: 'Wie kann ich Opfer von Hass im Netz unterstützen?',
          },
          {
            text: 'Wo und wie bekomme ich als Opfer Hilfe?',
          },
        ],

        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Sensibilisierung für die Auswirkungen von Hass und Hetze im Internet',
            },
            {
              text:
                'Wissenstransfer rund um den Themenbereich Digitale Medien und Hass im Netz',
            },
            {
              text:
                'Erweitern der Kommunikations- und Handlungskompetenzen und der rhetorischen Fähigkeiten',
            },
          ],
        },
      },
    },
    {
      _id: 'h4daenyva',
      category: '2',
      de: {
        title: 'Zivilcourage',
        text: '…kann man lernen!',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Bedrohung, Mobbing und Diskriminierung sind Alltagserscheinungen. Doch kaum eine/r schaut hin oder greift ein – oft bleibt es nur bei guten Absichten.  Wie kann ich helfen, wenn jemand angegriffen wird, ohne mich selbst in Gefahr zu bringen? Antworten auf diese und weitere Fragen erhalten die TeilnehmerInnen des ZARA-Workshops „Zivilcourage” – dieses Training beschäftigt sich mit den konkreten Möglichkeiten des/der Einzelnen, an der Arbeitsstelle oder in der Öffentlichkeit in “unangenehmen” Situationen einzugreifen. Denn sich mutig für andere einzusetzen und zivilcouragiert zu handeln, lässt sich trainieren!<br /><br />Basierend auf den individuellen Erfahrungen  der TeilnehmerInnen widmet sich der Workshop folgenden Themen:',
        list1: [
          { text: 'Was ist Zivilcourage?' },
          {
            text: 'Was ist Gewalt – welche Arten gibt es?',
          },
          {
            text:
              'Wie begegne ich Angriffen, Ohnmacht, Aggression oder z.B. der Situation Einer gegen Alle?',
          },
          {
            text: 'Was kann ich wann tun?',
          },
          {
            text: 'Wo sind meine Grenzen?',
          },
        ],

        goals: {
          title:
            'Ziele - Die TeilnehmerInnen erweitern ihren ganz persönlichen Handlungsspielraum, indem sie',
          list: [
            {
              text: 'lernen, was zivilcouragiertes Handeln ausmacht',
            },
            {
              text: 'eigene Grenzen und Möglichkeiten ausloten',
            },
            {
              text: 'körperliche wie verbale Selbstbehauptung  trainieren',
            },
            {
              text:
                'wirkungsvolle Antworten und kreative Gegenstrategien im Umgang mit diskriminierenden und rassistischen  Situationen und Äußerungen entwickeln.',
            },
          ],
        },
      },
      en: {
        title: 'Zivilcourage',
        text: '…kann man lernen!',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Bedrohung, Mobbing und Diskriminierung sind Alltagserscheinungen. Doch kaum eine/r schaut hin oder greift ein – oft bleibt es nur bei guten Absichten.  Wie kann ich helfen, wenn jemand angegriffen wird, ohne mich selbst in Gefahr zu bringen? Antworten auf diese und weitere Fragen erhalten die TeilnehmerInnen des ZARA-Workshops „Zivilcourage” – dieses Training beschäftigt sich mit den konkreten Möglichkeiten des/der Einzelnen, an der Arbeitsstelle oder in der Öffentlichkeit in “unangenehmen” Situationen einzugreifen. Denn sich mutig für andere einzusetzen und zivilcouragiert zu handeln, lässt sich trainieren!<br /><br />Basierend auf den individuellen Erfahrungen  der TeilnehmerInnen widmet sich der Workshop folgenden Themen:',
        list1: [
          { text: 'Was ist Zivilcourage?' },
          {
            text: 'Was ist Gewalt – welche Arten gibt es?',
          },
          {
            text:
              'Wie begegne ich Angriffen, Ohnmacht, Aggression oder z.B. der Situation Einer gegen Alle?',
          },
          {
            text: 'Was kann ich wann tun?',
          },
          {
            text: 'Wo sind meine Grenzen?',
          },
        ],

        goals: {
          title:
            'Ziele - Die TeilnehmerInnen erweitern ihren ganz persönlichen Handlungsspielraum, indem sie',
          list: [
            {
              text: 'lernen, was zivilcouragiertes Handeln ausmacht',
            },
            {
              text: 'eigene Grenzen und Möglichkeiten ausloten',
            },
            {
              text: 'körperliche wie verbale Selbstbehauptung  trainieren',
            },
            {
              text:
                'wirkungsvolle Antworten und kreative Gegenstrategien im Umgang mit diskriminierenden und rassistischen  Situationen und Äußerungen entwickeln.',
            },
          ],
        },
      },
    },
    {
      _id: 'h4dae5ya',
      category: '2',
      de: {
        title: 'Argumentationstraining',
        text:
          'Die Teilnehmer*innen erarbeiten wirkungsvolle Antworten und kreative Gegenstrategien im Umgang mit diskriminierenden und rassistischen Äußerungen.',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Die TeilnehmerInnen erarbeiten wirkungsvolle Antworten und kreative Gegenstrategien im Umgang mit diskriminierenden und rassistischen Äußerungen, probieren unterschiedliche Argumentationsstrategien aus und  erweitern so die persönlichen Kommunikationskompetenzen im Falle von verbalen Konflikten oder populistischen Parolen.<br><br>Zur Anwendung kommen:',
        list1: [
          { text: 'Grundlagen der Interkulturellen Kommunikation' },
          {
            text: 'Erfahrungsaustausch',
          },
          {
            text: 'Praktische Übungen',
          },
        ],

        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Sensibilisierung und Wissenstransfer rund um den Themenbereich Vielfalt, Kultur, Identität, Rassismus & Diskriminierung',
            },
            {
              text:
                'Verbesserung der Argumentation auf emotionaler und inhaltlich-sachlicher Ebene',
            },
            {
              text:
                'Erweitern der Kommunikationskompetenzen und rhetorischen Fähigkeiten',
            },
          ],
        },
      },
      en: {
        title: 'Argumentationstraining',
        text:
          'Die Teilnehmer*innen erarbeiten wirkungsvolle Antworten und kreative Gegenstrategien im Umgang mit diskriminierenden und rassistischen Äußerungen.',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Die TeilnehmerInnen erarbeiten wirkungsvolle Antworten und kreative Gegenstrategien im Umgang mit diskriminierenden und rassistischen Äußerungen, probieren unterschiedliche Argumentationsstrategien aus und  erweitern so die persönlichen Kommunikationskompetenzen im Falle von verbalen Konflikten oder populistischen Parolen.<br><br>Zur Anwendung kommen:',
        list1: [
          { text: 'Grundlagen der Interkulturellen Kommunikation' },
          {
            text: 'Erfahrungsaustausch',
          },
          {
            text: 'Praktische Übungen',
          },
        ],

        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Sensibilisierung und Wissenstransfer rund um den Themenbereich Vielfalt, Kultur, Identität, Rassismus & Diskriminierung',
            },
            {
              text:
                'Verbesserung der Argumentation auf emotionaler und inhaltlich-sachlicher Ebene',
            },
            {
              text:
                'Erweitern der Kommunikationskompetenzen und rhetorischen Fähigkeiten',
            },
          ],
        },
      },
    },
    {
      _id: 'h4fh38ya',
      category: '2',
      de: {
        title: 'Meine Rechte kennen',
        text:
          'Die rechtlichen Möglichkeiten zur Bekämpfung von Rassismus und rassistischen Diskriminierungen stehen im Mittelpunkt dieses Workshops.',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Nach einer kurzen Vorstellung der Arbeit der ZARA-Beratungsstelle für Opfer und ZeugInnen von Rassismus werden Begriffe und Konzepte zum Thema Rassismus be- und erarbeitet. Die rechtlichen Möglichkeiten zur Bekämpfung von Rassismus und rassistischen Diskriminierungen werden dargelegt. Dabei wird Recht als Werkzeug vermittelt, um als Opfer oder ZeugInnen von Rassismus adäquat reagieren zu können.',

        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Wissenstransfer rund um das Gleichgehandlungsgesetz und andere relevante Texte',
            },
            {
              text:
                'Erweitern der Handlungskompetenzen als ZeugInnen oder Opfer von Diskriminierung und Rassismus',
            },
          ],
        },
      },
      en: {
        title: 'Meine Rechte kennen',
        text:
          'Die rechtlichen Möglichkeiten zur Bekämpfung von Rassismus und rassistischen Diskriminierungen stehen im Mittelpunkt dieses Workshops.',
        demographic: 'Erwachsene',
        detailLinkText: 'Details zum Workshop',
        detailText:
          'Nach einer kurzen Vorstellung der Arbeit der ZARA-Beratungsstelle für Opfer und ZeugInnen von Rassismus werden Begriffe und Konzepte zum Thema Rassismus be- und erarbeitet. Die rechtlichen Möglichkeiten zur Bekämpfung von Rassismus und rassistischen Diskriminierungen werden dargelegt. Dabei wird Recht als Werkzeug vermittelt, um als Opfer oder ZeugInnen von Rassismus adäquat reagieren zu können.',

        goals: {
          title: 'Ziele',
          list: [
            {
              text:
                'Wissenstransfer rund um das Gleichgehandlungsgesetz und andere relevante Texte',
            },
            {
              text:
                'Erweitern der Handlungskompetenzen als ZeugInnen oder Opfer von Diskriminierung und Rassismus',
            },
          ],
        },
      },
    },
  ],
};
