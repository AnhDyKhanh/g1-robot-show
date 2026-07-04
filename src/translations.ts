import inIndustryRobot from "@/assets/images/in-industry-img.webp";
import inServiceRobot from "@/assets/images/services-robot-img.jpg";

export const TRANSLATIONS = {
  en: {
    // Header & Navigation
    navOverview: "Overview",
    navFeatures: "Features",
    navSpecifications: "Specifications",
    navGallery: "Gallery",
    navFaq: "FAQ",
    btnConfigure: "Order Now",
    toggleLanguage: "VI",
    brandModel: "G1 Humanoid",

    // Hero Section
    heroBadge: "Now Accepting Reservations",
    heroTitlePart1: "Unitree G1",
    heroTitlePart2: "The Future Moves Like You",
    heroDescription: "The G1 is an ultra-portable, foldable humanoid platform featuring 43 degrees of freedom, tactile dexterous manipulation, and advanced reinforcement learning AI. Starting at $16,000 USD.",
    btnReserve: "Configure & Reserve",
    btnChatAdvisor: "Consult AI Specialist",
    metricHeight: "Operational Height",
    metricHeightDesc: "690 mm folded size",
    metricSensing: "Sensing System",
    metricSensingDesc: "Dual depth cameras",
    metricWeight: "Platform Weight",
    metricWeightDesc: "Includes 2.5hr hot-swap battery",
    metricDof: "Degrees of Freedom",
    metricDofDesc: "Full articulation per arm/legs",
    metricCert: "FCC, CE, & UL certified hardware ready for shipment.",
    metricTitle: "Physical Metrics Specs",
    metricVersion: "v1.0 Production",

    // Precision Engineering (Features)
    featuresBadge: "Precision Engineering",
    featuresTitle: "Sensing and Articulation Redefined",
    featuresDesc: "Built to overcome the classical limitations of bipedal robotics. G1 features proprietary high-torque actuators, complex joint architectures, and modular sub-systems.",
    featuresConsult: "Consult Specialization",

    // Adaptive Capabilities (Applications)
    appsBadge: "Adaptive Capabilities",
    appsTitle: "Boundless Industrial & Service Applications",
    appsDesc: "Seamlessly integrated into warehouse routines or customer-facing operations. G1 shifts modalities instantly based on SDK directives.",
    appsSubDesc: "Equipped with complex path planning algorithms and spatial sensing maps. G1 processes and completes these tasks safely around humans, minimizing logistics friction.",
    btnModelSelection: "Model Selection",
    btnTechInquiry: "Technical Inquiry",

    // Banner Configurator Promos
    bannerBadge: "Interactive Hardware Reservation",
    bannerTitle: "Configure Your G1 Humanoid Today",
    bannerDesc: "Step into the humanoid pre-order experience. Select battery packs, flight cases, enterprise SLAs, and advanced tactile hands to see your customized pricing in real-time.",
    btnLaunchConfigurator: "Launch G1 Configurator",

    // Specifications
    specsBadge: "Technical Specifications",
    specsTitle: "Platform Parameter Matrix",

    // Gallery
    galleryBadge: "Visual Blueprint",
    galleryTitle: "Inspect G1 Closely",
    galleryDesc: "Click any asset below to trigger the interactive lightbox viewer and study bipedal joint systems and sensory blueprints.",

    // Comparison Table
    compBadge: "Humanoid Comparison",
    compTitle: "Why the G1 Leads Bipedal Robotics",
    compColFeature: "Structural Feature",
    compColG1: "Unitree G1",
    compColTraditional: "Traditional Bipedal",

    // Testimonials
    testBadge: "Expert Endorsements",
    testTitle: "Industry and Academic Acclaim",

    // FAQs
    faqBadge: "Support Center",
    faqTitle: "Frequently Asked Questions",

    // Newsletter
    newsBadge: "Robotics Dispatch",
    newsTitle: "Humanoid Robotics News Dispatch",
    newsDesc: "Stay updated on software version additions, control algorithms SDK releases, and logistics pipelines of the G1 series.",
    newsPlaceholder: "Enter your enterprise email",
    newsBtnSubscribe: "Subscribe",
    newsBtnSubscribing: "Subscribing...",

    // Footer
    footerRights: "© {year} Unitree Humanoid Robotics Portal. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerDoc: "Documentation SDK",
    footerDisclaimer: "Legal Disclaimer: This application is a certified product showcase portal for Google AI Studio deployment. The pricing, ordering configurations, and database reservations provided represent high-fidelity dynamic models of standard robotics specifications.",

    // Floating Action Button
    chatFabLabel: "Consult G1 AI Advisor",

    // Configurator Modal
    configModalPreorder: "Unitree Humanoid Pre-Order",
    configModalTitle: "Configure G1 Humanoid",
    configModalStep1: "1. Custom Hardware",
    configModalStep2: "2. Delivery Logistics",
    configModalPlatform: "Base Platform Selection",
    configModalStandardTitle: "Standard Edition",
    configModalStandardDesc: "Ideal for general operations, concierge, lightweight research pipelines.",
    configModalDeveloperTitle: "Developer Edition",
    configModalDeveloperDesc: "Secondary SDK access, high-power NVIDIA Orin compute, programmable C++/Python.",
    configModalAddonsLabel: "Optional Add-ons & Hardware Upgrades",
    configModalHandsTitle: "Advanced Dexterous Hands",
    configModalHandsDesc: "Integrated tactile feedback sensors with multiple degrees of freedom",
    configModalBatteryTitle: "Extra Hot-Swappable Battery Pack",
    configModalBatteryDesc: "9000mAh capacity to keep operations active during swap transitions",
    configModalCaseTitle: "Heavy-Duty Protective Flight Case",
    configModalCaseDesc: "IP67 rugged hard-case with custom shockproof G1 internal foam molds",
    configModalSupportTierLabel: "Technical Service Tier",
    configModalSupportStdTitle: "Standard Support",
    configModalSupportStdDesc: "Email support, documentation database, standard parts replacement.",
    configModalSupportStdBadge: "Included",
    configModalSupportPremTitle: "24/7 Enterprise SLA",
    configModalSupportPremDesc: "2-hour responsive support, on-demand field tech support, replacement loans.",
    configModalSupportPremPrice: "+$2,500 / year",
    configModalProceed: "Proceed to Delivery Logistics",
    configModalLogisticsMsgTitle: "Interactive Pre-Order Protocol",
    configModalLogisticsMsgDesc: "Your configured robot details are locked in. Fill out delivery coordinates below to file your reservation onto our servers. No financial information is stored.",
    configModalFullName: "Full Name",
    configModalEmail: "Email Address",
    configModalCompany: "Organization / Company",
    configModalCompanyOpt: "TechCorp Labs (Optional)",
    configModalCountry: "Destination Country",
    configModalUseCase: "Operational Use Case",
    configModalUseCaseOption1: "Research & Education",
    configModalUseCaseOption2: "Concierge & Corporate Hospitality",
    configModalUseCaseOption3: "Industrial Manufacturing & Logistics",
    configModalUseCaseOption4: "Household & Personal Assistance",
    configModalUseCaseOption5: "Software SDK Development",
    configModalBack: "Back",
    configModalSubmitBtn: "Submit Pre-Order",
    configModalSubmittingBtn: "Transmitting G1 Order...",
    configModalRequiredError: "Please fill out all required customer information.",
    configModalSuccessTitle: "Order Confirmed!",
    configModalSuccessDesc: "Your custom Unitree G1 configuration has been stored on our local server. Here is your digital reservation summary.",
    configModalSuccessId: "Reservation ID",
    configModalSuccessCustomer: "Customer",
    configModalSuccessDeployment: "Deployment Target",
    configModalSuccessHardware: "Configured Hardware",
    configModalSuccessBaseStandard: "Unitree G1 Standard Base",
    configModalSuccessBaseDeveloper: "Unitree G1 Developer Base",
    configModalSuccessTactileHands: "Advanced Tactile Hands",
    configModalSuccessSpareBattery: "Extra Hot-Swap Battery Pack",
    configModalSuccessFlightCase: "Rugged Protective Flight Case",
    configModalSuccessPremiumSupport: "Enterprise SLA Premium Service",
    configModalSuccessTotalDue: "Estimated Total Due",
    configModalSuccessConfigureAnother: "Configure Another G1",
    configModalSuccessReturn: "Return to Portal",
    configModalLiveEstimate: "Live Estimate Details",
    configModalLivePlatform: "G1 Platform",
    configModalLiveUpgrades: "Selected Upgrades",
    configModalLiveSubtotal: "Subtotal",
    configModalLiveLogistics: "Est. Logistics & Freight",
    configModalLiveCost: "Estimated Reserve Cost",
    configModalLiveDisclaimer: "Pre-orders are reservations and subject to regulatory confirmation. Deliveries commence dynamic shipping inside 90 days.",

    // AI Chatbot
    chatHeaderTitle: "G1 Technical Advisor",
    chatActiveBadge: "Gemini Active",
    chatPlaceholder: "Ask about sensors, specifications...",
    chatSuggestedLabel: "Suggested Topics",
    chatWelcomeMsg: "Hi there! I'm your Unitree G1 Specialist. Ask me anything about the robot's hardware, mobility, sensory configuration, or the interactive pre-order builder!",
    chatWelcomeText: "Hi there! I'm your Unitree G1 Specialist. Ask me anything about the robot's hardware, mobility, sensory configuration, or the interactive pre-order builder!",
    chatSimulatedHeading: "The AI Assistant is currently in preview mode. To chat with the live Gemini model, please configure the `GEMINI_API_KEY` in the **Settings > Secrets** panel in AI Studio.\n\nHere is a simulated response based on the G1 specifications:\n\n*The Unitree G1 is our state-of-the-art 127cm humanoid robot featuring 43 degrees of freedom, an Intel Core i7 / NVIDIA Orin processor, and a standard 2.5-hour hot-swappable battery.*",
    chatErrorContact: "Could not establish contact with AI specialist server.",
    chatErrorRetry: "Retry last transmission",

    // Lightbox
    lightboxTitle: "Image Description / Spec Context"
  },
  vi: {
    // Header & Navigation
    navOverview: "Tổng quan",
    navFeatures: "Tính năng",
    navSpecifications: "Thông số kỹ thuật",
    navGallery: "Thư viện",
    navFaq: "Hỏi đáp",
    btnConfigure: "Đặt hàng Ngay",
    toggleLanguage: "EN",
    brandModel: "Robot G1",

    // Hero Section
    heroBadge: "Đang mở cổng đặt chỗ trước",
    heroTitlePart1: "Unitree G1",
    heroTitlePart2: "Tương lai chuyển động giống như bạn",
    heroDescription: "G1 là một nền tảng robot hình người siêu di động, có khả năng gập gọn, sở hữu 43 bậc tự do (D.O.F), đôi tay khéo léo phản hồi xúc giác và trí tuệ nhân tạo học tăng cường tiên tiến. Giá khởi điểm từ 16.000 USD.",
    btnReserve: "Cấu hình & Đặt chỗ",
    btnChatAdvisor: "Tham khảo Chuyên gia AI",
    metricHeight: "Chiều cao Hoạt động",
    metricHeightDesc: "Cao 690 mm khi gập lại",
    metricSensing: "Hệ thống Cảm biến",
    metricSensingDesc: "Camera độ sâu kép",
    metricWeight: "Trọng lượng Nền tảng",
    metricWeightDesc: "Gồm pin thay thế nóng chạy 2.5 giờ",
    metricDof: "Bậc Tự do (D.O.F)",
    metricDofDesc: "Khớp chuyển động toàn phần cho tay/chân",
    metricCert: "Phần cứng được chứng nhận FCC, CE & UL sẵn sàng xuất xưởng.",
    metricTitle: "Thông số Vật lý",
    metricVersion: "Sản xuất v1.0",

    // Precision Engineering (Features)
    featuresBadge: "Kỹ thuật Chính xác",
    featuresTitle: "Tái định nghĩa Cảm biến và Khớp chuyển động",
    featuresDesc: "Được chế tạo để vượt qua các giới hạn cổ điển của robot hai chân. G1 sở hữu các động cơ mô-men xoắn cao độc quyền, cấu trúc khớp phức tạp và các phân hệ mô-đun.",
    featuresConsult: "Tìm hiểu Chuyên sâu",

    // Adaptive Capabilities (Applications)
    appsBadge: "Khả năng Thích ứng",
    appsTitle: "Ứng dụng Không giới hạn trong Công nghiệp & Dịch vụ",
    appsDesc: "Tích hợp liền mạch vào các quy trình nhà kho hoặc các hoạt động đối ngoại với khách hàng. G1 chuyển đổi chế độ tức thì dựa trên chỉ thị từ bộ SDK.",
    appsSubDesc: "Trang bị thuật toán lập kế hoạch quỹ đạo phức tạp và bản đồ cảm nhận không gian trực quan. G1 xử lý và hoàn thành các nhiệm vụ này một cách an toàn xung quanh con người, giảm thiểu rủi ro vận hành.",
    btnModelSelection: "Lựa chọn Phiên bản",
    btnTechInquiry: "Yêu cầu Kỹ thuật",

    // Banner Configurator Promos
    bannerBadge: "Đặt chỗ Phần cứng Tương tác",
    bannerTitle: "Cấu hình Robot G1 của Bạn Ngay Hôm Nay",
    bannerDesc: "Trải nghiệm quy trình đặt hàng robot trực quan. Tùy chọn bộ pin dự phòng, hộp bảo vệ chuyên dụng, dịch vụ hỗ trợ cao cấp và bàn tay khéo léo để xem giá tùy chỉnh theo thời gian thực.",
    btnLaunchConfigurator: "Mở Bộ cấu hình G1",

    // Specifications
    specsBadge: "Thông số Kỹ thuật",
    specsTitle: "Ma trận Tham số Nền tảng",

    // Gallery
    galleryBadge: "Bản vẽ Trực quan",
    galleryTitle: "Quan sát G1 Cận cảnh",
    galleryDesc: "Nhấp vào bất kỳ hình ảnh nào bên dưới để mở chế độ xem hộp đèn tương tác (lightbox) và nghiên cứu kỹ các hệ thống khớp bipedal và cảm biến.",

    // Comparison Table
    compBadge: "So sánh Robot hình người",
    compTitle: "Tại sao G1 Dẫn đầu Công nghệ Robot Hai chân",
    compColFeature: "Đặc tính Cấu trúc",
    compColG1: "Unitree G1",
    compColTraditional: "Robot Hai chân Truyền thống",

    // Testimonials
    testBadge: "Đánh giá từ Chuyên gia",
    testTitle: "Sự Công nhận từ Giới Công nghệ & Học thuật",

    // FAQs
    faqBadge: "Trung tâm Hỗ trợ",
    faqTitle: "Câu hỏi Thường gặp",

    // Newsletter
    newsBadge: "Bản tin Robot",
    newsTitle: "Đăng ký Nhận Bản tin Công nghệ",
    newsDesc: "Luôn cập nhật về các phiên bản phần mềm mới, các bản phát hành kiểm soát thuật toán điều khiển SDK và tiến độ hậu cần của dòng G1.",
    newsPlaceholder: "Nhập email doanh nghiệp của bạn",
    newsBtnSubscribe: "Đăng ký",
    newsBtnSubscribing: "Đang xử lý...",

    // Footer
    footerRights: "© {year} Cổng thông tin Robot Unitree. Bảo lưu mọi quyền.",
    footerPrivacy: "Chính sách Bảo mật",
    footerTerms: "Điều khoản Dịch vụ",
    footerDoc: "Bộ SDK Tài liệu",
    footerDisclaimer: "Tuyên bố miễn trừ trách nhiệm: Ứng dụng này là cổng giới thiệu sản phẩm có độ trung thực cao phục vụ thử nghiệm trên Google AI Studio. Tất cả các mức giá, cấu hình đặt hàng và lưu trữ hồ sơ đặt trước chỉ mang tính chất mô phỏng.",

    // Floating Action Button
    chatFabLabel: "Trò chuyện với Cố vấn AI",

    // Configurator Modal
    configModalPreorder: "Đặt trước Robot Unitree",
    configModalTitle: "Cấu hình Robot G1",
    configModalStep1: "1. Thiết bị Phần cứng",
    configModalStep2: "2. Thông tin Giao nhận",
    configModalPlatform: "Lựa chọn Nền tảng Cơ bản",
    configModalStandardTitle: "Phiên bản Standard (Tiêu chuẩn)",
    configModalStandardDesc: "Phù hợp cho các tác vụ thông thường, lễ tân đón khách, và các nghiên cứu khoa học cơ bản.",
    configModalDeveloperTitle: "Phiên bản Developer (Phát triển)",
    configModalDeveloperDesc: "Được cấp quyền truy cập bộ SDK thứ cấp, trang bị siêu máy tính NVIDIA Orin, lập trình toàn phần với C++/Python.",
    configModalAddonsLabel: "Phụ kiện Tùy chọn & Nâng cấp Phần cứng",
    configModalHandsTitle: "Đôi tay Xúc giác Siêu khéo léo",
    configModalHandsDesc: "Tích hợp cảm biến phản hồi xúc giác tiên tiến với nhiều bậc tự do chuyển động",
    configModalBatteryTitle: "Bộ pin Thay nóng Dự phòng",
    configModalBatteryDesc: "Dung lượng 9000mAh giúp duy trì hoạt động liên tục không gián đoạn trong quá trình thay thế",
    configModalCaseTitle: "Hộp Flight Case Bảo vệ Chuyên dụng",
    configModalCaseDesc: "Hộp cứng bền bỉ đạt tiêu chuẩn IP67 với các khuôn bọt chống sốc G1 đúc sẵn",
    configModalSupportTierLabel: "Gói Dịch vụ Hỗ trợ Kỹ thuật",
    configModalSupportStdTitle: "Hỗ trợ Tiêu chuẩn",
    configModalSupportStdDesc: "Hỗ trợ qua Email, truy cập kho tài nguyên hướng dẫn trực tuyến, thay thế linh kiện tiêu chuẩn.",
    configModalSupportStdBadge: "Đã bao gồm",
    configModalSupportPremTitle: "Cam kết Dịch vụ Doanh nghiệp 24/7 (SLA)",
    configModalSupportPremDesc: "Thời gian phản hồi trong vòng 2 giờ, kỹ thuật viên hỗ trợ tận nơi theo yêu cầu, cho mượn robot thay thế.",
    configModalSupportPremPrice: "+$2,500 / năm",
    configModalProceed: "Tiếp tục sang Thông tin Giao nhận",
    configModalLogisticsMsgTitle: "Giao thức Đặt trước Tương tác",
    configModalLogisticsMsgDesc: "Chi tiết cấu hình robot của bạn đã được ghi nhận. Hãy điền tọa độ giao hàng bên dưới để lưu thông tin đặt chỗ lên máy chủ. Không có thông tin tài chính thực tế nào được lưu trữ.",
    configModalFullName: "Họ và Tên",
    configModalEmail: "Địa chỉ Email",
    configModalCompany: "Cơ quan / Doanh nghiệp",
    configModalCompanyOpt: "Ví dụ: TechCorp Labs (Không bắt buộc)",
    configModalCountry: "Quốc gia Giao hàng",
    configModalUseCase: "Mục đích Sử dụng Thực tế",
    configModalUseCaseOption1: "Nghiên cứu & Giáo dục",
    configModalUseCaseOption2: "Lễ tân & Chăm sóc Khách hàng Doanh nghiệp",
    configModalUseCaseOption3: "Sản xuất Công nghiệp & Logistics",
    configModalUseCaseOption4: "Trợ lý Gia đình & Đời sống Cá nhân",
    configModalUseCaseOption5: "Phát triển Phần mềm / SDK Doanh nghiệp",
    configModalBack: "Quay lại",
    configModalSubmitBtn: "Gửi Đơn Đặt trước",
    configModalSubmittingBtn: "Đang truyền tải dữ liệu đặt hàng G1...",
    configModalRequiredError: "Vui lòng nhập đầy đủ các thông tin bắt buộc.",
    configModalSuccessTitle: "Đơn Đặt trước Đã xác nhận!",
    configModalSuccessDesc: "Cấu hình Unitree G1 tùy chọn của bạn đã được lưu trữ thành công trên máy chủ cục bộ. Dưới đây là bản tóm tắt đặt hàng kỹ thuật số của bạn.",
    configModalSuccessId: "Mã Đặt chỗ",
    configModalSuccessCustomer: "Khách hàng",
    configModalSuccessDeployment: "Điểm đến Giao hàng",
    configModalSuccessHardware: "Phần cứng Đã cấu hình",
    configModalSuccessBaseStandard: "Robot Unitree G1 Standard Base",
    configModalSuccessBaseDeveloper: "Robot Unitree G1 Developer Base",
    configModalSuccessTactileHands: "Đôi tay khéo léo Phản hồi Xúc giác",
    configModalSuccessSpareBattery: "Bộ pin thay thế nóng dự phòng",
    configModalSuccessFlightCase: "Hộp bảo vệ Flight Case chống va đập",
    configModalSuccessPremiumSupport: "Cam kết hỗ trợ doanh nghiệp SLA 24/7",
    configModalSuccessTotalDue: "Chi phí Dự kiến",
    configModalSuccessConfigureAnother: "Cấu hình thêm Robot khác",
    configModalSuccessReturn: "Quay lại Trang chủ",
    configModalLiveEstimate: "Chi tiết Ước tính Thời gian thực",
    configModalLivePlatform: "Nền tảng G1",
    configModalLiveUpgrades: "Nâng cấp Đã chọn",
    configModalLiveSubtotal: "Tổng phụ",
    configModalLiveLogistics: "Phí vận chuyển & Hậu cần ước tính",
    configModalLiveCost: "Chi phí Đặt chỗ Dự kiến",
    configModalLiveDisclaimer: "Đơn đặt trước là đặt giữ chỗ và có thể thay đổi dựa trên phê duyệt pháp lý. Thời gian giao hàng bắt đầu trong vòng 90 ngày kể từ khi thanh toán chính thức.",

    // AI Chatbot
    chatHeaderTitle: "Cố vấn Kỹ thuật G1",
    chatActiveBadge: "Gemini Hoạt động",
    chatPlaceholder: "Hỏi về cảm biến, thông số khớp...",
    chatSuggestedLabel: "Chủ đề Gợi ý",
    chatWelcomeMsg: "Xin chào! Tôi là Chuyên gia Kỹ thuật dòng Robot Unitree G1. Đừng ngần ngại hỏi tôi bất cứ điều gì về phần cứng, khả năng vận hành bipedal, cấu hình cảm biến hoặc cách xây dựng đơn đặt trước tùy chỉnh của bạn nhé!",
    chatWelcomeText: "Xin chào! Tôi là Chuyên gia Kỹ thuật dòng Robot Unitree G1. Đừng ngần ngại hỏi tôi bất cứ điều gì về phần cứng, khả năng vận hành bipedal, cấu hình cảm biến hoặc cách xây dựng đơn đặt trước tùy chỉnh của bạn nhé!",
    chatSimulatedHeading: "Trợ lý AI hiện đang ở chế độ xem trước. Để trò chuyện trực tuyến với mô hình Gemini thực tế, vui lòng định cấu hình `GEMINI_API_KEY` trong bảng **Settings > Secrets** của AI Studio.\n\nDưới đây là câu trả lời mô phỏng dựa trên các thông số kỹ thuật của G1:\n\n*Unitree G1 là robot hình người cao 127cm hiện đại nhất của chúng tôi, sở hữu 43 bậc tự do, bộ xử lý Intel Core i7 / NVIDIA Orin và pin thay nóng tiêu chuẩn hoạt động trong 2.5 giờ.*",
    chatErrorContact: "Không thể kết nối với máy chủ chuyên gia AI.",
    chatErrorRetry: "Gửi lại tin nhắn vừa rồi",

    // Lightbox
    lightboxTitle: "Mô tả Chi tiết / Bối cảnh Thiết kế"
  }
};

