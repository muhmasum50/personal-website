import portfolios from '../data/portofolios'

export default function Portfolio() {

    return (
        <section id="portfolio" className="pt-24 pb-28">
        <div className="container lg:containerlg">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold uppercase text-lg text-primary dark:text-slate-200 mb-2">Portfolio</h4>
                    <h2 className="font-bold text-slate-900 text-3xl dark:text-slate-100 mb-4">Latest Project</h2>
                    <p className="font-medium text-md text-secondary dark:text-slate-300">Check out some of awesome projects.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="w-full px-4 flex flex-wrap justify-center">
                <div className="carousel carousel-end p-4 space-x-4">
                {portfolios.map(item =>
                    <div className="carousel-item" key={item.name}>
                        <div className="bg-white shadow-xl rounded-xl image-full w-[150px] lg:w-[400px]">
                            <figure><img src={item.img} className="rounded-t-xl" /></figure>
                            <div className="px-5 py-5 p-5 bg-white rounded-b-xl text-slate-800">
                                <h2 className="card-title text-sm">{item.name}</h2>
                                <p class="text-xs">{item.desc}k</p>
                            </div>
                        </div>
                    </div>
                )}

                </div>
            </div>
        </div>
    </section>
    )
}