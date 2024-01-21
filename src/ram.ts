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