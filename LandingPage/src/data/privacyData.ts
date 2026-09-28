export interface PrivacySection {
  id: string;
  number: string;
  title: string;
  content: string[];
}

export const PRIVACY_INTRO =
  "Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.";

export const PRIVACY_LAST_UPDATED = "14 września 2026";

export const privacySections: PrivacySection[] = [
  {
    id: "informacje-ogolne",
    number: "01",
    title: "Informacje ogólne",
    content: [
      "Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: werkmebel.pl",
      "Operatorem serwisu oraz Administratorem danych osobowych jest: Werk Mebel Anna Lewicka Braniborska 14, 53-680, Wrocław",
      "Adres kontaktowy poczty elektronicznej operatora: biuro@werkmebel.pl",
      "Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.",
      "Serwis wykorzystuje dane osobowe w następujących celach:\n• Prowadzenie newslettera\n• Obsługa zapytań przez formularz\n• Prezentacja oferty lub informacji",
      "Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:\n• Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.\n• Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).",
    ],
  },
  {
    id: "ochrona-danych",
    number: "02",
    title: "Wybrane metody ochrony danych stosowane przez Operatora",
    content: [
      "Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.",
      "Dane osobowe przechowywane w bazie danych są zaszyfrowane w taki sposób, że jedynie posiadający Operator klucz może je odczytać. Dzięki temu dane są chronione na wypadek wykradzenia bazy danych z serwera.",
      "Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja hashująca działa jednokierunkowo – nie jest możliwe odwrócenie jej działania, co stanowi obecnie współczesny standard w zakresie przechowywania haseł użytkowników.",
      "Operator okresowo zmienia swoje hasła administracyjne.",
      "W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa.",
      "Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.",
    ],
  },
  {
    id: "hosting",
    number: "03",
    title: "Hosting",
    content: [
      "Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: inna firma",
    ],
  },
  {
    id: "twoje-prawa",
    number: "04",
    title: "Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych",
    content: [
      "W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:\n• firma hostingowa na zasadzie powierzenia\n• upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony\n• firmy, świadczące usługi marketingu na rzecz Administratora",
      "Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.",
      "Przysługuje Ci prawo żądania od Administratora:\n• dostępu do danych osobowych Ciebie dotyczących,\n• ich sprostowania,\n• usunięcia,\n• ograniczenia przetwarzania,\n• oraz przenoszenia danych.",
      "Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.",
      "Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.",
      "Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.",
      "W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.",
      "Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.",
    ],
  },
  {
    id: "informacje-w-formularzach",
    number: "05",
    title: "Informacje w formularzach",
    content: [
      "Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.",
      "Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).",
      "Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.",
      "Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo konteks",
    ],
  },
];
