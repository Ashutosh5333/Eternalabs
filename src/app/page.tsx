
import TokenTable from "@/modules/tokens/components/TokenTable";
import ErrorBoundary from "@/shared/ErrorBoundary";
import WebsocketBadge from "@/shared/ui/WebsocketBadge";

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Axiom Token Discovery</h1>
      <div className="py-1">
      <WebsocketBadge/>
      </div>
     

      <ErrorBoundary>
      <TokenTable />
      </ErrorBoundary>
    </main>
  );
}
