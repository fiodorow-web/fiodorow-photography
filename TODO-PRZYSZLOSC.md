# Plany długoterminowe — Fiodorow Photography

Zadania do wdrożenia w przyszłości (nie pilne).

## 1. Person schema dla fotografów
Dodać schema `Person` dla Mateusza i Weroniki, powiązane z `@id` Photographera.

```json
{
  "@type": "Person",
  "name": "Mateusz Fiodorow",
  "jobTitle": "Fotograf ślubny",
  "worksFor": { "@id": "https://fiodorowphotography.pl/#photographer" }
}
```

## 2. Opinie klientów w HTML
Dodać 2-3 cytaty z opiniami bezpośrednio w kodzie HTML (homepage lub `o-nas`) z imieniem pary.
Powód: widget Elfsight jest JS-only — AI crawlery (GPTBot, ClaudeBot, Perplexity) nie widzą opinii.
Opcjonalnie: ręczne `AggregateRating` / `Review` schema.
