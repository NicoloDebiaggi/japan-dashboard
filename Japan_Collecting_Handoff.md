# Japan Collecting Dashboard — Handoff v2

## Obiettivo
Costruire una companion app personale per un futuro viaggio in Giappone, soprattutto Tokyo e Kyoto, che unisca collezionismo, shopping, cultura storica e pop, backlog di opere, cibo e souvenir culturali. Il criterio non è “accumulare merchandise”, ma trovare oggetti/esperienze con una storia o un forte valore personale.

## Architettura
- **Excel = source of truth dei contenuti**: `Japan_Collecting_Masterlist.xlsx`.
- **PWA = frontend**: `index.html` + `manifest.webmanifest` + `sw.js`.
- Sei sheet/tab, con nomi esatti: `MASTERLIST`, `SHOPPING`, `DA VEDERE`, `BACKLOG`, `CIBO`, `SOUVENIR`.
- Non hardcodare nuovi record nell’HTML: aggiungere/modificare dati nell’Excel.
- Il frontend deve essere desktop + mobile-first e mostrare un’immagine per ogni card, con fallback se l’URL esterno si rompe.

## PWA / stato locale
- App installabile quando servita via HTTPS; il pacchetto può essere pubblicato gratuitamente su un hosting statico.
- Dopo il primo caricamento online, service worker e cache rendono l’app utilizzabile offline.
- Nessun backend remoto richiesto: l’utente NON vuole sincronizzazione telefono-PC, multiutente o foto personali.
- Stato personale salvato in `localStorage`, non nel workbook:
  - MASTERLIST: `Comprato`, prezzo pagato, note.
  - SHOPPING / DA VEDERE: `Visitato`, note.
  - BACKLOG: `Completato`, note.
  - CIBO: `Provato`, note.
  - SOUVENIR: `Preso`, note.
- Supportare sempre export/import JSON dello stato locale come backup.
- Non introdurre `Visto ma non comprato`.
- L’itinerario giornaliero resta fuori scope; probabilmente verrà gestito in Notion.

## Rating e budget
Regola universale: **1 = basso/facile/comune → 5 = alto/difficile/raro**. Mostrare sempre anche etichetta testuale.
- Budget `Standard`: <= ¥10.000.
- Budget `Premium`: > ¥10.000. Non eliminare i Premium.
- SHOPPING usa `¥ / ¥¥ / ¥¥¥` come fascia prezzi generica.

## Gusti / opere centrali
Manga/autori: Ashita no Joe, GTO/Shonan Junai Gumi/Shonan 14 Days, Inio Asano/Oyasumi Punpun, Berserk, AKIRA, Takehiko Inoue (Slam Dunk/Vagabond; Real da leggere), Naoki Urasawa (20th Century Boys letto; Monster/Pluto da leggere), Vinland Saga.
Anime/registi: tutta la produzione principale di Satoshi Kon vista e amata; Ghost in the Shell e Ping Pong già visti.
Videogiochi: Dragon Quest, Final Fantasy, Monster Hunter, Pokémon prime due generazioni, FromSoftware/Souls, Metal Gear; Yakuza 0 e NieR:Automata già giocati.

## Regole collezionismo
IN scope: vinili/crossover, artbook, cataloghi di mostre, stampe, memorabilia, materiale promo/non-sale, pamphlet, props, design works/storyboard/key frames, retro games, Japan-only, limited box con forte valore espositivo, hardware speciale, figure particolari, souvenir culturali/artigianali.
Figure: umani e creature entrambi okay; nuove o usate; senza scatola okay se tenute bene; niente dimensioni enormi/1:1; statue Premium restano visibili.
OUT scope di default: manga giapponesi solo per prima stampa/obi/deluxe/kanzenban/box; merch moderno generico, acrylic/blind box/peluche comuni.

## Retrogame — decisioni attuali
- **MOTHER 1**: rimosso, troppo caro.
- **MOTHER 2 / EarthBound (Super Famicom)**: MASTERLIST opportunistica, priorità media; comprare solo se capita un buon prezzo. Non è nel BACKLOG.
- **MOTHER 3**: non aggiungere ora.
- **Chrono Trigger (Super Famicom)**: priorità alta; l’utente vuole recuperarlo nel breve. Target anche cartuccia sola, CIB non richiesto.
- **Dragon Quest III Famicom**: il principale target retro DQ, priorità alta. Cartuccia sola/incompleto va bene.
- Dragon Quest I può restare solo come opportunità bassa; DQ II non è un obiettivo prioritario.
- Non trasformare la Masterlist in museo storico: non aggiungere FF I/VI, DQ V, Mario, Zelda, Street Fighter, Castlevania, SMT o Metal Gear MSX senza richiesta esplicita.
- CIB non è necessario. Box/manuale sono un plus estetico da valutare sul momento.

## Pokémon
Mantenere solo due cluster principali: **Rosso + Blu** e **Oro + Argento**. Non reintrodurre Green, Blue No-JAN, Carddass o hardware speciale salvo richiesta.

## BACKLOG
Non reintrodurre automaticamente: MGS4, MGSV, Peace Walker, NieR Replicant, Ōkami, MOTHER 2/3, Ino-Head Gargoyle.
MGS2 e MGS3 restano. Chrono Trigger resta priorità alta.
- Per righe `Anime`: mantenere `Stagioni`, `Episodi totali` e `Fonte conteggio`.
- Per righe `Manga`: mantenere `Capitoli` e `Fonte conteggio`; se l'opera è in corso, indicare il numero attuale con `(in corso)` invece di inventare un totale.
- Per `Videogioco`: lasciare vuoti questi campi; non inserire ore stimate salvo futura richiesta.
- Le card BACKLOG devono mostrare il conteggio direttamente (es. `1 stagione · 13 episodi`, `162 capitoli`).

