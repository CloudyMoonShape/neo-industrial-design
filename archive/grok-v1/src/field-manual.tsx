import { useCallback, useEffect, useMemo, useState } from "react";
import { NI_ROOT_CSS } from "@/lib/ni-root";

type Atmos = "field" | "fab";

const SWATCHES: { token: string; hex: string; use: string }[] = [
  { token: "--ni-black", hex: "#0B0B0B", use: "Field 底" },
  { token: "--ni-ink", hex: "#101010", use: "面板" },
  { token: "--ni-charcoal", hex: "#161616", use: "抬升面" },
  { token: "--ni-steel", hex: "#2B2B2B", use: "结构灰" },
  { token: "--ni-white", hex: "#F6F5F1", use: "Field 字" },
  { token: "--ni-paper", hex: "#F3EEE2", use: "纸面" },
  { token: "--ni-cream", hex: "#EDE6D2", use: "Fabrication 底" },
  { token: "--ni-sand", hex: "#C9B48A", use: "氧化沙" },
  { token: "--ni-fog", hex: "#B7B3A8", use: "次级" },
  { token: "--ni-mute", hex: "#7B776E", use: "注释" },
  { token: "--ni-safety", hex: "#FF4C00", use: "唯一强调" },
  { token: "--ni-safety-2", hex: "#FF7A18", use: "热边" },
  { token: "--ni-amber", hex: "#E39B24", use: "计量" },
  { token: "--ni-hivis", hex: "#F0C14B", use: "高可视" },
  { token: "--ni-rust", hex: "#B84312", use: "氧化金属" },
  { token: "--ni-brown", hex: "#2A1A12", use: "Fabrication 字" },
  { token: "--ni-nvg", hex: "#9CFF6A", use: "HUD 点缀" },
  { token: "--ni-alert", hex: "#FF2E2E", use: "告警" },
  { token: "--ni-datum", hex: "#2E62F0", use: "极少用" },
];

const TYPE_ROWS = [
  {
    token: "--font-display",
    spec: "Barlow Condensed 800 · 72–128px · lh 0.86–0.92",
    sampleClass: "ni-h1",
    sample: "FIELD MANUAL",
    note: "英雄字。全大写。生产级可换 Saans ExtraBold。",
  },
  {
    token: "--font-title",
    spec: "Barlow Condensed 700 · 28–42px",
    sampleClass: "ni-h2",
    sample: "OPERATIONAL GRID",
    note: "区块标题。层级只靠字号，不加第二装饰体。",
  },
  {
    token: "--font-body",
    spec: "IBM Plex Sans 400/500 · 14–16px",
    sampleClass: "ni-body",
    sample: "瑞士网格的纪律 + 工程文件的信息密度 + 美国硬科技的物性感。好看是副作用。",
    note: "说明文字。行高 1.5。不写创业口号。",
  },
  {
    token: "--font-mono",
    spec: "IBM Plex Mono 500 · 11–12px · tracking 0.12–0.18em",
    sampleClass: "ni-mono",
    sample: "STATUS: ACTIVE DEPLOYMENT  ·  UNIT ID: NI-04  ·  DATUM / WGS 84",
    note: "状态、坐标、序列号、按钮。所有作战标签走这里。",
  },
];

const VOICE_OK = [
  "STATUS: ACTIVE DEPLOYMENT",
  "DATUM / WGS 84",
  "UNIT ID: NI-04",
  "TARGET LOCKED",
  "FIELD OPERATION: ACTIVE",
  "ENGAGE DESIGN OPS",
  "REF: [ ORBITAL-SYS-01 ]",
  "CONTINUOUS",
  "BUILT FOR FIELD USE",
  "FUNCTION OVER DECORATION",
];

const VOICE_NO = [
  "reimagine",
  "seamless",
  "next-gen synergy",
  "unlock the future",
  "delightful",
  "bold new era",
];

const BARCODE = [2, 1, 3, 1, 1, 4, 2, 1, 3, 2, 1, 1, 5, 1, 2, 3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 2];

