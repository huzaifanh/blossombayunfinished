import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Store from "./Store.jsx";
import Landing from "./Landing.jsx";
import Contact from "./Contact.jsx";
import Order from "./Order.jsx";


function App() {

    return(

        <BrowserRouter>
            <Routes>
            <Route index element={<Landing />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
                <Route path="/order" element={<Order />} />
            </Routes>
        </BrowserRouter>

    )

}

export default App;