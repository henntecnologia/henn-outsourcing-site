export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Henn Outsourcing" className="h-10" />
            <h1 className="text-xl font-bold">Henn Outsourcing</h1>
          </div>
          <nav className="flex gap-6">
            <a href="#sobre" className="hover:text-blue-300">Sobre</a>
            <a href="#servicos" className="hover:text-blue-300">Serviços</a>
            <a href="#clientes" className="hover:text-blue-300">Clientes</a>
            <a href="#contato" className="hover:text-blue-300">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Gestão de TI eficiente</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Soluções em infraestrutura de TI que trazem eficiência, segurança e tranquilidade para sua empresa.
        </p>
        <a
          href="mailto:atendimento@henn.inf.br"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Entre em contato
        </a>
      </section>

      {/* Sobre */}
      <section id="sobre" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Sobre Nós</h3>
        <p className="text-gray-700 leading-relaxed">
          A Henn Outsourcing é especializada em terceirização de serviços de TI voltados para infraestrutura. Nossa missão é garantir que sua empresa tenha suporte tecnológico confiável e estratégico para crescer de forma segura e sustentável.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Nossos Serviços</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Administração de Servidores",
              "Gerenciamento de Redes e Firewall",
              "Monitoramento de Infraestrutura",
              "Backup e Recuperação de Desastres",
              "Cloud Computing & Migração",
              "Helpdesk e Suporte Técnico",
              "Segurança da Informação",
            ].map((servico, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">{servico}</h4>
                <p className="text-gray-600 text-sm">
                  Garantimos eficiência, disponibilidade e segurança em todas as camadas da sua infraestrutura.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Clientes</h3>
        <p className="text-gray-700 mb-6">
          Empresas que confiam em nossa expertise para manter suas operações seguras e eficientes.
        </p>
        <div className="flex justify-center gap-10">
          <div className="bg-gray-200 h-16 w-32 flex items-center justify-center rounded">Logo 1</div>
          <div className="bg-gray-200 h-16 w-32 flex items-center justify-center rounded">Logo 2</div>
          <div className="bg-gray-200 h-16 w-32 flex items-center justify-center rounded">Logo 3</div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-blue-900 text-white py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Entre em Contato</h3>
        <p className="mb-6">Estamos prontos para atender sua empresa com soluções em TI.</p>
        <a
          href="mailto:atendimento@henn.inf.br"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
        >
          atendimento@henn.inf.br
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} Henn Outsourcing. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
