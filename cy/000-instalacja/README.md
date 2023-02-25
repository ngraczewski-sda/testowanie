# Instalacja

Dodaj Cypress do projektu oraz skrypt do budowania testów oraz uruchamiania testów.

## Pomoc

### Dodawanie Cypress do projektu

Aby dodać Cypress do projektu wystarczy uruchomić poniższą komendę.

```sh
npm install --save-dev cypress
```

### Dodawanie skryptu do budowania testów

Aby dodać skrypt do budowania testów w pliku `package.json` należy dodać następujące wpisy.

```json
{
    ...
    "scripts": {
        ...
        "cypress:open": "cypress open"
    }
}
```

### Dodawanie skryptu do uruchamiania testów

Aby dodać skrypt do uruchamiania testów w pliku `package.json` należy dodać następujące wpisy.

```json
{
    ...
    "scripts": {
        ...
        "cypress:run": "cypress run"
    }
}
```
