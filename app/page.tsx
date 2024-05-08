import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:space-y-12 space-y-8 text-center">
        <h1 className="text-4xl">Welcome to Spira</h1>
        <div className="relative w-full h-auto lg:w-1/2 lg:mx-auto aspect-video">
          <Image
            priority
            src="/images/Sin3.webp"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="FFX Logo"
            className="mx-auto md:rounded-lg"
          />
        </div>
        <p className="md:px-24 px-4 md:pb-12 pb-8">
          The world of Spira is caught in a cycle of death. Its people live in
          fear of the great menace known only as Sin. The people seek solace in
          the temples of Yevon. The Yevon faith teaches that the only way to
          temporarily defeating Sin is for the summoners to sacrifice their
          lives while performing the Final Summoning. To this end, summoners
          periodically set out on pilgrimages with the goal of returning peace
          to Spira. But even the Final Summoning cannot kill Sin - it only
          prevents Sin from reviving for a temporary amount of time. In those
          peaceful periods, known as Calms, the people receive a brief respite
          from Sin&apos;s menace. Lady Yuna of Besaid Village is one such
          summoner, determined to bring about the next Calm. She meets Tidus, a
          boy cast into Spira from Dream Zanarkand. Faced with the unfamiliar
          world, the young man becomes one of Yuna&apos;s guardians and joins
          her on her journey. Their quest throws them into a series of shocking
          events, including the devastation of the anti-Sin ranks of the
          Crusaders, the revelation of Sin&apos;s true identity, and the
          betrayal of the temples. The two are faced with several challenges and
          have many hard decisions to make. Despite this, the group overcomes
          the trials and forges its own story. Thankfully, their friends are
          there to guide them on their journey.
        </p>
      </div>
    </main>
  );
}
