# Roland bildesortering

Fysisk sortering etter gjennomgang. Innboksen er tom etter ny gjennomgang 2026-06-11.

## Forside-sekvens

Sesongbildene brukes som bakgrunnssekvens på hovedsiden. Originalene er beholdt urørt som PNG:

* `home/originals/01_tidlig_var.png`
* `home/originals/02_sen_var.png`
* `home/originals/03_sommer.png`
* `home/originals/04_sensommer.png`
* `home/originals/05_host.png`
* `home/originals/06_senhost.png`
* `home/originals/07_vinter.png`
* `home/originals/08_dypvinter.png`

Web-varianter for bruk i appen ligger i `home/`:

* `home/01_tidlig_var.webp`
* `home/02_sen_var.webp`
* `home/03_sommer.webp`
* `home/04_sensommer.webp`
* `home/05_host.webp`
* `home/06_senhost.webp`
* `home/07_vinter.webp`
* `home/08_dypvinter.webp`

Disse er laget manuelt med ImageMagick som høy-kvalitets WebP uten nedskalering. `scripts/optimize-images.ps1` behandler per nå bare `summer/`, `winter/` og `shared/`, og tar bare JPG/JPEG-bilder til `public/images`.

## Inbox-gjennomgang 2026-06-03

`src/assets/roland/inbox/` inneholdt 22 filer fra Roland. Mappen ble gjennomgått, sammenlignet mot eksisterende sorterte filer og deretter tømt.

Eksakte duplikater av eksisterende sorterte filer:

* `1000001200.jpg` - finnes som `winter/1000001200.jpg`
* `1000019870.jpg` - finnes som `winter/1000019870.jpg`
* `1000019883.jpg` - finnes som `winter/1000019883.jpg`
* `1000020234.jpg` - finnes som `winter/1000020234.jpg`
* `1000020236.jpg` - finnes som `winter/1000020236.jpg`
* `1000020242.jpg` - finnes som `winter/1000020242.jpg`
* `1000020473.jpg` - finnes som `winter/1000020473.jpg`
* `1000020488.jpg` - finnes som `winter/1000020488.jpg`
* `1000021458.jpg` - finnes som `summer/1000021458.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1583.mp4` - finnes som `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1583.mp4`

Nye kandidater som ble sett i inbox, men ikke importert til sorterte mapper:

* `1000001475.jpg` - sommer / båt på strand
* `1000001476.jpg` - sommer / båt på strand
* `1000002194.jpg` - sommer / kveldsstemning ved vann
* `1000013114.jpg` - vinter / islagt fjord
* `1000013115.jpg` - vinter / islagt fjord
* `1000020489.jpg` - vinter / Roland på topptur

Nye videoer som ble sett i inbox, men ikke importert til sorterte mapper:

* `1000020230.mp4`
* `1000020468.mp4`

`scripts/optimize-images.ps1` ble kjørt etter gjennomgangen. Scriptet behandler ikke `inbox/`, bare `summer/`, `winter/` og `shared/`. Kjøringen fullførte, men rapporterte:

* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1608.jpg` gir JPEG-varsel om prematur filslutt / korrupt JPEG-data.
* `ffmpeg` manglet på PATH, så video ble kopiert, men video-thumbnail ble ikke generert.

## Inbox-gjennomgang 2026-06-10

`src/assets/roland/inbox/` inneholdt åtte nye filer. Alle ble flyttet til `shared/`, og innboksen ble tømt.

Flyttet:

* `1000021710.jpg`
* `1000021712.jpg`
* `1000021713.jpg`
* `1000021729.jpg`
* `logo_1.png`
* `logo_2.png`
* `logo_3.png`
* `logo_11.png`

## Topptur/randonee-bilder 2026-06-10

Roland oppga at sendingen inneholdt 25 bilder. Det var 23 JPG-filer i `src/assets/roland/inbox/`. Alle motivene hører til vinter / topptur / randonee.

Fem filer var byteidentiske duplikater av filer som allerede lå i `winter/`, og ble derfor ikke importert på nytt:

* `1000001184.jpg`
* `1000001234.jpg`
* `1000013487.jpg`
* `1000020232.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1608.jpg`

18 nye bilder ble flyttet til `winter/` og optimalisert til WebP i `public/images/web/winter/` og `public/images/thumbs/winter/`:

* `1000001017.jpg`
* `1000001019.jpg`
* `1000001049.jpg`
* `1000001116.jpg`
* `1000001131.jpg`
* `1000001202.jpg`
* `1000001233.jpg`
* `1000001282.jpg`
* `1000001700.jpg`
* `1000003991.jpg`
* `1000003998.jpg`
* `1000004018.jpg`
* `1000019862.jpg`
* `1000020480.jpg`
* `1000021591.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1037.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1271.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1455.jpg`

`1000001282.jpg`, `1000001700.jpg` og `...all_1037.jpg` hadde tidligere blitt fjernet da det aktive vintergalleriet ble strammet inn. Alle de 23 bildene fra denne sendingen er nå med i det aktive vintergalleriet. `...all_1608.jpg` ligger fortsatt under Vinterro; de øvrige ligger under Randonee.

Innboksen er tom etter gjennomgangen.

## Ny bildeleveranse 2026-06-11

`src/assets/roland/inbox/` inneholdt 74 JPG-filer. Alle filer ble kontrollert visuelt og sammenlignet med eksisterende sorterte originaler ved hjelp av SHA-256.

Ni filer var byteidentiske duplikater og ble droppet:

* `1000001017.jpg` - finnes som `winter/1000001017.jpg`
* `1000001049.jpg` - finnes som `winter/1000001049.jpg`
* `1000001116.jpg` - finnes som `winter/1000001116.jpg`
* `1000013646.jpg` - finnes som `shared/1000013646.jpg`
* `1000015925.jpg` - finnes som `shared/1000015925.jpg`
* `1000015931.jpg` - samme innhold som `shared/1000013646.jpg`
* `1000015985.jpg` - finnes som `summer/1000015985.jpg`
* `1000015987.jpg` - finnes som `shared/1000015987.jpg`
* `1000016022.jpg` - finnes som `shared/1000016022.jpg`

Tre mobilskjermbilder ble ikke importert fordi de har store grensesnittflater og svært liten brukbar bildeflate:

* `1000000839.jpg`
* `1000002870.jpg`
* `1000002872.jpg`

28 nye vinterbilder ble flyttet til `winter/`. Leveransen inneholder nordlys, vinterfjorder, snølandskap og toppturmotiv:

* `1000000411.jpg`, `1000000760.jpg`, `1000000855.jpg`, `1000000866.jpg`, `1000000867.jpg`, `1000000868.jpg`, `1000000870.jpg`, `1000000898.jpg`
* `1000000991.jpg`, `1000000992.jpg`, `1000000993.jpg`, `1000000994.jpg`, `1000001012.jpg`, `1000001018.jpg`, `1000001021.jpg`, `1000001047.jpg`
* `1000001051.jpg`, `1000001052.jpg`, `1000001118.jpg`, `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1587.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1980.jpg`, `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_2041.jpg`, `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_2924.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3473.jpg`, `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3724.jpg`, `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3756.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_5298.jpg`, `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_5319.jpg`

33 nye sommerbilder ble flyttet til `summer/`. Leveransen inneholder båter, strender, klart vann, fjordlandskap og solnedganger:

* `1000002459.jpg`, `1000002628.jpg`, `1000004115.jpg`, `1000004619.jpg`, `1000004659.jpg`, `1000004665.jpg`, `1000004676.jpg`, `1000004702.jpg`
* `1000004704.jpg`, `1000004706.jpg`, `1000004707.jpg`, `1000004710.jpg`, `1000004731.jpg`, `1000004740.jpg`, `1000004815.jpg`, `1000004817.jpg`
* `1000004818.jpg`, `1000004820.jpg`, `1000004824.jpg`, `1000004825.jpg`, `1000004826.jpg`, `1000004828.jpg`, `1000005629.jpg`, `1000009873.jpg`
* `1000010085.jpg`, `1000010087.jpg`, `1000010088.jpg`, `1000010089.jpg`, `1000013423.jpg`, `1000013491.jpg`, `1000016044.jpg`, `1000016048.jpg`
* `1000021466.jpg`

`1000004112.jpg`, et regnbuemotiv over fjorden, ble flyttet til `shared/`.

Det aktive sommergalleriet fikk 14 nye bilder fordelt på Båtturer, Strandturer og Stillhet på fjorden. Det aktive vintergalleriet fikk fem nye toppturbilder og sju nye bilder under Vinterro. Nesten-like varianter og svakere bilder er fortsatt bevart i de sorterte originalmappene, men er ikke lagt på siden.

`scripts/optimize-images.ps1 -ImagesOnly` ble kjørt etter sorteringen. WebP-filer ble generert i `public/images/web/` og `public/images/thumbs/`. Den eneste advarselen var den allerede kjente avkortede JPEG-filen `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1608.jpg`.

Innboksen er tom etter gjennomgangen.

## Ny bildeleveranse 2026-06-10

`src/assets/roland/inbox/` inneholdt 43 JPG-filer. Motivene ble kontrollert visuelt og sammenlignet med eksisterende sortering ved hjelp av SHA-256.

Åtte filer var byteidentiske duplikater og ble ikke importert på nytt:

* `1000004018.jpg` - finnes som `winter/1000004018.jpg`
* `1000013165.jpg` - finnes som `winter/1000013165.jpg`
* `1000013170.jpg` - finnes som `winter/1000013170.jpg`
* `1000013590.jpg` - finnes som `winter/1000013590.jpg`
* `1000015792.jpg` - finnes som `shared/1000015792.jpg`
* `1000015976.jpg` - finnes som `winter/1000015976.jpg`
* `1000015982.jpg` - finnes som `winter/1000015982.jpg`
* `1000021458.jpg` - finnes som `summer/1000021458.jpg`

Seks nye sommerbilder ble flyttet til `summer/`:

* `1000010373.jpg` - båt og brygge
* `1000010374.jpg` - båt ved flytebrygge
* `1000021448.jpg` - liten båt på sjøen
* `1000021801.jpg` - brygge ved stille vann
* `1000021808.jpg` - fangst ved vannkanten
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3939.jpg` - utsikt fra båt

