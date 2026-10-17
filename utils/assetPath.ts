export function assetPath(path: string): string {
  return (process.env.NEXT_PUBLIC_BASE_PATH || "") + path;
}
