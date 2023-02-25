# Formularz

Pod adresem `https://login-page-peach-seven.vercel.app/` znajduje się prosta aplikacja webowa z
możliwością rejestracji i logowania.

Pod ścieżką `/register` znajduje się formularz do rejestracji
Pod ścieżką `/login` znajduje sie formularz do logowania
Pod ścieżka `/home` znajduje się strona domowa dla użytkowników zalogowanych

Napisz testy, które:

- sprawdzą rejestracje użytkownika
  - czy istnieje możliwość rejestracji użytkownika
  - czy powtórzona nazwa użytkownika jest łapana
  - walidacja nazwy użytkownika (czy jest)
  - walidacja hasła użytkownika
    - czy jest
    - czy wymaga co najmniej jednej wielkiej litery
    - czy wymaga co najmniej jednej liczby
    - czy wymaga co najmniej 8 znaków
- zachowanie przycisku `Register`, tj. czy jest disabled jeżeli nazwa użytkownika lub hasło nie
  przechodzą walidacji
  - czy po rejestracji użytkownik jest przenoszony do strony logowania
- sprawdzą logowanie użytkownika
  - czy istnieje możliwość zalogowania użytkownika
  - czy wymagane są nazwa użytkownika i hasło
  - czy po zalogowaniu przekierowani jesteśmy do strony domowej
- sprawdzą czy strona domowa jest dostępna bez zalogowania
- zachowanie przycisku `Log in`, tj. czy jest disabled jeżeli nazwa użytkownika lub hasło nie

Bonus, w kodzie znajduje się poważny błąd, czy wiesz jaki?

## Pomoc

### URL bazowy

W pliku `cypress.config.js` można zdefiniować `baseUrl`, które będzie prefixować wszystkie URL używane w `.visit()` i `.request()`.

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://login-page-peach-seven.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

Dzięki temu, zamiast odnosić się do pełnego URL, możemy skorzystać z patha.

```js
// Zamiast
cy.visit("https://login-page-peach-seven.vercel.app/login");
// Możemy
cy.visit("/login");
```

### Sprawdzanie zmiany path

Jeżeli chcemy sprawdzić czy zmienił sie URL możemy to zrobić w następujący sposób:

```js
cy.url().should("equal", "https://login-page-peach-seven.vercel.app/login");
cy.url().should("include", "/login");
```
