// ─────────────────────────────────────────────────────────────────────────────
// THE FOOTBALL DISPATCH — FIFA World Cup 2026
// dispatch-data.js  ·  One edition per matchday (34 editions, 104 matches)
// ─────────────────────────────────────────────────────────────────────────────

const matchdays = [

  // ── SPECIAL EDITION · Curtain-Raiser ──────────────────────────────────────
  {
    id:'md0', label:'Special Edition', date:'The Eve of the Tournament · June 2026',
    published:'June 7, 2026',
    headline:'The World Holds Its Breath',
    deck:'Three nations, sixteen cities, forty-eight teams and a single shared obsession. The largest World Cup ever staged is upon us — and for one long summer, the whole of humanity will look in the same direction.',
    matches:[
      {
        id:'m0', editorial:true, prediction:null, confidence:null,
        kicker:'The Curtain Rises',
        thoughts:'Every four years the world quietly agrees to look at the same thing. Borders soften. Strangers in distant cities roar at the very same instant, for reasons they could never explain to anyone who has not felt it. On Thursday it happens again — and this time on a scale the game has never dared. Forty-eight nations. Three host countries spanning a continent, from the Pacific fog of Vancouver to the Gulf warmth of Miami. Sixteen cities. One hundred and four matches across thirty-nine summer days. More of humanity will turn toward this tournament than has ever turned toward anything, and for one month the planet will keep a single, shared heartbeat. This is not merely a football competition. It is the largest gathering of human attention the world will ever hold.</p><p>There is a particular quiet in the days before it all begins — the held breath before the plunge. The pitches at the Azteca and MetLife and SoFi have been cut and watered and cut again. Flags hang from balconies in São Paulo and Seoul, in Lagos and Oslo and a thousand towns between. Somewhere a child is pulling on a shirt three sizes too big, dreaming of a goal that will be replayed for fifty years. Every one of the forty-eight believes, this week, that the story might be theirs — and who, tonight, can prove them wrong? By Sunday the noise will be deafening; for now there is only the sweet ache of anticipation, and the oldest question the game can ask: who, when the long summer ends in Philadelphia on the nineteenth of July, will be left standing?</p><p>It begins, as it must, with the hosts. Mexico throw open the tournament at a renovated Azteca two and a half thousand metres above the sea, a stadium that has staged a World Cup opener three times and forgiven none of its visitors the altitude; Group A asks whether Javier Aguirre\'s side can turn a roaring home night into something that lasts, with Korea and a stubborn Czechia watching closely. To the north, Canada carry Group B and a country only beginning to believe, their hopes tethered to the fitness of Alphonso Davies, while Switzerland\'s quiet machinery and a Bosnia side who buried Italy in the play-offs promise to make the opening week anything but comfortable.</p><p>Group C is the romantics\' delight: Brazil, remade under Carlo Ancelotti and still chasing the rhythm of old, beside a Morocco who stunned the world to a semi-final in Qatar and have forgotten how to be afraid, a Scotland returned at last after twenty-eight aching years, and a Haiti whose very presence is a triumph over hardship. Group D belongs to the United States and to Mauricio Pochettino, marshalling the most gifted generation American football has produced — though Türkiye\'s young artistry and a combative Paraguay will not bend politely to the host\'s plans.</p><p>In Group E a youthful Germany rebuilds in the full glare of the world, watched by an Ecuador that defends like a bolted door and a Curaçao whose qualification — the smallest nation ever to reach a World Cup, an island of fewer souls than a single host city — is a fairytale all its own. Group F gathers the Netherlands\' burnished talent, a Japan who have quietly become the most coherent footballing project in Asia, and a Sweden hungry to rediscover a golden age.</p><p>Group G sets the melancholy of Belgium\'s fading golden generation against the undimmed brilliance of Mohamed Salah\'s Egypt, with Iran\'s discipline and New Zealand\'s honest endeavour completing the field. And then Group H, where the eye lingers longest: Spain, the European champions many already call the finest team on earth, drawn beside a Uruguay reborn under Marcelo Bielsa, a Saudi Arabia who have toppled giants before, and Cape Verde, debutants nobody relishes the task of facing.</p><p>Group I carries thunder — France and Kylian Mbappé, the raw power of Senegal, and, finally and gloriously, Erling Haaland striding onto a World Cup stage as Norway\'s long exile ends. Group J is the one the heart cannot ignore, for it holds Argentina, the holders, and the near-certainty that this is Lionel Messi\'s last act upon this stage: a farewell stretched across a continent, with Algeria, Austria and Jordan written into a story the whole world will rise to watch.</p><p>Group K wonders whether Cristiano Ronaldo, too, has one last summer in his legs, his Portugal flanked by a vivid Colombia and the unknowns of DR Congo and Uzbekistan. And Group L closes the draw with England\'s perennial, tender question — whether this, at last, is their year — set beside Croatia and the long goodbye of Luka Modrić, a Ghana reborn, and a Panama who fear no name on any shirt.</p><p>Twelve groups, forty-eight stories, each convinced this is the summer it has waited a lifetime for. Some will be undone before the month is out; one, against every rival\'s hope, will climb to a height the rest cannot reach. The Dispatch will be here for all of it — every dawn kick-off and midnight drama, every upset that tears up the bracket, every goal that stops a nation\'s heart. But that is for the mornings to come. Tonight the whole world stands together on the edge of the same glorious uncertainty, waiting for a single sound. Let the first whistle blow.',
        summary:'Our verdicts will come soon enough — a score for every match, a side tipped for every round, the analysis this tournament demands. But not tonight. Tonight belongs to the anticipation alone: to the shiver that runs through anyone who loves this game when the greatest show on earth is four days away and everything, absolutely everything, remains possible. The world is watching. Let the World Cup begin.'
      },
    ]
  },

  // ── DAY 1 · Thu 11 Jun ─────────────────────────────────────────────────────
  {
    id:'md1', label:'Day 1 · Thu 11 Jun', date:'Thursday, June 11, 2026',
    published:null,
    headline:'The World Cup Opens — Mexico at the Azteca',
    deck:'The third time the Estadio Azteca hosts a World Cup opener. The first time in twenty-eight years the world holds its breath like this.',
    matches:[
      { id:'m1',  group:'A', home:'Mexico',      hf:'🇲🇽', away:'South Africa', af:'🇿🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m2',  group:'A', home:'South Korea', hf:'🇰🇷', away:'Czechia',       af:'🇨🇿', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 2 · Fri 12 Jun ─────────────────────────────────────────────────────
  {
    id:'md2', label:'Day 2 · Fri 12 Jun', date:'Friday, June 12, 2026',
    published:null,
    headline:'Canada and the USA Open on Home Soil',
    deck:'Host nations carry expectation like armour. Two of them take the field on the same evening.',
    matches:[
      { id:'m3', group:'B', home:'Canada', hf:'🇨🇦', away:'Bosnia & Herz.', af:'🇧🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m4', group:'D', home:'USA',    hf:'🇺🇸', away:'Paraguay',       af:'🇵🇾', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 3 · Sat 13 Jun ─────────────────────────────────────────────────────
  {
    id:'md3', label:'Day 3 · Sat 13 Jun', date:'Saturday, June 13, 2026',
    published:null,
    headline:'Brazil, Scotland and the Day\'s Four Battles',
    deck:'The tournament\'s first full day of football. Brazil make their entrance. Scotland return after twenty-eight years.',
    matches:[
      { id:'m8', group:'B', home:'Qatar',     hf:'🇶🇦', away:'Switzerland', af:'🇨🇭', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m7', group:'C', home:'Brazil',    hf:'🇧🇷', away:'Morocco',     af:'🇲🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m5', group:'C', home:'Haiti',     hf:'🇭🇹', away:'Scotland',    af:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m6', group:'D', home:'Australia', hf:'🇦🇺', away:'Türkiye',    af:'🇹🇷', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 4 · Sun 14 Jun ─────────────────────────────────────────────────────
  {
    id:'md4', label:'Day 4 · Sun 14 Jun', date:'Sunday, June 14, 2026',
    published:null,
    headline:'Germany and the Netherlands Lead Europe\'s Charge',
    deck:'Four matches, two heavyweight groups. Germany open against the tournament\'s most improbable qualifier.',
    matches:[
      { id:'m10', group:'E', home:'Germany',     hf:'🇩🇪', away:'Curaçao', af:'🇨🇼', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m11', group:'F', home:'Netherlands', hf:'🇳🇱', away:'Japan',   af:'🇯🇵', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m9',  group:'E', home:'Côte d\'Ivoire', hf:'🇨🇮', away:'Ecuador', af:'🇪🇨', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m12', group:'F', home:'Sweden',      hf:'🇸🇪', away:'Tunisia', af:'🇹🇳', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 5 · Mon 15 Jun ─────────────────────────────────────────────────────
  {
    id:'md5', label:'Day 5 · Mon 15 Jun', date:'Monday, June 15, 2026',
    published:null,
    headline:'Spain, Belgium and the Questions That Need Answers',
    deck:'Two of Europe\'s most technically gifted sides face their opening tests. Group G and H come to life.',
    matches:[
      { id:'m14', group:'H', home:'Spain',       hf:'🇪🇸', away:'Cabo Verde',  af:'🇨🇻', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m16', group:'G', home:'Belgium',     hf:'🇧🇪', away:'Egypt',       af:'🇪🇬', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m13', group:'H', home:'Saudi Arabia',hf:'🇸🇦', away:'Uruguay',     af:'🇺🇾', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m15', group:'G', home:'IR Iran',     hf:'🇮🇷', away:'New Zealand', af:'🇳🇿', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 6 · Tue 16 Jun ─────────────────────────────────────────────────────
  {
    id:'md6', label:'Day 6 · Tue 16 Jun', date:'Tuesday, June 16, 2026',
    published:null,
    headline:'France and Argentina Step Forward',
    deck:'The reigning champions and the defending champions both enter. The tournament changes register.',
    matches:[
      { id:'m17', group:'I', home:'France',    hf:'🇫🇷', away:'Senegal',  af:'🇸🇳', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m18', group:'I', home:'Iraq',      hf:'🇮🇶', away:'Norway',   af:'🇳🇴', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m19', group:'J', home:'Argentina', hf:'🇦🇷', away:'Algeria',  af:'🇩🇿', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m20', group:'J', home:'Austria',   hf:'🇦🇹', away:'Jordan',   af:'🇯🇴', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 7 · Wed 17 Jun ─────────────────────────────────────────────────────
  {
    id:'md7', label:'Day 7 · Wed 17 Jun', date:'Wednesday, June 17, 2026',
    published:null,
    headline:'England and Portugal Complete the Picture',
    deck:'The final four groups take the field. All forty-eight nations have now played. The tournament is whole.',
    matches:[
      { id:'m23', group:'K', home:'Portugal',   hf:'🇵🇹', away:'Congo DR',  af:'🇨🇩', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m22', group:'L', home:'England',    hf:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', away:'Croatia',   af:'🇭🇷', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m21', group:'L', home:'Ghana',      hf:'🇬🇭', away:'Panama',    af:'🇵🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m24', group:'K', home:'Uzbekistan', hf:'🇺🇿', away:'Colombia',  af:'🇨🇴', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 8 · Thu 18 Jun ─────────────────────────────────────────────────────
  {
    id:'md8', label:'Day 8 · Thu 18 Jun', date:'Thursday, June 18, 2026',
    published:null,
    headline:'The Second Round Opens — Groups A and B',
    deck:'First results inform second games. Mexico must respond. Canada cannot afford to stumble.',
    matches:[
      { id:'m25', group:'A', home:'Czechia',     hf:'🇨🇿', away:'South Africa',  af:'🇿🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m26', group:'B', home:'Switzerland', hf:'🇨🇭', away:'Bosnia & Herz.', af:'🇧🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m27', group:'B', home:'Canada',      hf:'🇨🇦', away:'Qatar',          af:'🇶🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m28', group:'A', home:'Mexico',      hf:'🇲🇽', away:'South Korea',    af:'🇰🇷', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 9 · Fri 19 Jun ─────────────────────────────────────────────────────
  {
    id:'md9', label:'Day 9 · Fri 19 Jun', date:'Friday, June 19, 2026',
    published:null,
    headline:'The Second Round — Groups C and D',
    deck:'Brazil must confirm. USA face a sterner test. Scotland and Morocco settle a group that could go anywhere.',
    matches:[
      { id:'m32', group:'D', home:'USA',      hf:'🇺🇸', away:'Australia', af:'🇦🇺', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m30', group:'C', home:'Scotland', hf:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', away:'Morocco',  af:'🇲🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m29', group:'C', home:'Brazil',   hf:'🇧🇷', away:'Haiti',    af:'🇭🇹', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m31', group:'D', home:'Türkiye', hf:'🇹🇷', away:'Paraguay', af:'🇵🇾', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 10 · Sat 20 Jun ────────────────────────────────────────────────────
  {
    id:'md10', label:'Day 10 · Sat 20 Jun', date:'Saturday, June 20, 2026',
    published:null,
    headline:'The Second Round — Groups E and F',
    deck:'Germany face their real test. Japan and Sweden push each other toward the edge.',
    matches:[
      { id:'m35', group:'F', home:'Netherlands', hf:'🇳🇱', away:'Sweden',  af:'🇸🇪', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m33', group:'E', home:'Germany',     hf:'🇩🇪', away:'Côte d\'Ivoire', af:'🇨🇮', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m34', group:'E', home:'Ecuador',     hf:'🇪🇨', away:'Curaçao', af:'🇨🇼', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m36', group:'F', home:'Tunisia',     hf:'🇹🇳', away:'Japan',   af:'🇯🇵', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 11 · Sun 21 Jun ────────────────────────────────────────────────────
  {
    id:'md11', label:'Day 11 · Sun 21 Jun', date:'Sunday, June 21, 2026',
    published:null,
    headline:'The Second Round — Groups G and H',
    deck:'Spain must press the accelerator. Belgium face a first real examination. Group H remains wide open.',
    matches:[
      { id:'m38', group:'H', home:'Spain',       hf:'🇪🇸', away:'Saudi Arabia', af:'🇸🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m39', group:'G', home:'Belgium',     hf:'🇧🇪', away:'IR Iran',      af:'🇮🇷', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m37', group:'H', home:'Uruguay',     hf:'🇺🇾', away:'Cabo Verde',   af:'🇨🇻', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m40', group:'G', home:'New Zealand', hf:'🇳🇿', away:'Egypt',        af:'🇪🇬', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 12 · Mon 22 Jun ────────────────────────────────────────────────────
  {
    id:'md12', label:'Day 12 · Mon 22 Jun', date:'Monday, June 22, 2026',
    published:null,
    headline:'The Second Round — Groups I and J',
    deck:'France and Argentina enter their second games as tournament favourites. The pressure of expectation is its own opponent.',
    matches:[
      { id:'m43', group:'J', home:'Argentina', hf:'🇦🇷', away:'Austria',  af:'🇦🇹', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m42', group:'I', home:'France',    hf:'🇫🇷', away:'Iraq',     af:'🇮🇶', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m41', group:'I', home:'Norway',    hf:'🇳🇴', away:'Senegal',  af:'🇸🇳', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m44', group:'J', home:'Jordan',    hf:'🇯🇴', away:'Algeria',  af:'🇩🇿', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 13 · Tue 23 Jun ────────────────────────────────────────────────────
  {
    id:'md13', label:'Day 13 · Tue 23 Jun', date:'Tuesday, June 23, 2026',
    published:null,
    headline:'The Second Round — Groups K and L',
    deck:'England and Portugal take their second steps. One stumble now and the group stage becomes a crisis.',
    matches:[
      { id:'m47', group:'K', home:'Portugal',   hf:'🇵🇹', away:'Uzbekistan', af:'🇺🇿', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m45', group:'L', home:'England',    hf:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', away:'Ghana',     af:'🇬🇭', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m46', group:'L', home:'Panama',     hf:'🇵🇦', away:'Croatia',    af:'🇭🇷', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m48', group:'K', home:'Colombia',   hf:'🇨🇴', away:'Congo DR',   af:'🇨🇩', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 14 · Wed 24 Jun ────────────────────────────────────────────────────
  {
    id:'md14', label:'Day 14 · Wed 24 Jun', date:'Wednesday, June 24, 2026',
    published:null,
    headline:'The Reckoning — Groups A, B and C',
    deck:'Simultaneous kick-offs. No hiding. Six matches settle three groups. Mexico, Scotland and Bosnia play for their tournament lives.',
    matches:[
      { id:'m51', group:'B', home:'Switzerland',   hf:'🇨🇭', away:'Canada',      af:'🇨🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m52', group:'B', home:'Bosnia & Herz.', hf:'🇧🇦', away:'Qatar',      af:'🇶🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m49', group:'C', home:'Scotland',      hf:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', away:'Brazil',    af:'🇧🇷', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m50', group:'C', home:'Morocco',       hf:'🇲🇦', away:'Haiti',       af:'🇭🇹', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m53', group:'A', home:'Czechia',       hf:'🇨🇿', away:'Mexico',      af:'🇲🇽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m54', group:'A', home:'South Africa',  hf:'🇿🇦', away:'South Korea', af:'🇰🇷', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 15 · Thu 25 Jun ────────────────────────────────────────────────────
  {
    id:'md15', label:'Day 15 · Thu 25 Jun', date:'Thursday, June 25, 2026',
    published:null,
    headline:'The Reckoning — Groups D, E and F',
    deck:'Germany must confirm top spot. USA face their toughest test yet. Japan and the Netherlands settle a genuinely open group.',
    matches:[
      { id:'m55', group:'E', home:'Curaçao',    hf:'🇨🇼', away:'Côte d\'Ivoire', af:'🇨🇮', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m56', group:'E', home:'Ecuador',    hf:'🇪🇨', away:'Germany',         af:'🇩🇪', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m57', group:'F', home:'Japan',      hf:'🇯🇵', away:'Sweden',          af:'🇸🇪', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m58', group:'F', home:'Tunisia',    hf:'🇹🇳', away:'Netherlands',     af:'🇳🇱', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m59', group:'D', home:'Türkiye',   hf:'🇹🇷', away:'USA',             af:'🇺🇸', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m60', group:'D', home:'Paraguay',   hf:'🇵🇾', away:'Australia',       af:'🇦🇺', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 16 · Fri 26 Jun ────────────────────────────────────────────────────
  {
    id:'md16', label:'Day 16 · Fri 26 Jun', date:'Friday, June 26, 2026',
    published:null,
    headline:'The Reckoning — Groups G, H and I',
    deck:'Spain and Uruguay collide in a match that may define both campaigns. France face Norway in a test they cannot take lightly.',
    matches:[
      { id:'m61', group:'I', home:'Norway',      hf:'🇳🇴', away:'France',       af:'🇫🇷', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m62', group:'I', home:'Senegal',     hf:'🇸🇳', away:'Iraq',         af:'🇮🇶', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m65', group:'H', home:'Cabo Verde',  hf:'🇨🇻', away:'Saudi Arabia', af:'🇸🇦', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m66', group:'H', home:'Uruguay',     hf:'🇺🇾', away:'Spain',        af:'🇪🇸', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m63', group:'G', home:'Egypt',       hf:'🇪🇬', away:'IR Iran',      af:'🇮🇷', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m64', group:'G', home:'New Zealand', hf:'🇳🇿', away:'Belgium',      af:'🇧🇪', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 17 · Sat 27 Jun ────────────────────────────────────────────────────
  {
    id:'md17', label:'Day 17 · Sat 27 Jun', date:'Saturday, June 27, 2026',
    published:null,
    headline:'The Reckoning — Groups J, K and L',
    deck:'Argentina close out. Portugal confirm. England must not stumble at the final group stage hurdle.',
    matches:[
      { id:'m67', group:'L', home:'Panama',   hf:'🇵🇦', away:'England',    af:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m68', group:'L', home:'Croatia',  hf:'🇭🇷', away:'Ghana',      af:'🇬🇭', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m71', group:'K', home:'Colombia', hf:'🇨🇴', away:'Portugal',   af:'🇵🇹', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m72', group:'K', home:'Congo DR', hf:'🇨🇩', away:'Uzbekistan', af:'🇺🇿', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m69', group:'J', home:'Algeria',  hf:'🇩🇿', away:'Austria',    af:'🇦🇹', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m70', group:'J', home:'Jordan',   hf:'🇯🇴', away:'Argentina',  af:'🇦🇷', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 18 · Sun 28 Jun ────────────────────────────────────────────────────
  {
    id:'md18', label:'Day 18 · Sun 28 Jun', date:'Sunday, June 28, 2026',
    published:null,
    headline:'A New World Cup Begins — Round of 32',
    deck:'For the first time in the tournament\'s history, 32 nations enter a knockout round. The group stage is over. Everything that follows is sudden death.',
    matches:[
      { id:'m73', group:'Round of 32', home:'2nd · Group A', hf:'⚽', away:'2nd · Group B', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 19 · Mon 29 Jun ────────────────────────────────────────────────────
  {
    id:'md19', label:'Day 19 · Mon 29 Jun', date:'Monday, June 29, 2026',
    published:null,
    headline:'Round of 32 — Three More Decide',
    deck:'The bracket expands. Three matches, three nations eliminated before the week is out.',
    matches:[
      { id:'m76', group:'Round of 32', home:'1st · Group C',  hf:'⚽', away:'2nd · Group F',          af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m74', group:'Round of 32', home:'1st · Group E',  hf:'⚽', away:'Best 3rd · A/B/C/D/F',   af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m75', group:'Round of 32', home:'1st · Group F',  hf:'⚽', away:'2nd · Group C',           af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 20 · Tue 30 Jun ────────────────────────────────────────────────────
  {
    id:'md20', label:'Day 20 · Tue 30 Jun', date:'Tuesday, June 30, 2026',
    published:null,
    headline:'Round of 32 — The Bracket Fills',
    deck:'The third day of knockout football. Six teams have already departed. Three more will follow.',
    matches:[
      { id:'m78', group:'Round of 32', home:'2nd · Group E',  hf:'⚽', away:'2nd · Group I',           af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m77', group:'Round of 32', home:'1st · Group I',  hf:'⚽', away:'Best 3rd · C/D/F/G/H',    af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m79', group:'Round of 32', home:'1st · Group A',  hf:'⚽', away:'Best 3rd · C/E/F/H/I',    af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 21 · Wed 1 Jul ─────────────────────────────────────────────────────
  {
    id:'md21', label:'Day 21 · Wed 1 Jul', date:'Wednesday, July 1, 2026',
    published:null,
    headline:'Round of 32 — Halfway Through the Bracket',
    deck:'Three more knockout matches. The Round of 16 picture is almost complete.',
    matches:[
      { id:'m80', group:'Round of 32', home:'1st · Group L',  hf:'⚽', away:'Best 3rd · E/H/I/J/K',   af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m82', group:'Round of 32', home:'1st · Group G',  hf:'⚽', away:'Best 3rd · A/E/H/I/J',   af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m81', group:'Round of 32', home:'1st · Group D',  hf:'⚽', away:'Best 3rd · B/E/F/I/J',   af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 22 · Thu 2 Jul ─────────────────────────────────────────────────────
  {
    id:'md22', label:'Day 22 · Thu 2 Jul', date:'Thursday, July 2, 2026',
    published:null,
    headline:'Round of 32 — Five Spots Remain',
    deck:'The round of 32 nears its end. Three matches, three more places in the last sixteen.',
    matches:[
      { id:'m84', group:'Round of 32', home:'1st · Group H',  hf:'⚽', away:'2nd · Group J',           af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m83', group:'Round of 32', home:'2nd · Group K',  hf:'⚽', away:'2nd · Group L',            af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m85', group:'Round of 32', home:'1st · Group B',  hf:'⚽', away:'Best 3rd · E/F/G/I/J',    af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 23 · Fri 3 Jul ─────────────────────────────────────────────────────
  {
    id:'md23', label:'Day 23 · Fri 3 Jul', date:'Friday, July 3, 2026',
    published:null,
    headline:'Round of 32 — The Final Three',
    deck:'The last three places in the Round of 16 are decided. Thirty-two become sixteen.',
    matches:[
      { id:'m88', group:'Round of 32', home:'2nd · Group D',  hf:'⚽', away:'2nd · Group G',           af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m86', group:'Round of 32', home:'1st · Group J',  hf:'⚽', away:'2nd · Group H',            af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m87', group:'Round of 32', home:'1st · Group K',  hf:'⚽', away:'Best 3rd · D/E/I/J/L',    af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 24 · Sat 4 Jul ─────────────────────────────────────────────────────
  {
    id:'md24', label:'Day 24 · Sat 4 Jul', date:'Saturday, July 4, 2026',
    published:null,
    headline:'The Round of 16 Opens',
    deck:'Sixteen remain. Every match is now an elimination. Two nations will go home today.',
    matches:[
      { id:'m90', group:'Round of 16', home:'W Match 73', hf:'⚽', away:'W Match 75', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m89', group:'Round of 16', home:'W Match 74', hf:'⚽', away:'W Match 77', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 25 · Sun 5 Jul ─────────────────────────────────────────────────────
  {
    id:'md25', label:'Day 25 · Sun 5 Jul', date:'Sunday, July 5, 2026',
    published:null,
    headline:'Round of 16 — Day Two',
    deck:'Four quarter-finalists have been confirmed. The bracket tightens with every passing match.',
    matches:[
      { id:'m91', group:'Round of 16', home:'W Match 76', hf:'⚽', away:'W Match 78', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m92', group:'Round of 16', home:'W Match 79', hf:'⚽', away:'W Match 80', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 26 · Mon 6 Jul ─────────────────────────────────────────────────────
  {
    id:'md26', label:'Day 26 · Mon 6 Jul', date:'Monday, July 6, 2026',
    published:null,
    headline:'Round of 16 — The Last Eight Take Shape',
    deck:'Six quarter-finalists confirmed, two places remain. The tournament\'s best teams are still standing.',
    matches:[
      { id:'m93', group:'Round of 16', home:'W Match 83', hf:'⚽', away:'W Match 84', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m94', group:'Round of 16', home:'W Match 81', hf:'⚽', away:'W Match 82', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 27 · Tue 7 Jul ─────────────────────────────────────────────────────
  {
    id:'md27', label:'Day 27 · Tue 7 Jul', date:'Tuesday, July 7, 2026',
    published:null,
    headline:'Round of 16 — Quarter-Finalists Complete',
    deck:'The final two places in the quarter-finals are decided. Eight nations remain. The tournament enters its final act.',
    matches:[
      { id:'m95', group:'Round of 16', home:'W Match 86', hf:'⚽', away:'W Match 88', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m96', group:'Round of 16', home:'W Match 85', hf:'⚽', away:'W Match 87', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 28 · Thu 9 Jul ─────────────────────────────────────────────────────
  {
    id:'md28', label:'Day 28 · Thu 9 Jul', date:'Thursday, July 9, 2026',
    published:null,
    headline:'The Quarter-Finals Begin',
    deck:'From forty-eight, only eight. One quarter-final, one step from the final four.',
    matches:[
      { id:'m97', group:'Quarter-final', home:'W Match 89', hf:'⚽', away:'W Match 90', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 29 · Fri 10 Jul ────────────────────────────────────────────────────
  {
    id:'md29', label:'Day 29 · Fri 10 Jul', date:'Friday, July 10, 2026',
    published:null,
    headline:'Quarter-Finals — Second Match',
    deck:'A second semi-final place is up for grabs. The tournament\'s momentum belongs entirely to whoever wins here.',
    matches:[
      { id:'m98', group:'Quarter-final', home:'W Match 93', hf:'⚽', away:'W Match 94', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 30 · Sat 11 Jul ────────────────────────────────────────────────────
  {
    id:'md30', label:'Day 30 · Sat 11 Jul', date:'Saturday, July 11, 2026',
    published:null,
    headline:'Quarter-Finals — The Final Four Are Almost Decided',
    deck:'Two matches to settle the last two semi-final spots. The greatest show in football narrows to its closing chapters.',
    matches:[
      { id:'m99',  group:'Quarter-final', home:'W Match 91', hf:'⚽', away:'W Match 92', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
      { id:'m100', group:'Quarter-final', home:'W Match 95', hf:'⚽', away:'W Match 96', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 31 · Tue 14 Jul ────────────────────────────────────────────────────
  {
    id:'md31', label:'Day 31 · Tue 14 Jul', date:'Tuesday, July 14, 2026',
    published:null,
    headline:'The Semi-Finals — First Match',
    deck:'One win from Philadelphia. One loss from the consolation prize. The semi-final is football distilled to its most brutal arithmetic.',
    matches:[
      { id:'m101', group:'Semi-final', home:'W Match 97', hf:'⚽', away:'W Match 98', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 32 · Wed 15 Jul ────────────────────────────────────────────────────
  {
    id:'md32', label:'Day 32 · Wed 15 Jul', date:'Wednesday, July 15, 2026',
    published:null,
    headline:'The Semi-Finals — The Final Finalists Decided',
    deck:'Two nations will contest the World Cup Final. Two nations will play for bronze. Both outcomes matter enormously.',
    matches:[
      { id:'m102', group:'Semi-final', home:'W Match 99', hf:'⚽', away:'W Match 100', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 33 · Sat 18 Jul ────────────────────────────────────────────────────
  {
    id:'md33', label:'Day 33 · Sat 18 Jul', date:'Saturday, July 18, 2026',
    published:null,
    headline:'The Bronze Final — Third Place Decided',
    deck:'Two teams who came so close. Pride, legacy, and a medal still worth winning.',
    matches:[
      { id:'m103', group:'Bronze Final', home:'L Match 101', hf:'⚽', away:'L Match 102', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

  // ── DAY 34 · Sun 19 Jul ────────────────────────────────────────────────────
  {
    id:'md34', label:'Day 34 · Sun 19 Jul', date:'Sunday, July 19, 2026',
    published:null,
    headline:'The Final — Philadelphia',
    deck:'One hundred and four matches. Forty-eight nations. One trophy. The Football Dispatch files its last prediction of the tournament.',
    matches:[
      { id:'m104', group:'Final', home:'W Match 101', hf:'⚽', away:'W Match 102', af:'⚽', prediction:null, confidence:null, thoughts:null, summary:null },
    ]
  },

];
