# Odźwierny

Klasa `Doorman` posiada dwie metody.

- `greet`, która przyjmuje jeden argument w postaci imienia i zwraca powitanie w postaci `Hello
$name!`, gdzie `$name` to podane imię.

  ```js
  const doorman = new Doorman();

  doorman.greet("Janusz"); // zwraca "Hello Janusz!"
  ```

- `tellMeWhoYouMet`, która zwraca imiona wszystkich powitanych przez danego odźwiernego osób.

  ```js
  const doorman = new Doorman();

  doorman.tellMeWhoYouMet() // zwraca "I've met nobody."

  doorman.greet("Janusz");
  doorman.tellMeWhoYouMet(); // zwraca "I've met Janusz."

  doorman.greet("Janina");
  doorman.tellMeWhoYouMet(): // zwraca "I've met Janusz and Janina."

  doorman.greet("Tomek");
  doorman.tellMeWhoYouMet(): // zwraca "I've met Janusz, Janina and Tomek."
  ```

Napisz test:

- który sprawdzi czy odźwierny wita sie poprawnie
- który sprawczy czy odźwierny opowiada poprawnie o braku spotkania
- który sprawdzi czy odźwierny opowiada poprawnie o spotkaniu jednej osoby
- który sprawdzi czy odźwierny opowiada poprawnie o spotkaniu dwóch osób
- który sprawdzi czy odźwierny opowiada poprawnie o spotkaniu trzech i więcej osób

## Pomoc

### Tworzenie obiektu klasy

Aby utworzyć nowy obiekt klasy należy wywołać ją ze słowem kluczowym `new`.

```js
class Doorman {
    ...
}

const doorman = new Doorman();
```
