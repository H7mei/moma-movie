import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

function Results({results, media}) {
  return (
    <FlipMove className='px-5 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} media={media} />
      ))}
    </FlipMove>
  );
}

export default Results;
