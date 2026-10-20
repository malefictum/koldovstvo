const B = wp.blocks.createBlock, U = 'https://witchcraftrpg.wordpress.com/wp-content/uploads/2026/10/';
const ITCH = 'https://malefictum.itch.io/witchcraftrpg', MS = 'https://apps.microsoft.com/detail/9N2GKVC57BGT?hl=ru-ru&gl=UA';
const M = {cls_charovnik:296, cls_chernets:297, cls_druzhinnik:298, cls_dushegub:299, cls_guslyar:300, cls_knizhnik:301, cls_lovchiy:302, cls_obetnik:303, cls_tat:304, cls_vedmak:305, cls_volhv:306, cls_yaryi:307, cls_zhrets:308, cls_merc:335,
  f_forge:309, f_kurgan:310, f_night:311, f_podzem:312, f_tavern:313, f_trade:314, kv_final:315, kv_free:316, kv_hero:317, kv_war:318, kv_world:319, logo:320,
  mon_chudo_yudo:321, mon_kostyanoy_zmey:322, mon_leshiy:323, mon_liho_odnoglazoe:324, mon_mavka:325, mon_polkan_voin:326, mon_upyr_krovopiytsa:327, mon_zhar_ptitsa:328,
  saga_chary:329, saga_free:330, saga_sumerki:331, saga_voda:332};
const url = k => U + 'kldv_' + k + (k === 'logo' ? '.png' : '.jpg');
const C = {bg: '#0d0a08', bg2: '#16110c', bg3: '#1e1710', fg: '#e8dfcf', mut: '#b4a58b', gold: '#d6b062', gold2: '#f0d79a', ink: '#1a1209', line: '#4a3a22'};
const FONT = 'alegreya';
const pad = (t, s = 'var(--wp--preset--spacing--40, 2rem)') => ({top: t, bottom: t, left: s, right: s});

const P = (html, o = {}) => B('core/paragraph', {content: html, fontFamily: o.font === null ? undefined : (o.font || FONT),
  style: {color: {text: o.color || C.fg}, typography: Object.assign({lineHeight: o.lh || '1.6', fontSize: '1.15rem', textAlign: o.align}, o.ty || {}), spacing: o.sp}});
const Label = (t, align = 'center') => P(t, {align, color: C.gold, ty: {textTransform: 'uppercase', letterSpacing: '0.24em', fontSize: '0.9rem', fontWeight: '700'}, lh: '1.4'});
const H = (t, lvl = 2, o = {}) => B('core/heading', {content: t, level: lvl, fontFamily: FONT,
  style: {color: {text: o.color || C.gold2}, typography: Object.assign({textAlign: o.align || 'center', fontWeight: '700', lineHeight: '1.15', fontSize: o.fs || (lvl === 2 ? 'clamp(2rem, 4.2vw, 3.2rem)' : lvl === 3 ? '1.6rem' : '1.25rem')}, o.ty || {}), spacing: o.sp}});
const Btn = (t, href, outline) => B('core/button', {text: t, url: href, linkTarget: '_blank', rel: 'noreferrer noopener',
  className: outline ? 'is-style-outline' : undefined, fontFamily: FONT,
  style: {color: outline ? {text: C.gold2} : {background: C.gold, text: C.ink}, border: {radius: '2px', width: outline ? '2px' : undefined, color: outline ? C.gold : undefined},
    typography: {fontSize: '1.15rem', fontWeight: '700', letterSpacing: '0.04em'}, spacing: {padding: {top: '0.85em', bottom: '0.85em', left: '1.8em', right: '1.8em'}}}});
const Btns = (list, just = 'center') => B('core/buttons', {layout: {type: 'flex', justifyContent: just}, style: {spacing: {blockGap: '1rem', margin: {top: '2rem'}}}}, list);
const Img = (k, o = {}) => B('core/image', {id: M[k], url: url(k), alt: o.alt || '', sizeSlug: 'full', linkDestination: 'none', width: o.w, align: o.align, style: o.style});
const Gal = (keys, cols, o = {}) => B('core/gallery', {columns: cols, linkTo: 'none', imageCrop: false, align: o.align || 'wide', sizeSlug: 'full',
  style: {spacing: {blockGap: {top: o.gap || '14px', left: o.gap || '14px'}, margin: {top: '2.5rem'}}}}, keys.map(([k, alt]) => Img(k, {alt})));
