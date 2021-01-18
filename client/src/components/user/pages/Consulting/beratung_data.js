export const oneLineAlert = {
  type: 'info',
  de: {
    title: 'Möchten Sie bei uns einen persönlichen Beratungstermin in Anspruch nehmen?',
    text:
      'Rufen Sie uns unter +43 (0) 1 929 13 99 an und machen Sie einen Termin aus.',
    button: {
      linkPath: 'external',
      link: 'tel:+4319291399',
      type: 'default',
      text: 'Jetzt anrufen'
    }
  },
  en: {
    title: 'Would you like to meet us in person?',
    text:
      'Call us to make an appointment +43 (0) 1 929 13 99.',
    button: {
      linkPath: 'external',
      link: 'tel:+4319291399',
      type: 'default',
      text: 'Call now'
    }
  }
}

export const oneLineAlertReport = {
  type: 'info',
  de: {
    title: 'Möchten Sie eine Beratung in Anspruch nehmen?',
    text:
      'Bei einer anonymen Meldung können wir nicht antworten. Wir beraten Sie gerne per Telefon, verschlüsselter E-Mail oder per Chat.',
    button: {
      link: 'beratung/beratung_rassismus_hassimnetz',
      type: 'default',
      text: 'Zur Beratung'
    }
  },
  en: {
    title: 'Would you like to meet us in person?',
    text:
      'We cannot reply to an anonymous report! We can provide support over the phone, encrypted email or via chat.',
    button: {
      link: 'beratung/beratung_rassismus_hassimnetz',
      type: 'default',
      text: 'Get support'
    }
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
    title: 'Beratung zu Rassismus und/oder Hass im Netz',
    text:
      'Lassen Sie sich von ZARA kostenlos beraten, wenn Sie von rassistischer Diskriminierung, Online Hass und Hetze und/oder Cyber-Mobbing betroffen sind oder Zeug*in von solchen Vorfällen werden. Das Beratungsteam besteht aus psychosozial und juristisch geschulten Berater*innen, die Sie gerne unterstützen.',
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
    title: 'Support against racism and/or online hate',
    text:
      'If you are affected by racial discrimination, online hate and/or cyberbullying, or if you have become a witness to such incidents, then let us advise you free of charge. Our team provides legal and psychosocial advice and will be happy to support you.'
  }
}

