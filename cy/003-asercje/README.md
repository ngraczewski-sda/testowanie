# Asercje

Napisz testy, które przejdą na stronę `https://ngraczewski-sda.github.io/assertions/` a następnie sprawdzą:

- czy istnieje div o id `div1`
- czy istnieje div o id `div2`, który znajduje się w dokumencie, ale jest schowany
- czy istnieje div o id `div3`, który jest w dokumencie i jest widoczny
- czy istnieje input o id `input1`, który jest disabled
- czy istnieje input o id `input2`, który ma atrybut `readonly` o wartości readonly
- czy istnieje input o id `input3`, który po wpisaniu wartości `Hello world!` wyświetli tą wartość
- czy istnieje select o id `select`, który po wybraniu opcji `option-1` wyświetli `Option 1`

## Pomoc

### Dodawanie asercji

Aby do testu dodać asercję, należy znaleźć element a następnie wywołać na nim metodę `.should` i/lub
jej alias `.and` w przypadku dodawania kilku asercji dla jednego elementu.

```js
cy.get("input")
  .should("exist") // sprawdza czy element istnieje
  .and("be.visible") // sprawcza czy element jest widoczny
  .and("not.be.hidden") // sprawdza czy element nie jest schowany
  .and("not.be.disabled") // sprawdza czy element nie jest disabled
  .and("to.have.value", "Hello world!"); // sprawdza czy element ma wartość "Hello world!"
```

### Interakcje z elementami

Aby do testu dodać interakcję z elementem, należy znaleźć element, a następnie wywołać na nim
odpowiednią metodę.

```js
cy.get("input").type("Hello world!"); // spowoduje wpisanie "Hello world!" do inputa

cy.get("button").click(); // spowoduje kliknięcie przycisku

cy.get('input[type="checkbox"]').check(); // spowoduje zaznaczenie checkboxa

cy.get("select").select("option-1"); // spowoduje wybranie opcji z "option-1" z selecta
```

## Linki

https://frontend-bootcamp.pl.sdacademy.pro/e-podrecznik/testowanie/cypress/#interakcja-cypress-z-dom

https://docs.cypress.io/guides/core-concepts/interacting-with-elements
