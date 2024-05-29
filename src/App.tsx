// Components
import Footer from './components/ui/footer/Footer';
import Header from './components/ui/header/Header';
// Pages
import Rewards from './pages/rewards/Rewards';

function App() {
    return (
        <section className="App">
            <Header />
            <section className='body-container'>
                <Rewards />
            </section>
            <Footer />
        </section>
    );
}

export default App;
