import Button from "../components/shared/Button";
export default function NotFoundPage() {
  return (
    <section className="bg-ink px-6 py-48 text-center text-white">
      <p className="eyebrow mb-7">404 / Page not found</p>
      <h1 className="title-xl mb-7">A space yet to be built.</h1>
      <p className="mb-9 text-white/60">
        The page you are looking for is not here.
      </p>
      <Button light to="/home-one">
        Back to home
      </Button>
    </section>
  );
}
