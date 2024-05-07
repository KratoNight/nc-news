import { Link } from "react-router-dom";

export default function Header(){
    return (
        <>
          <section>
            <div>
              <nav>
                <Link to="/">
                  <p className="navLinks">Home</p>
                </Link>
                <Link to="/articles">
                  <p className="navLinks">Articles</p>
                </Link>
              </nav>
            </div>
            <div className="Title">
            <h1>NorthCoder's News</h1>
            </div>
          </section>
        </>
      );
    }