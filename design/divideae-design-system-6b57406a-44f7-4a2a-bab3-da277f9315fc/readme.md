# DivideAi Design System

**DivideAi** is a mobile app (React Native — iOS & Android) for controlling and splitting expenses among groups of people who travel or live together. Its focus is friends traveling together: create trip groups, add friends, log expenses, and track what's lent and owed. Audience: young people and adults. Tagline from the cover: *"Uma boa trip entre amigos, com as contas em dia."*

There is one product surface: the **mobile app** (light + dark themes, follows the device via `useColorScheme`).

## Sources
Precedence: **the PDFs win**; the web CSS fills only gaps the PDFs don't cover. All provided as uploads (no Figma link or repository was attached):
- `uploads/Capa e fundamentos.pdf` — cover, principles, spacing / radii / shadows. References code path `src/theme/tokens.ts` (not provided).
- `uploads/Cores.pdf` — brand colors, light/dark themes, fills, avatar palette, MoneyText tones.
- `uploads/Tipografia.pdf` — type scale, weights, money formatting, icons.
- `uploads/Componentes.pdf` — the component inventory ("O kit do app").
- `uploads/tokens.css`, `uploads/base.css` — the Django web app's CSS ("extraídos de design_system/design-system.html"). Used only for: tinted badge/message fills (10% bg / 30% border), notification count color (error), motion durations (0.2s / 0.25s ease), modal backdrop (50% black), `surface-warm` #faf8f5, and the Badge component. Its other values (Inter/ABC Ginto font, pill buttons, radius-24 cards, neutral surfaces, alpha borders, larger shadows, white on #b275ff) conflict with the PDFs and were **not** adopted.
- Screenshots: `Início · claro`, `Início · escuro`, `Grupo`, `Nova despesa`, `Saldos` (copied to `assets/reference/`).

