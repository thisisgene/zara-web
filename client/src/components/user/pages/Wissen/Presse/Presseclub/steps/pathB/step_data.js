export const stepOne = {
  de: {
    text1:
      "<b>Ist der Online-Angriff Ihrer Meinung nach eine direkte Reaktion auf einen journalistischen Beitrag?</b> Bitte Zutreffendes auswählen:",
    optionName: "directReaction",
    options: [
      {
        text:
          "<b>Ja</b>, der Online-Angriff ist eine direkte Reaktion auf einen Beitrag/mehrere Beiträge.",
        value: "yes",
      },
      {
        text:
          "<b>Nein</b>, der Online-Angriff steht in keinem erkennbaren Zusammenhang mit einem bestimmten Beitrag.",
        value: "no",
      },
    ],
    text1A1: {
      name: "text1a1",
      text:
        "<b>Bitte die URL </em (bzw. Zitation, falls online nicht verfügbar) <b>des journalistischen Beitrags hier eintragen:</b>",
    },
    text1A2: {
      name: "text1a2a",
      name2: "text1a2b",
      name3: "text1a2c",
      text:
        "<b>Bitte fassen Sie das zentrale Thema des journalistischen Beitrags in einem oder wenigen Stichworten hier zusammen</b> (pro Stichwort eine Textbox):",
    },
    text1B1: {
      name: "text1b1",
      text:
        "<b>Bitte beschreiben Sie kurz den Kontext bzw. den möglichen Auslöser des Online-Angriffs</b><br />(z.B. Reaktion auf einen öffentlichen Auftritt oder persönliches Social Media-Posting des*der Journalist*in)?",
    },
    text1B2: {
      name: "text1b2",
      text:
        "<b>Falls vorhanden, bitte URL </em(bzw. Zitation, wenn online nicht verfügbar) <b>hier eintragen:</b>",
    },
  },
}
export const stepTwo = {
  de: {
    text2:
      "<b>Wo – auf welcher Social Media Plattform oder über welche Online-Kanäle – hat der Online-Angriff stattgefunden?</b> Mehrfachauswahl möglich:",
    optionName: "platform",
    options: [
      {
        text: "Facebook",
        value: "facebook",
      },
      {
        text: "Twitter",
        value: "twitter",
      },
      {
        text: "Instagram",
        value: "instagram",
      },
      {
        text: "YouTube",
        value: "youtube",
      },
      {
        text: "Website, Blog oder Forum mit Kommentarfunktion",
        value: "website",
      },
      {
        text: "Anderer Kanal, nämlich:",
        value: "other",
      },
    ],
  },
}
export const stepThree = {
  de: {
    text3:
      "<b>Bitte schätzen Sie den Umfang des Online-Angriffs ein.</b> Zutreffende Einschätzung anklicken:",
    optionName: "extent",
    options: [
      {
        text:
          "Der Online-Angriff umfasst(e) <b>einen einzelnen bzw. vereinzelte</b>, öffentlich sichtbare Nachrichten oder Kommentare.",
        value: "single",
      },
      {
        text:
          "Der Online-Angriff umfasst(e) <b>mehrere bis viele, aber noch überschaubare</b>, öffentlich sichtbare Nachrichten oder Kommentare.",
        value: "multiple",
      },
      {
        text:
          "Der Online-Angriff umfasst(e) <b>sehr viele bis kaum überschaubare</b>, öffentlich sichtbare Nachrichten oder Kommentare.",
        value: "many",
      },
    ],
  },
}
export const stepFour = {
  de: {
    text4a:
      "<b>Waren eine oder mehrere private Nachrichten ohne Öffentlichkeit (direct messages) Teil des Online-Angriffs?</b> Bitte auswählen:",
    optionName: "privatemsg",
    options: [
      {
        text: "Ja",
        value: "yes",
      },
      {
        text: "Nein",
        value: "no",
      },
    ],
    text4b:
      "<b>Wenn ja</b>, ist hier Raum für beispielhafte Beschreibung (Anzahl und Inhalt) der privaten Nachrichten:",
  },
}

export const stepFive = {
  de: {
    text5a:
      "<b>Haben sich die Online-Angriffe inhaltlich dezidiert einer oder mehrerer der folgenden Hass-Ideologien bedient?</b> Mehrfachauswahl möglich:",
    optionName: "type",
    options: [
      {
        text: "Hass aufgrund des Geschlechts (Sexismus)",
        value: "sexism",
      },
      {
        text:
          "Hass wegen nicht-<em>weißer</em>, ethnischer, nationaler oder religiöser Zuschreibung (Rassismus)",
        value: "racism",
      },
      {
        text: "Homo-, Bi-, Trans-, Interfeindlichkeit (Heteronormativismus)",
        value: "heteronormativism",
      },
      {
        text: "Hass gegen Menschen mit Behinderung (Ableismus)",
        value: "ableism",
      },
      {
        text: "Hass aufgrund des Alters (Ageism)",
        value: "ageism",
      },
      {
        text: "Hass aufgrund der politischen Ideologie / Weltanschauung",
        value: "politics",
      },
      {
        text: "Hass aufgrund anderer Merkmale oder Zuschreibungen",
        value: "other",
      },
    ],
    text5a2: "Anmerkungen:",
    text5b:
      "<b>Hier ist Raum für Beispiele (Originalwortlaut samt URL) bzw. Präzisierungen:</b>",
    text5c:
      "<b>Bitte laden Sie – wenn verfügbar – beispielhafte Nachrichten, Postings oder Kommentare des Online-Angriffs als Screenshots (</b>",
    text5c2: "<b>mit Zeitstempel*</b>",
    text5c3: "<b>) hier hoch:</b>",
    text5c2link:
      "Zeitstempel sind notwendig, wenn man Screenshots als Beweis (vor Gericht) verwenden will.",
    text5d:
      "* Wie Sie einen Screenshot mit Zeitstempel erstellen, erfahren Sie",
    link: {
      text: "hier.",
      url:
        "wissen/presse/dokumentation_von_angriffen_auf_journalist_innen/screenshot_info",
    },
    droptext: "Bilder hier hochladen.",
    errorText: {
      maxFileCount: "Maximal 10 Dateien",
      maxFileCountLong:
        "Limit erreicht! Es dürfen maximal nur 10 Dateien auf einmal gesendet werden.",
      fileTooLarge: "Datei ist zu groß. Maximal 10 MB.",
      fileAccepted: "Akzeptiert:",
      fileRejected: "abgelehnt:",
      fileFormatAccepted: "Gültiges Format.",
      fileFormatRejected: "Ungültiges Format. Nur Bilddateien erlaubt.",
    },
  },
}

