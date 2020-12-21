export const oneLineAlert = {
  type: 'info',
  de: {
    title: 'Persönliches Beratungsgespräch',
    text:
      'Wollen Sie eine persönliche Beratung? Rufen Sie uns unter +43 (0) 1 929 13 99 an.'
  },
  en: {
    title: 'Meet us face-to-face',
    text:
      'Would you like to sit down with us? Call us to make an appointment +43 (0) 1 929 13 99.'
  }
}

export const nowEnglishAlert = {
  type: 'news',
  de: {
    title: 'English available!',
    text:
      'Our counceling page is now available in English!',
    button: {
      text: 'English',
      type: 'default',
      link: 'beratung'
    }
  },
  en: {
    title: 'English available!',
    text:
      'Our counceling page is now available in English!',
    button: {
      text: 'English',
      type: 'default',
      link: 'beratung'
    }
  }
}

export const heroDataBeratungRassismus = {
  de: {
    title: 'ZARA unterstützt Sie gegen Rassismus oder Hass im Netz – kostenlos und auf Wunsch anonym',
    // text:
    //   'Lassen Sie sich von ZARA kostenlos beraten, wenn Sie von rassistischer Diskriminierung, Online Hass und Hetze und/oder Cybermobbing betroffen sind oder Zeug*in von solchen Vorfällen werden. Das Beratungsteam besteht aus psychosozial und juristisch geschulten Berater*innen, die Sie gerne unterstützen.',
    buttons: [
      {
        title: 'Melden',
        link: '/beratung/melden'
      },
      {
        title: 'Beratung',
        link: '/beratung/beratung_rassismus_hassimnetz'
      }
    ]
  },
  en: {
    title: 'Wir stehen Ihnen bei!',
    text:
      'Lassen Sie sich von ZARA kostenlos beraten, wenn Sie von rassistischer Diskriminierung, Online Hass und Hetze und/oder Cybermobbing betroffen sind oder Zeug*in von solchen Vorfällen werden. Das Beratungsteam besteht aus psychosozial und juristisch geschulten Berater*innen, die Sie gerne unterstützen.'
  }
}

