/* @ds-bundle: {"format":4,"namespace":"DivideAeDesignSystem_6b5740","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Chip","sourcePath":"components/actions/Chip.jsx"},{"name":"ChipGroup","sourcePath":"components/actions/ChipGroup.jsx"},{"name":"Fab","sourcePath":"components/actions/Fab.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"StaleNotice","sourcePath":"components/feedback/StaleNotice.jsx"},{"name":"DateField","sourcePath":"components/forms/DateField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"MoneyInput","sourcePath":"components/forms/MoneyInput.jsx"},{"name":"Avatar","sourcePath":"components/lists/Avatar.jsx"},{"name":"BalanceRow","sourcePath":"components/lists/BalanceRow.jsx"},{"name":"ExpenseRow","sourcePath":"components/lists/ExpenseRow.jsx"},{"name":"GroupRow","sourcePath":"components/lists/GroupRow.jsx"},{"name":"PersonRow","sourcePath":"components/lists/PersonRow.jsx"},{"name":"SuggestionRow","sourcePath":"components/lists/SuggestionRow.jsx"},{"name":"Card","sourcePath":"components/money/Card.jsx"},{"name":"MoneyText","sourcePath":"components/money/MoneyText.jsx"},{"name":"TotalsCards","sourcePath":"components/money/TotalsCards.jsx"},{"name":"ScreenHeader","sourcePath":"components/navigation/ScreenHeader.jsx"},{"name":"SectionHeader","sourcePath":"components/navigation/SectionHeader.jsx"},{"name":"TABS","sourcePath":"components/navigation/TabBar.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Checkbox","sourcePath":"components/split/Checkbox.jsx"},{"name":"SplitBar","sourcePath":"components/split/SplitBar.jsx"},{"name":"SplitEditor","sourcePath":"components/split/SplitEditor.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"7cc9b640df53","components/actions/Chip.jsx":"f7d9040e2f89","components/actions/ChipGroup.jsx":"a68effe6d1a1","components/actions/Fab.jsx":"e1c729669ad9","components/core/Icon.jsx":"d125f8cd3a77","components/feedback/Badge.jsx":"92abdb89484e","components/feedback/Banner.jsx":"7e2a6fb0dbd9","components/feedback/EmptyState.jsx":"4cf818148e98","components/feedback/StaleNotice.jsx":"ad07fa1857de","components/forms/DateField.jsx":"dd85f4290d0c","components/forms/Input.jsx":"aba10630c9c6","components/forms/MoneyInput.jsx":"c4be3549948c","components/lists/Avatar.jsx":"c5a1478c54bd","components/lists/BalanceRow.jsx":"ea0bdb4dd0a8","components/lists/ExpenseRow.jsx":"7179f6df0789","components/lists/GroupRow.jsx":"556706a12131","components/lists/PersonRow.jsx":"02962424aa5d","components/lists/SuggestionRow.jsx":"ac68aa5c824f","components/money/Card.jsx":"a2859b59981d","components/money/MoneyText.jsx":"ad96e2af021c","components/money/TotalsCards.jsx":"b2511af5174b","components/navigation/ScreenHeader.jsx":"5ed1b3ffa76f","components/navigation/SectionHeader.jsx":"09948ea13fa7","components/navigation/TabBar.jsx":"4f6a23730d6b","components/split/Checkbox.jsx":"3b635d9ca440","components/split/SplitBar.jsx":"4e5dcc66deea","components/split/SplitEditor.jsx":"ce6eadcc9f52","ui_kits/app/BalancesScreen.jsx":"4770d00d2008","ui_kits/app/GroupScreen.jsx":"1ddbee99e7ba","ui_kits/app/HomeScreen.jsx":"8764d1d71e75","ui_kits/app/NewExpenseScreen.jsx":"cda82e7d7237","ui_kits/app/data.js":"4013d82fa976"},"inlinedExternals":[],"unexposedExports":[{"name":"colorForName","sourcePath":"components/lists/Avatar.jsx"},{"name":"formatBRL","sourcePath":"components/money/MoneyText.jsx"},{"name":"initials","sourcePath":"components/lists/Avatar.jsx"},{"name":"isValidDate","sourcePath":"components/forms/DateField.jsx"}]} */

