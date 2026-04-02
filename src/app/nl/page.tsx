import { redirect } from "next/navigation";
import { seoRoutes } from "@/lib/site";

export default function DutchRootPage() {
  redirect(seoRoutes.nlHub);
}
