# Wiadomość

Komponent `Message` wyświetla wiadomość i pozwala na jej modyfikacje za pomocą pola formularza i przycisku. Komponent nie przyjmuje żadnych propów.

Widoczne elementy:

- input o etykiecie "Message"
- przycisk "Update", który aktualizuje wiadomość
- paragraf zawierający tekst "Your current message: ${message}" jeżeli wiadomość jest zdefiniowana

Napisz:

- test, który sprawdzi czy wypełnienie inputa i kliknięcie przycisku spowoduje aktualizację wiadomości
- test, który sprawdzi czy zmiana inputa bez kliknięcia przycisku nie spowoduje zmiany
  wiadomości
- test, który sprawdzi czy paragraf jest schowany, jeżeli wiadomość nie jest zdefiniowana
-