(() => {

const __ds_ns = (window.DivideAeDesignSystem_6b5740 = window.DivideAeDesignSystem_6b5740 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Chip.jsx
try { (() => {
function Chip({
  label,
  selected = false,
  onPress,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "radio",
    "aria-checked": selected,
    disabled: disabled,
    onClick: onPress,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'var(--min-touch)',
      padding: '0 15px',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-full)',
      boxSizing: 'border-box',
      cursor: disabled ? 'default' : 'pointer',
      border: selected ? '1px solid var(--fill-primary)' : '1px solid var(--border)',
      background: selected ? 'var(--fill-primary)' : 'var(--surface)',
      color: selected ? 'var(--on-fill)' : 'var(--text)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-base)',
      fontWeight: 'var(--fw-medium)',
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      ...style
    }
  }, label);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Chip.jsx", error: String((e && e.message) || e) }); }

// components/actions/ChipGroup.jsx
try { (() => {
function ChipGroup({
  label,
  options = [],
  value,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(value);
  const current = value !== undefined ? value : inner;
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, norm.map(o => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: o.value,
    label: o.label,
    selected: current === o.value,
    onPress: () => {
      setInner(o.value);
      onChange && onChange(o.value);
    }
  }))));
}
Object.assign(__ds_scope, { ChipGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ChipGroup.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Ionicons 7.4.0 (MIT) — paths copied verbatim from assets/icons/*.svg
const ICONS = {
  "home-outline": "<path d=\"M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>",
  "home": "<path d=\"M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z\"/><path d=\"M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z\"/>",
  "people-outline": "<path d=\"M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path d=\"M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\"/>",
  "people": "<path d=\"M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zM467.83 432H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z\"/>",
  "person-add-outline": "<path d=\"M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M88 176v112M144 232H32\"/>",
  "notifications-outline": "<path d=\"M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>",
  "person-outline": "<path d=\"M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/>",
  "add": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 112v288M400 256H112\"/>",
  "chevron-back": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"48\" d=\"M328 112L184 256l144 144\"/>",
  "chevron-forward": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"48\" d=\"M184 112l144 144-144 144\"/>",
  "attach": "<path d=\"M216.08 192v143.85a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 10191 0V159.74\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\"/>",
  "checkmark": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M416 128L192 384l-96-96\"/>",
  "moon-outline": "<path d=\"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>",
  "sunny-outline": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94\"/><circle cx=\"256\" cy=\"256\" r=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\"/>",
  "cloud-offline-outline": "<path d=\"M93.72 183.25C49.49 198.05 16 233.1 16 288c0 66 54 112 120 112h184.37M467.82 377.74C485.24 363.3 496 341.61 496 312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16 0-48.79 6.93-67.6 18.14\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M448 448L64 64\"/>",
  "alert-circle-outline": "<path d=\"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path d=\"M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z\"/>",
  "checkmark-circle-outline": "<path d=\"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M352 176L217.6 336 160 272\"/>",
  "information-circle-outline": "<path d=\"M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M220 220h32v116\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M208 340h88\"/><path d=\"M248 130a26 26 0 1026 26 26 26 0 00-26-26z\"/>",
  "close": "<path d=\"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z\"/>",
  "trash-outline": "<path d=\"M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M80 112h352\"/><path d=\"M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>",
  "create-outline": "<path d=\"M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z\"/>",
  "receipt-outline": "<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M160 336V48l32 16 32-16 31.94 16 32.37-16L320 64l31.79-16 31.93 16L416 48l32.01 16L480 48v224\"/><path d=\"M480 272v112a80 80 0 01-80 80h0a80 80 0 01-80-80v-48H48a15.86 15.86 0 00-16 16c0 64 6.74 112 80 112h288\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M224 144h192M288 224h128\"/>",
  "wallet-outline": "<rect x=\"48\" y=\"144\" width=\"416\" height=\"288\" rx=\"48\" ry=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path d=\"M368 320a32 32 0 1132-32 32 32 0 01-32 32z\"/>",
  "airplane-outline": "<path d=\"M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/>",
  "calendar-outline": "<rect fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" x=\"48\" y=\"80\" width=\"416\" height=\"384\" rx=\"48\"/><circle cx=\"296\" cy=\"232\" r=\"24\"/><circle cx=\"376\" cy=\"232\" r=\"24\"/><circle cx=\"296\" cy=\"312\" r=\"24\"/><circle cx=\"376\" cy=\"312\" r=\"24\"/><circle cx=\"136\" cy=\"312\" r=\"24\"/><circle cx=\"216\" cy=\"312\" r=\"24\"/><circle cx=\"136\" cy=\"392\" r=\"24\"/><circle cx=\"216\" cy=\"392\" r=\"24\"/><circle cx=\"296\" cy=\"392\" r=\"24\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" stroke-linecap=\"round\" d=\"M128 48v32M384 48v32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M464 160H48\"/>",
  "search-outline": "<path d=\"M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M338.29 338.29L448 448\"/>"
};
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  style,
  ...rest
}) {
  const body = ICONS[name];
  if (!body) return null;
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: color === 'currentColor' ? 'currentColor' : color,
    'aria-hidden': true,
    style: {
      color,
      flexShrink: 0,
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: body
    },
    ...rest
  });
}
const ICON_NAMES = Object.keys(ICONS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
let injected = false;
function ensureSpin() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.textContent = '@keyframes dvae-spin{to{transform:rotate(360deg)}}';
  document.head.appendChild(s);
}
const VARIANTS = {
  primary: {
    background: 'var(--fill-primary)',
    color: 'var(--on-fill)'
  },
  secondary: {
    background: 'var(--surface)',
    color: 'var(--text)'
  },
  destructive: {
    background: 'var(--fill-destructive)',
    color: 'var(--on-fill)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--primary-text)'
  }
};
function Button({
  variant = 'primary',
  children,
  onPress,
  onClick,
  disabled = false,
  loading = false,
  icon,
  fullWidth = true,
  style,
  type = 'button'
}) {
  ensureSpin();
  const v = VARIANTS[variant] || VARIANTS.primary;
  const inactive = disabled || loading;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: inactive,
    onClick: inactive ? undefined : onPress || onClick,
    style: {
      ...v,
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      minHeight: 'var(--min-touch)',
      padding: '12px 16px',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-base)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.25,
      cursor: inactive ? 'default' : 'pointer',
      opacity: inactive ? 'var(--disabled-opacity)' : 1,
      transition: 'opacity .15s',
      ...style
    },
    onMouseDown: e => {
      if (!inactive) e.currentTarget.style.opacity = '0.85';
    },
    onMouseUp: e => {
      if (!inactive) e.currentTarget.style.opacity = '1';
    },
    onMouseLeave: e => {
      if (!inactive) e.currentTarget.style.opacity = '1';
    }
  }, loading ? /*#__PURE__*/React.createElement("span", {
    "aria-label": "Carregando",
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderRightColor: 'transparent',
      animation: 'dvae-spin .8s linear infinite',
      boxSizing: 'border-box'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }) : null, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Fab.jsx
try { (() => {
function Fab({
  label = 'Nova despesa',
  icon = 'add',
  collapsed = false,
  onPress,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPress,
    "aria-label": label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: 48,
      minWidth: 48,
      padding: collapsed ? 0 : '0 20px 0 16px',
      width: collapsed ? 48 : 'auto',
      border: 'none',
      borderRadius: 'var(--radius-full)',
      background: 'var(--fill-primary)',
      color: 'var(--on-fill)',
      boxShadow: 'var(--shadow-lg)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-base)',
      fontWeight: 'var(--fw-medium)',
      transition: 'width .2s, padding .2s',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }), collapsed ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Fab.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const TONE = {
  success: ['var(--success-text)', 'var(--tint-success-bg)', 'var(--tint-success-border)'],
  error: ['var(--error-text)', 'var(--tint-error-bg)', 'var(--tint-error-border)'],
  warning: ['var(--warning-text)', 'var(--tint-warning-bg)', 'var(--tint-warning-border)'],
  info: ['var(--info-text)', 'var(--tint-info-bg)', 'var(--tint-info-border)']
};
function Badge({
  tone = 'success',
  children,
  style
}) {
  const [c, bg, bd] = TONE[tone] || TONE.success;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 16px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid ' + bd,
      background: bg,
      color: c,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
const TONE = {
  error: ['var(--error-text)', 'var(--tint-error-bg)', 'var(--tint-error-border)'],
  success: ['var(--success-text)', 'var(--tint-success-bg)', 'var(--tint-success-border)'],
  info: ['var(--info-text)', 'var(--tint-info-bg)', 'var(--tint-info-border)'],
  warning: ['var(--warning-text)', 'var(--tint-warning-bg)', 'var(--tint-warning-border)']
};
function Banner({
  tone = 'info',
  children,
  style
}) {
  const [c, bg, bd] = TONE[tone] || TONE.info;
  return /*#__PURE__*/React.createElement("div", {
    role: tone === 'error' ? 'alert' : 'status',
    style: {
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + bd,
      background: bg,
      color: c,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.4,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 8,
      padding: '24px 16px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--muted)',
      lineHeight: 1.45,
      maxWidth: 300,
      textWrap: 'pretty'
    }
  }, description) : null, actionLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onPress: onAction,
    style: {
      marginTop: 16
    }
  }, actionLabel) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StaleNotice.jsx
try { (() => {
function StaleNotice({
  message = 'Sem conexão. Mostrando os últimos dados carregados.',
  actionLabel = 'Atualizar',
  onRetry,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 16px',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--fs-xs)',
      color: 'var(--muted)',
      lineHeight: 1.4
    }
  }, message), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRetry,
    style: {
      whiteSpace: 'nowrap',
      flexShrink: 0,
      minHeight: 44,
      padding: 0,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--primary-text)'
    }
  }, actionLabel));
}
Object.assign(__ds_scope, { StaleNotice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StaleNotice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  value,
  defaultValue,
  onChangeText,
  placeholder,
  error,
  multiline = false,
  inputMode,
  style,
  inputStyle
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  const borderColor = error ? 'var(--error-text)' : focus ? 'var(--primary-text)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, {
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    inputMode: inputMode,
    onChange: e => onChangeText && onChangeText(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      minHeight: multiline ? 88 : 48,
      padding: multiline ? 12 : '0 12px',
      background: 'var(--surface)',
      color: 'var(--text)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-base)',
      outline: 'none',
      resize: multiline ? 'vertical' : undefined,
      ...inputStyle
    }
  }), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--error-text)',
      marginTop: -4
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/DateField.jsx
try { (() => {
function mask(t) {
  const d = t.replace(/\D/g, '').slice(0, 8);
  return [d.slice(0, 2), d.slice(2, 4), d.slice(4, 8)].filter(Boolean).join('/');
}
function isValidDate(s) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s || '');
  if (!m) return false;
  const d = +m[1],
    mo = +m[2],
    y = +m[3];
  const dt = new Date(y, mo - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === d;
}
function DateField({
  label = 'Data',
  value,
  onChangeText,
  error,
  style
}) {
  const [inner, setInner] = React.useState(value || '');
  const current = value !== undefined ? value : inner;
  const autoErr = current.length === 10 && !isValidDate(current) ? 'Informe uma data válida.' : undefined;
  return /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: label,
    value: current,
    placeholder: "DD/MM/AAAA",
    inputMode: "numeric",
    error: error || autoErr,
    style: style,
    onChangeText: t => {
      const v = mask(t);
      setInner(v);
      onChangeText && onChangeText(v);
    }
  });
}
Object.assign(__ds_scope, { isValidDate, DateField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DateField.jsx", error: String((e && e.message) || e) }); }

// components/lists/Avatar.jsx
try { (() => {
const PALETTE = ['var(--avatar-0)', 'var(--avatar-1)', 'var(--avatar-2)', 'var(--avatar-3)', 'var(--avatar-4)', 'var(--avatar-5)'];
function colorForName(name = '') {
  let s = 0;
  for (let i = 0; i < name.length; i++) s += name.charCodeAt(i);
  return PALETTE[s % 6];
}
function initials(name = '') {
  const p = name.trim().split(/\s+/);
  return ((p[0] || '')[0] || '').concat(p.length > 1 ? p[p.length - 1][0] : '').toUpperCase();
}
function Avatar({
  name,
  size = 40,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-label": name,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: color || colorForName(name),
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: Math.round(size * 0.4),
      ...style
    }
  }, initials(name));
}
Object.assign(__ds_scope, { colorForName, initials, Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/lists/PersonRow.jsx
try { (() => {
function PersonRow({
  name,
  subtitle,
  actionLabel,
  onAction,
  onPress,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onPress,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 56,
      padding: '8px 0',
      cursor: onPress ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-base)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)'
    }
  }, name), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, subtitle) : null), actionLabel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onAction && onAction();
    },
    style: {
      whiteSpace: 'nowrap',
      flexShrink: 0,
      minHeight: 44,
      padding: '0 4px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--error-text)'
    }
  }, actionLabel) : null);
}
Object.assign(__ds_scope, { PersonRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/PersonRow.jsx", error: String((e && e.message) || e) }); }

// components/money/Card.jsx
try { (() => {
function Card({
  children,
  elevation = 'sm',
  padding = 16,
  style
}) {
  const sh = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)'
  }[elevation];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: sh,
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/money/Card.jsx", error: String((e && e.message) || e) }); }

// components/money/MoneyText.jsx
try { (() => {
const fmt = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});
function formatBRL(cents, signed = false) {
  const abs = fmt.format(Math.abs(cents || 0) / 100).replace(/\u00a0/g, ' ');
  if (!signed || !cents) return abs;
  return (cents > 0 ? '+' : '-') + abs;
}
const TONES = {
  positive: 'var(--success-text)',
  negative: 'var(--error-text)',
  neutral: 'var(--muted)',
  none: 'inherit'
};
function MoneyText({
  cents = 0,
  kind = 'balance',
  tone,
  size = 'base',
  style
}) {
  const isBalance = kind === 'balance';
  const t = tone || (isBalance ? cents > 0 ? 'positive' : cents < 0 ? 'negative' : 'neutral' : 'none');
  const sizes = {
    xs: 'var(--fs-xs)',
    sm: 'var(--fs-sm)',
    base: 'var(--fs-base)',
    lg: 'var(--fs-lg)',
    xl: 'var(--fs-xl)',
    '2xl': 'var(--fs-2xl)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: sizes[size] || size,
      color: TONES[t],
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, formatBRL(cents, isBalance));
}
Object.assign(__ds_scope, { formatBRL, MoneyText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/money/MoneyText.jsx", error: String((e && e.message) || e) }); }

// components/forms/MoneyInput.jsx
try { (() => {
function MoneyInput({
  label = 'Valor',
  cents,
  onChangeCents,
  error,
  style
}) {
  const [inner, setInner] = React.useState(cents || 0);
  const current = cents !== undefined ? cents : inner;
  return /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: label,
    value: __ds_scope.formatBRL(current),
    inputMode: "numeric",
    error: error,
    style: style,
    onChangeText: t => {
      const c = parseInt(t.replace(/\D/g, '') || '0', 10);
      setInner(c);
      onChangeCents && onChangeCents(c);
    }
  });
}
Object.assign(__ds_scope, { MoneyInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/MoneyInput.jsx", error: String((e && e.message) || e) }); }

// components/lists/BalanceRow.jsx
try { (() => {
function BalanceRow({
  name,
  paidCents = 0,
  consumedCents = 0,
  balanceCents,
  style
}) {
  const bal = balanceCents !== undefined ? balanceCents : paidCents - consumedCents;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 56,
      padding: '8px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-base)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, "Pagou ", __ds_scope.formatBRL(paidCents), " \xB7 Consumiu ", __ds_scope.formatBRL(consumedCents))), /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    cents: bal
  }));
}
Object.assign(__ds_scope, { BalanceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/BalanceRow.jsx", error: String((e && e.message) || e) }); }

// components/lists/ExpenseRow.jsx
try { (() => {
function ExpenseRow({
  title,
  payer,
  date,
  category,
  amountCents = 0,
  hasReceipt = false,
  variant = 'card',
  onPress,
  style
}) {
  const card = variant === 'card';
  const meta = [payer, date, category].filter(Boolean).join(' · ');
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    onClick: onPress,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 56,
      boxSizing: 'border-box',
      cursor: onPress ? 'pointer' : 'default',
      ...(card ? {
        padding: 16,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)'
      } : {
        padding: '10px 0'
      }),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 'var(--fs-base)',
      fontWeight: card ? 'var(--fw-medium)' : 'var(--fw-regular)',
      color: 'var(--text)'
    }
  }, title, hasReceipt ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "attach",
    size: 16,
    color: "var(--muted)",
    style: {
      transform: 'rotate(45deg)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--muted)'
    }
  }, meta)), /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    cents: amountCents,
    kind: "amount"
  }));
}
Object.assign(__ds_scope, { ExpenseRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ExpenseRow.jsx", error: String((e && e.message) || e) }); }

// components/lists/GroupRow.jsx
try { (() => {
function GroupRow({
  name,
  type = 'Viagem',
  memberCount = 0,
  balanceCents = 0,
  onPress,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    onClick: onPress,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 16,
      minHeight: 44,
      boxSizing: 'border-box',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      cursor: onPress ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-base)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--muted)'
    }
  }, type, " \xB7 ", memberCount, " ", memberCount === 1 ? 'membro' : 'membros')), /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    cents: balanceCents
  }));
}
Object.assign(__ds_scope, { GroupRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/GroupRow.jsx", error: String((e && e.message) || e) }); }

// components/lists/SuggestionRow.jsx
try { (() => {
function SuggestionRow({
  from,
  to,
  amountCents = 0,
  onSettle,
  settled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '8px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 'var(--fs-base)',
      color: 'var(--text)'
    }
  }, from, " paga ", to), /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    cents: amountCents,
    kind: "amount",
    tone: "neutral"
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onPress: onSettle,
    disabled: settled
  }, settled ? 'Quitação registrada' : 'Registrar quitação'));
}
Object.assign(__ds_scope, { SuggestionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/SuggestionRow.jsx", error: String((e && e.message) || e) }); }

// components/money/TotalsCards.jsx
try { (() => {
function Cell({
  label,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--muted)'
    }
  }, label), children);
}
function TotalsCards({
  receivableCents = 0,
  owedCents = 0,
  showBalance = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    label: "A receber"
  }, /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    cents: receivableCents,
    kind: "amount",
    tone: "positive",
    size: "xl"
  })), /*#__PURE__*/React.createElement(Cell, {
    label: "A dever"
  }, /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    cents: owedCents,
    kind: "amount",
    tone: "negative",
    size: "xl"
  }))), showBalance ? /*#__PURE__*/React.createElement(Cell, {
    label: "Balan\xE7o",
    style: {
      paddingTop: 20,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    cents: receivableCents - owedCents,
    size: "2xl"
  })) : null);
}
Object.assign(__ds_scope, { TotalsCards });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/money/TotalsCards.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ScreenHeader.jsx
try { (() => {
function ScreenHeader({
  title,
  backLabel,
  onBack,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 52,
      padding: '0 12px',
      background: 'var(--bg)',
      ...style
    }
  }, backLabel !== undefined ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      minHeight: 44,
      padding: 0,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-base)',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-back",
    size: 24
  }), backLabel) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 'var(--fs-base)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text)',
      pointerEvents: 'none'
    }
  }, title));
}
Object.assign(__ds_scope, { ScreenHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ScreenHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionHeader.jsx
try { (() => {
function SectionHeader({
  title,
  actionLabel,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      minHeight: 44,
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text)'
    }
  }, title), actionLabel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      whiteSpace: 'nowrap',
      flexShrink: 0,
      minHeight: 44,
      padding: 0,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--primary-text)'
    }
  }, actionLabel) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