## Index
- `styles.css` — entry point (imports only) → `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see list below), each with `.jsx`, `.d.ts`, `.prompt.md` and a card per folder
- `ui_kits/app/` — click-through recreation of the app (Início → Grupo → Nova despesa / Saldos), light/dark toggle
- `assets/icons/` — Ionicons 7.4.0 SVGs (MIT) · `assets/reference/` — source screenshots
- `thumbnail.html`, `SKILL.md`

## Components
From `Componentes.pdf`:
- **actions/** — Button (primary, secondary, destructive, ghost, disabled, loading), Fab, Chip, ChipGroup
- **forms/** — Input, MoneyInput, DateField
- **money/** — Card, MoneyText, TotalsCards
- **lists/** — GroupRow, ExpenseRow, BalanceRow, SuggestionRow, Avatar, PersonRow
- **split/** — SplitEditor, SplitBar, Checkbox
- **navigation/** — TabBar
- **feedback/** — Banner, StaleNotice, EmptyState, Badge (from web base.css)

### Intentional additions
- **Icon** (`core/`) — wrapper around copied Ionicons paths so components can render glyphs in `currentColor`.
- **Checkbox** — extracted from SplitEditor's participant rows so forms can reuse it.
- **ScreenHeader** — the native stack header (back chevron + previous title, centered title) seen in every pushed screen.
- **SectionHeader** — the repeated "title + link" row (Seus grupos · Ver todos, Membros · Gerenciar).

Helpers exported for sibling imports (not on the window namespace): `formatBRL(cents, signed)`, `colorForName(name)`, `initials(name)`, `isValidDate(s)`.

## CONTENT FUNDAMENTALS
- **Language:** Brazilian Portuguese, informal and friendly, with travel slang: "trip", "Churras de sábado", "Apê da Augusta". The brand name itself is slang: *Divide aí*. Brand name is spelled **DivideAi** (the PDFs show the older "DivideAe").
- **Address:** second person, implied "você": "Crie um grupo para começar a dividir despesas com quem viaja ou mora com você." Greeting by first name: "Olá, Ana".
- **Casing:** sentence case everywhere: buttons, titles, tabs ("Lançar despesa", "Seus grupos", "Registrar quitação"). Never all-caps in the app (the PDFs use small caps eyebrows like "02 · CORES" only on documentation).
- **Buttons are verb-first and concrete:** Lançar despesa, Editar grupo, Arquivar grupo, Anexar comprovante, Registrar quitação, Criar meu primeiro grupo, Atualizar, Cancelar.
- **Domain vocabulary:** despesa, saldo, balanço, a receber, a dever, quitação, comprovante, divisão (Igual / Valores / Percentual), participantes, membros, Dono.
- **Messages are short full sentences with a period:** "Quitação registrada." "Informe uma data válida." "A soma das parcelas precisa fechar o valor total." "Sem conexão. Mostrando os últimos dados carregados."
- **Meta lines use a middle dot:** "Viagem · 5 membros", "Bruno Lima · 12/01/2026 · Alimentação", "Pagou R$ 1.284,50 · Consumiu R$ 972,10".
- **Settlement phrasing:** "Marina Costa paga Ana Souza". Plain present tense, no arrows.
- **Optional fields** say so in the label: "Descrição (opcional)".
- **Numbers:** pt-BR currency from centavos, `R$ 1.284,50`; dates `DD/MM/AAAA`. Balances carry an explicit sign (+R$ / -R$); expense values never do.
- **No emoji** anywhere in the product.

## VISUAL FOUNDATIONS
- **Color layers:** three rulers. *Brand* colors (primary #b275ff, deepBlue #0a1e5f…) paint areas and decoration. Each *theme* defines bg/surface/text/muted/border plus `*Text` variants that pass 4.5:1. *Fills* (#8536e7, #d41976) carry white labels. White on #b275ff is forbidden (3.05:1).
- **Money semantics:** green = a receber, magenta/red = a dever, muted = zero. Expense amounts are neutral text color.
- **Backgrounds:** flat solid colors only. No gradients, textures, patterns or illustrations in the app. The documentation cover uses a full deepBlue block. Groups without a photo get a solid cover in `colorForName` with the initial at 48/700 in translucent white.
- **Type:** device font (SF Pro / Roboto), no brand font. Hierarchy from size and weight only: 700 titles, 500 tappable things and money, 400 reading. Scale 12/14/16/18/20/24/(30/36 reserved)/48.
- **Spacing:** 4-based scale xs4 … 6xl64; 16 is the screen and card padding; 12 between stacked rows and between the totals cards.
- **Corner radii:** 8 fields, banners, checkbox; 12 buttons and list rows; 16 cards; full for chips, FAB, avatars; 24 reserved.
- **Cards:** `surface` fill (#f8f7fb light / #141a2e dark), 1px `border`, radius 16, shadow sm (0 1 2 8%). The group header card lifts to shadow md and overlaps the colored cover.
- **Rows:** GroupRow/ExpenseRow cards use radius 12 with the same surface and border, no shadow. Inside a group, recent expenses and shortcuts are flat rows with no background.
- **Shadows:** sm 0 1 2 / 8% (cards), md 0 2 6 / 10% (elevation 3), lg 0 4 12 / 12% (FAB). No inner shadows.
- **Borders:** 1px hairlines in `border`. Banners and Badges use a tinted fill (brand color at 10%) with a 30% border and the tone's `*Text` label. Field error turns the field border `errorText`.
- **Touch targets:** minimum 44px for buttons, chips, fields and tappable rows.
- **Layout:** single column, 16px gutters. Fixed elements are the stack header (top) and the tab bar (bottom, `surface` with top border); the extended FAB floats bottom-right above the tab bar and collapses to a round "+" near the end of the list.
- **States:** disabled = opacity 0.6; loading replaces the label with a spinner. Press uses native opacity feedback (approximated at 0.85 on web). No hover states (mobile).
- **Selection:** selected chip switches to primary fill with white label; idle chips are `surface` with a border.
- **Transparency & blur:** not used, except the translucent initial on group covers.
- **Animation:** minimal: FAB collapse, platform transitions. Web uses `ease` at 0.2s (buttons) / 0.25s (top bar hide). No bounces or decorative motion.
- **Modals (web):** native `<dialog>`, radius 24, shadow lg, backdrop 50% black.
- **Imagery:** none in the references. Group covers are solid color; user photos are not shown yet.
- **Dark theme:** near-black navy bg #0b0f1a, surface #141a2e; brand fills unchanged; `*Text` tokens brighten (errorText → #f472b6).

## ICONOGRAPHY
- **System:** Ionicons, outline variant (as stated in Tipografia.pdf). Tab bar: `home`, `people`, `person-add`, `notifications`, `person`, all outline, 24px; active tint primaryText, idle muted. The FAB uses `add` at 20px. The header uses `chevron-back`; receipts show an `attach` paperclip next to the expense title; the checkbox uses `checkmark`.
- **Assets:** SVGs copied from `ionicons@7.4.0` into `assets/icons/`; the `Icon` component embeds the same paths and renders in `currentColor`. More Ionicons can be added the same way (`https://unpkg.com/ionicons@7.4.0/dist/svg/<name>.svg`).
- **Notification count:** bubble on the Avisos tab in the error color (#d41976, per web base.css).
- No emoji, no unicode-glyph icons, no icon font. Avatars use initials, never pictograms.

## Logo
No logo file was provided. The wordmark is rendered as type, **Divide** in white/text color + **Ai** in primary, as on the documentation cover. Don't draw a symbol.
