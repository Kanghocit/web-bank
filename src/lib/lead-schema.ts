import { z } from "zod";
import { digitsOnly } from "@/lib/format";

export const productValues = ["vay-tin-chap", "the-tin-dung", "ca-hai"] as const;
export type ProductValue = (typeof productValues)[number];

export const incomeValues = [
  "luong-chuyen-khoan",
  "luong-tien-mat",
  "tu-kinh-doanh",
  "cho-thue",
  "khac",
] as const;

export type IncomeValue = (typeof incomeValues)[number];

export const productLabels: Record<ProductValue, string> = {
  "vay-tin-chap": "Vay tín chấp",
  "the-tin-dung": "Mở thẻ tín dụng",
  "ca-hai": "Cả hai",
};

export const incomeLabels: Record<IncomeValue, string> = {
  "luong-chuyen-khoan": "Lương chuyển khoản",
  "luong-tien-mat": "Lương tiền mặt",
  "tu-kinh-doanh": "Tự kinh doanh",
  "cho-thue": "Cho thuê / đầu tư",
  khac: "Khác",
};

export function labelProduct(value?: string) {
  if (!value) return "";
  return productLabels[value as ProductValue] ?? value;
}

export function labelIncome(value?: string) {
  if (!value) return "";
  return incomeLabels[value as IncomeValue] ?? value;
}

const vnPhone = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

export const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Vui lòng nhập họ tên")
    .max(80, "Họ tên quá dài"),
  email: z
    .string()
    .trim()
    .max(120)
    .default("")
    .refine((value) => value === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: "Email không hợp lệ",
    }),
  phone: z
    .string()
    .transform((value) => value.trim().replace(/\s+/g, ""))
    .pipe(z.string().regex(vnPhone, "Số điện thoại Việt Nam không hợp lệ")),
  nationality: z.string().trim().max(60).default(""),
  product: z.union([z.enum(productValues), z.literal("")]).default(""),
  loanAmount: z
    .string()
    .default("")
    .transform((value) => digitsOnly(value).slice(0, 15)),
  incomeType: z.union([z.enum(incomeValues), z.literal("")]).default(""),
  consent: z.boolean().optional().default(false),
  website: z.string().max(0).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;
