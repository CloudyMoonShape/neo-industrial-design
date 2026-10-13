/* @ds-bundle: {"format":4,"namespace":"NeoIndustrialDesignSystem_fae892","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"KeyValue","sourcePath":"components/core/KeyValue.jsx"},{"name":"Meter","sourcePath":"components/core/Meter.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"StatusList","sourcePath":"components/core/StatusList.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"HudPanel","sourcePath":"components/materials/HudPanel.jsx"},{"name":"Lockup","sourcePath":"components/materials/Lockup.jsx"},{"name":"Mark","sourcePath":"components/materials/Mark.jsx"},{"name":"PackPanel","sourcePath":"components/materials/PackPanel.jsx"},{"name":"SpecSheet","sourcePath":"components/materials/SpecSheet.jsx"},{"name":"Micrographic","sourcePath":"components/micrographics/Micrographic.jsx"},{"name":"CommandHeader","sourcePath":"components/structure/CommandHeader.jsx"},{"name":"CoordBlock","sourcePath":"components/structure/CoordBlock.jsx"},{"name":"Corners","sourcePath":"components/structure/Corners.jsx"},{"name":"GridField","sourcePath":"components/structure/GridField.jsx"},{"name":"Heading","sourcePath":"components/structure/Heading.jsx"},{"name":"Label","sourcePath":"components/structure/Label.jsx"},{"name":"Plate","sourcePath":"components/structure/Plate.jsx"},{"name":"SectionHead","sourcePath":"components/structure/SectionHead.jsx"},{"name":"UnitId","sourcePath":"components/structure/UnitId.jsx"}],"sourceHashes":{"components/core/Button.jsx":"f5f2835b5f24","components/core/KeyValue.jsx":"73121a3590f3","components/core/Meter.jsx":"8bcdf8714150","components/core/SegmentedControl.jsx":"d04c311edf53","components/core/Stamp.jsx":"f80f8ae245b3","components/core/StatusList.jsx":"4627750e6085","components/core/Toast.jsx":"3507e3aa702c","components/materials/HudPanel.jsx":"ec1ac128ff08","components/materials/Lockup.jsx":"696e9f925ead","components/materials/Mark.jsx":"df93e143f4aa","components/materials/PackPanel.jsx":"cd8e22505029","components/materials/SpecSheet.jsx":"8d5533169371","components/micrographics/Micrographic.jsx":"2c765dfd5ac4","components/structure/CommandHeader.jsx":"b02375fe7987","components/structure/CoordBlock.jsx":"42f5cc26b14f","components/structure/Corners.jsx":"742091d7e55f","components/structure/GridField.jsx":"2c055a23e8f1","components/structure/Heading.jsx":"7b769f7566ce","components/structure/Label.jsx":"d58a3cc49922","components/structure/Plate.jsx":"3702f25f5161","components/structure/SectionHead.jsx":"2e42e87829f4","components/structure/UnitId.jsx":"e1467b3f6f16","ui_kits/field-manual/Hero.jsx":"cdc681363b17","ui_kits/field-manual/MaterialsSection.jsx":"99162476e4a2","ui_kits/field-manual/StatesSection.jsx":"37f7178775cf","ui_kits/field-manual/TokensSection.jsx":"6fd9e0efeab0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NeoIndustrialDesignSystem_fae892 = window.NeoIndustrialDesignSystem_fae892 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  solid: {
    background: "var(--signal-primary)",
    color: "var(--signal-primary-fg)",
    borderColor: "var(--signal-primary)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    borderColor: "var(--border-strong)"
  },
  ink: {
    background: "var(--text-primary)",
    color: "var(--surface-primary)",
    borderColor: "var(--text-primary)"
  },
  warn: {
    background: "transparent",
    color: "var(--signal-warn)",
    borderColor: "var(--signal-warn)"
  },
  offline: {
    background: "transparent",
    color: "var(--text-muted)",
    borderColor: "var(--border-default)",
    borderStyle: "dashed"
  }
};
/** Command button. Mono uppercase label, hard edge, 44px hit target. Hover: brightness / border lifts. Press: scale 0.98 over 80ms. */
function Button({
  variant = "solid",
  size = "md",
  selected = false,
  disabled = false,
  block = false,
  leading,
  trailing,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const tone = TONES[variant] || TONES.solid;
  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minHeight: size === "sm" ? "var(--control-height-sm)" : "var(--control-height)",
    padding: size === "sm" ? "0 12px" : "0 var(--control-pad-x)",
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    letterSpacing: "var(--track-stamp)",
    textTransform: "uppercase",
    fontVariantNumeric: "tabular-nums",
    fontSize: "var(--text-stamp)",
    lineHeight: 1,
    border: "var(--hairline) solid",
    borderRadius: "var(--radius)",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    whiteSpace: "nowrap",
    transition: "filter var(--motion-base) var(--ease-mechanical), transform var(--motion-fast) var(--ease-mechanical), border-color var(--motion-base) var(--ease-mechanical)",
    ...tone
  };
  if (selected) base.boxShadow = "inset 0 0 0 1px var(--text-primary)";
  if (hover && !disabled) {
    if (variant === "solid") base.filter = "brightness(1.08)";else if (variant === "ghost") base.borderColor = "var(--text-primary)";else if (variant === "offline") base.color = "var(--text-secondary)";
  }
  if (down && !disabled) base.transform = "scale(var(--press-scale))";
  if (disabled) base.opacity = "var(--disabled-opacity)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  }, rest), leading, children, trailing);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/KeyValue.jsx
try { (() => {
/** Hairline-celled definition grid: micro mono key over 12px mono value. */
function KeyValue({
  items = [],
  columns = 2,
  style
}) {
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      margin: 0,
      border: "var(--hairline) solid var(--border-default)",
      borderRight: 0,
      borderBottom: 0,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "10px 12px",
      borderRight: "var(--hairline) solid var(--border-default)",
      borderBottom: "var(--hairline) solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: 400,
      fontSize: "var(--text-micro)",
      color: "var(--text-muted)"
    }
  }, it.key), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: "2px 0 0",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-caption)",
      letterSpacing: "0.06em",
      fontVariantNumeric: "tabular-nums",
      color: it.tone === "signal" ? "var(--signal-primary)" : "var(--text-primary)"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { KeyValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KeyValue.jsx", error: String((e && e.message) || e) }); }

// components/core/Meter.jsx
try { (() => {
const TONE = {
  signal: "var(--signal-primary)",
  warn: "var(--signal-warn)",
  active: "var(--signal-active)",
  ink: "var(--text-primary)"
};
/** Horizontal gauge: mono label + 8px track. Load / 78%. */
function Meter({
  label,
  value = 0,
  max = 100,
  tone = "signal",
  showValue = true,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontSize: "var(--text-stamp)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    style: {
      height: 8,
      background: "var(--border-default)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      display: "block",
      height: "100%",
      width: pct + "%",
      background: TONE[tone] || TONE.signal,
      transition: "width var(--motion-slow) var(--ease-mechanical)"
    }
  })));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Meter.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
/** Inline group of mono toggles in one hairline frame. Pressed segment fills with signal. */
function SegmentedControl({
  options = [],
  value,
  onChange,
  multiple = false,
  "aria-label": ariaLabel,
  style
}) {
  const isOn = v => multiple ? Array.isArray(value) && value.includes(v) : value === v;
  const toggle = v => {
    if (!onChange) return;
    if (!multiple) return onChange(v);
    const cur = Array.isArray(value) ? value : [];
    onChange(cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v]);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": ariaLabel,
    style: {
      display: "inline-flex",
      border: "var(--hairline) solid var(--border-strong)",
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const on = isOn(opt.value);
    return /*#__PURE__*/React.createElement("button", {
      key: opt.value,
      type: "button",
      "aria-pressed": on,
      onClick: () => toggle(opt.value),
      style: {
        background: on ? "var(--signal-primary)" : "transparent",
        color: on ? "var(--signal-primary-fg)" : "var(--text-secondary)",
        border: 0,
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        letterSpacing: "var(--track-stamp)",
        textTransform: "uppercase",
        fontVariantNumeric: "tabular-nums",
        fontSize: "var(--text-meta)",
        padding: "8px 10px",
        minHeight: "var(--control-height-sm)",
        transition: "background var(--motion-base) var(--ease-mechanical), color var(--motion-base) var(--ease-mechanical)"
      }
    }, opt.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/Stamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    borderColor: "var(--border-strong)"
  },
  solid: {
    background: "var(--signal-primary)",
    color: "var(--signal-primary-fg)",
    borderColor: "var(--signal-primary)"
  },
  online: {
    background: "var(--signal-active)",
    color: "var(--signal-active-fg)",
    borderColor: "var(--signal-active)"
  },
  warn: {
    background: "transparent",
    color: "var(--signal-warn)",
    borderColor: "var(--signal-warn)"
  },
  alert: {
    background: "var(--signal-alert)",
    color: "var(--signal-alert-fg)",
    borderColor: "var(--signal-alert)"
  },
  ink: {
    background: "var(--text-primary)",
    color: "var(--surface-primary)",
    borderColor: "var(--text-primary)"
  },
  offline: {
    background: "transparent",
    color: "var(--text-muted)",
    borderColor: "var(--border-strong)",
    borderStyle: "dashed",
    opacity: 0.7
  }
};
/** Status stamp: STATUS: ACTIVE / TARGET LOCKED / FIELD TESTING. Every page carries at least one. */
function Stamp({
  tone = "ghost",
  size = "md",
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.ghost;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontSize: size === "sm" ? "var(--text-meta)" : "var(--text-stamp)",
      lineHeight: 1,
      padding: size === "sm" ? "4px 8px" : "var(--stamp-pad)",
      border: "var(--hairline) solid",
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusList.jsx
try { (() => {
const DOT = {
  online: {
    background: "var(--signal-active)"
  },
  active: {
    background: "var(--signal-active)"
  },
  standby: {
    background: "var(--text-secondary)"
  },
  degraded: {
    background: "var(--signal-warn)"
  },
  warning: {
    background: "var(--signal-warn)"
  },
  alert: {
    background: "var(--signal-alert)"
  },
  offline: {
    background: "transparent",
    boxShadow: "inset 0 0 0 1px var(--text-muted)"
  }
};
/** System rows: 8px square state dot · id · name · status. Offline rows are muted. */
function StatusList({
  rows = [],
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--hairline) solid var(--border-strong)",
      ...style
    }
  }, rows.map((r, i) => {
    const off = r.state === "offline";
    return /*#__PURE__*/React.createElement("div", {
      key: r.id || i,
      "data-state": r.state,
      onClick: onSelect ? () => onSelect(r) : undefined,
      style: {
        display: "grid",
        gridTemplateColumns: "14px 1fr auto auto",
        gap: 12,
        alignItems: "center",
        padding: "12px 14px",
        minHeight: 44,
        cursor: onSelect ? "pointer" : "default",
        borderBottom: i < rows.length - 1 ? "var(--hairline) solid var(--border-default)" : 0,
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        letterSpacing: "var(--track-stamp)",
        textTransform: "uppercase",
        fontVariantNumeric: "tabular-nums",
        fontWeight: 400,
        letterSpacing: "0.1em",
        fontSize: "var(--text-stamp)",
        color: off ? "var(--text-muted)" : "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 8,
        height: 8,
        display: "block",
        ...(DOT[r.state] || {
          background: "var(--text-muted)"
        })
      }
    }), /*#__PURE__*/React.createElement("span", null, r.id), /*#__PURE__*/React.createElement("span", {
      style: {
        color: off ? "var(--text-muted)" : "var(--text-secondary)"
      }
    }, r.name), /*#__PURE__*/React.createElement("span", null, r.status ?? "Status: " + (r.state || "")));
  }));
}
Object.assign(__ds_scope, { StatusList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusList.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
/** Fixed bottom-right confirmation strip in signal orange. Auto-dismiss handled by caller. */
function Toast({
  children,
  open = true,
  tone = "signal",
  style
}) {
  if (!open) return null;
  const t = tone === "ink" ? {
    background: "var(--text-primary)",
    color: "var(--surface-primary)"
  } : tone === "alert" ? {
    background: "var(--signal-alert)",
    color: "var(--signal-alert-fg)"
  } : {
    background: "var(--signal-primary)",
    color: "var(--signal-primary-fg)"
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      position: "fixed",
      bottom: 20,
      right: 20,
      zIndex: 60,
      padding: "10px 14px",
      pointerEvents: "none",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontSize: "var(--text-stamp)",
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/materials/Mark.jsx
try { (() => {
/** System unit mark: 1.5px octagon plate with a display-weight code. Not a client logo — a nameplate. */
function Mark({
  code = "04",
  size = 72,
  color = "currentColor",
  filled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    "aria-hidden": "true",
    style: {
      display: "block",
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "22,4 50,4 68,22 68,50 50,68 22,68 4,50 4,22",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "36",
    y: "45",
    textAnchor: "middle",
    fill: filled ? "var(--surface-primary)" : "currentColor",
    fontFamily: "var(--font-display)",
    fontWeight: "800",
    fontSize: "28",
    letterSpacing: "1"
  }, code));
}
Object.assign(__ds_scope, { Mark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/materials/Mark.jsx", error: String((e && e.message) || e) }); }

// components/materials/Lockup.jsx
try { (() => {
/** Type lockup: graphic mark + wordmark + top/bottom mono metadata bars. The three parts are a locked combination. */
function Lockup({
  mark,
  word,
  sub,
  top = [],
  bottom = [],
  style
}) {
  const bar = (items, pos) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8,
      flexWrap: "wrap",
      padding: "8px 12px",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: 400,
      fontSize: "var(--text-meta)",
      [pos === "top" ? "borderBottom" : "borderTop"]: "var(--hairline) solid var(--text-primary)"
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, t)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--hairline) solid var(--text-primary)",
      background: "var(--surface-primary)",
      color: "var(--text-primary)",
      ...style
    }
  }, top.length > 0 && bar(top, "top"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "72px 1fr",
      gap: 16,
      alignItems: "center",
      padding: "20px 16px"
    }
  }, mark || /*#__PURE__*/React.createElement(__ds_scope.Mark, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(36px, 7vw, 64px)",
      lineHeight: 0.8,
      letterSpacing: "-0.02em",
      textTransform: "uppercase"
    }
  }, word), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontSize: "var(--text-stamp)",
      marginTop: 8,
      color: "var(--text-secondary)"
    }
  }, sub))), bottom.length > 0 && bar(bottom, "bottom"));
}
Object.assign(__ds_scope, { Lockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/materials/Lockup.jsx", error: String((e && e.message) || e) }); }

// components/materials/PackPanel.jsx
try { (() => {
/** Packaging panel: full-bleed signal field, dashed cut line, oversized chamfered display type, mono header and footer lines. */
function PackPanel({
  header,
  footerLeft,
  footerRight,
  children,
  minHeight = 320,
  style
}) {
  const m = {
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    letterSpacing: "var(--track-stamp)",
    textTransform: "uppercase",
    fontVariantNumeric: "tabular-nums",
    fontWeight: 400,
    fontSize: "var(--text-stamp)",
    color: "color-mix(in srgb, var(--signal-primary-fg) 70%, transparent)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--signal-primary)",
      color: "var(--signal-primary-fg)",
      minHeight,
      padding: "28px 24px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 14,
      border: "1px dashed color-mix(in srgb, var(--signal-primary-fg) 55%, transparent)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: m
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(80px, 18vw, 180px)",
      lineHeight: 0.78,
      letterSpacing: "-0.04em",
      textTransform: "uppercase"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: m
  }, footerLeft), /*#__PURE__*/React.createElement("span", {
    style: m
  }, footerRight)));
}
Object.assign(__ds_scope, { PackPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/materials/PackPanel.jsx", error: String((e && e.message) || e) }); }

// components/materials/SpecSheet.jsx
try { (() => {
/** Spec-sheet layout: narrow left rail (mark, doc lines, stamp) + main body. A specification, not a poster. */
function SpecSheet({
  mark,
  doc = [],
  stamp,
  children,
  railWidth = 180,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `${railWidth}px 1fr`,
      border: "var(--hairline) solid var(--border-strong)",
      background: "var(--surface-elevated)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      padding: "20px 16px",
      borderRight: "var(--hairline) solid var(--border-strong)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start"
    }
  }, mark === undefined ? /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    size: 56
  }) : mark, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: 400,
      fontSize: "var(--text-stamp)",
      lineHeight: "var(--leading-mono)"
    }
  }, doc.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, d))), stamp), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "grid",
      gap: 16,
      alignContent: "start"
    }
  }, children));
}
Object.assign(__ds_scope, { SpecSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/materials/SpecSheet.jsx", error: String((e && e.message) || e) }); }

// components/micrographics/Micrographic.jsx
try { (() => {
const BARCODE = [2, 1, 3, 1, 1, 4, 2, 1, 3, 2, 1, 1, 5, 1, 2, 3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 2];
/** Annotation-layer parts: index bars, scan bars, octagon, chamfer plate, scanlines, dashed cut, crosshair, density code. Decoration budget: Content 60 / System 30 / Micro 10. */
function Micrographic({
  kind = "index",
  color = "var(--text-primary)",
  accent = "var(--signal-primary)",
  width = "100%",
  height = 72,
  style
}) {
  const box = {
    width,
    height,
    ...style
  };
  switch (kind) {
    case "index":
      return /*#__PURE__*/React.createElement("div", {
        "aria-hidden": "true",
        style: {
          ...box,
          background: `repeating-linear-gradient(90deg, ${color} 0 var(--stripe-bar), transparent var(--stripe-bar) calc(var(--stripe-bar) + var(--stripe-gap)))`
        }
      });
    case "scan":
      return /*#__PURE__*/React.createElement("div", {
        "aria-hidden": "true",
        style: {
          ...box,
          background: `repeating-linear-gradient(180deg, ${color} 0 2px, transparent 2px 6px)`,
          opacity: 0.85
        }
      });
    case "scanlines":
      return /*#__PURE__*/React.createElement("div", {
        "aria-hidden": "true",
        style: {
          ...box,
          background: `repeating-linear-gradient(180deg, transparent 0 3px, color-mix(in srgb, ${color} 32%, transparent) 3px 4px)`
        }
      });
    case "octagon":
      return /*#__PURE__*/React.createElement("div", {
        "aria-hidden": "true",
        style: {
          ...box,
          background: color,
          clipPath: "polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)"
        }
      });
    case "chamfer":
      return /*#__PURE__*/React.createElement("div", {
        "aria-hidden": "true",
        style: {
          ...box,
          background: accent,
          clipPath: "polygon(var(--chamfer) 0, 100% 0, 100% calc(100% - var(--chamfer)), calc(100% - var(--chamfer)) 100%, 0 100%, 0 var(--chamfer))"
        }
      });
    case "cut":
      return /*#__PURE__*/React.createElement("div", {
        "aria-hidden": "true",
        style: {
          ...box,
          border: `1px dashed ${color}`,
          outline: `1px dashed ${color}`,
          outlineOffset: 6
        }
      });
    case "cross":
      {
        const b = p => /*#__PURE__*/React.createElement("b", {
          style: {
            position: "absolute",
            width: 10,
            height: 10,
            border: `1px solid ${color}`,
            ...p
          }
        });
        return /*#__PURE__*/React.createElement("div", {
          "aria-hidden": "true",
          style: {
            ...box,
            position: "relative"
          }
        }, /*#__PURE__*/React.createElement("i", {
          style: {
            position: "absolute",
            left: "50%",
            top: 0,
            width: 1,
            height: "100%",
            background: accent,
            transform: "translateX(-50%)"
          }
        }), /*#__PURE__*/React.createElement("i", {
          style: {
            position: "absolute",
            top: "50%",
            left: 0,
            height: 1,
            width: "100%",
            background: accent,
            transform: "translateY(-50%)"
          }
        }), b({
          top: 0,
          left: 0,
          borderRight: 0,
          borderBottom: 0
        }), b({
          top: 0,
          right: 0,
          borderLeft: 0,
          borderBottom: 0
        }), b({
          bottom: 0,
          left: 0,
          borderRight: 0,
          borderTop: 0
        }), b({
          bottom: 0,
          right: 0,
          borderLeft: 0,
          borderTop: 0
        }));
      }
    case "barcode":
      return /*#__PURE__*/React.createElement("div", {
        "aria-hidden": "true",
        style: {
          ...box,
          display: "flex",
          alignItems: "stretch"
        }
      }, BARCODE.map((w, i) => /*#__PURE__*/React.createElement("i", {
        key: i,
        style: {
          display: "block",
          background: color,
          height: "100%",
          width: w * 2,
          marginRight: i % 3 === 0 ? 3 : 1
        }
      })));
    default:
      return null;
  }
}
Object.assign(__ds_scope, { Micrographic });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/micrographics/Micrographic.jsx", error: String((e && e.message) || e) }); }

// components/structure/CommandHeader.jsx
try { (() => {
/** Sticky command header: brand code + mono meta report + actions, with an optional index nav rail beneath. */
function CommandHeader({
  code = "SPEC/NI-04",
  sub,
  meta = [],
  actions,
  nav = [],
  activeHref,
  onNavigate,
  sticky = true,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 40,
      background: "color-mix(in srgb, var(--surface-primary) 92%, transparent)",
      borderBottom: "var(--hairline) solid var(--border-strong)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(var(--content-max), calc(100% - 48px))",
      marginInline: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: "8px 16px",
      padding: "10px 0 8px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "0.04em",
      lineHeight: 1,
      textTransform: "uppercase"
    }
  }, code), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: 400,
      fontSize: "var(--text-meta)",
      color: "var(--text-secondary)"
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px 14px",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: 400,
      fontSize: "var(--text-meta)",
      color: "var(--text-secondary)"
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m.key, " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-primary)",
      fontWeight: 500
    }
  }, m.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      justifyContent: "flex-end"
    }
  }, actions)), nav.length > 0 && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Index",
    style: {
      display: "flex",
      overflowX: "auto",
      borderTop: "var(--hairline) solid var(--border-default)",
      scrollbarWidth: "none"
    }
  }, nav.map(n => /*#__PURE__*/React.createElement(NavLink, {
    key: n.href,
    item: n,
    active: activeHref === n.href,
    onNavigate: onNavigate
  })))));
}
function NavLink({
  item,
  active,
  onNavigate
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: item.href,
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate(item);
    } : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: 400,
      fontSize: "var(--text-meta)",
      textDecoration: "none",
      color: active || hover ? "var(--signal-primary)" : "var(--text-secondary)",
      padding: "10px 14px",
      whiteSpace: "nowrap",
      borderRight: "var(--hairline) solid var(--border-default)",
      transition: "color var(--motion-base) var(--ease-mechanical)"
    }
  }, item.label);
}
Object.assign(__ds_scope, { CommandHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/CommandHeader.jsx", error: String((e && e.message) || e) }); }

// components/structure/CoordBlock.jsx
try { (() => {
/** Coordinate / datum block: signal key + mono value pairs, in a row or stacked. */
function CoordBlock({
  items = [],
  direction = "row",
  align = "left",
  style
}) {
  const row = direction === "row";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: row ? `repeat(${items.length}, minmax(0, 1fr))` : "1fr",
      gap: row ? 16 : 0,
      textAlign: align,
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: 400,
      fontSize: "var(--text-stamp)",
      lineHeight: "var(--leading-mono)",
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: row ? {} : {
      display: "flex",
      gap: 8,
      justifyContent: align === "right" ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--signal-primary)",
      fontWeight: 500
    }
  }, it.key), row ? /*#__PURE__*/React.createElement("div", null, it.value) : /*#__PURE__*/React.createElement("span", null, " / ", it.value))));
}
Object.assign(__ds_scope, { CoordBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/CoordBlock.jsx", error: String((e && e.message) || e) }); }

// components/structure/Corners.jsx
try { (() => {
/** Fiducial corner brackets. Absolutely positioned inside a relative parent. */
function Corners({
  inset = 16,
  size = 18,
  color = "var(--text-primary)",
  weight = 1,
  style
}) {
  const arm = pos => /*#__PURE__*/React.createElement("i", {
    style: {
      position: "absolute",
      width: size,
      height: size,
      borderColor: color,
      borderStyle: "solid",
      borderWidth: 0,
      ...pos
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset,
      pointerEvents: "none",
      zIndex: 2,
      ...style
    }
  }, arm({
    top: 0,
    left: 0,
    borderTopWidth: weight,
    borderLeftWidth: weight
  }), arm({
    top: 0,
    right: 0,
    borderTopWidth: weight,
    borderRightWidth: weight
  }), arm({
    bottom: 0,
    left: 0,
    borderBottomWidth: weight,
    borderLeftWidth: weight
  }), arm({
    bottom: 0,
    right: 0,
    borderBottomWidth: weight,
    borderRightWidth: weight
  }));
}
Object.assign(__ds_scope, { Corners });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Corners.jsx", error: String((e && e.message) || e) }); }

// components/structure/GridField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Visible-grid backdrop. Wrap a hero, HUD or plate; children render above the grid. */
function GridField({
  major = "var(--grid-major)",
  minor,
  color = "var(--grid-line)",
  minorColor = "var(--border-default)",
  opacity = 1,
  children,
  style,
  ...rest
}) {
  const layers = [`linear-gradient(to right, ${color} 1px, transparent 1px)`, `linear-gradient(to bottom, ${color} 1px, transparent 1px)`];
  const sizes = [`${major} ${major}`, `${major} ${major}`];
  if (minor) {
    layers.push(`linear-gradient(to right, ${minorColor} 1px, transparent 1px)`, `linear-gradient(to bottom, ${minorColor} 1px, transparent 1px)`);
    sizes.push(`${minor} ${minor}`, `${minor} ${minor}`);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      isolation: "isolate",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      backgroundImage: layers.join(","),
      backgroundSize: sizes.join(","),
      opacity,
      transition: "opacity var(--motion-fast) var(--ease-mechanical)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { GridField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/GridField.jsx", error: String((e && e.message) || e) }); }

// components/structure/Heading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const L = {
  hero: {
    as: "h1",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--weight-display)",
    fontSize: "var(--text-hero)",
    lineHeight: "var(--leading-display)",
    letterSpacing: "var(--track-display)"
  },
  h1: {
    as: "h1",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--weight-display)",
    fontSize: "var(--text-h1)",
    lineHeight: "var(--leading-display)",
    letterSpacing: "var(--track-display)"
  },
  h2: {
    as: "h2",
    fontFamily: "var(--font-title)",
    fontWeight: "var(--weight-title)",
    fontSize: "var(--text-h2)",
    lineHeight: "var(--leading-title)",
    letterSpacing: "var(--track-title)"
  },
  h3: {
    as: "h3",
    fontFamily: "var(--font-title)",
    fontWeight: "var(--weight-title)",
    fontSize: "var(--text-h3)",
    lineHeight: "var(--leading-tight)",
    letterSpacing: "var(--track-h3)"
  },
  h4: {
    as: "h4",
    fontFamily: "var(--font-title)",
    fontWeight: "var(--weight-title)",
    fontSize: "var(--text-h4)",
    lineHeight: "var(--leading-tight)",
    letterSpacing: "var(--track-h3)"
  }
};
/** Display / title type. Always uppercase, never italic. Hierarchy = size + space, nothing else. */
function Heading({
  level = "h2",
  as,
  children,
  style,
  ...rest
}) {
  const {
    as: defTag,
    ...s
  } = L[level] || L.h2;
  const Tag = as || defTag;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      textTransform: "uppercase",
      textWrap: "balance",
      color: "inherit",
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Heading.jsx", error: String((e && e.message) || e) }); }

// components/materials/HudPanel.jsx
try { (() => {
/** HUD / map overlay: black field, visible grid, optional night-vision beam, oversized title, mono telemetry in the corners. */
function HudPanel({
  title,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  beam = true,
  minHeight = 320,
  children,
  style
}) {
  const tel = {
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    letterSpacing: "var(--track-stamp)",
    textTransform: "uppercase",
    fontVariantNumeric: "tabular-nums",
    fontWeight: 400,
    fontSize: "var(--text-meta)",
    letterSpacing: "0.12em",
    color: "rgba(246,245,241,.7)",
    lineHeight: 1.8
  };
  return /*#__PURE__*/React.createElement(__ds_scope.GridField, {
    color: "rgba(246,245,241,.1)",
    style: {
      background: "var(--ni-black)",
      color: "var(--ni-white)",
      border: "var(--hairline) solid var(--ni-steel)",
      overflow: "hidden",
      minHeight,
      ...style
    }
  }, beam && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at 70% 40%, rgba(156,255,106,.12), transparent 55%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 20,
      minHeight,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: tel
  }, topLeft), /*#__PURE__*/React.createElement("div", null, topRight)), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement(__ds_scope.Heading, {
    level: "h1",
    style: {
      margin: "24px 0",
      color: "var(--ni-white)"
    }
  }, title), children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: tel
  }, bottomLeft), /*#__PURE__*/React.createElement("div", {
    style: {
      ...tel,
      textAlign: "right"
    }
  }, bottomRight))));
}
Object.assign(__ds_scope, { HudPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/materials/HudPanel.jsx", error: String((e && e.message) || e) }); }

// components/structure/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  stamp: "var(--text-stamp)",
  meta: "var(--text-meta)",
  micro: "var(--text-micro)"
};
const C = {
  primary: "var(--text-primary)",
  secondary: "var(--text-secondary)",
  muted: "var(--text-muted)",
  signal: "var(--signal-primary)",
  active: "var(--signal-active)"
};
/** Mono operational label: kicker, meta line, coordinate, telemetry. Uppercase, tracked, tabular numerals. */
function Label({
  size = "stamp",
  tone = "primary",
  as: Tag = "span",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: size === "stamp" ? 500 : 400,
      fontSize: T[size] || T.stamp,
      color: C[tone] || C.primary,
      lineHeight: "var(--leading-mono)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Label.jsx", error: String((e && e.message) || e) }); }

