import { type ReactNode } from "react";

type PropsHint = {
  mode: "hint";
  children: ReactNode;
};

type PropsWarn = {
  mode: "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};
type Props = PropsHint | PropsWarn;

export default function InfoBox(props: Props) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {mode === "warning" ? <h2>Warning</h2> : null}
      <p>{children}</p>
    </aside>
  );
}