29 nye vinterbilder ble flyttet til `winter/`:

* `1000004017.jpg`
* `1000010930.jpg`
* `1000010934.jpg`
* `1000010937.jpg`
* `1000012751.jpg`
* `1000013130.jpg`
* `1000013156.jpg`
* `1000013160.jpg`
* `1000013162.jpg`
* `1000013175.jpg`
* `1000013212.jpg`
* `1000013213.jpg`
* `1000013371.jpg`
* `1000013484.jpg`
* `1000013488.jpg`
* `1000013520.jpg`
* `1000013591.jpg`
* `1000013651.jpg`
* `1000015014.jpg`
* `1000015787.jpg`
* `1000015791.jpg`
* `1000015793.jpg`
* `1000015794.jpg`
* `1000015795.jpg`
* `1000015917.jpg`
* `1000016265.jpg`
* `1000016266.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3749.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_5192.jpg`

Vinterleveransen inneholder nordlys, isfiske, vinterlandskap og enkelte mobilskjermbilder. `1000013488.jpg` og `1000015795.jpg` hadde tidligere blitt tatt ut ved gallerikuratering, men er nå importert igjen som sorterte arkivkandidater. De nye bildene er ikke automatisk lagt til i det aktive galleriet.

`scripts/optimize-images.ps1 -ImagesOnly` ble kjørt etter sorteringen. Alle nye bilder fikk WebP-varianter i `public/images/web/` og `public/images/thumbs/`. Den eneste advarselen var den allerede kjente avkortede JPEG-filen `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1608.jpg`.

