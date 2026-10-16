export interface PrivacySection {
  id: string;
  number: string;
  title: string;
  content: string[];
}

export const PRIVACY_INTRO =
  "POLITYKA PRYWATNOŚCI I PLIKÓW COOKIES Serwisu www.werkmebel.pl";

export const PRIVACY_LAST_UPDATED = "16.10.2026r.";

export const privacySections: PrivacySection[] = [
  {
    id: "informacje-ogolne",
    number: "01",
    title: "Informacje ogólne i dane Administratora",
    content: [
      "1. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych osób korzystających z serwisu internetowego działającego pod adresem www.werkmebel.pl (zwanego dalej „Serwisem”).",
      "2. Administratorem danych osobowych (w rozumieniu Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r., zwanego dalej RODO) jest: Werk Mebel Anna Lewicka-Godula ul. Braniborska 14, 53-680 Wrocław, NIP: 7542676140, REGON: 021701628 (zwana dalej „Administratorem”).",
      "3. Kontakt z Administratorem w sprawach związanych z przetwarzaniem danych oraz realizacją praw osób, których dane dotyczą, jest możliwy za pośrednictwem poczty elektronicznej: biuro@werkmebel.pl lub korespondencyjnie na adres siedziby firmy."
    ],
  },
  {
    id: "cele-i-podstawy",
    number: "02",
    title: "Cele, podstawy prawne i okres przechowywania danych",
    content: [
      "Administrator przetwarza dane osobowe użytkowników Serwisu w następujących celach:",
      "1. Obsługa zapytań i komunikacja przez formularz kontaktowy lub e-mail:\n- Podstawa prawna: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora polegający na budowaniu relacji z klientami i udzielaniu odpowiedzi na kierowane zapytania) lub art. 6 ust. 1 lit. b RODO (podjęcie działań przed zawarciem umowy na żądanie osoby, której dane dotyczą).\n- Okres przechowywania: przez czas niezbędny do udzielenia wyczerpującej odpowiedzi i zakończenia kontaktu, a w sprawach o charakterze ofertowym – do czasu przedawnienia ewentualnych roszczeń.",
      "2. Przygotowanie oferty, wyceny oraz realizacja umowy (projektowanie i wykonanie mebli):\n- Podstawa prawna: art. 6 ust. 1 lit. b RODO (niezbędność do wykonania umowy lub podjęcia działań przed jej zawarciem) oraz art. 6 ust. 1 lit. c RODO (wypełnienie obowiązków prawnych, w tym przepisów podatkowo-księgowych).\n- Okres przechowywania: przez okres realizacji usługi, a następnie przez 5 lat licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku (zgodnie z ordynacją podatkową).",
      "3. Prowadzenie newslettera i marketingu bezpośredniego:\n- Podstawa prawna: art. 6 ust. 1 lit. a RODO (zgoda użytkownika wyrażona przy zapisie) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora polegający na promocji własnych produktów i usług).\n- Okres przechowywania: do momentu cofnięcia zgody lub wniesienia skutecznego sprzeciwu wobec przetwarzania.",
      "4. Dochodzenie roszczeń lub obrona przed roszczeniami:\n- Podstawa prawna: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes prawny Administratora).\n- Okres przechowywania: do upływu terminów przedawnienia roszczeń wynikających z Kodeksu cywilnego.",
      "5. Analiza statystyczna i optymalizacja działania Serwisu:\n- Podstawa prawna: art. 6 ust. 1 lit. a RODO (dobrowolna zgoda na instalację analitycznych plików cookies) lub art. 6 ust. 1 lit. f RODO (w zakresie technicznie niezbędnych cookies do prawidłowego działania strony).\n- Okres przechowywania: do czasu wygaśnięcia plików cookies lub ich usunięcia przez użytkownika."
    ],
  },
  {
    id: "odbiorcy-danych",
    number: "03",
    title: "Odbiorcy danych osobowych",
    content: [
      "Dane osobowe użytkowników mogą być powierzane do przetwarzania zewnętrznym podmiotom wspierającym Administratora w bieżącym funkcjonowaniu Serwisu, na podstawie umów powierzenia przetwarzania danych (art. 28 RODO):",
      "1. Dostawcy usług hostingu i serwerów (m.in. home.pl S.A.).",
      "2. Podmiotom świadczącym usługi informatyczne, programistyczne i serwisowe strony www.",
      "3. Dostawcom narzędzi analitycznych, statystycznych lub marketingowych (w przypadku ich aktywowania w Serwisie).",
      "4. Biuru rachunkowemu i doradcom prawnym współpracującym z Administratorem.",
      "5. Upoważnionym pracownikom i współpracownikom Administratora.",
      "Dane mogą zostać również udostępnione organom publicznym, jeżeli obowiązek taki wynika z powszechnie obowiązujących przepisów prawa."
    ],
  },
  {
    id: "panstwa-trzecie",
    number: "04",
    title: "Przekazywanie danych do państw trzecich",
    content: [
      "1. Co do zasady dane osobowe przetwarzane są na terenie Europejskiego Obszaru Gospodarczego (EOG).",
      "2. W przypadku korzystania przez Serwis z narzędzi dostarczanych przez podmioty mające siedzibę poza EOG (np. usługi Google Ireland Ltd. czy Meta Platforms Ireland Ltd., których spółki macierzyste zlokalizowane są w USA), transfer danych odbywa się w oparciu o standardowe klauzule umowne zatwierdzone przez Komisję Europejską lub decyzję o adekwatności (EU-U.S. Data Privacy Framework), co gwarantuje odpowiedni stopień ochrony danych."
    ],
  },
  {
    id: "prawa-osob",
    number: "05",
    title: "Prawa osób, których dane dotyczą",
    content: [
      "Każdej osobie, której dane dotyczą, przysługuje prawo:",
      "1. Dostępu do danych (art. 15 RODO) – uzyskania potwierdzenia, czy jej dane są przetwarzane, oraz otrzymania ich kopii.",
      "2. Sprostowania danych (art. 16 RODO) – żądania poprawienia danych nieprawidłowych lub uzupełnienia niekompletnych.",
      "3. Usunięcia danych („prawo do bycia zapomnianym”) (art. 17 RODO) – w sytuacjach przewidzianych prawem, np. gdy dane nie są już niezbędne do celów, dla których zostały zebrane.",
      "4. Ograniczenia przetwarzania (art. 18 RODO) – w przypadkach określonych przepisami.",
      "5. Przenoszenia danych (art. 20 RODO) – w zakresie, w jakim dane są przetwarzane na podstawie zgody lub umowy w sposób zautomatyzowany.",
      "6. Wniesienia sprzeciwu (art. 21 RODO) – wobec przetwarzania opartego na prawnie uzasadnionym interesie Administratora (art. 6 ust. 1 lit. f RODO), w tym marketingu bezpośredniego.",
      "7. Cofnięcia zgody – w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.",
      "8. Wniesienia skargi do organu nadzorczego: Jeśli uznasz, że przetwarzanie narusza przepisy RODO, masz prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).",
      "Podanie danych jest dobrowolne, jednak w określonych przypadkach (np. wysłanie zapytania przez formularz kontaktowy, przygotowanie wyceny lub zawarcie umowy) jest niezbędne do realizacji usługi."
    ],
  },
  {
    id: "zautomatyzowane-decyzje",
    number: "06",
    title: "Zautomatyzowane podejmowanie decyzji i profilowanie",
    content: [
      "Dane osobowe użytkowników Serwisu nie będą wykorzystywane do podejmowania zautomatyzowanych decyzji wywołujących wobec użytkownika skutki prawne lub w podobny sposób istotnie na niego wpływających, w tym nie podlegają profilowaniu w rozumieniu art. 22 RODO."
    ],
  },
  {
    id: "bezpieczenstwo-danych",
    number: "07",
    title: "Bezpieczeństwo danych",
    content: [
      "Administrator stosuje środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną:",
      "1. Połączenie z Serwisem jest szyfrowane za pomocą protokołu SSL/TLS, co zabezpiecza transmisję danych wprowadzanych w formularzach.",
      "2. Bazy danych i systemy teleinformatyczne zabezpieczone są przed dostępem osób nieuprawnionych oraz podlegają regularnym kopiom zapasowym (backup).",
      "3. Do przetwarzania danych dopuszczone są wyłącznie osoby posiadające stosowne upoważnienia i zobowiązane do zachowania tajemnicy."
    ],
  },
  {
    id: "pliki-cookies",
    number: "08",
    title: "Pliki cookies (Ciasteczka)",
    content: [
      "1. Serwis wykorzystuje pliki cookies (niewielkie pliki tekstowe zapisywane na urządzeniu końcowym użytkownika).",
      "2. Pliki cookies dzielą się na:\n- Niezbędne (techniczne): kluczowe dla prawidłowego wyświetlania i funkcjonowania Serwisu (np. utrzymanie sesji, bezpieczeństwo). Nie wymagają uprzedniej zgody użytkownika.\n- Analityczne / statystyczne: umożliwiające zbieranie anonimowych informacji o sposobie korzystania ze strony w celu optymalizacji jej struktury i treści. Wymagają wyraźnej zgody użytkownika.\n- Marketingowe: umożliwiające dostosowywanie reklam do preferencji użytkownika. Wymagają wyraźnej zgody użytkownika.",
      "3. Użytkownik może w każdej chwili zarządzać swoimi preferencjami za pośrednictwem paska cookies w Serwisie lub bezpośrednio w ustawieniach swojej przeglądarki internetowej (blokowanie, usuwanie plików cookies).",
      "4. Ograniczenie stosowania technicznych plików cookies może wpłynąć na niektóre funkcjonalności Serwisu."
    ],
  },
  {
    id: "postanowienia-koncowe",
    number: "09",
    title: "Postanowienia końcowe",
    content: [
      "1. Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności w przypadku zmiany technologii działania Serwisu lub zmian w obowiązujących przepisach prawa.",
      "2. Aktualna wersja Polityki Prywatności jest zawsze dostępna pod adresem: www.werkmebel.pl/polityka-prywatnosci.",
      "3. Data ostatniej aktualizacji: 16.10.2026r."
    ],
  },
];