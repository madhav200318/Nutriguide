import { useCallback, useRef, useState } from 'react';

export default function useToast() {
  const [toast, setToast] = useState({ msg: '', error: false, visible: false });
  const timer = useRef(null);
  const notify = useCallback((msg, error = false) => {
    setToast({ msg, error, visible: true });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3000);
  }, []);
  return [toast, notify];
}
