interface ToolResultProps {
  toolName: string;
  result: string;
}

export default function ToolResult({
  toolName,
  result,
}: ToolResultProps) {
  return (
    <div
      role="region"
      aria-label={`${toolName} tool result`}
      className="rounded-xl border bg-muted/40 p-4"
    >
      <div className="mb-2 text-sm font-medium">
        {toolName}
      </div>

      <pre className="whitespace-pre-wrap text-sm text-muted-foreground">
        {result}
      </pre>
    </div>
  );
}