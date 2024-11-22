# Skapa en fullstack-applikation i TypeScript eller konvertera en tidigare JavaScript-fullstack-applikation (till exempel Laboration 1 i Software life cycle management) till TypeScript. Applikationen behöver inte publiceras.

    -Applikationen ska ha ett frontend, ett backend och en databas.
    -Applikationen ska fungera som en sammanhängande helhet. Frontend-delen ska kommunicera med backend-delen som i sin tur ska kommunicera med databasen.
    -Applikationens frontend ska kunna presentera (via GET och SELECT) uppgifter från databasen. Frontend-delen ska hämta JSON från backend-delen. Rendera uppgifterna i HTML-element (använd inte alert eller liknande).
    -Varken JavaScript eller JSX får användas. Använd TypeScript (och TSX, om React används) istället.
    -Använd props med ett tillhörande interface i åtminstone en komponent.
    -Använd useState med en tillhörande generics-deklaration i åtminstone en komponent. Båda värdet och funktionen som ingår i array:en som returneras av useState måste användas.

## För VG måste även följande krav uppfyllas:

    -Applikationens frontend ska kunna ändra (via POST/PUT/DELETE och INSERT/UPDATE/DELETE) uppgifter i databasen. Frontend-delen ska skicka JSON till backend-delen. Ändringen ska gå att se på webbsidan.
    -All kod ska vara enhetligt formaterad.
    -Använd åtminstone ett interface för att beskriva JSON-strukturen som frontend-delen hämtar från backend-delen.
    -any får inte användas, varken direkt (via explicit typning) eller indirekt (via type inference), förutom om du har goda skäl till det. Om sådana skäl finns ska de dokumenteras i en README-fil.
