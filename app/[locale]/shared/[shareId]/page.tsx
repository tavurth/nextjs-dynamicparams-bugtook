export const dynamicParams = true; // <-- does not work 404 NoFallbackError
export const dynamic = "force-static";

export default async function SharedPage({
    params,
}: {
    params: Promise<{ locale: string; shareId: string }>;
}) {
    const { shareId } = await params;
    console.info("FOUND");
    return <div>Share: {shareId}</div>;
}
