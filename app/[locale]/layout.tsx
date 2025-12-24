export const dynamicParams = false; // <-- causes the bug
export const dynamic = "force-static"; // <-- Also helps to cause bug

export const generateStaticParams = async () => {
    return [{ locale: "en" }, { locale: "fr" }];
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    console.info("IN LAYOUT");
    return <div>{children}</div>;
}
