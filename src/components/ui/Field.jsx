// Label + control wrapper for form fields
export default function Field({ label, htmlFor, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="ng-label">{label}</label>
      {children}
    </div>
  );
}
