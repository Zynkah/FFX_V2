import BasicPageLayout from "@/components/basic-page-layout";
import Link from "next/link";

export default function CreatorLinks() {
  return (
    <BasicPageLayout title="Creator Links">
      <>
        <Link href="https://www.paypal.com/donate/?business=C5B9D466CUT6N&no_recurring=0&item_name=If+you+want+to+support+my+website+I+would+really+appreciate+it%21+I+do+this+all+on+my+own+for+free%2C+thank+you%21&currency_code=USD">
          Donate |
        </Link>
        <Link href="https://zynkah-merch-2.creator-spring.com/"> Merch |</Link>
        <Link href="https://github.com/Zynkah?tab=repositories"> GitHub |</Link>
        <Link href="https://www.linkedin.com/in/zena-creps/"> LinkedIn</Link>
      </>
    </BasicPageLayout>
  );
}   