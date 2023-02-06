import {useRef, useEffect, useState, ChangeEvent} from 'react';
import {useNavigate, generatePath} from 'react-router-dom';
import Loader from '../loader/loader';
import {Film} from '../../types/film';
import {formatRemainingTime} from '../../utils';
import {AppRoute} from '../../constants';

type VideoPlayerProps = {
  film: Film;
};

function VideoPlayer({film}: VideoPlayerProps): JSX.Element {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    if (isVideoPlayerMounted) {
      isPlaying
        ? videoRef.current.play()
        : videoRef.current.pause();
    }

    return () => {
      isVideoPlayerMounted = false;
    };
  }, [isPlaying]);

  const handleVideoDurationChange = (
    event: ChangeEvent<HTMLVideoElement>
  ) => {
    setDuration(
      Math.round(event.currentTarget.duration)
    );
  };

  const handleVideoTimeUpdate = (
    event: ChangeEvent<HTMLVideoElement>
  ) => {
    setCurrentTime(
      Math.round(event.currentTarget.currentTime)
    );
  };

  const handelFullScreenButtonClick = () => {
    videoRef.current?.requestFullscreen();
  };

  const {id, name, videoLink, previewVideoLink} = film;

  return (
    <>
      {isLoading && <Loader />}
      <div className="player">
        <video
          ref={videoRef}
          className="player__video"
          src={videoLink}
          poster={previewVideoLink}
          autoPlay
          onLoadedData={() => setIsLoading(false)}
          onDurationChange={handleVideoDurationChange}
          onTimeUpdate={handleVideoTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />

        <button
          className="player__exit"
          type="button"
          onClick={() => navigate(generatePath(AppRoute.Film, {id: `${id}`}))}
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={currentTime}
                max={duration}
              />
              <div
                className="player__toggler"
                style={{
                  left: `${duration ? (100 / duration) * currentTime : 0}%`
                }}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">
              {formatRemainingTime(duration - currentTime)}
            </div>
          </div>

          <div className="player__controls-row">
            <button
              className="player__play"
              type="button"
              onClick={() => setIsPlaying((prevState) => !prevState)}
            >
              {isPlaying ? (
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </>
              )}
            </button>

            <div className="player__name">{name}</div>

            <button
              className="player__full-screen"
              type="button"
              onClick={handelFullScreenButtonClick}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
