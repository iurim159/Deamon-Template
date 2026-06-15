# Template_Demon
<img src="./Screenshot 2026-06-15 114734.png" alt="Anteprima" width="500">
<img src="./Screenshot 2026-06-15 114743.png" alt="Anteprima" width="500">
<img src="./Screenshot 2026-06-15 114822.png" alt="Anteprima" width="500">
Progetto statico per una demo di template HTML/CSS/JS.

## Descrizione

Semplice sito statico che mostra una galleria di prodotti. Contiene pagine HTML, fogli di stile e script nella cartella `assets` e pagine prodotto nella cartella `products`.

## Struttura del progetto

- `index.html` - pagina principale
- `404.html` - pagina di errore
- `assets/` - risorse (CSS, JS, immagini)
  - `css/` - file di stile (`style.css`, `style_products.css`)
  - `js/` - script (`script.js`)
  - `img/` - immagini usate nel sito
- `products/` - pagine singole dei prodotti (First_product.html, Second_product.html, ...)
- `README.md` - questo file

## Uso

Essendo un progetto statico, per visualizzarlo basta aprire `index.html` nel browser o servire la cartella con un semplice server statico.

Esempio con Python 3 (nella cartella del progetto):

```bash
python -m http.server 8000
# poi aprire http://localhost:8000
```
# Deamon-Template
