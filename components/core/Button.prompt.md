Command button — mono uppercase label, 44px, zero radius; use `solid` for the single primary action on a view and `ghost` for everything else.

```jsx
<Button>Engage design ops</Button>
<Button variant="ghost">Field report</Button>
<Button variant="ink" size="sm">System online</Button>
```

- `variant`: solid | ghost | ink | warn | offline (dashed, for unavailable systems)
- `selected` adds an inset 1px ring — use in toggles/segments, not for focus.
- Labels are operational verbs or states ("Engage", "Export HTML", "Status: Standby"), never marketing copy.
