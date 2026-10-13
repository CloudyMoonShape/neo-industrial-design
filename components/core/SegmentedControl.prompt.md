Segmented control — a hairline-framed row of mono toggles; the pressed segment fills with signal orange.

```jsx
<SegmentedControl options={[{value:"field",label:"Field"},{value:"fab",label:"Fabrication"}]} value={atmos} onChange={setAtmos} />
<SegmentedControl multiple options={["Grid","Signal","Anno"]} value={flags} onChange={setFlags} />
```

Use for atmosphere/mode switches in the command header; 2–4 options, one-word labels.
