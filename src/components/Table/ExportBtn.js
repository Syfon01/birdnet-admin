
export const Export = ({ onExport }) => (
  <button className="btn btn-primary" onClick={(e) => onExport(e.target.value)}>
    Export
  </button>
);
