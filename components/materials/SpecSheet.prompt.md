SpecSheet — left identification rail + right body with meters and key/value cells; the document layout for records, product specs and dashboards.

```jsx
<SpecSheet doc={["Doc NI-04","Rev 1.4","Class: Open"]} stamp={<Stamp tone="solid">Active</Stamp>}>
  <Heading level="h3">Assembly record</Heading>
  <Meter label="Load" value={78}/><Meter label="Thermal" value={41} tone="warn"/>
  <KeyValue items={[{key:"Mass",value:"12.4 kg"},{key:"Voltage",value:"48 VDC"}]} />
</SpecSheet>
```
