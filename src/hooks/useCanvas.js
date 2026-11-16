import { useEffect, useRef } from 'react';

// Draws on an HTML5 canvas, sized for the device pixel ratio, and redraws on resize.
export default function useCanvas(draw, deps) {
  const ref = useRef(null);
  useEffect(() => {
    const paint = () => {
      const canvas = ref.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      const w = Math.max(200, Math.round(rect.width));
      const h = Math.max(150, Math.round(rect.height));
      canvas.width = w * ratio;
      canvas.height = h * ratio;
      const ctx = canvas.getContext('2d');
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, w, h);
      draw(ctx, w, h);
    };
    paint();
    window.addEventListener('resize', paint);
    return () => window.removeEventListener('resize', paint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}