## SHOPPING
Tab autonomo; non mostrare badge ridondante “Shopping”. Per ogni negozio mostrare molto bene `Masterlist compatibile`, come target plausibili e NON stock garantito.
Preferenza personale: per usato/figure spesso privilegiare Ikebukuro/Nakano rispetto ad Akihabara, percepita come più cara.
Punti forti da mantenere: Nakano Broadway/Mandarake, Disk Union, Super Potato, TRADER, Surugaya, BEEP, Jimbocho Book Town, Oedo Antique Market, Tokyo City Flea Market Oi, Kappabashi, AniBirth Ikebukuro (Slam Dunk), Bandai Namco Cross Store Tokyo, Lashinbang/K-BOOKS Ikebukuro, Capcom Store Ikebukuro. ARTNIA e Shibuya PARCO restano ma a priorità bassa; Osaka può restare ma è improbabile nel viaggio.
Slam Dunk: mantenere i negozi/spot di shopping ma NON aggiungere prodotti Shohoku specifici in MASTERLIST per ora; l’utente vuole vedere sul posto.

## DA VEDERE — filosofia
L’utente ama molto anche storia/cultura tradizionale giapponese, non solo pop culture. Includere quartieri storici, templi/santuari, giardini, musei storici, artigianato, workshop; teatro tradizionale è meno prioritario. Per templi/luoghi culturali riportare quando possibile: storia sintetica, Maps/indirizzo, orari, chiusure/stagionalità, goshuin e prezzo se noto. Non serve etichetta buddhista/shinto.
Stato già visitato: usare un solo tag **`Già fatto`**.

### Tokyo / Kanto
Forti candidati: Edo-Tokyo Museum, Yanaka–Nezu–Sendagi, Kagurazaka, Fukagawa–Monzen-Nakacho, Rikugien, Jindaiji, Senso-ji, Meiji Jingu, Sanya/Namidabashi/Ashita no Joe, Yonezawa Memorial Library.
Kichijoji/Inokashira: facoltativo e a bassa priorità come quartiere quotidiano/parco, non per GTO.
Shonan/Enoshima/Kamakurakokomae: facoltativo. L’utente ha già fatto Kamakura città/templi ma NON Enoshima/passaggio a livello Slam Dunk.
J.League: tenere esperienza generica; scegliere match solo quando sono note le date.

### Monte Fuji
- Target principale: **Kawaguchiko / Fuji Five Lakes / onsen / vista Fuji**.
- Tenere anche **Yoshida Trail**, ma bassa priorità: circa 6,8 km salita + 7 km discesa, ~1.450 m D+, ~9–10 h di movimento complessivo, vetta 3.776 m. È il percorso con bastone da trekking timbrabile ai rifugi.
- Nel 2026 Yoshida è aperto 1 luglio–10 settembre; fuori stagione i sentieri alla vetta sono chiusi. Le date 2027 vanno verificate nell’anno del viaggio.
- Non aggiungere altri trekking impegnativi; sentieri facili/misti possono essere valutati.

### Kyoto già fatto / priorità
- Fushimi Inari: `Già fatto`, P5, da rifare.
- Kiyomizu-dera: `Già fatto`, P5, da rifare.
- Kinkaku-ji: `Già fatto`, P3.
- Ginkaku-ji + Philosopher’s Path: `Già fatto`, P2.
- Arashiyama Bamboo: `Già fatto`, P2.
- Nishiki Market: `Già fatto`, P4.
- Nijo-jo: saltabile / non prioritario.
- Tenryu-ji P3; Ryoan-ji P4; Sanjusangen-do P5; Nanzen-ji P4; To-ji P4; Uji + Byodo-in P5.

## CIBO
Niente storia o fasce prezzo. Card con: nome, JP, città/area, categoria, cos’è, contesto/posto suggerito, priorità, stato. L’utente prova praticamente tutto, ama izakaya. Niente focus sul bere. Omakase già fatto e non è priorità alta da rifare.

## SOUVENIR
Interesse per souvenir legati a un luogo/gesto/esperienza: goshuin/goshuincho (questa volta un libro condiviso in due), omamori, ema, daruma, shikishi, ukiyo-e/stampe, lacca, ceramica locale, calligrafia, artigianato da mercato e workshop leggeri. Meno interesse per ventagli/tessili. Evitare cose enormi; piccoli oggetti spedibili in sicurezza sono okay. Ha già uno shikishi paesaggistico usato e un torii personalizzato preso salendo Fushimi Inari.

## Regole per future chat
1. Leggere questo MD e l’Excel; l’Excel è source of truth dei record.
2. Prima di aggiungere, verificare duplicati.
3. Per richieste di disponibilità/prezzo/luoghi/orari usare fonti aggiornate.
4. Modificare HTML solo per UX/logica, non per aggiungere dati.
5. Ogni nuovo record deve avere `Image URL` quando possibile; frontend con fallback.
6. Aggiornare `Ultimo controllo` quando si verificano dati dinamici.
7. Non aggiungere eventi temporanei finché non sono note le date del viaggio, salvo richiesta.
