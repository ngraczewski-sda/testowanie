# Oblicz

Funkcji `calculate` przyjmuje trzy argumenty

- `operator` - typ operacji, jaką ma wykonać
- `a` - pierwsze liczba
- `b` - druga liczba

a następnie zwraca wynik podanej operacji wykonanej na podanych liczbach.

Dostępne są 4 operacje:

- `+` - dodawanie `a + b`
- `-` - odejmowanie `a - b`
- `*` - mnożenie `a * b`
- `/` - dzielenie `a / b`

W przypadku, gdy operacja nie jest obsługiwana rzucany jest wyjątek.

```js
calculate("+", 1, 2); // zwraca 3
calculate("-", 3, 2); // zwraca 1
calculate("*", 3, 4); // zwraca 12
calculate("/", 2, 1); // zwraca 1
calculate("/", 1, 0); // rzuca wyjątek o treści "Divisor must be non-0 value"
calculate("%", 1, 2); // rzuca wyjątek o treści "Unknown operation"
```

Napisz test:

- który sprawdzi czy dodawanie działa poprawnie
- który sprawdzi czy odejmowanie działa poprawnie
- który sprawdzi czy mnożenie działa poprawnie
- który sprawdzi czy dzielenie działa poprawnie dla liczb niezerowych
- który sprawdzi czy dzielenie przez 0 powoduje wyjątek
- który sprawczy czy podanie nieobsługiwanej operacji powoduje wyjątek
