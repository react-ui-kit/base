import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import Slider from 'components/core/slider/';
import './style';

export default class Video extends PureComponent {
  static displayName = 'Video'

  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    autoplay: PropTypes.bool,
    showControls: PropTypes.bool,
    controls: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    src: undefined,
    type: 'video/mp4',
    width: null,
    height: null,
    autoplay: false,
    showControls: false,
    controls: true
  }

  constructor(props) {
    super(props);

    this.state = {
      isPlaying: props.autoplay ? true : false,
      showControls: props.showControls ? true : false,
      video: {
        currentTime: 0,
        duration: null,
        volume: 1,
        width: props.width,
        height: props.height
      }
    };
  }

  componentDidMount() {
    this.video.oncanplay = ({...rest}) => this.handleVideoUpdate();

    this.video.ontimeupdate = ({...rest}) => this.handleVideoUpdate();

    this.video.onended = ({...rest}) => {
      this.setState({
        isPlaying: false
      });
    };
  }

  handleClick = () => {
    let {isPlaying} = this.state;

    if (isPlaying) this.video.pause();
    if (!isPlaying) this.video.play();

    switch (isPlaying) {
      case true:
        isPlaying = false;
        this.video.pause();
        break;
      default:
        isPlaying = true;
        this.video.play();
        break;
    }

    this.setState({
      isPlaying
    });

    this.handleVideoUpdate();
  }

  handleFullScreen = () => {
    const video = this.video;

    this.handleVideoUpdate();

    return video.requestFullscreen ? video.requestFullscreen() :
      video.msRequestFullscreen ? video.msRequestFullscreen() :
      video.mozRequestFullscreen ? video.mozRequestFullscreen() :
      video.webkitRequestFullscreen ? video.webkitRequestFullscreen() :
      false;
  }

  handleVideoUpdate = () => {
    let {video} = this.state;
    const videoBounds = this.video.getBoundingClientRect();

    video = {
      currentTime: this.video.currentTime,
      duration: this.video.duration,
      volume: this.video.volume,
      width: videoBounds.width,
      height: videoBounds.height
    };

    this.setState({
      video: video
    });

    // console.log('handleVideoUpdate', video);
  }

  handleVideoSeek = (time) => {
    let {video} = this.state;

    video.currentTime = time;

    this.setState({video: video});
    this.video.currentTime = time;
  }

  renderControls = () => {
    const {controls} = this.props;
    const {video, isPlaying, showControls} = this.state;

    if (!controls || !video.width || !showControls) return null;

    const time = {
      current: parseInt(video.currentTime, 10),
      total: parseInt(video.duration, 10)
    };

    const hhmmss = (digit) => {
      const h = Math.floor(Number(digit) / 3600);
      const m = Math.floor(Number(digit) % 3600 / 60);
      const s = Math.floor(Number(digit) % 3600 % 60);
      return ((h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s);
    };

    const classNames = [isPlaying ? 'isPlaying' : null, showControls ? 'showControls' : null].map(className => className).join(' ');

    return (
      <section className={utils.strim(`controls ${classNames}`)} style={{width: `${video.width}px`}}>
        <Slider
          success
          min={0}
          step={0.00001}
          max={video.duration}
          value={video.currentTime}
          onChange={(value) => this.handleVideoSeek(value)} />
          <div className={'buttons'}>
            <span className={!isPlaying ? 'play' : 'pause'} onClick={(ev) => this.handleClick(ev)} />
            {/*<span className={'volume'} />*/}
            <span className={'time'}>{hhmmss(time.current)} / {hhmmss(time.total)}</span>
            <span className={'fullscreen'} onClick={(ev) => this.handleFullScreen(ev)} />
          </div>
      </section>
    );
  }

  render() {
    const {children, className, src, type, width, height, controls, autoplay, ...rest} = this.props;
    const source = src && type ? <source src={src} type={type} /> : null;

    return (
      <section
        onMouseEnter={() => (this.setState({showControls: true}))}
        onMouseLeave={() => (this.setState({showControls: false}))}
        className={'video'}>
        <video
          preload={'auto'}
          autoPlay={autoplay}
          controls={!controls}
          width={width}
          height={height}
          ref={(_v) => (this.video = _v)}
          onClick={(ev) => this.handleClick(ev)}
          className={className} {...rest}>
          {source}
          {children}
        </video>
        {this.renderControls()}
      </section>
    );
  }
}

// Current frame image
// More info: http://stackoverflow.com/questions/19175174/capture-frames-from-video-with-html5-and-javascript
