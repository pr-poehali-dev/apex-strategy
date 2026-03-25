const advantages = [
  { icon: "🌱", title: "100% локально", desc: "Только продукты из Чувашии. Никаких посредников и долгих цепочек." },
  { icon: "🔍", title: "Полная прозрачность", desc: "QR-код на упаковке — смотри видео с фермы и историю хозяйства." },
  { icon: "🚚", title: "Удобная доставка", desc: "Курьером до двери или в пункт выдачи в вашем районе." },
  { icon: "❤️", title: "Социальная миссия", desc: "Помогаем фермерам Чувашии найти покупателей и развивать деревню." },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/78e14254-e69d-4aef-9cd4-6628ede29eb6/files/4cf25da5-4529-4966-b36f-b8bc0e1a8da8.jpg"
          alt="Фермерские продукты из Чувашии"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мы создаём мост между фермером и городом — честно, свежо и с заботой о каждом.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {advantages.map((item) => (
            <div key={item.title} className="flex flex-col gap-1">
              <span className="text-2xl mb-1">{item.icon}</span>
              <h4 className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">{item.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Выбрать набор
        </button>
      </div>
    </div>
  );
}