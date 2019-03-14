export const oneLineContent = {
  socialMedia: {
    de: {
      text: 'Folge uns:'
    },
    en: {
      text: 'Follow us:'
    }
  },
  inputButtonBox: {
    de: {
      inputPlaceholder: 'E-Mail-Adresse',
      button: {
        type: 'default',
        text: 'Newsletter abonnieren'
      }
    },
    en: {
      inputPlaceholder: 'E-mail Address',
      button: {
        type: 'default',
        text: 'Subscribe to newsletter'
      }
    }
  },
  iconLinkBox: {
    de: {
      icon: 'LockIcon',
      text: 'Verschlüsselte Email an ZARA',
      link: 'verschluesselte_email'
    },
    en: {
      icon: 'LockIcon',
      text: 'Encrypted e-mail to ZARA',
      link: 'verschluesselte_email'
    }
  }
}

export const footerContent = {
  de: {
    left: {
      header: 'Kontakt',
      items: [
        {
          icon: 'location',
          text:
            'ZARA Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
          addLink: true,
          link: 'https://goo.gl/maps/Tjv8YHhNUXN2',
          linkText: 'Zum Anfahrtsplan'
        },
        {
          icon: 'phone',
          text: '+43 (1) 929 13 99'
        },
        {
          icon: 'email',
          isLink: true,
          linkPath: 'email',
          link: 'mailto:office@zara.or.at',
          text: 'office@zara.or.at'
        },
        {
          icon: 'hours',
          text: 'Mo – Mi: 9.00 – 16.30<br>Do: 10.00 – 18.30<br>Fr: 9.00 – 15.00'
        }
      ]
    },
    right: {
      top: {
        left: {
          header: 'Presse',
          items: [
            {
              link: 'wissen/presse',
              linkText: 'Pressemeldungen'
            },
            {
              link: 'wissen/presse/pressespiegel',
              linkText: 'Pressespiegel'
            },
            {
              link: 'wissen/presse/pressematerial_und_logos',
              linkText: 'Logos & Kampagnen'
            },
            {
              link: 'wissen/presse/fotos',
              linkText: 'Fotos'
            }
          ]
        },
        right: {
          header: 'Spenden an ZARA',
          icon: 'spenden',
          link: 'mitmischen/unterstuetzen',
          items: [
            {
              icon: 'check',
              text: 'einmalig oder laufend'
            },
            {
              icon: 'check',
              text: 'sichere Zahlung'
            },
            {
              icon: 'check',
              text: 'steuerlich absetzbar'
            }
          ],
          text:
            'Uni Credit Bank Austria<br>IBAN AT25 1100 0052 1136 2800<br>BIC BKAUATWW'
        }
      },
      bottom: {
        header: 'Mit Unterstützung von',
        items: [
          {
            icon: 'bla'
          }
        ]
      }
    }
  },
  en: {
    left: {
      header: 'Contact',
      items: [
        {
          icon: 'location',
          text:
            'ZARA Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
          addLink: true,
          link: '/test',
          linkText: 'Zum Anfahrtsplan'
        },
        {
          icon: 'phone',
          text: '+43 (1) 929 13 99'
        },
        {
          icon: 'email',
          isLink: true,
          linkPath: 'email',
          link: 'mailto:office@zara.or.at',
          text: 'office@zara.or.at'
        },
        {
          icon: 'hours',
          text: 'Mo – Mi: 9.00 – 16.30<br>Do: 10.00 – 18.30<br>Fr: 9.00 – 15.00'
        }
      ]
    },
    right: {
      top: {
        left: {
          header: 'Press',
          items: [
            {
              link: 'wissen/presse',
              linkText: 'Pressemeldungen'
            },
            {
              link: 'wissen/presse/pressespiegel',
              linkText: 'Pressespiegel'
            },
            {
              link: 'wissen/presse/pressematerial_und_logos',
              linkText: 'Logos & Kampagnen'
            },
            {
              link: 'wissen/presse/fotos',
              linkText: 'Fotos'
            }
          ]
        },
        right: {
          header: 'Donate',
          icon: 'donate',
          items: [
            {
              icon: 'check',
              text: 'einmalig oder laufend'
            },
            {
              icon: 'check',
              text: 'sichere Zahlung'
            },
            {
              icon: 'check',
              text: 'steuerlich absetzbar'
            }
          ],
          text:
            'Uni Credit Bank Austria<br>IBAN AT25 1100 0052 1136 2800<br>BIC BKAUATWW'
        }
      },
      bottom: {
        header: 'Mit Unterstützung von',
        items: [
          {
            icon: 'bla'
          }
        ]
      }
    }
  }
}

export const sponsorLogos = [
  {
    image: 'BMEIA_Logo.png'
  },
  {
    image: 'EU_flag.png'
  },
  {
    image: 'MA17_Logo.gif'
  },
  {
    image: 'sozial_ministerium_logo.png'
  },
  {
    image: 'rd-foundation-logo.jpg',
    size: 'wide'
  }
]
