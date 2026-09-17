import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/vay-tin-chap",
    "/the-tin-dung",
    "/cau-hoi-thuong-gap",
    "/lien-he",
    "/chinh-sach-bao-mat",
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("chinh-sach") ? 0.4 : 0.8,
  }));
}
