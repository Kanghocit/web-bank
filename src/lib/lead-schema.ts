import { z } from "zod";

export const productValues = ["vay-tin-chap", "the-tin-dung", "ca-hai"] as const;
export type ProductValue = (typeof productValues)[number];

export const incomeValues = [
  "luong-chuyen-khoan",
  "luong-tien-mat",
  "tu-kinh-doanh",
  "cho-thue",
  "khac",
] as const;

export const productLabels: Record<ProductValue, string> = {
  "vay-tin-chap": "Vay tín chấp",
  "the-tin-dung": "Mở thẻ tín dụng",
  "ca-hai": "Cả hai",
};

export const incomeLabels: Record<(typeof incomeValues)[number], string> = {
  "luong-chuyen-khoan": "Lương chuyển khoản",
  "luong-tien-mat": "Lương tiền mặt",
  "tu-kinh-doanh": "Tự kinh doanh",
  "cho-thue": "Cho thuê / đầu tư",
  khac: "Khác",
};

const vnPhone = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

export const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Vui lòng nhập họ tên")
    .max(80, "Họ tên quá dài"),
  email: z.string().trim().email("Email không hợp lệ").max(120),
  phone: z
    .string()
    .transform((value) => value.trim().replace(/\s+/g, ""))
    .pipe(z.string().regex(vnPhone, "Số điện thoại Việt Nam không hợp lệ")),
  nationality: z.string().trim().min(2).max(60).default("Việt Nam"),
  product: z.enum(productValues),
  loanAmount: z.string().trim().max(20).optional().default(""),
  incomeType: z.enum(incomeValues),
  consent: z.boolean().refine((value) => value === true, {
    message: "Bạn cần đồng ý với chính sách bảo mật",
  }),
  website: z.string().max(0).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;
