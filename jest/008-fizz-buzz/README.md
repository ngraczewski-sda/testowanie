# FizzBuzz

Korzystając z metodologii Test-Driven-Development zaimplementuj funkcję `fizzBuzz`, która:

- przyjmuje jeden argument liczbowy
- w przypadku, gdy liczba jest podzielna przez 3 zwróć tekst "Fizz"
- w przypadku, gdy liczba jest podzielna przez 5 zwróć tekst "Buzz"
- w przypadku, gdy liczba jest podzielna przez 3 i 5 zwróć tekst "FizzBuzz"
- w przypadku, gdy liczba nie jest podzielna ani przez 3 ani przez 5 zwróć pusty string

## Pomoc

### TDD

Dobrym podejściem do TDD jest wzięcie jednego wymagania, napisanie dla niego testu, a
następnie zaimplementowania rozwiązania. Ten sam cykl wykonać dla pozostałych wymagań nie psując
poprzednich testów.

### Jak sprawdzić czy liczba jest dzielnikiem

Jeżeli wynik z operacji modulo `%` na tej liczbie jest równy 0 to znaczy, że liczba jest podzielna.
