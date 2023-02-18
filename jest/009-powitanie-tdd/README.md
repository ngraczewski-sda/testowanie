# Powitanie TDD

Korzystając z metodologii Test-Driver-Development zaimplementuj funkcję `greet`, która:

- przyjmuje jeden argument w postaci string
- w przypadku, gdy string jest zdefiniowany i niepusty zwraca tekst "Hello, $name!"
- w przypadku, gdy string nie jest zdefiniowany lub jest pusty zwraca tekst "Hello, stranger!"
- w przypadku, gdy string jest w całości wielkimi literami to całe powitanie powinno być wielkimi literami

```js
greet("Ala"); // zwraca "Hello, Ala!"
greet(); // zwraca "Hello, stranger!"
greet(""); // zwraca "Hello, stranger!",
greet("ALA"); // zwraca "HELLO, ALA!",
```
