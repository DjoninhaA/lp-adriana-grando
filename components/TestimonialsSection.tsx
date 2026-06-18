const faqs = [
  {
    question: "A psicoterapia de casal é apenas para casais em crise?",
    answer:
      "Não. Muitos casais procuram atendimento quando percebem conflitos repetitivos, dificuldade de comunicação, afastamento emocional ou decisões importantes sobre o futuro da relação. O processo também pode ser um espaço de cuidado e prevenção.",
  },
  {
    question: "A psicóloga vai dizer quem está certo ou errado?",
    answer:
      "Não. A psicoterapia de casal não tem como objetivo eleger culpados. O trabalho clínico busca compreender a dinâmica da relação, os padrões que se repetem e a forma como cada pessoa participa desses ciclos.",
  },
  {
    question: "O atendimento serve para evitar uma separação?",
    answer:
      "A psicoterapia de casal não promete manter ou encerrar uma relação. O processo oferece um espaço profissional para que o casal compreenda melhor o que está vivendo e possa tomar decisões com mais clareza e responsabilidade.",
  },
  {
    question: "Os dois precisam querer participar?",
    answer:
      "A participação de ambos é importante para o processo de casal. Quando apenas uma pessoa procura atendimento, pode ser avaliada a possibilidade de psicoterapia individual para trabalhar questões relacionadas à vivência afetiva e relacional.",
  },
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento inicial de escuta, compreensão da demanda e explicação sobre o funcionamento do processo. É também uma oportunidade para que o casal tire dúvidas sobre o formato do atendimento.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-blush-dark">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-semibold text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            O que vocês podem esperar do processo
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Q&A */}
        <div className="flex flex-col gap-8">
          {faqs.map((item) => (
            <div key={item.question} className="bg-white rounded-2xl p-7 shadow-sm">
              <p
                className="text-dark font-semibold text-base mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.question}
              </p>
              <p className="text-dark/70 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
