"use client";

import { useRouter } from "next/navigation";

export default function LoanTypesSection() {
  const router = useRouter();
  const loanTypes = [
    {
      title: "MSME Growth Loan",
      description:
        "Accelerate your business expansion with our specialized MSME financing solutions. Perfect for scaling operations, purchasing equipment, and meeting working capital needs.",
      features: [
        "Funding: Up to 15 Crores",
        "Interest: From 7.5% p.a.",
        "Processing: 10-20 days",
        "Collateral: Flexible options",
      ],
      borderColor: "border-blue-600",
      image:
        "https://rupeeboss.com/wp-content/uploads/2023/10/MSME-Loans-Check-Features-Eligibility-and-Interest-Rates-2022.jpg",
    },
    {
      title: "Smart Term Financing",
      description:
        "Strategic long-term capital solutions for infrastructure development, technology upgrades, and major expansion projects with flexible repayment structures.",
      features: [
        "Amount: Up to 75 Crores",
        "Tenure: Up to 15 years",
        "Interest: From 8.2% p.a.",
        "Moratorium: Available",
      ],
      borderColor: "border-green-600",
      image:
        "https://www.billdu.com/wp-content/uploads/2023/07/Smart-financing.png",
    },
    {
      title: "Advanced Machinery Finance",
      description:
        "Cutting-edge financing for modern machinery, automation equipment, and technology upgrades. Stay competitive with the latest industrial equipment.",
      features: [
        "Coverage: Up to 35 Crores",
        "Margin: 10-20%",
        "Interest: From 8.8% p.a.",
        "Equipment: New & Used",
      ],
      borderColor: "border-purple-600",
      image:
        "https://fubons.com/wp-content/uploads/2023/01/Fubon-Machinery-Finance-Services.jpg",
    },
    {
      title: "Dynamic Working Capital",
      description:
        "Flexible short-term financing solutions designed to keep your operations running smoothly. Manage cash flow efficiently with our tailored programs.",
      features: [
        "Limit: Up to 30 Crores",
        "Interest: From 9.2% p.a.",
        "Repayment: Flexible cycles",
        "Renewal: Annual basis",
      ],
      borderColor: "border-orange-600",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420482270/PS/HI/ZO/61706995/working-capital-loan-1000x1000.jpg",
    },
    {
      title: "Revolving Credit Facility",
      description:
        "Smart revolving credit solutions that adapt to your business cycles. Pay interest only on utilized amounts and access funds as needed.",
      features: [
        "Limit: Up to 25 Crores",
        "Interest: From 9.5% p.a.",
        "Utilization: Pay per use",
        "Flexibility: 24/7 access",
      ],
      borderColor: "border-red-600",
      image:
        "https://web.cdn.crystalfunds.com/public-web/the-ones/20190301/images/2022/06-june/revolving-credit-facilities/credit-facilities--og.png",
    },
    {
      title: "Mega Project Financing",
      description:
        "Comprehensive project financing for large-scale industrial ventures, greenfield projects, and major expansion initiatives with expert guidance.",
      features: [
        "Amount: Up to 150 Crores",
        "Interest: From 8.5% p.a.",
        "Tenure: Up to 20 years",
        "Expertise: Full support",
      ],
      borderColor: "border-indigo-600",
      image:
        "https://media.istockphoto.com/id/1148385962/photo/megaproject-under-construction.jpg?s=612x612&w=0&k=20&c=e7BK1A1X8Xl3nXo3Drqzy7nqqKYALsAB1OP60CUzxTI=",
    },
  ];

  const handleEnquire = (loanType) => {
    const message = encodeURIComponent(
      `I am interested in ${loanType}. Please provide more details.`
    );
    router.push(`/quick-enquiry?message=${message}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Smart Financing Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our innovative loan products designed to fuel your
            industrial growth and success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanTypes.map((loan, index) => (
            <div
              key={index}
              className={`group bg-gray-50 p-6 rounded-lg border-l-4 ${loan.borderColor} shadow transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 hover:border-2 hover:border-blue-400 flex flex-col`}
            >
              <img
                src={loan.image}
                alt={loan.title}
                className="w-full h-32 object-cover rounded mb-4 transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {loan.title}
              </h3>
              <p className="text-gray-600 mb-4">{loan.description}</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                {loan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <button
                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200 font-medium shadow group-hover:shadow-lg"
                onClick={() => handleEnquire(loan.title)}
              >
                Quick Enquire
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
