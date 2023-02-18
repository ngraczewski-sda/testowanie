# Instalacja `jest`

Dodaj `jest` do projektu.

## Pomoc

Aby dodać framework `jest` do naszego projektu należy

1. Dodać `jest` oraz `babel-jest` do listy zależności dla developmentu.
   ```sh
   npm install --save-dev jest babel-jest
   ```
   Flaga `--save-dev` spowoduje dodanie zależności w sekcji `devDependencies` co powstrzymuje `npm` przed dołączeniem jej do wynikowej paczki. Zależność ta jest potrzebne tylko w czasie developmentu.
2. Dodać skrypt `test` do naszego modułu w pliku `package.json`
   ```json
   {
       ...
       "scripts": {
           ...
           "test": "jest"
           ...
       }
       ...
   }
   ```
   Skrypt ten pozwoli nam uruchomić testy wywołując komendę `npm run test` lub `npm test`.
3. (Opcjonalnie) Dodać skrypt `test:coverage` do naszego modułu w pliku `package.json`
   ```json
   {
       ...
       "script": {
           ...
           "test": "jest",
           "test:coverage": "jest --coverage"
       }
   }
   ```
   Flaga `--coverage` spowoduje wygenerowanie raportu pokazującego pokrycie kodu testami, tzn. ile linii/rozgałęzień zostało w czasie testów wykonane/odwiedzone.
   Aby uruchomić skrypt należy skorzystać z komendy `npm run test:coverage`
4. (Opcjonalnie) Dodać prosty test sprawdzający czy framework został dodany poprawnie

   1. Utwórz plik `index.test.js`
   2. W w.w. pliku dodaj test

      ```js
      it('should run tests' () => {

      })
      ```

   3. Do dodanego testu dodaj co najmniej jedno sprawdzenie (asercję).
      ```js
      expect(true).toBe(true);
      ```
   4. Uruchom testy komendą `npm run test`
