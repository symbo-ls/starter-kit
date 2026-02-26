# Default components and property usage

This document lists the default components in `smbls/components` and how their properties are commonly used in Symbols/DOMQL v3.

## Component groups

- [Typography](#typography)
- [Dividers](#dividers)
- [Buttons](#buttons)
- [Avatar](#avatar)
- [Badge & Notification](#badge--notification)
- [Form & Input](#form--input)
- [Composition](#composition)
- [Selection](#selection)
- [Progress & Status](#progress--status)
- [Navigation & Links](#navigation--links)
- [Overlay & Disclosure](#overlay--disclosure)
- [Data display](#data-display)
- [Misc](#misc)

---

## Typography

- `H1` → `<h1>`
- `H2` → `<h2>`
- `H3` → `<h3>`
- `H4` → `<h4>`
- `H5` → `<h5>`
- `H6` → `<h6>`
- `P` → `<p>`
- `Caption` → `<span>` (small label text)
- `Headline` → `<span>` (large emphasis text)
- `Subhead` → `<span>` (subheading text)
- `Footnote` → `<span>` (footer reference text)
- `Strong` → `<strong>`
- `Italic` → `<em>`
- `U` → `<u>`

All typography components accept a `text` prop.

### H1–H6

Primary use: semantic section headings.

Common props:

- `text`
- `color`, `fontSize`, `fontWeight`, `lineHeight`

Example:

```js
H2: { text: 'Section title' }
```

### P

Primary use: body paragraph text.

Common props:

- `text`
- `color`, `fontSize`, `lineHeight`, `maxWidth`

Example:

```js
P: { text: 'A short description goes here.' }
```

### Caption

Primary use: small labels, hints, and metadata text.

Common props:

- `text`
- `color`, `fontSize`, `opacity`

Example:

```js
Caption: { text: 'Updated 3 days ago' }
```

### Headline / Subhead / Footnote

Primary use: display-size headings, sub-sections, and footnotes.

Common props:

- `text`
- `color`, `fontSize`

Example:

```js
Headline: { text: 'Welcome back' }
Subhead: { text: 'Manage your workspace' }
Footnote: { text: '* Prices are subject to change' }
```

### Strong / Italic / U

Primary use: inline text emphasis.

Common props:

- `text`

Example:

```js
Strong: { text: 'Important' }
Italic: { text: 'Note:' }
U: { text: 'Terms of service' }
```

---

## Dividers

- `Hr` → `<hr>`
- `HrLegend` → `<div>` (line with centered text)

### Hr

Primary use: visual horizontal rule between sections.

Common props:

- `minWidth`
- `color`, `margin`

Example:

```js
Hr: { minWidth: 'F' }
```

### HrLegend

Primary use: divider with a centered label, commonly used between form sections.

Common props:

- `text` (shown in the middle)

Example:

```js
HrLegend: { text: 'Or' }
```

---

## Buttons

- `IconButton` — icon-only circular button
- `IconButtonSet` — group of icon buttons
- `CounterButton` — button with notification badge
- `CounterIconButton` — icon button with positioned badge
- `IconCounterButton` — button with icon and counter side-by-side
- `UploadButton` — text button that opens file picker
- `UploadIconButton` — icon button that opens file picker
- `SubmitButton` — form submit button
- `ButtonSet` — group of buttons
- `ConfirmationButtons` — yes/no pair
- `ImgButton` — image as button
- `ImgHeadingButton` — image and heading as button
- `InputButton` — email input with action button

### IconButton

Primary use: compact circular button that shows only an icon.

Common props:

- `Icon.name`
- `theme` (default: `'dialog'`)
- `fontSize`, `padding`, `round`

Example:

```js
IconButton: { Icon: { name: 'plus' }, theme: 'dialog' }
```

### IconButtonSet

Primary use: row of icon buttons.

Common props:

- `childExtend: 'IconButton'`
- `children` (array of `{ Icon: { name } }`)
- `gap`

Example:

```js
IconButtonSet: {
  childExtend: 'IconButton',
  children: [
    { Icon: { name: 'edit' } },
    { Icon: { name: 'trash' } }
  ]
}
```

### CounterButton

Primary use: button that shows a notification count badge.

Common props:

- `Span.text` (button label)
- `NotificationCounter.text` (count)
- `theme` (default: `'field'`)

Example:

```js
CounterButton: {
  Span: { text: 'Messages' },
  NotificationCounter: { text: '7' }
}
```

### CounterIconButton

Primary use: icon button with an absolutely positioned counter badge.

Common props:

- `Icon.name`
- `NotificationCounter.text`

Example:

```js
CounterIconButton: {
  Icon: { name: 'bell' },
  NotificationCounter: { text: '3' }
}
```

### IconCounterButton

Primary use: button combining an icon, label, and counter.

Common props:

- `Icon.name`
- `Span.text`
- `NotificationCounter.text`

Example:

```js
IconCounterButton: {
  Icon: { name: 'inbox' },
  Span: { text: 'Inbox' },
  NotificationCounter: { text: '12' }
}
```

### UploadButton / UploadIconButton

Primary use: trigger file upload via button or icon.

Common props:

- `text` (UploadButton only)
- `Icon.name` (UploadIconButton only, default: `'upload'`)

Example:

```js
UploadButton: { text: 'Choose file' }
UploadIconButton: { Icon: { name: 'upload' } }
```

### SubmitButton

Primary use: form submit control.

Common props:

- `value` (label, default: `'Submit'`)
- `type: 'submit'`
- `padding`

Example:

```js
SubmitButton: { value: 'Create account' }
```

### ButtonSet

Primary use: evenly spaced row of buttons.

Common props:

- `childExtend: 'Button'`
- `children` (array of button objects)
- `gap`

Example:

```js
ButtonSet: {
  children: [
    { text: 'Cancel' },
    { text: 'Save', theme: 'primary' }
  ]
}
```

### ConfirmationButtons

Primary use: two-button confirm/cancel pair.

Common props:

- `children[0].text` (cancel label, default: `'No'`)
- `children[1].text` (confirm label, default: `'YES'`)

Example:

```js
ConfirmationButtons: {
  children: [
    { text: 'Cancel' },
    { text: 'Delete', theme: 'danger' }
  ]
}
```

### InputButton

Primary use: inline email or text input with a submit button.

Common props:

- `Input.placeholder`
- `Button.text`
- `gap`, `height`

Example:

```js
InputButton: {
  Input: { placeholder: 'Enter your email' },
  Button: { text: 'Sign up' }
}
```

---

## Avatar

- `Avatar` — single avatar image
- `AvatarSet` — overlapping group of avatars
- `AvatarStatus` — avatar with online/offline dot
- `AvatarParagraph` — avatar + paragraph
- `AvatarHeading` — avatar + heading
- `AvatarHgroup` — avatar + heading group
- `AvatarBadgeHgroup` — avatar + heading + badge
- `AvatarHgroupIconButton` — avatar + heading + icon button
- `AvatarHgroupSelect` — avatar + heading + select
- `AvatarSelectPicker` — avatar inside label with select
- `AvatarChatPreview` — avatar + message preview
- `AvatarStatusChatPreview` — avatar with status + message preview
- `AvatarSetChatPreview` — avatar group + message preview

### Avatar

Primary use: user or entity profile image.

Common props:

- `boxSize` (default: `'C2'`)
- `src`, `alt`

Example:

```js
Avatar: { boxSize: 'C2' }
```

### AvatarSet

Primary use: stacked group of overlapping avatars.

Common props:

- `childExtend: 'Avatar'`
- `children` (array of avatar objects)

Example:

```js
AvatarSet: { children: [{}, {}, {}] }
```

### AvatarStatus

Primary use: avatar with a status indicator dot.

Common props:

- `Avatar.boxSize`
- `StatusDot.theme` (`'success'`, `'error'`, etc.)

Example:

```js
AvatarStatus: {
  Avatar: { boxSize: 'C' },
  StatusDot: { theme: 'success' }
}
```

### AvatarParagraph

Primary use: avatar paired with a short text description.

Common props:

- `Avatar.boxSize`
- `P.text`

Example:

```js
AvatarParagraph: {
  Avatar: {},
  P: { text: 'Can you join us today?' }
}
```

### AvatarHeading

Primary use: avatar with a single heading line.

Common props:

- `Avatar`
- `H.tag` (default: `'h6'`), `H.text`

Example:

```js
AvatarHeading: {
  H: { tag: 'h6', text: 'Nika Tomadze' }
}
```

### AvatarHgroup

Primary use: avatar with a two-line heading group (name + subtitle).

Common props:

- `Avatar.margin`
- `Hgroup.gap`
- `H.text`, `P.text`

Example:

```js
AvatarHgroup: {
  H: { text: 'Nika Tomadze' },
  P: { text: 'Product Designer' }
}
```

### AvatarBadgeHgroup

Primary use: avatar with heading group and a badge label.

Common props:

- `H.text`, `P.text`
- `Badge.text`, `Badge.theme`

Example:

```js
AvatarBadgeHgroup: {
  H: { text: 'Nika Tomadze' },
  Badge: { text: 'Admin', theme: 'primary' }
}
```

### AvatarHgroupIconButton

Primary use: avatar with heading and a copy/action icon button.

Common props:

- `H.text`, `P.text`
- `IconButton.Icon.name` (default: `'copy'`)

Example:

```js
AvatarHgroupIconButton: {
  H: { text: 'Nika Tomadze' },
  IconButton: { Icon: { name: 'copy' } }
}
```

### AvatarHgroupSelect

Primary use: avatar with heading and a dropdown selector.

Common props:

- `H.text`, `P.text`
- `SelectPicker.Select.children` (option list)

Example:

```js
AvatarHgroupSelect: {
  H: { text: 'Nika Tomadze' },
  SelectPicker: {
    Select: { children: [{ text: 'Admin' }, { text: 'Editor' }] }
  }
}
```

### AvatarChatPreview / AvatarStatusChatPreview / AvatarSetChatPreview

Primary use: chat list item showing an avatar with the latest message summary.

Common props:

- `Avatar` / `AvatarStatus` / `AvatarSet`
- `H.text` (conversation name)
- `P.text` (message preview)
- `Value.text` (timestamp)
- `NotificationCounter.text` (unread count)

Example:

```js
AvatarChatPreview: {
  H: { text: 'Design Team' },
  P: { text: 'Can you join us today?' },
  Value: { text: '2:20' }
}
```

---

## Badge & Notification

- `Badge` — colored label badge
- `BadgeCaption` — caption + badge
- `BadgeParagraph` — paragraph + badge
- `NotificationCounter` — circular number badge
- `NotCounterParagraph` — paragraph + counter

### Badge

Primary use: small colored label, typically used for status or categories.

Common props:

- `text`
- `theme` (default: `'warning'`)
- `round`, `padding`

Example:

```js
Badge: { text: 'New', theme: 'primary' }
```

### BadgeCaption

Primary use: caption label paired with a badge.

Common props:

- `Caption.text`
- `Badge.text`, `Badge.theme`

Example:

```js
BadgeCaption: {
  Caption: { text: 'Status' },
  Badge: { text: 'Active', theme: 'success' }
}
```

### BadgeParagraph

Primary use: list item or message row with badge on the trailing edge.

Common props:

- `P.text`
- `Badge.text`, `Badge.theme`

Example:

```js
BadgeParagraph: {
  P: { text: 'Hey team, I finished the review.' },
  Badge: { text: 'Unread', theme: 'primary' }
}
```

### NotificationCounter

Primary use: circular badge showing an unread count.

Common props:

- `text` (number)
- `theme` (default: `'primary'`)
- `widthRange`

Example:

```js
NotificationCounter: { text: '5', theme: 'primary' }
```

### NotCounterParagraph

Primary use: message row with paragraph text and unread count on the right.

Common props:

- `P.text`
- `NotificationCounter.text`

Example:

```js
NotCounterParagraph: {
  P: { text: 'New messages arrived' },
  NotificationCounter: { text: '3' }
}
```

---

## Form & Input

- `Field` — input with optional icon
- `FieldCaption` — labeled field with caption
- `IconInput` — input with icon overlay
- `FixedNumberField` — 4-digit code input
- `CardNumberField` — 4×4-digit card number entry
- `Group` — form section with title
- `GroupField` — labeled form fieldset
- `Select` — native select
- `SelectPicker` — styled select with chevron icon
- `SelectField` — field-styled select
- `SelectHgroup` — select with heading description
- `NumberPicker` — increment/decrement number input
- `Search` — search input with icon
- `SearchDropdown` — searchable filterable dropdown
- `TextareaIconButton` — textarea with send button

### Field

Primary use: styled text input, optionally decorated with an icon.

Common props:

- `Input.placeholder`, `Input.type`, `Input.round`
- `Icon.icon` (trailing icon)
- `theme` (default: `'field'`)

Example:

```js
Field: {
  Input: { placeholder: 'Enter your name' },
  Icon: { icon: 'user' }
}
```

### FieldCaption

Primary use: a field with a small label above it.

Common props:

- `Caption.text`
- `Field` props

Example:

```js
FieldCaption: {
  Caption: { text: 'Email address' },
  Field: { Input: { placeholder: 'you@example.com' } }
}
```

### IconInput

Primary use: input with an absolutely positioned icon.

Common props:

- `Input.placeholder`
- `Icon.name` (trailing icon)

Example:

```js
IconInput: {
  Input: { placeholder: 'Search…' },
  Icon: { name: 'search' }
}
```

### FixedNumberField

Primary use: single 4-digit code cell (e.g. OTP, PIN).

Common props:

- `Input.maxlength` (default: `4`)
- `Input.letterSpacing`

Example:

```js
FixedNumberField: { Input: { placeholder: '0000' } }
```

### CardNumberField

Primary use: full credit card number entry split into four groups.

Common props:

- `children` (array of 4 `FixedNumberField` objects)

Example:

```js
CardNumberField: { children: [{}, {}, {}, {}] }
```

### Group / GroupField

Primary use: form section grouping related fields under a title.

Common props:

- `Title.text`
- `flow: 'y'`, `gap`
- `minWidth`

Example:

```js
Group: {
  Title: { text: 'Personal info' },
  flow: 'y',
  gap: 'A'
}
```

### Select / SelectPicker / SelectField

Primary use: option selection via native or styled dropdowns.

Common props:

- `Select.children` (array of `{ text, value }` option objects)
- `Icon.name` (`'chevronDown'` for SelectPicker)
- `theme` (default: `'field'` for SelectField)

Example:

```js
SelectPicker: {
  Select: {
    children: [
      { text: 'Option A', value: 'a' },
      { text: 'Option B', value: 'b' }
    ]
  }
}
```

### SelectHgroup

Primary use: select control with a heading and description beside it.

Common props:

- `H.text`, `P.text`
- `SelectPicker`

Example:

```js
SelectHgroup: {
  H: { text: 'Language' },
  P: { text: 'Choose your preferred language' },
  SelectPicker: {}
}
```

### NumberPicker

Primary use: increment/decrement control for numeric values.

Common props:

- `Value.text` (current value)
- `Minus.Icon.name` (`'minus'`)
- `Plus.Icon.name` (`'plus'`)

Example:

```js
NumberPicker: {
  Value: { text: '{{ currentValue }}' }
}
```

### Search

Primary use: search input with an icon.

Common props:

- `Input.placeholder`
- `Input.type: 'search'`
- `Icon.name` (default: `'search'`)

Example:

```js
Search: { Input: { placeholder: 'Search…' } }
```

### SearchDropdown

Primary use: filterable dropdown with a search input inside.

Common props:

- `state.data` (array of option strings or objects)
- `state.selected`, `state.searchValue`

Example:

```js
SearchDropdown: {
  state: { data: ['New York', 'Los Angeles', 'Chicago'] }
}
```

### TextareaIconButton

Primary use: multi-line text entry with an inline send/submit button.

Common props:

- `Textarea.minHeight`, `Textarea.maxHeight`, `Textarea.placeholder`
- `IconButton.Icon.name` (default: `'send'`)

Example:

```js
TextareaIconButton: {
  Textarea: { placeholder: 'Write a message…' },
  IconButton: { Icon: { name: 'send' } }
}
```

---

## Composition

Composition components pair a primary element (heading, icon, image) with text content or controls.

- `ButtonHeading` — heading + button
- `ButtonHgroup` — heading group + button
- `ButtonParagraph` — paragraph + button
- `IconHeading` — icon + heading
- `IconButtonHeading` — heading + icon button
- `IconButtonHgroup` — heading group + icon button
- `IconHgroup` — icon + heading group
- `ImgHeading` — image + heading
- `ImgHgroup` — image + heading group
- `ImgHeadingButton` — image + heading as button
- `ValueHeading` — heading + unit/value on right
- `IcontextLink` — icon + text as link
- `IconTextSet` — list of icon + text pairs
- `SectionHeader` — section header with icon buttons

### ButtonHeading

Primary use: heading row with an action button on the trailing edge.

Common props:

- `H.tag` (default: `'h6'`), `H.text`
- `Button.text`, `Button.theme`

Example:

```js
ButtonHeading: {
  H: { tag: 'h5', text: 'Team members' },
  Button: { text: 'Invite', theme: 'primary' }
}
```

### ButtonHgroup

Primary use: heading group with an action button below or beside it.

Common props:

- `H.text`, `P.text`
- `Button.text`, `Button.theme`

Example:

```js
ButtonHgroup: {
  H: { text: 'Upgrade plan' },
  P: { text: 'Get access to all features' },
  Button: { text: 'Upgrade' }
}
```

### ButtonParagraph

Primary use: paragraph with an inline text button (e.g. "Resend code").

Common props:

- `P.text`
- `Button.text`, `Button.theme` (default: `'transparent'`)

Example:

```js
ButtonParagraph: {
  P: { text: "Didn't receive the code?" },
  Button: { text: 'Resend' }
}
```

### IconHeading

Primary use: icon above or beside a heading.

Common props:

- `Icon.name`, `Icon.fontSize`
- `H.tag` (default: `'h5'`), `H.text`

Example:

```js
IconHeading: {
  Icon: { name: 'star', fontSize: 'C' },
  H: { tag: 'h5', text: 'Featured' }
}
```

### IconButtonHeading

Primary use: heading with an icon button on the trailing edge.

Common props:

- `H.tag` (default: `'h5'`), `H.text`
- `IconButton.Icon.name`

Example:

```js
IconButtonHeading: {
  H: { tag: 'h5', text: 'Settings' },
  IconButton: { Icon: { name: 'edit' } }
}
```

### IconButtonHgroup

Primary use: heading group with a trailing icon button.

Common props:

- `H.text`, `P.text`
- `IconButton.Icon.name`

Example:

```js
IconButtonHgroup: {
  H: { text: 'Notifications' },
  P: { text: 'Manage your notification preferences' },
  IconButton: { Icon: { name: 'settings' } }
}
```

### IconHgroup

Primary use: large icon with a heading group beside it.

Common props:

- `Icon.name`, `Icon.display: 'block'`
- `H.text`, `P.text`

Example:

```js
IconHgroup: {
  Icon: { name: 'logo', display: 'block' },
  H: { text: 'Symbols' },
  P: { text: 'Design system toolkit' }
}
```

### ImgHeading

Primary use: image followed by a heading.

Common props:

- `Img.src`, `Img.maxWidth`, `Img.maxHeight`
- `H.tag` (default: `'h4'`), `H.text`

Example:

```js
ImgHeading: {
  Img: { src: '/logo.png', maxWidth: 'C' },
  H: { tag: 'h4', text: 'Our product' }
}
```

### ImgHgroup

Primary use: image alongside a heading group.

Common props:

- `Img.src`, `Img.boxSize`
- `H.text`, `P.text`

Example:

```js
ImgHgroup: {
  Img: { src: '/icon.png', boxSize: 'C' },
  H: { text: 'Product name' },
  P: { text: 'A short tagline' }
}
```

### ValueHeading

Primary use: heading with a unit/value on the right (e.g. price, stat, time).

Common props:

- `H.tag` (default: `'h6'`), `H.text`
- `UnitValue.Value.text`, `UnitValue.Unit.text`

Example:

```js
ValueHeading: {
  H: { tag: 'h6', text: 'Revenue' },
  UnitValue: { Unit: { text: '$' }, Value: { text: '1,200' } }
}
```

### IcontextLink

Primary use: icon + text as a clickable link.

Common props:

- `Icon.name`, `Icon.fontSize`
- `text`
- `href`

Example:

```js
IcontextLink: {
  Icon: { name: 'twitter', fontSize: 'B' },
  text: 'Follow on Twitter'
}
```

### IconTextSet

Primary use: list of icon + text contact info or feature rows.

Common props:

- `children` (each with `Icon.name` and `text`)

Example:

```js
IconTextSet: {
  children: [
    { Icon: { name: 'phone' }, text: '+1 (555) 123-4567' },
    { Icon: { name: 'mail' }, text: 'hello@example.com' }
  ]
}
```

### SectionHeader

Primary use: section header with a title and icon buttons for actions.

Common props:

- `Hgroup.H.text`, `Hgroup.P.text`
- `IconButtonSet` (action buttons)

Example:

```js
SectionHeader: {
  Hgroup: { H: { text: 'Recent activity' } },
  IconButtonSet: {
    children: [{ Icon: { name: 'filter' } }]
  }
}
```

---

## Selection

Selection components come in three flavors — **Check**, **Radio**, **Toggle** — each available in caption, heading group, and list variants.

- `CheckCaption` — checkbox + caption
- `CheckCaptionList` — list of `CheckCaption`
- `CheckHgroup` — checkbox + heading group
- `CheckHgroupList` — list of `CheckHgroup`
- `CheckStep` — step with checkmark and progress
- `CheckStepSet` — list of `CheckStep`
- `RadioMark` — custom visual radio circle
- `RadioCaption` — radio + caption
- `RadioCaptionList` — list of `RadioCaption`
- `RadioHgroup` — radio + heading group
- `RadioHgroupList` — list of `RadioHgroup`
- `RadioStep` — radio step with progress
- `RadioSteps` — list of `RadioStep`
- `ToggleCaption` — toggle switch + caption
- `ToggleCaptionList` — list of `ToggleCaption`
- `ToggleHgroup` — toggle switch + heading group
- `ToggleHgroupList` — list of `ToggleHgroup`

### CheckCaption / RadioCaption / ToggleCaption

Primary use: single selectable item with a short label.

Common props:

- `Caption.text`

Example:

```js
CheckCaption: { Caption: { text: 'Accept terms' } }
RadioCaption: { Caption: { text: 'Option A' } }
ToggleCaption: { Caption: { text: 'Enable notifications' } }
```

### CheckCaptionList / RadioCaptionList / ToggleCaptionList

Primary use: vertically stacked list of caption-labeled inputs.

Common props:

- `children` (array of caption objects)

Example:

```js
CheckCaptionList: {
  children: [
    { Caption: { text: 'Option 1' } },
    { Caption: { text: 'Option 2' } }
  ]
}
```

### CheckHgroup / RadioHgroup / ToggleHgroup

Primary use: selectable item with a title and description.

Common props:

- `H.tag` (default: `'h6'`), `H.text`
- `P.text`

Example:

```js
CheckHgroup: {
  H: { text: 'Weekly digest' },
  P: { text: 'Receive a summary every Monday' }
}
```

### CheckHgroupList / RadioHgroupList / ToggleHgroupList

Primary use: vertically stacked list of heading-group inputs.

Common props:

- `children` (array of hgroup objects)

Example:

```js
ToggleHgroupList: {
  children: [
    { H: { text: 'Email alerts' }, P: { text: 'Sent daily' } },
    { H: { text: 'Push notifications' }, P: { text: 'Instant' } }
  ]
}
```

### CheckStep / RadioStep

Primary use: single step in a stepper flow, showing completion state.

Common props:

- `H6.text` (step label)
- `Progress.value` (0 = incomplete, 1 = complete)
- `Icon.name` (`'check'` for CheckStep)
- `RadioMark.theme` (`'field'` or `'primary'`)

Example:

```js
CheckStep: {
  H6: { text: 'Verify email' },
  Progress: { value: 1 }
}
```

### CheckStepSet / RadioSteps

Primary use: a full stepper with multiple labeled steps.

Common props:

- `children` (array of step objects)

Example:

```js
RadioSteps: {
  children: [
    { H6: { text: 'Account info' }, RadioMark: { isActive: true } },
    { H6: { text: 'Payment' } },
    { H6: { text: 'Confirm' } }
  ]
}
```

### RadioMark

Primary use: standalone custom radio circle visual.

Common props:

- `theme` (default: `'primary'`)
- `padding`, `round`

Example:

```js
RadioMark: { theme: 'primary' }
```

---

## Progress & Status

- `Progress` — linear progress bar
- `CircleProgress` — circular progress indicator
- `ValueProgress` — progress bar + unit/value
- `ValueCircleProgress` — circular progress + centered value
- `ProgressStepSet` — multiple progress bars for steps
- `HgroupSteps` — heading group with step progress bars
- `StatusDot` — small colored status dot
- `Stars` — 5-star rating

### Progress

Primary use: linear progress bar showing task or load completion.

Common props:

- `value` (0–1)
- `height`, `minWidth`, `round`
- `theme`

Example:

```js
Progress: { value: 0.6, height: 'X', round: 'Y' }
```

### CircleProgress

Primary use: circular progress ring.

Common props:

- `value` (0–1)
- `round: '100%'`
- `boxSize`

Example:

```js
CircleProgress: { value: 0.73, boxSize: 'D' }
```

### ValueProgress

Primary use: progress bar with a readable label showing the current value.

Common props:

- `Progress.value`
- `UnitValue.Value.text`, `UnitValue.Unit.text`

Example:

```js
ValueProgress: {
  Progress: { value: 0.73 },
  UnitValue: { Value: { text: '73' }, Unit: { text: '%' } }
}
```

### ValueCircleProgress

Primary use: circular progress with value displayed in the center.

Common props:

- `CircleProgress.value`
- `UnitValue.Value.text`, `UnitValue.Unit.text`

Example:

```js
ValueCircleProgress: {
  CircleProgress: { value: 0.5 },
  UnitValue: { Value: { text: '50' }, Unit: { text: '%' } }
}
```

### ProgressStepSet

Primary use: row of progress bars visualizing multi-step completion.

Common props:

- `children` (array of `{ value }`)

Example:

```js
ProgressStepSet: {
  children: [{ value: 1 }, { value: 0.4 }, { value: 0 }]
}
```

### HgroupSteps

Primary use: heading group above a step progress bar set.

Common props:

- `H.text`, `P.text`
- `ProgressStepSet.children`

Example:

```js
HgroupSteps: {
  H: { text: 'Getting started' },
  P: { text: 'Complete these steps' },
  ProgressStepSet: {
    children: [{ value: 1 }, { value: 0.5 }, { value: 0 }]
  }
}
```

### StatusDot

Primary use: small indicator dot for online/offline or state.

Common props:

- `theme` (default: `'success'`)
- `widthRange`, `round: '100%'`

Example:

```js
StatusDot: { theme: 'success' }
```

### Stars

Primary use: read-only 5-star rating display.

Common props:

- `children` (5 `Icon` objects with `name: 'star'`)

Example:

```js
Stars: {
  children: [
    { name: 'star' },
    { name: 'star' },
    { name: 'star' },
    { name: 'star' },
    { name: 'star' }
  ]
}
```

---

## Navigation & Links

- `Link` — hyperlink
- `LinkSet` — navigation list of links
- `LinkHgroup` — heading group + link
- `LinkParagraph` — paragraph + inline link
- `IcontextLink` — icon + text link (see [Composition](#composition))
- `Breadcrumb` — breadcrumb path
- `NavigationDots` — dot-based carousel indicator
- `NavigationArrows` — previous/next arrow buttons
- `Pagination` — numbered page controls
- `TabSet` — tab bar navigation
- `ScrollableList` — scrollable menu list

### Link

Primary use: plain hyperlink.

Common props:

- `text`
- `href`, `target`, `rel`
- `color`, `textDecoration`

Example:

```js
Link: { text: 'Read more', href: '/article' }
```

### LinkSet

Primary use: nav menu of links.

Common props:

- `tag: 'nav'`
- `childExtend: 'Link'`
- `children` (array of link objects)

Example:

```js
LinkSet: {
  tag: 'nav',
  children: [
    { text: 'Home', href: '/' },
    { text: 'Docs', href: '/docs' }
  ]
}
```

### LinkHgroup

Primary use: heading group with a descriptive link below.

Common props:

- `H.text`, `P.text`
- `Link.text`, `Link.href`

Example:

```js
LinkHgroup: {
  H: { text: 'Tbilisi' },
  P: { text: 'Georgia' },
  Link: { text: 'Get directions', href: '#' }
}
```

### LinkParagraph

Primary use: paragraph with an inline clickable link.

Common props:

- `P.text`
- `Link.text`, `Link.href`, `Link.textDecoration`

Example:

```js
LinkParagraph: {
  P: { text: 'By continuing you agree to our' },
  Link: { text: 'Privacy Policy', href: '/privacy', textDecoration: 'underline' }
}
```

### Breadcrumb

Primary use: path navigation for hierarchical pages.

Common props:

- `tag: 'nav'`
- `childExtend: 'Link'`
- children are typically derived from route state

Example:

```js
Breadcrumb: { tag: 'nav' }
```

### NavigationDots

Primary use: dot indicators for carousels or sliders.

Common props:

- `children` (each dot object, active one has `isActive: true`)

Example:

```js
NavigationDots: {
  children: [{}, { isActive: true }, {}]
}
```

### NavigationArrows

Primary use: left/right arrow buttons for carousels.

Common props:

- `childExtend: 'IconButton'`
- `children` (chevron left/right icons)

Example:

```js
NavigationArrows: {
  children: [
    { Icon: { name: 'chevronLeft' } },
    { Icon: { name: 'chevronRight' } }
  ]
}
```

### Pagination

Primary use: numbered page navigation.

Common props:

- `Left.Icon.name`, `Right.Icon.name`
- `Flex.children` (numbered buttons, active one has `isActive: true`)

Example:

```js
Pagination: {
  Flex: {
    children: [{ text: '1', isActive: true }, { text: '2' }, { text: '3' }]
  }
}
```

### TabSet

Primary use: horizontal tab bar.

Common props:

- `childExtend: 'Button'`
- `children` (tab label objects, active one has `isActive: true`)

Example:

```js
TabSet: {
  children: [
    { text: 'Overview', isActive: true },
    { text: 'Details' },
    { text: 'Reviews' }
  ]
}
```

### ScrollableList

Primary use: vertically scrollable menu or option list.

Common props:

- `tag: 'nav'`
- `Flex.maxHeight`
- `Flex.children` (list of button items)

Example:

```js
ScrollableList: {
  Flex: {
    maxHeight: 'D2',
    children: [
      { text: 'Item One' },
      { text: 'Item Two' }
    ]
  }
}
```

---

## Overlay & Disclosure

- `Modal` — modal dialog container
- `MessageModal` — modal with a message heading and body
- `Accordion` — expandable/collapsible section

### Modal

Primary use: dialog overlay container.

Common props:

- `Hgroup.H.text` (title), `Hgroup.P.text` (subtitle)
- `IconButton.Icon.name` (`'x'` for close button)
- `theme: 'dialog'`

Example:

```js
Modal: {
  Hgroup: { H: { text: 'Confirm action' } },
  IconButton: { Icon: { name: 'x' } }
}
```

### MessageModal

Primary use: simple informational modal with a title and body text.

Common props:

- `Hgroup.H.text`
- `Hgroup.P.text` (message body)

Example:

```js
MessageModal: {
  Hgroup: {
    H: { text: 'Account deleted' },
    P: { text: 'Your account has been permanently removed.' }
  }
}
```

### Accordion

Primary use: expandable section that toggles body content visibility.

Common props:

- `ButtonParagraph.P.text` (header label)
- `P.text` (body content, shown when expanded)
- `state.activeAccordion` (boolean)

Example:

```js
Accordion: {
  ButtonParagraph: { P: { text: 'How does billing work?' } },
  P: { text: 'You are billed monthly…' }
}
```

---

## Data display

- `UnitValue` — unit + value pair (price, stat, etc.)
- `ValueHeading` — heading with trailing unit/value (see [Composition](#composition))
- `BulletCaption` — caption with colored bullet dot
- `StoryCard` — large image card with overlaid content
- `ListingItem` — post/listing row item
- `PackageFeatureItem` — feature row in a pricing card
- `UserNavbar` — user profile row in navbar
- `LayerSimple` — card with title and checklist
- `LoadingGif` — animated loading indicator

### UnitValue

Primary use: display a numeric value with its unit (price, percentage, stat).

Common props:

- `Unit.text` (e.g. `'$'`, `'%'`, `'km'`)
- `Value.text`
- `flow` (`'row'` or `'row-reverse'`)

Example:

```js
UnitValue: {
  Unit: { text: '$' },
  Value: { text: '99' }
}
```

### BulletCaption

Primary use: caption with a colored dot, used for legends and labels.

Common props:

- `text`
- `:before.background` (dot color)

Example:

```js
BulletCaption: {
  text: 'Orders',
  ':before': { background: 'blue' }
}
```

### StoryCard

Primary use: full-bleed image card with an overlaid title and step progress.

Common props:

- `Img.src`, `Img.boxSize`
- `Icon.icon`
- `HgroupSteps` (overlay content)

Example:

```js
StoryCard: {
  Img: { src: '/story.jpg', boxSize: '100%' },
  HgroupSteps: {
    H: { text: 'Chapter 1' }
  }
}
```

### ListingItem

Primary use: upvotable post or listing row.

Common props:

- `IconText.Icon.name` (vote icon)
- `H.text` (title)
- `P.text` (metadata)

Example:

```js
ListingItem: {
  H: { text: 'Flexbox in the editor' },
  P: { text: '42 comments · 3 hours ago' }
}
```

### PackageFeatureItem

Primary use: single checkbox row inside a pricing/package card.

Common props:

- `Input.type: 'checkbox'`
- `Icon.name` (feature icon)
- `H.text`, `P.text`

Example:

```js
PackageFeatureItem: {
  Icon: { name: 'check' },
  H: { text: 'Unlimited exports' }
}
```

### UserNavbar

Primary use: user identity row in a sidebar or top navbar.

Common props:

- `AvatarStatus` (avatar with status dot)
- `H.text` (user name)
- `P.text` (role or status)
- `IconButtonSet` (action buttons)

Example:

```js
UserNavbar: {
  H: { text: 'Nika Tomadze' },
  P: { text: 'Product Designer' }
}
```

### LayerSimple

Primary use: card with a title and a bulleted checklist.

Common props:

- `Title.text`
- `Flex.children` (each with `Icon.icon` and `Span.text`)

Example:

```js
LayerSimple: {
  Title: { text: 'Today' },
  Flex: {
    children: [
      { Icon: { icon: 'check' }, Span: { text: 'Morning standup' } }
    ]
  }
}
```

### LoadingGif

Primary use: animated loading spinner.

Common props:

- `src` (default: Symbols loading asset)
- `opacity`, `boxSize`

Example:

```js
LoadingGif: { opacity: '.5', boxSize: 'B' }
```

---

## Misc

- `Scrollbar` — custom scrollbar track with navigation
- `NotificationCounter` (see [Badge & Notification](#badge--notification))

### Scrollbar

Primary use: custom scrollbar track with optional arrow navigation.

Common props:

- `TrackContainer.Track` (scroll thumb)
- `NavigationArrows`

Example:

```js
Scrollbar: { NavigationArrows: {} }
```

---

## Cross-cutting props

All default components inherit the same cross-cutting capabilities as built-in atoms:

- `@media` keys (e.g. `@mobile`)
- pseudo selectors (e.g. `:hover`, `:focus`)
- conditional cases (e.g. `.isActive`, `!isDisabled`)
- `childProps` for one-level child overrides
- `children` arrays or nested object trees
- `onInit`, `onRender`, `onUpdate`, `onStateUpdate`
- `state` for local component state

---

## Supplemental

Conventions are merged into [CLAUDE.md](CLAUDE.md). Built-in atoms are documented in [BUILT_IN_COMPONENTS.md](BUILT_IN_COMPONENTS.md).
