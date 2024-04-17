// Importa las librerías necesarias
import * as fs from "fs";
import pdf from "pdf-parse";
import { promisify } from "util";
import * as path from "path";

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

// Función para leer y contar las ocurrencias de los nombres en un archivo PDF
async function countNamesInPDF(
  filePath: string,
  names: string[]
): Promise<{ [key: string]: number }> {
  const dataBuffer = await readFile(filePath);
  const data = await pdf(dataBuffer);
  const results: { [key: string]: number } = {};

  names.forEach((name) => {
    const count = (data.text.match(new RegExp(name, "gi")) || []).length;
    if (count > 0) {
      results[name] = (results[name] || 0) + count;
    }
  });

  return results;
}

// Función para procesar todos los PDFs en una carpeta
async function processPDFsInFolder(folderPath: string, names: string[]) {
  const files = await readdir(folderPath);
  const pdfFiles = files.filter((file) => file.endsWith(".pdf"));
  const totalCounts: { [key: string]: number } = {};

  for (const file of pdfFiles) {
    const filePath = path.join(folderPath, file);
    const counts = await countNamesInPDF(filePath, names);
    console.log(`Counts in ${file}:`, counts);

    Object.keys(counts).forEach((name) => {
      totalCounts[name] = (totalCounts[name] || 0) + counts[name];
    });
  }

  console.log("Total occurrences:", totalCounts);
}

// Leer los nombres desde un archivo y ejecutar el procesamiento
async function main() {
  const namesFilePath = "./names.txt"; // Asegúrate de que el archivo de nombres exista en esta ubicación
  const namesData = await readFile(namesFilePath, { encoding: "utf-8" });
  const names = namesData
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const folderPath = "./pdfs"; // Asegúrate de que la carpeta de PDFs exista en esta ubicación
  await processPDFsInFolder(folderPath, names);
}

main().catch((err) => console.error(err));
