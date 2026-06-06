import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    id: 1,
    date: "Sept – Oct 2025",
    bullets: [
      "Define project scope & technical direction.",
      "Organize operational lab setup.",
      "Engage academic & industry advisors."
    ]
  },
  {
    id: 2,
    date: "Nov – Dec 2025",
    bullets: [
      "Create initial prototypes & protocols.",
      "Refine scope via academic expertise.",
      "Launch social media & community outreach."
    ]
  },
  {
    id: 3,
    date: "Jan – Mar 2026",
    bullets: [
      "Fabricate, test & analyze prototypes.",
      "Conduct market research & stakeholder interviews.",
      "Participate in local pitch competitions."
    ]
  },
  {
    id: 4,
    date: "Apr – Jun 2026",
    bullets: [
      "Finalize reports & presentations.",
      "Compete in the NYC BioDesign Challenge (BDC).",
      "Network with industry professionals."
    ]
  },
  {
    id: 5,
    date: "June 2026, onwards",
    bullets: [
      "Integrate BDC feedback.",
      "Formulate objectives for the upcoming year."
    ]
  }
];

const Timeline = ({ subtitle = 'Timeline' }) => {
  return (
    <section className="timeline-container w-full py-12 px-4 md:px-8 font-sans">
      {subtitle && (
        <h2 className="timeline-heading text-center mb-6">{subtitle}</h2>
      )}

      <div className="relative w-full max-w-5xl mx-auto timeline-root">
        {/* center vertical line for desktop (styled in Timeline.css) */}
        <div className="timeline-center-line" aria-hidden="true" />

        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className={`timeline-item relative md:grid md:grid-cols-2 md:items-start ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
                <div className="timeline-marker">
                  <div className="timeline-dot" />
                </div>

                {/* Left column */}
                <div className={`md:col-span-1 md:px-6 timeline-col timeline-col--left ${isLeft ? 'show' : ''}`}>
                  {isLeft && (
                    <div className="timeline-card inline-block bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:bg-white/6 transition md:max-w-md">
                      <h3 className="text-sm font-semibold text-blue-300 mb-2">{item.date}</h3>
                      <ul className="mt-2 space-y-2">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="text-sm text-slate-200 flex items-start">
                            <span className="mr-2 text-blue-400">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right column */}
                <div className={`md:col-span-1 md:px-6 timeline-col timeline-col--right ${!isLeft ? 'show' : ''}`}>
                  {!isLeft && (
                    <div className="timeline-card inline-block bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:bg-white/6 transition md:max-w-md">
                      <h3 className="text-sm font-semibold text-blue-300 mb-2">{item.date}</h3>
                      <ul className="mt-2 space-y-2">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="text-sm text-slate-200 flex items-start">
                            <span className="mr-2 text-blue-400">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
