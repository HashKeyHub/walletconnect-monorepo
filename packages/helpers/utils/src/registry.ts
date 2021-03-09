import { IAppEntry, IAppRegistry, IMobileRegistryEntry } from "@walletconnect/types";

// TODO: needs to be changed before release
const API_URL = "https://walletconnect-website-next-elrypto1.vercel.app/api";

export function getWalletRegistryUrl(): string {
  return API_URL + "/registry/wallets";
}

export function getAppRegistryUrl(): string {
  return API_URL + "/registry/dapps";
}

export function getAppLogoUrl(id): string {
  return API_URL + "/logo/" + id;
}

export function formatMobileRegistryEntry(entry: IAppEntry): IMobileRegistryEntry {
  return {
    color: entry.metadata.colors.primary || "",
    deepLink: entry.mobile.native || "",
    logo: entry.id ? getAppLogoUrl(entry.id) : "",
    name: entry.name || "",
    shortName: entry.metadata.shortName || "",
    universalLink: entry.mobile.universal || "",
  };
}

export function formatMobileRegistry(registry: IAppRegistry): IMobileRegistryEntry[] {
  return Object.values<any>(registry)
    .filter((entry) => !!entry.mobile.universal || !!entry.mobile.native)
    .map(formatMobileRegistryEntry);
}