const Sec = (inner, o = {}) => B('core/group', {align: 'full', tagName: 'section', anchor: o.id,
  style: {color: {background: o.bg || C.bg, text: C.fg}, spacing: {padding: pad(o.py || 'clamp(4rem, 9vw, 7.5rem)'), margin: {top: '0', bottom: '0'}, blockGap: o.gap}},
  layout: {type: 'constrained', contentSize: o.cs || '760px', wideSize: o.ws || '1240px'}}, inner);
const Cov = (k, inner, o = {}) => B('core/cover', {url: url(k), id: M[k], alt: '', dimRatio: o.dim ?? 30, overlayColor: undefined, customOverlayColor: '#0d0a08',
  minHeight: o.mh || 80, minHeightUnit: 'vh', align: 'full', isDark: true, hasParallax: !!o.par, contentPosition: o.pos || 'center center', tagName: 'section', anchor: o.id,
  style: {spacing: {padding: Object.assign(pad(o.py || '6rem'), o.pl ? {left: o.pl} : {}), margin: {top: '0', bottom: '0'}}, color: {text: C.fg}},
  layout: {type: 'constrained', contentSize: o.cs || '820px', justifyContent: o.just}}, inner);
const Cols = (cols, o = {}) => B('core/columns', {align: o.align || 'wide', style: {spacing: {blockGap: {left: o.gap || '2rem', top: '2rem'}, margin: {top: o.mt || '3rem'}}}}, cols);
const Col = (inner, o = {}) => B('core/column', {style: o.style}, inner);
const Card = (k, title, text, sub) => Col([Img(k, {style: {border: {radius: '2px'}}}), sub ? Label(sub, 'left') : null, H(title, 3, {align: 'left', sp: {margin: {top: '0.6rem'}}}), P(text, {color: C.mut})].filter(Boolean));
const Stat = (n, t) => Col([H(n, 2, {fs: 'clamp(2.4rem, 5vw, 3.6rem)', sp: {margin: {bottom: '0.2rem'}}}), P(t, {align: 'center', color: C.mut, ty: {textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: '0.8rem'}})]);
const Sep = () => B('core/separator', {className: 'is-style-dots', style: {color: {background: C.gold}}, backgroundColor: undefined});
const LI = t => B('core/list-item', {content: t});
const List = items => B('core/list', {fontFamily: FONT, style: {color: {text: C.fg}, typography: {lineHeight: '1.75', fontSize: '1.15rem'}, spacing: {padding: {left: '1.2em'}}}}, items.map(LI));
const MT = (k, inner, right) => B('core/media-text', {mediaId: M[k] || undefined, mediaUrl: M[k] ? url(k) : k, mediaType: 'image', mediaPosition: right ? 'right' : 'left',
  verticalAlignment: 'center', align: 'wide', mediaWidth: 54, isStackedOnMobile: true, style: {spacing: {margin: {top: '3rem'}}}}, inner);

