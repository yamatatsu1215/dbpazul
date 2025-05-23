import { Videocam, ScreenShare, Chat, People, Security } from "@mui/icons-material"

export const navItems = [
    { text: "機能", href: "#features" },
    { text: "料金プラン", href: "#pricing" },
    { text: "よくある質問", href: "#faq" },
    { text: "お問い合わせ", href: "#contact" },
  ]
export const features = [
    {
      icon: <Videocam fontSize="large" color="primary" />,
      title: "高品質ビデオ通話",
      description: "HD画質のビデオ通話で、クリアな映像と音声を実現。最大50人まで同時接続可能です。",
    },
    {
      icon: <ScreenShare fontSize="large" color="primary" />,
      title: "画面共有",
      description: "プレゼンテーションや資料の共有も簡単。ワンクリックで画面共有を開始できます。",
    },
    {
      icon: <Chat fontSize="large" color="primary" />,
      title: "チャット機能",
      description: "通話中でもテキストでコミュニケーション。ファイル共有も可能です。",
    },
    {
      icon: <People fontSize="large" color="primary" />,
      title: "グループ管理",
      description: "チームやプロジェクト単位でグループを作成。効率的な会議管理ができます。",
    },
    {
      icon: <Security fontSize="large" color="primary" />,
      title: "セキュリティ",
      description: "エンドツーエンドの暗号化で、安全な通信を確保。プライバシーを守ります。",
    },
  ]

export const pricingPlans = [
    {
      title: "無料プラン",
      price: "¥0",
      period: "/月",
      features: ["最大4人までの通話", "40分の通話時間制限", "基本的な画面共有", "標準画質ビデオ"],
      buttonText: "無料で始める",
      buttonVariant: "outlined",
    },
    {
      title: "プロフェッショナル",
      price: "¥1,500",
      period: "/月",
      features: ["最大15人までの通話", "時間制限なし", "高度な画面共有", "HD画質ビデオ", "クラウド録画 (10GB)"],
      buttonText: "今すぐ登録",
      buttonVariant: "contained",
      highlighted: true,
    },
    {
      title: "ビジネス",
      price: "¥3,000",
      period: "/月",
      features: [
        "最大50人までの通話",
        "時間制限なし",
        "高度な画面共有",
        "フルHD画質ビデオ",
        "クラウド録画 (無制限)",
        "管理コンソール",
        "優先サポート",
      ],
      buttonText: "お問い合わせ",
      buttonVariant: "outlined",
    },
  ]

export const faqs = [
    {
      question: "何人まで同時に通話できますか？",
      answer:
        "プランによって異なります。無料プランでは最大4人、プロフェッショナルプランでは最大15人、ビジネスプランでは最大50人まで同時に通話できます。",
    },
    {
      question: "通話の録画はできますか？",
      answer:
        "はい、プロフェッショナルプラン以上では通話の録画が可能です。録画はクラウドに保存され、後から視聴やダウンロードができます。",
    },
    {
      question: "モバイルデバイスでも使用できますか？",
      answer: "はい、iOS、Androidアプリを提供しています。また、モバイルブラウザからもアクセス可能です。",
    },
    {
      question: "インターネット接続の要件は何ですか？",
      answer:
        "快適にご利用いただくには、上り下り共に最低2Mbpsの接続速度を推奨しています。HD画質では5Mbps以上が理想的です。",
    },
    {
      question: "支払い方法は何がありますか？",
      answer: "クレジットカード（Visa、Mastercard、American Express、JCB）、PayPal、銀行振込に対応しています。",
    },
  ]