# Zabawa w łapanie

Napisz testy, które przejdą na stronę `https://ngraczewski-sda.github.io/catch-play/` a następnie sprawdzą:

- czy istnieje input o nazwie `text`,
- czy istnieje div o testid `test-div`,
- czy istnieje div na co najmniej 5 poziomie zagnieżdżenia,
- czy istnieje button z napisem "The Best Button",
- czy istnieje nieaktywny button

## Pomoc

### Wyszukiwanie elementów po selektorze

Aby znaleźć element po dowolnym selektorze należy skorzystać z metody `.get`.

```js
cy.get("input"); // znajdzie input
cy.get("div > div"); // znajdzie div w divie
cy.get("#id"); // znajdzie diva po ID
cy.get(".class"); // znajdzie diva po klasie
```

### Wyszukiwanie elementów po tekście

Aby znaleźć element po dowolnym tekście należy skorzystać z metody `.contains`.

```js
cy.get("Hello world"); // znajdzie element zawierający "Hello world"
cy.get(/.*test.*/); // znajdzie element zawierający "test"
```

### Wyszukiwanie elementów po selektorze i tekście

Aby znaleźć element po kombinacji selektora i teksu należy połączyć wywołania `.get` i `.contains`.

```js
cy.get("div").contains("Hello World!"); // znajdzie diva zawierającego tekst "Hello world!"
```
