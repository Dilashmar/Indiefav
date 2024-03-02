import React from "react";
import Malcolm from '../assets/Malcolm.jpg';
import Jhung from '../assets/Jung.jpeg';
import Jack from '../assets/Jack.jpeg';
import High from '../assets/High.jpeg';
import Julia from '../assets/Julia.jpeg';
import Grent from '../assets/grent.jpeg';
import Luna from '../assets/Luna.jpeg';
import Marias from '../assets/marias.jpeg';
import Crisaunt from '../assets/crisaunt.jpeg';
import Sunset from '../assets/sunset.jpeg';


function Details () {
    return (
        <>
        <div className="card">
            <img className="card-img" src = {Malcolm} alt="Malcolm"></img>
            <h2 className="card-title">Malcolm Todd</h2>
            <p className="card-text">Top songs: "Hesitating", "Art House", "Hot in NY" </p>
            <button>Upcoming Concert</button>
        </div>
        <div className="card">
                <img className="card-img" src = {Jhung} alt="Jung"></img>
                <h2 className="card-title">Jhung</h2>
                <p className="card-text">Top songs: "ALWAYS THE END", "JUNG IS DEAD!(intro)", "SEE ME" </p>
                <button>Upcoming Concert</button>
        </div>
        <div className="card">
                <img className="card-img" src = {Jack} alt="Jack Hisatomi"></img>
                <h2 className="card-title">Jack Hisatomi</h2>
                <p className="card-text">Top songs: "Slowly Dying", "Pick Up the Phone", "I Fell for You" </p>
                <button>Upcoming Concert</button>
        </div>
        <div className="card">
                <img className="card-img" src = {High} alt="High Sunn"></img>
                <h2 className="card-title">High Sunn</h2>
                <p className="card-text">Top songs: "Ramen Waitress", "Holding Hands", "Joy of Romance" </p>
                <button>Upcoming Concert</button>
        </div>
        <div className="card">
                <img className="card-img" src = {Julia} alt="Julia Brown"></img>
                <h2 className="card-title">Julia Brown</h2>
                <p className="card-text">Top songs: "I will do this for the rest of my Life", "Library", "An abundance of Strawberries" </p>
                <button>Upcoming Concert</button>
        </div>
        <div className="card">
                <img className="card-img" src = {Grent} alt="Grent Perez"></img>
                <h2 className="card-title">Grent Perez</h2>
                <p className="card-text">Top songs: "Cherry Wine", "(Only) About Love - Demo", "Clementine" </p>
                <button>Upcoming Concert</button>
        </div>
        <div className="card">
                <img className="card-img" src = {Luna} alt="Luna Luna"></img>
                <h2 className="card-title">Luna Luna</h2>
                <p className="card-text">Top songs: "For You", "Daydream", "80s Tune" </p>
                <button>Upcoming Concert</button>
        </div>
        <div className="card">
                <img className="card-img" src = {Marias} alt="The Maries"></img>
                <h2 className="card-title">The Marias</h2>
                <p className="card-text">Top songs: "Carino", "Over the Moon", "I don't know" </p>
                <button>Upcoming Concert</button>
        </div>
        <div className="card">
                <img className="card-img" src  = {Crisaunt} alt="Crisaunt"></img>
                <h2 className="card-title">Crisaunt</h2>
                <p className="card-text">Top songs: "Dream Girl", "Supplier", "Chemistry" </p>
                <button>Upcoming Concert</button>
        </div>
        <div className="card">
                <img className="card-img" src = {Sunset} alt="Sunset Rollercoaster"></img>
                <h2 className="card-title">Sunser Rollercoaster</h2>
                <p className="card-text">Top songs: "My Jinji", "I know you know I Love you", "Vanilla" </p>
                <button>Upcoming Concert</button>
        </div>
        </>
    );
}

export default Details;



