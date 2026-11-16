import useCanvas from '../../hooks/useCanvas';

const FOREST = '#16301F', LEAF = '#3E7A4C', SPROUT = '#7FA463', CLAY = '#C1642E';

// Donut chart drawn with the HTML5 Canvas API
export default function MacroChart({ totals }) {
  const ref = useCanvas((ctx, w, h) => {
    let values = [totals.protein, totals.carbs, totals.fat];
    const sum = values.reduce((a, b) => a + b, 0);
    values = sum <= 0 ? [30, 45, 25] : values.map((v) => (v / sum) * 100);
    const cx = w / 2, cy = Math.min(h * 0.43, 62), radius = Math.min(48, w * 0.2, h * 0.3);
    const colors = [LEAF, SPROUT, CLAY];
    let angle = -Math.PI / 2;
    values.forEach((v, i) => {
      const slice = (v / 100) * Math.PI * 2;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, radius, angle, angle + slice); ctx.closePath();
      ctx.fillStyle = colors[i]; ctx.fill(); angle += slice;
    });
    ctx.beginPath(); ctx.arc(cx, cy, radius * 0.68, 0, Math.PI * 2); ctx.fillStyle = '#F5F8EC'; ctx.fill();
    ctx.fillStyle = FOREST; ctx.font = '600 12px Inter, sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('Macros', cx, cy + 4);
    ['Protein', 'Carbs', 'Fat'].forEach((label, i) => {
      const x = [w * 0.18, w * 0.5, w * 0.79][i], y = h - 20;
      ctx.fillStyle = colors[i]; ctx.fillRect(x - 28, y - 7, 8, 8);
      ctx.fillStyle = FOREST; ctx.font = '10px Inter, sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(label, x - 15, y);
    });
  }, [totals.protein, totals.carbs, totals.fat]);

  return <canvas ref={ref} className="block w-full h-full" role="img" aria-label="Donut chart of protein, carbohydrate and fat balance" />;
}