const TABS = [{
  key: 'inicio',
  label: 'Início',
  icon: 'home-outline'
}, {
  key: 'grupos',
  label: 'Grupos',
  icon: 'people-outline'
}, {
  key: 'amigos',
  label: 'Amigos',
  icon: 'person-add-outline'
}, {
  key: 'avisos',
  label: 'Avisos',
  icon: 'notifications-outline'
}, {
  key: 'perfil',
  label: 'Perfil',
  icon: 'person-outline'
}];
function TabBar({
  active = 'inicio',
  badges = {},
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '8px 0 12px',
      ...style
    }
  }, TABS.map(t => {
    const on = t.key === active;
    const b = badges[t.key];
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      type: "button",
      onClick: () => onChange && onChange(t.key),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        minHeight: 'var(--min-touch)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: on ? 'var(--primary-text)' : 'var(--muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 'var(--fw-medium)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 24
    }), b ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -6,
        right: -9,
        minWidth: 18,
        height: 18,
        padding: '0 4px',
        boxSizing: 'border-box',
        borderRadius: 9,
        background: 'var(--badge-bg)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 'var(--fw-bold)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, b) : null), t.label);
  }));
}
Object.assign(__ds_scope, { TABS, TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/split/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  right,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "checkbox",
    "aria-checked": checked,
    onClick: () => onChange && onChange(!checked),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 'var(--min-touch)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      boxSizing: 'border-box',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--fill-primary)' : 'var(--bg)',
      border: checked ? 'none' : '1.5px solid var(--border)',
      color: 'var(--on-fill)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "checkmark",
    size: 14
  }) : null), label !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 'var(--fs-base)',
      color: 'var(--text)'
    }
  }, label) : null, right);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/split/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/split/SplitBar.jsx
