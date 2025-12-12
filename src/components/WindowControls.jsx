import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore()

  return (
    <div id="window-controls">
      <button type="button" className="close" onClick={() => closeWindow(target)} />
      <div className="minimize"/>
      <div className="maximize"/>
    </div>
  );
}

export default WindowControls;
