# Roland bildesortering

Fysisk sortering etter gjennomgang. Innboksen er tom etter ny gjennomgang 2026-06-10.

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

* `winter/1000001184.webp`
* `winter/1000001192.webp`
* `winter/1000001200.webp`
* `winter/1000001206.webp`
* `winter/1000001234.webp`
* `winter/1000001650.webp`
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
* `winter/1000020484.webp`
* `winter/1000020488.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1273.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1446.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1583.mp4`

### Isfiske

* `winter/1000013116.webp`
* `winter/1000013165.webp`
* `winter/1000013169.webp`
* `winter/1000013170.webp`
* `winter/1000013590.webp`

### Vinterro

* `winter/1000001280.webp`
* `winter/1000015792.webp`
* `winter/1000015976.webp`
* `winter/1000015982.webp`
* `winter/1000015987.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1510.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1608.webp`

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
* `summer/1000015985.webp`
* `summer/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3921.webp`
* `summer/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_4243.webp`

### Strandturer

* `summer/1000000191.webp`
* `summer/1000001432.webp`
* `summer/1000001481.webp`
* `summer/1000016037.webp`
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
* `summer/1000013646.webp`
* `summer/1000015925.webp`
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
* `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1220.jpg` - campingvogn / praktisk base, 4000x3000, 4364 KB
* `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_390.jpg` - regnbue over fjord, 4000x3000, 3513 KB
* `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_4171.jpg` - kveldsfjord / silhuett, 4032x3024, 265 KB
* `shared/logo_1.png`
* `shared/logo_2.png`
* `shared/logo_3.png`
* `shared/logo_11.png`

## Bilder som ikke er tilgjengelige fra e-post

Disse bildene var listet i e-posten fra Roland, men kunne ikke lastes ned fordi tilgang manglet, eller fordi filene var delt via en begrenset Google-lenke.

* `1000019861.jpg`
* `1000019801.jpg`
* `1000019852.jpg`
* `1000015014.jpg`
* `1000013638.jpg`
* `1000013591.jpg`
* `1000013213.jpg`
* `1000013212.jpg`
* `1000013175.jpg`
* `1000013168.jpg`
* `1000013167.jpg`
* `1000013162.jpg`
* `1000013156.jpg`
* `1000013160.jpg`
* `1000013120.jpg`
* `1000013121.jpg`
* `1000013118.jpg`
* `1000013117.jpg`
* `1000013113.jpg`
* `1000013110.jpg`
* `1000013108.jpg`
* `1000013112.jpg`
* `1000012751.jpg`
* `1000010937.jpg`
* `1000010090.jpg`
* `1000010087.jpg`
* `1000010088.jpg`
* `1000010089.jpg`
* `1000009873.jpg`
* `1000009863.jpg`
* `1000005625.jpg`
* `1000004825.jpg`
* `1000004824.jpg`
* `1000004826.jpg`
* `1000004828.jpg`
* `1000004820.jpg`
* `1000004819.jpg`
* `1000004817.jpg`
* `1000004815.jpg`
* `1000004740.jpg`
* `1000004739.jpg`
* `1000004716.jpg`
* `1000004712.jpg`
* `1000004709.jpg`
* `1000004707.jpg`
* `1000004706.jpg`
* `1000004705.jpg`
* `1000004704.jpg`
* `1000004587.jpg`
* `1000004540.jpg`
* `1000002629.jpg`
* `1000002628.jpg`
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
* `1000019862.jpg`
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
* `1000019862.jpg`
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