export const beratungInfoBox = {
  color: 'white',
  direction: 'column',
  de: {
    title: 'Beratung zu Rassismus und/oder Hass im Netz',
    text:
      'Lassen Sie sich von ZARA kostenlos beraten, wenn Sie von rassistischer Diskriminierung, Online Hass und Hetze und/oder Cyber-Mobbing betroffen sind oder Zeug*in von solchen Vorfällen werden. Das Beratungsteam besteht aus psychosozial und juristisch geschulten Berater*innen, die Sie gerne unterstützen.',

    // listItems: [
    //   {
    //     text: 'Telefon +43 (0) 1 929 13 99'
    //   },
    //   {
    //     text: 'Verschlüsselte E-Mail'
    //   },
    //   {
    //     text: 'Chat beitreten'
    //   }
    // ],
    cards: [
      {
        color: 'default',
        title: 'Telefon',
        image: 'reportPhone',
        text:
          'Sie erreichen die ZARA Beratungsstellen Montag bis Freitag, von 10:00 bis 15:00 Uhr.',

        buttons: [
          {
            text: '+43 (0) 1 929 13 99',
            type: 'cta',
            linkPath: 'external',
            link:
              'tel:+43 (0) 1 929 13 99'
          }
        ],
      },
      {
        color: 'default',
        title: 'Verschlüsselte Email',
        image: 'reportEmail',
        text:
          'Ihre Sicherheit ist uns wichtig! Um Ihre Daten zu schützen, können Sie uns verschlüsselte E-Mails (über eine sichere Plattform namens Aygonet) schicken. Sie erhalten eine E-Mail, sobald wir Ihre Anfrage beantwortet haben. Alle Daten werden streng vertraulich behandelt und nicht an Dritte weitergegeben.',
        // link: 'mitmischen/hashtags',
        // linkText: 'Zu den Hashtags',
        buttons: [
          {
            text: 'Registrieren bei Aygonet',
            type: 'cta',
            linkPath: 'external',
            link:
              'https://onlineberatung.aygonet.de/index.php?fw_goto=anmeldung/helpdesk/22ddb&'
          },
          {
            text: 'Login bei Aygonet',
            type: 'cta',
            linkPath: 'external',
            link:
              'https://onlineberatung.aygonet.de/index.php?fw_goto=login/index/hd/22ddb&'
          }
        ],
      },
      {
        color: 'default',
        title: 'Chat',
        image: 'reportChat',
        text:
          '',
        buttons: [
          {
            text: 'Zum Chatraum',
            type: 'cta',
            linkPath: 'external',
            link:
              'https://onlineberatung.aygonet.de/index.php?fw_goto=verwaltung.chat/overview/22ddb&'
          },

        ],

        // link: 'beratung/melden/hassimnetz',
        // linkText: 'Hasspostings melden'
      }
    ]
  },
  en: {
    title: 'Support against racism and/or online hate',
    text:
      'If you are affected by racial discrimination, online hate and/or cyberbullying, or if you have become a witness to such incidents, then let us advise you free of charge. Our team provides legal and psychosocial advice and will be happy to support you.',

    // listItems: [
    //   {
    //     text: 'Telephone +43 (0) 1 929 13 99'
    //   },
    //   {
    //     text: 'Encrypted email'
    //   },
    //   {
    //     text: 'Join chat'
    //   }
    // ],
    cards: [
      {
        color: 'default',
        title: 'Telephone',
        image: 'reportPhone',
        text:
          'You can reach our team Monday to Friday, from 10:00 a.m. to 3:00 p.m.',
        // link: 'tel:+43 (0) 1 929 13 99',
        // linkType: 'external',
        // linkText: '+43 (0) 1 929 13 99'
        buttons: [
          {
            text: '+43 (0) 1 929 13 99',
            type: 'cta',
            linkPath: 'external',
            link:
              'tel:+43 (0) 1 929 13 99'
          }
        ]

      },
      {
        color: 'default',
        title: 'Encrypted email',
        image: 'reportEmail',
        text:
          'Your safety is important to us! To protect your data, you can send us encrypted emails (via a secure platform called Aygonet). You will receive an email as soon as we have answered your request. All data will be treated with strict confidentiality and will not be passed on to third parties.',
        // link: 'mitmischen/hashtags',
        // linkText: 'Zu den Hashtags',
        buttons: [
          {
            text: 'Register',
            type: 'cta',
            linkPath: 'external',
            link:
              'https://onlineberatung.aygonet.de/index.php?fw_goto=anmeldung/helpdesk/22ddb&'
          },
          {
            text: 'Login',
            type: 'cta',
            linkPath: 'external',
            link:
              'https://onlineberatung.aygonet.de/index.php?fw_goto=login/index/hd/22ddb&'
          }
        ],
      },
      {
        color: 'default',
        title: 'Chat',
        image: 'reportChat',
        text:
          '',
        buttons: [
          {
            text: 'Join Chat',
            type: 'cta',
            linkPath: 'external',
            link:
              'https://onlineberatung.aygonet.de/index.php?fw_goto=verwaltung.chat/overview/22ddb&'
          },

        ],

        // link: 'beratung/melden/hassimnetz',
        // linkText: 'Hasspostings melden'
      }
    ]
  },
}

export const heroDataMelden = {
  de: {
    title: 'Rassismus und/oder Hass im Netz melden',
    text:
      'Wenn Sie einen rassistischen Vorfall, Hass im Netz und/oder Cyber Mobbing melden und es dokumentieren lassen möchten, dann nutzen Sie bitte das untere Meldeformular. Der Vorfall wird dann von unseren Berater*innen bearbeitet. Für Rückfragen können Sie eine Kontaktmöglichkeit angeben.'
  },
  en: {
    title: 'Report racism and/or online hate',
    text:
      'If you have witnessed racial discrimination, online hate and/or cyberbullying, and you would like it to be documented, please use the form below. Our team will then process the incident. You can choose to provide us with your contact information, in case we have any further questions.'
  }
}

