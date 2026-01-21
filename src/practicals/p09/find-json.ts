import { readJson } from "./read-json";
import fs from 'fs';

export function findData(fileName: string, key: string, value: string | number): void {
  const data = readJson(fileName)
  
  const hasKey = data.some((val: any) => Object.prototype.hasOwnProperty.call(val, key))
  if (!hasKey) throw "Invalid key"

  const foundPair = data.filter((val: any) => val[key] === value)

  fs.writeFileSync("output.json", JSON.stringify(foundPair, null, 2))
}