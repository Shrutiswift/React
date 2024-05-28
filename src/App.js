import './App.css'
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
function App() {
    return (
        <>
            <Navbar title="Text Converter" />
            <div className='container'>
                <Textform heading="Write a text to change" />
            </div>
        </>
    );
}
export default App;


