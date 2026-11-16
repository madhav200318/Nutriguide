import useCanvas from '../../hooks/useCanvas';
import { TREND_BASE, TREND_LABELS } from '../../data/constants';

// 7-day calorie bar chart drawn with the HTML5 Canvas API ("Today" = live total from the database)
export default function TrendChart({ todayTotal }) {
  const data = [...TREND_BASE, todayTotal];
  const ref = useCanvas((ctx, w, h) => {
    const max = Math.max(...data, 500);
    const left = 10, right = 8, top = 12, bottom = 28, gap = 8;
    const chartH = h - top - bottom;
    const barW = Math.min(28, (w - left - right - gap * 6) / 7);
    const startX = (w - (barW * 7 + gap * 6)) / 2;
    data.forEach((v, i) => {
      const barH = Math.max(4, (v / max) * chartH);
      const x = startX + i * (barW + gap), y = top + chartH - barH, r = 4;
      ctx.fillStyle = i === 6 ? '#C1642E' : '#DCE7CC';
      ctx.beginPath(); ctx.moveTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.lineTo(x + barW - r, y); ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
      ctx.lineTo(x + barW, top + chartH); ctx.lineTo(x, top + chartH); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#16301F'; ctx.font = '10px Inter, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(TREND_LABELS[i], x + barW / 2, h - 10);
    });
  }, [todayTotal]);

  return <canvas ref={ref} className="block w-full h-full" role="img" aria-label="Bar chart of calories logged over the last seven days" />;
}