export const beratungInfoBox = {
  color: 'white',
  direction: 'column',
  de: {
    // title: 'Beratung zu Rassismus und/oder Hass im Netz',
    // text:
    //   'Lassen Sie sich von ZARA kostenlos beraten, wenn Sie von rassistischer Diskriminierung, Online Hass und Hetze und/oder Cyber-Mobbing betroffen sind oder Zeug*in von solchen Vorfällen werden. Das Beratungsteam besteht aus psychosozial und juristisch geschulten Berater*innen, die Sie gerne unterstützen.',

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
          'Rufen Sie uns unter +43 (0) 1 929 13 99 an, um eine telefonische Beratung zu bekommen und/oder einen Termin für eine persönliche Beratung auszumachen.<br />Sie erreichen die ZARA Beratungsstellen zu diesen Öffnungszeiten: <br /> Mo – Mi: 10.00 – 15.00, Do: 10.00 – 18.00, Fr: 10.00 – 15.00',

        buttons: [
          {
            text: 'Jetzt anrufen',
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
          'Hier können Sie anonym mit einem*einer Berater*in chatten. Schreiben Sie in Ihrer ersten Nachricht bitte nur, dass Sie gerne eine Chatberatung hätten. Wir erstellen dann einen privaten Raum, in dem Ihre Daten und Informationen nur von Ihnen und dem*der Berater*in gelesen werden.',
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
    // title: 'Support against racism and/or online hate',
    // text:
    //   'If you are affected by racial discrimination, online hate and/or cyberbullying, or if you have become a witness to such incidents, then let us advise you free of charge. Our team provides legal and psychosocial advice and will be happy to support you.',

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
          'Would you like to talk to us over the phone? Or would you like to make an appointment?<br />Call us on +43 (0) 1 929 13 99.<br />You can reach the ZARA team during these hours:<br />Mo – Mi: 10.00 – 15.00, Do: 10.00 – 18.00, Fr: 10.00 – 15.00',
        // link: 'tel:+43 (0) 1 929 13 99',
        // linkType: 'external',
        // linkText: '+43 (0) 1 929 13 99'
        buttons: [
          {
            text: 'Call now',
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
          'You can chat anonymously with a counsellor. In your first chat message, please write that you would like to chat with someone. Once we have noted your request we will open a chatroom where your information can only be read by you and our counsellor.',
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
      'Wenn Sie einen rassistischen Vorfall, Hass im Netz und/oder Cyber Mobbing melden und es dokumentieren lassen möchten, dann nutzen Sie bitte das untere Meldeformular. Der Vorfall wird dann von unseren Berater*innen bearbeitet.'
  },
  en: {
    title: 'Report racism and/or online hate',
    text:
      'If you have witnessed racial discrimination, online hate and/or cyberbullying, and you would like it to be documented, please use the form below. Our team will then process the incident.'
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
      icon: 'phone',
      title: 'So erreichen Sie uns',
      text: '+43 (0) 1 929 13 99'
    },
    en: {
      icon: 'phone',
      title: 'How to contact us',
      text: '+43 (0) 1 929 13 99'
    }
  },
  // {
  //   de: {
  //     linkText: 'Zum Anfahrtsplan',
  //     linkType: 'external',
  //     link: 'https://goo.gl/maps/y5smNouBkD32'
  //   },
  //   en: {
  //     linkText: 'Show map',
  //     linkType: 'external',
  //     link: 'https://goo.gl/maps/y5smNouBkD32'
  //   }
  // }
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
    title: 'Get involved',
    text:
      'Report racist discrimination, online hate as well as cyberbullying to the ZARA team. If necessary, our psychosocially and legally trained advisors will be happy to assist you free of charge. We need to stand up against discrimination online and offline. By showing civil courage, we strengthen those around us.'
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
        title: 'REPORT AN INCIDENT',
        text:
          'Report racist discrimination - online and offline – as well as online hate to ZARA. ZARA documents all cases in our database, which in turn is processed anonymously for written reports and analyses. These are an important qualitative source for pointing out the extent of racism and online hate in Austria – making them visible to a greater public. This way, we can observe social issues and/or new developments, which we can then address with targeted initiatives and campaigns.',
        link: 'beratung/melden',
        linkText: 'Report an incident'
      },
      {
        color: 'default',
        title: 'ARRANGE AN APPOINTMENT',
        text:
          'Our team can provide support if you are affected by racism or online hate! You will receive free and timely information on possible (legal) steps and learn how you can get involved. If you would like to take advantage of a personal consultation, please make an appointment with us by phone or (encrypted) email.',
        link: 'beratung',
        linkText: 'Arrange an appointment'
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
        title: 'SHOW CIVIL COURAGE',
        text:
          'Whether its racist discrimination or online hate, we need to get involved! Civil courage means to intervene in “unpleasant” situations in public - online and offline. Intervening can mean not looking the other way, offering support to those affected, documenting incidents, getting support, and much more. Online civil courage is also required to limit online hate, to keep online spaces open and, in turn, to support those affected. It takes courage to stand up against discrimination! It is important to recognize your own limits and abilities as well as the wishes of those affected and to act accordingly.',
        link: 'mitmischen',
        linkText: 'Get involved'
      },
      {
        color: 'default',
        title: 'SPREAD THE WORD',
        text:
          'In order to address the issue of racism, it is important to raise public awareness. Few people are aware that online hate can be judged a criminal offence. Racism and online hate are best addressed through educational work. You can support our work by spreading the word about our advice and training services.',
        linkPath: 'external',
        link: 'mitmischen',
        linkText: 'Raise awareness'
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
        title: 'What we can do',
        link: 'beratung/waswirdanntun'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/mitmischen.png',
        text: 'Get involved',
        link: 'mitmischen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        text: 'Resources',
        link: 'wissen'
      }
    ]
  }
}

