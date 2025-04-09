
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 px-4 py-8 font-sans overflow-x-hidden">
      {/* Cabeçalho com animação */}
      <motion.header
        className="text-center mb-16 border-b border-blue-100 pb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold mb-3 tracking-tight text-blue-700">Casa dos eBooks</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Dois caminhos, um propósito: praticidade para transformar sua renda ou uma jornada filosófica para transformar sua vida.
        </p>
        <div className="mt-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-2 rounded-md shadow">
            📚 Conheça os eBooks
          </Button>
        </div>
      </motion.header>

      {/* Destaques dos eBooks com animação e hover com sombra */}
      <section className="grid md:grid-cols-2 gap-10 mb-20 max-w-6xl mx-auto">
        {[{
          title: "Guia Airbnb para Iniciantes",
          category: "💡 Categoria: Renda Passiva / Guia Prático",
          description: "Aprenda a gerar renda com seu imóvel usando estratégias acessíveis e práticas de aluguel via Airbnb.",
          image: "/capas/airbnb.jpg",
          link: "https://www.casadosebooks.wiki.br/airbnb"
        }, {
          title: "O Atlas das Escolhas Invisíveis",
          category: "📖 Categoria: Ficção Filosófica / Existencial",
          description: "Um romance sensível e profundo sobre decisões invisíveis, destinos alternativos e a busca por sentido.",
          image: "/capas/atlas.jpg",
          link: "https://www.casadosebooks.wiki.br/atlas"
        }].map((book, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer"
            onClick={() => window.open(book.link, "_blank")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl"
            >
              <Card className="border border-blue-100 shadow-md rounded-xl overflow-hidden bg-white">
                <CardContent className="p-5">
                  <img
                    src={book.image}
                    alt={`Capa ${book.title}`}
                    className="rounded-md mb-5 w-full object-cover h-56"
                  />
                  <h2 className="text-xl font-bold mb-2 text-blue-700">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-2 font-medium">{book.category}</p>
                  <p className="text-sm text-gray-700 mb-2">
                    {book.description}
                  </p>
                  <p className="text-sm text-blue-600 font-medium mt-2 underline">Clique para acessar →</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Sobre a Casa dos eBooks */}
      <motion.section
        className="text-center max-w-3xl mx-auto mb-20 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Nosso Propósito</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Os livros da Casa dos eBooks são feitos para expandir horizontes — seja com histórias que tocam a alma ou com guias que transformam o dia a dia. Cada título reflete nosso compromisso com conteúdo útil, inspirador e acessível.
        </p>
      </motion.section>

      {/* Mascote */}
      <motion.section
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/esquilozen.png"
          alt="Esquilo Zen"
          className="mx-auto w-28 mb-4"
        />
        <h4 className="text-lg font-semibold mb-2 text-blue-700">Conheça o Esquilo Zen 🐿️</h4>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Nosso mascote curioso, leve e pensador. Ele representa a busca por sentido — com humor, alma e nozes pelo caminho.
        </p>
      </motion.section>

      {/* Rodapé */}
      <footer className="text-center text-sm text-gray-600 pt-10 border-t border-blue-100">
        <p className="mb-1">© 2025 Casa dos eBooks</p>
        <a
          href="https://www.instagram.com/contato.casadosebooks"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Instagram: @contato.casadosebooks
        </a>
      </footer>
    </main>
  );
}