const SEMANTIC: { token: string; use: string }[] = [
  { token: "--surface-primary", use: "主表面" },
  { token: "--surface-elevated", use: "面板" },
  { token: "--surface-secondary", use: "抬升 / 结构" },
  { token: "--text-primary", use: "主文" },
  { token: "--text-secondary", use: "次级" },
  { token: "--text-muted", use: "注释" },
  { token: "--border-default", use: "分割" },
  { token: "--signal-primary", use: "强调 / CTA" },
  { token: "--signal-active", use: "在线" },
  { token: "--signal-warn", use: "降级" },
  { token: "--signal-alert", use: "告警" },
];

function Src({ kind }: { kind: "observed" | "derived" | "invented" }) {
  const label = kind === "observed" ? "Observed" : kind === "derived" ? "Derived" : "Invented";
  return <span className={`ni-src ${kind}`}>[{label}]</span>;
}

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

function fmtZulu(d: Date) {
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mm = String(d.getUTCMinutes()).padStart(2, "0");
  const ss = String(d.getUTCSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss} Z`;
}

function fmtDate(d: Date) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return `${days[d.getUTCDay()]} ${String(d.getUTCDate()).padStart(2, "0")} ${months[d.getUTCMonth()]} ${String(d.getUTCFullYear()).slice(2)}`;
}

function Mark({ size = 72 }: { size?: number }) {
  return (
    <svg className="ni-mark" width={size} height={size} viewBox="0 0 72 72" aria-hidden="true">
      <polygon
        points="22,4 50,4 68,22 68,50 50,68 22,68 4,50 4,22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="36"
        y="44"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Barlow Condensed, Arial Narrow, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="1"
      >
        04
      </text>
    </svg>
  );
}

function HudMap() {
  return (
    <svg
      viewBox="0 0 520 220"
      width="100%"
      height="140"
      fill="none"
      aria-hidden="true"
      style={{ opacity: 0.85 }}
    >
      <path
        d="M20 150 L80 120 L140 140 L200 70 L280 90 L340 40 L400 80 L500 60"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M30 190 L110 160 L190 180 L250 130 L360 150 L480 120"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.45"
      />
      <rect x="196" y="66" width="12" height="12" stroke="currentColor" />
      <line x1="202" y1="40" x2="202" y2="66" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function CutLetters() {
  return (
    <svg viewBox="0 0 300 168" width="100%" height="168" aria-hidden="true">
      <path d="M8 12 H52 V100 L120 12 H164 V156 H120 V68 L52 156 H8 Z" fill="currentColor" />
      <path d="M196 12 H268 L280 24 V144 L268 156 H196 L184 144 V24 Z" fill="currentColor" />
    </svg>
  );
}

export function FieldManual() {
  const now = useClock();
  const [atmos, setAtmos] = useState<Atmos>("field");
  const [gridOn, setGridOn] = useState(true);
  const [signalOn, setSignalOn] = useState(true);
  const [microOn, setMicroOn] = useState(true);
  const [gray, setGray] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    el.dataset.atmos = atmos;
    el.dataset.signal = signalOn ? "on" : "off";
    el.dataset.micro = microOn ? "on" : "off";
    el.dataset.chroma = gray ? "gray" : "color";
    return () => {
      delete el.dataset.atmos;
      delete el.dataset.signal;
      delete el.dataset.micro;
      delete el.dataset.chroma;
    };
  }, [atmos, signalOn, microOn, gray]);

  const copy = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      window.setTimeout(() => setCopied((cur) => (cur === id ? null : cur)), 1400);
    } catch {
      setCopied("FAIL");
    }
  }, []);

  const zulu = useMemo(() => (now ? fmtZulu(now) : "——:——:—— Z"), [now]);
  const date = useMemo(() => (now ? fmtDate(now) : "— — —"), [now]);

  return (
    <div
      className={`ni-page ${gridOn ? "grid-on" : ""}`}
      data-signal={signalOn ? "on" : "off"}
      data-micro={microOn ? "on" : "off"}
      data-chroma={gray ? "gray" : "color"}
    >
      <header className="ni-cmd">
        <div className="ni-wrap">
          <div className="ni-cmd-row">
            <div className="ni-brand">
              <span className="ni-brand-code">SPEC/NI-04</span>
              <span className="ni-brand-sub">Field Manual</span>
            </div>
            <div className="ni-cmd-meta">
              <span>
                DATE <b>{date}</b>
              </span>
              <span>
                CLOCK <b>{zulu}</b>
              </span>
              <span>
                SECTOR <b>AI / ROBOTICS / DEFENSE / INDUSTRY</b>
              </span>
              <span>
                STATUS <b>FIELD TESTING</b>
              </span>
            </div>
            <div className="ni-cmd-actions">
              <div className="ni-seg" role="group" aria-label="Atmosphere">
                <button
                  type="button"
                  aria-pressed={atmos === "field"}
                  onClick={() => setAtmos("field")}
                >
                  Field
                </button>
                <button type="button" aria-pressed={atmos === "fab"} onClick={() => setAtmos("fab")}>
                  Fabrication
                </button>
              </div>
              <div className="ni-seg" role="group" aria-label="Validation">
                <button type="button" aria-pressed={gridOn} onClick={() => setGridOn((v) => !v)}>
                  Grid
                </button>
                <button
                  type="button"
                  id="btn-signal"
                  aria-pressed={signalOn}
                  onClick={() => setSignalOn((v) => !v)}
                >
                  Signal
                </button>
                <button
                  type="button"
                  id="btn-micro"
                  aria-pressed={microOn}
                  onClick={() => setMicroOn((v) => !v)}
                >
                  Anno
                </button>
                <button
                  type="button"
                  id="btn-gray"
                  aria-pressed={gray}
                  onClick={() => setGray((v) => !v)}
                >
                  Gray
                </button>
              </div>
              <a className="ni-btn ghost" href="/ni-04-field-manual.html" download>
                Export HTML
              </a>
            </div>
          </div>
          <nav className="ni-nav" aria-label="Manual index">
            <a href="#sec-tokens">01 Tokens</a>
            <a href="#sec-micro">02 Micrographics</a>
            <a href="#sec-materials">03 Materials</a>
            <a href="#sec-states">04 States / Motion</a>
            <a href="#sec-voice">05 Voice</a>
            <a href="#sec-validate">06 Validation</a>
            <a href="#sec-root">07 :root</a>
          </nav>
        </div>
      </header>

      <section className="ni-hero" aria-label="Hero">
        <div className="ni-hero-grid" />
        <div className="ni-corners ni-anno" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="ni-wrap ni-hero-inner">
          <div className="ni-hero-top">
            <span className="ni-kicker">REF: [ ORBITAL-SYS-01 ]</span>
            <span className="ni-stamp ghost">Status: Field Testing</span>
          </div>
          <div>
            <p className="ni-mono" style={{ margin: 0 }}>
              Design language / Neo Industrial
            </p>
            <h1 className="ni-hero-title">
              Field
              <br />
              Manual
            </h1>
            <p className="ni-body" style={{ maxWidth: "42ch" }}>
              瑞士网格的纪律 + 工程文件的信息密度 + 美国硬科技的物性感。好看是副作用，可信和可部署才是目的。
            </p>
          </div>
          <div className="ni-hero-foot">
            <div className="ni-coord">
              <div>
                <b>DATUM</b> / WGS 84
              </div>
            </div>
            <span className="ni-mono">Unit NI-04</span>
            <div className="ni-unit-lg">G-01</div>
          </div>
        </div>
      </section>

      <main>
        <section className="ni-section" id="sec-tokens">
          <div className="ni-wrap">
            <div className="ni-sec-head">
              <span className="ni-sec-id">01 / TOKENS</span>
              <div>
                <h2 className="ni-h2">System plate</h2>
                <p className="ni-body dim" style={{ margin: "8px 0 0" }}>
                  组件只消费 semantic。Primitive 是颜料，semantic 才是接口。Field / Fabrication 换主题时不改组件。
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Src kind="derived" />
                <Src kind="invented" />
              </div>
            </div>

            <h3 className="ni-h3" style={{ marginBottom: 8 }}>
              Primitives
            </h3>
            <p className="ni-mono dim" style={{ marginBottom: 16 }}>
              [Derived] hex · [Observed] 一强调色 + 黑/炭/米
            </p>
            <div className="ni-grid-4 swatches" style={{ marginBottom: 48 }}>
              {SWATCHES.map((s) => (
                <button
                  key={s.token}
                  type="button"
                  className="ni-swatch"
                  onClick={() => copy(s.hex, s.token)}
                  aria-label={`Copy ${s.token} ${s.hex}`}
                >
                  <div className="ni-swatch-chip" style={{ background: s.hex }} />
                  <div className="ni-swatch-meta">
                    <strong>{copied === s.token ? "Copied" : s.token}</strong>
                    <em>
                      {s.hex} · {s.use}
                    </em>
                  </div>
                </button>
              ))}
            </div>

            <h3 className="ni-h3" style={{ marginBottom: 8 }}>
              Semantic
            </h3>
            <p className="ni-mono dim" style={{ marginBottom: 16 }}>
              [Invented] 可移植层 · 随 Field / Fabrication / Gray / Signal-off 重映射
            </p>
            <div className="ni-grid-4 swatches" style={{ marginBottom: 48 }}>
              {SEMANTIC.map((s) => (
                <button
                  key={s.token}
                  type="button"
                  className="ni-swatch"
                  onClick={() => copy(s.token, s.token)}
                  aria-label={`Copy ${s.token}`}
                >
                  <div className="ni-swatch-chip" style={{ background: `var(${s.token})` }} />
                  <div className="ni-swatch-meta">
                    <strong>{copied === s.token ? "Copied" : s.token}</strong>
                    <em>{s.use}</em>
                  </div>
                </button>
              ))}
            </div>

            <h3 className="ni-h3" style={{ marginBottom: 8 }}>
              Type scale
            </h3>
            <p className="ni-body dim" style={{ marginBottom: 8 }}>
              能用一个家族解决就不要第二装饰字体。层级靠 scale / space / align。
            </p>
            {TYPE_ROWS.map((row) => (
              <div className="ni-type-row" key={row.token}>
                <div>
                  <div className="ni-mono">{row.token}</div>
                  <div className="ni-dim" style={{ fontSize: 12, marginTop: 4 }}>
                    {row.spec}
                  </div>
                </div>
                <div>
                  <div className={row.sampleClass} style={{ fontSize: row.token === "--font-display" ? 56 : undefined }}>
                    {row.sample}
                  </div>
                  <div className="ni-mono" style={{ marginTop: 8, color: "var(--fg-mute)" }}>
                    {row.note}
                  </div>
                </div>
              </div>
            ))}

            <div className="ni-grid-2" style={{ marginTop: 48 }}>
              <div className="ni-plate">
                <div className="ni-plate-head">
                  <span>Spacing</span>
                  <span>Base 4</span>
                </div>
                <div className="ni-space-row">
                  {[4, 8, 12, 16, 24, 32, 48, 64, 96].map((n) => (
                    <div className="ni-space-unit" key={n}>
                      <i style={{ ["--u" as string]: `${Math.max(4, n / 2)}px`, height: n }} />
                      <span>{n}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ni-plate">
                <div className="ni-plate-head">
                  <span>Stroke / Radius</span>
                  <span>Hard edge</span>
                </div>
                <p className="ni-mono" style={{ margin: 0, lineHeight: 1.8 }}>
                  Radius default 0 · max 2px
                  <br />
                  Shadow: none · hairline 1px or dashed cut
                  <br />
                  Dash: 4px 3px — carton / unfinished
                  <br />
                  Stripe modulus: 3px bar / 2px gap
                </p>
              </div>
            </div>

            <div className="ni-plate" style={{ marginTop: 16 }}>
              <div className="ni-plate-head">
                <span>Visible grid</span>
                <span>
                  [Derived] --ni-grid: 48px
                </span>
              </div>
              <div className="ni-grid-demo" />
            </div>
          </div>
        </section>

        <section className="ni-section" id="sec-micro">
          <div className="ni-wrap">
            <div className="ni-sec-head">
              <span className="ni-sec-id">02 / MICROGRAPHICS</span>
              <div>
                <h2 className="ni-h2">Annotation set</h2>
                <p className="ni-body dim" style={{ margin: "8px 0 0" }}>
                  零件抽屉，不是每面都要贴满。密度：Content 60 / System 30 / Micro 10。Hero 最多 3
                  个家族。普通区块 1–2。标注对比永远低于正文。
                </p>
              </div>
              <Src kind="observed" />
            </div>

            <div className="ni-grid-2">
              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>MG-01 Index bars</span>
                  <span>--ni-stripe</span>
                </div>
                <div className="ni-mg-stage">
                  <div className="mg-index" />
                </div>
                <p className="ni-mono dim">等宽竖条。压缩、索引、早期存储介质的检索逻辑。</p>
              </article>

              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>MG-02 Scan bars</span>
                  <span>horizontal</span>
                </div>
                <div className="ni-mg-stage">
                  <div className="mg-scan" />
                </div>
                <p className="ni-mono dim">横条扫描。跟踪线、回放、终端输出的节奏。</p>
              </article>

              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>MG-03 Octagon</span>
                  <span>clip-path</span>
                </div>
                <div className="ni-mg-stage">
                  <div className="mg-octagon" />
                </div>
                <p className="ni-mono dim">开槽 / 切角 / 八边形。铭牌与舱口的几何，不是圆角卡片。</p>
              </article>

              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>MG-04 Chamfer plate</span>
                  <span>12px cut</span>
                </div>
                <div className="ni-mg-stage">
                  <div className="mg-chamfer" />
                </div>
                <p className="ni-mono dim">切角基板。包装字标与单元铭牌共用同一套切口角度。</p>
              </article>

              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>MG-05 Scanlines</span>
                  <span>3+1</span>
                </div>
                <div className="ni-mg-stage" style={{ padding: 0 }}>
                  <div className="mg-scanlines" />
                </div>
                <p className="ni-mono dim">扫描线。密度要克制，不作做旧纹理，不作故障艺术。</p>
              </article>

              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>MG-06 Dashed cut</span>
                  <span>--ni-dash</span>
                </div>
                <div className="ni-mg-stage">
                  <div className="mg-cut" />
                </div>
                <p className="ni-mono dim">虚线裁切。包装、分区、未完成状态。实线 = 已闭合系统。</p>
              </article>

              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>MG-07 Crosshair</span>
                  <span>fiducial</span>
                </div>
                <div className="ni-mg-stage">
                  <div className="mg-cross">
                    <b />
                    <b />
                    <b />
                    <b />
                  </div>
                </div>
                <p className="ni-mono dim">十字准星。角标与瞄准，不做成游戏准星皮肤。</p>
              </article>

              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>MG-08 Density code</span>
                  <span>barcode-like</span>
                </div>
                <div className="ni-mg-stage">
                  <div className="mg-barcode" aria-hidden="true">
                    {BARCODE.map((w, i) => (
                      <i key={i} style={{ width: w * 2, marginRight: i % 3 === 0 ? 3 : 1 }} />
                    ))}
                  </div>
                </div>
                <p className="ni-mono dim">条码式疏密线。单位识别，不是需扫描的真实条码。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="ni-section" id="sec-materials">
          <div className="ni-wrap">
            <div className="ni-sec-head">
              <span className="ni-sec-id">03 / MATERIALS</span>
              <div>
                <h2 className="ni-h2">Deployable parts</h2>
                <p className="ni-body dim" style={{ margin: "8px 0 0" }}>
                  物料标本。图形标 + 字标 + 上下元数据条是锁闭组合。每块标本只用 1 个微图形家族。
                </p>
              </div>
              <span className="ni-mono">PRINT / HUD / CARTON / KIT</span>
            </div>

            <div className="ni-grid-2" style={{ marginBottom: 16 }}>
              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>Type lockup</span>
                  <span>MAT-01</span>
                </div>
                <div className="ni-lockup">
                  <div className="ni-lockup-bar">
                    <span>Status: Active</span>
                    <span>U.S.A.</span>
                    <span>Field lab</span>
                  </div>
                  <div className="ni-lockup-body">
                    <Mark />
                    <div>
                      <div className="ni-lockup-word">
                        Orbital
                        <small>Sys-01 · Continuous build</small>
                      </div>
                    </div>
                  </div>
                  <div className="ni-lockup-bar bottom">
                    <span>Unit NI-04</span>
                    <span>Rev 1.4</span>
                    <span>{date}</span>
                  </div>
                </div>
              </article>

              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>Status stamps</span>
                  <span>MAT-02</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                  <span className="ni-stamp ghost">Standby</span>
                  <span className="ni-stamp solid">Active</span>
                  <span className="ni-stamp nvg">Online</span>
                  <span className="ni-stamp warn">Degraded</span>
                  <span className="ni-stamp alert">Alert</span>
                  <span className="ni-stamp ghost" style={{ opacity: 0.45, borderStyle: "dashed" }}>
                    Offline
                  </span>
                </div>
                <div className="ni-plate-head">
                  <span>Unit identifiers</span>
                  <span>MAT-03</span>
                </div>
                <p className="ni-h2" style={{ fontSize: 42 }}>
                  G-01
                </p>
                <p className="ni-mono" style={{ marginTop: 8 }}>
                  UNIT ID: NI-04 · SN 04-7721-AX · LOT 26A
                </p>
              </article>
            </div>

            <article className="ni-plate" style={{ marginBottom: 16 }}>
              <div className="ni-plate-head">
                <span>Coordinate block</span>
                <span>MAT-04</span>
              </div>
              <div className="ni-grid-4">
                {[
                  ["DATUM", "WGS 84"],
                  ["PROJECTION", "UTM 18N"],
                  ["ALT", "12.4 M"],
                  ["GRID", "48 / 24"],
                ].map(([k, v]) => (
                  <div key={k} className="ni-coord">
                    <b>{k}</b>
                    <div>{v}</div>
                  </div>
                ))}
              </div>
            </article>

            <article className="ni-plate" style={{ marginBottom: 16 }}>
              <div className="ni-plate-head">
                <span>HUD / map overlay</span>
                <span>MAT-05 · one family + type</span>
              </div>
              <div className="ni-hud">
                <div className="ni-hero-grid" />
                <div className="ni-hud-inner">
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <span className="ni-tel">Survey-OS / Grid 18</span>
                    <span className="ni-stamp ghost">Online</span>
                  </div>
                  <div>
                    <div className="ni-hud-title">Survey-OS</div>
                    <HudMap />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div className="ni-tel">
                      Bearing 041.2
                      <br />
                      Range 1.04 km
                    </div>
                    <div className="ni-tel" style={{ textAlign: "right" }}>
                      Unit G-01
                      <br />
                      {zulu}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="ni-plate" style={{ marginBottom: 16 }}>
              <div className="ni-plate-head">
                <span>Spec sheet</span>
                <span>MAT-06 · left rail + meters</span>
              </div>
              <div className="ni-spec">
                <aside className="ni-spec-rail">
                  <Mark size={56} />
                  <div className="ni-mono">
                    DOC NI-04
                    <br />
                    REV 1.4
                    <br />
                    CLASS: OPEN
                  </div>
                  <span className="ni-stamp solid">Active</span>
                </aside>
                <div className="ni-spec-body">
                  <h3 className="ni-h3">Assembly record</h3>
                  <p className="ni-body dim" style={{ margin: 0 }}>
                    为栈下面的基础设施设计，不为栈上面的消费界面设计。一张规格书，不是一张海报。
                  </p>
                  <div className="ni-meter">
                    <div className="ni-mono">Load / 78%</div>
                    <div className="ni-meter-track">
                      <i style={{ width: "78%" }} />
                    </div>
                  </div>
                  <div className="ni-meter">
                    <div className="ni-mono">Thermal / 41%</div>
                    <div className="ni-meter-track">
                      <i style={{ width: "41%", background: "var(--ni-amber)" }} />
                    </div>
                  </div>
                  <dl className="ni-kv">
                    <div>
                      <dt>Mass</dt>
                      <dd>12.4 kg</dd>
                    </div>
                    <div>
                      <dt>Voltage</dt>
                      <dd>48 VDC</dd>
                    </div>
                    <div>
                      <dt>Duty</dt>
                      <dd>Continuous</dd>
                    </div>
                    <div>
                      <dt>Env</dt>
                      <dd>IP65 / −20–55°</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>

            <article className="ni-plate" style={{ marginBottom: 16 }}>
              <div className="ni-plate-head">
                <span>Packaging panel</span>
                <span>MAT-07 · safety field + cut</span>
              </div>
              <div className="ni-pack">
                <div className="ni-pack-cut" />
                <div className="ni-mono">Industrial packaging unit · Status: Active deployment</div>
                <div className="ni-pack-type">
                  <CutLetters />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <span className="ni-mono">SN 04-7721-AX · NET 12.4 KG</span>
                  <span className="ni-mono">CUT / FOLD / DEPLOY</span>
                </div>
              </div>
            </article>

            <div className="ni-jacket-wrap" style={{ marginBottom: 16 }}>
              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>Apparel test</span>
                  <span>MAT-08 · equipment, not merch</span>
                </div>
                <div className="ni-jacket">
                  <div className="ni-jacket-shape">
                    <div className="ni-jacket-print">
                      NI
                      <br />
                      04
                    </div>
                    <div className="ni-sleeve">
                      G-01
                      <br />
                      FIELD
                      <br />
                      UNIT
                    </div>
                  </div>
                </div>
              </article>
              <article className="ni-plate">
                <div className="ni-plate-head">
                  <span>Command buttons</span>
                  <span>MAT-09</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
                  <button type="button" className="ni-btn">
                    Engage Design Ops
                  </button>
                  <button type="button" className="ni-btn ghost">
                    Field Report
                  </button>
                  <button type="button" className="ni-btn ink">
                    System Online
                  </button>
                </div>
                <p className="ni-body dim" style={{ marginTop: 24 }}>
                  实心信号 / ghost 线框 / 墨色反白。无圆角、无投影。按压缩放 0.98，时长 --motion-fast 80ms，无弹性。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="ni-section" id="sec-states">
          <div className="ni-wrap">
            <div className="ni-sec-head">
              <span className="ni-sec-id">04 / STATES + MOTION</span>
              <div>
                <h2 className="ni-h2">Operational UI</h2>
                <p className="ni-body dim" style={{ margin: "8px 0 0" }}>
                  语言要能跑界面，不只是品牌静帧。动作只表达状态改变：snap / wipe / lock。无 bounce、无 spring。
                </p>
              </div>
              <Src kind="invented" />
            </div>

            <h3 className="ni-h3" style={{ marginBottom: 12 }}>
              Command button
            </h3>
            <div className="ni-btn-grid" style={{ marginBottom: 32 }}>
              <button type="button" className="ni-btn">
                Default
              </button>
              <button type="button" className="ni-btn ghost">
                Hover / Ghost
              </button>
              <button type="button" className="ni-btn is-selected">
                Selected
              </button>
              <button type="button" className="ni-btn" disabled>
                Disabled
              </button>
              <button type="button" className="ni-btn warn">
                Warning
              </button>
              <button type="button" className="ni-btn offline">
                Offline
              </button>
            </div>

            <h3 className="ni-h3" style={{ marginBottom: 12 }}>
              System row
            </h3>
            <div className="ni-sys" style={{ marginBottom: 32 }}>
              {[
                ["G-01", "Survey unit", "online", "Status: Online"],
                ["G-02", "Pack line", "active", "Status: Active"],
                ["G-03", "Reserve", "standby", "Status: Standby"],
                ["G-04", "Thermal", "degraded", "Status: Degraded"],
                ["G-05", "Remote", "offline", "Status: Offline"],
              ].map(([id, name, state, status]) => (
                <div className="ni-sys-row" data-state={state} key={id}>
                  <i className="ni-dot" aria-hidden="true" />
                  <span>{id}</span>
                  <span className="ni-dim">{name}</span>
                  <span>{status}</span>
                </div>
              ))}
            </div>

            <h3 className="ni-h3" style={{ marginBottom: 12 }}>
              Motion
            </h3>
            <p className="ni-mono dim" style={{ marginBottom: 16 }}>
              --motion-fast 80ms · --motion-base 140ms · --motion-slow 220ms · --ease-mechanical
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <button
                type="button"
                className={`ni-btn ${locked ? "is-selected" : "ghost"} ni-motion-lock ${locked ? "is-on" : ""}`}
                onClick={() => setLocked((v) => !v)}
              >
                <i className="wipe" aria-hidden="true" />
                {locked ? "Status: Active" : "Status: Standby"}
              </button>
              <span className="ni-mono dim">Wipe + lock · no spring</span>
            </div>
          </div>
        </section>

        <section className="ni-section" id="sec-voice">
          <div className="ni-wrap">
            <div className="ni-sec-head">
              <span className="ni-sec-id">05 / VOICE + RULES</span>
              <div>
                <h2 className="ni-h2">Operating language</h2>
                <p className="ni-body dim" style={{ margin: "8px 0 0" }}>
                  文案也是物料。用运行中文件的语气，不用创业口号。
                </p>
              </div>
              <Src kind="observed" />
            </div>

            <div className="ni-grid-2" style={{ marginBottom: 16 }}>
              <div>
                <h3 className="ni-h3" style={{ marginBottom: 12 }}>
                  Use
                </h3>
                <ul className="ni-voice-list">
                  {VOICE_OK.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="ni-h3" style={{ marginBottom: 12 }}>
                  Kill
                </h3>
                <ul className="ni-voice-list">
                  {VOICE_NO.map((v) => (
                    <li key={v} style={{ textDecoration: "line-through", color: "var(--fg-mute)" }}>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="ni-h3" style={{ margin: "32px 0 12px" }}>
              Do / Don’t
            </h3>
            <div className="ni-grid-2">
              <div className="ni-do">
                <span className="ni-stamp solid">Do</span>
                <p className="ni-h3">Spec plate</p>
                <p className="ni-body dim" style={{ margin: 0 }}>
                  可见网格、等宽戳、切角、一条强调色。印在铭牌、纸箱侧面、夹克后背仍然成立。
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span className="ni-stamp ghost">G-01</span>
                  <span className="ni-stamp solid">Active</span>
                </div>
              </div>
              <div className="ni-dont">
                <span className="ni-stamp alert">Don’t</span>
                <div className="bad-card">
                  Unlock the future
                  <div style={{ fontSize: 12, opacity: 0.8, marginTop: 6 }}>seamless · next-gen · glass</div>
                </div>
                <p className="ni-mono" style={{ margin: 0, color: "#c4b4a4" }}>
                  禁止：圆角卡片、玻璃拟态、紫蓝渐变、霓虹赛博、做旧做破、蒸汽朋克、游戏枪厂贴图。
                </p>
              </div>
            </div>

            <p className="ni-accept">
              If it cannot print on a spec plate, a carton side, or a work jacket, it is not done.
            </p>
          </div>
        </section>

        <section className="ni-section" id="sec-validate">
          <div className="ni-wrap">
            <div className="ni-sec-head">
              <span className="ni-sec-id">06 / SYSTEM VALIDATION</span>
              <div>
                <h2 className="ni-h2">Design test</h2>
                <p className="ni-body dim" style={{ margin: "8px 0 0" }}>
                  顶栏 Signal / Anno / Gray 是活测试。关掉强调色和微图形后，网格、字体、层级仍应成立。
                </p>
              </div>
              <Src kind="invented" />
            </div>

            <ul className="ni-check">
              <li>
                <b>01 · Signal off</b>
                <span>去掉安全橙。构图还像工程文件吗？身份应来自网格与字体，不是颜色。</span>
              </li>
              <li>
                <b>02 · Anno off</b>
                <span>去掉微图形。字号、间距、对齐是否仍能独立成立？</span>
              </li>
              <li>
                <b>03 · Purpose</b>
                <span>每个装饰能否解释操作或信息用途？只为好看的，删。</span>
              </li>
              <li>
                <b>04 · Grayscale</b>
                <span>Gray 模式下系统是否仍可读、可部署？</span>
              </li>
              <li>
                <b>05 · Field object</b>
                <span>能否印在铭牌、纸箱、机台界面、工程手册或工作夹克上？</span>
              </li>
            </ul>

            <p className="ni-principle">Structure first / Signal second / Decoration last</p>
            <p className="ni-mono dim" style={{ marginTop: 12 }}>
              If it looks decorated, remove something. If it looks engineered, keep going.
            </p>
          </div>
        </section>

        <section className="ni-section" id="sec-root">
          <div className="ni-wrap">
            <div className="ni-sec-head">
              <span className="ni-sec-id">07 / :ROOT</span>
              <div>
                <h2 className="ni-h2">Copy-paste tokens</h2>
                <p className="ni-body dim" style={{ margin: "8px 0 0" }}>
                  生产项目把 Barlow / Plex 换成 Saans（proportional / semi-mono / mono）即可走完整系统。
                </p>
              </div>
              <button type="button" className="ni-btn" onClick={() => copy(NI_ROOT_CSS, "root")}>
                {copied === "root" ? "Copied" : "Copy :root"}
              </button>
            </div>
            <pre className="ni-code">{NI_ROOT_CSS}</pre>
          </div>
        </section>
      </main>

      <footer className="ni-foot">
        <div className="ni-wrap">
          <p className="ni-foot-line">Function over decoration</p>
          <p className="ni-mono" style={{ marginTop: 16 }}>
            SPEC/NI-04 · Built for field use · Approach: restrained / operational / grounded
          </p>
        </div>
      </footer>

      {copied ? <div className="ni-toast">Copied · {copied}</div> : null}
    </div>
  );
}
