GridField — the visible 48px grid behind heroes, HUDs and map overlays. The grid is a style element, not a construction aid.

```jsx
<GridField style={{minHeight:480}}><Corners/>…hero content…</GridField>
<GridField major="48px" minor="24px" opacity={gridOn ? 1 : 0}>…</GridField>
```
