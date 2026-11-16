import EmailForm from './ui/EmailForm';

const PRODUCT = [['#how', 'How it works'], ['#features', 'Features'], ['#goals', 'Built for you'], ['#', 'Pricing']];
const COMPANY = [['#journal', 'Journal'], ['#', 'About'], ['#', 'Careers'], ['#', 'Contact']];

const LinkList = ({ title, links }) => (
  <nav aria-label={title}>
    <h4 className="text-cream text-sm font-semibold mb-4">{title}</h4>
    <ul className="space-y-2.5 text-sm text-cream/60">
      {links.map(([href, label]) => <li key={label}><a href={href} className="hover:text-cream">{label}</a></li>)}
    </ul>
  </nav>
);

export default function Footer({ notify }) {
  return (
    <footer className="bg-pine text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <a href="#top" className="flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none"><path d="M15 27C9 27 4 22 4 15.5 4 9.5 8.5 4.5 15 3c1.5 5 3 9-1 13-2.5 2.5-6 3-6 3s2.5 3.5 7 3.5c6 0 9-5 9-10.5C24 6.5 20 3 15 3" stroke="#F7F2E7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="font-display text-xl text-cream">Nutriguide</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-cream/60 max-w-[22ch]">A clearer, kinder way to understand what you eat.</p>
        </div>
        <LinkList title="Product" links={PRODUCT} />
        <LinkList title="Company" links={COMPANY} />
        <div>
          <h4 className="text-cream text-sm font-semibold mb-4">Stay in the loop</h4>
          <p className="text-sm text-cream/60 mb-4">One useful nutrition note a month. No spam.</p>
          <EmailForm id="footer-form" variant="footer" notify={notify} />
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/45">
          <p>© 2026 Nutriguide. All rights reserved.</p>
          <div className="flex gap-6"><a href="#" className="hover:text-cream/80">Privacy</a><a href="#" className="hover:text-cream/80">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
