# Roland bildesortering

Sist kontrollert mot filsystemet og `src/App.tsx`: 2026-06-12.

## Nåtilstand

* `inbox/`: 0 filer
* `summer/`: 53 originalfiler
* `winter/`: 107 originalfiler
* `shared/`: 21 originalfiler
* `public/images/web/summer/`: 59 publiserte filer
* `public/images/web/winter/`: 114 publiserte filer
* `public/images/web/shared/`: 15 publiserte filer

`scripts/optimize-images.ps1` behandler JPG/JPEG og MP4 i valgte grupper. Standardgruppene er `summer/`, `winter/`, `shared/` og `inbox/`, og `-Groups` kan brukes for å begrense kjøringen. Bilder skrives til `public/images/web/<gruppe>/` og `public/images/thumbs/<gruppe>/`.

Videoer transkodes med FFmpeg til lydløs H.264 i maksimalt 1280 piksler bredde, CRF 28 og `faststart`. Videominiatyrer skrives som WebP. MP4-filer spores med Git LFS via `.gitattributes`.

## Midlertidig filnavnvisning

Alle aktive galleriinnslag viser midlertidig fil-ID direkte under bildet eller videoen. Bare filnavnet vises, uten mappe og filtype, for eksempel `1000020232`.

Teksten kan markeres og kopieres med vanlig tekstmarkør. Klikk på filnavnet åpner ikke bildevisningen. Dette er lagt inn for at Roland skal kunne oppgi eksakte filer og ønsket rekkefølge uten å bruke plassnummer som kan endre seg.

Ingen bilder er flyttet, slettet eller omorganisert som del av denne identifikasjonsløsningen.

Alle publiserte sesongbilder vises nå: 59 sommerbilder og 109 vinterbilder. I tillegg vises alle fem Randonee-videoene og to unike bilder fra `shared/`. Tidligere utvalgte bilder beholder gruppene og rekkefølgen sin; øvrige filer ligger i «Flere sommerbilder» eller «Flere vinterbilder».

Kjent advarsel:

* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1608.jpg` er en avkortet JPEG. ImageMagick klarer å generere WebP, men rapporterer prematur filslutt.

## Forside-sekvens

Originalene ligger i `home/originals/`:

* `01_tidlig_var.png`
* `02_sen_var.png`
* `03_sommer.png`
* `04_sensommer.png`
* `05_host.png`
* `06_senhost.png`
* `07_vinter.png`
* `08_dypvinter.png`

Web-variantene som brukes av appen ligger i `home/` med samme navn og filtypen `.webp`.

## Aktivt sommergalleri

Stiene under er relative til `public/images/web/`. Listen samsvarer med `summerGalleryGroups` i `src/App.tsx`.

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

### Flere sommerbilder

* `summer/1000002459.webp`
* `summer/1000004115.webp`
* `summer/1000004619.webp`
* `summer/1000004659.webp`
* `summer/1000004702.webp`
* `summer/1000004706.webp`
* `summer/1000004710.webp`
* `summer/1000004740.webp`
* `summer/1000004817.webp`
* `summer/1000004818.webp`
* `summer/1000004824.webp`
* `summer/1000005629.webp`
* `summer/1000009873.webp`
* `summer/1000010085.webp`
* `summer/1000010087.webp`
* `summer/1000010088.webp`
* `summer/1000010373.webp`
* `summer/1000010374.webp`
* `summer/1000013423.webp`
* `summer/1000013491.webp`
* `summer/1000016048.webp`
* `summer/1000021448.webp`
* `summer/1000021801.webp`
* `summer/1000021808.webp`
* `summer/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3939.webp`
* `shared/1000004112.webp`
* `shared/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_390.webp`

Følgende publiserte `shared`-bilder er bevisst skjult fra sommersiden:

* `1000021710`
* `1000021712`
* `1000021713`
* `1000021729`
* `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1220`

Originalene til `1000000148`, `1000001037`, `1000013646`, `1000015925`, `1000016022` og `...all_4171` ligger i `shared/`. Publiserte kopier ligger i `public/images/web/summer/` fordi de brukes av sommergalleriet.

Sommer-hero bruker `summer/1000001425.jpg` direkte fra `src/assets/roland/` via CSS.

## Aktivt vintergalleri

Stiene under er relative til `public/images/web/`. Listen samsvarer med `winterGalleryGroups` i `src/App.tsx`.

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
* `winter/1000019898.mp4`
* `winter/1000020204.mp4`
* `winter/1000020211.mp4`
* `winter/1000020230.mp4`
* `winter/1000020308.mp4`

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

### Flere vinterbilder

* `winter/1000000855.webp`
* `winter/1000000866.webp`
* `winter/1000000867.webp`
* `winter/1000000991.webp`
* `winter/1000000992.webp`
* `winter/1000000993.webp`
* `winter/1000000994.webp`
* `winter/1000001012.webp`
* `winter/1000001047.webp`
* `winter/1000001052.webp`
* `winter/1000001118.webp`
* `winter/1000004017.webp`
* `winter/1000010930.webp`
* `winter/1000010934.webp`
* `winter/1000010937.webp`
* `winter/1000012751.webp`
* `winter/1000013130.webp`
* `winter/1000013156.webp`
* `winter/1000013160.webp`
* `winter/1000013162.webp`
* `winter/1000013175.webp`
* `winter/1000013212.webp`
* `winter/1000013213.webp`
* `winter/1000013371.webp`
* `winter/1000013484.webp`
* `winter/1000013488.webp`
* `winter/1000013520.webp`
* `winter/1000013591.webp`
* `winter/1000013651.webp`
* `winter/1000015014.webp`
* `winter/1000015787.webp`
* `winter/1000015791.webp`
* `winter/1000015793.webp`
* `winter/1000015794.webp`
* `winter/1000015795.webp`
* `winter/1000015917.webp`
* `winter/1000016003.webp`
* `winter/1000016265.webp`
* `winter/1000016266.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1587.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1980.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_2041.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3473.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3724.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3749.webp`
* `winter/cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_5192.webp`

Originalene til `1000015792` og `1000015987` ligger i `shared/`. Publiserte kopier ligger i `public/images/web/winter/` fordi de brukes av vintergalleriet.

Randonee-videoene er publisert uten lyd og vises etter bildene i gruppen. De fem webfilene ligger bare i `public/images/web/winter/`; store dublettoriginaler under `src/assets/roland/winter/` ble fjernet etter at webversjonene var kontrollert.

Webvideoene er 720p H.264 og har følgende omtrentlige størrelser:

* `1000019898.mp4`: 4,21 MB
* `1000020204.mp4`: 3,58 MB
* `1000020211.mp4`: 8,96 MB
* `1000020230.mp4`: 3,49 MB
* `1000020308.mp4`: 3,09 MB

Vinter-hero bruker `winter/1000020473.jpg` direkte fra `src/assets/roland/` via CSS.

## Fellesfiler

`shared/` inneholder generelle Senja-motiv, enkelte originaler som publiseres under en sesong og logoarkiv.

Logo:

* Kilde: `shared/breathe-senja-logo-source.png`
* Publisert fil: `public/images/breathe-senja-logo.png`
* Logoen er beskåret fra den forbedrede originalfilen, har transparent bakgrunn og romslig marg, og er ikke nytegnet.
* Logoen i infopanelet er ikke klikkbar. Hover-effekten styres i `src/index.css`.

Eldre logoalternativer ligger som `shared/logo_1.png`, `logo_2.png`, `logo_3.png` og `logo_11.png`.

## Leveranser

### 2026-06-12

Fem Randonee-videoer ble behandlet og lagt etter bildene i Randonee-gruppen:

* `1000019898.mp4`
* `1000020204.mp4`
* `1000020211.mp4`
* `1000020230.mp4`
* `1000020308.mp4`

Lydsporene ble fjernet. Webversjonene ble komprimert fra totalt omtrent 276 MB til omtrent 23 MB og konvertert fra 1080p HEVC til 720p H.264. Videominiatyrer ble generert som WebP.

Den tidligere videoen `cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1583.mp4` ble fjernet fra vintergalleriet, kildefilene og publiserte mapper.

Git LFS ble aktivert for `*.mp4`. Den midlertidige, kopierbare filnavnvisningen ble lagt til under alle aktive galleriinnslag for avklaring av Rolands ønskede bildeutvalg og rekkefølge.

Alle tidligere skjulte publiserte bilder ble gjort synlige i egne sluttgrupper, uten å flytte eller slette filer og uten å endre de eksisterende gruppenes rekkefølge.

### 2026-06-11

74 JPG-filer ble kontrollert visuelt og med SHA-256:

* 28 nye vinterbilder ble flyttet til `winter/`.
* 33 nye sommerbilder ble flyttet til `summer/`.
* `1000004112.jpg` ble flyttet til `shared/`.
* Ni byteidentiske duplikater ble droppet.
* Tre mobilskjermbilder (`1000000839.jpg`, `1000002870.jpg`, `1000002872.jpg`) ble droppet.
* WebP og thumbnails ble generert med `scripts/optimize-images.ps1 -ImagesOnly`.

Duplikatene var `1000001017`, `1000001049`, `1000001116`, `1000013646`, `1000015925`, `1000015931`, `1000015985`, `1000015987` og `1000016022`. `1000015931` var samme innhold som `1000013646`.

### 2026-06-10

To større leveranser ble sortert:

* 18 nye topptur-/randoneebilder ble flyttet til `winter/`; fem duplikater ble droppet.
* En senere leveranse ga seks nye sommerbilder og 29 nye vinterbilder; åtte duplikater ble droppet.
* Fire Senja-bilder og fire eldre logofiler ble flyttet til `shared/`.

## Ikke tilgjengelige filer

Følgende filer var oppgitt i tidligere e-post-/delingslister, men finnes fortsatt ikke i sorteringen:

* `1000019861.jpg`, `1000019801.jpg`, `1000019852.jpg`, `1000013638.jpg`
* `1000013168.jpg`, `1000013167.jpg`, `1000013120.jpg`, `1000013121.jpg`
* `1000013118.jpg`, `1000013117.jpg`, `1000013113.jpg`, `1000013110.jpg`, `1000013108.jpg`, `1000013112.jpg`
* `1000010090.jpg`, `1000009863.jpg`, `1000005625.jpg`, `1000004819.jpg`
* `1000004739.jpg`, `1000004716.jpg`, `1000004712.jpg`, `1000004709.jpg`, `1000004705.jpg`
* `1000004587.jpg`, `1000004540.jpg`, `1000002629.jpg`, `1000002627.jpg`
* `1000002582.jpg`, `1000002554.jpg`, `1000002450.jpg`, `1000002445.jpg`, `1000002440.jpg`
* `1000001933.jpg`, `1000001678.jpg`, `1000001672.jpg`, `1000001652.jpg`
* `1000020207.jpg`, `1000020208.jpg`, `1000020210.jpg`, `1000020209.jpg`, `1000020206.jpg`
* `1000019891.jpg`, `1000019885.jpg`, `1000019886.jpg`, `1000019854.jpg`

Filer som ble sett 2026-06-03, men ikke importert før innboksen ble tømt:

* `1000001475.jpg`, `1000001476.jpg`, `1000002194.jpg`
* `1000013114.jpg`, `1000013115.jpg`, `1000020489.jpg`
* `1000020468.mp4`

## Kontrollrutine

Ved neste leveranse:

1. Sammenlign SHA-256 mot `summer/`, `winter/` og `shared/`.
2. Kontroller nye motiv visuelt.
3. Flytt originalene til riktig mappe og tøm `inbox/`.
4. Oppdater aktive grupper i `src/App.tsx` bare med de sterkeste og mest varierte bildene.
5. Kjør `scripts/optimize-images.ps1 -ImagesOnly` for bilder, eller `scripts/optimize-images.ps1 -Groups <gruppe> -VideosOnly` for videoer.
6. Kontroller at alle aktive ID-er finnes under riktig `public/images/web/`-mappe.
7. Kontroller med `ffprobe` at publiserte videoer bare inneholder videostrøm og er H.264.
8. Oppdater denne filen og kjør `npm run build` og `npm run lint`.