// Data localizers based on active language
export const getLocalizedFeatures = (lang: 'en' | 'vi') => {
  if (lang === 'vi') {
    return [
      {
        id: 'walking',
        title: 'Di chuyển Khéo léo',
        description: 'Các thuật toán bipedal tự cân bằng thông minh giúp leo cầu thang và vượt địa hình không bằng phẳng mượt mà.',
        iconName: 'Footprints'
      },
      {
        id: 'ai-motion',
        title: 'Kiểm soát Chuyển động AI',
        description: 'Học tăng cường sâu cho phép tự thích ứng thời gian thực với môi trường phức tạp và vận hành hướng nhiệm vụ.',
        iconName: 'Brain'
      },
      {
        id: 'actuators',
        title: 'Động cơ Mô-men xoắn cao',
        description: 'Các khớp nối sử dụng động cơ tùy chỉnh của Unitree, mang lại tỷ lệ mô-men xoắn trên trọng lượng hàng đầu thế giới.',
        iconName: 'Activity'
      },
      {
        id: 'hands',
        title: 'Đôi tay Khéo léo',
        description: 'Bàn tay nhiều ngón tiên tiến tích hợp cảm biến xúc giác để cầm nắm vật dụng tinh tế và công cụ phức tạp.',
        iconName: 'Hand'
      },
      {
        id: 'lightweight',
        title: 'Hợp kim Siêu nhẹ',
        description: 'Chất liệu hợp kim cao cấp hàng không vũ trụ đảm bảo khung sườn bền bỉ mà chỉ nặng vỏn vẹn 35kg.',
        iconName: 'Cpu'
      },
      {
        id: 'research',
        title: 'Nền tảng Nghiên cứu Mở',
        description: 'Bộ API và SDK lập trình toàn phần hỗ trợ tối ưu các quy trình nghiên cứu và phát triển robot chuyên sâu.',
        iconName: 'Code'
      }
    ];
  }
  return [
    {
      id: 'walking',
      title: 'Advanced Walking',
      description: 'Self-balancing algorithms that navigate uneven terrain and stairs with human-like fluidity.',
      iconName: 'Footprints'
    },
    {
      id: 'ai-motion',
      title: 'AI Motion Control',
      description: 'Deep reinforcement learning enables real-time adaptation to complex environments and task-oriented motion.',
      iconName: 'Brain'
    },
    {
      id: 'actuators',
      title: 'High-Torque Actuators',
      description: 'Joints powered by custom Unitree actuators, delivering industry-leading torque-to-weight ratios.',
      iconName: 'Activity'
    },
    {
      id: 'hands',
      title: 'Dexterous Manipulation',
      description: 'Advanced multi-fingered hands with tactile feedback for delicate handling and complex tool usage.',
      iconName: 'Hand'
    },
    {
      id: 'lightweight',
      title: 'Lightweight Alloy',
      description: 'Aerospace-grade materials ensure a durable yet exceptionally light 35kg total system weight.',
      iconName: 'Cpu'
    },
    {
      id: 'research',
      title: 'Open Research Platform',
      description: 'Fully programmable API and SDK support for advanced robotics research and development.',
      iconName: 'Code'
    }
  ];
};