Følgende bilder fra listen over tidligere utilgjengelige e-postfiler ble funnet i denne leveransen: `1000015014.jpg`, `1000013591.jpg`, `1000013213.jpg`, `1000013212.jpg`, `1000013175.jpg`, `1000013162.jpg`, `1000013156.jpg`, `1000013160.jpg`, `1000012751.jpg` og `1000010937.jpg`.

Innboksen er tom etter gjennomgangen.

## Gallerigjennomgang 2026-06-04

Bildene som faktisk brukes i `src/App.tsx` ble kontrollert med ImageMagick og visuell kontaktark-gjennomgang.

Metode:

* Skarphet ble målt med Laplacian-basert kantmåling på nedskalert gråtonevariant.
* Nesten-duplikater ble funnet med enkle perceptuelle hashes og deretter kontrollert visuelt.
* WebP-bilder i `public/images/web`, thumbnails i `public/images/thumbs` og originaler i `src/assets/roland` ble slettet for bilder som ble tatt ut av galleriet.

Fjernet som eksakt duplikat eller tydelig svakt bilde:

* `summer/1000015931.jpg` - eksakt duplikat av `summer/1000013646.jpg`.
* `winter/1000013488.jpg` - nesten identisk med `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1446.jpg`, men svakere.
* `winter/1000015795.jpg` - svært lav oppløsning og uskarpt motlysbilde.

Fjernet for å stramme inn vintergalleriet:

