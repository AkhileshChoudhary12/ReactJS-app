import React, { useMemo, useState } from 'react';
import './App.css';

const destinations = [
  { name: 'Manali', state: 'Himachal Pradesh', tag: 'Snow & adventure', price: '₹8,500', rating: '4.9', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Nainital', state: 'Uttarakhand', tag: 'Lakeside retreat', price: '₹6,200', rating: '4.8', image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Shimla', state: 'Himachal Pradesh', tag: 'Colonial charm', price: '₹7,100', rating: '4.7', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Mussoorie', state: 'Uttarakhand', tag: 'Cloud-kissed views', price: '₹6,800', rating: '4.8', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Kasol', state: 'Himachal Pradesh', tag: 'Riverside escape', price: '₹5,900', rating: '4.6', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Auli', state: 'Uttarakhand', tag: 'Mountain adventure', price: '₹9,200', rating: '4.9', image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=85' }
];

function App() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredDestinations = useMemo(() => destinations.filter((place) => {
    const matchesSearch = `${place.name} ${place.state} ${place.tag}`.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === 'All' || place.state === activeFilter;
    return matchesSearch && matchesFilter;
  }), [search, activeFilter]);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#"><span className="brand-mark">▲</span> alpine<span>trails</span></a>
        <nav><a href="#destinations">Destinations</a><a href="#experience">Our story</a><a href="#footer">Contact</a></nav>
        <a className="nav-cta" href="#destinations">Explore trips <span>↗</span></a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow"><span /> YOUR NEXT CHAPTER STARTS HERE</p>
            <h1>Find your<br /><em>higher</em> place.</h1>
            <p className="hero-copy">Trade the everyday for mountain air, winding trails and views that stay with you forever.</p>
            <a className="primary-button" href="#destinations">Discover destinations <span>→</span></a>
            <div className="hero-note"><span className="note-line" /> CURATED MOUNTAIN GETAWAYS</div>
          </div>
          <div className="hero-bottom"><span>01 / 03</span><span>HIMALAYAN ESCAPES · INDIA</span></div>
        </section>

        <section className="intro section-wrap" id="experience">
          <div><p className="eyebrow dark">SLOW DOWN. LOOK UP.</p><h2>Some places just<br />make you <em>feel more.</em></h2></div>
          <p className="intro-copy">From quiet lakeside mornings to trails above the clouds, find a little space to breathe. Your mountain story is waiting.</p>
        </section>

        <section className="destinations section-wrap" id="destinations">
          <div className="section-heading">
            <div><p className="eyebrow dark">THE GREAT OUTDOORS</p><h2>Pick your <em>escape.</em></h2></div>
            <span className="destination-count">06 PLACES TO EXPLORE</span>
          </div>

          <div className="search-row">
            <label className="search-box"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search a destination..." /></label>
            <div className="filters">
              {['All', 'Himachal Pradesh', 'Uttarakhand'].map((filter) => <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
          </div>

          <div className="destination-grid">
            {filteredDestinations.map((place) => (
              <article className="destination-card" key={place.name}>
                <div className="card-image"><img src={place.image} alt={`${place.name} mountain landscape`} /><span className="rating">★ {place.rating}</span><button className="heart" aria-label={`Save ${place.name}`} onClick={(e) => e.currentTarget.classList.toggle('saved')}>♡</button></div>
                <div className="card-info"><div><p className="card-tag">{place.tag}</p><h3>{place.name}</h3><p className="card-state">{place.state}</p></div><div className="card-price"><strong>{place.price}</strong><span>per person</span></div></div>
                <a className="card-link" href="#footer">Explore place <span>↗</span></a>
              </article>
            ))}
            {filteredDestinations.length === 0 && <p className="empty-state">No destinations found. Try another search.</p>}
          </div>
        </section>

        <section className="quote-band"><p>“The mountains are calling<br />and I must go.”</p><span>— JOHN MUIR</span></section>
      </main>

      <footer id="footer"><a className="brand footer-brand" href="#"><span className="brand-mark">▲</span> alpine<span>trails</span></a><p>Take the scenic route. Always.</p><span>© 2026 ALPINE TRAILS</span></footer>
    </div>
  );
}

export default App;
