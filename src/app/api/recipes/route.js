import { recipes } from "@/lib/recipes";

export async function GET() {
  return Response.json(recipes);
}