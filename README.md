# Japan Collecting Dashboard PWA

Companion app e dashboard personale per collezionismo, shopping, cibo, cultura e souvenir in Giappone (Tokyo, Kyoto, ecc.).

## 📁 Struttura della Repository

```
├── index.html                        # App Frontend (PWA)
├── Japan_Collecting_Masterlist.xlsx # Database Excel (Source of truth)
├── Japan_Collecting_Handoff.md      # Linee guida e documentazione di progetto
├── manifest.webmanifest              # Web App Manifest per installazione PWA
├── sw.js                             # Service Worker per funzionamento Offline
├── .gitignore                        # File ignorati da Git
├── README.md                         # Documentazione repository
└── icons/
    ├── icon-192.png                  # Icona PWA 192x192
    └── icon-512.png                  # Icona PWA 512x512
```

## 🚀 Guida alla Pubblicazione su GitHub Pages

1. **Crea un nuovo Repository su GitHub**:
   - Vai su [github.com/new](https://github.com/new).
   - Nome repository: `japan-dashboard` (o quello che preferisci).
   - Scegli Public o Private.
   - Non spuntare "Add a README file" se carichi i file estratti da questo pacchetto.

2. **Carica i File**:
   - **Da Terminale**:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - Japan Collecting PWA"
     git branch -M main
     git remote add origin https://github.com/TUO-UTENTE/japan-dashboard.git
     git push -u origin main
     ```
   - **Oppure da Web**: trascina semplicemente tutti i file ed la cartella `icons/` nella schermata iniziale del repository GitHub.

3. **Attiva GitHub Pages**:
   - Nel tuo repository GitHub, vai su **Settings** > **Pages**.
   - Sotto **Build and deployment** > **Branch**, seleziona `main` e cartella `/ (root)`.
   - Clicca **Save**.
   - Dopo circa 1-2 minuti, GitHub fornirà un link HTTPS (es. `https://tuo-utente.github.io/japan-dashboard/`).

4. **Installazione sullo Smartphone**:
   - **iOS (Safari)**: Apri il link HTTPS, premi **Condividi** -> **Aggiungi alla schermata Home**.
   - **Android (Chrome)**: Apri il link HTTPS, tocca **Installa app** dal pulsante in alto o dal menu Chrome.