export const getLocalizedApplications = (lang: 'en' | 'vi') => {
  if (lang === 'vi') {
    return [
      {
        id: 'precision',
        tag: 'CÔNG NGHIỆP',
        title: 'Vận hành Chính xác & Tự động',
        description: 'Thực hiện các tác vụ lặp đi lặp lại phức tạp trong nhà máy chế tạo và hậu cần mà không gặp mệt mỏi.',
        image: inIndustryRobot
      },
      {
        id: 'service',
        tag: 'DỊCH VỤ',
        title: 'Tiêu chuẩn Dịch vụ Hoàn hảo',
        description: 'Nâng tầm dịch vụ khách sạn và lễ tân doanh nghiệp với tương tác thông minh như người thật.',
        image: inServiceRobot
      }
    ];
  }
  return [
    {
      id: 'precision',
      tag: 'INDUSTRIAL',
      title: 'Automated Precision',
      description: 'Performing complex repetitive tasks in manufacturing and logistics with zero fatigue.',
      image: inIndustryRobot
    },
    {
      id: 'service',
      tag: 'SERVICE',
      title: 'Service Excellence',
      description: 'Enhancing hospitality and concierge services with intelligent human interaction.',
      image: inServiceRobot
    }
  ];
};

export const getLocalizedSpecs = (lang: 'en' | 'vi') => {
  if (lang === 'vi') {
    return [
      { label: 'Chiều cao', value: '1270 mm (Gập lại: 690 mm)' },
      { label: 'Tổng Trọng lượng', value: '35 kg (đã bao gồm Pin)' },
      { label: 'Bậc Tự do (D.O.F)', value: '43 (23 bậc mỗi Cánh tay + 3 bậc Đầu + 14 bậc Chân)' },
      { label: 'Tốc độ Tối đa', value: '2.5 m/s' },
      { label: 'Bộ vi xử lý', value: 'Intel® Core™ i7-1260P / NVIDIA Orin™' },
      { label: 'Hệ thống Cảm biến', value: '3D LiDAR + Camera độ sâu + IMU' }
    ];
  }
  return [
    { label: 'Height', value: '1270 mm (Folded: 690 mm)' },
    { label: 'Total Weight', value: '35 kg (inc. Battery)' },
    { label: 'Degrees of Freedom', value: '43 (23 per Arm + 3 Head + 14 Legs)' },
    { label: 'Top Speed', value: '2.5 m/s' },
    { label: 'Processor', value: 'Intel® Core™ i7-1260P / NVIDIA Orin™' },
    { label: 'Sensing', value: '3D LiDAR + Depth Camera + IMU' }
  ];
};

