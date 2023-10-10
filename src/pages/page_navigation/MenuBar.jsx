import "./menu_bar.css";
function MenuBar() {
  return (
    <section className="relative">
      <div className="absolute z-50 right-4 bottom-4">
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu act"></div>
      </div>
    </section>
  );
}

export default MenuBar;
