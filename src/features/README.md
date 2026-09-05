# KÓRADEON GROUP — Feature Architecture

This directory hosts **feature-scoped modules**. Each feature is a self-contained
slice of business capability that owns its components, hooks, constants and
types, and is isolated from sibling features.

## Feature convention

```
features/
  <feature-name>/
    components.tsx        # Feature-only presentational components
    hooks.ts              # Feature-only hooks
    constants.ts          # Feature data & configuration
    types.ts              # Feature-specific TypeScript types
    index.ts              # Public API of the feature
```

## Current feature map

| Feature        | Status  | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| `businesses`   | Active  | The four KÓRADEON pillars (Kavora, Ozura, Rumara, Arcovia) |
| `newsroom`     | Active  | Editorial & corporate communications               |
| `innovation`   | Active  | Technology focus areas and research previews       |
| `careers`      | Active  | Recruitment, graduate programme and culture        |
| `investors`    | Active  | Investor resources and governance                  |

Shared, cross-cutting UI (buttons, cards, navigation, search, motion helpers)
must **not** live here — they belong in `src/components` and `src/hooks` so they
remain reusable across every feature.

## Expansion policy

New subsidiaries, portals or product lines are added as **new feature folders**
without touching existing features. The parent site (`src/app`) simply mounts
feature entry points, keeping the architecture scalable as KÓRADEON GROUP grows
from four businesses to dozens.