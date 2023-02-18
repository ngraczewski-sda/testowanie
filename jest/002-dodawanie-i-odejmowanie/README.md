# Dodawanie i odejmowanie

Funkcja `add` przyjmuje dwa argumentu liczbowe i zwraca wynik ich dodawania.

Funkcja `subtract` przyjmuje dwa argumenty liczbowe i zwraca wynik ich odejmowania.

Funkcja `multiply` przyjmuje dwa argumenty liczbowe i zwraca wynik ich mnożenia

```js
add(1, 2); // zwraca 3
subtract(3, 2); // zwraca 1
multiply(3, 4); // zwraca 12
```

Napisz testy:

1. Napisz test dla funkcji `add` sprawdzający czy prawidłowo dodaje ona liczby.
2. Napisz test dla funkcji `subtract` sprawdzający czy prawidłowo odejmuje ona liczby.
3. Napisz test dla funkcji `multiply` sprawdzający czy prawidłowo mnoży on liczby.

## Pomoc

### Dodawanie testóœ

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
