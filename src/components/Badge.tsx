import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  text: string;
};

export default function Badge({ text }: Props) {
  let color: string = "";
  let description: string;
  switch (text.trim()) {
    case "Active":
      color = "#006045";
      description = "Actively developed and maintained.";
      break;
    case "Unreleased":
      color = "#733e0a";
      description = "Not released, but in development";
      break;
    case "Abandoned":
      color = "#82181a";
      description = "Abandoned by author.";
      break;
    case "Unknown":
      color = "#024a70";
      description = "The project is in unknown state.";
      break;
    case "WRAC":
      description = "Supports connection via WebSocket-base RAC protocol.";
      break;
    case "RAC":
      description = "Supports connection via TCP RAC protocol.";
      break;
    case "v2":
      description = "Compatible with RAC v2.";
      break;
    case "v1.99.2":
      description = "Compatible with RAC v1.99.2.";
      break;
    case "v1.0":
      description = "Compatible with RAC v1.0.";
      break;
    case "TLS":
      description = "Supports connections via TLS.";
      break;
    default:
      description = "???";
      break;
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <figure
          className={`text-sm py-1 px-2 font-medium font-geist text-stone-300 bg-stone-800 rounded-lg`}
          style={{ backgroundColor: color }}
        >
          {text}
        </figure>
      </TooltipTrigger>
      <TooltipContent>
        <p className={"text-stone-300"}>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}
