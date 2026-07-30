# Note explicative — Circuit de qualification et d'orientation d'une demande métier

## Fichiers livrés

- `circuit-qualification-demande-metier.excalidraw` — source modifiable (à ouvrir sur [excalidraw.com](https://excalidraw.com) ou dans l'application Excalidraw, via *Ouvrir*)
- `circuit-qualification-demande-metier.svg` — export vectoriel
- `circuit-qualification-demande-metier.png` — export haute résolution (8040 × 3540 px)
- `note-explicative.md` — ce document

## Choix de représentation

**Lecture gauche → droite, en trois zones.** Le schéma est organisé en trois bandes verticales correspondant aux trois temps du processus : Soumission, Qualification/orientation (BOM), Gouvernance et décision. Ce découpage permet à n'importe quel lecteur de situer immédiatement « où on en est » dans le circuit sans lire le détail des étapes.

**Un flux principal unique au centre.** Formulaire → Asana (Pré-qualification) → BOM → Backlog Business Asana → Pré-comité forme une ligne horizontale continue, volontairement rectiligne, qui reste le fil conducteur du regard. Toutes les branches secondaires (Matrix42, clarification, analyse complémentaire) partent de ce fil et y reviennent, sans jamais le couper.

**Des losanges à trois sorties, comme un aiguillage.** Les deux décisions structurantes (qualification BOM, décision du pré-comité) sont des losanges dont les trois issues sortent chacune par un côté différent (haut, droite, bas). Cette symétrie — reproduite à l'identique pour les deux décisions — rend le « code de lecture » du schéma réutilisable : une fois qu'on a compris le premier losange, le second se lit sans effort.

**Deux boucles de retour explicitement nommées.** Conformément à la logique métier, deux allers-retours existent :
- **Boucle 1 — Clarification** : une demande insuffisamment claire retourne obligatoirement en qualification BOM après les questions complémentaires (elle ne saute jamais directement au backlog ou au pré-comité).
- **Boucle 2 — Analyse complémentaire** : une demande qui nécessite un approfondissement sort temporairement du circuit direct, est travaillée avec le demandeur, puis rejoint la décision finale (Comité Delivery ou Refus).

Ces deux boucles sont tracées en trait pointillé et explicitement étiquetées « BOUCLE 1 » / « BOUCLE 2 » pour qu'elles sautent aux yeux, y compris en lecture rapide ou en noir et blanc.

**Trois sorties, trois formes très arrondies.** Matrix42, Comité Delivery et Refusée ou différée sont les seules sorties du processus représenté ; elles sont donc dessinées en rectangles très arrondis (quasi « pilules »), un langage visuel différent des rectangles d'action classiques, pour signaler sans ambiguïté qu'on quitte ce schéma à cet endroit précis. Le traitement interne de Matrix42 est volontairement absent (hors périmètre).

**Une couleur = un propriétaire du processus.** La palette suit la charte demandée : bleu (soumission/Asana), orange (BOM), violet (pré-comité et gouvernance), vert (Comité Delivery), rouge (refus/report), gris (Matrix42, hors périmètre). Les couleurs sont des aplats pastel avec un contour plus soutenu, ce qui reste lisible même imprimé en niveaux de gris grâce au contraste des contours et à la position des formes.

**Style graphique sobre.** Traits nets (sans effet « croquis »), une seule police sans-serif, pas d'ombres ni de dégradés, tailles de texte comprises entre 13 et 32 px pour rester lisibles sur une slide projetée. Les explications longues (contenu de l'analyse complémentaire, périmètre de Matrix42) sont réduites à quelques mots dans les formes ; le détail reste dans cette note plutôt que dans le schéma.

**Aucun croisement de flèche.** Le placement des boîtes et des deux boucles a été conçu pour qu'aucune ligne ne recoupe une autre — vérifié automatiquement avant livraison (0 croisement, 0 chevauchement détecté).

## Glossaire rapide

- **BOM** : Business Operations Manager — qualifie chaque demande à son arrivée dans Asana.
- **Pré-comité** : première instance de gouvernance ; statue sur une demande déjà qualifiée par le BOM.
- **Comité Delivery** : instance qui arbitre et lance la mise en œuvre (hors périmètre de ce schéma).
- **Matrix42** : outil de traitement du Run/Support ; seul le routage y est représenté ici, pas le traitement interne.
- **Analyse complémentaire** : peut porter notamment sur le besoin, les impacts, les volumes, les processus actuels, les dépendances ou les options de solution.

## Ce qui n'a volontairement pas été représenté

- Le déroulé interne du traitement Matrix42 (hors périmètre, à documenter séparément).
- Tout scoring, SLA, rôle ou statut non mentionné dans la demande initiale.
- Le détail des critères de « clarté » ou de « caractère concluant » d'une analyse : ce sont des règles de gestion, pas des éléments de circuit.
