export function convertToTitle(str: string) {
  const val: string = str.charAt(0).toUpperCase() + str.slice(1);
  let outputVal = "";

  for (let i = 0; i < val.length; i++) {
    if (i !== 0 && val[i] === val[i]?.toUpperCase()) {
      outputVal += " " + val[i];
    } else {
      outputVal += val[i];
    }
  }
  return outputVal;
}
