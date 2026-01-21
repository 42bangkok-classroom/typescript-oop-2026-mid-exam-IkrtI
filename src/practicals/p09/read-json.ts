import fs from "fs";

export async function readJson(fileName: string): unknown[] {
  let x = fs.readFileSync("src/practicals/p09/datasets/products.json");
}
