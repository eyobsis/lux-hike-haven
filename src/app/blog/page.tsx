import { redirect } from "next/navigation";
import { seoRoutes } from "@/lib/site";

export default function BlogRootPage() {
  redirect(seoRoutes.nlBlog);
}
