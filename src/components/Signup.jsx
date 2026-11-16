import EmailForm from './ui/EmailForm';

export default function Signup({ notify }) {
  return (
    <section id="signup" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-forest rounded-[2rem] px-8 py-16 sm:px-16 sm:py-20 text-center relative overflow-hidden">
          <div className="grain absolute inset-0" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight max-w-2xl mx-auto">Start seeing your diet clearly, tonight's dinner included.</h2>
            <p className="mt-5 text-cream/70 max-w-md mx-auto">Free to start. No calorie shaming, no crash diets — just a clearer picture of what you eat.</p>
            <EmailForm id="signup-form" variant="signup" notify={notify} />
            <p className="mt-4 text-cream/50 text-xs">No card required. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
