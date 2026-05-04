export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Local Only</span>
        <h1 className="text-5xl font-bold gradient-text">Pockit AI</h1>
        <p className="max-w-md text-muted text-lg">
          Never forget, always organized, ready when you are.
        </p>
      </div>
    </main>
  );
}
