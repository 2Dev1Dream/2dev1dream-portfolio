import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1>2Dev1Dream</h1>
        <h2>Welcome to the 2Dev1Dream website!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          tempora ex. <span className="accent-blue">Vitae</span>, ea? Quos
          commodi repudiandae maiores autem vel possimus, in{" "}
          <span className="accent-green">fugiat</span> veniam quia voluptate.
          <span className="accent-blue">Accent bleu ici</span>,{" "}
          <span className="accent-green">Accent vert ici</span>
        </p>
        <span className="accent-blue">Accent bleu ici</span>,{" "}
        <span className="accent-green">Accent vert ici</span>
        <a href="https://www.google.com" className="link">
          Google
        </a>
        <button className="button1">Cliquez-ici</button>
        <button className="button2">Ici aussi</button>
      </main>
    </div>
  );
}
