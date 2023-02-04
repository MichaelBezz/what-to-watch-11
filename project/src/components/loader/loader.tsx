import cn from 'classnames';
import './loader.css';

type LoaderProps = {
  isInner?: boolean;
};

const waves = Array.from({length: 10}, (_, index) => `wave-${index}`);

function Loader ({isInner}: LoaderProps): JSX.Element {
  return (
    <div className={cn('center', {'center--inner': isInner})}>
      {waves.map((wave) => (
        <div key={wave} className="wave"></div>
      ))}
    </div>
  );
}

export default Loader;