const page = [
  /* 1. Герой */
  Cov('kv_hero', [
    Img('logo', {alt: 'Колдовство: Порубежье', align: 'center', w: '720px'}),
    P('Пошаговая ролевая игра о Порубежье за сорок зим до Единой Веры. Капища ещё дымят, мёртвые встают из курганов, оборотни ходят лесами, а по дорогам уже идут люди Ока со списками.', {align: 'center', ty: {fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)'}, color: '#efe6d6', sp: {margin: {top: '1.5rem'}}}),
    Btns([Btn('Играть на itch.io', ITCH), Btn('Microsoft Store', MS, true)]),
    P('Бесплатно · без рекламы и покупок · в браузере и на Windows · до четырёх игроков', {align: 'center', color: C.mut, ty: {fontSize: '0.92rem', letterSpacing: '0.04em'}, sp: {margin: {top: '1.4rem'}}}),
  ], {mh: 100, dim: 20, py: '5rem', pos: 'center center'}),

  /* 2. Цифры */
  Sec([Cols([Stat('13', 'классов'), Stat('7', 'школ магии'), Stat('150', 'тварей в бестиарии'), Stat('4', 'игрока за одним столом')], {mt: '0', gap: '1rem'})],
    {bg: C.bg2, py: '3.2rem', cs: '1100px'}),

  /* 3. Край помнит */
  Sec([
    Label('Свободный человек'),
    H('Край помнит каждого'),
    P('Ты не служишь ни князю, ни Оку, ни старым богам. Нанимаешься, торгуешься, решаешь, кого выдать дознавателю, а кого спрятать. Сёла запоминают твоё имя, капища — твои дары, Око — твои грехи.', {align: 'center', ty: {fontSize: '1.3rem'}}),
    MT('f_kurgan', [
      H('Одна жизнь', 3, {align: 'left'}),
      P('Сохраниться и переиграть нельзя. Павший герой остаётся в летописи навсегда, а его сага продолжается без него.', {color: C.mut}),
      H('Своя сага', 3, {align: 'left', sp: {margin: {top: '1.6rem'}}}),
      P('Развилки решают судьбы сёл и людей. Кого спас в первой главе, тот встретит тебя через десять лет.', {color: C.mut}),
    ]),
  ], {cs: '760px'}),

  /* 4. Классы */
  Sec([
    Label('Герои'),
    H('Тринадцать дорог'),
    P('Дружинник держит строй, тать бьёт в спину, волхв зовёт грозу Перуна, книжник учит любую школу по книгам. Каждому герою — свой народ, своё ремесло и свой наставник. А серебро позовёт под твою руку наёмников.', {align: 'center', color: C.mut}),
    Gal([['cls_druzhinnik', 'Дружинник'], ['cls_yaryi', 'Ярый'], ['cls_obetnik', 'Обетник'], ['cls_vedmak', 'Ведьмак'], ['cls_lovchiy', 'Ловчий'], ['cls_tat', 'Тать'], ['cls_dushegub', 'Душегуб'],
      ['cls_guslyar', 'Гусляр'], ['cls_chernets', 'Чернец'], ['cls_volhv', 'Волхв'], ['cls_zhrets', 'Жрец иной веры'], ['cls_knizhnik', 'Книжник'], ['cls_charovnik', 'Чаровник'], ['cls_merc', 'Наёмники']], 7, {align: 'wide', gap: '12px'}),
  ], {bg: C.bg2, cs: '760px', ws: '1480px'}),

  /* 5. Мир */
  Cov('kv_world', [
    Label('Мир'),
    H('Три правды Порубежья'),
    P('Нолгримское порубежье. Год после мора в Эдвине. На погостах по ночам кто-то раскапывает свежие могилы, а вдоль дорог встают столбы с восьмилучевой звездой Ока.', {align: 'center', ty: {fontSize: '1.15rem'}}),
    Cols([
      Col([H('Княжья', 3), P('Берёт подать. Князья и наместники делят землю, броды и дороги.', {align: 'center', color: C.mut})]),
      Col([H('Старая', 3), P('Берёт кровь. Капища, волхвы, навь и всё, что старше людей.', {align: 'center', color: C.mut})]),
      Col([H('Око', 3), P('Берёт имена. Храмы, дознаватели и списки, что не вырубишь топором.', {align: 'center', color: C.mut})]),
    ], {align: 'wide', mt: '2.5rem'}),
  ], {mh: 90, dim: 45, cs: '980px'}),

  /* 6. Саги */
  Sec([
    Label('Саги'),
    H('Сорок лет одного края'),
    P('Три ступени саг ведут от последних лет старых чар к их закату. Каждую можно пройти одному или с друзьями.', {align: 'center', color: C.mut}),
    Cols([
      Card('saga_voda', 'Мёртвая вода', 'Первая сага в шесть глав: разрытые могилы Ольшанки, мёртвый Эдвин, Терак-князь, Гиблое болото и Суд над капищами.', 'с 1-го уровня'),
      Card('saga_sumerki', 'Сумерки', 'Годы после Веры. Последние колдуны, срубленный Перунов дуб, крышка колодца под Эдвином. Магия уходит из края — решаешь только, как.', 'с 5-го уровня'),
      Card('saga_chary', 'Последние чары', 'Мощи, Подземье встаёт и Закат — финал всего «Колдовства». Гаснут последние столпы старых чар.', 'с 10-го уровня'),
    ], {mt: '3rem'}),
  ], {cs: '760px'}),

  /* 7. Вечный мир */
  Cov('kv_free', [
    Label('Вечный мир', 'left'),
    H('Мир без глав', 2, {align: 'left'}),
    P('Один большой мир: края по уровням, поручения без конца и война Ока с навью, которая идёт и без тебя. От Нолгримских бродов до Великой Степи, Империи, Поморья, Пар-Насса и Подземья.', {ty: {fontSize: '1.15rem'}}),
    P('Имения можно купить и оставить в наследство. Герой между главами саги может уйти в чужую игру к друзьям.', {color: C.mut}),
  ], {mh: 75, dim: 50, pos: 'center left', cs: '620px', just: 'left', pl: 'clamp(2rem, 8vw, 9rem)'}),

  /* 8. Бой */
  Sec([
    Label('Бой'),
    H('Пошаговый бой на гексах'),
    MT(U + 'g2kgec.png', [
      List(['Фланги, удар в спину и засады', 'Погода, ночь и туман меняют, кто кого видит', 'Свитки, зелья и семь школ магии прямо в бою', 'Враги бегут, сдаются и зовут подмогу', 'Конные, лучники, колдуны бестиария — у каждого свои повадки']),
    ], true),
  ], {bg: C.bg2, cs: '760px'}),

  /* 9. Бестиарий */
  Sec([
    Label('Бестиарий'),
    H('Нечисть, нежить и чудища'),
    P('Сто пятьдесят тварей из былин и страшных сказок: от анчутки до Чудо-юда. Против каждой свой приём — серебро, огонь, оберег или ноги.', {align: 'center', color: C.mut}),
    Gal([['mon_leshiy', 'Леший'], ['mon_mavka', 'Мавка'], ['mon_upyr_krovopiytsa', 'Упырь-кровопийца'], ['mon_liho_odnoglazoe', 'Лихо одноглазое'],
      ['mon_chudo_yudo', 'Чудо-юдо'], ['mon_polkan_voin', 'Полкан-воин'], ['mon_kostyanoy_zmey', 'Костяной змей'], ['mon_zhar_ptitsa', 'Жар-птица']], 4, {align: 'wide'}),
  ], {cs: '760px'}),

  /* 10. Жизнь */
  Sec([
    Label('Между боями'),
    H('Не только меч'),
    Cols([
      Card('f_forge', 'Ремёсла', 'Наставники учат ремеслу. Кузня перекуёт клинок, алхимик сварит зелье, книжник перепишет свиток.'),
      Card('f_trade', 'Торг и хозяйство', 'Цены в каждом городе свои. Кони, телеги, припасы, имения — и голод, если про еду забыть.'),
      Card('f_tavern', 'Корчма', 'Место встречи игроков: обмен вещами, сбор отряда и героев, которых можно позвать к своему столу.'),
    ], {mt: '3rem'}),
  ], {bg: C.bg2, cs: '760px'}),

  /* 11. Скриншоты */
  Sec([
    Label('Как это выглядит'),
    H('Кадры из игры'),
    B('core/gallery', {columns: 2, linkTo: 'media', imageCrop: true, align: 'wide', sizeSlug: 'full', style: {spacing: {blockGap: {top: '14px', left: '14px'}, margin: {top: '2.5rem'}}}},
      [[240, 'g2kgec', 'Бой на гексах'], [239, 'p10eh0', 'Карта края'], [235, 'l82f47r', 'Разговор со старостой'], [238, '9btiuu', 'Снаряжение героя']].map(([id, f, alt]) =>
        B('core/image', {id, url: U + f + '.png', alt, sizeSlug: 'full', linkDestination: 'media', href: U + f + '.png'}))),
  ], {cs: '760px'}),

  /* 12. Вместе */
  Sec([
    Label('Вместе'),
    H('До четырёх за одним столом'),
    P('Каждый ведёт своего героя. Соберитесь в корчме, начните сагу вместе или зовите друзей в свою. Сохранения хранятся в облаке через Google или почту, так что можно продолжить с другого компьютера.', {align: 'center', ty: {fontSize: '1.15rem'}}),
  ], {bg: C.bg3, cs: '760px', py: '5rem'}),

  /* 13. Финал */
  Cov('kv_war', [
    Label('Порубежье ждёт'),
    H('Мёртвых не буди, живых не продавай', 2, {fs: 'clamp(2rem, 4.4vw, 3.4rem)'}),
    P('Ольшанская присказка', {align: 'center', color: C.mut, ty: {fontStyle: 'italic'}}),
    Btns([Btn('Играть на itch.io', ITCH), Btn('Microsoft Store', MS, true)]),
    P('<a href="/main/">Свод правил</a> · <a href="/istorii/">Истории Порубежья</a>', {align: 'center', color: C.mut, sp: {margin: {top: '2rem'}}}),
  ], {mh: 80, dim: 40}),
];
window._landing = wp.blocks.serialize(page);
window._landing.length;
