# Przycisk

Napisz test dla komponentu `Button`, który sprawdzi czy kliknięcie przycisku wykona przekazaną
akcję.

## Pomoc

### Renderowanie komponentu w teście

```jsx
import { render } from "@testing-library/react";

...

render(<ComponentName props1="Prop1" prop2={2}>);
```

### Wyszukiwanie elementów interfejsu

```jsx
import { screen } from "@testing-library/react";

screen.getByText("Tekst przycisku"); // zwróci element z tekstem "Tekst przycisku" jeżeli taki istnieje
```

### Wchodzenie w interakcje z elementami

```jsx
import userEvent from "@testing-library/user-event";

userEvent.click(button); // kliknie przycisk pod zmienną/stała button

userEvent.type(input, "Nowa wartość inputa"); // wpisze nową wartość w przekazany inpuit
```

### Mockowanie funkcji

Mock to obiekt, który zastępuje rzeczywisty, najczęściej skomplikowany obiekt w celu oddzielenia testowania obu elementów. Umożliwia zadeklarowanie wartości zwracanej w przypadku
wywołania oraz przechowuje listę odwołań

```jsx
// tworzenie mocka
const mock = jest.fn();

// deklarowanie wartości zwracanej
mock.mockReturnValue("some value");

// deklarowanie zwracanej promisy
mock.mockResolvedValue("some value"); // spowoduje, że wywołanie "mock", zwróci promise, która resolvuje się do stringa "some value"
mock.mockRejectedValue("error"); // spowoduje, że wywołanie "mock", zwróci promise, która rejectuje się do stringa "error"

// wykorzystanie w sprawdzeniach
expect(mock).toHaveBeenCalled(); // sprawdzi czy "mock" zostało wywołane
expect(mock).toHaveBeenCalledWith("abc", 123); // sprawdzi czy "mock" zostało wywołane z argumentami "abc" i 123
```
