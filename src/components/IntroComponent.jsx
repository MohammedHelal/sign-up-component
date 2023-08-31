import SignUpForm from "./Form/SignUpForm";
import "./IntroStyles.css";

function IntroComponent() {
  return (
    <>
      <main>
        <article>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </article>
        <aside>
          <p className="try-it">Try it free 7 days then $20/mo. thereafter</p>
          <SignUpForm />
        </aside>
      </main>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Mohammed Omar Helal</a>.
        </p>
      </footer>
    </>
  );
}

export default IntroComponent;
