// ─────────────────────────────────────────────────────────────────────────────
// THE FOOTBALL DISPATCH — FIFA World Cup 2026
// dispatch-data.js
//
// THIS IS THE ONLY FILE THAT CHANGES EACH MATCHDAY.
// Updated by Claude before every edition. Do not edit manually.
//
// Structure per matchday:
//   id        — unique identifier (md1, md2 …)
//   label     — display name (Matchday I, II …)
//   date      — fixture dates as a string
//   published — publish/update stamp shown in the byline (null = not yet filed)
//   headline  — editorial headline for this edition
//   deck      — italic subheading beneath the headline
//   matches   — array of match objects (see below)
//
// Structure per match:
//   id         — unique identifier (m1, m2 …)
//   group      — group letter (A–L)
//   home/away  — team names
//   hf/af      — flag emoji
//   prediction — [homeGoals, awayGoals] or null if not yet filed
//   confidence — 'high' | 'med' | 'low' | null
//   thoughts   — narrative analysis paragraph (string or null)
//   summary    — verdict/closing paragraph (string or null)
// ─────────────────────────────────────────────────────────────────────────────

const matchdays = [
  {
    id:'md1', label:'Matchday I', date:'June 11–13, 2026',
    published: 'June 5, 2026 — Updated June 11, 2026',
    headline:'The World Cup Opens',
    deck:'Forty-eight nations. One Azteca. Three days that will separate the contenders from the hopeful — and send the first teams tumbling toward elimination.',
    matches:[
      {
        id:'m1', group:'A', home:'Mexico', hf:'🇲🇽', away:'South Africa', af:'🇿🇦',
        prediction:[2,0], confidence:'high',
        thoughts:'The Estadio Azteca, freshly renovated and roaring at 2,250 metres above sea level, hosts a World Cup opener for the third time in its storied history — a privilege no other stadium on earth can claim. Mexico arrive under Javier Aguirre, now in his third stint as El Tri manager, carrying back-to-back CONCACAF titles and the weight of a nation desperate to erase the humiliation of their group-stage exit in Qatar. Raúl Jiménez, 34 years old and still the heartbeat of the attack with 125 international caps, leads the line. South Africa have not appeared at a World Cup since 2010, when Tshabalala\'s thunderous opener in their own backyard produced one of the tournament\'s most iconic moments. Bafana Bafana are tactically organised under Hugo Broos, and young Orlando Pirates forward Relebohile Mofokeng carries genuine threat on the counter. But the altitude edge is Mexico\'s to exploit, and it is an edge worth several goals across ninety minutes of sustained pressure.',
        summary:'South Africa will defend deep and try to frustrate, but the combination of the Azteca crowd, the altitude disadvantage for visitors, and Mexico\'s superior quality across the pitch makes a comfortable home win the likeliest outcome. Seven of the last ten World Cup openers have finished under 2.5 goals, but this is a Mexican side with something to prove. Two goals, no reply.'
      },
      {
        id:'m2', group:'A', home:'South Korea', hf:'🇰🇷', away:'Czechia', af:'🇨🇿',
        prediction:[1,1], confidence:'med',
        thoughts:'Two sides of near-identical quality, separated in the FIFA rankings by fewer than a dozen places, kicking off the same night as the tournament\'s grand opening in Guadalajara. South Korea possess genuine individual brilliance — Lee Kang-in, Champions League regular at PSG, is the most dangerous player on the pitch. Their forward lines are quick and technically adept. Czechia carry a different kind of confidence: they eliminated Italy on penalties in the play-offs, a result that announced their arrival at this tournament loudly. Antonín Barák and Lukáš Provod give them creativity in midfield, and they defend with organisation and intensity.',
        summary:'This carries every hallmark of a cautious, mutually respectful opening match between two sides acutely aware of the group stage arithmetic. Korea will create the better chances but Czechia\'s resilience is not to be underestimated. A draw, hard-fought and tight, feels the most honest prediction.'
      },
      {
        id:'m3', group:'B', home:'Canada', hf:'🇨🇦', away:'Bosnia & Herz.', af:'🇧🇦',
        prediction:[1,1], confidence:'med',
        thoughts:'The news that changes this prediction landed in the days before kick-off: Alphonso Davies, Canada\'s most dangerous weapon and one of the tournament\'s most recognisable names, is a doubt with a left hamstring concern. He did not feature in Canada\'s June 1 warm-up win over Uzbekistan and was non-committal about his readiness when pressed by reporters. Without Davies bombing forward from left back, Canada lose their most reliable route to goal and their primary source of chaos against organised defences. Bosnia, who spectacularly eliminated Italy in the play-offs, arrive as genuine believers. A generation without Džeko must now stand on its own.',
        summary:'Davies\' fitness doubt is the central question of this match. If he does not start, Canada are a measurably less threatening side. Bosnia are disciplined and hard to break down. Home advantage in Toronto matters, but without their talisman at full power, a draw is a more honest reflection of the likely contest than an outright Canadian victory.'
      },
      {
        id:'m4', group:'D', home:'USA', hf:'🇺🇸', away:'Paraguay', af:'🇵🇾',
        prediction:[2,0], confidence:'high',
        thoughts:'Mauricio Pochettino\'s United States open at SoFi Stadium in Los Angeles before a sold-out crowd of over 70,000 and the full weight of host-nation expectation. The squad is the most technically accomplished in American football history: Pulisic at his peak, Reyna finding consistency, Musah controlling the tempo from deep. The majority of the starting eleven play in Europe\'s top five leagues week in, week out. Paraguay, ranked 44th by FIFA, are organised under Daniel Garnero and combative in structure, but they arrive having shipped four goals in their final pre-tournament warm-up and without the individual quality to live with the USA on a charged night in LA.',
        summary:'The USA need a statement to open their campaign and this is precisely the fixture in which to make it. Pochettino will demand high pressing, early intensity, and a clear scoreline by the hour mark. Paraguay\'s best hope is to disrupt tempo and frustrate — they will not manage it. Two goals, clean sheet, the campaign begins in earnest.'
      },
      {
        id:'m5', group:'B', home:'Qatar', hf:'🇶🇦', away:'Switzerland', af:'🇨🇭',
        prediction:[0,2], confidence:'high',
        thoughts:'Qatar\'s 2022 home World Cup was the most sobering of lessons — they became the first host nation in tournament history to be eliminated in the group stage without registering a single point. Four years have passed, and while their domestic league has improved, the structural gap between Qatar and a well-organised European side remains vast. Switzerland arrive as one of the most reliable teams in international football: methodical, technically sound, and lethal against opponents who invite pressure. Granit Xhaka brings authority and range to their midfield; Breel Embolo leads the line with physicality and movement.',
        summary:'Qatar will park the bus, defend deep, and hope for the chaos of a set-piece equaliser. Switzerland have the patience to pick them apart. This is a professional, comfortable Swiss win — the kind of disciplined, unspectacular performance that earns points without producing headlines. Two goals and a clean sheet.'
      },
      {
        id:'m6', group:'C', home:'Brazil', hf:'🇧🇷', away:'Morocco', af:'🇲🇦',
        prediction:[1,1], confidence:'low',
        thoughts:'This was already the most intriguing match of the opening weekend. Then the injury news arrived. Neymar, who returned to the Brazilian national team fold after years of absence, is now a serious doubt for this match after a right calf issue sustained on May 17 left him sidelined for up to three weeks. Morocco, meanwhile, must contend with the absence of Hamza Igamane — the Lille forward who had emerged as one of their most dangerous attacking threats — after he suffered an ACL injury. Both squads arrive diminished. Carlo Ancelotti\'s Brazil still carry Vinícius Júnior and Raphinha, two of the finest forwards on the planet. But Estêvão and Rodrygo are also unavailable, leaving the attacking depth thinner than Ancelotti would want. Morocco remain Africa Cup of Nations champions and Achraf Hakimi remains one of the best right backs alive.',
        summary:'Two injury-hit squads meeting at MetLife Stadium in a game that neither can afford to lose and both may be reluctant to win recklessly. The caution bred by absent key players, the mutual respect between these sides, and Morocco\'s exceptional defensive record at tournaments all point toward a tight, tense affair. A draw feels true.'
      },
      {
        id:'m7', group:'C', home:'Haiti', hf:'🇭🇹', away:'Scotland', af:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        prediction:[0,2], confidence:'high',
        thoughts:'Scotland have waited twenty-eight years for this moment — their first World Cup since France 1998 — and they open in Boston against the tournament\'s most improbable qualifiers. Haiti\'s presence here is genuinely remarkable; a nation that has overcome extraordinary hardship to field a football team at the greatest show on earth deserves every word of admiration. But admiration and competitive football are different things entirely. Scotland, under Steve Clarke, bring Scott McTominay\'s goals and late runs from midfield, Andy Robertson\'s relentless energy down the left, and a collective defensive shape hardened by qualifying campaigns against quality European opposition. Haiti have never won a World Cup match.',
        summary:'Scotland should be disciplined, professional, and effective. Clarke will demand a clean sheet first and allow the goals to follow from set-pieces and McTominay\'s surging runs. Haiti will defend with everything they have, but the quality gap is clear. Scotland open with a composed, convincing victory — and the nation exhales after twenty-eight years.'
      },
    ]
  },

  {
    id:'md2', label:'Matchday II', date:'June 14–16, 2026',
    published: null,
    headline:'Europe\'s Giants Enter the Fray',
    deck:'France, England, Belgium and Germany make their opening statements on the world stage.',
    matches:[
      { id:'m8',  group:'D', home:'Australia', hf:'🇦🇺', away:'Türkiye',  af:'🇹🇷', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m9',  group:'E', home:'Germany',   hf:'🇩🇪', away:'Curaçao',  af:'🇨🇼', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m10', group:'G', home:'Belgium',   hf:'🇧🇪', away:'Egypt',    af:'🇪🇬', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m11', group:'I', home:'France',    hf:'🇫🇷', away:'Senegal',  af:'🇸🇳', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m12', group:'L', home:'England',   hf:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', away:'Croatia',  af:'🇭🇷', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  {
    id:'md3', label:'Matchday III', date:'June 17–20, 2026',
    published: null,
    headline:'The Weight of Legacy',
    deck:'Argentina and Portugal open their campaigns. History watches from the stands.',
    matches:[
      { id:'m13', group:'J', home:'Argentina', hf:'🇦🇷', away:'Algeria',   af:'🇩🇿', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m14', group:'F', home:'Spain',     hf:'🇪🇸', away:'Cape Verde', af:'🇨🇻', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m15', group:'K', home:'Portugal',  hf:'🇵🇹', away:'DR Congo',  af:'🇨🇩', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  {
    id:'md4', label:'Matchday IV', date:'June 21–24, 2026',
    published: null,
    headline:'Second Rounds, Rising Stakes',
    deck:'The group stage tightens. Every point now carries the weight of a nation.',
    matches:[]
  },

  {
    id:'md5', label:'Matchday V', date:'June 25–27, 2026',
    published: null,
    headline:'The Final Reckoning',
    deck:'Thirty-two teams survive. Sixteen do not. The group stage ends without mercy.',
    matches:[]
  },
];
