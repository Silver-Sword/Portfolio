import { ImageData } from "@/lib/ImageData";

type MasonryObject = { imageData: ImageData } & Record<PropertyKey, unknown>;

export function sortMasonryObjects<T extends MasonryObject>(
  numColumns: number,
  columnWidth: number,
  obj: T[]
): T[] {
  if (numColumns <= 0) return [];

  const sortedObj: T[] = obj.slice(0, numColumns);
  const colsHeight = Array.from(
    { length: numColumns },
    (_, index) =>
      (sortedObj[index].imageData.pixelHeight * columnWidth) /
      sortedObj[index].imageData.pixelWidth
  );
  console.debug(
    `Starting Row: ${sortedObj.map((r) => `${r.imageData.alt} (${r.imageData.pixelHeight})`).join(", ")}`
  );
  console.debug(`Starting Heights: ${colsHeight.join(", ")}`);
  let idx = numColumns;

  while (idx < obj.length) {
    const row: T[] = orderRow(
      obj.slice(idx, Math.min(obj.length, idx + numColumns)),
      colsHeight
    );
    sortedObj.push(...row);
    for (let i = 0; i < row.length; i++) {
      colsHeight[i] +=
        (columnWidth * row[i].imageData.pixelHeight) /
        row[i].imageData.pixelWidth;
    }

    idx += numColumns;
  }

  return sortedObj;
}

function orderRow<T extends MasonryObject>(
  newRow: T[],
  colsHeight: number[]
): T[] {
  const orderedRow: (T | undefined)[] = Array.from(
    { length: newRow.length },
    () => undefined
  );

  const used = Array.from({ length: newRow.length }, () => false);

  console.debug(
    `initial row: ${(newRow as MasonryObject[]).map((r) => `${r.imageData.alt} (${r.imageData.pixelHeight})`).join(", ")}`
  );

  newRow.sort((a, b) => {
    return getImageRatio(a.imageData) - getImageRatio(b.imageData);
  });

  console.debug(
    `sorted row: ${(newRow as MasonryObject[]).map((r) => `${r.imageData.alt} (${r.imageData.pixelHeight})`).join(", ")}`
  );
  console.debug(`Heights: ${colsHeight.join(", ")}`);
  for (let i = 0; i < newRow.length; i++) {
    let colIdx = 0;
    colsHeight.forEach((height, idx) =>
      used[colIdx]
        ? (colIdx = idx)
        : idx >= newRow.length ||
          used[idx] ||
          (colIdx = colsHeight[colIdx] < height ? idx : colIdx)
    );
    console.debug(`Image ${newRow[i].imageData.alt} goes to column ${colIdx}`);
    orderedRow[colIdx] = newRow[i];
    used[colIdx] = true;
  }

  console.debug(
    `ordered row: ${(orderedRow as MasonryObject[]).map((r) => `${r.imageData.alt} (${r.imageData.pixelHeight})`).join(", ")}`
  );
  return orderedRow as T[];
}

function getImageRatio(imageData: ImageData) {
  return imageData.pixelHeight / imageData.pixelWidth;
}
