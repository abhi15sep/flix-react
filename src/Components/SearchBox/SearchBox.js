import React, {useState, useEffect, useRef} from "react";
import {navigate, Link} from "@reach/router";
import sus from "./../../45.jpg";
import "./search-box.css";

const SearchBox = props => {
    let arr = [0, 1, 2, 3, 4];

    const [query, changeQuery] = useState("");

    const inputRef = useRef();
    const resultRef = useRef();
    const btnRef = useRef();

    useEffect(() => {
        document.addEventListener("click", () => {
            inputRef.current.classList.remove("search-border-radius-focus");
            btnRef.current.classList.remove("search-btn-border-radius-focus");
            resultRef.current.style.display = "none";
        });
        //placeholder change from if no query was written. ['check button onClick']
        inputRef.current.placeholder = "Search any Movie, TV-Show, Celeb";

        // handles input query
        if (query.length > 3 && !window.innerWidth < 600) {
            inputRef.current.classList.add("search-border-radius-focus");
            btnRef.current.classList.add("search-btn-border-radius-focus");
            resultRef.current.style.display = "block";
            resultRef.current.classList.add("show");
        } else if (query.length <= 3) {
            inputRef.current.classList.remove("search-border-radius-focus");
            btnRef.current.classList.remove("search-btn-border-radius-focus");
            resultRef.current.style.display = "none";
        } else {
            resultRef.current.display = "none";
        }
    });

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search any Movie, TV-Show, Celeb"
                className="search-input"
                onChange={e => {
                    changeQuery(e.target.value);
                }}
                ref={inputRef}
            />
            <button
                className="search-btn"
                onClick={() => {
                    inputRef.current.classList.remove(
                        "search-border-radius-focus"
                    );
                    btnRef.current.classList.remove(
                        "search-btn-border-radius-focus"
                    );

                    if (query === null || query === "") {
                        const newLocal = "Enter something!!!";
                        inputRef.current.placeholder = newLocal;
                        return;
                    }
                    resultRef.current.style.display = "none";
                    navigate(`./../search/${query}`);
                }}
                ref={btnRef}
            >
                <svg className="svg-icon-search svg-icon" viewBox="0 0 20 20">
                    <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z" />
                </svg>
            </button>
            <div className="result" ref={resultRef}>
                <ul>
                    {arr.map((val, index) => {
                        return (
                            <li key={index}>
                                <div className="result-card">
                                    <img
                                        className="result-img"
                                        src={sus}
                                        alt="poster"
                                    />
                                    <div className="result-info">
                                        <h5 className="result-text">
                                            Monty Python and the Holy Grail
                                        </h5>
                                        <h5 className="result-text">
                                            Wed Mar 27 2019
                                        </h5>
                                        <h5 className="result-text">
                                            IMDB: 7.1 Rotten Tomatoes: 79%
                                        </h5>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                    <li>
                        <Link
                            to={`./../search/${query}`}
                            className="all-text"
                            onClick={() => {
                                inputRef.current.classList.remove(
                                    "search-border-radius-focus"
                                );
                                btnRef.current.classList.remove(
                                    "search-btn-border-radius-focus"
                                );
                                resultRef.current.style.display = "none";
                            }}
                        >
                            View all
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SearchBox;
