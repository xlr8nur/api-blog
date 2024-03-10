import headImg from "../images/head-img.jpg";

export default function Head() {
  return (
    <section
      className="w-full bg-cover bg-center py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg})`,
      }}
    >
      <div className="container mx-auto text-center text-white">
        <h1 className="text-5xl font-medium mb-6">Welcome to Blog</h1>
        <p className="text-xl mb-12">
          This blog created as a project for The Odin Project.
        </p>
      </div>
    </section>
  );
}