export default function Home() {
    return(
        <main className="min-h-screen bg-white text-zinc-900">
            {/* Top */}
            <header className="mx-auto max-w-5x1 px-6 pt-14 pb-10">
                <div className="flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700">
                        <span className="h-2 w-2 rounded-full bg-violet-600" />
                        Portfolio • Data Analytics • Power BI • SQL • Python
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-4x1 font-semibold tracking-tight sm:text-5x1">
                            Daijah Bryant (aka Dillard)
                        </h1>
                        <p className="text-lg text-zinc-700 sm:text-xl">
                            Data Analyst focused on operational analytics, dashboarding,
                            turning complex workflows into decision-ready insights.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                          className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm over :bg-violet-700"
                          href="https://github.com/BryantPortfolio"
                          target="_blank"
                          rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                          className="rounded-xl border border-zinc-200 bg-white px-4py-2 text-sm font-medium hover:bg-zinc-50"
                          href="/resume.pdf"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </header>

            {/* Projects */}
            <section className="mx-auto max-w-5x1 px-6 pb-14">
                <div className="flex items-end justify-between gap-6">
                    <h2 className="text-2x1 font-semibold tracking-tight">Featured Projects</h2>
                    <p className="text-sm text-zinc-600">Click a project to view details</p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Truck Load Optimizer */}
                    <article className="overflow-hidden rounded-2x1 border border-zinc-200 bg-white shadow-sm">
                        <img
                          src="/projects/Truck Load Optimizer (Full Dash).png"
                          alt="Truck Load Optimizer Power BI Dashboard"
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                        />
                        <div className="p-5">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-lg font-semibold">Truck Load Optimizer</h3>
                                <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
                                    Featured
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-zinc-700">
                                End-to-end logistics analytics system (Python → Power BI) modeling multi-load assignments,
                                on-time performance, cycle time, and profitability with automated updates via GitHub Actions.
                            </p>

                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                                <li>Multi-year simulated hsitory with realistic constraints</li>
                                <li>KPI benchmarking + trends + top destinations</li>
                                <li>Dispatch/Delivery timestamps for true cycle time</li>
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2 text-xs">
                                {["Python", "Pandas", "Power BI", "DAX", "GitHub Actions"].map((t) => (
                                    <span key={t} className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-zinc-700">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <a
                                  className="rounded-xl bg-zinc-900 px4 py-2 text-sm font-medium text-white hover:bg-black"
                                  href="https://github.com/BryantPortfolio/truck-load-optimizer"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  GitHub Repo
                                </a>
                                <a
                                  className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hoover:bg-zinc-50"
                                  href="#"
                                >
                                  LinkedIn Post
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* FPY Dashboard */}
                    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                        <div className="aspect-[16/9] w-full bg-zinc-100" />
                        <div className="p-5">
                            <h3 className="text-lg font-semibold">First Pass Yield (FPY) Dashboard</h3>
                            <p className="mt-2 text-sm text-zinc-700">
                                Power BI dashboard tracking FPY across production workflows to identify rework drivers,
                                defect trends, and quality process inefficiencies supporting ISO 9001:2015.
                            </p>

                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                                <li> FPY calculations + variance analysis</li>
                                <li> Drilldowns for subcontractor / process performance</li>
                                <li> executive-ready reporting and monitoring</li>
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2 text-xs">
                                {["Power BI", "DAX", "Excel", "Quality Metrics", "ISO 9001:2015"].map((t) => (
                                    <span key={t} className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-zinc-700">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <button className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-50">
                                    Add Screenshot
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Surveillance Automation */}
                    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:col-span-2">
                        <div className="p-5">
                            <h3 className="text-lg font-semibold">Surveillance Automation Project</h3>
                            <p className="mt-2 text-sm text-zinc-700">
                                Automation project streamlining surveillance logging and reporting workflows to reduce manual effort,
                                improve data consistency, and support operational visibility.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2 text-xs">
                                {["Excel", "Power Query", "Automation", "Reporting"].map((t) => (
                                    <span key={t} className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-zinc-700">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* Skills + Contact */}
            <section className="border-t border-zinc-200 bg-zinc-50">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                            <h2 className="text-xl font-semibold">Skills</h2>
                            <p className="mt-2 text-sm text-zinc-700">
                                SQL • Power BI • Excel • Python • DAX • GitHub Actions • KPI Monitoring • Process Improvement • ISO 9001:2015
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Contact</h2>
                            <p className="mt-2 text-sm text-zinc-700">
                                Email:{" "}
                                <a className="text-violet-700 hover:underline" href="mailto:daijah.d4@yahoo.com">
                                    daijah.d4@yahoo.com
                                </a>
                                <br />
                                LinkedIn:{" "}
                                <a className="text-violet-700 hover:underline" href="https://www.linkedin.com/in/daijah-d/" target="_blank" rel="noreferrer">
                                  linkedin.com/in/daijah-d 
                                </a>
                            </p>
                        </div>
                    </div>

                    <p className="mt-10 text-xs text-zinc-500">
                      © {new Date().getFullYear()} Daijah Dillard • Built with Next.js + Vercel  
                    </p>
                </div>
            </section>
        </main>
    );
}