try { (() => {
const ORDER = ['var(--primary-text)', 'var(--success-text)', 'var(--warning-text)', 'var(--info-text)', 'var(--error-text)'];
function SplitBar({
  values = [],
  height = 6,
  style
}) {
  const total = values.reduce((a, b) => a + (b || 0), 0) || 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height,
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      background: 'var(--border)',
      ...style
    }
  }, values.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 100 * (v || 0) / total + '%',
      background: ORDER[i % ORDER.length]
    }
  })));
}
Object.assign(__ds_scope, { SplitBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/split/SplitBar.jsx", error: String((e && e.message) || e) }); }

// components/split/SplitEditor.jsx
try { (() => {
const MODES = [{
  value: 'equal',
  label: 'Igual'
}, {
  value: 'amounts',
  label: 'Valores'
}, {
  value: 'percent',
  label: 'Percentual'
}];
function SplitEditor({
  totalCents = 0,
  participants = [],
  defaultMode = 'equal',
  onChange,
  style
}) {
  const [mode, setMode] = React.useState(defaultMode);
  const [rows, setRows] = React.useState(() => participants.map(p => ({
    included: true,
    value: 0,
    ...p
  })));
  const inc = rows.filter(r => r.included);
  const equal = inc.length ? Math.floor(totalCents / inc.length) : 0;
  const update = (i, patch) => {
    const n = rows.map((r, j) => j === i ? {
      ...r,
      ...patch
    } : r);
    setRows(n);
    onChange && onChange({
      mode,
      rows: n
    });
  };
  const sum = inc.reduce((a, r) => a + (r.value || 0), 0);
  const mismatch = mode === 'amounts' ? sum !== totalCents : mode === 'percent' ? sum !== 100 : false;
  const field = {
    width: 92,
    minHeight: 36,
    boxSizing: 'border-box',
    padding: '0 8px',
    textAlign: 'right',
    background: 'var(--surface)',
    color: 'var(--text)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--fs-sm)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ChipGroup, {
    label: "Divis\xE3o",
    options: MODES,
    value: mode,
    onChange: setMode
  }), mode === 'percent' ? /*#__PURE__*/React.createElement(__ds_scope.SplitBar, {
    values: inc.map(r => r.value || 0)
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)',
      marginBottom: 4
    }
  }, "Participantes"), rows.map((r, i) => /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    key: r.name,
    checked: r.included,
    label: r.name,
    onChange: v => update(i, {
      included: v
    }),
    right: !r.included ? null : mode === 'equal' ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-base)',
        color: 'var(--muted)'
      }
    }, __ds_scope.formatBRL(equal)) : /*#__PURE__*/React.createElement("input", {
      onClick: e => e.stopPropagation(),
      inputMode: "numeric",
      style: field,
      value: mode === 'amounts' ? __ds_scope.formatBRL(r.value || 0) : (r.value || 0) + '%',
      onChange: e => update(i, {
        value: parseInt(e.target.value.replace(/\D/g, '') || '0', 10)
      })
    })
  }))), mismatch ? /*#__PURE__*/React.createElement(__ds_scope.Banner, {
    tone: "error"
  }, mode === 'percent' ? 'Os percentuais precisam somar 100%.' : 'A soma das parcelas precisa fechar o valor total.') : null);
}
Object.assign(__ds_scope, { SplitEditor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/split/SplitEditor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/BalancesScreen.jsx
try { (() => {
const {
  TotalsCards: BTotals,
  BalanceRow,
  SuggestionRow,
  Button: BButton,
  Banner: BBanner
} = window.DivideAeDesignSystem_6b5740;
function BalancesScreen({
  group
}) {
  const [settled, setSettled] = React.useState({});
  const [flash, setFlash] = React.useState(false);
  const settle = i => {
    setSettled(s => ({
      ...s,
      [i]: true
    }));
    setFlash(true);
    setTimeout(() => setFlash(false), 2400);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 24px'
    }
  }, flash ? /*#__PURE__*/React.createElement(BBanner, {
    tone: "success",
    style: {
      marginBottom: 12
    }
  }, "Quita\xE7\xE3o registrada.") : null, /*#__PURE__*/React.createElement(BTotals, {
    receivableCents: 31240,
    owedCents: 0,
    showBalance: false
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '24px 0 8px',
      fontSize: 'var(--fs-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text)'
    }
  }, "Saldo por membro"), group.members.map(m => /*#__PURE__*/React.createElement(BalanceRow, {
    key: m.name,
    name: m.name,
    paidCents: m.paid,
    consumedCents: m.consumed,
    balanceCents: m.balance
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '28px 0 8px',
      fontSize: 'var(--fs-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text)'
    }
  }, "Como acertar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, group.suggestions.map((s, i) => /*#__PURE__*/React.createElement(SuggestionRow, {
    key: i,
    from: s.from,
    to: s.to,
    amountCents: s.amount,
    settled: settled[i],
    onSettle: () => settle(i)
  })), /*#__PURE__*/React.createElement(BButton, {
    variant: "secondary"
  }, "Ver quita\xE7\xF5es")));
}
window.BalancesScreen = BalancesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/BalancesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/GroupScreen.jsx
try { (() => {
const {
  Card,
  MoneyText,
  SectionHeader: GSectionHeader,
  PersonRow,
  ExpenseRow,
  Button: GButton,
  EmptyState: GEmpty
} = window.DivideAeDesignSystem_6b5740;
function coverColor(name) {
  let s = 0;
  for (let i = 0; i < name.length; i++) s += name.charCodeAt(i);
  return 'var(--avatar-' + s % 6 + ')';
}
function GroupScreen({
  group,
  onNav
}) {
  const shown = group.members.slice(0, 4);
  const extra = (group.memberCount || group.members.length) - shown.length;
  const cover = coverColor(group.name);
  const linkRow = {
    display: 'flex',
    alignItems: 'center',
    minHeight: 52,
    fontSize: 'var(--fs-base)',
    color: 'var(--text)',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: cover,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 30,
      boxSizing: 'border-box',
      fontSize: 'var(--fs-5xl)',
      fontWeight: 'var(--fw-bold)',
      color: 'rgba(255,255,255,.6)',
      lineHeight: 1
    }
  }, group.name[0]), /*#__PURE__*/React.createElement(Card, {
    elevation: "md",
    style: {
      margin: '-48px 16px 0',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-2xl)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text)'
    }
  }, group.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--muted)'
    }
  }, group.type, " \xB7 ", group.memberCount || group.members.length, " membros"), group.description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text)',
      marginTop: 8,
      lineHeight: 1.45
    }
  }, group.description) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--muted)',
      marginTop: 12
    }
  }, "Seu saldo"), /*#__PURE__*/React.createElement(MoneyText, {
    cents: group.balanceCents,
    size: "xl"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(GSectionHeader, {
    title: "Membros",
    actionLabel: "Gerenciar",
    style: {
      marginTop: 20,
      marginBottom: 4
    }
  }), shown.map(m => /*#__PURE__*/React.createElement(PersonRow, {
    key: m.name,
    name: m.name,
    subtitle: m.subtitle
  })), extra > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--muted)',
      marginTop: 4
    }
  }, "e mais ", extra, " ", extra === 1 ? 'membro' : 'membros') : null, /*#__PURE__*/React.createElement(GSectionHeader, {
    title: "Despesas recentes",
    actionLabel: "Ver todas",
    style: {
      marginTop: 20
    }
  }), group.expenses.length ? group.expenses.slice(0, 3).map((e, i) => /*#__PURE__*/React.createElement(ExpenseRow, {
    key: i,
    variant: "plain",
    title: e.title,
    payer: e.payer,
    date: e.date,
    amountCents: e.amount,
    hasReceipt: e.receipt
  })) : /*#__PURE__*/React.createElement(GEmpty, {
    title: "Nenhuma despesa ainda",
    description: "Lance a primeira despesa do grupo."
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 4px',
      fontSize: 'var(--fs-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text)'
    }
  }, "Atalhos"), /*#__PURE__*/React.createElement("div", {
    style: linkRow
  }, "Hist\xF3rico de despesas"), /*#__PURE__*/React.createElement("div", {
    style: linkRow,
    onClick: () => onNav('saldos')
  }, "Saldos do grupo"), /*#__PURE__*/React.createElement("div", {
    style: linkRow
  }, "Quita\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(GButton, {
    variant: "secondary"
  }, "Editar grupo"), /*#__PURE__*/React.createElement(GButton, {
    variant: "destructive"
  }, "Arquivar grupo"))));
}
window.GroupScreen = GroupScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/GroupScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeScreen.jsx
try { (() => {
const {
  TotalsCards,
  SectionHeader,
  GroupRow
} = window.DivideAeDesignSystem_6b5740;
function HomeScreen({
  groups,
  onOpenGroup
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 16px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 16px',
      fontSize: 'var(--fs-xl)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text)'
    }
  }, "Ol\xE1, Ana"), /*#__PURE__*/React.createElement(TotalsCards, {
    receivableCents: 31240,
    owedCents: 8550
  }), /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Seus grupos",
    actionLabel: "Ver todos",
    style: {
      marginTop: 16,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, groups.map(g => /*#__PURE__*/React.createElement(GroupRow, {
    key: g.id,
    name: g.name,
    type: g.type,
    memberCount: g.memberCount || g.members.length,
    balanceCents: g.balanceCents,
    onPress: () => onOpenGroup(g.id)
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/NewExpenseScreen.jsx
try { (() => {
const {
  Input: NInput,
  MoneyInput: NMoney,
  DateField: NDate,
  ChipGroup: NChips,
  SplitEditor: NSplit,
  Button: NButton
} = window.DivideAeDesignSystem_6b5740;
function NewExpenseScreen({
  group,
  onSubmit
}) {
  const [title, setTitle] = React.useState('Mercado da chegada');
  const [cents, setCents] = React.useState(38620);
  const [payer, setPayer] = React.useState('Bruno Lima');
  const [date, setDate] = React.useState('12/01/2026');
  const [cat, setCat] = React.useState('Alimentação');
  const [receipt, setReceipt] = React.useState(false);
  const names = group.members.map(m => m.name);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(NInput, {
    label: "T\xEDtulo",
    value: title,
    onChangeText: setTitle
  }), /*#__PURE__*/React.createElement(NMoney, {
    label: "Valor",
    cents: cents,
    onChangeCents: setCents
  }), /*#__PURE__*/React.createElement(NChips, {
    label: "Quem pagou",
    options: names,
    value: payer,
    onChange: setPayer
  }), /*#__PURE__*/React.createElement(NDate, {
    label: "Data",
    value: date,
    onChangeText: setDate
  }), /*#__PURE__*/React.createElement(NChips, {
    label: "Categoria",
    options: ['Alimentação', 'Transporte', 'Hospedagem', 'Lazer', 'Compras', 'Outros'],
    value: cat,
    onChange: setCat
  }), /*#__PURE__*/React.createElement(NInput, {
    label: "Descri\xE7\xE3o (opcional)",
    multiline: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)'
    }
  }, "Comprovante"), /*#__PURE__*/React.createElement(NButton, {
    variant: "secondary",
    onPress: () => setReceipt(r => !r)
  }, receipt ? 'Comprovante anexado' : 'Anexar comprovante')), /*#__PURE__*/React.createElement(NSplit, {
    key: cents,
    totalCents: cents,
    participants: names.map(n => ({
      name: n
    }))
  }), /*#__PURE__*/React.createElement(NButton, {
    disabled: !title || !cents,
    onPress: () => onSubmit({
      title,
      payer,
      date,
      amount: cents,
      receipt
    })
  }, "Lan\xE7ar despesa"));
}
window.NewExpenseScreen = NewExpenseScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/NewExpenseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
const DVAE_DATA = {
  user: 'Ana',
  groups: [{
    id: 'floripa',
    name: 'Floripa 2026',
    type: 'Viagem',
    balanceCents: 31240,
    description: 'Casa alugada na Lagoa da Conceição, de 12 a 19 de janeiro.',
    members: [{
      name: 'Ana Souza',
      subtitle: 'Dono',
      paid: 128450,
      consumed: 97210,
      balance: 31240
    }, {
      name: 'Bruno Lima',
      subtitle: 'bruno@exemplo.com',
      paid: 88660,
      consumed: 97210,
      balance: -8550
    }, {
      name: 'Carol Dias',
      subtitle: 'carol@exemplo.com',
      paid: 85210,
      consumed: 97210,
      balance: -12000
    }, {
      name: 'Davi Nunes',
      subtitle: 'davi@exemplo.com',
      paid: 101270,
      consumed: 97210,
      balance: 4060
    }, {
      name: 'Marina Costa',
      subtitle: 'marina@exemplo.com',
      paid: 82460,
      consumed: 97210,
      balance: -14750
    }],
    expenses: [{
      title: 'Passeio de barco',
      payer: 'Ana Souza',
      date: '15/01/2026',
      amount: 60000
    }, {
      title: 'Jantar na Lagoa',
      payer: 'Davi Nunes',
      date: '14/01/2026',
      amount: 41280
    }, {
      title: 'Mercado da chegada',
      payer: 'Bruno Lima',
      date: '12/01/2026',
      amount: 38620,
      receipt: true
    }],
    suggestions: [{
      from: 'Marina Costa',
      to: 'Ana Souza',
      amount: 14750
    }, {
      from: 'Carol Dias',
      to: 'Ana Souza',
      amount: 12000
    }, {
      from: 'Bruno Lima',
      to: 'Ana Souza',
      amount: 4490
    }, {
      from: 'Bruno Lima',
      to: 'Davi Nunes',
      amount: 4060
    }]
  }, {
    id: 'augusta',
    name: 'Apê da Augusta',
    type: 'Geral',
    balanceCents: -8550,
    description: '',
    members: [{
      name: 'Ana Souza',
      subtitle: 'Dono'
    }, {
      name: 'Bruno Lima',
      subtitle: 'bruno@exemplo.com'
    }, {
      name: 'Marina Costa',
      subtitle: 'marina@exemplo.com'
    }],
    expenses: [],
    suggestions: []
  }, {
    id: 'churras',
    name: 'Churras de sábado',
    type: 'Geral',
    balanceCents: 0,
    description: '',
    memberCount: 8,
    members: [{
      name: 'Ana Souza',
      subtitle: 'Dono'
    }],
    expenses: [],
    suggestions: []
  }]
};
window.DVAE_DATA = DVAE_DATA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ChipGroup = __ds_scope.ChipGroup;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.StaleNotice = __ds_scope.StaleNotice;

__ds_ns.DateField = __ds_scope.DateField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.MoneyInput = __ds_scope.MoneyInput;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.BalanceRow = __ds_scope.BalanceRow;

__ds_ns.ExpenseRow = __ds_scope.ExpenseRow;

__ds_ns.GroupRow = __ds_scope.GroupRow;

__ds_ns.PersonRow = __ds_scope.PersonRow;

__ds_ns.SuggestionRow = __ds_scope.SuggestionRow;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MoneyText = __ds_scope.MoneyText;

__ds_ns.TotalsCards = __ds_scope.TotalsCards;

__ds_ns.ScreenHeader = __ds_scope.ScreenHeader;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.TABS = __ds_scope.TABS;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.SplitBar = __ds_scope.SplitBar;

__ds_ns.SplitEditor = __ds_scope.SplitEditor;

})();