export const getLocalizedComparisons = (lang: 'en' | 'vi') => {
  if (lang === 'vi') {
    return [
      { feature: 'Khả năng di chuyển', g1: 'Dáng đi năng động giống người', traditional: 'Cứng nhắc, di chuyển bán tĩnh' },
      { feature: 'Tính di động', g1: '35kg / Thiết kế gấp gọn', traditional: 'Nặng trên 80kg / Khung cố định' },
      { feature: 'Trí thông minh', g1: 'Học tăng cường sâu học máy AI', traditional: 'Lập trình sẵn các chuỗi tuần tự' },
      { feature: 'Sức mạnh Khớp nối', g1: 'Tích hợp động cơ mô-men xoắn cao', traditional: 'Sử dụng hộp số thương mại lớn' }
    ];
  }
  return [
    { feature: 'Mobility', g1: 'Dynamic human-like stride', traditional: 'Stiff, quasi-static walking' },
    { feature: 'Portability', g1: '35kg / Foldable Design', traditional: '80kg+ / Fixed Frame' },
    { feature: 'Intelligence', g1: 'Reinforcement Learning AI', traditional: 'Pre-programmed sequences' },
    { feature: 'Hardware', g1: 'Integrated High-Torque Actuators', traditional: 'Commercial Gearboxes' }
  ];
};