// components/structure/Plate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bordered panel on the elevated surface with a mono label row. The system's only "card". No radius, no shadow. */
function Plate({
  label,
  meta,
  children,
  padding = "var(--plate-pad)",
  tone = "elevated",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      border: "var(--hairline) solid var(--border-strong)",
      background: tone === "flat" ? "transparent" : "var(--surface-elevated)",
      padding,
      ...style
    }
  }, rest), (label || meta) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      alignItems: "baseline",
      marginBottom: 12,
      paddingBottom: 8,
      borderBottom: "var(--hairline) solid var(--border-default)",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: 400,
      fontSize: "var(--text-meta)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, meta)), children);
}
Object.assign(__ds_scope, { Plate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Plate.jsx", error: String((e && e.message) || e) }); }

// components/structure/SectionHead.jsx
try { (() => {
/** Section opener: signal-colored mono id, title + description, right-aligned aside; dashed rule beneath. */
function SectionHead({
  id,
  title,
  description,
  aside,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "160px 1fr auto",
      gap: 16,
      alignItems: "end",
      marginBottom: 32,
      paddingBottom: 20,
      borderBottom: "var(--hairline) dashed var(--border-strong)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-stamp)",
      textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums",
      fontWeight: 400,
      fontSize: "var(--text-stamp)",
      color: "var(--signal-primary)"
    }
  }, id), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Heading, {
    level: "h2"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "var(--text-body)",
      lineHeight: "var(--leading-body-loose)",
      color: "var(--text-secondary)",
      maxWidth: "62ch"
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, aside));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/structure/UnitId.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Oversized unit identifier: G-01, NI-04. Display 800, leading 0.8, tracking +0.02em. */
function UnitId({
  children,
  size = "lg",
  align = "right",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: size === "lg" ? "var(--text-unit)" : size === "md" ? 42 : 28,
      lineHeight: 0.8,
      letterSpacing: "0.02em",
      textAlign: align,
      textTransform: "uppercase",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { UnitId });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/UnitId.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-manual/Hero.jsx
try { (() => {
const {
  GridField,
  Corners,
  Label,
  Stamp,
  Heading,
  CoordBlock,
  UnitId
} = window.NeoIndustrialDesignSystem_fae892;
function Hero({
  gridOn
}) {
  return /*#__PURE__*/React.createElement(GridField, {
    opacity: gridOn ? 1 : 0,
    style: {
      borderBottom: "var(--hairline) solid var(--border-strong)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Corners, {
    inset: 16
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: "36px 0 48px",
      minHeight: "calc(100vh - 96px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "signal"
  }, "Ref: [ Orbital-Sys-01 ] \xB7 Lab: SPEC/NI-04"), /*#__PURE__*/React.createElement(Stamp, {
    tone: "solid"
  }, "Target locked")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "secondary",
    as: "p",
    style: {
      margin: 0
    }
  }, "Design language / Neo Industrial"), /*#__PURE__*/React.createElement(Heading, {
    level: "hero",
    style: {
      margin: "12px 0 20px"
    }
  }, "Field", /*#__PURE__*/React.createElement("br", null), "Manual"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "42ch",
      fontSize: "var(--text-body)",
      lineHeight: "var(--leading-body-loose)"
    }
  }, "Swiss-grid discipline, the information density of an engineering document, and the physicality of American hard tech. Looking good is a side effect; credible and deployable is the goal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "end",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CoordBlock, {
    direction: "column",
    items: [{
      key: "Datum",
      value: "WGS 84"
    }, {
      key: "Lat",
      value: "40.7128 N"
    }, {
      key: "Lon",
      value: "74.0060 W"
    }, {
      key: "Proj",
      value: "UTM 18N"
    }]
  }), /*#__PURE__*/React.createElement(Stamp, null, "Field operation: Active"), /*#__PURE__*/React.createElement(UnitId, null, "G-01"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-manual/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-manual/MaterialsSection.jsx
try { (() => {
const {
  SectionHead,
  Heading,
  Label,
  Plate,
  Stamp,
  Button,
  Micrographic,
  Lockup,
  CoordBlock,
  HudPanel,
  SpecSheet,
  Meter,
  KeyValue,
  PackPanel,
  UnitId
} = window.NeoIndustrialDesignSystem_fae892;
const MG = [["Index bars", "--stripe", "index", "Equal-width verticals. Compression, indexing, early storage retrieval."], ["Scan bars", "horizontal", "scan", "Tracking lines, playback, terminal-output rhythm."], ["Octagon", "clip-path", "octagon", "Slot / chamfer / octagon — nameplate and hatch geometry, not rounded cards."], ["Chamfer plate", "12px cut", "chamfer", "Base plate. Packaging wordmarks and unit plates share one cut angle."], ["Scanlines", "3+1", "scanlines", "Restrained density. Not distressing, not glitch art."], ["Dashed cut", "--dash", "cut", "Packaging, partitions, unfinished states. Solid = closed system."], ["Crosshair", "fiducial", "cross", "Corner marks and aiming. Not a game-HUD skin."], ["Density code", "barcode-like", "barcode", "Unit identification. Not a scannable barcode."]];
function HudMap() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 520 220",
    width: "100%",
    height: "140",
    fill: "none",
    "aria-hidden": "true",
    style: {
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 150 L80 120 L140 140 L200 70 L280 90 L340 40 L400 80 L500 60",
    stroke: "currentColor",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 190 L110 160 L190 180 L250 130 L360 150 L480 120",
    stroke: "currentColor",
    strokeWidth: "1",
    opacity: "0.45"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "196",
    y: "66",
    width: "12",
    height: "12",
    stroke: "var(--ni-safety)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "202",
    y1: "40",
    x2: "202",
    y2: "66",
    stroke: "var(--ni-safety)"
  }));
}
function MaterialsSection({
  date,
  zulu
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "sec-micro",
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    id: "02 / MICROGRAPHICS",
    title: "Annotation set",
    description: "A parts drawer, not wallpaper. Density budget: Content 60 / System 30 / Micro 10. Hero \u2264 3 families, ordinary block 1\u20132. Annotation contrast stays below body text.",
    aside: /*#__PURE__*/React.createElement(Stamp, {
      size: "sm"
    }, "MG-01 \u2013 MG-08")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, MG.map(([name, meta, kind, note], i) => /*#__PURE__*/React.createElement(Plate, {
    key: kind,
    label: `MG-0${i + 1} ${name}`,
    meta: meta
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 140,
      display: "grid",
      placeItems: "center",
      background: "var(--surface-primary)",
      border: "var(--hairline) solid var(--border-default)",
      marginBottom: 12,
      overflow: "hidden",
      padding: kind === "scanlines" ? 0 : 16
    }
  }, /*#__PURE__*/React.createElement(Micrographic, {
    kind: kind,
    width: kind === "octagon" || kind === "cross" ? 84 : kind === "chamfer" ? 120 : kind === "barcode" ? "auto" : "80%",
    height: kind === "scanlines" ? "100%" : kind === "octagon" || kind === "cross" ? 84 : kind === "chamfer" ? 64 : 64
  })), /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "secondary",
    as: "p",
    style: {
      margin: 0,
      textTransform: "none",
      letterSpacing: "0.04em"
    }
  }, note)))))), /*#__PURE__*/React.createElement("section", {
    id: "sec-materials",
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    id: "03 / MATERIALS",
    title: "Deployable parts",
    description: "Physical specimens. Mark + wordmark + metadata bars are a locked combination. Each specimen uses one micrographic family.",
    aside: /*#__PURE__*/React.createElement(Label, {
      size: "meta",
      tone: "secondary"
    }, "Print / HUD / Carton / Kit"),
    style: {
      marginBottom: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    label: "Type lockup",
    meta: "MAT-01"
  }, /*#__PURE__*/React.createElement(Lockup, {
    word: "Orbital",
    sub: "Sys-01 \xB7 Continuous build",
    top: ["Status: Active", "U.S.A.", "Field lab"],
    bottom: ["Unit NI-04", "Rev 1.4", date]
  })), /*#__PURE__*/React.createElement(Plate, {
    label: "Status stamps",
    meta: "MAT-02"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Stamp, null, "Standby"), /*#__PURE__*/React.createElement(Stamp, {
    tone: "solid"
  }, "Active"), /*#__PURE__*/React.createElement(Stamp, {
    tone: "online"
  }, "Online"), /*#__PURE__*/React.createElement(Stamp, {
    tone: "warn"
  }, "Degraded"), /*#__PURE__*/React.createElement(Stamp, {
    tone: "alert"
  }, "Alert"), /*#__PURE__*/React.createElement(Stamp, {
    tone: "offline"
  }, "Offline")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 8,
      marginBottom: 12,
      borderBottom: "var(--hairline) solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "muted"
  }, "Unit identifiers"), /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "muted"
  }, "MAT-03")), /*#__PURE__*/React.createElement(UnitId, {
    size: "md",
    align: "left"
  }, "G-01"), /*#__PURE__*/React.createElement(Label, {
    as: "p",
    style: {
      margin: "12px 0 0",
      fontWeight: 400
    }
  }, "UNIT ID: NI-04 \xB7 SN 04-7721-AX \xB7 LOT 26A"))), /*#__PURE__*/React.createElement(Plate, {
    label: "Coordinate block",
    meta: "MAT-04"
  }, /*#__PURE__*/React.createElement(CoordBlock, {
    items: [{
      key: "Datum",
      value: "WGS 84"
    }, {
      key: "Projection",
      value: "UTM 18N"
    }, {
      key: "Alt",
      value: "12.4 M"
    }, {
      key: "Grid",
      value: "48 / 24"
    }]
  })), /*#__PURE__*/React.createElement(Plate, {
    label: "HUD / map overlay",
    meta: "MAT-05 \xB7 one family + type"
  }, /*#__PURE__*/React.createElement(HudPanel, {
    title: "Survey-OS",
    topLeft: "Survey-OS / Grid 18",
    topRight: /*#__PURE__*/React.createElement(Stamp, null, "Online"),
    bottomLeft: /*#__PURE__*/React.createElement(React.Fragment, null, "Bearing 041.2", /*#__PURE__*/React.createElement("br", null), "Range 1.04 km", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--signal-active)"
      }
    }, "Link stable")),
    bottomRight: /*#__PURE__*/React.createElement(React.Fragment, null, "Unit G-01", /*#__PURE__*/React.createElement("br", null), "Alt 12.4", /*#__PURE__*/React.createElement("br", null), zulu)
  }, /*#__PURE__*/React.createElement(HudMap, null))), /*#__PURE__*/React.createElement(Plate, {
    label: "Spec sheet",
    meta: "MAT-06 \xB7 left rail + meters"
  }, /*#__PURE__*/React.createElement(SpecSheet, {
    doc: ["Doc NI-04", "Rev 1.4", "Class: Open"],
    stamp: /*#__PURE__*/React.createElement(Stamp, {
      tone: "solid"
    }, "Active")
  }, /*#__PURE__*/React.createElement(Heading, {
    level: "h3"
  }, "Assembly record"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-secondary)"
    }
  }, "Designed for the infrastructure under the stack, not the consumer surface on top of it. A specification, not a poster."), /*#__PURE__*/React.createElement(Meter, {
    label: "Load",
    value: 78
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "Thermal",
    value: 41,
    tone: "warn"
  }), /*#__PURE__*/React.createElement(KeyValue, {
    items: [{
      key: "Mass",
      value: "12.4 kg"
    }, {
      key: "Voltage",
      value: "48 VDC"
    }, {
      key: "Duty",
      value: "Continuous"
    }, {
      key: "Env",
      value: "IP65 / −20–55°"
    }]
  }))), /*#__PURE__*/React.createElement(Plate, {
    label: "Packaging panel",
    meta: "MAT-07 \xB7 safety field + cut"
  }, /*#__PURE__*/React.createElement(PackPanel, {
    header: "Industrial packaging unit \xB7 Status: Active deployment",
    footerLeft: "SN 04-7721-AX \xB7 NET 12.4 KG",
    footerRight: "Cut / Fold / Deploy"
  }, "NI-04")), /*#__PURE__*/React.createElement(Plate, {
    label: "Command buttons",
    meta: "MAT-08"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Engage design ops"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Field report"), /*#__PURE__*/React.createElement(Button, {
    variant: "ink"
  }, "System online")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      color: "var(--text-secondary)",
      maxWidth: "62ch"
    }
  }, "Solid signal / ghost outline / ink inverse. No radius, no shadow. Press scales to 0.98 over 80ms with no spring.")))));
}
window.MaterialsSection = MaterialsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-manual/MaterialsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-manual/StatesSection.jsx
try { (() => {
const {
  SectionHead,
  Heading,
  Label,
  Button,
  StatusList,
  Stamp,
  Plate
} = window.NeoIndustrialDesignSystem_fae892;
const VOICE_OK = ["STATUS: ACTIVE DEPLOYMENT", "DATUM / WGS 84", "UNIT ID: NI-04", "TARGET LOCKED", "FIELD OPERATION: ACTIVE", "ENGAGE DESIGN OPS", "REF: [ ORBITAL-SYS-01 ]", "CONTINUOUS", "BUILT FOR FIELD USE", "FUNCTION OVER DECORATION"];
const VOICE_NO = ["reimagine", "seamless", "next-gen synergy", "unlock the future", "delightful", "bold new era"];
function List({
  items,
  kill
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      border: "var(--hairline) solid var(--border-strong)"
    }
  }, items.map((v, i) => /*#__PURE__*/React.createElement("li", {
    key: v,
    style: {
      padding: "12px 16px",
      borderBottom: i < items.length - 1 ? "var(--hairline) solid var(--border-default)" : 0,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      textDecoration: kill ? "line-through" : "none",
      color: kill ? "var(--text-muted)" : "var(--text-primary)"
    }
  }, v)));
}
function StatesSection() {
  const [locked, setLocked] = React.useState(false);
  const [wipe, setWipe] = React.useState(false);
  const toggle = () => {
    setLocked(v => !v);
    setWipe(true);
    setTimeout(() => setWipe(false), 240);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "sec-states",
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    id: "04 / STATES + MOTION",
    title: "Operational UI",
    description: "The language has to run an interface, not just a brand still. Motion only expresses state change: snap / wipe / lock. No bounce, no spring.",
    aside: /*#__PURE__*/React.createElement(Stamp, {
      size: "sm"
    }, "80 / 140 / 220 ms")
  }), /*#__PURE__*/React.createElement(Heading, {
    level: "h3",
    style: {
      marginBottom: 12
    }
  }, "Command button"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Default"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
    selected: true
  }, "Selected"), /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "Disabled"), /*#__PURE__*/React.createElement(Button, {
    variant: "warn"
  }, "Warning"), /*#__PURE__*/React.createElement(Button, {
    variant: "offline"
  }, "Offline")), /*#__PURE__*/React.createElement(Heading, {
    level: "h3",
    style: {
      marginBottom: 12
    }
  }, "System row"), /*#__PURE__*/React.createElement(StatusList, {
    style: {
      marginBottom: 32
    },
    rows: [{
      id: "G-01",
      name: "Survey unit",
      state: "online"
    }, {
      id: "G-02",
      name: "Pack line",
      state: "active"
    }, {
      id: "G-03",
      name: "Reserve",
      state: "standby"
    }, {
      id: "G-04",
      name: "Thermal",
      state: "degraded"
    }, {
      id: "G-05",
      name: "Remote",
      state: "offline"
    }]
  }), /*#__PURE__*/React.createElement(Heading, {
    level: "h3",
    style: {
      marginBottom: 12
    }
  }, "Motion"), /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "secondary",
    as: "p",
    style: {
      margin: "0 0 16px"
    }
  }, "--motion-fast 80ms \xB7 --motion-base 140ms \xB7 --motion-slow 220ms \xB7 --ease-mechanical"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: locked ? "solid" : "ghost",
    selected: locked,
    onClick: toggle,
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--text-primary)",
      transformOrigin: "left",
      transform: wipe ? "scaleX(1)" : "scaleX(0)",
      opacity: wipe ? 0.35 : 0,
      transition: wipe ? "transform var(--motion-slow) var(--ease-mechanical), opacity var(--motion-slow) var(--ease-mechanical)" : "none",
      pointerEvents: "none"
    }
  }), locked ? "Status: Active" : "Status: Standby"), /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "secondary"
  }, "Wipe + lock \xB7 no spring")))), /*#__PURE__*/React.createElement("section", {
    id: "sec-voice",
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    id: "05 / VOICE + RULES",
    title: "Operating language",
    description: "Copy is material. Write in the register of a running document, not a startup pitch.",
    aside: /*#__PURE__*/React.createElement(Stamp, {
      size: "sm"
    }, "Use / Kill")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, {
    level: "h3",
    style: {
      marginBottom: 12
    }
  }, "Use"), /*#__PURE__*/React.createElement(List, {
    items: VOICE_OK
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, {
    level: "h3",
    style: {
      marginBottom: 12
    }
  }, "Kill"), /*#__PURE__*/React.createElement(List, {
    items: VOICE_NO,
    kill: true
  }))), /*#__PURE__*/React.createElement(Plate, {
    tone: "flat",
    style: {
      marginTop: 32,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    level: "h3",
    style: {
      fontSize: 24,
      letterSpacing: "0.02em",
      lineHeight: 1.15
    }
  }, "If it cannot print on a spec plate, a carton side, or a work jacket, it is not done.")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "48px 0 64px",
      borderTop: "var(--hairline) solid var(--border-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: "h1",
    style: {
      fontSize: "clamp(28px, 6vw, 56px)",
      letterSpacing: "0.02em",
      lineHeight: 0.9
    }
  }, "Function over decoration"), /*#__PURE__*/React.createElement(Label, {
    as: "p",
    size: "stamp",
    style: {
      margin: "16px 0 0",
      fontWeight: 400
    }
  }, "SPEC/NI-04 \xB7 Built for field use \xB7 Approach: restrained / operational / grounded"))));
}
window.StatesSection = StatesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-manual/StatesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-manual/TokensSection.jsx
try { (() => {
const {
  SectionHead,
  Heading,
  Label,
  Plate,
  Stamp,
  GridField
} = window.NeoIndustrialDesignSystem_fae892;
const SWATCHES = [["--ni-black", "#0B0B0B", "Field page"], ["--ni-ink", "#101010", "panel"], ["--ni-charcoal", "#161616", "raised"], ["--ni-steel", "#2B2B2B", "structure"], ["--ni-white", "#F6F5F1", "Field text"], ["--ni-paper", "#F3EEE2", "paper"], ["--ni-cream", "#EDE6D2", "Fab page"], ["--ni-sand", "#C9B48A", "oxidized sand"], ["--ni-fog", "#B7B3A8", "secondary"], ["--ni-mute", "#7B776E", "notes"], ["--ni-safety", "#FF4C00", "the accent"], ["--ni-safety-2", "#FF7A18", "hot edge"], ["--ni-amber", "#E39B24", "metering"], ["--ni-hivis", "#F0C14B", "high-vis"], ["--ni-rust", "#B84312", "oxidized metal"], ["--ni-brown", "#2A1A12", "Fab text"], ["--ni-nvg", "#9CFF6A", "HUD accent"], ["--ni-alert", "#FF2E2E", "alert"]];
const SEMANTIC = [["--surface-primary", "page"], ["--surface-elevated", "panel"], ["--surface-secondary", "raised"], ["--text-primary", "text"], ["--text-secondary", "secondary"], ["--text-muted", "notes"], ["--border-default", "divider"], ["--signal-primary", "accent / CTA"], ["--signal-active", "online"], ["--signal-warn", "degraded"], ["--signal-alert", "alert"]];
function Swatch({
  token,
  hex,
  use,
  onCopy,
  copied
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onCopy(hex || token, token),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      width: "100%",
      textAlign: "left",
      padding: 0,
      overflow: "hidden",
      cursor: "pointer",
      color: "var(--text-primary)",
      background: "var(--surface-elevated)",
      border: "var(--hairline) solid " + (hover ? "var(--signal-primary)" : "var(--border-strong)"),
      transition: "border-color var(--motion-base) var(--ease-mechanical)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 72,
      background: hex || `var(${token})`,
      borderBottom: "var(--hairline) solid var(--border-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px 12px",
      display: "grid",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Label, {
    size: "meta"
  }, copied === token ? "Copied" : token), /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "muted",
    style: {
      letterSpacing: "0.08em",
      textTransform: "none"
    }
  }, hex ? hex + " · " : "", use)));
}
function TokensSection({
  copy,
  copied,
  gridOn
}) {
  const grid6 = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: 16,
    marginBottom: 48
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "sec-tokens",
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    id: "01 / TOKENS",
    title: "System plate",
    description: "Components consume semantic tokens only. Primitives are paint; semantic is the interface. Switching Field / Fabrication changes no component.",
    aside: /*#__PURE__*/React.createElement(Stamp, {
      size: "sm"
    }, "Base 4 \xB7 Grid 48")
  }), /*#__PURE__*/React.createElement(Heading, {
    level: "h3",
    style: {
      marginBottom: 8
    }
  }, "Primitives"), /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "secondary",
    as: "p",
    style: {
      margin: "0 0 16px"
    }
  }, "One accent + black / charcoal / paper \xB7 click to copy"), /*#__PURE__*/React.createElement("div", {
    style: grid6
  }, SWATCHES.map(([t, h, u]) => /*#__PURE__*/React.createElement(Swatch, {
    key: t,
    token: t,
    hex: h,
    use: u,
    onCopy: copy,
    copied: copied
  }))), /*#__PURE__*/React.createElement(Heading, {
    level: "h3",
    style: {
      marginBottom: 8
    }
  }, "Semantic"), /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "secondary",
    as: "p",
    style: {
      margin: "0 0 16px"
    }
  }, "Portable layer \xB7 remapped by Field / Fabrication"), /*#__PURE__*/React.createElement("div", {
    style: grid6
  }, SEMANTIC.map(([t, u]) => /*#__PURE__*/React.createElement(Swatch, {
    key: t,
    token: t,
    use: u,
    onCopy: copy,
    copied: copied
  }))), /*#__PURE__*/React.createElement(Heading, {
    level: "h3",
    style: {
      marginBottom: 8
    }
  }, "Type scale"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      color: "var(--text-secondary)"
    }
  }, "One family per job. Hierarchy by scale, space and alignment."), [["--font-display", "Barlow Condensed 800 · 64–128px · lh 0.86", /*#__PURE__*/React.createElement(Heading, {
    level: "h1",
    style: {
      fontSize: 56
    }
  }, "Field manual"), "Hero words. Uppercase. Production: Saans ExtraBold."], ["--font-title", "Barlow Condensed 700 · 28–42px", /*#__PURE__*/React.createElement(Heading, {
    level: "h2"
  }, "Operational grid"), "Section titles. No second decorative face."], ["--font-body", "IBM Plex Sans 400/500 · 14–16px", /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "62ch",
      lineHeight: 1.55
    }
  }, "Swiss-grid discipline, engineering-document density, hard-tech physicality. Looking good is a side effect."), "Body copy. Line-height 1.5. No slogans."], ["--font-mono", "IBM Plex Mono 500 · 11–12px · tracking 0.14em", /*#__PURE__*/React.createElement(Label, null, "Status: Active deployment \xB7 Unit ID: NI-04 \xB7 Datum / WGS 84"), "Status, coordinates, serials, buttons."]].map(([tok, spec, sample, note]) => /*#__PURE__*/React.createElement("div", {
    key: tok,
    style: {
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: 8,
      padding: "16px 0",
      alignItems: "end",
      borderBottom: "var(--hairline) solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    size: "meta"
  }, tok), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginTop: 4,
      color: "var(--text-secondary)"
    }
  }, spec)), /*#__PURE__*/React.createElement("div", null, sample, /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "muted",
    as: "p",
    style: {
      margin: "8px 0 0"
    }
  }, note)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    label: "Spacing",
    meta: "Base 4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "end",
      gap: 8,
      flexWrap: "wrap"
    }
  }, [4, 8, 12, 16, 24, 32, 48, 64, 96].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "grid",
      gap: 6,
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      display: "block",
      background: "var(--signal-primary)",
      width: Math.max(4, n / 2),
      height: n
    }
  }), /*#__PURE__*/React.createElement(Label, {
    size: "micro",
    tone: "muted"
  }, n))))), /*#__PURE__*/React.createElement(Plate, {
    label: "Stroke / Radius",
    meta: "Hard edge"
  }, /*#__PURE__*/React.createElement(Label, {
    as: "p",
    size: "stamp",
    style: {
      margin: 0,
      fontWeight: 400,
      lineHeight: 1.8
    }
  }, "Radius default 0 \xB7 max 2px", /*#__PURE__*/React.createElement("br", null), "Shadow: none \xB7 hairline 1px or dashed cut", /*#__PURE__*/React.createElement("br", null), "Dash: 4px 3px \u2014 carton / unfinished", /*#__PURE__*/React.createElement("br", null), "Stripe modulus: 3px bar / 2px gap"))), /*#__PURE__*/React.createElement(Plate, {
    label: "Visible grid",
    meta: "--grid-major: 48px",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(GridField, {
    color: "var(--border-strong)",
    opacity: gridOn ? 0.85 : 0.2,
    style: {
      height: 180,
      border: "var(--hairline) solid var(--border-strong)"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    size: "meta",
    tone: "secondary",
    style: {
      position: "absolute",
      right: 12,
      bottom: 10
    }
  }, "48 \xD7 48")))));
}
window.TokensSection = TokensSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-manual/TokensSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.KeyValue = __ds_scope.KeyValue;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.StatusList = __ds_scope.StatusList;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.HudPanel = __ds_scope.HudPanel;

__ds_ns.Lockup = __ds_scope.Lockup;

__ds_ns.Mark = __ds_scope.Mark;

__ds_ns.PackPanel = __ds_scope.PackPanel;

__ds_ns.SpecSheet = __ds_scope.SpecSheet;

__ds_ns.Micrographic = __ds_scope.Micrographic;

__ds_ns.CommandHeader = __ds_scope.CommandHeader;

__ds_ns.CoordBlock = __ds_scope.CoordBlock;

__ds_ns.Corners = __ds_scope.Corners;

__ds_ns.GridField = __ds_scope.GridField;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Plate = __ds_scope.Plate;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.UnitId = __ds_scope.UnitId;

})();
