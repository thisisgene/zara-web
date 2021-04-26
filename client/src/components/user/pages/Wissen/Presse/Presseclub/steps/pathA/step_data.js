export const stepOne = {
  text1:
    "<b>Ist der Online-Angriff eine direkte Reaktion auf einen journalistischen Beitrag von Ihnen?</b> Bitte Zutreffendes auswählen:",
  optionName: "directReaction",
  options: [
    {
      text:
        "<b>Ja</b>, der Online-Angriff ist eine direkte Reaktion auf einen Beitrag.",
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
      "<b>Bitte die URL</em (bzw. Zitation, falls online nicht verfügbar) <b>des journalistischen Beitrags hier eintragen:</b>",
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
      "<b>Bitte beschreiben Sie kurz den Kontext bzw. den möglichen Auslöser des Online-Angriffs</b><br />(z.B. Reaktion auf einen öffentlichen Auftritt oder persönliches Social Media-Posting)?",
  },
  text1B2: {
    name: "text1b2",
    text:
      "<b>Falls vorhanden, bitte URL </em(bzw. Zitation, wenn online nicht verfügbar) <b>hier eintragen:</b>",
  },
}
export const stepTwo = {
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
      text: "E-Mail",
      value: "email",
    },
    {
      text: "Anderer Kanal, nämlich:",
      value: "other",
    },
  ],
}
export const stepThree = {
  text3:
    "<b>Bitte schätzen Sie den Umfang des Online-Angriffs ein.</b> Zutreffende Einschätzung anklicken:",
  optionName: "extent",
  options: [
    {
      text:
        "Der Online-Angriff umfasst(e) <b>einen einzelnen bzw. vereinzelte</b> Nachrichten oder Kommentare.",
      value: "single",
    },
    {
      text:
        "Der Online-Angriff umfasst(e) <b>mehrere bis viele, aber noch überschaubare</b> Nachrichten oder Kommentare.",
      value: "multiple",
    },
    {
      text:
        "Der Online-Angriff umfasst(e) <b>sehr viele bis kaum überschaubare</b> Nachrichten oder Kommentare.",
      value: "many",
    },
  ],
}
export const stepFour = {
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
}

export const stepFive = {
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
        "Hass wegen nicht-weißer, ethnischer, nationaler oder religiöser Zuschreibung (Rassismus)",
      value: "racism",
    },
    {
      text: "Homo-, Bi-, Trans-, Interfeindlichkeit (Heteronormativismus)",
      value: "heteromormativism",
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
  text5b:
    "Hier ist Raum für Beispiele (Originalwortlaut samt URL) bzw. Präzisierungen:",
  text5c:
    "Bitte laden Sie beispielhafte Nachrichten, Postings oder Kommentare des Online-Angriffs als Screenshots (mit Zeitstempel*) hier hoch:",
  text5c2:
    "Zeitstempel sind notwendig, wenn Sie Screenshots als Beweis (vor Gericht) verwenden wollen.",
  text5d: "* Wie Sie einen Screenshot mit Zeitstempel erstellen, erfahren Sie",
  link: {
    text: "hier",
    url: "",
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
}
