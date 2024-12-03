import { Timer, Zap, ZoomIn } from 'lucide-react';

export const WhyThisMattersSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base">
          OUR VALUES
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">Why This Matters</h2>
        <p>
            Project 2025 isn't just a set of policy recommendations—it's a detailed roadmap for reshaping government and society. By analyzing it critically, we aim to create a transparent, accessible record that informs and empowers communities.
        </p>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-lg bg-primary-dark text-white p-5">
            <span className="mb-8 flex size-12 items-center justify-center">
              <Timer className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Who Could Be Affected?</h3>
            <p className="leading-7 text-white">
              Communities, institutions, and vulnerable populations may face significant changes in policies like healthcare, education, and civil rights.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <ZoomIn className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">What's at Stake?</h3>
            <p className="leading-7 text-muted-foreground">
              Transparency in decision-making, representation for all voices, and preparation for potential societal changes.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Zap className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">A Public Record</h3>
            <p className="leading-7 text-muted-foreground">
              A fully transparent, sentence-by-sentence analysis to hold decision-makers accountable and combat misinformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};