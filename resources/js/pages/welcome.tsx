interface LinkCard {
    title: string;
    description: string;
    url: string;
    image: string;
}

declare global {
    interface Window {
        appAssets: {
            logoLight: string;
            logoDark: string;
        };
    }
}

export default function Welcome() {
    const linkCards: LinkCard[] = [
        {
            title: 'Controlling',
            description: 'Pénzügyi controlling és jelentési rendszer. Átfogó pénzügyi elemzések, költségvetés-tervezés és teljesítménykövetés egy helyen.',
            url: 'http://controlling.cegem360.eu',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        },
        {
            title: 'Értékesítési és ügyfélkapcsolati rendszer',
            description: 'Ügyfélkapcsolat-kezelési rendszer. Kezeld hatékonyan az ügyfelekkel és partnerekkel való kapcsolatokat, követesd a kommunikációt.',
            url: 'http://crm-and-contacts.cegem360.eu/',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        },
        {
            title: 'CRM Rendszer',
            description: 'Központi CRM platform az értékesítési folyamatok kezeléséhez. Kapcsolattartás, ajánlatok és értékesítési lehetőségek nyomon követése.',
            url: 'http://crm.cegem360.eu',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        },
        {
            title: 'Raktár Kezelő Rendszer',
            description: 'Készletgazdálkodási és raktárkezelő rendszer. Nyomon követheted a készleteket, beérkezéseket, kiadásokat és optimalizálhatod a raktárlogisztikát.',
            url: 'http://storage.cegem360.eu',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop',
        },
        {
            title: 'Munkafolyamat Irányítási Rendszer',
            description: 'Üzleti folyamatok automatizálása és kezelése. Hatékony munkafolyamat-tervezés, feladatkezelés és jóváhagyási folyamatok.',
            url: '#',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
        },
        {
            title: 'Gyártásirányítási Rendszer',
            description: 'Komplex gyártási folyamatok tervezése és irányítása. Termelésmenedzsment, nyersanyag-követés és minőségbiztosítás.',
            url: '#',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                {/* Header */}
                <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex items-center gap-4">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <img
                                    src={window.appAssets.logoLight}
                                    alt="CEGEM360 Logo"
                                    className="h-12 w-auto dark:hidden"
                                />
                                <img
                                    src={window.appAssets.logoDark}
                                    alt="CEGEM360 Logo"
                                    className="h-12 w-auto hidden dark:block"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            CEGEM360 Rendszerek
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Integrált üzleti rendszerek vállalatod hatékony működéséhez
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {linkCards.map((card, index) => {
                            const isDisabled = card.url === '#';
                            const CardWrapper = isDisabled ? 'div' : 'a';
                            const cardProps = isDisabled
                                ? {}
                                : {
                                      href: card.url,
                                      target: '_blank',
                                      rel: 'noopener noreferrer',
                                  };

                            return (
                                <CardWrapper
                                    key={index}
                                    {...cardProps}
                                    className={`group block bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 overflow-hidden ${
                                        isDisabled
                                            ? 'opacity-60 cursor-not-allowed'
                                            : 'hover:shadow-xl transform hover:-translate-y-1 cursor-pointer'
                                    }`}
                                >
                                {/* Card Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {card.description}
                                    </p>
                                    <div className="mt-4 flex items-center text-[#b3258c] dark:text-[#26abe2] font-medium">
                                        <span>{isDisabled ? 'Hamarosan elérhető' : 'Tovább az oldalra'}</span>
                                        {!isDisabled && (
                                            <svg
                                                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </CardWrapper>
                        );
                        })}
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-16 border-t border-[#b3258c]/20 dark:border-[#b3258c]/30 bg-[#200656] backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <p className="text-center text-gray-200 dark:text-gray-300">
                            &copy; {new Date().getFullYear()} CEGEM360. Minden jog fenntartva.
                        </p>
                    </div>
                </footer>
            </div>
    );
}
