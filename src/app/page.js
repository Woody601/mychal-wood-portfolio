import Button from "./components/Button/page";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Hello There! I'm</h2>
        <h1>Mychal Wood</h1>
        <h2>Gamer, Web Designer, and Front End Developer.</h2>
        <Button href="/about">About Me</Button>
      </section>
    </div>
  );
}
