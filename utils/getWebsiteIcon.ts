export function getWebsiteIcon(url: string): string {
  const getIconApiUrl = "https://api.iowen.cn/favicon/";
  return getIconApiUrl + new URL(url).host + ".png";
}
