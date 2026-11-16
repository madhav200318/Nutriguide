export default function Toast({ msg, error, visible }) {
  return (
    <div id="toast" role="status" aria-live="polite"
      className={`fixed bottom-5 right-5 z-[70] max-w-xs px-4 py-3 rounded-2xl text-sm shadow-lg text-cream pointer-events-none transition-all duration-300 ${
        error ? 'bg-clay' : 'bg-forest'} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
      {msg}
    </div>
  );
}