export const wasWirTunKoennenHeroData = {
  class: 'no-image',
  de: {
    title: 'Was Wir dann tun'
    // text:
    //   'Die ZARA Beratungsstellen dokumentieren rassistische Diskriminierung, Online Hass und Hetze sowie Cybermobbing und ergreifen weitere Maßnahmen. Melden Sie rassistische Diskriminierung, Online Hass und Hetze sowie Cybermobbing. Bei Bedarf stehen Ihnen die psychosozial und juristisch geschulten Berater*innen gerne kostenlos zur Seite. Sowohl online als auch offline ist Eingreifen gefragt. Durch zivilcouragiertes Handeln wird Betroffenen der Rücken gestärkt und unterschiedliche Räume können verteidigt und zurückgewonnen werden.'
  },
  en: {
    title: 'What we can do'
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
        title: 'SUPPORT',
        text:
          'If you experience racist discrimination, online hate or cyberbullying, our team will advise you confidentially and free of charge. During a consultation, you can describe the incident and discuss possible steps. The consultations can take place face-to-face, by telephone, by chat or by email. If you wish, you can decide to keep your identity anonymous. For a face-to-face meeting, please make an appointment by phone. Our team will then process your request as quickly as possible. Depending on the number of cases we receive, it can sometimes take longer for us to get back to you. If you do not speak German, we will try to arrange for an interpreter.',
        link: 'beratung',
        linkText: 'Get support'
      },
      {
        color: 'default',
        title: 'LEGAL INFORMATION',
        text:
          'If you have any legal questions regarding racist discrimination and online hate, you can reach our team by phone, encrypetd email or chat. Relevant laws regarding racist discrimination and online hate in Austria include, for example, provisions from the Criminal Code (Strafgesetzbuch - StGB) as well as the Equal Treatment Act (Gleichbehandlungsgesetz - GlBG) or the Prohibition Act (Verbotsgesetz  - VerbotsG).'
      },
      {
        color: 'default',
        title: 'ASSISTING WITH COURTS / AUTHORITIES',
        text:
          'Our team can accompany you to your appointments with the police, court or other authorities when it comes to racist discrimination or online hate. As a person of trust, our counsellors will be able to support you and then discuss further steps with you.'
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
        title: 'REQUEST REMOVAL',
        text:
          'Report hate postings or racist smearings to us! We will check whether these violate the law and work to remove them quickly.',
        link: 'beratung',
        linkText: 'Get support'
      },
      {
        color: 'default',
        title: 'SUPPORT WITH FILING A COMPLAINT',
        text:
          'Your counsellor can discuss cases of racist discrimination or online hate with you in order to examine all the options available to you. We will be happy to support you in filing a complaint in case of a violation of Austrian law (and if doing so is feasible).'
      },
      {
        color: 'default',
        title: 'LEGAL AID FUND AGAINST ONLINE HATE',
        text:
          'Together with Sigrid Maurer, ZARA set up a legal aid fund in October 2018 that can be used to finance civil lawsuits in cases of online hate. If you are affected by online hate, please contact us. We will then discuss with you whether it is possible to file a lawsuit and whether the legal aid fund can cover the costs.',
        link:
          'https://www.respekt.net/projekte-unterstuetzen/details/projekt/1780/',
        linkPath: 'external',
        linkText: 'More information'
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
        title: 'What you can do',
        link: 'beratung/wassietunkoennen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/mitmischen.png',
        title: 'Get involved',
        link: 'mitmischen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        title: 'Resources',
        link: 'wissen'
      }
    ]
  }
}
