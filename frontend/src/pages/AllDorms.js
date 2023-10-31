// This is going to be a list of all dorms that can be filtered and sorted
// For now it's blank so this is where you go when you click All Dorms on the header

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllDorms = () => {

    // CSS used just for this page
    const box = {
        width: "95%",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "10px",
        fontSize: "1em",
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
        fontFamily: "Poppins",
        marginBottom: "20px"
    };

    const margin = {
        marginLeft: "50px",
        position: "relative",
        zIndex: "100"
    };

    // Dorm data pulled directly from SLL housing comparison
    // Dorms without certain rooms get set to infinity so they go to the bottom of sorted order
    const dorms = [

        {id:'BARH', name: 'BARH', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Suite'},
        {id: 'Barton', name: 'Barton Hall', folder: 'Freshman', year: 'Freshman, Arch', single_price: Infinity, double_price: Infinity, triple_price: 9790, room_type: 'Suite, Traditional'},
        {id: 'Bray', name: 'Bray Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional'},
        {id: 'Cary', name: 'Cary Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional'},
        {id: 'Crockett', name: 'Crockett Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional'},
        {id: 'Davison', name: 'Davison Hall', folder: 'Freshman', year: 'Freshman, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Suite'},
        {id: 'Hall', name: 'Hall Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional'},
        {id: 'Nason', name: 'Nason Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional'},
        {id: 'Nugent', name: 'Nugent Hall', folder: 'Freshman', year: 'Freshman, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Suite'},
        {id: 'Sharp', name: 'Sharp Hall', folder: 'Freshman', year: 'Freshman, Arch', single_price: 10720, double_price: Infinity, triple_price: Infinity, room_type: 'Suite'},
        {id: 'Warren', name: 'Warren Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Suite'},

        {id: 'Blitman', name: 'Blitman', folder: 'Sophomore', year: 'Sophomore, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Suite'},
        {id: 'Bryckwyck', name: 'Bryckwyck', folder: 'Sophomore', year: 'Sophomore', single_price: 8540, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment'},
        {id: 'Colonie', name: 'Colonie', folder: 'Sophomore', year: 'Sophomore', single_price: Infinity, double_price: 9120, triple_price: Infinity, room_type: 'Suite'},
        {id: 'EComplex', name: 'E-Complex', folder: 'Sophomore', year: 'Sophomore, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Traditional'},
        {id: 'North', name: 'North Hall', folder: 'Sophomore', year: 'Sophomore, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Traditional'},
        {id: 'Quad', name: 'Quadrangle', folder: 'Sophomore', year: 'Sophomore, Arch', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Suite, Traditional'},
        {id: 'RAHPA', name: 'RAHP-A', folder: 'Sophomore', year: 'Sophomore', single_price: 8540, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment'},
        {id: 'RAHPB', name: 'RAHP-B', folder: 'Sophomore', year: 'Sophomore', single_price: 8540, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment'},
        {id: 'Stacwyck', name: 'Stacwyck', folder: 'Sophomore', year: 'Sophomore', single_price: 10290, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment'},

        {id: 'CityStationWest', name: 'City Station West', folder: 'Upperclass', year: 'Upperclass', single_price: 10290, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment'},
        {id: 'Polytechnic', name: 'Polytechnic', folder: 'Upperclass', year: 'Upperclass', single_price: 10290, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment'},
        
    ];

    // Order, ascending or descending
    const [sortType, setSortType] = useState('ascending');

    // Sort by field (name, year, price, etc.)
    const [sortByField, setSortByField] = useState("name");

    // Store filter/latest dorms
    const [result, setResult] = useState();
    const [state, setstate] = useState({
        query: '',
        list: dorms
    })

    // Sort dorms based on sort type and available results
    function sortFunc(results, sortType, sortByField) {
        if (sortType === 'ascending'){
            results.sort((a,b) => a[sortByField] < b[sortByField] ? -1 : 1)
        }
        else if (sortType === 'descending'){
            results.sort((a,b) => b[sortByField] > a[sortByField] ? 1 : -1)
        }
        return results;
    }

    // Dropdown to sort dorms in ascending or descending order
    function sortOrder(e) {
        setSortType(e);
        setstate({
            query: state.query,
            list: !result ? sortFunc(dorms, e, sortByField) : sortFunc(result, e, sortByField)
        })
    }

    // Dropdown to sort dorms by a specific feature
    function sortBy(e) {
        setSortByField(e);
        setstate({
            query: state.query,
            list: !result ? sortFunc(dorms, sortType, e) : sortFunc(result, sortType, e)
        })
    }

    // Filter dorms based on dropdown
    function filter(e) {
        const results = dorms.filter(dorm => {
            if (e === "Freshman" || e === "Sophomore" || e === "Arch" || e === "Upperclass"){
                return dorm['year'].toLowerCase().includes(e.toLowerCase());
            }
            else if (e === "Suite" || e === "Traditional" || e === "Apartment"){
                return dorm['room_type'].toLowerCase().includes(e.toLowerCase());
            }
            return dorms;
        })

        setResult(results);

        setstate({
            query: e,
            list: sortFunc(results, sortType, sortByField)
        })
        
    }

    // Filter dorms on typing in search input
    const handleChange = (e) => {
        const results = dorms.filter(dorm => {
            if (e.target.value === ""){
                return dorms;
            }
            return dorm['name'].toLowerCase().includes(e.target.value.toLowerCase());
        })

        setResult(results);

        setstate({
            query: e.target.value,
            list: sortFunc(results, sortType, sortByField)
        })
    }

    
    // Return HTML
    return (
        <div>
            <form class="body">

                {/* Search bar */}
                <span style={margin}>Search for a Dorm </span>
                <input class='searchbar' onChange={handleChange} value={state.query} type='search'/>

                {/* Sort by features */}
                <span style={margin}>Sort By </span>
                <select class="dropdown-menu-behind" defaultValue={'name'} onChange={(e) => sortBy(e.target.value)}>
                    <option value='name' disabled>None</option>
                    <option value='name'>Name</option>
                    <option value='year'>Year</option>
                    <option value='room_type'>Room Type</option>
                    <option value='single_price'>Price (Single)</option>
                    <option value='double_price'>Price (Double)</option>
                    <option value='triple_price'>Price (Triple)</option>
                </select>

                {/* Sort order ascending/descending */}
                <span style={margin}>Order </span>
                <select class="dropdown-menu-behind" defaultValue={'ascending'} onChange={(e) => sortOrder(e.target.value)}>
                    <option value="ascending" disabled>None</option>
                    <option value="ascending">Low to High</option>
                    <option value="descending">High to Low</option>
                </select>

                {/* Filter Dorms */}
                <span style={margin}>Filter By </span>
                <select class="dropdown-menu-behind" defaultValue={''} onChange={(e) => filter(e.target.value)}>
                    <option value=''>None</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Arch">Arch</option>
                    <option value="Upperclass">Upperclass</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Suite">Suite</option>
                    <option value="Apartment">Apartment</option>
                </select>

            </form>
            {/* List of dorms */}
            <div style={margin}>     
                <table style={{ width:'100%', paddingTop: '15px'}}>
                    
                    <tbody>
                        
                        {state.list.map((dorm) => {
                            const dorm_link = "/" + dorm.folder.toLowerCase() + "/" + dorm.id.toLowerCase();

                            let singles = "-";
                            if (dorm.single_price < Infinity) {
                                singles = "$" + dorm.single_price;
                            }
                            let doubles = "-";
                            if (dorm.double_price < Infinity) {
                                doubles = "$" + dorm.double_price;
                            }
                            let triples = "-";
                            if (dorm.triple_price < Infinity) {
                                triples = "$" + dorm.triple_price;
                            }

                            return (
                                <tr key={dorm.id} style={box}>
                                    <td style={{width:'22%'}}>
                                        <Link to={dorm_link} onClick={() => { window.scroll(0, 0); }} className="custom-heading2">
                                            <b>{dorm.name}</b>
                                        </Link>
                                    </td>
                                    <td style={{ width: '22%' }}>
                                        <b>Year: </b>{dorm.year}
                                    </td>
                                    <td style={{ width: '22%' }}>
                                        <b>Room Type: </b>{dorm.room_type}
                                    </td>
                                    <td style={{width:'34%'}}>
                                        <table style={{ width: '100%' }}>
                                            <tr>
                                                <td style={{width:'33%'}}>
                                                    <b>Single:</b> {singles}
                                                </td>
                                                <td style={{ width: '33%' }}>
                                                    <b>Double:</b> {doubles}
                                                </td>
                                                <td style={{ width: '33%' }}>
                                                    <b>Triple:</b> {triples}
                                                </td>
                                            </tr>

                                        </table>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            
            {/* <ul>
               
                {(
                    state.list.map(dorm => {

                        const dorm_link = "/" + dorm.folder.toLowerCase() + "/" + dorm.id.toLowerCase();

                        let singles = "-";
                        if (dorm.single_price < Infinity){
                            singles = "$"+dorm.single_price;
                        }
                        let doubles = "-";
                        if (dorm.double_price < Infinity){
                            doubles = "$"+dorm.double_price;
                        }
                        let triples = "-";
                        if (dorm.triple_price < Infinity){
                            triples = "$"+dorm.triple_price;
                        }

                        return <div key = {dorm.name} style={box}>
                            <b><Link
                                to = {dorm_link}
                                onClick={() => {window.scroll(0, 0);}}
                                className="custom-heading2">
                                {dorm.name}
                            </Link></b>
                            <p><b>Year:</b> {dorm.year}</p>
                            <p><b>Room Type:</b> {dorm.room_type}</p>
                            <p><b>Room Prices:</b> Single: {singles} | Double: {doubles} | Triple: {triples}</p>
                        </div>
                    })
                )}
            </ul> */}

            

        </div>
    )
    
    
}

export default AllDorms;