export const heroDataRassismus = {
  de: {
    title: 'Unterstützung bei rassistischer Diskriminierung',
    text:
      'Rassistische Diskriminierung bedeutet, dass eine Person oder eine bestimmte Gruppe von Personen aufgrund ihrer Hautfarbe, Sprache, Aussehens, Religion, Staatsbürgerschaft oder Herkunft in irgendeiner Form benachteiligt, herabgesetzt oder angegriffen wird.'
  },
  en: {
    title: 'Unterstützung bei rassistischer Diskriminierung',
    text:
      'Rassistische Diskriminierung bedeutet, dass eine Person oder eine bestimmte Gruppe von Personen aufgrund ihrer Hautfarbe, Sprache, Aussehens, Religion, Staatsbürgerschaft oder Herkunft in irgendeiner Form benachteiligt, herabgesetzt oder angegriffen wird.'
  }
}

export const heroDataHassImNetz = {
  image: 'GHiN_logo_s.png',
  imageSide: 'left',
  de: {
    title: 'Hass im Netz melden',
    text:
      'Unter Hass im Netz versteht ZARA hasserfüllte Inhalte, die sich gegen Einzelpersonen oder Gruppen richten. Diese Inhalte beziehen sich häufig auf die ethnische Zugehörigkeit, die Hautfarbe, sexuelle Orientierung, das Geschlecht, die Religion, eine Behinderung oder auf das Alter. Oft erfüllen solche Inhalte einen rechtlichen Straftatbestand. ZARA arbeitet gegen legale sowie illegale Formen von Hass im Netz.'
  },
  en: {
    title: 'Hass im Netz melden',
    text:
      'Unter Hass im Netz versteht ZARA hasserfüllte Inhalte, die sich gegen Einzelpersonen oder Gruppen richten. Diese Inhalte beziehen sich häufig auf die ethnische Zugehörigkeit, die Hautfarbe, sexuelle Orientierung, das Geschlecht, die Religion, eine Behinderung oder auf das Alter. Oft erfüllen solche Inhalte einen rechtlichen Straftatbestand. ZARA arbeitet gegen legale sowie illegale Formen von Hass im Netz.'
  }
}

export const multiPartOneLinerData = [
  {
    de: {
      icon: 'duration',
      title: 'Öffnungszeiten der Beratungsstelle',
      text: 'Mo – Mi: 10.00 – 15.00 | Do: 10.00 – 18.00 | Fr: 10.00 – 15.00'
    },
    en: {
      icon: 'duration',
      title: 'Opening hours',
      text: 'Mo – We: 10am – 3pm | Th: 10am – 6pm | Fr: 10am – 3pm'
    }
  },
  {
    de: {
      icon: 'location',
      title: 'So finden Sie uns',
      text: 'Am Hundsturm 7/13, 1050 Wien'
    },
    en: {
      icon: 'location',
      title: 'How you find us:',
      text: 'Am Hundsturm 7/13, 1050 Wien'
    }
  },
  {
    de: {
      linkText: 'Zum Anfahrtsplan',
      linkType: 'external',
      link: 'https://goo.gl/maps/y5smNouBkD32'
    },
    en: {
      linkText: 'Show map',
      linkType: 'external',
      link: 'https://goo.gl/maps/y5smNouBkD32'
    }
  }
]

