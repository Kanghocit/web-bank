export const steps = [
  {
    n: "1",
    color: "text-[#9b4dff]",
    title: "Đăng ký thông tin",
    desc: "Điền form và cung cấp CCCD khi chuyên viên liên hệ.",
  },
  {
    n: "2",
    color: "text-[#e23d3d]",
    title: "Nhận cuộc gọi tư vấn",
    desc: "Chuyên viên xác nhận nhu cầu vay hoặc mở thẻ.",
  },
  {
    n: "3",
    color: "text-[#f0a202]",
    title: "Hỗ trợ hoàn thiện hồ sơ",
    desc: "Được hướng dẫn giấy tờ theo sản phẩm VPBank.",
  },
  {
    n: "4",
    color: "text-[#2f6fed]",
    title: "Ngân hàng thẩm định",
    desc: "Kết quả phê duyệt do VPBank quyết định.",
  },
] as const;

export const benefits = [
  {
    title: "Thủ tục vay",
    desc: "Hỗ trợ đăng ký online, chuyên viên đồng hành đến khi có phản hồi hồ sơ.",
    icon: "doc",
  },
  {
    title: "Khoản vay",
    desc: "Hạn mức tín chấp tham khảo lên đến 1 tỷ đồng, tùy hồ sơ thực tế.",
    icon: "hand",
  },
  {
    title: "Chứng minh thu nhập",
    desc: "Nhiều gói tín chấp không yêu cầu tài sản đảm bảo; giấy tờ theo chính sách ngân hàng.",
    icon: "income",
  },
  {
    title: "Lãi suất vay*",
    desc: "Tham khảo từ 0,8%/tháng theo công bố sản phẩm tín chấp VPBank, không phải cam kết.",
    icon: "rate",
  },
  {
    title: "Kỳ hạn vay",
    desc: "Thường từ 12 đến 60 tháng tùy gói vay và khả năng trả nợ.",
    icon: "term",
  },
] as const;

export const products = [
  {
    href: "/vay-tin-chap",
    title: "Vay tín chấp VPBank",
    desc: "Vay tiêu dùng không thế chấp tài sản, nhận tư vấn hạn mức và hồ sơ online.",
    points: [
      "Không cần tài sản đảm bảo",
      "Hạn mức tham khảo đến 200 triệu",
      "Kỳ hạn 12–60 tháng",
    ],
    cta: "Đăng ký vay tín chấp",
  },
  {
    href: "/the-tin-dung",
    title: "Mở thẻ tín dụng VPBank",
    desc: "Hỗ trợ đăng ký thẻ tín dụng để chi tiêu, trả góp và quản lý dòng tiền.",
    points: [
      "Đăng ký online, được gọi tư vấn",
      "Ưu đãi hoàn tiền / trả góp theo thẻ",
      "Phê duyệt do ngân hàng quyết định",
    ],
    cta: "Đăng ký mở thẻ",
  },
] as const;

