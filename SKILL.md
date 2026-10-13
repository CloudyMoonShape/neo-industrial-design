---
name: neo-industrial-design
description: Use this skill to generate well-branded interfaces and assets for the Neo Industrial (SPEC/NI-04) design language, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Start with `DESIGN.md` (design language, content rules, visual foundations, component index). Open other files only as the task needs them:

- Any build: `tokens/*.css` (colors, typography, spacing, motion) and `styles.css`.
- Visual artifacts (slides, mocks, throwaway prototypes): `ui_kits/field-manual/` as the reference page and `assets/` for the mark; copy what you use and produce static HTML files for the user to view.
- Production code: the `components/<group>/<Name>.prompt.md` for each component you touch, plus the `guidelines/*.html` page for the rule you are applying; `_adherence.oxlintrc.json` if the project lints for adherence.

If the user invokes this skill with no brief at all, ask what they want to build and whether the output is HTML artifacts or production code, then act as an expert designer in this brand.

Non-negotiables: one accent color per surface, zero radius, no shadows, no gradients, no emoji, uppercase mono labels in KEY: VALUE form, at least one status stamp per page, mechanical motion only (80/140/220ms, no spring).
