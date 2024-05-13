"use client";
import { useState, useEffect } from "react";
import AeonDetailCard from "@/components/aeon-card";
import { AeonDetails } from "@/data/aeon-detail-props";

export default function Shiva() {
  const [aeonDetails, setAeonDetails] = useState<AeonDetails[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-aeon-detail");
        const data = await response.json();
        setAeonDetails(data.aeon_detail);
        console.log(data.aeon_detail);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {aeonDetails
        .filter((aeon) => aeon.name === "Shiva")
        .map((aeon) => (
          <AeonDetailCard
            key={aeon.id}
            description_1={aeon.description_1}
            description_2={aeon.description_2}
            description_3={aeon.description_3}
            src_1={aeon.image_profile}
            width_1={aeon.image_profile_width}
            height_1={aeon.image_profile_height}
            alt_1={aeon.name}
            src_2={aeon.image_body}
            width_2={aeon.image_body_width}
            height_2={aeon.image_body_height}
            alt_2={aeon.name}
            src_3={aeon.image_fayth}
            width_3={aeon.image_fayth_width}
            height_3={aeon.image_fayth_height}
            alt_3={aeon.name}
          />
        ))}
    </div>
  );
}
