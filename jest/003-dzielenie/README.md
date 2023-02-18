# Dzielenie

Funkcja `divide` przyjmuje dwa argumentu liczbowe i zwraca wynik w postaci ich dzielenia. W
przypadku, gdy jako dzielnik (drugi argument) przekazane zostanie zero rzucany jest wyjątek o treści
"Divisor must be non-0 value".

```js
divide(4, 2); // zwraca 2
divide(4, 0); // rzuca wyjątek o treści "Divisor must be non-0 value"
```

Napisz testy dla funkcji `divide`:

1. Test sprawdzający czy dzielenie przez liczbę inną niż 0 zwróci poprawny wynik.
2. Test sprawdzający czy dzielenie przez 0 rzuci oczekiwany wyjątek.

## Pomoc

### Grupowanie testów

W przypadku dodawania kilku testów dla jednego modułu, warto jest pogrupować testy. Aby zgrupować
testy należy:

1. Dodać blok `describe`
   ```js
   describe('divide', () => {
      ...
   })
   ```
2. Wewnątrz bloku `describe` dodać testy

   ```js
   describe("divide", () => {
     it("should do the thing", () => {});

     it("should do the other thing", () => {});
   });
   ```

Bloki `describe` można dowolnie zagnieżdżać, np.:

```js
describe('math', () => {
   describe('add', () => {
      it('should add numbers', () => {
         ...
      })
   });

   describe('divide', () => {
      it('should divide numbers', () => {

      })
   })
})
```

### Sprawdzanie wyjątków

W celu sprawdzenia, czy dany fragment kodu rzuca wyjątek należy do funkcji `expect` przekazać
funkcję, która wykonuje kod rzucający wyjątek:

```js
expect(() => {
  throwingFunction();
}).toThrow("The expected message");
```

Zauważ, że wywołanie funkcji nie znajduje się już przed `expect`, lecz jest jakby jego częścią. Na
potrzeby naszego zadania musimy zamienić wywołanie funkcji `throwingFunction` wywołaniem funkcji
`divide` oraz tekst `The expected message` na `Divisor must be non-0 value`.
