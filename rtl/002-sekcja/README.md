# Sekcja

Komponent `Section` odpowiada za wyświetlenie sekcji z możliwością jej zwinięcia. Posiada
następujące propy:

- `children` - zawartość sekcji
- `initialOpen` - flaga mówiąca o początkowym stanie sekcji (rozwinięta/zwinięta)

Widoczne elementy:

- przycisk "Expand", gdy sekcja jest zwinięta
- przycisk "Collapse", gdy sekcja jest rozwinięta

Napisz testy, które:

- sprawdzą czy ustawienie flagi `initialOpen` na `true` spowoduje wyrenderowanie
  rozwiniętej sekcji
- sprawdzą czy ustawienie flagi `initialOpen` na `false` spowoduje wyrenderowanie
  zwiniętej sekcji
- sprawdzą przycisk "Expand"
- sprawdzą przycisk "Collapse"

## Pomoc

### Sprawdzenia elementów

W celu sprawdzenia czy dany element znajduje się na ekranie, możemy przekazać zmienna, która może
zawierać do niech referencję i dokonać sprawdzenia odpowiednią metodą.

```jsx
const button = screen.queryByText("Submit");

expect(button).toBeInTheDocument(); // sprawdza czy element znajduje się w dokumencie
expect(button).not.toBeInTheDocument(); // sprawdza czy element nie znajduje się w dokumencie
```
