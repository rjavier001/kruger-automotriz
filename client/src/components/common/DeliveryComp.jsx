import { Stack } from "@mui/material";
import Image from "mui-image";

import Delivery from "../../Assets/KrugerEntregas.png";

const DeliveryComp = () => {
  return (
    <Stack>
      <Stack direction="column" spacing={0}>
        <Image src={Delivery} height="50%" width="50%" />
      </Stack>
    </Stack>
  );
};

export default DeliveryComp;