export const cardGridObject = {
  de: {
    title: 'Eigene Rechte kennen',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'Was wir dann tun',
        link: 'beratung/waswirdanntun'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        title: 'Rechtshilfefonds #GegenHassimNetz',
        link: 'beratung/rechtshilfefonds'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/faq.png',
        title: 'Mehr dazu',
        link: 'wissen/faq'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/publikationen.png',
        title: 'Broschüre Hass im Netz',
        link: 'wissen/publikationen'
      }
    ]
  },
  en: {
    title: 'Know Your Rights',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'Was wir dann tun',
        link: 'beratung/waswirdanntun'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        title: 'Rechtshilfefonds #GegenHassimNetz',
        link: 'beratung/rechtshilfefonds'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/faq.png',
        title: 'Mehr dazu',
        link: 'wissen/faq'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/publikationen.png',
        title: 'Broschüre Hass im Netz',
        link: 'wissen/publikationen'
      }
    ]
  }
}

export const wasSieTunKoennenHeroData = {
  de: {
    title: 'Werden Sie aktiv',
    text:
      'Melden Sie rassistische Diskriminierung, Online Hass und Hetze sowie Cybermobbing an die ZARA Beratungsstellen. Bei Bedarf stehen Ihnen die psychosozial und juristisch geschulten Berater*innen gerne kostenlos zur Seite. Sowohl online als auch offline ist Eingreifen gefragt. Durch zivilcouragiertes Handeln stärken Sie Betroffenen den Rücken.'
  },
  en: {
    title: 'Werden Sie aktiv',
    text:
      'Melden Sie rassistische Diskriminierung, Online Hass und Hetze sowie Cybermobbing an die ZARA Beratungsstellen. Bei Bedarf stehen Ihnen die psychosozial und juristisch geschulten Berater*innen gerne kostenlos zur Seite. Sowohl online als auch offline ist Eingreifen gefragt. Durch zivilcouragiertes Handeln stärken Sie Betroffenen den Rücken.'
  }
}

export const wasSieTunKoennenInfoBox1 = {
  size: 'smallBottom',
  count: 'two',
  color: 'default',
  de: {
    cards: [
      {
        color: 'default',
        title: 'MELDEN',
        text:
          'Melden Sie rassistische Diskriminierung - on- sowie offline - und Hass im Netz an ZARA. ZARA dokumentiert alle Meldungen in einer eigen dafür vorgesehen Falldatenbank, welche wiederum für Berichte und Analysen anonymisiert aufgearbeitet werden. Diese Berichte sind eine wichtige qualitative Quelle, um auf das Ausmaß von Rassismus sowie Hass im Netz hinzuweisen und sichtbar zu machen. So ist ZARA in der Lage, Problematiken bzw. Tendenzen zu erkennen und mit Aktivitäten, Initiativen und Kampagnen dagegen vorzugehen.',
        link: 'beratung/melden',
        linkText: 'Melden'
      },
      {
        color: 'default',
        title: 'BERATUNGSTERMIN VEREINBAREN',
        text:
          'Wenn Sie selbst von Rassismus oder Hass im Netz betroffen sind, können Sie sich kostenlos von uns beraten lassen. Die ZARA Beratungsstellen können in solchen Situationen unterstützen! Sie erhalten kostenlos und zeitnah Informationen zu möglichen (rechtlichen) Schritten und erfahren, wie Sie selbst aktiv werden können. Die Mitarbeiter*innen können Sie bei der Durchführung der rechtlichen aber auch anderen möglichen Schritte unterstützen. Wenn Sie eine persönliche Beratung in Anspruch nehmen möchten, vereinbaren Sie bitte telefonisch oder per verschlüsseltem E-Mail einen Termin mit uns.',
        link: 'beratung',
        linkText: 'Beratungstermin vereinbaren'
      }
    ]
  },
  en: {
    cards: [
      {
        color: 'default',
        title: 'MELDEN',
        text:
          'Melden Sie rassistische Diskriminierung - on- sowie offline - und Hass im Netz an ZARA. ZARA dokumentiert alle Meldungen in einer eigen dafür vorgesehen Falldatenbank, welche wiederum für Berichte und Analysen anonymisiert aufgearbeitet werden. Diese Berichte sind eine wichtige qualitative Quelle, um auf das Ausmaß von Rassismus sowie Hass im Netz hinzuweisen und sichtbar zu machen. So ist ZARA in der Lage, Problematiken bzw. Tendenzen zu erkennen und mit Aktivitäten, Initiativen und Kampagnen dagegen vorzugehen.',
        link: 'beratung/melden',
        linkText: 'Melden'
      },
      {
        color: 'default',
        title: 'BERATUNGSTERMIN VEREINBAREN',
        text:
          'Wenn Sie selbst von Rassismus oder Hass im Netz betroffen sind, können Sie sich kostenlos von uns beraten lassen. Die ZARA Beratungsstellen können in solchen Situationen unterstützen! Sie erhalten kostenlos und zeitnah Informationen zu möglichen (rechtlichen) Schritten und erfahren, wie Sie selbst aktiv werden können. Die Mitarbeiter*innen können Sie bei der Durchführung der rechtlichen aber auch anderen möglichen Schritte unterstützen. Wenn Sie eine persönliche Beratung in Anspruch nehmen möchten, vereinbaren Sie bitte telefonisch oder per verschlüsseltem E-Mail einen Termin mit uns.',
        link: 'beratung',
        linkText: 'Beratungstermin vereinbaren'
      }
    ]
  }
}

