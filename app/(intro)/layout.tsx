import Footer from "@/components/intro/footer"
import Header from "@/components/intro/header"

export default function IntroLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-between bg-hero-intro bg-cover bg-dark-blue">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
