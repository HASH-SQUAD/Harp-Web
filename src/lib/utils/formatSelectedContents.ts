interface Content {
  id: number;
  state: boolean;
  text: string;
}

export const formatSelectedContents = (selectedContents: Content[]) => {
  const data = selectedContents
    .filter((item: any) => item.state)
    .map((item: any) => item.text)
    .join(', ');

  return data;
};