export const getLocalizedReviews = (lang: 'en' | 'vi') => {
  if (lang === 'vi') {
    return [
      {
        id: 'r1',
        name: 'Tiến sĩ Elena Thorne',
        role: 'Trưởng phòng Nghiên cứu AI, TechCorp',
        rating: 5,
        comment: '"G1 đại diện cho một bước nhảy vọt đáng kinh ngạc về hiệu suất mô-men xoắn trên trọng lượng. Đây là robot hình người đầu tiên tôi thấy đủ nhanh nhẹn và an toàn để hoạt động trong các không gian sinh hoạt hàng ngày."',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZJ5uNX1WkOFtCQtPQ6jIEdDTXjK95vJu7827-DQNgzZEdk73KMwlk0aLW545vwpAdKxiFmFny16gWdy0Xq9IE7u4KKlnuX-eF8qqAWA4llho6u9DzLIp4Akk_84fCr_trAU9iOnRa5pJMtYeObLE-ScLRVaV0BP2b91sy4o2vItWQ97UMQgTihNBk1i_U9Q6odVqaOQ7s7DBNqAh39frkWCZ7lSLbNR-XrY1_ZI69cw60PFQs8NGPZVKW-IMjWrjyB8o_9nL9S4'
      },
      {
        id: 'r2',
        name: 'Marcus Vane',
        role: 'Biên tập viên, Tạp chí Future Robotics',
        rating: 5,
        comment: '"Đôi bàn tay khéo léo không có đối thủ. G1 cầm nắm các đồ vật dễ vỡ với một sự tinh tế tuyệt vời mà chúng tôi chưa từng thấy ở bất kỳ phân khúc giá nào trước đây."',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAhXKFS6xHLmVk0aJiL0HuxNY0wde7NRL2-8m_ue_H-6sE8P0VYGqQWx7Ps8bg7zUMmXW7g2aYTg2nhg2nKgPsqB5_EtUd9x7h_TgOMvZPoUKbv1ZgzlfUDMHw1L1AbmMDxmniE7ZuC-1GkF6wuw4EVIIZowPI13qWoM3b-Wr6ehG-ZawM-juOhG8cWRthdMWQhEMuYpRS76omeRNXklC33A__Pav5TWIxXc_rEaYR-QPhx8i31YccGIcjZtlgzwchqsGcimmtEAs'
      },
      {
        id: 'r3',
        name: 'Sarah Jenkins',
        role: 'Giám đốc Điều hành, OmniBots',
        rating: 5,
        comment: '"Unitree đã bình dân hóa hoạt động nghiên cứu robot hình người cao cấp. Thiết kế gập gọn đặc trưng của G1 là yếu tố thay đổi cuộc chơi cho việc triển khai thực địa."',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_nh1jonNvy2Jntfj1KbXq4Upb3FjLQug0QyN_IFGd8MMkAtTuZwNXs0kvWge8uAUky3SQzR_QDhw99ly8d3RPGuzl9EuwaLDy3cHdqisP_375pAtYjw-2bWY9fSNc4McZDSVqKzrbpaStCNQJcXrSihUJAIcM8x32YDTbpMldinofiTrRdb3xes_M2J5GXAVHjbBfRSa08s1ajPRHe32WL0OgaatT6xqwU2_2n4fbC0jscU0o8mHTeQeE3-OOpjn0jNBFepof43M'
      }
    ];
  }
  return [
    {
      id: 'r1',
      name: 'Dr. Elena Thorne',
      role: 'Head of AI Research, TechCorp',
      rating: 5,
      comment: '"The G1 represents a significant leap in torque-to-weight performance. It\'s the first humanoid I\'ve seen that feels truly agile enough for household applications."',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZJ5uNX1WkOFtCQtPQ6jIEdDTXjK95vJu7827-DQNgzZEdk73KMwlk0aLW545vwpAdKxiFmFny16gWdy0Xq9IE7u4KKlnuX-eF8qqAWA4llho6u9DzLIp4Akk_84fCr_trAU9iOnRa5pJMtYeObLE-ScLRVaV0BP2b91sy4o2vItWQ97UMQgTihNBk1i_U9Q6odVqaOQ7s7DBNqAh39frkWCZ7lSLbNR-XrY1_ZI69cw60PFQs8NGPZVKW-IMjWrjyB8o_9nL9S4'
    },
    {
      id: 'r2',
      name: 'Marcus Vane',
      role: 'Editor, Future Robotics',
      rating: 5,
      comment: '"Unmatched dexterous hands. The G1 handles objects with a delicacy that we haven\'t seen in this price range before."',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAhXKFS6xHLmVk0aJiL0HuxNY0wde7NRL2-8m_ue_H-6sE8P0VYGqQWx7Ps8bg7zUMmXW7g2aYTg2nhg2nKgPsqB5_EtUd9x7h_TgOMvZPoUKbv1ZgzlfUDMHw1L1AbmMDxmniE7ZuC-1GkF6wuw4EVIIZowPI13qWoM3b-Wr6ehG-ZawM-juOhG8cWRthdMWQhEMuYpRS76omeRNXklC33A__Pav5TWIxXc_rEaYR-QPhx8i31YccGIcjZtlgzwchqsGcimmtEAs'
    },
    {
      id: 'r3',
      name: 'Sarah Jenkins',
      role: 'CEO, OmniBots',
      rating: 5,
      comment: '"Unitree has democratized high-end humanoid research. G1\'s foldable design is a game-changer for field deployment."',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_nh1jonNvy2Jntfj1KbXq4Upb3FjLQug0QyN_IFGd8MMkAtTuZwNXs0kvWge8uAUky3SQzR_QDhw99ly8d3RPGuzl9EuwaLDy3cHdqisP_375pAtYjw-2bWY9fSNc4McZDSVqKzrbpaStCNQJcXrSihUJAIcM8x32YDTbpMldinofiTrRdb3xes_M2J5GXAVHjbBfRSa08s1ajPRHe32WL0OgaatT6xqwU2_2n4fbC0jscU0o8mHTeQeE3-OOpjn0jNBFepof43M'
    }
  ];
};

