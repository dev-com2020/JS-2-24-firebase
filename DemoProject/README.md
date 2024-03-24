### Wprowadzenie do Firebase

- Architektura i możliwości Firebase.
- Autentyfikacja użytkowników i zarządzanie tożsamościami.
- Firestore: Baza danych w czasie rzeczywistym.
- Storage: Przechowywanie plików i zarządzanie nimi.

### Praca z SQLite

- Wprowadzenie do SQLite i jego charakterystyka.
- Projektowanie i implementacja baz danych SQLite.
- Operacje CRUD w SQLite.


### Zarządzanie Treścią z Contentful

- Podstawy Contentful jako głowy systemu CMS.
- Modelowanie treści i integracja z aplikacjami.
- Automatyzacja przepływu treści.



service cloud.firestore {
    match /databases/{database}/documents {
           match /{document=**} {
           allow read, write: if request.auth.uid == userId;
        }
    }
}