export const wasSieTunKoennenInfoBox2 = {
  color: 'default',
  count: 'two',
  de: {
    cards: [
      {
        color: 'default',
        title: 'ZIVILCOURAGE ZEIGEN',
        text:
          'Bei rassistischer Diskriminierung sowie bei Hass im Netz ist Eingreifen gefragt! Zivilcourage heißt in “unangenehmen” Situationen in der Öffentlichkeit - on- & offline - einzugreifen. Eingreifen kann bedeuten, dass man nicht weg sieht, Betroffenen Unterstützung anbietet, Vorfälle dokumentiert, Unterstützung holt, und vieles mehr. Auch in der online Welt ist zivilcouragiertes Handeln gefragt, um Hass im Netz in Grenzen zu halten, Räume nicht stillschweigend aufzugeben und wiederum Betroffenen den Rücken zu stärken. Es erfordert Mut! Wichtig ist dabei stets die eigenen Grenzen und Fähigkeiten sowie den Wunsch der Betroffenen zu erkennen und danach zu handeln.',
        link: 'mitmischen',
        linkText: 'Mitmischen'
      },
      {
        color: 'default',
        title: 'WEITERSAGEN',
        text:
          'Zu einer Sensibilisierung und Aufklärung der Gesellschaft über rassistische Diskriminierung bedarf es öffentlicher Diskurse. Auch bei Hass im Netz ist das Wissen, dass es sich dabei oft um strafrechtlich relevante Tatbestände handelt, nach wie vor nicht bei allen angekommen. Weil Rassismus und Hass im Netz am besten durch Aufklärungsarbeit bekämpft werden können, freuen wir uns, wenn Sie uns dabei unterstützen, unser Beratungs- und Trainingsangebot an so viele Personen wie möglich weiterzuleiten.',
        linkPath: 'external',
        link: 'mitmischen',
        linkText: 'Mach auf unser Beratungsangebot aufmerksam'
      }
    ]
  },
  en: {
    cards: [
      {
        color: 'default',
        title: 'ZIVILCOURAGE ZEIGEN',
        text:
          'Bei rassistischer Diskriminierung sowie bei Hass im Netz ist Eingreifen gefragt! Zivilcourage heißt in “unangenehmen” Situationen in der Öffentlichkeit - on- & offline - einzugreifen. Eingreifen kann bedeuten, dass man nicht weg sieht, Betroffenen Unterstützung anbietet, Vorfälle dokumentiert, Unterstützung holt, und vieles mehr. Auch in der online Welt ist zivilcouragiertes Handeln gefragt, um Hass im Netz in Grenzen zu halten, Räume nicht stillschweigend aufzugeben und wiederum Betroffenen den Rücken zu stärken. Es erfordert Mut! Wichtig ist dabei stets die eigenen Grenzen und Fähigkeiten sowie den Wunsch der Betroffenen zu erkennen und danach zu handeln.',
        link: 'mitmischen',
        linkText: 'Mitmischen'
      },
      {
        color: 'default',
        title: 'WEITERSAGEN',
        text:
          'Zu einer Sensibilisierung und Aufklärung der Gesellschaft über rassistische Diskriminierung bedarf es öffentlicher Diskurse. Auch bei Hass im Netz ist das Wissen, dass es sich dabei oft um strafrechtlich relevante Tatbestände handelt, nach wie vor nicht bei allen angekommen. Weil Rassismus und Hass im Netz am besten durch Aufklärungsarbeit bekämpft werden können, freuen wir uns, wenn Sie uns dabei unterstützen, unser Beratungs- und Trainingsangebot an so viele Personen wie möglich weiterzuleiten.',
        linkPath: 'external',
        link: 'mitmischen',
        linkText: 'Mach auf unser Beratungsangebot aufmerksam'
      }
    ]
  }
}

