export const stepOne = {
  de: {
    text:
      '<b>Auf welche Art und Weise wurden Sie im öffentlichen Raum angegriffen?</b> Mehrfachauswahl möglich:',
    optionName: 'platform',
    options: [
      {
        text: 'Verbal (z.B. beschimpfen, bedrohen)',
        value: 'verbal',
      },
      {
        text: 'Körperlich (z.B. bespucken, rempeln)',
        value: 'physical',
      },
      {
        text:
          '(Versuch der) Sachbeschädigung (z.B. Angriff auf die Ausrüstung)',
        value: 'damage',
      },
      {
        text: 'Andere Art und Weise, nämlich:',
        value: 'other',
      },
    ],
  },
}
export const stepTwo = {
  de: {
    text: '<b>Wo hat der Angriff stattgefunden?</b>',
  },
}
export const stepThree = {
  de: {
    text: '<b>Bitte die angreifende(n) Person(en) kurz beschreiben:</b>',
  },
}
export const stepFour = {
  de: {
    text:
      '<b>Bitte schildern Sie hier in wenigen Worten den Kontext bzw. den möglichen Auslöser des Angriffs:</b>',
  },
}
export const stepFive = {
  de: {
    text: '<b>Für welches Medium sind sie journalistisch tätig?</b>',
  },
}
export const stepSix = {
  de: {
    text:
      '<b>Falls es dazu Foto- oder Videomaterial gibt, können Sie das bitte hier hochladen:</b>',
    droptext: 'Bilder hier hochladen.',
    errorText: {
      maxFileCount: 'Maximal 10 Dateien',
      maxFileCountLong:
        'Limit erreicht! Es dürfen maximal nur 10 Dateien auf einmal gesendet werden.',
      fileTooLarge: 'Datei ist zu groß. Maximal 10 MB.',
      fileAccepted: 'Akzeptiert:',
      fileRejected: 'abgelehnt:',
      fileFormatAccepted: 'Gültiges Format.',
      fileFormatRejected: 'Ungültiges Format. Nur Bilddateien erlaubt.',
    },
  },
}

export const stepSeven = {
  de: {
    text:
      '<b>Haben Sie im Zusammenhang mit dem Angriff Rassismus wahrgenommen?</b>',
    optionName: 'racism',
    options: [
      {
        text: 'Ja',
        value: 'yes',
      },
      {
        text: 'Nein',
        value: 'no',
      },
    ],
    textb: '<b>Raum für nähere Ausführungen:</b>',
  },
}
export const stepEight = {
  de: {
    text:
      '<b>Im Fall von anwesenden Zeug*innen: gab es Unterstützung durch diese?</b>',
    optionName: 'witness',
    options: [
      {
        text: 'Ja',
        value: 'yes',
      },
      {
        text: 'Nein',
        value: 'no',
      },
    ],
  },
}

export const stepNine = {
  de: {
    text:
      '<b>Haben Sie juristische oder andere Maßnahmen gesetzt?</b> Bitte auswählen:',
    optionName: 'jurid',
    options: [
      {
        text:
          '<b>Ja, juristische</b> Maßnahmen als <b>Einzelperson</b>, nämlich:',
        value: 'person',
      },
      {
        text:
          '<b>Ja, juristische</b> Maßnahmen mit <b>Arbeitgeber*in</b>, nämlich:',
        value: 'employer',
      },
      {
        text: '<b>Ja, nicht-juristische</b> Maßnahmen, nämlich:',
        value: 'other',
      },
      {
        text: '<b>Nein, keine</b> Maßnahmen, weil:',
        value: 'no',
      },
    ],
  },
}
export const stepTen = {
  de: {
    text:
      '<b>Welche Überlegungen oder Konsequenzen hat der Angriff bei Ihnen ausgelöst?</b><br />Nennen Sie hier konkrete Überlegungen oder Konsequenzen (z.B. Thema gemieden, Jobwechsel überlegt, Social Media eingeschränkt):',
  },
}

export const stepEleven = {
  de: {
    text:
      '<b>Wurden Sie im Zuge ihrer journalistischen Tätigkeit auch schon online angegriffen?</b> Bitte auswählen:',
    optionName: 'online',
    options: [
      {
        text: 'Ja',
        value: 'yes',
      },
      {
        text: 'Nein',
        value: 'no',
      },
    ],
  },
}
export const stepTwelve = {
  de: {
    text:
      '<b>Welchem Geschlecht ordnen Sie sich zu?</b> Bitte Zutreffendes anklicken:',
    optionName: 'gender',
    options: [
      {
        text: 'Weiblich',
        value: 'female',
      },
      {
        text: 'Männlich',
        value: 'male',
      },
      {
        text: 'Transident',
        value: 'trans',
      },
      {
        text: 'Intersexuell',
        value: 'inter',
      },
      {
        text: '*',
        value: 'other',
      },
    ],
  },
}

export const stepThirteen = {
  de: {
    text:
      '<b>Was soll zum Thema Angriffe auf Journalist*innen noch gemacht werden?</b><br />Bitte notieren Sie hier konkrete Vorschläge.',
  },
}
export const stepFourteen = {
  de: {
    text: 'Hier ist Raum für weitere <b>Beobachtungen:</b>',
  },
}
export const stepSummary = {
  de: {
    text: '<b>Zusammenfassung</b>',
  },
}
export const stepFinal = {
  de: {
    text:
      '<p><strong>Danke für das Dokumentieren Ihrer Erfahrungen.</strong></p><p>Die Daten werden anonymisiert ausgewertet, um das Phänomen der systematischen Einschüchterung von Journalist*innen öffentlich zu machen. </p><p>Der <a href="https://concordia.at/">Presseclub Concordia</a> ist ein gemeinnütziger Journalist*innenverein. Sein Ziel ist es, die Pressefreiheit zu wahren und unabhängigen, ethisch verantwortungsvollen Journalismus zu stärken. Wenn Sie Journalist*in sind und Mitglied werden wollen, informieren Sie sich auf der <a href="https://concordia.at/mitgliedschaft/">Concordia-Website</a>.</p><p>Um über die Initiative und die Ergebnisse am Laufenden zu bleiben, abonnieren Sie bitte den Newsletter des Presseclubs Concordia: <a href="https://concordia.at/newsletter-anmeldung/">Hier anmelden</a></p>',
  },
}
