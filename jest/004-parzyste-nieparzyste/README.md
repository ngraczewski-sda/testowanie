# Parzyste i nieparzyste

Funkcja `isEven` przyjmuje jeden argument liczbowy i zwraca wartość `true`, jeżeli liczba jest
parzysta i `false` jeżeli nie jest.

Funkcja `isOdd` przyjmuje jeden argument liczbowy i zwraca wartość `false`, jeżeli liczba jest
parzysta i `true` jeżeli nie jest.

Funkcja `isDivisorOf` przyjmuje dwa argumenty liczbowe `a` i `b`, gdzie

- `a` to liczba, dla której chcemy sprawdzić czy jest dzielnikiem liczby `b`
- `b` to dowolna liczba

i zwraca wartość `true`, jeżeli liczba `a` jest dzielnikiem liczby `b` lub `false` w przeciwnym
przypadku

```js
isEven(1); // zwraca false
isEven(2); // zwraca true

isOdd(1); // zwraca true
isOdd(2); // zwraca false

isDivisorOf(3, 27); // zwraca true, bo 27 / 3 = 9
isDivisorOf(4, 27); // zwraca false, bo 27 / 4 = 6.75
```

Napisz testy

- dla funkcji `isEven`
  - który sprawdza czy funkcja działa dobrze dla liczby parzystej
  - który sprawdza czy funkcja działą dobrze dla liczby nieparzystej
- dla funkcji `isOdd`
  - który sprawdza czy funkcja działa dobrze dla liczby parzystej
  - który sprawdza czy funkcja działa dobrze dla liczby nieparzystej
- dla funkcji `isDivisorOf`
  - który sprawdza czy funkcja działa dobrze dla liczby podzielnej przez `a`
  - który sprawdza czy funkcja działą dobrze dla liczby niepodzielnej przez `b`

## Pomoc

### Sprawdzanie wartości logicznych (boolean)

Wartości logiczne możemy sprawdzać za pomocą matchera `toBe` lub matcherów `toBeTruthy` oraz
`toBeFalsy`.

```js
// check for true
expect(result).toBe(true);
expect(result).toBeTruthy();

// check for false
expect(result).toBe(false);
expect(result).toBeFalsy();
```