* `winter/1000001282.jpg`
* `winter/1000001700.jpg`
* `winter/1000013166.jpg`
* `winter/1000013372.jpg`
* `winter/1000013490.jpg`
* `winter/1000019867.jpg`
* `winter/1000019868.jpg`
* `winter/1000020203.jpg`
* `winter/1000020229.jpg`
* `winter/1000020233.jpg`
* `winter/1000020241.jpg`
* `winter/1000020485.jpg`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1037.jpg`

Resultat:

* Sommergalleriet gikk fra 21 til 20 bilder.
* Vintergalleriet gikk fra 45 til 32 bilder, pluss én video.
* `npm run build` passerte etter oppryddingen.

## Aktivt vintergalleri

Brukes til vinterside, randonee, toppturer på ski, isfiske, snø, fjelltopper og vinterstemning.

### Randonee

* `winter/1000001017.webp`
* `winter/1000001018.webp`
* `winter/1000001019.webp`
* `winter/1000001021.webp`
* `winter/1000001049.webp`
* `winter/1000001051.webp`
* `winter/1000001116.webp`
* `winter/1000001131.webp`
* `winter/1000001184.webp`
* `winter/1000001192.webp`
* `winter/1000001200.webp`
* `winter/1000001202.webp`
* `winter/1000001206.webp`
* `winter/1000001233.webp`
* `winter/1000001234.webp`
* `winter/1000001282.webp`
* `winter/1000001650.webp`
* `winter/1000001700.webp`
* `winter/1000003991.webp`
* `winter/1000003998.webp`
* `winter/1000004018.webp`
* `winter/1000013487.webp`
* `winter/1000019862.webp`
* `winter/1000019870.webp`
* `winter/1000019883.webp`
* `winter/1000019884.webp`
* `winter/1000019890.webp`
* `winter/1000020232.webp`
* `winter/1000020234.webp`
* `winter/1000020236.webp`
* `winter/1000020242.webp`
* `winter/1000020274.webp`
* `winter/1000020473.webp`
* `winter/1000020480.webp`
* `winter/1000020484.webp`
* `winter/1000020488.webp`
* `winter/1000021591.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1037.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1271.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1273.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1446.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1455.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_5298.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_5319.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1583.mp4`

### Isfiske

* `winter/1000013116.webp`
* `winter/1000013165.webp`
* `winter/1000013169.webp`
* `winter/1000013170.webp`
* `winter/1000013590.webp`

### Vinterro

* `winter/1000001280.webp`
* `winter/1000000411.webp`
* `winter/1000000760.webp`
* `winter/1000000868.webp`
* `winter/1000000870.webp`
* `winter/1000000898.webp`
* `winter/1000015792.webp`
* `winter/1000015976.webp`
* `winter/1000015982.webp`
* `winter/1000015987.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1510.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1608.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_2924.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3756.webp`

Beste kandidater til vinter-hero:

* `winter/1000020473.jpg`
* `winter/1000020236.jpg`
* `winter/1000019883.jpg`

Beste kandidater til person-/detaljbilder vinter:

* `winter/1000020484.jpg`
* `winter/1000020274.jpg`
* `winter/1000020488.jpg`

## Aktivt sommergalleri

Brukes til sommerside, båtturer, strender, fjord, fiske, bading og varmere årstidsstemning.

### Båtturer

* `summer/1000001425.webp`
* `summer/1000004704.webp`
* `summer/1000004707.webp`
* `summer/1000004825.webp`
* `summer/1000004826.webp`
* `summer/1000004828.webp`
* `summer/1000015985.webp`
* `summer/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3921.webp`
* `summer/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_4243.webp`

### Strandturer

* `summer/1000000191.webp`
* `summer/1000002628.webp`
* `summer/1000001432.webp`
* `summer/1000001481.webp`
* `summer/1000004815.webp`
* `summer/1000004820.webp`
* `summer/1000016037.webp`
* `summer/1000021466.webp`
* `summer/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_4217.webp`

### Fisketurer

* `summer/1000000599.webp`
* `summer/1000001424.webp`
* `summer/1000001449.webp`
* `summer/1000021458.webp`

### Stillhet på fjorden

* `summer/1000000148.webp`
* `summer/1000001037.webp`
* `summer/1000001400.webp`
* `summer/1000004665.webp`
* `summer/1000004676.webp`
* `summer/1000004731.webp`
* `summer/1000013646.webp`
* `summer/1000010089.webp`
* `summer/1000015925.webp`
* `summer/1000016044.webp`
* `summer/1000016022.webp`
* `summer/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_4171.webp`

Beste kandidater til sommer-hero:

* `summer/1000016037.jpg`
* `summer/1000015985.jpg`
* `shared/1000016022.jpg`
* `shared/1000013646.jpg`

## Felles

Brukes til generell Senja-stemning, om-/profilseksjoner eller bakgrunner som ikke trenger å være tydelig knyttet til en bestemt årstid.

* `shared/1000000148.jpg` - rolig fjord / speiling, 4000x3000, 2793 KB
* `shared/1000001037.jpg` - tåke ved fjord / stille landskap, 1440x1080, 228 KB
* `shared/1000013646.jpg` - rolig Senja-landskap
* `shared/1000015792.jpg` - solnedgang ved fjorden
* `shared/1000015925.jpg` - blå fjordstemning
* `shared/1000015987.jpg` - rolig kveldsstemning
* `shared/1000016022.jpg` - fjord-/værstemning
* `shared/1000021710.jpg`
* `shared/1000021712.jpg`
* `shared/1000021713.jpg`
* `shared/1000021729.jpg`
* `shared/1000004112.jpg` - regnbue over fjorden
* `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1220.jpg` - campingvogn / praktisk base, 4000x3000, 4364 KB
* `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_390.jpg` - regnbue over fjord, 4000x3000, 3513 KB
* `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_4171.jpg` - kveldsfjord / silhuett, 4032x3024, 265 KB
* `shared/logo_1.png`
* `shared/logo_2.png`
* `shared/logo_3.png`
* `shared/logo_11.png`
* `shared/breathe-senja-logo-source.jpg` - originalfoto brukt direkte til beskåret logo med transparent bakgrunn; ingen nytegning

## Bilder som ikke er tilgjengelige fra e-post

Disse bildene var listet i e-posten fra Roland, men kunne ikke lastes ned fordi tilgang manglet, eller fordi filene var delt via en begrenset Google-lenke.

* `1000019861.jpg`
* `1000019801.jpg`
* `1000019852.jpg`
* `1000013638.jpg`
* `1000013168.jpg`
* `1000013167.jpg`
* `1000013120.jpg`
* `1000013121.jpg`
* `1000013118.jpg`
* `1000013117.jpg`
* `1000013113.jpg`
* `1000013110.jpg`
* `1000013108.jpg`
* `1000013112.jpg`
* `1000010090.jpg`
* `1000009863.jpg`
* `1000005625.jpg`
* `1000004819.jpg`
* `1000004739.jpg`
* `1000004716.jpg`
* `1000004712.jpg`
* `1000004709.jpg`
* `1000004705.jpg`
* `1000004587.jpg`
* `1000004540.jpg`
* `1000002629.jpg`
* `1000002627.jpg`
* `1000002582.jpg`
* `1000002554.jpg`
* `1000002450.jpg`
* `1000002445.jpg`
* `1000002440.jpg`
* `1000001933.jpg`
* `1000001678.jpg`
* `1000001672.jpg`
* `1000001652.jpg`
* `1000020207.jpg`
* `1000020208.jpg`
* `1000020210.jpg`
* `1000020209.jpg`
* `1000020206.jpg`
* `1000019891.jpg`
* `1000019885.jpg`
* `1000019886.jpg`
* `1000019854.jpg`

## Kontroll mot filer som ble meldt som vanskelige å laste ned

Brukers kontrolliste ble gjennomgått mot sorteringen. Duplikater i kontrollisten er ignorert i punktene under.

### Bekreftet tilgjengelige i sorteringen

* `1000020232.jpg` - finnes som `winter/1000020232.jpg`
* `1000019884.jpg` - finnes som `winter/1000019884.jpg`
* `1000013487.jpg` - finnes som `winter/1000013487.jpg`
* `1000001200.jpg` - finnes som `winter/1000001200.jpg`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1220.jpg` - finnes som `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1220.jpg`
* `1000021458.jpg` - finnes som `summer/1000021458.jpg`

