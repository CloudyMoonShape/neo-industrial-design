CommandHeader — the sticky top bar: brand code, a mono status report (DATE / CLOCK / SECTOR / STATUS) and right-aligned controls, plus an optional numbered index nav.

```jsx
<CommandHeader code="SPEC/NI-04" sub="Field Manual"
  meta={[{key:"Date",value:"WED 02 SEP 26"},{key:"Clock",value:"17:03:08 Z"},{key:"Status",value:"Field testing"}]}
  actions={<Button variant="ghost" size="sm">Export HTML</Button>}
  nav={[{href:"#tokens",label:"01 Tokens"},{href:"#materials",label:"02 Materials"}]} />
```

Meta values are live where possible (UTC clock, date) — the header reads like a running document, not a menu.
