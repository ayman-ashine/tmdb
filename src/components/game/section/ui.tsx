import { FileWarning } from "lucide-react";

export function UI() {
  return (
    <section className="flex gap-4 p-4 see">
      <button className="btn">
        <FileWarning />
        <span>Test</span>
      </button>
      <button className="btn-primary">
        <FileWarning />
        <span>Test</span>
      </button>
      <button className="btn-danger">
        <FileWarning />
        <span>Test</span>
      </button>
      <button className="btn-warning">
        <FileWarning />
        <span>Test</span>
      </button>
      <button className="btn-success">
        <FileWarning />
        <span>Test</span>
      </button>
      <button className="btn-icon">
        <FileWarning />
      </button>
      <button className="btn-icon-primary">
        <FileWarning />
      </button>
      <button className="btn-icon-danger">
        <FileWarning />
      </button>
      <button className="btn-icon-warning">
        <FileWarning />
      </button>
      <button className="btn-icon-success">
        <FileWarning />
      </button>
      <input className="input" placeholder="Enter something..." />
    </section>
  );
}
