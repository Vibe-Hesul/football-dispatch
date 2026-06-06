// ─────────────────────────────────────────────────────────────────────────────
// THE FOOTBALL DISPATCH — FIFA World Cup 2026
// dispatch-data.js
//
// THIS IS THE ONLY FILE THAT CHANGES EACH MATCHDAY.
// Updated by Claude before every edition. Do not edit manually.
//
// Structure per matchday:
//   id        — unique identifier (md1, md2 …)
//   label     — display name (Edition I, II …)
//   date      — fixture dates as a string
//   published — publish/update stamp shown in the byline (null = not yet filed)
//   headline  — editorial headline for this edition
//   deck      — italic subheading beneath the headline
//   matches   — array of match objects (see below)
//
// Structure per match:
//   id         — unique identifier (m1, m2 …)
//   group      — group letter or round name
//   home/away  — team names
//   hf/af      — flag emoji
//   prediction — [homeGoals, awayGoals] or null if not yet filed
//   confidence — 'high' | 'med' | 'low' | null
//   thoughts   — narrative analysis paragraph (string or null)
//   summary    — verdict/closing paragraph (string or null)
//   result     — [homeGoals, awayGoals] actual score, added after match (omit if not yet played)
// ─────────────────────────────────────────────────────────────────────────────

const matchdays = [

  // ── EDITION I ─ June 11–13 · Groups A B C D (Round 1) ─────────────────────
  {
    id: 'md1', label: 'Edition I', date: 'June 11–13, 2026',
    published: null,
    headline: 'The World Cup Opens',
    deck: 'Forty-eight nations. Twelve groups. Three days that announce the contenders and expose the hopeful.',
    matches: [
      { id: 'm1',  group: 'A', home: 'Mexico',       hf: '🇲🇽', away: 'South Africa',   af: '🇿🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm2',  group: 'A', home: 'South Korea',  hf: '🇰🇷', away: 'Czechia',         af: '🇨🇿', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm3',  group: 'B', home: 'Canada',       hf: '🇨🇦', away: 'Bosnia & Herz.',  af: '🇧🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm4',  group: 'D', home: 'USA',           hf: '🇺🇸', away: 'Paraguay',        af: '🇵🇾', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm5',  group: 'C', home: 'Haiti',         hf: '🇭🇹', away: 'Scotland',        af: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm6',  group: 'D', home: 'Australia',    hf: '🇦🇺', away: 'Türkiye',         af: '🇹🇷', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm7',  group: 'C', home: 'Brazil',       hf: '🇧🇷', away: 'Morocco',         af: '🇲🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm8',  group: 'B', home: 'Qatar',         hf: '🇶🇦', away: 'Switzerland',    af: '🇨🇭', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION II ─ June 14–15 · Groups E F G H (Round 1) ────────────────────
  {
    id: 'md2', label: 'Edition II', date: 'June 14–15, 2026',
    published: null,
    headline: 'Europe\'s Giants Enter the Fray',
    deck: 'Germany, Spain, Belgium and the Netherlands make their opening statements on the world stage.',
    matches: [
      { id: 'm9',  group: 'E', home: 'Côte d\'Ivoire', hf: '🇨🇮', away: 'Ecuador',      af: '🇪🇨', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm10', group: 'E', home: 'Germany',         hf: '🇩🇪', away: 'Curaçao',      af: '🇨🇼', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm11', group: 'F', home: 'Netherlands',     hf: '🇳🇱', away: 'Japan',         af: '🇯🇵', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm12', group: 'F', home: 'Sweden',          hf: '🇸🇪', away: 'Tunisia',       af: '🇹🇳', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm13', group: 'H', home: 'Saudi Arabia',    hf: '🇸🇦', away: 'Uruguay',       af: '🇺🇾', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm14', group: 'H', home: 'Spain',           hf: '🇪🇸', away: 'Cabo Verde',    af: '🇨🇻', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm15', group: 'G', home: 'IR Iran',         hf: '🇮🇷', away: 'New Zealand',   af: '🇳🇿', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm16', group: 'G', home: 'Belgium',         hf: '🇧🇪', away: 'Egypt',         af: '🇪🇬', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION III ─ June 16–17 · Groups I J K L (Round 1) ───────────────────
  {
    id: 'md3', label: 'Edition III', date: 'June 16–17, 2026',
    published: null,
    headline: 'Argentina, France and England Take the Stage',
    deck: 'The weight of legacy settles over Dallas, Miami and Toronto as the final four groups open.',
    matches: [
      { id: 'm17', group: 'I', home: 'France',      hf: '🇫🇷', away: 'Senegal',      af: '🇸🇳', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm18', group: 'I', home: 'Iraq',         hf: '🇮🇶', away: 'Norway',       af: '🇳🇴', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm19', group: 'J', home: 'Argentina',   hf: '🇦🇷', away: 'Algeria',      af: '🇩🇿', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm20', group: 'J', home: 'Austria',      hf: '🇦🇹', away: 'Jordan',       af: '🇯🇴', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm21', group: 'L', home: 'Ghana',        hf: '🇬🇭', away: 'Panama',       af: '🇵🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm22', group: 'L', home: 'England',      hf: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', away: 'Croatia',      af: '🇭🇷', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm23', group: 'K', home: 'Portugal',    hf: '🇵🇹', away: 'Congo DR',     af: '🇨🇩', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm24', group: 'K', home: 'Uzbekistan',  hf: '🇺🇿', away: 'Colombia',     af: '🇨🇴', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION IV ─ June 18–19 · Groups A B C D (Round 2) ────────────────────
  {
    id: 'md4', label: 'Edition IV', date: 'June 18–19, 2026',
    published: null,
    headline: 'The Second Round Begins',
    deck: 'First results are in. The group tables take shape, and the pressure sharpens.',
    matches: [
      { id: 'm25', group: 'A', home: 'Czechia',       hf: '🇨🇿', away: 'South Africa', af: '🇿🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm26', group: 'B', home: 'Switzerland',   hf: '🇨🇭', away: 'Bosnia & Herz.', af: '🇧🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm27', group: 'B', home: 'Canada',         hf: '🇨🇦', away: 'Qatar',        af: '🇶🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm28', group: 'A', home: 'Mexico',         hf: '🇲🇽', away: 'South Korea',  af: '🇰🇷', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm29', group: 'C', home: 'Brazil',         hf: '🇧🇷', away: 'Haiti',        af: '🇭🇹', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm30', group: 'C', home: 'Scotland',       hf: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', away: 'Morocco',     af: '🇲🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm31', group: 'D', home: 'Türkiye',        hf: '🇹🇷', away: 'Paraguay',     af: '🇵🇾', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm32', group: 'D', home: 'USA',             hf: '🇺🇸', away: 'Australia',   af: '🇦🇺', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION V ─ June 20–21 · Groups E F G H (Round 2) ─────────────────────
  {
    id: 'md5', label: 'Edition V', date: 'June 20–21, 2026',
    published: null,
    headline: 'Pressure Mounts in Europe\'s Groups',
    deck: 'Germany, Spain, Belgium and the Netherlands must respond. The group stage tightens.',
    matches: [
      { id: 'm33', group: 'E', home: 'Germany',       hf: '🇩🇪', away: 'Côte d\'Ivoire', af: '🇨🇮', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm34', group: 'E', home: 'Ecuador',        hf: '🇪🇨', away: 'Curaçao',        af: '🇨🇼', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm35', group: 'F', home: 'Netherlands',    hf: '🇳🇱', away: 'Sweden',          af: '🇸🇪', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm36', group: 'F', home: 'Tunisia',        hf: '🇹🇳', away: 'Japan',           af: '🇯🇵', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm37', group: 'H', home: 'Uruguay',        hf: '🇺🇾', away: 'Cabo Verde',      af: '🇨🇻', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm38', group: 'H', home: 'Spain',          hf: '🇪🇸', away: 'Saudi Arabia',    af: '🇸🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm39', group: 'G', home: 'Belgium',        hf: '🇧🇪', away: 'IR Iran',          af: '🇮🇷', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm40', group: 'G', home: 'New Zealand',   hf: '🇳🇿', away: 'Egypt',           af: '🇪🇬', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION VI ─ June 22–23 · Groups I J K L (Round 2) ────────────────────
  {
    id: 'md6', label: 'Edition VI', date: 'June 22–23, 2026',
    published: null,
    headline: 'France, England and Portugal Face the Test',
    deck: 'The second round closes out. Every nation is one result away from crisis or clarity.',
    matches: [
      { id: 'm41', group: 'I', home: 'Norway',     hf: '🇳🇴', away: 'Senegal',    af: '🇸🇳', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm42', group: 'I', home: 'France',      hf: '🇫🇷', away: 'Iraq',       af: '🇮🇶', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm43', group: 'J', home: 'Argentina',  hf: '🇦🇷', away: 'Austria',    af: '🇦🇹', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm44', group: 'J', home: 'Jordan',      hf: '🇯🇴', away: 'Algeria',    af: '🇩🇿', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm45', group: 'L', home: 'England',    hf: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', away: 'Ghana',      af: '🇬🇭', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm46', group: 'L', home: 'Panama',      hf: '🇵🇦', away: 'Croatia',    af: '🇭🇷', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm47', group: 'K', home: 'Portugal',   hf: '🇵🇹', away: 'Uzbekistan', af: '🇺🇿', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm48', group: 'K', home: 'Colombia',   hf: '🇨🇴', away: 'Congo DR',   af: '🇨🇩', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION VII ─ June 24 · Groups A B C (Final Round) ────────────────────
  {
    id: 'md7', label: 'Edition VII', date: 'June 24, 2026',
    published: null,
    headline: 'The Reckoning — Groups A, B and C',
    deck: 'Mexico, Scotland and Bosnia play for their tournament lives. Simultaneous kick-offs. No hiding.',
    matches: [
      { id: 'm49', group: 'C', home: 'Scotland',      hf: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', away: 'Brazil',        af: '🇧🇷', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm50', group: 'C', home: 'Morocco',       hf: '🇲🇦', away: 'Haiti',         af: '🇭🇹', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm51', group: 'B', home: 'Switzerland',   hf: '🇨🇭', away: 'Canada',        af: '🇨🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm52', group: 'B', home: 'Bosnia & Herz.', hf: '🇧🇦', away: 'Qatar',        af: '🇶🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm53', group: 'A', home: 'Czechia',       hf: '🇨🇿', away: 'Mexico',        af: '🇲🇽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm54', group: 'A', home: 'South Africa',  hf: '🇿🇦', away: 'South Korea',   af: '🇰🇷', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION VIII ─ June 25 · Groups D E F (Final Round) ───────────────────
  {
    id: 'md8', label: 'Edition VIII', date: 'June 25, 2026',
    published: null,
    headline: 'The Reckoning — Groups D, E and F',
    deck: 'Germany must confirm. USA must hold. Japan and the Netherlands settle an open group.',
    matches: [
      { id: 'm55', group: 'E', home: 'Curaçao',     hf: '🇨🇼', away: 'Côte d\'Ivoire', af: '🇨🇮', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm56', group: 'E', home: 'Ecuador',      hf: '🇪🇨', away: 'Germany',         af: '🇩🇪', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm57', group: 'F', home: 'Japan',        hf: '🇯🇵', away: 'Sweden',          af: '🇸🇪', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm58', group: 'F', home: 'Tunisia',      hf: '🇹🇳', away: 'Netherlands',    af: '🇳🇱', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm59', group: 'D', home: 'Türkiye',      hf: '🇹🇷', away: 'USA',             af: '🇺🇸', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm60', group: 'D', home: 'Paraguay',     hf: '🇵🇾', away: 'Australia',      af: '🇦🇺', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION IX ─ June 26 · Groups G H I (Final Round) ─────────────────────
  {
    id: 'md9', label: 'Edition IX', date: 'June 26, 2026',
    published: null,
    headline: 'The Reckoning — Groups G, H and I',
    deck: 'Spain and Uruguay collide. France face Norway. Belgium and Egypt play for survival.',
    matches: [
      { id: 'm61', group: 'I', home: 'Norway',       hf: '🇳🇴', away: 'France',       af: '🇫🇷', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm62', group: 'I', home: 'Senegal',      hf: '🇸🇳', away: 'Iraq',         af: '🇮🇶', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm63', group: 'G', home: 'Egypt',        hf: '🇪🇬', away: 'IR Iran',      af: '🇮🇷', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm64', group: 'G', home: 'New Zealand',  hf: '🇳🇿', away: 'Belgium',      af: '🇧🇪', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm65', group: 'H', home: 'Cabo Verde',   hf: '🇨🇻', away: 'Saudi Arabia', af: '🇸🇦', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm66', group: 'H', home: 'Uruguay',      hf: '🇺🇾', away: 'Spain',        af: '🇪🇸', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION X ─ June 27 · Groups J K L (Final Round) ──────────────────────
  {
    id: 'md10', label: 'Edition X', date: 'June 27, 2026',
    published: null,
    headline: 'The Reckoning — Groups J, K and L',
    deck: 'Argentina close out. Portugal confirm. England must not stumble at the final hurdle.',
    matches: [
      { id: 'm67', group: 'L', home: 'Panama',    hf: '🇵🇦', away: 'England',    af: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm68', group: 'L', home: 'Croatia',   hf: '🇭🇷', away: 'Ghana',      af: '🇬🇭', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm69', group: 'J', home: 'Algeria',   hf: '🇩🇿', away: 'Austria',    af: '🇦🇹', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm70', group: 'J', home: 'Jordan',    hf: '🇯🇴', away: 'Argentina',  af: '🇦🇷', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm71', group: 'K', home: 'Colombia',  hf: '🇨🇴', away: 'Portugal',   af: '🇵🇹', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm72', group: 'K', home: 'Congo DR',  hf: '🇨🇩', away: 'Uzbekistan', af: '🇺🇿', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION XI ─ June 28–30 · Round of 32 (Matches 73–79) ─────────────────
  {
    id: 'md11', label: 'Edition XI', date: 'June 28–30, 2026',
    published: null,
    headline: 'A New World Cup Begins — Round of 32',
    deck: 'For the first time in history, 32 teams enter a knockout round. There is no second chance from here.',
    matches: [
      { id: 'm73', group: 'Round of 32', home: '2nd · Group A', hf: '⚽', away: '2nd · Group B',          af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm74', group: 'Round of 32', home: '1st · Group E', hf: '⚽', away: 'Best 3rd · A/B/C/D/F',   af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm75', group: 'Round of 32', home: '1st · Group F', hf: '⚽', away: '2nd · Group C',          af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm76', group: 'Round of 32', home: '1st · Group C', hf: '⚽', away: '2nd · Group F',          af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm77', group: 'Round of 32', home: '1st · Group I', hf: '⚽', away: 'Best 3rd · C/D/F/G/H',   af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm78', group: 'Round of 32', home: '2nd · Group E', hf: '⚽', away: '2nd · Group I',          af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm79', group: 'Round of 32', home: '1st · Group A', hf: '⚽', away: 'Best 3rd · C/E/F/H/I',   af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION XII ─ July 1–3 · Round of 32 (Matches 80–88) ──────────────────
  {
    id: 'md12', label: 'Edition XII', date: 'July 1–3, 2026',
    published: null,
    headline: 'Round of 32 — The Bracket Fills In',
    deck: 'Nine more knockout matches. Sixteen become eight. The quarter-finalists begin to emerge.',
    matches: [
      { id: 'm80', group: 'Round of 32', home: '1st · Group L', hf: '⚽', away: 'Best 3rd · E/H/I/J/K',  af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm81', group: 'Round of 32', home: '1st · Group D', hf: '⚽', away: 'Best 3rd · B/E/F/I/J',  af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm82', group: 'Round of 32', home: '1st · Group G', hf: '⚽', away: 'Best 3rd · A/E/H/I/J',  af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm83', group: 'Round of 32', home: '2nd · Group K', hf: '⚽', away: '2nd · Group L',          af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm84', group: 'Round of 32', home: '1st · Group H', hf: '⚽', away: '2nd · Group J',          af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm85', group: 'Round of 32', home: '1st · Group B', hf: '⚽', away: 'Best 3rd · E/F/G/I/J',  af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm86', group: 'Round of 32', home: '1st · Group J', hf: '⚽', away: '2nd · Group H',          af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm87', group: 'Round of 32', home: '1st · Group K', hf: '⚽', away: 'Best 3rd · D/E/I/J/L',  af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm88', group: 'Round of 32', home: '2nd · Group D', hf: '⚽', away: '2nd · Group G',          af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION XIII ─ July 4–7 · Round of 16 ─────────────────────────────────
  {
    id: 'md13', label: 'Edition XIII', date: 'July 4–7, 2026',
    published: null,
    headline: 'The Round of 16 — Eight Survive',
    deck: 'One defeat and you are gone. The knockout rounds reduce with brutal efficiency.',
    matches: [
      { id: 'm89', group: 'Round of 16', home: 'W Match 74', hf: '⚽', away: 'W Match 77', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm90', group: 'Round of 16', home: 'W Match 73', hf: '⚽', away: 'W Match 75', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm91', group: 'Round of 16', home: 'W Match 76', hf: '⚽', away: 'W Match 78', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm92', group: 'Round of 16', home: 'W Match 79', hf: '⚽', away: 'W Match 80', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm93', group: 'Round of 16', home: 'W Match 83', hf: '⚽', away: 'W Match 84', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm94', group: 'Round of 16', home: 'W Match 81', hf: '⚽', away: 'W Match 82', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm95', group: 'Round of 16', home: 'W Match 86', hf: '⚽', away: 'W Match 88', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm96', group: 'Round of 16', home: 'W Match 85', hf: '⚽', away: 'W Match 87', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION XIV ─ July 9–11 · Quarter-finals ───────────────────────────────
  {
    id: 'md14', label: 'Edition XIV', date: 'July 9–11, 2026',
    published: null,
    headline: 'The Quarter-Finals — Four Matches Remain',
    deck: 'From forty-eight nations, only eight remain. The semi-finals are one win away.',
    matches: [
      { id: 'm97',  group: 'Quarter-final', home: 'W Match 89', hf: '⚽', away: 'W Match 90', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm98',  group: 'Quarter-final', home: 'W Match 93', hf: '⚽', away: 'W Match 94', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm99',  group: 'Quarter-final', home: 'W Match 91', hf: '⚽', away: 'W Match 92', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm100', group: 'Quarter-final', home: 'W Match 95', hf: '⚽', away: 'W Match 96', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION XV ─ July 14–15 · Semi-finals ──────────────────────────────────
  {
    id: 'md15', label: 'Edition XV', date: 'July 14–15, 2026',
    published: null,
    headline: 'The Semi-Finals — The Final Four',
    deck: 'One win from Philadelphia. One loss from oblivion. The greatest stage in football.',
    matches: [
      { id: 'm101', group: 'Semi-final', home: 'W Match 97',  hf: '⚽', away: 'W Match 98',  af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm102', group: 'Semi-final', home: 'W Match 99',  hf: '⚽', away: 'W Match 100', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

  // ── EDITION XVI ─ July 18–19 · Finals ─────────────────────────────────────
  {
    id: 'md16', label: 'Edition XVI', date: 'July 18–19, 2026',
    published: null,
    headline: 'The Final — Philadelphia, July 19',
    deck: 'One hundred and four matches. Forty-eight nations. One champion. The Football Dispatch files its last prediction.',
    matches: [
      { id: 'm103', group: 'Bronze Final', home: 'L Match 101', hf: '⚽', away: 'L Match 102', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
      { id: 'm104', group: 'Final',        home: 'W Match 101', hf: '⚽', away: 'W Match 102', af: '⚽', prediction: null, confidence: null, thoughts: null, summary: null },
    ]
  },

];