export const faqs = [
  {
    q: "Trang này có phải website chính thức của VPBank?",
    a: "Không. Đây là trang tư vấn và hỗ trợ hồ sơ vay tín chấp / mở thẻ tín dụng VPBank. Chúng tôi không phải ngân hàng và không giải ngân. Phê duyệt, lãi suất, hạn mức và điều kiện do VPBank quyết định theo chính sách từng thời điểm. Website chính thức: vpbank.com.vn.",
  },
  {
    q: "Vay tín chấp VPBank là gì? Lãi suất và thời hạn ra sao?",
    a: "Vay tín chấp là khoản vay dựa trên uy tín, không thế chấp nhà xe. Lãi suất, phí và kỳ hạn phụ thuộc gói vay, điểm tín dụng và chính sách ngân hàng. Mức công bố tham khảo thường từ khoảng 1,2%/tháng (tương đương khoảng 14,4%/năm) và có thể cao hơn theo dư nợ giảm dần. Số tiền trả hàng tháng chỉ mang tính minh họa, không phải cam kết.",
  },
  {
    q: "Điều kiện đăng ký vay tín chấp hoặc mở thẻ?",
    a: "Thông thường cần là công dân Việt Nam, đủ tuổi theo quy định sản phẩm, có CCCD còn hạn và nguồn thu nhập / lịch sử tín dụng phù hợp. Điều kiện chi tiết do VPBank áp dụng khi thẩm định. Chuyên viên sẽ rà soát thông tin trước khi hướng dẫn nộp hồ sơ.",
  },
  {
    q: "Thủ tục hỗ trợ hồ sơ gồm những gì?",
    a: "Bạn điền form (họ tên, email, số điện thoại, nhu cầu). Chuyên viên gọi xác minh, hướng dẫn giấy tờ (CCCD, thông tin thu nhập nếu cần) và đồng hành khi ngân hàng yêu cầu bổ sung. Không thu phí “chắc chắn duyệt”.",
  },
  {
    q: "Đăng ký qua form mang lại lợi ích gì?",
    a: "Bạn được liên hệ nhanh, được tư vấn chọn vay tín chấp hoặc thẻ tín dụng phù hợp, và được hướng dẫn hồ sơ để giảm sai sót. Kết quả cuối cùng vẫn thuộc thẩm quyền VPBank.",
  },
  {
    q: "Các loại phí có thể phát sinh?",
    a: "Tùy sản phẩm, ngân hàng có thể áp dụng lãi, phí bảo hiểm khoản vay (nếu tham gia), phí chậm trả, phí tất toán trước hạn hoặc phí thường niên thẻ. Mọi phí được nêu trong hợp đồng / điều kiện sản phẩm của VPBank — hãy đọc kỹ trước khi ký.",
  },
  {
    q: "Nếu thanh toán chậm hoặc không thanh toán thì sao?",
    a: "Chậm trả có thể phát sinh lãi phạt, ảnh hưởng CIC và quyền đòi nợ theo hợp đồng. Nếu khó khăn tài chính, hãy chủ động trao đổi với ngân hàng. Trang hỗ trợ này không can thiệp vào việc thu hồi nợ.",
  },
  {
    q: "Mở thẻ tín dụng VPBank cần gì?",
    a: "Thường cần CCCD, thông tin cá nhân và điều kiện thu nhập theo từng dòng thẻ. Hạn mức thẻ do ngân hàng cấp sau thẩm định. Chúng tôi hỗ trợ đăng ký và giải thích quyền lợi thẻ, không cam kết hạn mức.",
  },
] as const;

export const homeFaqs = faqs.slice(0, 5);

export const testimonials = [
  {
    name: "Anh Minh Tuấn",
    city: "Hà Nội",
    quote:
      "Tôi được gọi lại trong ngày, hướng dẫn giấy tờ rõ ràng. Hồ sơ vay tín chấp được ngân hàng phản hồi nhanh hơn tôi nghĩ.",
    initial: "M",
  },
  {
    name: "Chị Thu Hà",
    city: "Hồ Chí Minh",
    quote:
      "Cần mở thẻ để trả góp, được tư vấn loại thẻ phù hợp và checklist giấy tờ. Quy trình online tiện, không phải đi lại nhiều.",
    initial: "H",
  },
  {
    name: "Anh Quang Huy",
    city: "Đà Nẵng",
    quote:
      "Muốn vay không thế chấp nhà. Được giải thích lãi, kỳ hạn và rủi ro chậm trả trước khi nộp hồ sơ — rất minh bạch.",
    initial: "Q",
  },
] as const;

export const loanPage = {
  h1: "Vay tín chấp VPBank online không thế chấp tài sản",
  intro:
    "Vay tín chấp VPBank giúp bạn bổ sung tiền mặt cho tiêu dùng, sửa nhà, học phí hoặc xoay vốn ngắn hạn mà không phải thế chấp nhà, xe. Trang này hỗ trợ bạn đăng ký tư vấn, hoàn thiện hồ sơ và theo dõi phản hồi từ ngân hàng.",
};

export const cardPage = {
  h1: "Mở thẻ tín dụng VPBank — đăng ký tư vấn online",
  intro:
    "Thẻ tín dụng VPBank hỗ trợ chi tiêu, rút tiền theo hạn mức được cấp và trả góp tại đơn vị chấp nhận thẻ. Chúng tôi hỗ trợ bạn chọn hướng đăng ký phù hợp và chuẩn bị hồ sơ; hạn mức và loại thẻ do VPBank phê duyệt.",
};
