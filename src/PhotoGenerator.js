import React, { useEffect, useState } from "react";
import axios from "axios";

function PhotoGenerator() {
  const [image, setImage] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.generated.photos/api/v1/faces?version=3&gender=female&age=young-adult&order_by=random",
        {
          headers: {
            Authorization: `API-Key CGKwWjGhaYXNSO3ngd7_3g`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.faces[0].urls[4][512]);
        setImage(res.data.faces[0].urls[4][512]);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <h3>Generated Photo</h3> <br />
      <center>
        <img width="50%" alt="AI" src={image} />
      </center>
    </div>
  );
}

export default PhotoGenerator;
