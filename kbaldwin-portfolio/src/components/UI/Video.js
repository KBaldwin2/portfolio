export default function Video(props) {
  return <video src={props.src} width="100%" height="250" controls autoPlay loop styles={{display: "block", margin: "auto"}} muted></video>;
}
