# Dodawanie i odejmowanie 2

Funkcja `add` przyjmuje dwa argumentu liczbowe i zwraca wynik ich dodawania.

Funkcja `subtract` przyjmuje dwa argumenty liczbowe i zwraca wynik ich odejmowania.

Funkcja `multiply` przyjmuje dwa argumenty liczbowe i zwraca wynik ich mnożenia

```js
add(1, 2); // zwraca 3
subtract(3, 2); // zwraca 1
multiply(3, 4); // zwraca 12
```

Napisz testy:

1. Napisz testy (5 zestawów danych) dla funkcji `add` sprawdzający czy prawidłowo dodaje ona liczby.
2. Napisz testy (5 zestawów danych) dla funkcji `subtract` sprawdzający czy prawidłowo odejmuje ona liczby.
3. Napisz testy (5 zestawów danych) dla funkcji `multiply` sprawdzający czy prawidłowo mnoży on liczby.

## Pomoc

### Reużywanie testów

W przypadku, gdy chcemy reużyć test i zmienić tylko dane wejściowe i wyjściowe funkcji możemy
skorzystać z blocki `it.each`, który pozwala nam na zdefiniowanie kilku zestawów danych dla testu, a
następnie odpali test dla każdego zestawu danych. Zestawy danych można zdefiniować na kilka sposobów:

- tablica wartości

```js
it.each([1, 3, 5])("isOdd should return true for %i", (a) => {
  const result = isOdd(a);
  expect(result).toBe(true);
});
```

- tablica obiektów

```js
it.each([
  { value: 1, odd: true },
  { value: 2, odd: false },
  { value: 3, odd: true },
])("isOdd should $odd for $value", ({ value, odd }) => {
  const result = isOdd(value);
  expect(result).toBe(odd);
});
```

- tabela przypadków

```js
it.each`
  value | odd
  ${1}  | ${true}
  ${2}  | ${false}
  ${3}  | ${true}
`("isOdd should $odd for $value", ({ value, odd }) => {
  const result = isOdd(value);
  expect(result).toBe(odd);
});
```

Zwróć uwagę, że w tym przypadku wartości są przekazywane do string template i muszą być opakowane
w `${}` nawet w przypadku, gdy chcemy przekazać string.
