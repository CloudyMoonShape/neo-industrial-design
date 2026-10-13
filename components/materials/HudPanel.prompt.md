HudPanel — the Field/Defense HUD: black, 48px grid, one oversized title, mono telemetry in the corners, optional NVG beam.

```jsx
<HudPanel title="Survey-OS" topLeft="Survey-OS / Grid 18" topRight={<Stamp>Online</Stamp>}
  bottomLeft={<>Bearing 041.2<br/>Range 1.04 km<br/><span style={{color:"var(--signal-active)"}}>Link stable</span></>}
  bottomRight={<>Unit G-01<br/>17:03:08 Z</>}>
  <img src="map.svg" alt="" />
</HudPanel>
```

Always dark regardless of atmosphere. One micrographic family + type only.
