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
