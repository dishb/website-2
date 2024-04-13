import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NoPage from './pages/NoPage';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = '/about' element = {<About />} />
                <Route path = '/projects' element = {<Projects />} />
                <Route path = '*' element = {<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
