import { connectHits } from "react-instantsearch-dom";

const SearchPage = () => {
  const Hits = ({ hits }) => (
    <ol>
      {hits.map((hit) => (
        <li key={hit.objectID}>{hit.name}</li>
      ))}
    </ol>
  );

  const CustomHits = connectHits(Hits);

  return (
    <div>
      SearchPage
      <CustomHits />
    </div>
  );
};

export default SearchPage;
