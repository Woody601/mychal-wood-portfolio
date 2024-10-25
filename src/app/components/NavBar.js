"use client";
import { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

export default function NavBar() {
  // State to store the screen width
  const [screenWidth, setScreenWidth] = useState(0);
  const [isToggled, setToggled] = useState(false);

  //If the user switches screen size and has the mobile menu open, it will close that mobile menu down.
  if ([screenWidth] >= 960 && isToggled) {
    setToggled(!isToggled);
  }
  // Function to toggle the class
  const toggleNav = () => {
    // This will only toggle the mobile nav if the screen size is equal to or less than 960px, which is the width the mobile navigation activates on.
    if ([screenWidth] <= 960) {
      setToggled(!isToggled);
    }
  };
  // Function to toggle the class
  const closeNav = () => {
    // This will only toggle the mobile nav if the screen size is equal to or less than 960px, which is the width the mobile navigation activates on.
    if (isToggled) {
      setToggled(!isToggled);
    }
  };

  // Function to update the screen width
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // useEffect hook to add and remove event listeners
  useEffect(() => {
    // Set the initial screen width
    updateScreenWidth();

    // Add event listener to update screen width on resize
    window.addEventListener("resize", updateScreenWidth);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount
  return (
    <>
      <Menu className={isToggled ? "navHolder active" : "navHolder"}>
        <Menu.Item
          name="mw"
          as={Link}
          className="title"
          onClick={closeNav}
          href="/"
        />
        <div className={isToggled ? "bars active" : "bars"} onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <Menu.Menu className="items">
          <Menu.Item name="about" as={Link} href="/about" onClick={toggleNav} />
          <Menu.Item name="work" as={Link} href="/work" onClick={toggleNav} />
          <Menu.Item
            name="resume"
            as={Link}
            href="/resune"
            onClick={toggleNav}
          />
          <Menu.Item
            name="contact"
            as={Link}
            href="/contact"
            onClick={toggleNav}
          />
        </Menu.Menu>
      </Menu>
    </>
  );
}
