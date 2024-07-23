import './App.css';
import Timeline from './sections/main/Timeline';
import Header from './sections/Header';
import About from './sections/main/About';
function App() {
  return (
    <div className="  font-yakan py-12  mx-auto">
     
     <Header/>

      <div className="max-w-[986px] mx-auto shadow-md rounded-md pb-16">
       
       <Timeline/>

       <About />

      </div>

    </div>
  );
}

export default App;