export const wasSieTunKoennenCardGridObject = {
  count: 'three',
  de: {
    title: 'Lass uns was tun',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'Was Wir Dann Tun',
        link: 'beratung/waswirdanntun'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/mitmischen.png',
        title: 'Mitmischen',
        link: 'mitmischen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        title: 'Wissen',
        link: 'wissen'
      }
    ]
  },
  en: {
    title: 'Lass uns was tun',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'Was Wir Dann Tun',
        link: 'beratung/waswirdanntun'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/mitmischen.png',
        text: 'Mitmischen',
        link: 'mitmischen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        text: 'Wissen',
        link: 'wissen'
      }
    ]
  }
}

export const wasWirTunKoennenHeroData = {
  de: {
    title: 'Was Wir dann tun'
    // text:
    //   'Die ZARA Beratungsstellen dokumentieren rassistische Diskriminierung, Online Hass und Hetze sowie Cybermobbing und ergreifen weitere Maßnahmen. Melden Sie rassistische Diskriminierung, Online Hass und Hetze sowie Cybermobbing. Bei Bedarf stehen Ihnen die psychosozial und juristisch geschulten Berater*innen gerne kostenlos zur Seite. Sowohl online als auch offline ist Eingreifen gefragt. Durch zivilcouragiertes Handeln wird Betroffenen der Rücken gestärkt und unterschiedliche Räume können verteidigt und zurückgewonnen werden.'
  },
  en: {
    title: 'Was Wir dann tun'
    // text:
    //   'Die ZARA Beratungsstellen dokumentieren rassistische Diskriminierung, Online Hass und Hetze sowie Cybermobbing und ergreifen weitere Maßnahmen. Melden Sie rassistische Diskriminierung, Online Hass und Hetze sowie Cybermobbing. Bei Bedarf stehen Ihnen die psychosozial und juristisch geschulten Berater*innen gerne kostenlos zur Seite. Sowohl online als auch offline ist Eingreifen gefragt. Durch zivilcouragiertes Handeln wird Betroffenen der Rücken gestärkt und unterschiedliche Räume können verteidigt und zurückgewonnen werden.'
  }
}

