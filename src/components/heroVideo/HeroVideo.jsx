import "./heroVideo.css";
export default function HeroVideo() {
  return (
    <div className="main">
      <video
        src="/assets/firstvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
