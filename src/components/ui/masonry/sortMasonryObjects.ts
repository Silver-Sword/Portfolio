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

  newRow.sort((a, b) => {
    return getImageRatio(a.imageData) - getImageRatio(b.imageData);
  });

  for (let i = 0; i < newRow.length; i++) {
    let colIdx = 0;
    colsHeight.forEach((height, idx) =>
      used[colIdx]
        ? (colIdx = idx)
        : idx >= newRow.length ||
          used[idx] ||
          (colIdx = colsHeight[colIdx] < height ? idx : colIdx)
    );
    orderedRow[colIdx] = newRow[i];
    used[colIdx] = true;
  }

  return orderedRow as T[];
}

function getImageRatio(imageData: ImageData) {
  return imageData.pixelHeight / imageData.pixelWidth;
}
