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
        thoughts:'Every four years the world quietly agrees to look at the same thing. Borders soften. Strangers in distant cities roar at the very same instant, for reasons they could never explain to anyone who has not felt it. On Thursday it happens again — and this time on a scale the game has never dared. Forty-eight nations. Three host countries spanning a continent, from the Pacific fog of Vancouver to the Gulf warmth of Miami. Sixteen cities. One hundred and four matches across thirty-nine summer days. More of humanity will turn toward this tournament than has ever turned toward anything, and for one month the planet will keep a single, shared heartbeat. This is not merely a football competition. It is the largest gathering of human attention the world will ever hold.</p><p>There is a particular quiet in the days before it all begins — the held breath before the plunge. The pitches at the Azteca and MetLife and SoFi have been cut and watered and cut again. Flags hang from balconies in São Paulo and Seoul, in Lagos and Oslo and a thousand towns between. Somewhere a child is pulling on a shirt three sizes too big, dreaming of a goal that will be replayed for fifty years. Every one of the forty-eight believes, this week, that the story might be theirs — and who, tonight, can prove them wrong? By Sunday the noise will be deafening; for now there is only the sweet ache of anticipation. Let us walk, then, through the twelve groups that will shape the summer.</p><p><strong>Group A</strong> opens the whole adventure beneath the thin air of the Mexican plateau. Mexico, under the vastly experienced Javier Aguirre, carry the weight of a host nation that aches to reach the knockout rounds on home soil; the altitude of the capital is a twelfth man few visitors ever tame, and in Raúl Jiménez they have a focal point who knows these nights intimately. South Africa return for the first time since they hosted in 2010, organised and youthful under Hugo Broos; Korea Republic lean on the elegance of Son Heung-min and the rising menace of Lee Kang-in; and a flinty Czechia will trust their structure to frustrate. Mexico should advance — but second place is genuinely open.</p><p><strong>Group B</strong> may be the host region\'s quietest stage and yet it brims with intrigue. Canada, roared on across Toronto and Vancouver, are a different team when Alphonso Davies is flying and a more ordinary one when he is not; his fitness is the group\'s great variable. Switzerland are the very model of tournament reliability, Granit Xhaka conducting from deep, and will quietly fancy top spot. Bosnia, who eliminated Italy in the play-offs, believe they belong; Qatar, chastened by a wretched home World Cup in 2022, arrive as Asian champions with a point to prove.</p><p><strong>Group C</strong> is where romance and royalty collide. Brazil, rebuilt under Carlo Ancelotti and still feeling for their old rhythm, retain the most frightening attacking palette in the draw — Vinícius Júnior and Raphinha foremost among them. Morocco are nobody\'s underdog now: semi-finalists in Qatar, marshalled by Achraf Hakimi behind a defence that does not blink, they may be the most complete African side ever to reach a finals. Scotland, back after twenty-eight years of hurt, will sell their lives dearly behind Scott McTominay and Andy Robertson; Haiti\'s presence alone is a tale of defiance the neutral cannot help but cherish.</p><p><strong>Group D</strong> hands the United States their moment. Mauricio Pochettino has the most talented squad in American history — Christian Pulisic its beating heart — and a continent willing them forward; nothing short of the knockout rounds will satisfy. Türkiye are the group\'s dark thrill, the precocious Arda Güler and the metronomic Hakan Çalhanoğlu lending them a swagger beyond their ranking. Australia bring their familiar, bloody-minded resilience, and Paraguay the kind of obduracy that can strangle a careless favourite.</p><p><strong>Group E</strong> pairs a giant in transition with a champion in disguise. Germany, young and gifted, build around the dribbling genius of Jamal Musiala and the vision of Florian Wirtz, though old questions linger over their resolve. Côte d\'Ivoire arrive as reigning kings of Africa, having won the Cup of Nations on their own soil, and will not be overawed. Ecuador defend like a bolted door and break with venom; Curaçao, the smallest nation ever to grace a World Cup, are here both to be celebrated and to spoil.</p><p><strong>Group F</strong> is deeper than its billing. The Netherlands, captained by the immovable Virgil van Dijk and lit by Cody Gakpo, carry the talent to reach the final weekend. Japan have become perhaps the most coherent project in world football, fearless and quick, convinced they can travel further than any Asian side before them. And then there is Sweden, ostensibly the seeds\' afterthought, who happen to field two of Europe\'s most lethal centre-forwards in Alexander Isak and Viktor Gyökeres — a group of death dressed as a formality.</p><p><strong>Group G</strong> is shaded with melancholy and defiance. Belgium\'s golden generation gathers, perhaps, for its final bow, the brilliance of Kevin De Bruyne flickering against the fading of the light. Egypt are, as ever, a question with one towering answer: Mohamed Salah, carrying a nation\'s hopes upon his own shoulders. Iran are obdurate and well-drilled, capable of ruining a reputation on any given night; New Zealand bring wholehearted endeavour and the dream of a first World Cup victory.</p><p><strong>Group H</strong> is where the champions-elect reside. Spain arrive as the European champions and, by widespread acclaim, the best team on the planet — Lamine Yamal already a generational wonder at an age when most are still dreaming, Pedri and Rodri orchestrating beneath him. Uruguay, remade in the fierce image of Marcelo Bielsa, are nobody\'s notion of a soft second seed, with Federico Valverde and Darwin Núñez to call upon. Saudi Arabia have humbled the mighty before, and Cabo Verde, debutants from an archipelago of half a million souls, are the tournament\'s most improbable arrivals.</p><p><strong>Group I</strong> crackles with star power and long-denied dreams. France, deep beyond reason and driven by Kylian Mbappé in his imperial pomp, are among the favourites for the whole tournament. Senegal carry the power and pedigree of recent African champions. But the romance belongs to Norway, returned to this stage after a generation away, bringing the elemental force of Erling Haaland and the craft of Martin Ødegaard to a World Cup at last; Iraq will need to be flawless to disturb them.</p><p><strong>Group J</strong> belongs, inescapably, to a farewell. Argentina are the holders, and the whole world senses this is Lionel Messi\'s final act upon the grandest stage — a coronation tour from which nobody will look away, with Julián Álvarez and Lautaro Martínez ensuring it is no one-man show. Austria, sharply drilled under their demanding coaching, are a genuinely awkward proposition and may be the pick of the rest. Algeria carry the gifts of Riyad Mahrez; Jordan, finalists at the last Asian Cup, arrive with nothing to fear and everything to win.</p><p><strong>Group K</strong> poses a second question of farewell. Portugal still bend around the immovable will of Cristiano Ronaldo, chasing the one prize that has eluded him, with Bruno Fernandes and Bernardo Silva the engines of a deeply gifted side. Colombia are dangerous and joyous, James Rodríguez conducting and Luis Díaz threatening to settle any match alone. DR Congo bring athletic power and ambition; Uzbekistan, qualifying for a first ever World Cup, arrive wide-eyed and unafraid.</p><p><strong>Group L</strong> closes the draw with England\'s familiar, gnawing hope. Under Thomas Tuchel, and built around Jude Bellingham, Harry Kane and Bukayo Saka, they have the raw material to go all the way — if they can finally lay down the weight of expectation. Croatia offer one last waltz from Luka Modrić, the eternal midfielder still bending matches to his unhurried rhythm. Ghana, reborn and youthful, carry the menace of Mohammed Kudus; Panama fear no badge and relish the role of wrecker.</p><p>Twelve groups, forty-eight stories, each convinced this is the summer it has waited a lifetime for. Some will be undone before the month is out; one, against every rival\'s hope, will climb to a height the rest cannot reach. The Dispatch will be here for all of it — every dawn kick-off and midnight drama, every upset that tears up the bracket, every goal that stops a nation\'s heart. But that is for the mornings to come. Tonight the whole world stands together on the edge of the same glorious uncertainty, waiting for a single sound. Let the first whistle blow.',
        summary:'Our verdicts will come soon enough — a score for every match, a side tipped for every round, the analysis this tournament demands. But not tonight. Tonight belongs to the anticipation alone: to the shiver that runs through anyone who loves this game when the greatest show on earth is four days away and everything, absolutely everything, remains possible. The world is watching. Let the World Cup begin.'
      },
    ]
  },

  // ── DAY 1 · Thu 11 Jun ─────────────────────────────────────────────────────
  {
    id:'md1', label:'Day 1 · Thu 11 Jun', date:'Thursday, June 11, 2026',
    published:'June 11, 2026',
    headline:'The World Cup Opens — Mexico at the Azteca',
    deck:'The third time the Estadio Azteca hosts a World Cup opener. The first time in twenty-eight years the world holds its breath like this.',
    matches:[
      { id:'m1', group:'A', home:'Mexico', hf:'🇲🇽', away:'South Africa', af:'🇿🇦', prediction:[2,1], confidence:'med', thoughts:'The Estadio Azteca does not do quiet occasions. When Siphiwe Tshabalala unleashed the first goal of the 2010 World Cup — raking it into the corner at Soccer City and sending an entire continent skyward — Mexico were on the receiving end of the moment that transformed a tournament into a movement. They recovered, Rafa Márquez equalised, and the match ended 1-1. Sixteen years on, the sides meet again on the greatest stage the game affords, only now Mexico are at home — home in the most profound sense, at altitude, in the city, in the stadium that has hosted more World Cup matches than anywhere else on earth.</p><p>The Azteca at 2,250 metres above sea level is not merely a venue; it is a weapon. The thin air saps visiting legs in ways that cannot be fully trained against, particularly in the second half when the lungs begin to burn and the Mexican engine shows no signs of slowing. Of South Africa\'s 26-man squad, nineteen play in the domestic league — a figure that speaks both to Hugo Broos\'s recruitment pool and to the physical challenge awaiting them when altitude begins to tell. Broos himself — 74 years old, coaching his final tournament before retirement — has built a side that is organised, difficult to play through, and dangerous on the counter through Oswin Appollis and Relebohile Mofokeng. Ronwen Williams, their captain and goalkeeper, saved four penalties at AFCON 2023 and is a genuine match-winner from that position.</p><p>Yet Mexico\'s quality is not in serious doubt. Santiago Giménez returns to the Azteca as the most complete centre-forward the national team has fielded in a generation — intelligent in the area, effective with his back to goal, and capable of the decisive touch when the moment demands it. Edson Álvarez, 98 caps and the midfield anchor, controls games with a quiet authority that opponents have spent years attempting to disrupt without success. And Guillermo Ochoa at his sixth World Cup is as much a psychological presence as a goalkeeper — the one constant across every one of those seven consecutive Round of 16 exits, every near-miss and heartbreak since the last time México played a tournament at home. Javier Aguirre has built a practical, functional side — not expansive or adventurous, but capable of grinding out results when the stadium and the altitude are on their side.</p><p>The weight of tournament history falls differently on each side. South Africa are here to validate a project and prove that qualification was no accident. Mexico carry something heavier: a nation of hundreds of millions asking whether a home World Cup can finally break the spell, whether the Quinto Partido can at last become the sixth.', summary:'The altitude and home advantage tilt the balance, and so does the quality differential across most positions. South Africa will defend deep and compact, threatening on the break through their pacy wide forwards, and Lyle Foster will hold the line effectively for a period. But as the match wears on and the thin air bites, Mexico\'s experience and class in the final third should prove decisive. A 2-1 Mexico win: Giménez the difference-maker in the penalty area, a moment of South African defiance that makes the crowd nervous, and a tournament opened with a victory at the venue that has staged more of these moments than anywhere else on the planet.', result:[2,0] },
      { id:'m2', group:'A', home:'South Korea', hf:'🇰🇷', away:'Czechia', af:'🇨🇿', prediction:[1,1], confidence:'low', thoughts:'There is a particular melancholy in watching Son Heung-min at thirty-four, knowing that this is, in all probability, the last World Cup the game will see him take part in. He has been the defining face of South Korean football for a decade: the goals, the movement off the ball, and a quality that has never quite been matched by those around him when the margins are highest. He has repeatedly called on his teammates to stop treating bigger nations with excessive respect — to believe, genuinely, that the trophy belongs to whoever wants it most. This tournament is the last occasion for that belief to be tested at the highest level.</p><p>The form guide offers genuine cause for pause. South Korea were beaten 4-0 by Ivory Coast in March 2026 and fell 1-0 to Austria four days later — two matches in which they produced not a single goal from open play across 180 combined minutes. Hong Myung-bo\'s system creates entries into the final third through the movement of Lee Kang-in and Hwang Hee-chan, but converting that positional pressure into goals has been stubbornly elusive. Against a Czechia side built to deny space and absorb, that frailty in the final third could be the decisive variable.</p><p>Miroslav Koubek inherited a squad shaken by one of the most humiliating results in Czech qualifying history — a defeat to the Faroe Islands that brought the previous era to an abrupt end — and dragged that squad through two consecutive penalty shootouts to reach their first World Cup since 2006. Goalkeeper Matej Kovar saved two penalties against Ireland in the final playoff round to complete the journey. The character of this Czech side has already been tested under pressure. Patrik Schick, twenty-five international goals to his name and a Bundesliga title with Bayer Leverkusen in 2024, is one of the most dangerous strikers in this tournament when service arrives. Tomáš Souček and the towering Adam Chorý offer genuine aerial threat from set pieces; Czechia found the net eleven times from dead-ball situations in qualifying, and without first-choice centre-back Cho Yu-Min, Korea\'s defensive organisation at dead balls will be tested early.</p><p>The tactical contest is clear: Korea\'s pressing tempo against Czechia\'s structural discipline. Kim Min-jae\'s authority at the back provides defensive insurance, and Son on the left wing can turn a match entirely on a single individual act. But the evidence of the last two months suggests Czechia\'s approach has the quieter, sturdier foundation.', summary:'Two sides arriving with genuine questions to answer, in a group game where neither can afford to stumble. Korea\'s recent form is too uncertain to back with confidence, but Czechia have never faced Korea in competitive football before this evening and carry no psychological advantage into the opening whistle. A 1-1 draw feels like the honest verdict: Korea\'s structure and Son\'s individual quality sufficient to prevent a defeat, but the Czech midfield block and Schick\'s threat sufficient to prevent a comfortable Korean victory. A point each, and Group A wide open heading into the second round.', result:[2,1] },
    ]
  },

  // ── DAY 2 · Fri 12 Jun ─────────────────────────────────────────────────────
  {
    id:'md2', label:'Day 2 · Fri 12 Jun', date:'Friday, June 12, 2026',
    published:'June 11, 2026',
    headline:'Canada and the USA Open on Home Soil',
    deck:'Host nations carry expectation like armour. Two of them take the field on the same evening — one in Toronto, one in Los Angeles.',
    matches:[
      {
        id:'m3', group:'B', home:'Canada', hf:'🇨🇦', away:'Bosnia & Herz.', af:'🇧🇦',
        prediction:[2,0], confidence:'med',
        thoughts:'This is Canada\'s long-awaited moment on home soil, yet the days before their Group B opener have been consumed by one question above all others: where is Alphonso Davies? The answer, confirmed by Jesse Marsch himself in the final days of preparation, is blunt — he will not play in Toronto on Friday. Bayern Munich\'s left-back has not represented his country since tearing an ACL in the CONCACAF Nations League in March 2025, and a further hamstring injury sustained during Bayern\'s Champions League semi-final against Paris Saint-Germain this May has prolonged the wait. Marsch has indicated he may return for Canada\'s third group game; for now, Toronto holds its breath.</p><p>The burden of carrying Canadian hope falls to Jonathan David. Canada\'s captain and all-time leading scorer arrives at his home World Cup after a difficult debut season at Juventus — eight goals in forty-five appearances, only one since early February in Serie A. The clinical instinct that made him a Ligue 1 phenomenon across five years at Lille has seemed, at moments, mislaid inside the Bianconeri system. Yet David has spoken of this tournament as redemption, of the prospect of scoring at BMO Field as the thing he has imagined for years. Football finds players in moments like these, and home soil has a particular way of returning strikers to themselves.</p><p>Bosnia arrive with their own fitness shadow looming. Edin Džeko — forty years old, the captain and spiritual heart of the squad — missed the final warm-up against Panama and has been training separately through the week with the shoulder injury he sustained in that extraordinary play-off victory over Italy, the game in which twenty-one-year-old Esmir Bajraktarević scored the decisive penalty to send Bosnia to their second World Cup. Džeko has managed just sixty-four minutes of cumulative game time since March, and his availability for the opener is deeply uncertain. Without him, Ermedin Demirovic of Stuttgart leads the line, and Bosnia lose the off-the-ball intelligence that stretches opponents even from a deep shape.</p><p>Sergej Barbarez has constructed a side that is genuinely difficult to break down. The compact 4-4-2, the discipline in transition, the pace of Bajraktarević in wide areas — these are qualities that do not require Džeko to function. Bosnia drew 0-0 with North Macedonia and 1-1 with Panama in their pre-tournament preparations; neither result suggests fragility. These are a team built for attritional evenings in loud stadia.</p><p>Canada\'s home advantage is real and should not be underestimated. BMO Field will be full and loud from the first minute. Jesse Marsch has built an athletic, well-organised side around high pressing, quick transitions, and the individual quality of David and Tajon Buchanan in wide areas. Ismaël Koné provides the engine in midfield; Liam Millar offers creativity in the channels. This will be the first competitive meeting between the two nations — no psychological weight of history, only the moment.',
        summary:'Canada should win this, but the absence of Davies and David\'s uncertain form ensure the path will not be as comfortable as the host nation\'s billing demands. Bosnia, even without Džeko, are a well-structured side that will make this contest hard for as long as their energy holds. The crowd will matter. So will Canada\'s midfield, who must win the physical battle before David\'s intelligence can do the rest. A 2-0 home win is the prediction — though the game is likely to feel more precarious than the scoreline suggests for much of the night.'
      },
      {
        id:'m4', group:'D', home:'USA', hf:'🇺🇸', away:'Paraguay', af:'🇵🇾',
        prediction:[2,0], confidence:'med',
        thoughts:'When Mauricio Pochettino accepted the United States job he accepted something more than a coaching brief. He accepted the expectation of a football culture that is, finally, ready to be genuinely wounded. Hosting the World Cup at SoFi Stadium in Los Angeles — seventy thousand Americans beneath the California sky — raises the stakes beyond the familiar comfort of simply reaching the knockout rounds. This is supposed to be the beginning of something enduring. Friday night is where it starts.</p><p>The pre-tournament mood has been shaded by an honesty the occasion demands. The USMNT has lost three of their four matches in 2026 — to Germany in Chicago (a 2-1 defeat that stung most), and then to Portugal and Belgium — with their sole win a nervy 3-2 over Senegal. The midfield has suffered most. Johnny Cardoso, the Atlético Madrid deep-lying midfielder whose ability to protect the defence and link the press is essentially irreplaceable, has undergone surgery and will miss the entire tournament. Centre-back Chris Richards has been a fitness concern through the week. And Christian Pulisic — the man on whom the whole machine depends, its creative centre and emotional figurehead — has not scored since December 28, has contributed a single assist in 2026, and arrives at this World Cup carrying the full weight of a nation\'s projected hope. He has been managed and rested for exactly this moment. The prayer is that SoFi at full noise on a Friday evening unlocks what club form has not.</p><p>Paraguay represent a specific kind of problem that plays directly to those anxieties. Under Gustavo Alfaro, one of South America\'s most experienced and quietly formidable managers, La Albirroja arrive having gone unbeaten in eight consecutive matches — a run that includes victories over Brazil, Argentina, and Uruguay in CONMEBOL qualifying. They conceded just fourteen goals across all eighteen qualifying fixtures. These are the numbers of a side that will not be flattered into submission by the occasion or overwhelmed by the crowd. They will sit deep, remain compact across two banks of four, and wait for the transition moment before releasing their runners.</p><p>The uncertainty around Julio Enciso sharpens that picture considerably. The Strasbourg forward scored twelve goals last season and represents Paraguay\'s primary source of unpredictability in attack; he was stretchered off in tears during the final warm-up against Nicaragua with a muscle injury to his lower back and quadriceps. Whether he features at SoFi is deeply unclear. Without him, Paraguay\'s threat falls more heavily on Miguel Almirón and Antonio Sanabria — experienced and industrious, but less likely to produce the individual moment that changes a game from nothing.</p><p>These sides have not met at a World Cup since 1930, when Bert Patenaude scored the first hat-trick in tournament history in a 3-0 American victory. A November 2025 friendly saw the USA win 2-1 — a result that flatters their current form only slightly. The weight of home advantage, the quality of Pulisic and Folarin Balogun in the final third, and Paraguay\'s likely absence of their most dangerous player all point in one direction. How it unfolds will be the story of the evening.',
        summary:'The United States will win this, but the path from kick-off to that conclusion is likely to run through an uncomfortable stretch of attritional football. Paraguay will make SoFi a difficult place for long stretches — sitting deep, forcing play wide, frustrating Pochettino\'s attempts to build through central lanes. The breakthrough will come from Pulisic\'s invention or Balogun\'s sharpness in the final third, probably in the second half when space opens and legs tire. A 2-0 win is the prediction. It is the tidy outcome that the occasion demands — and it may prove correct for reasons that have nothing to do with comfort.'
      },
    ]
  },

  // ── DAY 3 · Sat 13 Jun ─────────────────────────────────────────────────────
  {
    id:'md3', label:'Day 3 · Sat 13 Jun', date:'Saturday, June 13, 2026',
    published:'June 12, 2026',
    headline:'Brazil, Scotland and the Day\'s Four Battles',
    deck:'The tournament\'s first full Saturday of football. Brazil make their entrance. Scotland return after twenty-eight years.',
    matches:[
      {
        id:'m8', group:'B', home:'Qatar', hf:'🇶🇦', away:'Switzerland', af:'🇨🇭',
        prediction:[0,2], confidence:'high',
        thoughts:'Qatar arrive at Levi\'s Stadium carrying the peculiar burden of a defending champion diminished. Their 2022 triumph on home soil remains a source of national pride, but stripped of that advantage, the evidence of who they are in the cold arithmetic of tournament football is rather more sobering. They scraped through the AFC intercontinental playoff having lost twice and conceded eight goals along the way, and their side will set up here exactly as you would expect — compact, disciplined, built to absorb Switzerland\'s patient possession game and spring Akram Afif forward on the counter whenever the opportunity arises. Afif remains their crown jewel, a player of genuine quality who registered fourteen goals across twenty-one Qatar Stars League appearances at Al Sadd this season. But a single world-class outlet does not make a dangerous international side, and if Switzerland can keep him quiet, Qatar\'s threat diminishes to almost nothing. On the other side of the pitch, Switzerland arrive as one of UEFA\'s most consistent tournament performers. Under their meticulous defensive structure, they conceded just twice in six qualifying matches, winning four and drawing two without defeat. Granit Xhaka, now captain at Sunderland after years commanding Arsenal\'s midfield, remains the conductor — reading the game, distributing economically, pressing with intelligence. Breel Embolo provides the physical focal point up front, a striker who runs channels, holds the ball up and brings teammates into play in ways that will test Qatar\'s centre-backs throughout. The tactical battle is straightforward to diagram but difficult for Qatar to resolve: Switzerland will dominate possession, circulate through Xhaka and Remo Freuler, stretch the defensive block wide, and eventually find the angles through it. Qatar will hold on for spells, disciplined and hard to break down in the early exchanges. But the quality differential, particularly in midfield, is simply too wide to bridge over ninety minutes.',
        summary:'Switzerland should win this with something to spare. Qatar will make it competitive in the early stages, as well-drilled defensive sides often do, but once Xhaka and company find their rhythm the gaps will appear and the quality in behind will be ruthlessly exposed. Two goals, perhaps three if Embolo has a night of it. The Group B table will look very much as anticipated come full time.'
      },
      {
        id:'m7', group:'C', home:'Brazil', hf:'🇧🇷', away:'Morocco', af:'🇲🇦',
        prediction:[2,0], confidence:'med',
        thoughts:'The shadow of Neymar hangs over this fixture before a ball is kicked. Brazil\'s most celebrated active player arrives in the United States carrying a right calf injury sustained in mid-May, and manager Carlo Ancelotti has been carefully noncommittal. Neymar was included in the final twenty-six but is targeting the second group game against Haiti on June 20 for his return, which means this opening confrontation belongs to the next generation: Vinícius Júnior, whose sixteen La Liga goals and five assists for Real Madrid made him the tournament\'s most dangerous left-footer going in; Raphinha, who delivered thirteen La Liga goals and three assists at Barcelona with relentless precision; and nineteen-year-old Endrick, whose pace and fearlessness have already made him a fan favourite before he\'s had the chance to define himself on the biggest stage. Morocco bring their own complications. Walid Regragui, the architect of that astonishing 2022 semi-final run, departed in March, and Mohamed Ouahbi steps in without the accumulated tournament intelligence of his predecessor. The squad retains its individual brilliance — Achraf Hakimi, PSG\'s Champions League-winning right-back who contributed twelve goals and fourteen assists as his club secured a historic treble, is arguably the finest attacking full-back in the world; Ayoub El Kaabi offers a genuine goal threat through the middle; Ismael Saibari, the Eredivisie Player of the Season at PSV, adds technical quality in the engine room. But Nayef Aguerd, Morocco\'s most commanding centre-back, is reportedly absent with pubalgia, and the defence that was their greatest strength in Qatar may look more exposed without him. Morocco\'s plan will be familiar: low block, compact shape, wait for the Brazilian press to overcommit, then release Hakimi and the wide attackers into the space behind. It is a strategy that has worked against better teams than Brazil in the recent past. The question is whether Vinicius, in his current form, can be contained long enough for it to matter.',
        summary:'Brazil should win this, and the depth of their attacking talent — extraordinary even without Neymar — gives them too many angles for Morocco to close down completely. But Morocco are not here to make up the numbers. A new manager and the absence of Aguerd at the back introduce variables that a well-drilled Brazilian side will look to exploit early. Expect the decisive moment to come through individual brilliance rather than tactical dominance, and do not be surprised if it takes until the second half to arrive.'
      },
      {
        id:'m5', group:'C', home:'Haiti', hf:'🇭🇹', away:'Scotland', af:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        prediction:[0,2], confidence:'med',
        thoughts:'Scotland have not been at a World Cup since 1998, when Craig Brown\'s side lost all three group games and returned home without a point. Twenty-eight years of near misses, play-off heartbreaks and collective national anguish have followed, and now, finally, Steve Clarke has delivered. The qualification campaign was measured and professional, built on Premier League quality spread throughout the squad and anchored by Andrew Robertson\'s leadership. The blow of Billy Gilmour\'s late withdrawal is significant and should not be understated. The Napoli midfielder was not merely a starter but a genuine creative force — the player through whom Clarke\'s side built, maintained tempo, and won the second balls a World Cup demands. He sustained a knee injury in the final warm-up against Curaçao at Hampden, and nineteen-year-old Tyler Fletcher — son of Scotland great Darren Fletcher — steps into the squad in his place carrying almost none of Gilmour\'s international experience. Ché Adams\'s fitness is also uncertain, removing a physical forward option that Scotland may need against a side that will sit deep and invite pressure. Haiti arrive at their first World Cup since 1974 with nothing to lose and everything to gain. They qualified through CONCACAF with organisation and collective belief, and the freedom of the underdog is a real and underestimated commodity at tournaments of this scale. But the quality gap is substantial: Robertson, Kieran Tierney, Scott McTominay and Ryan Christie form a squad spine of genuine top-flight European quality. Haiti will sit deep, absorb, and wait for the mistake or the set-piece that changes the game.',
        summary:'Scotland win this, and they must. Three points here are essential if Clarke\'s men are to advance beyond the group stage for the first time in the nation\'s history. Haiti will frustrate them for long stretches — organised, disciplined, and hard to break down — but the gulf in individual quality should tell over ninety minutes. Expect Scotland to find the goal that settles it in the second half, with Robertson and McTominay providing the platform from which the chance eventually arrives.'
      },
      {
        id:'m6', group:'D', home:'Australia', hf:'🇦🇺', away:'Türkiye', af:'🇹🇷',
        prediction:[1,2], confidence:'low',
        thoughts:'Türkiye return to the World Cup for the first time since 2002, when a breathtaking run through Japan and South Korea delivered a third-place finish and announced them as a genuine footballing force. Twenty-four years have passed since that tournament, and Vincenzo Montella\'s squad carries the considerable weight of those expectations alongside a rather less comfortable set of fitness concerns. Hakan Çalhanoğlu, the Inter Milan captain who anchors Türkiye\'s midfield and remains one of the finest controllers in European club football, has been managed carefully in the build-up after a muscular complaint, with Montella confirming he was being introduced back gradually. Arda Güler, the Real Madrid creator who is arguably the most gifted young playmaker at this tournament, is fit and the focal point of Türkiye\'s attacking ambition. Kenan Yıldız, the Juventus winger, was not yet in training at the squad\'s final sessions before departure, adding another layer of uncertainty to the selection picture. Australia arrive with Tony Popovic\'s defensive organisation very firmly in place. They qualified through the AFC in near-perfect fashion — four wins from four, ten goals scored and just two conceded — and their capacity to absorb pressure, win physical battles in midfield, and hurt opponents on the counter has been demonstrated against good Asian opposition. Popovic\'s sides are never soft. They are compact, hard-working and tactically disciplined in a way that consistently earns them more than the raw numbers suggest they should. The match in Vancouver is likely to be tight, physical and decided by a single moment of quality or a structural error.',
        summary:'Türkiye should have enough quality to edge this, particularly if Güler is given licence to operate between the lines and Çalhanoğlu is sufficiently fit to control the tempo. But the fitness doubts around their key players are real, not cosmetic, and Australia under Popovic know exactly how to make a game ugly, close and uncomfortable. A narrow Turkish win feels the most probable outcome, though a draw is well within reach. This is a low-confidence call.'
      },
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

