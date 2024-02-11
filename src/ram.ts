export type RamAddress = {
  address: number;
  length: number;
  data: string;
}

export const getRamText = (entry: RamAddress): string => {
  return (
    `**Address:** ${entry.address.toString(16).toUpperCase()}  \n` +
    `**Length:** ${entry.length}  \n\n` + entry.data
  );
}

export const inAddressRange = (entry: RamAddress, value: number, mask: number) => {
  const start = entry.address & mask;
  const end = start + entry.length - 1;

  // Did we carry beyond the mask? Just use the mask instead
  if (end > mask) {
    return start <= value && mask >= value
  }

  return start <= value && end >= value
}