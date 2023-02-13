import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./TitleComp";

function preventDefault(event) {
  event.preventDefault();
}
const SalesComp=()=> {
  return (
    <>
      <Title>Recent Sales</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </>
  );
}

export default SalesComp;