export const getLocalizedFaqs = (lang: 'en' | 'vi') => {
  if (lang === 'vi') {
    return [
      {
        id: 'faq1',
        question: 'Thời lượng pin hoạt động của G1 kéo dài bao lâu?',
        answer: 'Unitree G1 sở hữu thời lượng pin hoạt động tiêu chuẩn lên đến 2.5 giờ trong các tác vụ di chuyển và cầm nắm thông thường. Các khối pin đều hỗ trợ tháo tháo lắp/thay thế nóng (hot-swap), cho phép duy trì hoạt động xuyên suốt trong các môi trường công nghiệp hoặc phòng thí nghiệm nghiên cứu.'
      },
      {
        id: 'faq2',
        question: 'Robot có thể sử dụng cho hoạt động thương mại dịch vụ không?',
        answer: 'Hoàn toàn được. G1 được thiết kế là một nền tảng vô cùng linh hoạt. Với bộ SDK phát triển thứ cấp (Developer Edition), robot có thể dễ dàng được lập trình để thực hiện tiếp đón khách hàng, giao hàng chặng ngắn, hướng dẫn và các tương tác dịch vụ tại khách sạn, văn phòng doanh nghiệp hoặc các cơ sở y tế.'
      },
      {
        id: 'faq3',
        question: 'Hệ thống hỗ trợ những ngôn ngữ lập trình nào?',
        answer: 'Unitree G1 chủ yếu hỗ trợ hai ngôn ngữ C++ và Python thông qua bộ SDK độc quyền của Unitree Robotics. Đồng thời robot tương thích hoàn toàn với hệ điều hành ROS2 (Robot Operating System), giúp tích hợp hoàn hảo vào các quy trình học thuật hoặc hệ thống công nghiệp tiêu chuẩn toàn cầu.'
      }
    ];
  }
  return [
    {
      id: 'faq1',
      question: 'What is the battery life of the G1?',
      answer: 'The Unitree G1 features a 2.5-hour standard battery life with typical locomotion and manipulation tasks. Batteries are hot-swappable, allowing continuous operation in research and industrial deployments.'
    },
    {
      id: 'faq2',
      question: 'Can it be used for commercial service?',
      answer: 'Absolutely. The G1 is designed as a highly versatile platform. With our secondary development SDK (Developer Edition), it can be easily programmed for reception, delivery, guidance, and interactive service roles in hotels, offices, and research facilities.'
    },
    {
      id: 'faq3',
      question: 'What software languages does it support?',
      answer: 'Unitree G1 primarily supports C++ and Python through our proprietary Unitree Robotics SDK. It is also compatible with ROS2 (Robot Operating System), making it suitable for standard academic and industrial pipelines.'
    }
  ];
};

export type Translation = (typeof TRANSLATIONS)["en"];
