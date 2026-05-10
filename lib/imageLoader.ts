export const imageLoader = ({ src, width }: { src: string; width: number }) => {
  const url = new URL(src);
  url.searchParams.set("f", "auto");
  url.searchParams.set("q", "auto");
  url.searchParams.set("w", width.toString());
  url.searchParams.set("dpr", "auto");
  return url.toString();
};