export const wasWirTunKoennenInfoBox1 = {
  color: 'default',
  size: 'smallBottom',
  de: {
    cards: [
      {
        color: 'default',
        title: 'BERATUNG',
        text:
          'Die Mitarbeiter*innen der Beratungsstellen beraten Sie kostenlos und vertraulich bei Vorfällen von Hass im Netz sowie bei rassistischer Diskriminierung. Bei einer Beratung beschreiben Sie den Vorfall und besprechen gemeinsam mit dem*der Berater*in mögliche weitere Schritte. Die Beratungen können persönlich, telefonisch, per Chat oder per E-Mail stattfinden. Sie können dabei gerne anonym bleiben, wenn Sie das möchten. Für persönliche Beratungen vereinbaren Sie bitte telefonisch einen Termin. Das Beratungsteam bemüht sich, Ihre Anfrage möglichst rasch zu bearbeiten - je nach Anzahl der Meldungen kann es manchmal länger dauern. Wenn Sie kein Deutsch sprechen, versuchen wir die Beratung mit Unterstützung eines*r Dolmetscher*in durchzuführen.',
        link: 'beratung',
        linkText: 'Zur Beratung'
      },
      {
        color: 'default',
        title: 'RECHTSAUSKUNFT',
        text:
          'Bei rechtlichen Fragen zu den Themen rassistischer Diskriminierung sowie Hass im Netz stehen Ihnen die Mitarbeiter*innen der Beratungsstelle persönlich, telefonisch, per Email oder Chat zur Verfügung. Wichtige Gesetze sind beispielsweise Bestimmungen aus dem Strafgesetzbuch (StGB) sowie das Gleichbehandlungsgesetz (GlBG) oder das Verbotsgesetz (VerbotsG).'
      },
      {
        color: 'default',
        title: 'BEGLEITUNG ZU GERICHT/BEHÖRDEN',
        text:
          'Gerne begleiten Sie Mitarbeiter*innen der Beratungsstelle zu Terminen bei der Polizei, bei Gericht oder bei sonstigen Behörden, wenn es um rassistische Diskriminierung oder um Hass im Netz geht. Als Vertrauensperson kann der*die Berater*in Sie gut unterstützen und mit Ihnen danach weitere Schritte besprechen.'
      }
    ]
  },
  en: {
    cards: [
      {
        color: 'default',
        title: 'BERATUNG',
        text:
          'Die Mitarbeiter*innen der Beratungsstellen beraten Sie kostenlos und vertraulich bei Vorfällen von Hass im Netz sowie bei rassistischer Diskriminierung. Bei einer Beratung beschreiben Sie den Vorfall und besprechen gemeinsam mit der Berater*in mögliche weitere Schritte. Die Beratungen können persönlich, telefonisch, per Chat oder per E-Mail stattfinden. Sie können dabei gerne anonym bleiben, wenn Sie das möchten. Für persönliche Beratungen vereinbaren Sie bitte telefonisch einen Termin. Das Beratungsteam bemüht sich, Ihre Anfrage möglichst rasch zu bearbeiten - je nach Anzahl der Meldungen kann es manchmal länger dauern. Wenn Sie kein Deutsch sprechen, versuchen wir die Beratung mit Unterstützung eines*r Dolmetscher*in durchzuführen.',
        link: 'beratung',
        linkText: 'Zur Beratung'
      },
      {
        color: 'default',
        title: 'RECHTSAUSKUNFT',
        text:
          'Bei rechtlichen Fragen zu den Themen rassistischer Diskriminierung sowie Hass im Netz stehen Ihnen die Mitarbeiter*innen der Beratungsstelle persönlich, telefonisch, per Email oder Chat zur Verfügung. Wichtige Gesetze sind beispielsweise Bestimmungen aus dem Strafgesetzbuch (StGB) sowie das Gleichbehandlungsgesetz (GlBG) oder das Verbotsgesetz (VerbotsG).'
      },
      {
        color: 'default',
        title: 'BEGLEITUNG ZU GERICHT/BEHÖRDEN',
        text:
          'Gerne begleiten Sie Mitarbeiter*innen der Beratungsstelle zu Terminen bei der Polizei, bei Gericht oder bei sonstigen Behörden, wenn es um rassistische Diskriminierung oder um Hass im Netz geht. Als Vertrauensperson kann der*die Berater*in Sie gut unterstützen und mit Ihnen danach weitere Schritte besprechen.'
      }
    ]
  }
}
export const wasWirTunKoennenInfoBox2 = {
  color: 'default',
  de: {
    cards: [
      {
        color: 'default',
        title: 'ENTFERNUNG BEANTRAGEN',
        text:
          'Melden Sie der Beratungsstelle Hasspostings oder rassistische Beschmierungen! Die Mitarbeiter*innen überprüfen, ob diese gegen das Gesetz verstoßen und bemühen sich um eine rasche Entfernung.'
      },
      {
        color: 'default',
        title: 'UNTERSTÜTZUNG BEI ANZEIGEN',
        text:
          'Bei Fällen von rassistischer Diskriminierung oder Hass im Netz, die gegen ein Gesetz verstoßen, bespricht Ihr*e Berater*in mit Ihnen die bestehenden Handlungsmöglichkeiten. Wenn Sie eine Anzeige einbringen möchten und diese sinnvoll erscheint, unterstützen wir Sie gerne dabei.'
      },
      {
        color: 'default',
        title: 'RECHTSHILFEFONDS GEGEN HASS IM NETZ',
        text:
          'Gemeinsam mit Sigrid Maurer hat der Verein ZARA im Oktober 2018 einen Rechtshilfefonds eingerichtet, mit dem zivilrechtliche Klagen bei Fällen von Hass im Netz finanziert werden können. Sind Sie von Hass im Netz betroffen wenden Sie sich an eine*n Berater*in, der*die mit Ihnen bespricht, ob es möglich ist, eine Klage einzubringen und ob die Kosten vom Rechtshilfefonds übernommen werden können.<br><a href="https://assets.zara.or.at/download/pdf/Kriterienrechtshilfefonds.pdf" target="blank">Kriterien für die Inanspruchnahme des Rechtshilfefonds</a>',
        link:
          'https://www.respekt.net/projekte-unterstuetzen/details/projekt/1780/',
        linkPath: 'external',
        linkText: 'Näheres zum Rechtshilfefonds'
      }
    ]
  },
  en: {
    cards: [
      {
        color: 'default',
        title: 'ENTFERNUNG BEANTRAGEN',
        text:
          'Melden Sie der Beratungsstelle Hasspostings oder rassistische Beschmierungen! Die Mitarbeiter*innen überprüfen, ob diese gegen das Gesetz verstoßen und bemühen sich um eine rasche Entfernung.',
        link: 'beratung',
        linkText: 'Zur Beratung'
      },
      {
        color: 'default',
        title: 'UNTERSTÜTZUNG BEI ANZEIGEN',
        text:
          'Bei Fällen von rassistischer Diskriminierung oder Hass im Netz, die gegen ein Gesetz verstoßen, bespricht Ihr*e Berater*in mit Ihnen die bestehenden Handlungsmöglichkeiten. Wenn Sie eine Anzeige einbringen möchten und diese sinnvoll erscheint, unterstützen wir Sie gerne dabei.'
      },
      {
        color: 'default',
        title: 'RECHTSHILFEFOND HASS IM NETZ',
        text:
          'Gemeinsam mit Sigrid Maurer hat der Verein ZARA im Oktober 2018 einen Rechtshilfefonds eingerichtet, mit dem zivilrechtliche Klagen bei Fällen von Hass im Netz finanziert werden können. Sind Sie von Hass im Netz betroffen wenden Sie sich an ein*e Berater*in, der*die mit Ihnen bespricht, ob es möglich ist, eine Klage einzubringen und ob die Kosten vom Rechtshilfefonds übernommen werden können.',
        link:
          'https://www.respekt.net/projekte-unterstuetzen/details/projekt/1780/',
        linkPath: 'external',
        linkText: 'Näheres zum Rechtshilfefonds'
      }
    ]
  }
}

export const wasWirTunKoennenCardGridObject = {
  count: 'three',
  de: {
    title: 'Lass uns was tun',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'Was Sie Tun Können',
        link: 'beratung/wassietunkoennen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/mitmischen.png',
        title: 'Mitmischen',
        link: 'mitmischen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        title: 'Wissen',
        link: 'wissen'
      }
    ]
  },
  en: {
    title: 'Lass uns was tun',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'Was Sie Tun Können',
        link: 'beratung/wassietunkoennen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/mitmischen.png',
        title: 'Mitmischen',
        link: 'mitmischen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        title: 'Wissen',
        link: 'wissen'
      }
    ]
  }
}