export const stepSix = {
  de: {
    text6:
      "<b>Haben Sie juristische oder andere Maßnahmen gesetzt?</b> Bitte auswählen:",
    optionName: "jurid",
    options: [
      {
        text: "<b>Ja, juristische</b> Maßnahmen als <b>Einzelperson</b>.",
        value: "person",
      },
      {
        text: "<b>Ja, juristische</b> Maßnahmen mit <b>Arbeitgeber*in</b>.",
        value: "employer",
      },
      {
        text: "<b>Ja, nicht-juristische</b> Maßnahmen, nämlich:",
        value: "other",
      },
      {
        text: "<b>Nein, keine</b> Maßnahmen.",
        value: "no",
      },
    ],
  },
}
export const stepSeven = {
  de: {
    text7:
      "<b>Welche Überlegungen oder Konsequenzen hat der Online-Angriff bei Ihnen ausgelöst?</b><br />Nennen Sie hier konkrete Überlegungen oder Konsequenzen (z.B. Thema gemieden, Jobwechsel überlegt, Social Media eingeschränkt):",
  },
}

export const stepEight = {
  de: {
    text8:
      "<b>Haben Sie auch Solidaritätsbekundungen (solidarische Gegenrede) wahrgenommen?</b> Bitte auswählen:",
    optionName: "solidarity",
    options: [
      {
        text: "<b>Nein</b> keine.",
        value: "no",
      },
      {
        text: "<b>Ja</b>, aber sehr wenige.",
        value: "few",
      },
      {
        text: "<b>Ja</b>, einige.",
        value: "more",
      },
      {
        text: "<b>Ja</b>, viele.",
        value: "most",
      },
    ],
  },
}
export const stepNine = {
  de: {
    text9:
      "<b>Welchem Geschlecht ordnen Sie sich zu?</b> Bitte Zutreffendes anklicken:",
    optionName: "gender",
    options: [
      {
        text: "Weiblich",
        value: "female",
      },
      {
        text: "Männlich",
        value: "male",
      },
      {
        text: "Transident",
        value: "trans",
      },
      {
        text: "Intersexuell",
        value: "inter",
      },
      {
        text: "*",
        value: "other",
      },
    ],
  },
}

export const stepTen = {
  de: {
    text10: "<b>Für welches Medium sind Sie journalistisch tätig?</b>",
  },
}
export const stepEleven = {
  de: {
    text11:
      "<b>Was soll zum Thema Online-Angriffe auf Journalist*innen noch gemacht werden?</b><br />Bitte notieren Sie hier konkrete Vorschläge.",
  },
}
export const stepTwelve = {
  de: {
    text12: "Hier ist Raum für weitere <b>Beobachtungen:</b>",
  },
}
export const stepSummary = {
  de: {
    text: "<b>Zusammenfassung</b>",
  },
}
export const stepFinal = {
  de: {
    text:
      '<p><strong>Danke für das Dokumentieren Ihrer Erfahrungen.</strong> </p><p>Die Daten werden anonymisiert ausgewertet, um das Phänomen der systematischen Einschüchterung von Journalist*innen im Internet –  in Form, Ausmaß und Inhalt – öffentlich zu machen. </p><p>Der <a href="https://concordia.at/">Presseclub Concordia</a> ist ein gemeinnütziger Journalist*innenverein. Sein Ziel ist es, die Pressefreiheit zu wahren und unabhängigen, ethisch verantwortungsvollen Journalismus zu stärken.</p><p>Um über die Initiative und die Ergebnisse am Laufenden zu bleiben, abonnieren Sie bitte den Newsletter des Presseclubs Concordia: <a href="https://concordia.at/newsletter-anmeldung/">Hier anmelden</a></p><p><strong><span style="text-decoration:underline;">Die ZARA Beratungsstelle #GegenHassimNetz</span> bietet kostenlose und wenn gewünscht anonyme (Rechts-)Beratung bei Hass im Netz an.</strong> </p><p>Nehmen Sie gerne unverbindlich mit uns Kontakt auf: <a href="https://zara.or.at/de/beratung">https://zara.or.at/de/beratung</a> </p><p>oder wenden Sie sich persönlich an ZARA: 01/929 13 99-0 </p>',
  },
}
