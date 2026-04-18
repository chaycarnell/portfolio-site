export function runReveals(): () => void {
  const els = document.querySelectorAll('.reveal:not(.in)');
  let io: IntersectionObserver | null = null;

  requestAnimationFrame(() => {
    io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io?.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.05 },
    );
    els.forEach(el => io!.observe(el));
  });

  return () => {
    io?.disconnect();
  };
}
