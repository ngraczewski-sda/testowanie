# Dodawanie i odejmowanie

Napisz test dla funkcji `add` sprawdzający czy prawidłowo dodaje ona liczby.

Funkcji `add` przyjmuje dwa argumentu liczbowe i zwraca wynik w postaci ich sumy.

```js
add(1, 2); // zwraca 3
```

Aby dodać test należy:

1. Utwórz plik `math.test.js`.
2. W dodanym pliku dodaj test.

   ```js
   it('should add numbers' () => {

   })
   ```

3. Zaimportuj funkcje `add` z modułu `math.js`.
   ```js
   import { add } from "./math.js";
   ```
4. W teście dodaj wywołanie funkcji i przypisz jej wynik do stałej.
   ```js
   const result = add(1, 2);
   ```
5. Dodaj sprawdzenie wyniku.
   ```js
   expect(result).toBe(3);
   ```
6. Uruchom testy i sprawdź ich poprawność.

## Zadania

1. Dodaj test dla funkcji `subtract`, która przyjmuje dwa argumenty liczbowe i zwraca wynik ich
   odejmowania.
2. Dodaj test dla funkcji `multiply`, która przyjmuje dwa argumenty liczbowe i zwraca wynik ich
   mnożenia.
