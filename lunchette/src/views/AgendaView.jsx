import NavBar from "../components/navbar";

function AgendaView() {
  return (
    <>
      <NavBar></NavBar>
      <div className="pt-20 h-max flex flex-row">
        <div className="w-1/4 h-full shadow-2xl"></div>
        <div className="w-3/4 h-full"></div>
      </div>
    </>
  );
}

export default AgendaView;
