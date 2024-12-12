import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">David Zhang Blog</h1>
      <h3 className="text-3xl mb-10">I do fullstack, frontend, and drawing</h3>

      <div className="mb-10">
        <h2 className="text-2xl font-bold">Fullstack Work</h2>
        <div className="flex flex-col ">
          <Link href="https://reddit-clone-topaz-beta.vercel.app">
            Reddit Clone
          </Link>
          <Link href="https://prisma-deploy-kohl.vercel.app">
            Woot ECommerce
          </Link>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold">Frontend Work</h2>
        <div className="flex flex-col">
          <Link href="/perspective-section-transition">
            Perspective Section Transition
          </Link>
          <Link href="/sticky-footer">Sticky Footer</Link>
          <Link href="/text-parallax">Text Parallax</Link>
          <Link href="https://workvibe.netlify.app/">WorkVibe</Link>
          <Link href="https://unsplash-replica1.netlify.app/">Unsplash</Link>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold">Drawing</h2>
        <div className="flex flex-col">Oops, nothing here yet</div>
      </div>
    </div>
  );
}
