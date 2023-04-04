# Fake-news Portal

2022.évi választások sok változást hozott az internetes szörfözésben. A média tagolódása nyomán manapság egy-egy eseményt teljesen más aspektusokból ismerheti meg a 
gyanútlan hírolvasó ha egyik hírportál közleményét olvassa, és teljesen más aspektusból ha egy másik hírportálét. Innét származott az ötlet, hogy egy olyan hírportált készítsek,
ahol a hír valóságtartalmának megállapítása nem fog fejtörést okozni, mivel a Fake-news Portálon kizárólag kitalált híreket olvashatunk.

A projekt két fő részre tagolódik, a frontendre és a back-endre.
A frontend Angular CLI-ben készült. A formai elemek megjelenítéséért Bootstrap-et hívtam segítségül.
A backend gyártását ExpressJS rendszerben készítettem, számos apró egyéb kiegészítő használatával.


## Entitások

### User

A portálra regisztrálni lehet. A bejelentkezéskor autentikáció történik. Bizonyos végpontok csak így érhetők el a felhasználók számára.
Minden user rendelkezik username-mel, password-del és email-címmel. Opcionális mezők a bio, valamint avatár beállítása.

### Article

A híreket article entitásba rendeztem. Az article entitás főbb mezői a title és a body, a description és a tag-ek opcionálisan megadhatók. 

### Event

A portál kiegészítő funkciója az események rögzítése, kezelése. Léterhozhatunk eseményeket. Az események főbb jellemzői a name, cause, public, nature, location, start-time, end-time.

## Képernyők

### User

#### User-registration

A felhasználó létrehozhatja saját felhasználói fiókját, az alapvető adatok megadásával. Ugyanezen a képernyőn egy másik formon történhet meg a bejelentkezés username és password megadásával. Az input mezők mindegyike validáción esik át.

#### User-list

A regisztrált felhasználók adatai jelennek meg táblázatos formában. Amennyiben a felhasználó töltött fel magáról avatárt, az is megjelenik.

### Article

#### Article-list

A kamu-hírek kedvcsináló formában kis kártyákban grid-rendszerben jelennek meg. A kártyára kattintás esetén megnyílik a kiválasztott cikk.

#x## Article-show

A kiválasztott cikk megjelenik teljes terjedelmében. Innen navigálhatunk a az article-edit képernyőre

#### Article-form

Új kami-hír feltöltésére szolgáló form validációval. Amennyiben az article-show-ból a szerkesztő gombbal navigálunk ide, akkor a form feltöltődik a megadott értékekkel, és submit helyett update és delete gomb jelenik meg a hozzájuk tartozó funkciókkal.

### Event

#### Event-form

Event-ek létrehozására szolgáló form. 

#### Event-list

Event-ek listázása táblázatos formában.

## API végpontok

- POST /login - felhasználó bejelentkezése

- GET /article - az összes cikk lekérése
- POST /article - cikk létrehozása
- GET /article/{slug} - egy cikk lekérése a megadott 'slug'-gal
- PUT /article/{slug} - egy cikk módosítása
- DELETE /article/{slug} - egy cikk törlése

- GET /user - az összes felhasználó lekérése
- POST /user - felhasználó regisztrálása
- GET /user/{email} - egy felhasználó lekérése a megadott 'email'-címmel
- PUT /user/{email} - egy felhasználó módosítása
- DELETE /user/{id} - egy felhasználó törlése

- GET /event - az összes esemény lekérése
- POST /event - esemény létrehozása
- GET /event/{id} - egy esemény lekérése a megadott 'id'-val
- PUT /event/{id} - egy esemény módosítása
- DELETE /event/{id} - egy esemény törlése


