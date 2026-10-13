StatusList — system rows with a square state dot; the operational list pattern (units, lines, sensors).

```jsx
<StatusList rows={[{id:"G-01",name:"Survey unit",state:"online"},{id:"G-04",name:"Thermal",state:"degraded"},{id:"G-05",name:"Remote",state:"offline"}]} />
```

States: online/active (green) · standby (fog) · degraded/warning (amber) · alert (red) · offline (hollow, muted row).