### Bekreftet ikke tilgjengelige fra e-post

* `1000020207.jpg`
* `1000020208.jpg`
* `1000020210.jpg`
* `1000020209.jpg`
* `1000020206.jpg`
* `1000019891.jpg`
* `1000019885.jpg`
* `1000019886.jpg`
* `1000019854.jpg`

### Bekreftet video i sorteringen

* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1583.mp4` - finnes som `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1583.mp4`

### Senere funnet i inbox, men ikke importert

Disse ble funnet ved inbox-gjennomgangen 2026-06-03, men ble ikke flyttet inn i sorterte mapper før inbox ble tømt.

* `1000001475.jpg`
* `1000001476.jpg`
* `1000002194.jpg`
* `1000013114.jpg`
* `1000013115.jpg`
* `1000020489.jpg`

## Video til senere vurdering

* `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1583.mp4` - filmsnutt, ikke vurdert for bruk ennå

## Notater

* Se `Gallerigjennomgang 2026-06-04` for komplett logg over bilder som er fjernet fra aktivt galleri og filsystem.
* `1000021458.jpg` er den største filen og bør sannsynligvis optimaliseres før bruk.
* Vinterbildene på 4000x3000 er sterke, men bør skaleres ned og komprimeres før produksjonsbruk.
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1608.jpg` ga JPEG-varsel ved forhåndsvisning og bør kontrolleres visuelt før bruk.
* Et midlertidig kontaktark er generert her: `src/assets/roland/contact-sheet.jpg` for gjennomgang.
* Kontrollisten fra bruker inneholdt duplikater av `1000001475.jpg`, `1000001476.jpg`, `1000002194.jpg` og `1000021458.jpg`.
