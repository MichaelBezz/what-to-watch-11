import './loader.css';

const waves = Array.from({length: 10}, (_, index) => `wave-${index}`);

function Loader (): JSX.Element {
  return (
    <div className="center">
      {waves.map((wave) => (
        <div key={wave} className="wave"></div>
      ))}
    </div>
  );
}

export default Loader;
