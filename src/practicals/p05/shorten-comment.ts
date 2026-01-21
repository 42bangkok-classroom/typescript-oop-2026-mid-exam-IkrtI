export const comment = "TypeScript is a strongly typed programming language";

function shortenComment(commentT: string): string {
  return commentT
    .split(" ")
    .filter((m) => m.length >= 5 && m.length <= 10)
    .join(" ");
}
